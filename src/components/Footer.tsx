import Image from "next/image";
import Link from "next/link";
import { FOOTER_COLUMNS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Image src="/logo.webp" alt="Elyra POS" width={140} height={38} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Aplikasi kasir berbasis cloud untuk mencatat transaksi, mengatur stok, dan membaca laporan usaha — semua dalam satu sistem.
            </p>
            <div className="mt-6 flex gap-3">
              {["Facebook", "Instagram", "X", "YouTube", "TikTok"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold hover:bg-mint hover:text-ink"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      className="text-sm text-white/60 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. Seluruh hak cipta.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white">Syarat dan Ketentuan</a>
            <a href="#" className="hover:text-white">Bahasa Indonesia</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
