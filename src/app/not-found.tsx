import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested could not be found.",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="text-sm font-medium text-accent">404</p>
      <h1 className="mt-2 text-3xl font-semibold text-mist sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-steel">
        That URL does not exist on jetcharter.asia. Return home or request a
        charter quote.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-md border border-graphite px-4 py-2 text-sm text-mist hover:bg-charcoal"
        >
          Home
        </Link>
        <Link
          href="/contact#quote"
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-void"
        >
          Request quote
        </Link>
      </div>
    </div>
  );
}
