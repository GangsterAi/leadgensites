import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const paths = [
  "/",
  "/how-it-works",
  "/fleet",
  "/routes",
  "/safety",
  "/about",
  "/contact",
  "/thank-you",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
