import {
  Boxes,
  BarChart3,
  Globe,
  Landmark,
  CloudUpload,
  Headset,
  UtensilsCrossed,
  Scissors,
  Store,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const projects = [
  {
    icon: Boxes,
    title: "Sistema ERP",
    tag: "Gestão",
    text: "Sistema de gestão sob medida que substituiu planilhas e centralizou toda a operação da empresa.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Executivo",
    tag: "Dados",
    text: "Indicadores do negócio em tempo real, reunindo dados de múltiplos sistemas em uma única visão.",
  },
  {
    icon: Globe,
    title: "Portal Corporativo",
    tag: "Web",
    text: "Portal moderno e rápido para comunicação com clientes, com área restrita e autoatendimento.",
  },
  {
    icon: Landmark,
    title: "Automação Financeira",
    tag: "Automação",
    text: "Conciliação, cobrança e emissão de documentos financeiros sem intervenção manual.",
  },
  {
    icon: CloudUpload,
    title: "Migração Cloud",
    tag: "Infraestrutura",
    text: "Migração completa de servidores locais para a nuvem, com redução de custos e alta disponibilidade.",
  },
  {
    icon: Headset,
    title: "Sistema de Atendimento",
    tag: "Operação",
    text: "Central de atendimento com fila, histórico e métricas — organizando todo o relacionamento com clientes.",
  },
  {
    icon: Store,
    title: "PDV para Padaria e Mercado",
    tag: "Pequeno Negócio",
    text: "Ponto de venda simples e rápido, com controle de estoque e caixa — sem mensalidade abusiva de sistema pronto.",
  },
  {
    icon: UtensilsCrossed,
    title: "Cardápio Digital e Pedidos Online",
    tag: "Pequeno Negócio",
    text: "Cardápio digital com pedidos direto para a cozinha, reduzindo erro de anotação e tempo de atendimento.",
  },
  {
    icon: Scissors,
    title: "Agenda Online para Salão e Barbearia",
    tag: "Pequeno Negócio",
    text: "Agendamento online com lembrete automático por WhatsApp, reduzindo faltas e organizando a agenda do dia.",
  },
];

export function Projects() {
  return (
    <Section id="projetos" className="border-t border-border/60">
      <SectionHeader
        eyebrow="Projetos"
        title="Tipos de projeto que desenvolvo"
        description="De negócios locais a empresas de médio porte — exemplos representativos das soluções que entrego."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.05}>
            <div className="group h-full overflow-hidden rounded-xl border border-border bg-card transition-colors duration-200 hover:border-accent/40">
              <div className="flex h-36 items-center justify-center border-b border-border bg-muted/50">
                <project.icon
                  size={32}
                  strokeWidth={1.5}
                  className="text-muted-foreground transition-colors duration-200 group-hover:text-accent"
                  aria-hidden="true"
                />
              </div>
              <div className="p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-accent">{project.tag}</span>
                <h3 className="mt-2 text-base font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
