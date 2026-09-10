"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./shared/container";
import IconGithub from "./shared/icons/github";
import IconLinkedin from "./shared/icons/linkedin";
import { ModeToggle } from "./ui/theme-toggle";

const NAV_ITEMS = [
  { name: "Blog", href: "/blog" },
  { name: "CV", href: "/work" },
];

const SOCIAL_ITEMS = [
  {
    name: "GitHub",
    href: "https://github.com/ahmethedev",
    label: "View my GitHub profile",
    icon: IconGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmetburakdinc/",
    label: "Connect with me on LinkedIn",
    icon: IconLinkedin,
  },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <Container>
      <header className="flex flex-col items-center gap-3 border-b border-[hsl(var(--rule))] pb-4 pt-8 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="m-0 leading-none">
          <Link
            href="/"
            rel="home"
            className="wordmark text-foreground no-underline hover:no-underline"
          >
            Ahmet Dinc
            <span aria-hidden className="ml-2 text-[hsl(var(--link))]">
              /
            </span>
          </Link>
        </p>

        <nav aria-label="Primary">
          <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-x-5 gap-y-1 p-0">
            {NAV_ITEMS.map(({ name, href }) => {
              const isActive = pathname?.startsWith(href) ?? false;

              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "label no-underline transition-colors hover:text-foreground",
                      isActive
                        ? "text-foreground"
                        : "text-[hsl(var(--ink-muted))]"
                    )}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}

            <li className="ml-1 flex items-center gap-[0.9em]">
              {SOCIAL_ITEMS.map(({ name, href, label, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  rel="me noopener noreferrer"
                  target="_blank"
                  aria-label={label}
                  title={label}
                  className="block text-[hsl(var(--ink-muted))] transition-colors hover:text-foreground"
                >
                  <Icon size={17} />
                </a>
              ))}
            </li>

            <li className="flex items-center">
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  );
};
