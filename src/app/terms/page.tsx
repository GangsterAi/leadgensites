import { Section } from "@/components/Section";
import { TBA } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of use",
  description:
    "Terms of use for jetcharter.asia. Brokerage information site — not an aircraft operator. Legal entity TBA.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section>
      <h1 className="text-3xl font-semibold text-mist sm:text-4xl">
        Terms of use
      </h1>
      <p className="mt-2 text-sm text-steel">
        Last updated: 16 September 2026. Legal name / address:{" "}
        <span className="text-mist">{TBA.legalName}</span> /{" "}
        <span className="text-mist">{TBA.address}</span> (TBA).
      </p>

      <div className="mt-10 max-w-3xl space-y-8 text-sm leading-relaxed text-steel">
        <section>
          <h2 className="text-lg font-medium text-mist">Nature of service</h2>
          <p className="mt-2">
            JETCHARTER.ASIA provides an independent private jet charter
            brokerage introduction service. We do not operate aircraft, do not
            hold out as an air carrier, and do not guarantee specific aircraft
            availability until confirmed by a licensed operator.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-mist">Quotes</h2>
          <p className="mt-2">
            Quotes and route examples on this site are indicative only.
            &quot;TBA&quot; means pricing or details are not yet published.
            Binding terms are those agreed in writing for a specific charter
            with the relevant operator and, where applicable, our brokerage
            engagement terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-mist">Website use</h2>
          <p className="mt-2">
            You agree not to misuse this website, attempt unauthorised access,
            or submit false or fraudulent enquiry information. Content is
            provided for general information in British English and may change
            without notice.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-mist">Liability</h2>
          <p className="mt-2">
            To the fullest extent permitted by law, we are not liable for
            indirect or consequential losses arising from use of this site or
            reliance on unpublished TBA details. Flight operations, safety, and
            carriage are the responsibility of the licensed operator.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-mist">Governing law</h2>
          <p className="mt-2">
            Governing law and jurisdiction will be stated once the operating
            legal entity and registered address (currently TBA) are confirmed.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-mist">Contact</h2>
          <p className="mt-2">
            Questions about these terms: phone{" "}
            <span className="text-mist">{TBA.phone}</span>, email{" "}
            <span className="text-mist">{TBA.email}</span>, LINE{" "}
            <span className="text-mist">{TBA.line}</span> (all TBA).
          </p>
        </section>
      </div>
    </Section>
  );
}
