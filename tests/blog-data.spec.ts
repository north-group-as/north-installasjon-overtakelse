import { expect, test } from "@playwright/test";
import { getPostBySlug } from "../src/lib/blog";

test.describe("Blog loader image metadata", () => {
  test("classifies portrait blog images from local assets", () => {
    const post = getPostBySlug("termografering-el-anlegg") as
      | (Record<string, unknown> & { imageWidth?: number; imageHeight?: number })
      | null;

    expect(post).not.toBeNull();
    expect(post?.imageOrientation).toBe("portrait");
    expect(post?.imageWidth).toBeGreaterThan(0);
    expect(post?.imageHeight).toBeGreaterThan(post?.imageWidth ?? 0);
  });

  test("classifies landscape blog images from local assets", () => {
    const post = getPostBySlug("easee-zaptec-garo-velg-elbillader") as
      | (Record<string, unknown> & { imageWidth?: number; imageHeight?: number })
      | null;

    expect(post).not.toBeNull();
    expect(post?.imageOrientation).toBe("landscape");
    expect(post?.imageWidth).toBeGreaterThan(post?.imageHeight ?? 0);
  });
});
