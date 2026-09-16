"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "jetcharter-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  function decline() {
    try {
      localStorage.setItem(STORAGE_KEY, "declined");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-20 left-4 right-4 z-50 mx-auto max-w-lg rounded-lg border border-graphite bg-charcoal p-4 shadow-xl sm:bottom-6 sm:left-6 sm:right-auto md:max-w-md"
    >
      <p className="text-sm leading-relaxed text-mist">
        We use essential cookies to run this site. Optional analytics cookies
        are only used if you accept. See our{" "}
        <a href="/privacy" className="text-accent underline-offset-2 hover:underline">
          Privacy policy
        </a>
        .
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={accept}
          className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-void"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={decline}
          className="rounded-md border border-graphite px-3 py-1.5 text-sm text-mist hover:bg-graphite"
        >
          Essential only
        </button>
      </div>
    </div>
  );
}
