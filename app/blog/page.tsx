import Pagination from "@/components/pagination";
import Container from "@/components/shared/container";
import type { Metadata } from "next";
import { Suspense } from "react";
import { getBlogPosts } from "../db/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on engineering, data infrastructure, machine learning and markets.",
};

export default function Blog() {
  const allBlogs = getBlogPosts();

  return (
    <Container className="container animate-enter pt-10">
      <h1 className="mb-10 mt-0 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[2.6rem]">
        Blog
      </h1>
      <Suspense
        fallback={<p className="text-[hsl(var(--ink-muted))]">Loading…</p>}
      >
        <Pagination allBlogs={allBlogs} />
      </Suspense>
    </Container>
  );
}
