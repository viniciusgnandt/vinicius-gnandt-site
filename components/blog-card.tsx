import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
    >
      <span className="inline-flex w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
        {post.category}
      </span>
      <h3 className="mt-4 text-lg font-semibold leading-snug">{post.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
        <span>
          {formatDate(post.date)} &middot; {post.readTime} de leitura
        </span>
        <span className="inline-flex items-center gap-1 font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
          Ler
          <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}
