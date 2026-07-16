"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, Send } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  email: z.string().email("Informe um e-mail válido"),
  company: z.string().min(2, "Informe o nome da empresa"),
  message: z.string().min(10, "Descreva brevemente o que você precisa"),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 transition-colors focus:border-accent focus:outline-none";

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  function onSubmit(data: FormData) {
    // Troque por uma chamada a /api/contact (Resend, Formspree etc.) quando tiver backend.
    const subject = encodeURIComponent(`Orçamento — ${data.company}`);
    const body = encodeURIComponent(
      `Nome: ${data.name}\nEmpresa: ${data.company}\nE-mail: ${data.email}\n\n${data.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <Section id="contato" className="border-t border-border/60">
      <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Contato</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Vamos conversar sobre seu projeto?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Conte o desafio que sua empresa enfrenta hoje. Em uma conversa rápida e sem
              compromisso, eu mostro o caminho — e você decide se faz sentido seguir.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Respondo pessoalmente, normalmente em até um dia útil.
            </p>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium transition-colors hover:bg-muted"
            >
              <MessageCircle size={16} />
              Prefere WhatsApp? Clique aqui
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Nome
              </label>
              <input id="name" placeholder="Seu nome" className={inputClass} {...register("name")} />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="voce@empresa.com.br"
                className={inputClass}
                {...register("email")}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
                Empresa
              </label>
              <input id="company" placeholder="Nome da empresa" className={inputClass} {...register("company")} />
              {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Como posso ajudar?
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Descreva o desafio ou o projeto que você tem em mente"
                className={cn(inputClass, "resize-none")}
                {...register("message")}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-foreground text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              <Send size={15} />
              Solicitar orçamento
            </button>

            {isSubmitSuccessful && (
              <p className="text-center text-sm text-accent">
                Obrigado! Seu cliente de e-mail foi aberto para enviar a mensagem.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
