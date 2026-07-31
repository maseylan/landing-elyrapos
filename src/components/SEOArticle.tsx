"use client";

import { useState } from "react";
import { SEO_ARTICLE } from "@/lib/site";

export default function SEOArticle({ article = SEO_ARTICLE }: { article?: typeof SEO_ARTICLE }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? article.paragraphs : article.paragraphs.slice(0, 1);

  return (
    <section className="border-t border-line bg-mint-soft/50 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <h2 className="text-2xl font-extrabold text-ink">{article.title}</h2>
        <div className="mt-6 space-y-6">
          {visible.map((p) => (
            <article key={p.heading}>
              <h3 className="font-bold text-ink">{p.heading}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
            </article>
          ))}
        </div>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-6 font-bold text-brand hover:text-brand-dark"
        >
          {expanded ? "Tampilkan lebih sedikit" : "Baca lebih banyak"}
        </button>
      </div>
    </section>
  );
}
