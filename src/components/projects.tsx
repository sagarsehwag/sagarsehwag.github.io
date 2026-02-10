import { Star, GitFork } from "lucide-react";

const projects = [
  {
    name: "Simpplr Editor",
    description:
      "A rich text editor built on Tiptap with a wide range of extensions that can be easily enabled or disabled using feature flags. Used for creating feeds, blogs, pages, and event pages.",
    tags: ["React", "TypeScript", "Tiptap", "Feature Flags"],
    primaryLanguage: "TypeScript",
    languageColor: "#3178c6",
    stars: 0,
    forks: 0,
    url: "https://simpplr.github.io/tiptap/@simpplr/athena-tiptap/index.html",
  },
  {
    name: "Pluralsight Downloader",
    description:
      "A Chrome extension to download and track Pluralsight courses. Rewrote and maintained the extension with keyboard shortcuts for course downloading, stop controls, and timed requests to avoid blocking.",
    tags: ["JavaScript", "Chrome Extension", "Pluralsight", "Downloader"],
    primaryLanguage: "JavaScript",
    languageColor: "#f1e05a",
    stars: 316,
    forks: 71,
    url: "https://github.com/sahilsehwag/pluralsight-downloader-chrome-extension",
  },
];

export function Projects() {
  return (
    <section className="pt-12 pb-6">
      <h2 className="text-2xl font-semibold tracking-wide">Projects</h2>

      <ul>
        {projects.map((project) => (
          <li key={project.name} className="border border-border bg-card my-6">
            <div className="space-y-4 p-6">
              {/* Header Section */}
              <div className="flex flex-col items-start justify-between">
                <div className="flex-1 w-full">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                  </a>
                </div>
                <p className="text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted px-2 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats Section */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: project.languageColor }}
                    />
                    <span>{project.primaryLanguage}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
