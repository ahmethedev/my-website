export type Project = {
  name: string;
  href: string;
  description: string;
  repo?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "thatsmyquant",
    href: "https://github.com/ahmethedev/agentic-trading",
    repo: "https://github.com/ahmethedev/agentic-trading",
    description:
      "Explainable spot trading agent for OKX TR that records every decision, including every wait.",
  },
  {
    name: "last-pump",
    href: "https://last-pump.com/",
    repo: "https://github.com/ahmethedev/lastpump",
    description:
      "Momentum-exhaustion scanner over 2,200+ Binance Futures pairs.",
  },
  {
    name: "makroturkiye",
    href: "https://makroturkiye.com/",
    repo: "https://github.com/ahmethedev/evds-visualize",
    description:
      "Turkish central bank (EVDS) macro data, visualized as a treemap.",
  },
  {
    name: "codefossils",
    href: "https://github.com/ahmethedev/codefossils",
    repo: "https://github.com/ahmethedev/codefossils",
    description:
      "Finds abandoned GitHub repositories worth reviving, and scores them.",
  },
];

export const SOCIALS = {
  github: "https://github.com/ahmethedev",
  linkedin: "https://www.linkedin.com/in/ahmetburakdinc/",
};
