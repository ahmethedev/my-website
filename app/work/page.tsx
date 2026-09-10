import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "CV",
  description: "Ahmet Dinc — work, education and side projects.",
};

type Entry = {
  org: string;
  role: string;
  href?: string;
  intro?: React.ReactNode;
  points: React.ReactNode[];
};

const EXPERIENCE: Entry[] = [
  {
    org: "Aselsan",
    role: "Software engineer, 2026 — Present",
    points: [
      "Building software as part of an engineering team, joined July 2026.",
    ],
  },
  {
    org: "Datateam",
    role: "Software engineer, 2024 — 2026",
    points: [
      "Played a key role in building a real time face recognition system with 300M+ face embeddings and vector search algorithms, and a large-scale data warehouse consolidation project processing 30B+ records, contributing to the development of custom ETL tools, database configuration, and system optimization. Collaborated on implementing comprehensive error handling, database installation, Kubernetes cluster setup, and distributed data management strategies, resulting in query performance improvement from 45 minutes to 1 minute.",
      "Designed and implemented complete system architecture for an OCR-based document processing pipeline, including error handling, data flow, storage strategies, and database schema design, handling 100K+ daily records with 99.9% uptime.",
      "Built a dynamic API generation platform for a data warehouse with custom permissions, rate limiting, batch processing and OpenAPI-compliant documentation; handles 1k+ daily requests and provides request analytics via a dashboard.",
    ],
  },
  {
    org: "Collecteurs",
    role: "Software engineer, 2022 — 2023",
    points: [
      "Developed NFT marketplace enabling digital art trading, integrating blockchain for secure transaction processing.",
      "Optimized platform performance and security through cross-functional collaboration.",
    ],
  },
  {
    org: "Buildchain",
    role: "Founder, 2021 — Present",
    href: "https://linktr.ee/buildchain",
    intro: (
      <>
        <a href="https://linktr.ee/buildchain" target="_blank" rel="noopener">
          Buildchain
        </a>{" "}
        is the largest Web3 developer community in Türkiye.
      </>
    ),
    points: [
      "Established a community of blockchain developers, sharing knowledge and expertise in the field.",
      "Host and produce a regular podcast series discussing the latest trends, challenges, and innovations in blockchain development.",
      "Partnered with global firms, including BNB Chain and Chainlink, to expand community reach and influence.",
      "Organized online workshops and meet-ups to foster a sense of community and facilitate networking among blockchain enthusiasts.",
      "Managed a team of writers producing insightful blogs on blockchain development.",
    ],
  },
];

const EDUCATION: Entry[] = [
  {
    org: "Middle East Technical University",
    role: "M.Sc. Financial Mathematics, 2026 — Present",
    points: [
      "Started September 2026, focusing on stochastic calculus, derivative pricing and quantitative methods for markets.",
    ],
  },
  {
    org: "Ege University",
    role: "B.Sc. Computer Science, 2020 — 2024",
    points: [
      "Graduation thesis: implemented the Error State Extended Kalman Filter (ESEKF) method to determine the position of a vehicle using GNSS, LiDAR, and IMU sensor data obtained from the Carla simulator.",
    ],
  },
];

const OTHER_WORK: { title: string; points: string[] }[] = [
  {
    title: "Sensor Based Applications for Autonomous Vehicles",
    points: [
      "Implemented the ESEKF method for vehicle positioning using GNSS, LiDAR, and IMU sensor data; published a research paper.",
      "Built a real-time motion tracking system processing multi-sensor data at 100Hz using Python, ROS, and the Carla Simulator.",
    ],
  },
  {
    title: "Monte Carlo Simulation based on Trading History",
    points: [
      "Implemented a Monte Carlo simulation using historical trading data to project 1-year return distributions. Analyzed key performance metrics including win rate, loss ratio, and average return.",
    ],
  },
  {
    title: "Data Scraping and Visualization Platform",
    points: [
      "Scraped and processed 280,000 records from web sources, implementing comprehensive data cleaning and normalization procedures.",
      "Developed a full-stack web application with machine learning integration for data visualization, search functionality, and semantic grouping of similar content.",
    ],
  },
];

function Section({ heading, entries }: { heading: string; entries: Entry[] }) {
  return (
    <section className="section-rule">
      <h2 className="eyebrow mb-8">{heading}</h2>
      {entries.map(({ org, role, intro, points }) => (
        <article key={org} className="mb-9 last:mb-0">
          <h3 className="mb-1 mt-0 text-[1.2rem] tracking-[-0.02em]">{org}</h3>
          <p className="label m-0 text-[hsl(var(--ink-muted))]">
            {role}
          </p>
          {intro && <p className="mb-0 mt-3">{intro}</p>}
          <ul className="mb-0 mt-3 list-disc space-y-2 pl-5 marker:text-[hsl(var(--rule))]">
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default function Work() {
  return (
    <Container className="container animate-enter pt-10">
      <h1 className="mb-6 mt-0 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[2.6rem]">
        CV
      </h1>
      <p className="my-5">
        Software engineer at Aselsan, studying financial mathematics
        at METU.
      </p>

      <Section heading="Experience" entries={EXPERIENCE} />
      <Section heading="Education" entries={EDUCATION} />

      <section className="section-rule">
        <h2 className="eyebrow mb-8">Selected other work</h2>
        {OTHER_WORK.map(({ title, points }) => (
          <Fragment key={title}>
            <h3 className="mb-3 mt-0 text-[1.2rem] tracking-[-0.02em]">{title}</h3>
            <ul className="mb-9 mt-0 list-disc space-y-2 pl-5 marker:text-[hsl(var(--rule))] last:mb-0">
              {points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </Fragment>
        ))}
      </section>
    </Container>
  );
}
