import type { Blog } from "@/types/blog";
import Link from "next/link";

export const BlogCard = ({ blog }: { blog: Blog }) => {
  const published = new Date(`${blog.metadata.publishedAt}T00:00:00`);

  return (
    <article className="py-7">
      <h2 className="mb-2 mt-0 text-[1.25rem] tracking-[-0.02em]">
        <Link href={`/blog/${blog.slug}`} className="text-foreground">
          {blog.metadata.title}
        </Link>
      </h2>
      <p className="label m-0 text-[hsl(var(--ink-muted))]">
        <time dateTime={blog.metadata.publishedAt}>
          {published.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        {" · "}
        {blog.readingTime} min read
      </p>
      {blog.metadata.summary && (
        <p className="mb-0 mt-3 max-w-[62ch] text-[hsl(var(--ink-muted))]">
          {blog.metadata.summary}
        </p>
      )}
    </article>
  );
};
