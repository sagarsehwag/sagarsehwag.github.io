'use client';

import { useState } from 'react';
import { projects, type Project } from './projects/project-data';
import { ProjectCard } from './projects/project-card';
import { ProjectDemoDialog } from './projects/project-demo-dialog';

export function Projects() {
  const [demoProject, setDemoProject] = useState<Project | null>(null);

  return (
    <section className='pt-8 pb-4 sm:pt-12 sm:pb-6'>
      <h2 className='text-xl font-semibold tracking-wide sm:text-2xl'>
        Projects
      </h2>

      <ul>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            onDemo={() => setDemoProject(project)}
          />
        ))}
      </ul>

      <ProjectDemoDialog
        project={demoProject}
        onClose={() => setDemoProject(null)}
      />
    </section>
  );
}
