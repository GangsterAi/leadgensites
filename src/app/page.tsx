import Link from "next/link";
import { JetPlaceholder } from "@/components/JetPlaceholder";
import { QuoteWidget } from "@/components/QuoteWidget";
import { Section } from "@/components/Section";
import { HOW_IT_WORKS_STEPS, ROUTES } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Asia's independent private jet broker",
  description:
    "We don't operate aircraft — we work for you. Transparent quotes across Asia's best operators. 24/7 desk, on-demand, no membership required.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="hero-photo border-b border-graphite" aria-label="Silver long-range business jet touching down on a wet runway">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-steel">
              Private jet charter broker · Asia
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight text-mist sm:text-4xl lg:text-5xl">
              Asia&apos;s independent private jet broker
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
              We don&apos;t operate aircraft — we work for you. Transparent
              quotes across Asia&apos;s best operators.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Highlights">
              {["24/7 desk", "On-demand", "No membership required"].map(
                (chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-graphite bg-charcoal px-3 py-1 text-xs text-mist sm:text-sm"
                  >
                    {chip}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-8 hidden gap-3 sm:flex">
              <a
                href="#quote"
                className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-void"
              >
                Request quote
              </a>
              <Link
                href="/how-it-works"
                className="rounded-md border border-graphite px-5 py-2.5 text-sm text-mist hover:bg-charcoal"
              >
                How it works
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <QuoteWidget compact />
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <JetPlaceholder label="Illustrative cabin — broker access to operator fleets" />
          <div>
            <h2 className="text-2xl font-semibold text-mist">
              Broker access, not a single fleet
            </h2>
            <p className="mt-3 text-steel leading-relaxed">
              As an independent charter broker, we source suitable aircraft from
              licensed operators across the region. You compare options — we do
              not lock you into one operator&apos;s schedule or inventory.
            </p>
            <Link
              href="/fleet"
              className="mt-5 inline-block text-sm text-accent hover:underline"
            >
              Explore aircraft categories →
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-y border-graphite bg-charcoal/40">
        <h2 className="text-2xl font-semibold text-mist">How it works</h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS_STEPS.map((s) => (
            <li key={s.step} className="card-surface rounded-lg p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-steel">
                Step {s.step}
              </span>
              <h3 className="mt-2 font-medium text-mist">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-steel">
          Charter vs fractional — guide coming soon.{" "}
          <Link href="/how-it-works" className="text-accent hover:underline">
            Read the process
          </Link>
        </p>
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-mist">Popular routes</h2>
            <p className="mt-2 text-steel">
              Indicative pricing TBA — request a quote for current availability.
            </p>
          </div>
          <Link href="/routes" className="text-sm text-accent hover:underline">
            All routes →
          </Link>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ROUTES.map((r) => (
            <li
              key={`${r.from}-${r.to}`}
              className="card-surface flex flex-col rounded-lg p-4"
            >
              <span className="font-medium text-mist">
                {r.from}–{r.to}
              </span>
              <span className="mt-1 text-xs text-steel">{r.code}</span>
              <span className="mt-3 text-sm text-steel">
                Indicative price TBA — Request quote
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="lg:hidden">
        <QuoteWidget />
      </Section>
    </>
  );
}
