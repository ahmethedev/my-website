import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { getBlogPosts } from "@/app/db/blog";
import Claps from "@/components/claps";
import { CustomMDX } from "@/components/mdx";
import Container from "@/components/shared/container";
import TableOfContents from "@/components/table-of-contents";
import { extractHeadings, formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const { slug } = await params;
  const blog = getBlogPosts().find((blog) => blog.slug === slug);

  if (!blog) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    keywords,
  } = blog.metadata;

  let ogImage =
    new URL(
      "/opengraph-image",
      process.env.NEXT_PUBLIC_APP_URL || "https://abd.im"
    ).toString() + `?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://abd.im/blog/${blog.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogPosts().find((blog) => blog.slug === slug);
  const headings = blog ? extractHeadings(blog.content) : [];

  if (!blog) {
    notFound();
  }

  return (
    <Container className="container animate-enter pt-10">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.metadata.title,
            datePublished: blog.metadata.publishedAt,
            dateModified: blog.metadata.publishedAt,
            description: blog.metadata.summary,
            image: blog.metadata.image
              ? `https://abd.im${blog.metadata.image}`
              : `https://abd.im/og?title=${blog.metadata.title}`,
            url: `https://abd.im/blog/${blog.slug}`,
            author: {
              "@type": "Person",
              name: "Ahmet Dinc",
            },
          }),
        }}
      />
      <h1 className="title mb-3 mt-0 text-[1.9rem] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[2.3rem]">
        {blog.metadata.title}
      </h1>
      <Suspense fallback={<p className="h-6" />}>
        <p className="label m-0 text-[hsl(var(--ink-muted))]">
          {formatDate(blog.metadata.publishedAt)}
          {" · "}
          {blog.readingTime} min read
        </p>
      </Suspense>

      <TableOfContents headings={headings} />

      <article className="prose prose-quoteless w-auto max-w-none font-sans">
        <CustomMDX source={blog.content} />
      </article>

      <p className="mt-14 border-t border-[hsl(var(--rule))] pt-8">
        <Link href="/blog" className="label">
          ← All posts
        </Link>
      </p>

      <Claps key={blog.slug} />
    </Container>
  );
}
