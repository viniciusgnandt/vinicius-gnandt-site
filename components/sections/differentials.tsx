import {
  Award,
  Fingerprint,
  TrendingUp,
  ShieldCheck,
  Gauge,
  HeartHandshake,
  FileCheck,
  LifeBuoy,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const differentials = [
  {
    icon: Award,
    title: "Mais de 10 anos de experiência",
    text: "Uma década resolvendo problemas reais em empresas de diversos segmentos.",
  },
  {
    icon: Fingerprint,
    title: "Projetos sob medida",
    text: "Nada de solução genérica — cada projeto é pensado para a realidade do seu negócio.",
  },
  {
    icon: FileCheck,
    title: "Escopo e prazo combinados antes de começar",
    text: "Você sabe exatamente o que vai receber e quando, por escrito, sem surpresas no meio do caminho.",
  },
  {
    icon: TrendingUp,
    title: "Cresce junto com o seu negócio",
    text: "A solução de hoje continua funcionando bem daqui a 2 ou 5 anos, sem precisar recomeçar do zero.",
  },
  {
    icon: ShieldCheck,
    title: "Seus dados protegidos",
    text: "Boas práticas de segurança em todas as camadas, para proteger você e seus clientes.",
  },
  {
    icon: Gauge,
    title: "Rápido de verdade",
    text: "Nada de tela travando ou demorando para carregar — o tempo da sua equipe importa.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte depois da entrega",
    text: "O projeto não termina quando o sistema vai ao ar — acompanho o uso e ajusto o que for preciso.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento direto comigo",
    text: "Sem call center, sem terceirização — você fala com quem desenvolve o seu sistema.",
  },
];

export function Differentials() {
  return (
    <Section id="diferenciais" className="border-t border-border/60">
      <SectionHeader eyebrow="Diferenciais" title="Por que empresas confiam no meu trabalho" />

      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {differentials.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.04}>
            <div className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft">
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
