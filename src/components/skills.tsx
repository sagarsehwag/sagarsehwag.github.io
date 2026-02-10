const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "React Query",
      "HTML",
      "CSS",
      "Low Level Design",
      "High Level Design",
      "Accessibility (A11y)",
      "Web Performance",
      "Jest",
      "Vitest",
      "React Testing Library",
      "Cypress",
    ],
  },
  {
    category: "Architecture",
    skills: [
      "Micro Frontends (MFE)",
      "Module Federation",
      "Component Libraries",
      "CI/CD",
      "AWS S3",
      "CloudFront",
    ],
  },
  {
    category: "Tooling",
    skills: ["Webpack", "Storybook", "Docker", "Git"],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Golang",
      "Express",
      "Beego",
      "gRPC",
      "MySQL",
      "MongoDB",
    ],
  },
];

export function Skills() {
  return (
    <section className="space-y-8">
      <h2 className="text-xl font-bold tracking-tight">Skills</h2>

      <div className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.category} className="space-y-2.5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-border bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
