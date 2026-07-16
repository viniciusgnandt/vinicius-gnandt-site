import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blog-card";
import { getPostBySlug, getRelatedPosts, posts } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${site.url}/blog/${post.slug}`,
      publishedTime: post.date,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: site.name, url: site.url },
    publisher: { "@type": "Person", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <article className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft size={15} />
              Voltar para o blog
            </Link>

            <p className="mt-8 inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
              {post.category}
            </p>

            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl">{post.title}</h1>

            <p className="mt-4 text-sm text-muted-foreground">
              {formatDate(post.date)} &middot; {post.readTime} de leitura
            </p>

            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{post.intro}</p>

            <div className="mt-8 space-y-8">
              {post.content.map((block, i) => (
                <div key={i}>
                  {block.heading && (
                    <h2 className="font-serif text-xl font-bold sm:text-2xl">{block.heading}</h2>
                  )}
                  <div className="mt-3 space-y-4">
                    {block.paragraphs.map((paragraph, j) => (
                      <p key={j} className="leading-relaxed text-foreground/85">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{post.conclusion}</p>

            <div className="mt-12 rounded-2xl border border-border bg-background-soft p-8 text-center">
              <p className="text-lg font-semibold">Sua empresa enfrenta um desafio parecido?</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Vamos conversar sobre o seu caso específico — sem compromisso.
              </p>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-whatsapp-hover"
              >
                <MessageCircle size={16} />
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-border bg-background-soft px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-content">
              <h2 className="mb-8 text-center font-serif text-2xl font-bold">Continue lendo</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
