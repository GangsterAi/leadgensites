import Link from "next/link";

type WordmarkProps = {
  className?: string;
  href?: string;
};

export function Wordmark({ className = "", href = "/" }: WordmarkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-baseline font-semibold tracking-[0.12em] text-mist ${className}`}
      aria-label="JETCHARTER.ASIA home"
    >
      <span>JETCHARTER</span>
      <span className="text-accent">.ASIA</span>
    </Link>
  );
}
