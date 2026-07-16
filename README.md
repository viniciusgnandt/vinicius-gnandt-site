# Vinícius Gnandt — Site pessoal

Landing page premium construída com Next.js 15, TypeScript, Tailwind CSS e Framer Motion.
Design minimalista inspirado em Vercel, Linear e Stripe: preto/branco/cinza com um único tom de destaque (verde esmeralda discreto), dark mode por padrão e animações suaves.

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start        # servir o build
```

## Docker (produção)

Mesma estrutura do site Acsa Carlis: build multi-stage (Node compila o export estático do Next.js,
nginx alpine serve os arquivos), com gzip, cache de assets, headers de segurança e healthcheck.

```bash
# Build e subida via compose (container: viniciusgnandt-site, porta 80 exposta na rede "web")
docker compose up -d --build

# Ou manualmente:
docker build -t viniciusgnandt-site:latest .
docker run -d --name viniciusgnandt-site -p 80:80 viniciusgnandt-site:latest
```

O compose usa `expose: 80` para trabalhar atrás de um reverse proxy (Traefik/nginx-proxy) na rede
`web`. Para acesso direto sem proxy, descomente o bloco `ports` no
[docker-compose.yml](docker-compose.yml) (`HOST_PORT`, padrão 80).

## Antes de publicar (checklist)

1. **WhatsApp** — em [lib/site.ts](lib/site.ts), troque o número em `whatsapp` pelo seu (formato `55DDDNÚMERO`).
2. **Links** — confirme as URLs de `linkedin`, `github` e o domínio em `url` (usado no SEO/sitemap).
3. **Foto** — salve sua foto profissional em `public/foto.jpg` e siga o comentário em
   [components/sections/about.tsx](components/sections/about.tsx) para exibi-la.
4. **Open Graph** — crie uma imagem `public/og.png` (1200×630) com seu nome e headline.
5. **Depoimentos** — os atuais são fictícios e marcados como exemplo. Substitua por reais assim que tiver.
6. **Formulário** — hoje ele abre o cliente de e-mail (`mailto:`). Para envio direto, crie uma rota
   `app/api/contact/route.ts` usando [Resend](https://resend.com) ou conecte um serviço como Formspree,
   e troque o `onSubmit` em [components/sections/contact.tsx](components/sections/contact.tsx).
7. **Logos de tecnologia** — a seção usa wordmarks em texto (estilo logo cloud monocromático).
   Se preferir logos oficiais, baixe os SVGs (ex.: [svgl.app](https://svgl.app)), coloque em `public/logos/`
   e renderize com `next/image` em tom monocromático.

## Estrutura

```
app/
  layout.tsx      → fontes, meta tags, Open Graph, Twitter Card, JSON-LD (Schema.org Person)
  page.tsx        → composição da landing page
  robots.ts       → robots.txt gerado
  sitemap.ts      → sitemap.xml gerado
  globals.css     → tokens de design (CSS variables) para light/dark
components/
  header.tsx, footer.tsx, theme-toggle.tsx
  ui/             → primitivos reutilizáveis (Button, Section, Reveal)
  sections/       → uma pasta por seção da página (hero, problems, services, process,
                    differentials, tech, about, projects, testimonials, faq, contact)
lib/
  site.ts         → dados centralizados do site (nome, links, descrição)
  utils.ts        → helper cn()
```

## Design system

- **Cores** — definidas como CSS variables em `globals.css` (`--background`, `--foreground`,
  `--muted`, `--border`, `--card`, `--accent`). Para mudar o tom de destaque, altere apenas `--accent`.
- **Tipografia** — Inter (texto) e JetBrains Mono (detalhes técnicos), via `next/font` (zero layout shift).
- **Animações** — componente `Reveal` (fade + subida sutil ao entrar na viewport, uma única vez).
  Respeita `prefers-reduced-motion`.
- **Dark mode** — classe `dark` no `<html>`, padrão escuro, toggle no header com persistência em localStorage.

## Performance e SEO

- Fontes self-hosted via `next/font`, imagens via `next/image` (AVIF/WebP).
- Página 100% estática (SSG) — nada de JS desnecessário no servidor.
- Meta tags completas, Open Graph, Twitter Card, canonical, robots e sitemap gerados pelo App Router.
- JSON-LD `Person` no layout. Ao ter serviços formalizados, vale adicionar também `ProfessionalService`.

## Evolução futura

- **Casos reais** — substituir os cards de projeto por estudos de caso com métricas (ex.: "reduziu 30h/mês de trabalho manual").
- **Blog técnico-de-negócio** — artigos curtos sobre automação e cloud para PMEs (ótimo para SEO orgânico).
- **API de contato** — rota `/api/contact` com Resend + notificação no WhatsApp.
- **Analytics** — Vercel Analytics ou Plausible (leve e sem cookies).
- **Agendamento** — link Cal.com no CTA para "agendar uma conversa de 30 min".
- **Página por serviço** — landing pages dedicadas (ex.: `/automacao`) para campanhas de tráfego pago.
