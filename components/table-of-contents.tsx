"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface TableOfContentsProps {
  headings: { title: string; id: string }[];
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (headings.length === 0) {
    return null;
  }

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-10">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="label flex items-center gap-2 uppercase tracking-[0.16em] text-[hsl(var(--ink-muted))] transition-colors hover:text-foreground"
      >
        On this page
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex"
        >
          <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} />
        </motion.span>
      </button>

      {/* initial={false} so the list renders collapsed instead of animating down from full height */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <nav className="mt-4 flex flex-col gap-2 border-l border-[hsl(var(--rule))] pl-4">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className="text-[0.95rem] text-[hsl(var(--ink-muted))] no-underline transition-colors hover:text-foreground"
            >
              {heading.title}
            </a>
          ))}
        </nav>
      </motion.div>
    </div>
  );
};

export default TableOfContents;
