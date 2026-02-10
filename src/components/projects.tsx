'use client';

import { Star, GitFork, Play, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useState } from 'react';

const projects = [
  {
    name: 'Content Studio - Simpplr Editor',
    description:
      'Content Studio is a modern, block-based editor for creating pages, offering drag-and-drop layouts, auto-save, and improved performance. Built on Tiptap, it supports feature-flagged extensions and is used to create feeds, blogs, pages, and event pages.',
    tags: ['React', 'TypeScript', 'Tiptap', 'Editor', 'DOM'],
    primaryLanguage: 'TypeScript',
    languageColor: '#3178c6',
    stars: 0,
    forks: 0,
    url: 'https://simpplr.github.io/tiptap/@simpplr/athena-tiptap/index.html',
    demoUrl:
      'https://simpplr.github.io/tiptap/@simpplr/athena-tiptap/index.html',
    videoUrl:
      'https://drive.google.com/file/d/111vowwwOIX4U2DBHNBal4LUIvEusMAuM/preview',
  },
  {
    name: 'Rich Text Editor — System Design',
    description:
      'Interactive visual demos explaining how rich text editors work under the hood — rendering, contentEditable, Selection API, state models, update loops, and node data structures. Built from scratch with zero external UI libraries.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'System Design'],
    primaryLanguage: 'TypeScript',
    languageColor: '#3178c6',
    stars: 0,
    forks: 0,
    url: 'https://github.com/sagarsehwag/rich-text-editor-system-design',
    demoUrl: 'https://sagarsehwag.github.io/rich-text-editor-system-design/',
  },
  {
    name: 'Pluralsight Course Downloader',
    description:
      'A Chrome extension to download and track Pluralsight courses. Rewrote and maintained the extension with keyboard shortcuts for course downloading, stop controls, and timed requests to avoid blocking.',
    tags: ['JavaScript', 'Chrome Extension', 'DOM'],
    primaryLanguage: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 316,
    forks: 71,
    url: 'https://github.com/sahilsehwag/pluralsight-downloader-chrome-extension',
  },
];

export function Projects() {
  const [demoProject, setDemoProject] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <section className='pt-8 pb-4 sm:pt-12 sm:pb-6'>
      <h2 className='text-xl font-semibold tracking-wide sm:text-2xl'>
        Projects
      </h2>

      <ul>
        {projects.map((project) => (
          <li
            key={project.name}
            className='border border-border bg-card my-4 sm:my-6'
          >
            <div className='space-y-3 p-4 sm:space-y-4 sm:p-6'>
              {/* Header Section */}
              <div className='flex flex-col items-start justify-between gap-1.5'>
                <div className='flex w-full items-center justify-between gap-2'>
                  <a
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline'
                  >
                    <h3 className='text-base font-semibold sm:text-lg'>{project.name}</h3>
                  </a>
                  {project.demoUrl && (
                    <button
                      onClick={() => setDemoProject(project)}
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

              {/* Technology Tags */}
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

              {/* Stats Section */}
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
        ))}
      </ul>

      <Dialog
        open={!!demoProject}
        onOpenChange={(open) => !open && setDemoProject(null)}
      >
        <DialogContent className='flex h-[85vh] max-w-5xl flex-col gap-0 p-0 lg:max-w-6xl xl:max-w-7xl'>
          <DialogHeader className='flex-none border-b px-4 py-3'>
            <div className='flex items-center justify-between pr-8'>
              <div className='min-w-0 pr-4'>
                <DialogTitle className='text-base leading-normal truncate'>
                  {demoProject?.name}
                </DialogTitle>
                <DialogDescription className='sr-only'>
                  Live demo of {demoProject?.name}
                </DialogDescription>
              </div>
              {demoProject?.demoUrl && (
                <a
                  href={demoProject.demoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-1 rounded-xs text-xs text-muted-foreground transition-colors hover:text-foreground'
                  title='Open in new tab'
                >
                  <ExternalLink className='h-3.5 w-3.5' />
                  Open in new tab
                </a>
              )}
            </div>
          </DialogHeader>
          <div className='min-h-0 flex-1 p-4'>
            {demoProject?.videoUrl ? (
              <iframe
                src={demoProject.videoUrl}
                className='h-full w-full rounded border'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title={`${demoProject.name} Demo`}
              />
            ) : (
              demoProject?.demoUrl && (
                <iframe
                  src={demoProject.demoUrl}
                  className='h-full w-full rounded border'
                  title={`${demoProject.name} Demo`}
                />
              )
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
