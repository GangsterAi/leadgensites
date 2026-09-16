import Link from "next/link";
import { JetPlaceholder } from "@/components/JetPlaceholder";
import { Section } from "@/components/Section";
import { FLEET_CATEGORIES } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Fleet categories",
  description:
    "Broker access to VLJ, light, midsize, super-midsize, heavy, and VIP airliner categories across Asia's licensed operators.",
  path: "/fleet",
});

export default function FleetPage() {
  return (
    <Section>
      <p className="text-sm font-medium uppercase tracking-wider text-steel">
        Aircraft
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-mist sm:text-4xl">
        Fleet categories
      </h1>
      <p className="mt-4 max-w-2xl text-steel leading-relaxed">
        We do not own or operate these aircraft. As a broker we arrange access
        to suitable types from licensed operators, matched to your route,
        timing, and passenger count.
      </p>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {FLEET_CATEGORIES.map((cat) => (
          <li key={cat.id} className="card-surface overflow-hidden rounded-xl">
            <JetPlaceholder label={`${cat.name} — illustrative placeholder`} />
            <div className="p-5">
              <h2 className="text-lg font-medium text-mist">{cat.name}</h2>
              <p className="mt-1 text-xs text-steel">{cat.seats}</p>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                {cat.summary}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-steel">
        Availability varies by date and region.{" "}
        <Link href="/contact#quote" className="text-accent hover:underline">
          Request a quote
        </Link>{" "}
        for current options.
      </p>
    </Section>
  );
}
