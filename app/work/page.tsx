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
          Played a key role in a large-scale data warehouse consolidation project processing 30B+ records, contributing to the development of custom ETL tools, database configuration, and system optimization. Collaborated on implementing comprehensive error handling, database installation, Kubernetes cluster setup, and distributed data management strategies, resulting in query performance improvement from 45 minutes to 1 minute.
          </li>
          <li>
          Designed and implemented complete system architecture for an OCR-based document processing pipeline, including error handling, data flow, storage strategies, and database schema design, handling 100K+ daily records with 99.9% uptime.
          </li>
          <li>
          Built a dynamic API generation platform for a data warehouse with custom permissions, rate limiting, batch processing and OpenAPI-compliant documentation; handles 1k+ daily requests and provides request analytics via a dashboard.
          </li>
        </ul>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Collecteurs
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software engineer, 2022 — 2023
        </p>
        <ul>
          <li>
            Developed NFT marketplace enabling digital art trading, integrating blockchain for secure transaction processing.
          </li>
          <li>
            Optimized platform performance and security through cross-functional collaboration.
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
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Projects</h2>
        
        <h3 className="font-medium text-lg mb-1 tracking-tighter">Sensor Based Applications for Autonomous Vehicles</h3>
        <ul>
          <li>
            Implemented ESEKF method for vehicle positioning using GNSS, LiDAR, and IMU sensor data; published research paper.
          </li>
          <li>
            Built real-time motion tracking system processing multi-sensor data at 100Hz using Python, ROS, and Carla Simulator.
          </li>
        </ul>

        <h3 className="font-medium text-lg mb-1 tracking-tighter">Data Scraping and Visualization Platform</h3>
        <ul>
          <li>
            Scraped and processed 280,000 records from web sources, implementing comprehensive data cleaning and normalization procedures.
          </li>
          <li>
            Developed full-stack web application with machine learning integration for data visualization, search functionality, and semantic grouping of similar content.
          </li>
        </ul>

        <h3 className="font-medium text-lg mb-1 tracking-tighter">Monte Carlo Simulation based on Trading History</h3>
        <ul>
          <li>
            Implemented a Monte Carlo simulation using historical trading data to project 1-year return distributions. Analyzed key performance metrics including win rate, loss ratio, and average return.
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
          </div>
          <li>
            Built full stack website for school competatiton with using PHP and templates for frontend.
          </li>
        </ul>
      </div>
    </Container>
  );
}