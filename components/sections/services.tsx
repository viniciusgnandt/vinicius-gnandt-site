import { Code2, Workflow, Cloud, Cable, Compass } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const services = [
  {
    id: "servico-desenvolvimento",
    icon: Code2,
    title: "Desenvolvimento de Sistemas",
    problem: "Sua operação depende de planilhas ou de um sistema que não acompanha o negócio.",
    solution:
      "Desenvolvo sistemas sob medida — web, rápidos e seguros — que organizam a operação e crescem junto com a empresa.",
  },
  {
    id: "servico-automacao",
    icon: Workflow,
    title: "Automação de Processos",
    problem: "Sua equipe perde horas todos os dias em tarefas repetitivas e retrabalho.",
    solution:
      "Automatizo rotinas manuais para que as pessoas foquem no que gera resultado — com menos erros e mais velocidade.",
  },
  {
    id: "servico-cloud",
    icon: Cloud,
    title: "Migração para Cloud",
    problem: "Servidores locais caros, lentos e com risco real de perda de dados.",
    solution:
      "Levo sua infraestrutura para a nuvem com segurança, reduzindo custos e garantindo disponibilidade e backup.",
  },
  {
    id: "servico-integracao",
    icon: Cable,
    title: "Integração entre Sistemas",
    problem: "ERP, e-commerce, financeiro e planilhas que não conversam entre si.",
    solution:
      "Conecto seus sistemas para que a informação flua automaticamente — sem digitação duplicada e sem divergências.",
  },
  {
    id: "servico-consultoria",
    icon: Compass,
    title: "Consultoria Tecnológica",
    problem: "Você sabe que precisa evoluir, mas não sabe por onde começar nem em que investir.",
    solution:
      "Analiso sua operação, identifico gargalos e desenho um plano de tecnologia claro, priorizado e realista.",
  },
];

export function Services() {
  return (
    <Section id="servicos" className="border-t border-border/60">
      <SectionHeader
        eyebrow="Serviços"
        title="Soluções, não apenas software"
        description="Cada serviço nasce de um problema real de negócio — e termina em resultado mensurável."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.06}>
            <div
              id={service.id}
              className="group flex h-full scroll-mt-24 flex-col rounded-xl border border-border bg-card p-8 transition-all duration-200 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft">
                <service.icon size={18} className="text-accent" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">O problema:</span> {service.problem}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">Como resolvo:</span> {service.solution}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
