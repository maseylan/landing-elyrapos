import type { Metadata } from "next";
import BusinessPage from "@/components/BusinessPage";
import { BUSINESS_PAGES } from "@/lib/site";

const page = BUSINESS_PAGES.find((p) => p.slug === "restoran")!;

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
};

export default function RestoranPage() {
  return <BusinessPage page={page} />;
}
