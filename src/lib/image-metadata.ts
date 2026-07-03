import fs from "fs";
import path from "path";

export type ImageOrientation = "portrait" | "landscape";

export interface ImageMetadata {
  width: number;
  height: number;
  orientation: ImageOrientation;
}

const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

const JPEG_SOF_MARKERS = new Set([
  0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce,
  0xcf,
]);

const WEBP_RIFF_SIGNATURE = Buffer.from([0x52, 0x49, 0x46, 0x46]); // "RIFF"
const WEBP_SIGNATURE = Buffer.from([0x57, 0x45, 0x42, 0x50]); // "WEBP"

const metadataCache = new Map<string, ImageMetadata>();

function isPng(buffer: Buffer): boolean {
  return buffer.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE);
}

function isJpeg(buffer: Buffer): boolean {
  return buffer[0] === 0xff && buffer[1] === 0xd8;
}

function getPngDimensions(buffer: Buffer, filePath: string) {
  if (buffer.length < 24) {
    throw new Error(`Image file is too small to read PNG dimensions: ${filePath}`);
  }

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function getJpegDimensions(buffer: Buffer, filePath: string) {
  let offset = 2;

  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    let marker = buffer[offset + 1];

    while (marker === 0xff) {
      offset += 1;
      marker = buffer[offset + 1];
    }

    if (
      marker === 0x01 ||
      (marker >= 0xd0 && marker <= 0xd9)
    ) {
      offset += 2;
      continue;
    }

    if (offset + 3 >= buffer.length) {
      break;
    }

    const segmentLength = buffer.readUInt16BE(offset + 2);

    if (JPEG_SOF_MARKERS.has(marker)) {
      if (offset + 8 >= buffer.length) {
        break;
      }

      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }

    offset += segmentLength + 2;
  }

  throw new Error(`Could not read JPEG dimensions from image: ${filePath}`);
}

function isWebp(buffer: Buffer): boolean {
  return (
    buffer.length >= 12 &&
    buffer.subarray(0, 4).equals(WEBP_RIFF_SIGNATURE) &&
    buffer.subarray(8, 12).equals(WEBP_SIGNATURE)
  );
}

function getWebpDimensions(buffer: Buffer, filePath: string) {
  let offset = 12;
  while (offset + 8 <= buffer.length) {
    const chunkId = buffer.toString("ascii", offset, offset + 4);
    const chunkSize = buffer.readUInt32LE(offset + 4);

    if (chunkId === "VP8 ") {
      // Lossy VP8: frame tag (1 byte) + sync code (3 bytes: 9d 01 2a) + width (2 LE) + height (2 LE)
      const dataOffset = offset + 8;
      if (dataOffset + 10 > buffer.length) {
        throw new Error(`VP8 chunk too small: ${filePath}`);
      }
      const syncCode = (buffer[dataOffset + 3] << 16) | (buffer[dataOffset + 4] << 8) | buffer[dataOffset + 5];
      if (syncCode !== 0x9d012a) {
        // Fallback: try reading dimensions directly (some encoders skip sync check)
        const width = buffer.readUInt16LE(dataOffset + 6) & 0x3fff;
        const height = buffer.readUInt16LE(dataOffset + 8) & 0x3fff;
        if (width > 0 && height > 0 && width < 16384 && height < 16384) {
          return { width, height };
        }
        throw new Error(`Invalid VP8 frame header in WebP: ${filePath}`);
      }
      const width = buffer.readUInt16LE(dataOffset + 6) & 0x3fff;
      const height = buffer.readUInt16LE(dataOffset + 8) & 0x3fff;
      return { width, height };
    }

    if (chunkId === "VP8L") {
      // Lossless VP8L
      const dataOffset = offset + 8;
      if (buffer[dataOffset] !== 0x2f) {
        throw new Error(`Invalid VP8L frame header in WebP: ${filePath}`);
      }
      const bits = buffer.readUInt32LE(dataOffset + 1);
      const width = (bits & 0x3fff) + 1;
      const height = ((bits >> 14) & 0x3fff) + 1;
      return { width, height };
    }

    if (chunkId === "VP8X") {
      // Extended format
      const dataOffset = offset + 8;
      const width = (buffer.readUInt8(dataOffset + 4) | (buffer.readUInt8(dataOffset + 5) << 8) | (buffer.readUInt8(dataOffset + 6) << 16)) + 1;
      const height = (buffer.readUInt8(dataOffset + 7) | (buffer.readUInt8(dataOffset + 8) << 8) | (buffer.readUInt8(dataOffset + 9) << 16)) + 1;
      return { width, height };
    }

    offset += 8 + chunkSize + (chunkSize % 2);
  }

  throw new Error(`Could not read WebP dimensions from image: ${filePath}`);
}

function getDimensionsFromBuffer(buffer: Buffer, filePath: string) {
  if (isPng(buffer)) return getPngDimensions(buffer, filePath);
  if (isJpeg(buffer)) return getJpegDimensions(buffer, filePath);
  if (isWebp(buffer)) return getWebpDimensions(buffer, filePath);

  throw new Error(
    `Unsupported image format for blog asset "${filePath}". Expected PNG, JPEG, or WebP.`
  );
}

export function getPublicImageMetadata(publicImagePath: string): ImageMetadata {
  if (!publicImagePath.startsWith("/")) {
    throw new Error(
      `Blog image path must start with "/": received "${publicImagePath}"`
    );
  }

  const cachedMetadata = metadataCache.get(publicImagePath);
  if (cachedMetadata) return cachedMetadata;

  const filePath = path.join(
    process.cwd(),
    "public",
    publicImagePath.replace(/^\//, "")
  );

  if (!fs.existsSync(filePath)) {
    return { width: 1200, height: 675, orientation: "landscape" as ImageOrientation };
  }

  const buffer = fs.readFileSync(filePath);
  const { width, height } = getDimensionsFromBuffer(buffer, filePath);

  const metadata: ImageMetadata = {
    width,
    height,
    orientation: width >= height ? "landscape" : "portrait",
  };

  metadataCache.set(publicImagePath, metadata);

  return metadata;
}
