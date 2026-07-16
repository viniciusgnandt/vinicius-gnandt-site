import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <Section id="sobre" className="border-t border-border/60">
      <SectionHeader eyebrow="Sobre" title="Quem vai desenvolver seu projeto" />

      <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-[280px_1fr]">
        <Reveal>
          <div className="relative mx-auto flex aspect-square w-64 items-center justify-center overflow-hidden rounded-2xl border border-border bg-black md:w-full">
            <Image
              src="/foto.png"
              alt="Foto de Vinícius Gnandt"
              fill
              sizes="(max-width: 768px) 256px, 280px"
              className="object-contain"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Sou <span className="font-medium text-foreground">Vinícius Gnandt</span>, especialista
              em tecnologia com mais de 10 anos de experiência em engenharia de software,
              infraestrutura em nuvem e automação de processos.
            </p>
            <p>
              Ao longo desses anos, trabalhei com desenvolvimento de sistemas, arquitetura de
              software, integrações, DevOps e plataformas como AWS e Oracle Cloud. Esse caminho me
              deu uma visão completa: do código que roda a aplicação à infraestrutura que a mantém
              no ar.
            </p>
            <p>
              Meu diferencial é justamente essa combinação. Não entrego apenas software — entrego a
              solução inteira, funcionando, segura e pronta para crescer.
            </p>
            <p>
              Trabalho de forma próxima e direta. Quem conversa com você no primeiro contato é a
              mesma pessoa que desenha, desenvolve e acompanha o seu projeto até o fim.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
