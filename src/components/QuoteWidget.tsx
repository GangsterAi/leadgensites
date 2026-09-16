"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type FormState = {
  from: string;
  to: string;
  date: string;
  passengers: string;
  name: string;
  email: string;
  phone: string;
  preferredChannel: string;
};

const initial: FormState = {
  from: "",
  to: "",
  date: "",
  passengers: "2",
  name: "",
  email: "",
  phone: "",
  preferredChannel: "email",
};

type QuoteWidgetProps = {
  id?: string;
  compact?: boolean;
  className?: string;
};

export function QuoteWidget({
  id = "quote",
  compact = false,
  className = "",
}: QuoteWidgetProps) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          passengers: Number(form.passengers),
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        success?: boolean;
      };

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      router.push("/thank-you");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setLoading(false);
    }
  }

  const field =
    "w-full rounded-md border border-graphite bg-void px-3 py-2 text-sm text-mist placeholder:text-steel/70";

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className={`card-surface rounded-xl p-5 sm:p-6 ${className}`}
      noValidate
    >
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-mist">Request a quote</h2>
        <p className="mt-1 text-sm text-steel">
          Independent broker desk — no membership required.
        </p>
      </div>

      <div className={`grid gap-3 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2"}`}>
        <label className="block text-sm">
          <span className="mb-1 block text-steel">From</span>
          <input
            required
            name="from"
            autoComplete="off"
            className={field}
            value={form.from}
            onChange={(e) => update("from", e.target.value)}
            placeholder="e.g. Bangkok"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-steel">To</span>
          <input
            required
            name="to"
            autoComplete="off"
            className={field}
            value={form.to}
            onChange={(e) => update("to", e.target.value)}
            placeholder="e.g. Hong Kong"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-steel">Date</span>
          <input
            required
            type="date"
            name="date"
            className={field}
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-steel">Passengers</span>
          <input
            required
            type="number"
            min={1}
            max={50}
            name="passengers"
            className={field}
            value={form.passengers}
            onChange={(e) => update("passengers", e.target.value)}
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="mb-1 block text-steel">Name</span>
          <input
            required
            name="name"
            autoComplete="name"
            className={field}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-steel">Email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className={field}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-steel">Phone</span>
          <input
            required
            type="tel"
            name="phone"
            autoComplete="tel"
            className={field}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="mb-1 block text-steel">Preferred channel</span>
          <select
            name="preferredChannel"
            className={field}
            value={form.preferredChannel}
            onChange={(e) => update("preferredChannel", e.target.value)}
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="line">LINE</option>
          </select>
        </label>
      </div>

      {error && (
        <p className="mt-3 rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full rounded-md bg-accent py-2.5 text-sm font-semibold text-void transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending…" : "Get quote"}
      </button>

      <p className="mt-3 text-xs leading-relaxed text-steel">
        We work for you as a broker. Quotes are indicative until confirmed with
        a licensed operator.
      </p>
    </form>
  );
}
