import Link from "next/link";
import { Section } from "@/components/Section";
import { ROUTES } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Routes",
  description:
    "Popular Asia private jet charter city pairs including Tokyo–Hong Kong, Bangkok–Phuket, and Singapore–Jakarta. Indicative prices TBA.",
  path: "/routes",
});

export default function RoutesPage() {
  return (
    <Section>
      <p className="text-sm font-medium uppercase tracking-wider text-steel">
        Destinations
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-mist sm:text-4xl">
        Popular routes
      </h1>
      <p className="mt-4 max-w-2xl text-steel leading-relaxed">
        These city pairs are frequently requested. Pricing depends on aircraft
        category, empty-leg opportunities, timing, and operator. We publish no
        fixed fares here — ask the desk for a current quote.
      </p>

      <div className="mt-10 overflow-x-auto rounded-xl border border-graphite">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-charcoal text-steel">
            <tr>
              <th className="px-4 py-3 font-medium">Route</th>
              <th className="px-4 py-3 font-medium">Airports</th>
              <th className="px-4 py-3 font-medium">Indicative price</th>
            </tr>
          </thead>
          <tbody>
            {ROUTES.map((r) => (
              <tr
                key={`${r.from}-${r.to}`}
                className="border-t border-graphite"
              >
                <td className="px-4 py-3 text-mist">
                  {r.from}–{r.to}
                </td>
                <td className="px-4 py-3 text-steel">{r.code}</td>
                <td className="px-4 py-3 text-steel">
                  Indicative price TBA — Request quote
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10">
        <Link
          href="/contact#quote"
          className="inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-void"
        >
          Request quote
        </Link>
      </div>
    </Section>
  );
}
