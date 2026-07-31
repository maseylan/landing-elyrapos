import type { MetadataRoute } from "next";

// ponytail: landing di home.elyrapos.my.id; override lewat env NEXT_PUBLIC_SITE_URL kalau domain berubah
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://home.elyrapos.my.id";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
