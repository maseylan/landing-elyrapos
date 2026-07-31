import type { Metadata } from "next";
import BusinessPage from "@/components/BusinessPage";
import { BUSINESS_PAGES } from "@/lib/site";

const page = BUSINESS_PAGES.find((p) => p.slug === "kedai-kopi")!;

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
};

export default function KedaiKopiPage() {
  return <BusinessPage page={page} />;
}
