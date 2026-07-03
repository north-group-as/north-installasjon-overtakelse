interface MountainDividerProps {
  color?: string;
  flip?: boolean;
  className?: string;
}

export default function MountainDivider({
  color = "currentColor",
  flip = false,
  className = "",
}: MountainDividerProps) {
  return (
    <div
      className={`w-full leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120L1440 120L1440 80L1320 55L1240 70L1160 40L1080 60L1000 25L920 50L840 15L760 45L680 10L600 35L520 20L440 50L360 30L280 55L200 35L120 60L60 40L0 65Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
