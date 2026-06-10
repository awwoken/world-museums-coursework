"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Головна" },
  { href: "/about", label: "Про сайт" },
  { href: "/gallery", label: "Галерея" },
  { href: "/news", label: "Новини" },
  { href: "/contacts", label: "Контакти" }
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      className="flex flex-wrap gap-2 text-sm font-semibold text-slate-700"
      aria-label="Головне меню"
    >
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              isActive
                ? "bg-ink px-3 py-2 text-white!"
                : "px-3 py-2 transition hover:bg-slate-100 hover:text-ink"
            }
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
