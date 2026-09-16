export const SITE_NAME = "JETCHARTER.ASIA";
export const SITE_URL = "https://jetcharter.asia";
export const SITE_TAGLINE =
  "Asia's independent private jet broker";

/** Visible TBA placeholders until legal entity details are confirmed. */
export const TBA = {
  legalName: "TBA",
  address: "TBA",
  phone: "TBA",
  email: "TBA",
  line: "TBA",
} as const;

export const NAV_LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/fleet", label: "Fleet" },
  { href: "/routes", label: "Routes" },
  { href: "/safety", label: "Safety" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const FLEET_CATEGORIES = [
  {
    id: "vlj",
    name: "Very Light Jet (VLJ)",
    seats: "Typically 4 passengers",
    summary:
      "Efficient short-hop charters across city pairs. Ideal when time matters more than cabin space.",
  },
  {
    id: "light",
    name: "Light Jet",
    seats: "Typically 6–7 passengers",
    summary:
      "A balance of range and comfort for regional Asia itineraries with flexible scheduling.",
  },
  {
    id: "midsize",
    name: "Midsize Jet",
    seats: "Typically 7–9 passengers",
    summary:
      "Stand-up cabins and longer legs — suited to multi-city business travel.",
  },
  {
    id: "super-midsize",
    name: "Super-midsize Jet",
    seats: "Typically 8–10 passengers",
    summary:
      "Extended range with refined cabins for longer Asia–Pacific sectors.",
  },
  {
    id: "heavy",
    name: "Heavy Jet",
    seats: "Typically 10–16 passengers",
    summary:
      "Spacious cabins and intercontinental capability when you need room to work and rest.",
  },
  {
    id: "vip-airliner",
    name: "VIP Airliner",
    seats: "Custom configurations",
    summary:
      "Large-cabin VIP platforms for groups, events, and ultra-long-range missions.",
  },
] as const;

export const ROUTES = [
  { from: "Tokyo", to: "Hong Kong", code: "HND/NRT–HKG" },
  { from: "Bangkok", to: "Phuket", code: "BKK–HKT" },
  { from: "Singapore", to: "Jakarta", code: "SIN–CGK" },
  { from: "Seoul", to: "Tokyo", code: "ICN/GMP–HND/NRT" },
  { from: "Shanghai", to: "Hong Kong", code: "PVG/SHA–HKG" },
  { from: "Manila", to: "Hong Kong", code: "MNL–HKG" },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Tell us the trip",
    body: "Share origin, destination, dates, passengers, and any preferences. A short brief is enough to start.",
  },
  {
    step: 2,
    title: "We source options",
    body: "As an independent broker, we request quotes from licensed operators across Asia — not a single fleet.",
  },
  {
    step: 3,
    title: "Transparent comparison",
    body: "You receive clear options with aircraft type, operator, timing, and inclusions so you can choose with confidence.",
  },
  {
    step: 4,
    title: "Confirm and fly",
    body: "Once you select, we coordinate booking details with the operator and stay reachable around the trip.",
  },
] as const;
