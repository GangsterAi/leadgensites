import Link from "next/link";
import { NAV_LINKS, TBA } from "@/lib/constants";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-graphite bg-charcoal">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <Wordmark className="text-sm" />
          <p className="max-w-xs text-sm leading-relaxed text-steel">
            Independent private jet charter broker for Asia. We do not operate
            aircraft — we work for you.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-mist">
            Explore
          </h2>
          <ul className="space-y-2 text-sm text-steel">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-mist">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-mist">
            Contact
          </h2>
          <ul className="space-y-2 text-sm text-steel">
            <li>
              Legal name: <span className="text-mist">{TBA.legalName}</span>
            </li>
            <li>
              Address: <span className="text-mist">{TBA.address}</span>
            </li>
            <li>
              Phone: <span className="text-mist">{TBA.phone}</span>
            </li>
            <li>
              Email: <span className="text-mist">{TBA.email}</span>
            </li>
            <li>
              LINE: <span className="text-mist">{TBA.line}</span>
            </li>
          </ul>
          <p className="mt-4 text-xs text-steel">
            Entity and contact details are{" "}
            <span className="text-mist">TBA</span> pending confirmation.
          </p>
        </div>
      </div>

      <div className="border-t border-graphite">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-steel sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} JETCHARTER.ASIA. All rights reserved. Charter broker — not
            an aircraft operator.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-mist">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-mist">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
