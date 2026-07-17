import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como este site trata dados de quem o visita.",
  alternates: { canonical: "/privacidade" },
  robots: { index: false, follow: true },
};

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Privacidade</p>
          <h1 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Política de Privacidade</h1>
          <p className="mt-4 text-sm text-muted-foreground">Última atualização: julho de 2026.</p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/85">
            <p>
              Este site é a página pessoal de {site.name}. Este documento explica, em linguagem
              simples, quais dados são coletados quando você visita o site e para que servem.
            </p>

            <section>
              <h2 className="font-serif text-xl font-bold">Este site não tem formulário nem banco de dados</h2>
              <p className="mt-3">
                Não existe cadastro, login ou formulário que armazene suas informações em um
                servidor. O contato acontece diretamente pelo WhatsApp — ao clicar em qualquer
                botão de WhatsApp, você é levado para a conversa no aplicativo, e essa comunicação
                passa a ser regida pela política de privacidade do próprio WhatsApp/Meta, não por
                este site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold">O que é coletado automaticamente</h2>
              <p className="mt-3">
                Este site usa o Google Analytics e, eventualmente, o Google Ads para entender de
                onde vêm os visitantes e quais páginas geram mais interesse. Essas ferramentas
                coletam dados de navegação de forma automática — como páginas visitadas, tempo de
                permanência, região aproximada e o dispositivo usado — por meio de cookies. Nenhuma
                dessas informações identifica você pessoalmente por padrão.
              </p>
              <p className="mt-3">
                Você pode bloquear esses cookies a qualquer momento nas configurações do seu
                navegador, ou usando extensões de bloqueio de rastreamento, sem que isso afete o
                uso do site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold">Hospedagem</h2>
              <p className="mt-3">
                O site é hospedado em infraestrutura própria. O servidor pode registrar logs
                técnicos padrão de acesso (como endereço IP e data/hora da requisição) por motivos
                de segurança e diagnóstico, com retenção limitada — esses logs não são usados para
                fins comerciais.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold">Seus direitos</h2>
              <p className="mt-3">
                Conforme a Lei Geral de Proteção de Dados (LGPD), você pode solicitar informações
                sobre eventuais dados tratados a seu respeito a qualquer momento pelo e-mail{" "}
                <a href={`mailto:${site.email}`} className="text-accent underline underline-offset-2">
                  {site.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
