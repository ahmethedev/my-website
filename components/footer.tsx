import Container from "./shared/container";

export const Footer = () => (
  <footer className="mt-20 pb-14 text-center text-[hsl(var(--ink-muted))]">
    <Container>
      <div
        aria-hidden
        className="mx-auto mb-8 h-[0.4rem] w-[0.4rem] bg-[hsl(var(--link))]"
      />
      <p className="label m-0">© {new Date().getFullYear()} Ahmet Dinc</p>
    </Container>
  </footer>
);
