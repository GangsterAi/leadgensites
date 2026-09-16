import { NextRequest, NextResponse } from "next/server";

type QuoteBody = {
  from?: unknown;
  to?: unknown;
  date?: unknown;
  passengers?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  preferredChannel?: unknown;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(request: NextRequest) {
  let body: QuoteBody;

  try {
    body = (await request.json()) as QuoteBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const from = isNonEmptyString(body.from) ? body.from.trim() : "";
  const to = isNonEmptyString(body.to) ? body.to.trim() : "";
  const date = isNonEmptyString(body.date) ? body.date.trim() : "";
  const name = isNonEmptyString(body.name) ? body.name.trim() : "";
  const email = isNonEmptyString(body.email) ? body.email.trim() : "";
  const phone = isNonEmptyString(body.phone) ? body.phone.trim() : "";
  const preferredChannel = isNonEmptyString(body.preferredChannel)
    ? body.preferredChannel.trim()
    : "email";

  const passengers =
    typeof body.passengers === "number"
      ? body.passengers
      : typeof body.passengers === "string"
        ? Number(body.passengers)
        : NaN;

  if (!from || !to || !date || !name || !email || !phone) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!Number.isFinite(passengers) || passengers < 1 || passengers > 50) {
    return NextResponse.json(
      { error: "Passengers must be between 1 and 50." },
      { status: 400 },
    );
  }

  const allowedChannels = new Set(["email", "phone", "whatsapp", "line"]);
  if (!allowedChannels.has(preferredChannel.toLowerCase())) {
    return NextResponse.json(
      { error: "Invalid preferred channel." },
      { status: 400 },
    );
  }

  // Server-side log for desk follow-up (no external CRM yet).
  console.log("[quote]", {
    receivedAt: new Date().toISOString(),
    from,
    to,
    date,
    passengers,
    name,
    email,
    phone,
    preferredChannel: preferredChannel.toLowerCase(),
  });

  return NextResponse.json({ success: true });
}
