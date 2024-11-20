import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Image from 'next/image';
import arduino from "public/images/arduino.png"

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
          Software engineer, 2024 — Present
        </p>
        <ul>
          <li>
            Built a scraper to extract data from various sources, including
            websites.
          </li>
          <li>
            Developed a data pipeline for scraping, exporting, and loading data
            into databases.
          </li>
          <li>
            Took an active role in the DevOps processes for product deployment
            and management.
          </li>
          <li>
            Used machine learning models for the semantic analysis of text data
            and improve the accuracy of the data.
          </li>
        </ul>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Collecteurs
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software engineer - part time, 2023 — 2024
        </p>

        <ul>
          <li>
            Worked as Smart Contract Developer, Designed and implemented an NFT
            marketplace, allowing users to buy, sell, and trade digital art.
          </li>

          <li>
            Collaborated with a cross-functional team to optimize the user
            experience and ensure platform security.
          </li>
          <li>
            Integrated blockchain technology to securely process transactions
            and manage digital assets.
          </li>
        </ul>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Buildchain
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Founder, 2021 — Present
        </p>
        <p>
          <a
            href="https://linktr.ee/buildchain"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buildchain
          </a>{" "}
          is the largest Web3 developer community in Türkiye.
        </p>

        <ul>
          <li>
            Established a community of Blockchain developers, sharing knowledge
            and expertise in the field.
          </li>

          <li>
            Host and produce a regular podcast series discussing the latest
            trends, challenges, and innovations in blockchain development.
          </li>
          <li>
            Partnered with global firms, including BNB Chain and Chainlink, to
            expand community reach and influence.
          </li>
          <li>
            Organized online workshops and meet-ups to foster a sense of
            community and facilitate networking among Blockchain enthusiasts.
          </li>
          <li>
            Managed a team of writers producing insightful blogs on blockchain
            development
          </li>
        </ul>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Ege University
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Bachelor Degree - Computer Science, 2020 — 2024
        </p>

        <ul>
          <li>
          Graduation Thesis: Implemented Error State Extended Kalman Filter (ESEKF) method to determine the
          position of a vehicle using GNSS, LiDAR, and IMU sensor data obtained from the Carla simulator.
          </li>
        </ul>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          High School
        </h2>
        <ul>
          <li>
            Learnt arduino by myself and built projects. Really enjoyed the robotics.
          </li>
          <div className="flex justify-center">
            <Image 
              src={arduino.src} 
              alt="Arduino project" 
              width={400}
              height={200}
              className="rounded-lg"
            />
          </div>
          <li>
            Built full stack website for school competatiton with using PHP and templates for frontend.
          </li>
        </ul>
      </div>
    </Container>
  );
}
