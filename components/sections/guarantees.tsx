import { CalendarCheck, FileSignature, LifeBuoy, UserCheck } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const guarantees = [
  {
    icon: CalendarCheck,
    title: "Primeira conversa sem compromisso",
    text: "Você me conta o desafio, eu digo com sinceridade se e como posso ajudar — sem custo e sem pressão para fechar.",
  },
  {
    icon: FileSignature,
    title: "Escopo e prazo fechados por escrito",
    text: "Antes de qualquer trabalho começar, você recebe o que será entregue, em quanto tempo e por qual valor — em contrato, não em promessa verbal.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte incluso após a entrega",
    text: "Todo projeto sai com um período de garantia para ajustes. Você não fica na mão assim que o sistema vai ao ar.",
  },
  {
    icon: UserCheck,
    title: "Sem terceirização do seu projeto",
    text: "Quem conversa com você, desenvolve e dá suporte é a mesma pessoa — não uma equipe terceirizada que muda a cada etapa.",
  },
];

export function Guarantees() {
  return (
    <Section id="garantias" className="border-t border-border/60 bg-background-soft">
      <SectionHeader
        eyebrow="Garantias"
        title="O que você pode esperar deste projeto"
        description="Compromissos concretos, pensados para quem nunca contratou um especialista independente e quer segurança antes de decidir."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {guarantees.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="flex h-full gap-4 rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft">
                <item.icon size={18} className="text-accent" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
