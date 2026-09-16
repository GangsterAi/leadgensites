type JetPlaceholderProps = {
  label: string;
  className?: string;
};

/** Decorative SVG/gradient stand-in — no stock photo binaries. */
export function JetPlaceholder({ label, className = "" }: JetPlaceholderProps) {
  return (
    <div
      className={`placeholder-jet relative flex aspect-[16/10] items-end overflow-hidden rounded-lg border border-graphite ${className}`}
      role="img"
      aria-label={label}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 400 250"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2C3138" />
            <stop offset="100%" stopColor="#0A0B0D" />
          </linearGradient>
        </defs>
        <rect width="400" height="250" fill="url(#sky)" />
        <path
          d="M40 160 L180 110 L360 140 L320 155 L200 130 L90 165 Z"
          fill="#8B929A"
          opacity="0.55"
        />
        <circle cx="320" cy="70" r="18" fill="#00B4FF" opacity="0.15" />
      </svg>
      <span className="relative z-10 m-3 rounded bg-void/70 px-2 py-1 text-xs text-steel">
        {label}
      </span>
    </div>
  );
}
