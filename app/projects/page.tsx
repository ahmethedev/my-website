import Container from "@/components/shared/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects I've built.",
};

export default function Projects() {
  return (
    <Container size="large">
      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          <a
            href="https://github.com/ahmethedev/lastpump"
            target="_blank"
            rel="noopener noreferrer"
          >
            Last Pump
          </a>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Crypto Momentum Reversal Detection System
        </p>
        <ul>
          <li>
            Built a quantitative system that tracks 2,200+ Binance Futures coins
            in real-time and applies a multi-factor scoring model (volume, price,
            open interest, funding rate) to detect exhaustion points for
            short-selling opportunities.
          </li>
          <li>
            Developed with Python/FastAPI backend, PostgreSQL database, and React
            frontend; includes Telegram alerts, MAE/MFE analysis, and outcome
            tracking with fixed-horizon returns.
          </li>
        </ul>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          <a
            href="https://github.com/ahmethedev/codefossils"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeFossils
          </a>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Abandoned Repository Discovery Platform
        </p>
        <ul>
          <li>
            Built a platform that discovers abandoned GitHub repositories (2+
            years inactive, 5+ stars) and scores them for revival potential using
            factors like stars, forks, and topic relevance.
          </li>
          <li>
            Full-stack application with a Go backend, React frontend, and
            PostgreSQL; features automatic categorization, background data
            refresh every 6 hours, and filtering/sorting/search capabilities.
          </li>
        </ul>
      </div>
    </Container>
  );
}
