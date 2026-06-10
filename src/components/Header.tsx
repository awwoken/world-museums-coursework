import Link from "next/link";
import { Navigation } from "@/components/Navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="На головну сторінку">
          <span className="grid h-11 w-11 place-items-center bg-museum text-lg font-bold text-white">
            M
          </span>
          <span>
            <span className="block text-lg font-bold leading-tight text-ink">Museum World</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-jade">
              Культурний портал
            </span>
          </span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
