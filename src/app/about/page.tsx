import Link from "next/link";
import { Section } from "@/components/Section";
import { TBA } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "JETCHARTER.ASIA is an independent private jet charter broker for Asia — not an aircraft operator. We work for the client.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Section>
      <p className="text-sm font-medium uppercase tracking-wider text-steel">
        Company
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-mist sm:text-4xl">
        About JETCHARTER.ASIA
      </h1>
      <div className="mt-6 max-w-2xl space-y-4 text-steel leading-relaxed">
        <p>
          We are an independent private jet charter broker focused on Asia. Our
          job is to obtain transparent options from licensed operators and help
          you choose — without steering you toward a single fleet we own or
          operate.
        </p>
        <p>
          That distinction matters. Operators fly the aircraft. Brokers
          represent the client&apos;s interest in comparing availability,
          timing, and commercial terms across the market.
        </p>
        <p>
          Legal entity details for this site are pending confirmation and appear
          as TBA until published.
        </p>
      </div>

      <dl className="mt-10 grid gap-4 sm:grid-cols-2">
        {[
          ["Legal name", TBA.legalName],
          ["Address", TBA.address],
          ["Phone", TBA.phone],
          ["Email", TBA.email],
          ["LINE", TBA.line],
        ].map(([label, value]) => (
          <div key={label} className="card-surface rounded-lg p-4">
            <dt className="text-xs uppercase tracking-wider text-steel">
              {label}
            </dt>
            <dd className="mt-1 text-mist">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10">
        <Link
          href="/contact"
          className="inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-void"
        >
          Contact us
        </Link>
      </div>
    </Section>
  );
}
