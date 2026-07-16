import {
  FileSpreadsheet,
  Timer,
  Puzzle,
  Repeat,
  TrendingDown,
  Layers,
  Hand,
  Ban,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const problems = [
  { icon: Hand, title: "Muito trabalho manual", text: "Sua equipe gasta horas em tarefas que poderiam ser automáticas." },
  { icon: FileSpreadsheet, title: "Planilhas para tudo", text: "Informações críticas espalhadas em arquivos que ninguém controla." },
  { icon: Timer, title: "Sistemas lentos", text: "Ferramentas antigas que travam a operação e irritam a equipe." },
  { icon: Layers, title: "Informações espalhadas", text: "Cada setor com seus dados, sem uma visão única do negócio." },
  { icon: Puzzle, title: "Falta de integração", text: "Sistemas que não conversam entre si e exigem digitação duplicada." },
  { icon: Repeat, title: "Processos repetitivos", text: "As mesmas tarefas, todos os dias, consumindo tempo da equipe." },
  { icon: TrendingDown, title: "Custos elevados", text: "Operação cara por depender de retrabalho e ferramentas ineficientes." },
  { icon: Ban, title: "Dificuldade para crescer", text: "A estrutura atual não acompanha o crescimento da empresa." },
];

export function Problems() {
  return (
    <Section id="problemas" className="bg-background-soft">
      <SectionHeader
        eyebrow="Desafios"
        title="Sua empresa enfrenta algum destes desafios?"
        description="A maioria das empresas convive com esses problemas por anos — sem perceber quanto eles custam."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((problem, i) => (
          <Reveal key={problem.title} delay={i * 0.05}>
            <div className="group h-full rounded-xl border border-border bg-card p-6 transition-colors duration-200 hover:border-accent/40">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft">
                <problem.icon size={18} className="text-accent" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-sm font-semibold">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{problem.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 text-center">
        <p className="text-lg font-medium">
          Se você respondeu <span className="text-accent">sim</span> para qualquer um deles, posso ajudar.
        </p>
      </Reveal>
    </Section>
  );
}
