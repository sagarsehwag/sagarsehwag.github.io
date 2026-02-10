const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Simpplr",
    companyUrl: "https://www.simpplr.com",
    location: "Gurgaon",
    period: "October 2023 \u2014 Present",
    current: true,
    bullets: [
      <>Building a <mark>modern employee experience platform</mark> trusted by leading brands including Zoom, Nutanix, Docusign, Workday, Coursera & Fox.</>,
      <><mark>Led a team of 7 frontend engineers</mark> through the concurrent development of a new Content Studio along with a major technical upgrade for the editor, <mark>Introducing modern state management and a headless editor</mark>, while actively mentoring junior engineers.</>,
      <>Designed and built an automated system to <mark>generate previews for content templates</mark>, improving performance and discoverability at scale.</>,
      <>Stepped up to lead a 6+ engineer Zeta pod, shipping 5+ features across 3 quarters.</>,
      <>Designed and implemented a <mark>large-scale content migration from Froala to Tiptap</mark>, affecting over <mark>500k pages</mark>, using a custom two-stage process that prevented visual regressions.</>,
      <><mark>Mentored ~15 junior/new engineers</mark> over the years at Simpplr.</>,
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
      <>Spearheaded the 6-month initiative to take the rich text editor (built with the headless Tiptap library) from <mark>EAP to GA</mark>. Acted as the <mark>de facto pod lead for the Canada team</mark>, guiding 7 frontend engineers through development, coordination, and handoff.</>,
      <>Led the effort to <mark>rebuild the Simpplr Control Center as a Micro Frontend</mark> (MFE) leveraging a modern technology stack, boosting modularity and scalability.</>,
      <><mark>Designed and delivered a self-contained Page Template module</mark>, built with scalability in mind and structured for easy future migration to a micro frontend with minimal refactoring (&lt;10%).</>,
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
      <>Created a user-friendly platform onboarding tour to introduce new users to the product&#39;s key features.</>,
      <>Migrated the existing jQuery codebase to React and delivered many small independent features.</>,
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
      <>Generalized an existing notification system to support multiple applications across various sub-companies, including HyperPure, enhancing scalability and flexibility.</>,
      <><mark>Docker containerized the notification service</mark> to streamline deployment and improve the development workflow.</>,
      <>Developed a resumable uploading functionality for large CSV files (in gigabytes) to AWS S3.</>,
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
    <section className="pt-8 pb-4 sm:pt-12 sm:pb-6">
      <h2 className="text-xl font-semibold tracking-wide sm:text-2xl">Experiences</h2>

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
                <div className="border border-border bg-card p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    {/* Header */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h3 className="text-base font-semibold text-foreground sm:text-lg">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground sm:text-sm">
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">{exp.company}</a>{exp.internship && <> &bull; Internship</>} &bull; {exp.location}
                      </div>
                      <div className="text-xs text-muted-foreground sm:text-sm">
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start text-xs leading-relaxed text-foreground sm:text-sm">
                          <span className="mt-0.5 mr-2 shrink-0 text-muted-foreground sm:mt-1">&bull;</span>
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
