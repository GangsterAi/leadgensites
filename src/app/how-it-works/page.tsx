import Link from "next/link";
import { Section } from "@/components/Section";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "How it works",
  description:
    "Four clear steps from trip brief to confirmed charter. Independent broker process for private jet travel across Asia.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <Section>
      <p className="text-sm font-medium uppercase tracking-wider text-steel">
        Process
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-mist sm:text-4xl">
        How it works
      </h1>
      <p className="mt-4 max-w-2xl text-steel leading-relaxed">
        We are an independent charter broker. We do not operate aircraft. Our
        role is to obtain and compare options from licensed operators so you can
        choose on merit — timing, aircraft, and value.
      </p>

      <ol className="mt-12 space-y-8">
        {HOW_IT_WORKS_STEPS.map((s) => (
          <li
            key={s.step}
            className="card-surface flex gap-5 rounded-xl p-6 sm:gap-8"
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-graphite text-sm font-semibold text-mist"
              aria-hidden
            >
              {s.step}
            </span>
            <div>
              <h2 className="text-xl font-medium text-mist">{s.title}</h2>
              <p className="mt-2 text-steel leading-relaxed">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <aside className="mt-12 rounded-xl border border-dashed border-graphite bg-charcoal/50 p-6">
        <h2 className="text-lg font-medium text-mist">
          Charter vs fractional
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-steel">
          Guide coming soon. For now, on-demand charter keeps you free of
          long-term commitments — request a quote when you need to fly.
        </p>
      </aside>

      <div className="mt-10">
        <Link
          href="/contact#quote"
          className="inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-void"
        >
          Request a quote
        </Link>
      </div>
    </Section>
  );
}
