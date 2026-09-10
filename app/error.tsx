"use client";

import Container from "@/components/shared/container";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Container className="pt-16">
      <h1 className="mb-4 mt-0 text-[1.9rem] font-semibold tracking-[-0.03em]">
        Something went wrong
      </h1>
      <p className="mb-6 text-[hsl(var(--ink-muted))]">
        That page did not load as it should have.
      </p>
      <button type="button" onClick={reset} className="label text-[hsl(var(--link))] hover:underline">
        Try again
      </button>
    </Container>
  );
}
