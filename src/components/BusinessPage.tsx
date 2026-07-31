import Image from "next/image";
import Link from "next/link";
import { SITE, type BusinessPage as BusinessPageData } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import TestimonialSlider from "@/components/TestimonialSlider";
import SEOArticle from "@/components/SEOArticle";

const demoHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappText)}`;

function MainTitle({ text }: { text: string }) {
  return (
    <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
      <h2 className="text-2xl font-extrabold leading-snug text-ink sm:text-3xl lg:text-4xl">{text}</h2>
    </div>
  );
}

function FeatureBlock({ f, i }: { f: BusinessPageData["features"][number]; i: number }) {
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
    >
      <div className="overflow-hidden rounded-2xl shadow-lg lg:[direction:ltr]">
        <Image src={f.image} alt={f.title} width={1280} height={800} className="h-full w-full object-cover" />
      </div>
      <div className="lg:[direction:ltr]">
        <h3 className="text-2xl font-extrabold leading-snug text-ink">{f.title}</h3>
        <p className="mt-4 leading-relaxed text-muted">{f.body}</p>
        {f.link && (
          <Link
            href={f.link.href}
            className="mt-6 inline-flex items-center gap-2 font-bold text-brand hover:text-brand-dark"
          >
            {f.link.label}
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}

function ArticleCards({ page }: { page: BusinessPageData }) {
  return (
    <>
      <MainTitle text="Artikel Tentang Elyra" />
      <div className="mx-auto mt-10 grid max-w-7xl gap-8 px-4 md:grid-cols-3 lg:px-6">
        {page.articles!.map((a) => (
          <a key={a.title} href={a.href} className="group">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={a.image}
                alt={a.title}
                width={1280}
                height={800}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 font-bold leading-snug text-ink group-hover:text-brand">{a.title}</p>
            <p className="mt-2 text-sm font-bold text-brand">
              Pelajari
              <svg className="ml-1 inline h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </p>
          </a>
        ))}
      </div>
    </>
  );
}

export default function BusinessPage({ page }: { page: BusinessPageData }) {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex min-h-svh items-center">
          <Image src={page.heroImage} alt={page.eyebrow} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative mx-auto w-full max-w-7xl px-4 py-24 lg:px-6">
            <p className="text-sm font-bold uppercase tracking-wide text-mint">{page.eyebrow}</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {page.heroTitle}
            </h1>
            <p className="mt-4 max-w-xl leading-relaxed text-white/80">{page.heroDesc}</p>
            <Link
              href={demoHref}
              target="_blank"
              className="mt-8 inline-flex rounded-lg bg-mint px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-white"
            >
              Jadwalkan Demo
            </Link>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16 lg:px-6">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image src={page.statImage} alt={page.mainTitle} width={1280} height={800} className="h-full w-full object-cover" />
            </div>
            <p className="text-3xl font-extrabold leading-snug text-ink lg:text-4xl">{page.statText}</p>
          </div>
        </section>

        <section className="pb-16 lg:pb-24">
          <MainTitle text={page.mainTitle} />
          <div className="mx-auto mt-12 max-w-7xl space-y-20 px-4 lg:px-6">
            {page.features.map((f, i) => (
              <FeatureBlock key={f.title} f={f} i={i} />
            ))}
          </div>
        </section>

        {page.articles && (
          <section className="py-16 lg:py-24">
            <ArticleCards page={page} />
          </section>
        )}

        <section className="pb-16 lg:pb-24">
          <MainTitle text="Sudah Dipercaya Ribuan Bisnis di Indonesia" />
          <div className="mt-10">
            <TestimonialSlider />
          </div>
        </section>

        <SEOArticle article={page.article} />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
