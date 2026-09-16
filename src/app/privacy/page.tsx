import { Section } from "@/components/Section";
import { TBA } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "Privacy policy for jetcharter.asia — how we handle enquiry data and cookies. Legal entity details TBA.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section>
      <h1 className="text-3xl font-semibold text-mist sm:text-4xl">
        Privacy policy
      </h1>
      <p className="mt-2 text-sm text-steel">
        Last updated: 16 September 2026. Legal name and address:{" "}
        <span className="text-mist">{TBA.legalName}</span> /{" "}
        <span className="text-mist">{TBA.address}</span> (TBA).
      </p>

      <div className="prose-dark mt-10 max-w-3xl space-y-8 text-sm leading-relaxed text-steel">
        <section>
          <h2 className="text-lg font-medium text-mist">Who we are</h2>
          <p className="mt-2">
            JETCHARTER.ASIA is an independent private jet charter broker. Formal
            controller details (legal name, registered address, and contact
            email) are TBA pending confirmation and will replace the placeholders
            on this site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-mist">
            What we collect
          </h2>
          <p className="mt-2">
            When you submit a quote request we process the information you
            provide: origin and destination, travel date, passenger count, name,
            email, phone, and preferred contact channel. Server logs may record
            technical data such as IP address and timestamp for security and
            reliability.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-mist">
            Why we process it
          </h2>
          <p className="mt-2">
            We use enquiry data to respond to your request, arrange quotes with
            licensed operators, and follow up via your preferred channel. This is
            based on steps taken at your request prior to a contract, and our
            legitimate interest in operating a brokerage desk.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-mist">Sharing</h2>
          <p className="mt-2">
            Relevant trip details may be shared with licensed operators solely
            to obtain and confirm charter options. We do not sell your personal
            data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-mist">Cookies</h2>
          <p className="mt-2">
            Essential cookies (or local storage) may be used for consent
            preferences and basic site function. Optional analytics cookies are
            only used if you accept via the cookie banner. You may change your
            choice by clearing site data in your browser.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-mist">Retention</h2>
          <p className="mt-2">
            Enquiry records are retained only as long as needed to handle your
            request and meet lawful record-keeping needs. Exact retention
            periods will be published once the legal entity is confirmed.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-mist">Your rights</h2>
          <p className="mt-2">
            Depending on your location you may have rights to access, correct,
            delete, or restrict processing of your personal data. Contact the
            desk at <span className="text-mist">{TBA.email}</span> (TBA) to
            exercise these rights. You may also lodge a complaint with your local
            supervisory authority.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-mist">Updates</h2>
          <p className="mt-2">
            We may update this policy when entity details or processing practices
            change. The date above will be revised accordingly.
          </p>
        </section>
      </div>
    </Section>
  );
}
