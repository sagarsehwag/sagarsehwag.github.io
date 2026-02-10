import { Github, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="space-y-6 py-12">
      <h1 className="mb-1 inline-block text-4xl font-bold sm:text-5xl">
        Sagar Sehwag
      </h1>
      <p className="text-sm text-muted-foreground">
        Frontend Engineer | React | TypeScript
      </p>

      <p>
        A Frontend Engineer (5+ years) specialising in the development of
        scalable web applications using React, TypeScript, and a strong
        commitment to long term engineering quality. I enjoy experimenting with
        Golang as well.
      </p>

      <div className="flex flex-col gap-4 pt-4 sm:flex-row">
        <a
          href="https://github.com/sagarsehwag"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 bg-primary px-6 font-mono text-sm font-medium tracking-wider whitespace-nowrap text-primary-foreground uppercase ring-offset-background transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>

        <a
          href="mailto:isagarsehwag@gmail.com"
          className="inline-flex h-11 items-center justify-center gap-2 border border-input bg-background bg-transparent px-6 font-mono text-sm font-medium tracking-wider whitespace-nowrap uppercase ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <Mail className="h-4 w-4" />
          Contact
        </a>
      </div>
    </section>
  );
}
