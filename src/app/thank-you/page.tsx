import Link from "next/link";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Thank you",
  description:
    "Your quote request has been received. The desk will follow up shortly.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <Section>
      <p className="text-sm font-medium text-accent">Request received</p>
      <h1 className="mt-2 text-3xl font-semibold text-mist sm:text-4xl">
        Thank you
      </h1>
      <p className="mt-4 max-w-xl text-steel leading-relaxed">
        Your quote request has been submitted. Our desk will review the details
        and respond via your preferred channel. If your plans change, simply
        send another request.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-md border border-graphite px-4 py-2 text-sm text-mist hover:bg-charcoal"
        >
          Back home
        </Link>
        <Link
          href="/how-it-works"
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-void"
        >
          How it works
        </Link>
      </div>
    </Section>
  );
}
