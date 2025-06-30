import Container from "@/components/shared/container";
import Social from "@/components/social";
import Script from "next/script";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahmet Burak Dinc",
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "",
  },
  url: "https://abd.im",
  sameAs: [
    "https://github.com/ahmethedev",
  ],
};

export default function About() {
  const paragraphs = [
    <>
Software Engineer specializing in Machine Learning and Quantative Analysis. 
Currently focused on developing deep learning models and quantitative strategies. I love computers and candle sticks.
    </>
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
          key={index}
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
      <hr className="my-8" />
      <div className="my-8">
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/kYfNvmF0Bqw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Container>
  );
}
