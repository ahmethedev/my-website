"use client";

import { cn } from "@/lib/utils";
import type { Blog } from "@/types/blog";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BlogList } from "./blog-list";

interface PaginationProps {
  allBlogs: Blog[];
  postsPerPage?: number;
}

export default function Pagination({
  allBlogs,
  postsPerPage = 8,
}: PaginationProps) {
  const router = useRouter();
  const searchParamsHook = useSearchParams();

  const { currentPage, totalPages, paginatedBlogs } = useMemo(() => {
    const searchParams = searchParamsHook ?? new URLSearchParams();
    const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);
    const totalPages = Math.max(1, Math.ceil(allBlogs.length / postsPerPage));

    const paginatedBlogs = [...allBlogs]
      .sort(
        (a, b) =>
          new Date(b.metadata.publishedAt).getTime() -
          new Date(a.metadata.publishedAt).getTime()
      )
      .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    return { currentPage, totalPages, paginatedBlogs };
  }, [allBlogs, searchParamsHook, postsPerPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    router.push(page === 1 ? "/blog" : `/blog?page=${page}`);
  };

  if (totalPages <= 1) {
    return <BlogList blogs={paginatedBlogs} currentPage={currentPage} />;
  }

  return (
    <>
      <BlogList blogs={paginatedBlogs} currentPage={currentPage} />
      <nav
        aria-label="Blog pagination"
        className="mt-12 flex items-center justify-center gap-6 border-t border-[hsl(var(--rule))] pt-8"
      >
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ← Newer
        </PaginationButton>

        <span className="label text-[hsl(var(--ink-muted))]">
          Page {currentPage} of {totalPages}
        </span>

        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Older →
        </PaginationButton>
      </nav>
    </>
  );
}

function PaginationButton({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "label transition-colors",
        disabled
          ? "cursor-default text-[hsl(var(--rule))]"
          : "text-[hsl(var(--link))] hover:underline"
      )}
    >
      {children}
    </button>
  );
}
