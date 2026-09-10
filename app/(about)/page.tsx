import Container from "@/components/shared/container";
import { PROJECTS, SOCIALS } from "@/lib/site";
import Link from "next/link";
import Script from "next/script";
import { Fragment } from "react";
import { getBlogPosts } from "../db/blog";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahmet Dinc",
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Aselsan",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Middle East Technical University" },
    { "@type": "CollegeOrUniversity", name: "Ege University" },
  ],
  knowsAbout: [
    "High-frequency trading",
    "Quantitative research",
    "Market making",
    "Financial mathematics",
  ],
  url: "https://abd.im",
  sameAs: [SOCIALS.github, SOCIALS.linkedin],
};

const WORK = [
  {
    year: "2026",
    body: (
      <>
        I joined <b>Aselsan</b> as a software engineer in July, after leaving
        Datateam.
      </>
    ),
  },
  {
    year: "2024",
    body: (
      <>
        I worked at <b>Datateam</b> on real time face recognition system with 300M+
        face embeddings and vector search algorithms. We built a data warehouse over 30B+
        records with custom ETL tooling, Kubernetes buildout and query tuning,
        took our slowest reports from 45 minutes down to 1. I also designed an
        OCR document pipeline handling 100K+ records a day, and a dynamic API
        platform on top of the warehouse.
      </>
    ),
  },
  {
    year: "2022",
    body: (
      <>
        I worked at <b>Collecteurs</b> on an NFT marketplace for digital art,
        integrating on-chain settlement into the trading flow.
      </>
    ),
  },
  {
    year: "2021",
    body: (
      <>
        I founded{" "}
        <a href="https://linktr.ee/buildchain" target="_blank" rel="noopener">
          <b>Buildchain</b>
        </a>
        , the largest Web3 developer community in Türkiye — a podcast, workshops
        and partnerships with BNB Chain and Chainlink.
      </>
    ),
  },
];

const EDUCATION = [
  {
    year: "2026",
    body: (
      <>
        <b>Middle East Technical University</b> (ODTÜ) — M.Sc. in Financial
        Mathematics, started this September.
      </>
    ),
  },
  {
    year: "2020",
    body: (
      <>
        <b>Ege University</b> — B.Sc. in Computer Science. My thesis implemented
        an Error State Extended Kalman Filter fusing GNSS, LiDAR and IMU data for
        vehicle localization.
      </>
    ),
  },
];

function formatPostDate(date: string) {
  const d = new Date(`${date}T00:00:00`);
  const month = d.toLocaleString("en-US", { month: "short" });
  return `${month} ’${String(d.getFullYear()).slice(2)}`;
}

export default function About() {
  const posts = getBlogPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .slice(0, 8);

  return (
    <Container className="container animate-enter pt-10">
      <h1 className="mb-6 mt-0 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[2.6rem]">
        Hi, I am Ahmet!
      </h1>

      <p className="my-5">
        I&apos;m a software engineer at Aselsan, and I&apos;m studying financial
        mathematics at METU. I am interested in high-frequency trading, quantitative research and market making.
        I love computers and markets.
      </p>

      <section className="section-rule">
        <h2 className="eyebrow mb-6">Work History</h2>
        <div className="stack-grid">
          {WORK.map(({ year, body }) => (
            <Fragment key={year}>
              <time>{year}</time>
              <span>{body}</span>
            </Fragment>
          ))}
        </div>
      </section>

      <section className="section-rule">
        <h2 className="eyebrow mb-6">Education</h2>
        <div className="stack-grid">
          {EDUCATION.map(({ year, body }) => (
            <Fragment key={year}>
              <time>{year}</time>
              <span>{body}</span>
            </Fragment>
          ))}
        </div>
      </section>

      <section className="section-rule">
        <h2 className="eyebrow mb-6">Recent on my blog</h2>
        <div className="stack-grid">
          {posts.map((post) => (
            <Fragment key={post.slug}>
              <time dateTime={post.metadata.publishedAt}>
                {formatPostDate(post.metadata.publishedAt)}
              </time>
              <Link href={`/blog/${post.slug}`}>{post.metadata.title}</Link>
            </Fragment>
          ))}
        </div>
        <p className="mb-0 mt-8">
          <Link href="/blog" className="label">
            All posts →
          </Link>
        </p>
      </section>

      <section className="section-rule" id="projects">
        <h2 className="eyebrow mb-6">Projects</h2>
        <p className="mb-6 mt-0">
          Things I built to answer a question I had, mostly about markets and the
          data behind them:
        </p>
        <ul className="project-list">
          {PROJECTS.map(({ name, href, description, repo }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener"
                className="project-name"
              >
                {name}
              </a>
              <span className="project-desc">
                {description}
                {repo && repo !== href && (
                  <>
                    {" "}
                    <a href={repo} target="_blank" rel="noopener">
                      source
                    </a>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-rule">
        <h2 className="eyebrow mb-6">Contact</h2>
        <p className="mb-0">
          The best way to reach me is on{" "}
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener">
            <b>LinkedIn</b>
          </a>
          , and my code lives on{" "}
          <a href={SOCIALS.github} target="_blank" rel="noopener">
            <b>GitHub</b>
          </a>
          .
        </p>
      </section>

      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Container>
  );
}
