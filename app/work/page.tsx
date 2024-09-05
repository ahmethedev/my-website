import Container from "@/components/shared/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

export default function Work() {
  return (
    <Container size="large">
      <div className="prose prose-neutral dark:prose-invert">

        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Datateam</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software engineer, 2024 — current
        </p>
        <ul>
          <li>
          Built a scraper to extract data from various sources, including websites.

          </li>
          <li>Developed a data pipeline for scraping, exporting, and loading data into databases.</li>
          <li>
          Took an active role in the DevOps processes for product deployment and management.
          </li>
          <li>
            Used machine learning models for the semantic analysis of text data and improve the accuracy of the data.
          </li>

        </ul>
      </div>
      
      <div className="prose prose-neutral dark:prose-invert">

        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Collecteurs</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software engineer - part time, 2023 — 2024
        </p>

        <ul>
          <li>
          Worked as Smart Contract Developer, Designed and implemented an NFT marketplace, allowing users to buy, sell, and trade digital art.

          </li>

          <li>
          Collaborated with a cross-functional team to optimize the user experience and ensure platform security.

          </li>
          <li>
          Integrated blockchain technology to securely process transactions and manage digital assets.
          </li>

        </ul>
      </div>
      
    </Container>
    
  );
}
