import { QuoteWidget } from "@/components/QuoteWidget";
import { Section } from "@/components/Section";
import { TBA } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Request a private jet charter quote across Asia. 24/7 desk, on-demand, no membership required.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-steel">
            Desk
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-mist sm:text-4xl">
            Contact
          </h1>
          <p className="mt-4 text-steel leading-relaxed">
            Share your trip details and preferred channel. We will follow up
            with options from licensed operators. No membership required.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-steel">
            <li>
              Phone: <span className="text-mist">{TBA.phone}</span>
            </li>
            <li>
              Email: <span className="text-mist">{TBA.email}</span>
            </li>
            <li>
              LINE: <span className="text-mist">{TBA.line}</span>
            </li>
            <li>
              Address: <span className="text-mist">{TBA.address}</span>
            </li>
          </ul>
        </div>
        <QuoteWidget />
      </div>
    </Section>
  );
}
