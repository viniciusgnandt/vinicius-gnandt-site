import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center px-6 py-24">
        <div className="mx-auto max-w-md text-center">
          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
            Erro 404
          </p>
          <h1 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
            Essa página não existe
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            O link pode estar quebrado ou a página pode ter mudado de endereço. Volte para a
            página inicial ou fale comigo diretamente.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Voltar para a home
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-hover"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
