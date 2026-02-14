import { Star, GitFork, Play } from 'lucide-react';
import type { Project } from './project-data';

type ProjectCardProps = {
  project: Project;
  onDemo: () => void;
};

export function ProjectCard({ project, onDemo }: ProjectCardProps) {
  return (
    <li className='border border-border bg-card my-4 sm:my-6'>
      <div className='space-y-3 p-4 sm:space-y-4 sm:p-6'>
        <div className='flex flex-col items-start justify-between gap-1.5'>
          <div className='flex w-full items-center justify-between gap-2'>
            <a
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
            >
              <h3 className='text-base font-semibold sm:text-lg'>
                {project.name}
              </h3>
            </a>
            {project.demoUrl && (
              <button
                onClick={onDemo}
                className='inline-flex cursor-pointer items-center justify-center gap-1 rounded-full border border-foreground px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-background'
                title='View demo'
              >
                <Play className='h-3 w-3' />
                Demo
              </button>
            )}
          </div>
          <p className='text-xs leading-relaxed sm:text-sm'>
            {project.description}
          </p>
        </div>

        <div className='flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className='bg-muted px-2 py-1 text-xs font-medium'
            >
              {tag}
            </span>
          ))}
        </div>

        <div className='flex items-center justify-between text-sm text-muted-foreground'>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1'>
              <div
                className='w-3 h-3 rounded-full'
                style={{ backgroundColor: project.languageColor }}
              />
              <span>{project.primaryLanguage}</span>
            </div>
            <div className='flex items-center gap-1'>
              <Star className='h-4 w-4' />
              <span>{project.stars}</span>
            </div>
            <div className='flex items-center gap-1'>
              <GitFork className='h-4 w-4' />
              <span>{project.forks}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
