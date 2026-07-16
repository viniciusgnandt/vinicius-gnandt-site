"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#processo", label: "Como trabalho" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/blog", label: "Blog" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#faq", label: "Dúvidas" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span
            role="img"
            aria-label="Vinícius Gnandt"
            className="h-10 w-10 shrink-0 rounded-lg bg-[#07080a] bg-no-repeat sm:h-11 sm:w-11"
            style={{
              backgroundImage: "url(/logo.png)",
              backgroundSize: "456% auto",
              backgroundPosition: "13% 49%",
            }}
          />
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold tracking-tight">
              Vinícius <span className="text-accent">Gnandt</span>
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">
              Software &bull; Cloud &bull; Automação
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-foreground/80 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-whatsapp-hover md:inline-flex"
          >
            <MessageCircle size={16} />
            Entrar em contato
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-content flex-col px-4 py-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border/60 px-2 py-3 font-medium text-foreground transition-colors last:border-b-0 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="my-3 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle size={16} />
              Entrar em contato
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
