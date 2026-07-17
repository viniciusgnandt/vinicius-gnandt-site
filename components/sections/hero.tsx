"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, CalendarCheck, MessageCircle, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/gtag";

const trustPoints = [
  { icon: BadgeCheck, text: "+10 anos de experiência" },
  { icon: CalendarCheck, text: "Primeira conversa sem compromisso" },
  { icon: ShieldCheck, text: "Atendimento direto, sem intermediários" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-hero-from via-hero-via to-hero-to">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto grid max-w-content items-center gap-12 px-6 pb-24 pt-16 sm:pb-28 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="text-center lg:text-left">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-3 text-accent"
          >
            <span className="h-px w-10 bg-accent/50" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em]">
              Software &bull; Cloud &bull; Automação
            </span>
            <span className="h-px w-10 bg-accent/50 lg:hidden" />
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl"
          >
            Transformo processos manuais em soluções digitais escaláveis
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-8 mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0"
          >
            Ajudo empresas a eliminar retrabalho, integrar sistemas e crescer com segurança —
            unindo desenvolvimento de software, automação e infraestrutura em nuvem em soluções
            feitas para o seu negócio.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-start"
          >
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("hero")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-whatsapp-hover hover:shadow-xl"
            >
              <MessageCircle size={18} />
              Conversar no WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70 lg:justify-start"
          >
            {trustPoints.map((point) => (
              <div key={point.text} className="flex items-center gap-2">
                <point.icon size={15} className="text-accent" />
                {point.text}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto w-64 sm:w-80 lg:mx-0 lg:w-full lg:max-w-md"
        >
          <div className="absolute -inset-3 -rotate-3 rounded-3xl bg-hero-from" aria-hidden="true" />
          <div className="absolute -inset-1 rotate-2 rounded-3xl bg-accent/40" aria-hidden="true" />
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl ring-2 ring-accent/30">
            <Image
              src="/hero.webp"
              alt="Vinícius Gnandt"
              fill
              sizes="(max-width: 1024px) 320px, 420px"
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
