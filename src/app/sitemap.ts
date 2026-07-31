import type { MetadataRoute } from "next";
import { BUSINESS_PAGES } from "@/lib/site";

// ponytail: landing di home.elyrapos.my.id; override lewat env NEXT_PUBLIC_SITE_URL kalau domain berubah
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://home.elyrapos.my.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/pricing", "/faq", ...BUSINESS_PAGES.map((p) => `/${p.slug}`)];
  return paths.map((path, i) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: i === 0 ? 1 : 0.8,
  }));
}
