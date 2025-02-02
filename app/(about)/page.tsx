import Container from "@/components/shared/container";
import Social from "@/components/social";

export default function About() {
  const paragraphs = [
    `Software Engineer specializing in large-scale data processing systems and full-stack development. 
Background in autonomous vehicle systems and sensor fusion, combining academic research with practical engineering. Skilled in full stack development with expertise in system design and DevOps practices.
Currently focused on developing enterprise-scale data processing solutions.`
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
