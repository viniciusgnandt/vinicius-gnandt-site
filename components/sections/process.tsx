import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    number: "01",
    title: "Descoberta",
    text: "Entendo seu negócio, seus processos e onde a tecnologia pode gerar mais impacto. Sem jargão técnico — uma conversa sobre problemas e objetivos.",
  },
  {
    number: "02",
    title: "Planejamento",
    text: "Desenho a solução, defino escopo, prazos e investimento. Você sabe exatamente o que será entregue antes de qualquer linha de código.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    text: "Construo a solução em etapas curtas, com entregas frequentes. Você acompanha a evolução e valida cada avanço.",
  },
  {
    number: "04",
    title: "Implantação",
    text: "Coloco a solução em produção com segurança, treino sua equipe e garanto uma transição tranquila — sem parar a operação.",
  },
  {
    number: "05",
    title: "Suporte",
    text: "Acompanho o uso, faço ajustes e evoluo a solução conforme o negócio cresce. Você não fica sozinho depois da entrega.",
  },
];

export function Process() {
  return (
    <Section id="processo" className="border-t border-border/60">
      <SectionHeader
        eyebrow="Como trabalho"
        title="Um processo claro, do início ao fim"
        description="Você sabe o que está acontecendo em cada etapa — sem surpresas no meio do caminho."
      />

      <ol className="relative mx-auto max-w-3xl">
        {steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.08}>
            <li className="relative flex gap-6 pb-12 last:pb-0">
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-5 top-12 h-[calc(100%-3rem)] w-px bg-border"
                />
              )}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card font-mono text-xs text-accent">
                {step.number}
              </div>
              <div className="pt-1.5">
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
