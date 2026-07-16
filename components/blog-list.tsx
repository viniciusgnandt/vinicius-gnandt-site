"use client";

import { useState } from "react";
import { BlogCard } from "@/components/blog-card";
import { categories, posts } from "@/lib/blog";
import { cn } from "@/lib/utils";

export function BlogList() {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active ? posts.filter((post) => post.category === active) : posts;

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActive(null)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            active === null
              ? "border-accent bg-accent text-accent-foreground"
              : "border-border text-muted-foreground hover:text-foreground"
          )}
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === category
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
