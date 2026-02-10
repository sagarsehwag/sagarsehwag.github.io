const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Simpplr",
    companyUrl: "https://www.simpplr.com",
    location: "Gurgaon",
    period: "October 2023 \u2014 Present",
    current: true,
    bullets: [
      "Building a modern employee experience platform trusted by leading brands including Zoom, Nutanix, Docusign, Workday, Coursera & Fox.",
      "Led a team of 7 frontend engineers through the concurrent development of a new Content Studio along with a major technical upgrade for the editor, introducing modern state management and a headless editor, while actively mentoring junior engineers.",
      "Designed and built an automated system to generate previews for content templates, improving performance and discoverability at scale.",
      "Stepped up to lead a 6+ engineer Zeta pod, shipping 5+ features across 3 quarters.",
      "Designed and implemented a large-scale content migration from Froala to Tiptap, affecting over 500k pages, using a custom two-stage process that prevented visual regressions.",
      "Mentored ~15 junior/new engineers over the years at Simpplr.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tiptap",
      "Micro Frontends",
      "Module Federation",
    ],
  },
  {
    title: "Software Engineer",
    company: "Simpplr",
    companyUrl: "https://www.simpplr.com",
    location: "Gurgaon",
    period: "April 2022 \u2014 September 2023",
    current: false,
    bullets: [
      "Spearheaded the 6-month initiative to take the rich text editor (built with the headless Tiptap library) from EAP to GA. Acted as the de facto pod lead for the Canada team, guiding 7 frontend engineers through development, coordination, and handoff.",
      "Led the effort to rebuild the Simpplr Control Center as a Micro Frontend (MFE) leveraging a modern technology stack, boosting modularity and scalability.",
      "Designed and delivered a self-contained Page Template module, built with scalability in mind and structured for easy future migration to a micro frontend with minimal refactoring (<10%).",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tiptap",
      "MFE",
      "Webpack",
      "Module Federation",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Simpplr",
    companyUrl: "https://www.simpplr.com",
    location: "Gurgaon",
    period: "November 2020 \u2014 March 2022",
    current: false,
    bullets: [
      "Created a user-friendly platform onboarding tour to introduce new users to the product's key features.",
      "Migrated the existing jQuery codebase to React and delivered many small independent features.",
    ],
    technologies: ["React", "JavaScript", "jQuery", "CSS"],
  },
  {
    title: "Software Engineer",
    company: "Zomato",
    companyUrl: "https://www.zomato.com",
    location: "Gurgaon",
    period: "January 2020 \u2014 May 2020",
    current: false,
    internship: true,
    bullets: [
      "Generalized an existing notification system to support multiple applications across various sub-companies, including HyperPure, enhancing scalability and flexibility.",
      "Docker containerized the notification service to streamline deployment and improve the development workflow.",
      "Developed a resumable uploading functionality for large CSV files (in gigabytes) to AWS S3.",
    ],
    technologies: [
      "Golang",
      "Beego",
      "Kafka",
      "JavaScript",
      "MySQL",
      "Docker",
    ],
  },
];

export function Experience() {
  return (
    <section className="pt-12 pb-6">
      <h2 className="text-2xl font-semibold tracking-wide">Experiences</h2>

      <ul>
        {experiences.map((exp, index) => {
          const isLast = index === experiences.length - 1;
          return (
            <li key={index} className="relative my-6">
              {/* Timeline Line */}
              {!isLast && (
                <div className="absolute top-12 left-4 h-full w-px bg-border hidden sm:block" />
              )}

              {/* Timeline Dot */}
              <div className="absolute top-6 left-2 h-4 w-4 border-2 border-border bg-background hidden sm:block" />
              {exp.current && (
                <div className="absolute top-7 left-3 h-2 w-2 bg-primary hidden sm:block" />
              )}

              {/* Content */}
              <div className="ml-0 sm:ml-12">
                <div className="border border-border bg-card p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="space-y-1">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">{exp.company}</a>{exp.internship && <> &bull; Internship</>} &bull; {exp.location}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start text-sm text-foreground">
                          <span className="mt-1 mr-2 text-muted-foreground">&bull;</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-muted px-2 py-1 text-xs font-medium text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
