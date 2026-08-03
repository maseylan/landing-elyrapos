"use client";

import { useState } from "react";
import { FAQ_TABS } from "@/lib/site";

export default function FaqTabs() {
  // ponytail: lazy init from URL hash instead of setState-in-effect;
  // acceptable hydration swap on deep-link with hash
  const [active, setActive] = useState(() => {
    if (typeof window === "undefined") return FAQ_TABS[0].id;
    const h = window.location.hash.replace("#", "");
    return FAQ_TABS.some((t) => t.id === h) ? h : FAQ_TABS[0].id;
  });

  const tab = FAQ_TABS.find((t) => t.id === active)!;

  const select = (id: string) => {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <aside>
            <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
              {FAQ_TABS.map((t) => (
                <li key={t.id} className="shrink-0">
                  <button
                    onClick={() => select(t.id)}
                    className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-bold whitespace-nowrap lg:whitespace-normal ${
                      active === t.id ? "bg-mint-soft text-brand" : "text-ink hover:bg-mint-soft/50"
                    }`}
                  >
                    {t.title}
                    <svg
                      className={`h-3.5 w-3.5 shrink-0 transition-transform ${active === t.id ? "rotate-90" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {active === t.id && (
                    <ul className="mt-3 hidden border-l-2 border-line pl-4 lg:block">
                      {t.subs.map((s) => (
                        <li key={s.name} className="py-1.5 text-sm text-muted">
                          {s.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </aside>

          <div key={active} className="min-w-0 animate-fade-up">
            {tab.subs.map((sub) => (
              <div key={sub.name} className="mb-10">
                <h2 className="border-b border-line pb-3 text-xl font-extrabold text-brand">
                  {sub.name}
                </h2>
                <div className="mt-5 space-y-6">
                  {sub.items.map((item) => (
                    <div key={item.q}>
                      <h3 className="font-bold text-ink">{item.q}</h3>
                      {item.a.map((p) => (
                        <p key={p} className="mt-2 leading-relaxed text-muted">
                          {p}
                        </p>
                      ))}
                      {"steps" in item && item.steps && (
                        <ol className="mt-3 space-y-1.5 pl-5 text-muted marker:font-bold marker:text-brand list-decimal">
                          {item.steps.map((s) => (
                            <li key={s} className="leading-relaxed">
                              {s}
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
