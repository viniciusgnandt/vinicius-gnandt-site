import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: site.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: site.github, label: "GitHub", icon: Github },
  { href: `mailto:${site.email}`, label: "E-mail", icon: Mail },
  { href: site.whatsapp, label: "WhatsApp", icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-12">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="text-sm font-semibold">
            Vinícius <span className="text-accent">Gnandt</span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Tecnologia que resolve problemas de negócio.
          </p>
        </div>

        <Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-accent">
          Blog
        </Link>

        <nav aria-label="Redes sociais" className="flex items-center gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <link.icon size={16} />
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-8 flex max-w-content flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Vinícius Gnandt. Todos os direitos reservados.</p>
        <Link href="/privacidade" className="transition-colors hover:text-accent">
          Política de Privacidade
        </Link>
      </div>
    </footer>
  );
}
