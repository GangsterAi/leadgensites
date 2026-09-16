"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileStickyCTA() {
  const pathname = usePathname();
  if (pathname === "/contact" || pathname === "/thank-you") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-graphite bg-void/95 p-3 backdrop-blur md:hidden">
      <Link
        href="/contact#quote"
        className="flex w-full items-center justify-center rounded-md bg-accent py-3 text-sm font-semibold text-void"
      >
        Book now
      </Link>
    </div>
  );
}
