import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <Section id="sobre" className="border-t border-border/60">
      <SectionHeader eyebrow="Sobre" title="Quem vai desenvolver seu projeto" />

      <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-[340px_1fr]">
        <Reveal>
          <div className="relative mx-auto w-80 md:w-full">
            <div className="absolute -inset-3 -rotate-3 rounded-3xl bg-hero-from" aria-hidden="true" />
            <div className="absolute -inset-1 rotate-2 rounded-3xl bg-accent/30" aria-hidden="true" />
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-xl ring-2 ring-border">
              <Image
                src="/foto.webp"
                alt="Foto de Vinícius Gnandt"
                fill
                sizes="(max-width: 768px) 320px, 340px"
                className="object-cover"
                priority
              />
            </div>
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
