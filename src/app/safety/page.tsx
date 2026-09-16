import Link from "next/link";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Safety",
  description:
    "We only arrange charters with licensed AOC operators and prioritise IS-BAO, Wyvern, and ARGUS where available. Confirm payment options with the desk.",
  path: "/safety",
});

export default function SafetyPage() {
  return (
    <Section>
      <p className="text-sm font-medium uppercase tracking-wider text-steel">
        Standards
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-mist sm:text-4xl">
        Safety &amp; operator standards
      </h1>
      <p className="mt-4 max-w-2xl text-steel leading-relaxed">
        JETCHARTER.ASIA is an independent charter broker. We do not operate
        aircraft and we do not hold air operator certificates ourselves. Safety
        responsibility for flight operations sits with the licensed operator you
        fly with.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="card-surface rounded-xl p-6">
          <h2 className="text-lg font-medium text-mist">
            Licensed AOC operators only
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            We arrange charters exclusively with operators that hold a valid Air
            Operator Certificate (AOC) — or the equivalent national approval —
            for the intended operation.
          </p>
        </article>

        <article className="card-surface rounded-xl p-6">
          <h2 className="text-lg font-medium text-mist">
            Third-party audits where available
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            Where available, we prioritise operators that participate in
            recognised programmes such as IS-BAO, Wyvern, and ARGUS. These are
            operator credentials — not certifications held by jetcharter.asia.
          </p>
        </article>

        <article className="card-surface rounded-xl p-6 lg:col-span-2">
          <h2 className="text-lg font-medium text-mist">Payments</h2>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            Payment arrangements depend on the operator and the booking. Please
            confirm payment options with the desk for your specific trip. We do
            not claim a segregated client account on this site at this time.
          </p>
        </article>
      </div>

      <div className="mt-10">
        <Link
          href="/contact#quote"
          className="inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-void"
        >
          Speak to the desk
        </Link>
      </div>
    </Section>
  );
}
