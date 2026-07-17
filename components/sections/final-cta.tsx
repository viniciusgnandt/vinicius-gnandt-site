"use client";

import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/gtag";

export function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden bg-gradient-to-br from-hero-from via-hero-via to-hero-to px-6 py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <Reveal className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          Vamos conversar sobre o seu projeto?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          Conte o desafio que sua empresa enfrenta hoje. Em uma conversa rápida e sem compromisso
          no WhatsApp, eu mostro o caminho — e você decide se faz sentido seguir.
        </p>
        <p className="mt-2 text-sm text-white/60">Respondo pessoalmente, normalmente em até um dia útil.</p>

        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("final_cta")}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-whatsapp-hover hover:shadow-xl"
        >
          <MessageCircle size={18} />
          Conversar no WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
