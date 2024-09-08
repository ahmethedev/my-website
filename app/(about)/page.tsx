import Container from "@/components/shared/container";
import Social from "@/components/social";

export default function About() {
  const paragraphs = [
    `Seasoned software enthusiast with a diverse background Full-stack web development and machine learning. 
    Currently focusing on Data and Infrastructure, with a keen interest in distributed systems and databases.`,
    `Driven by a love for software development and data, I thrive on building new products that solve real-world problems.
    I have a passion for building products that make a difference.`,
  ];

  return (
    <Container
      size="large"
      className="prose prose-zinc dark:prose-invert 
      text-zinc-800 dark:text-zinc-200 container animate-enter"
    >
      <p className="my-5 text-zinc-800 dark:text-zinc-200">
        Hi, I&apos;m Ahmet.
      </p>
      {paragraphs.map((paragraph, index) => (
        <div
          key={paragraph}
          style={
            { "--stagger": index } as React.CSSProperties & {
              [key: string]: number;
            }
          }
        >
          <p className={index === paragraphs.length - 1 ? "mb-8" : ""}>
            {paragraph}
          </p>
          {index === 0 && <hr />}
        </div>
      ))}
      <Social />
    </Container>
  );
}
