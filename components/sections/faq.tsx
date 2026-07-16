"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Quanto custa um projeto?",
    answer:
      "Depende do escopo. Após a conversa inicial, você recebe uma proposta clara, com escopo, prazo e investimento definidos — sem surpresas. Projetos podem ser divididos em fases para caber no orçamento.",
  },
  {
    question: "Quanto tempo leva para desenvolver um sistema?",
    answer:
      "Projetos menores costumam levar de 4 a 8 semanas. Sistemas mais completos, de 3 a 6 meses. O prazo é definido no planejamento e você acompanha entregas parciais ao longo do caminho.",
  },
  {
    question: "Não entendo de tecnologia. Isso é um problema?",
    answer:
      "Nenhum. Meu papel é justamente traduzir o problema do seu negócio em solução técnica. Toda a comunicação é em linguagem simples, focada em resultados — não em jargões.",
  },
  {
    question: "E depois da entrega? Fico sem suporte?",
    answer:
      "Não. Todo projeto inclui um período de garantia e ofereço planos de suporte e evolução contínua. A maioria dos meus clientes mantém uma parceria de longo prazo.",
  },
  {
    question: "Minha empresa é pequena. Vale a pena investir?",
    answer:
      "Empresas pequenas costumam ser as que mais ganham com automação — cada hora economizada tem impacto direto. É possível começar com um projeto enxuto e evoluir conforme o retorno aparece.",
  },
  {
    question: "Vocês trabalham com o sistema que eu já uso?",
    answer:
      "Sim. Grande parte dos projetos envolve integrar ou evoluir sistemas existentes, não substituí-los. Primeiro entendo o que funciona hoje, depois proponho o caminho de menor risco.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Normalmente por etapas do projeto: uma parte na aprovação e o restante vinculado às entregas. Para suporte contínuo, trabalho com mensalidade. Tudo definido em contrato.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-medium transition-colors hover:text-accent"
      >
        {question}
        <ChevronDown
          size={16}
          className={cn("shrink-0 text-muted-foreground transition-transform duration-200", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-muted-foreground">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <Section id="faq" className="border-t border-border/60">
      <SectionHeader
        eyebrow="FAQ"
        title="Perguntas frequentes"
        description="As dúvidas mais comuns de quem está pensando em investir em tecnologia."
      />

      <Reveal className="mx-auto max-w-2xl">
        <div className="border-t border-border">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
