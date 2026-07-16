import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogList } from "@/components/blog-list";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre automação, cloud, sistemas sob medida, integração e segurança para pequenas e médias empresas.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog — ${site.name}`,
    description:
      "Artigos sobre automação, cloud, sistemas sob medida, integração e segurança para pequenas e médias empresas.",
    url: `${site.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-hero-from via-hero-via to-hero-to px-6 py-20 sm:py-24">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Blog</p>
            <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
              Tecnologia explicada em linguagem de negócio
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Artigos sobre automação, cloud, sistemas sob medida, integração e segurança —
              escritos para quem toma decisão, não para quem programa.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-content">
            <BlogList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
