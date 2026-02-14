'use client';

import { Star, GitFork, Play, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';
import Image from 'next/image';

const contentStudioScreenshots = [
  // Editor overview
  { src: '/screenshots/content-studio/01-editor-blocks.png', alt: 'Block-based editor with text, structural, and media elements' },

  // Cover image — setup & layouts
  { src: '/screenshots/content-studio/02-cover-upload.png', alt: 'Cover image upload — drag-and-drop, browse, URL, or Unsplash' },
  { src: '/screenshots/content-studio/03-cover-default-layout.png', alt: 'Default layout — full-width cover image with edit panel' },
  { src: '/screenshots/content-studio/05-cover-split-view.png', alt: 'Split view layout — image and title side by side' },
  { src: '/screenshots/content-studio/04-cover-background-overlay.png', alt: 'Background overlay layout — title over cover image' },

  // Cover image — editing tools
  { src: '/screenshots/content-studio/11-cover-bg-upload.png', alt: 'Cover background upload with color and image source options' },
  { src: '/screenshots/content-studio/18-color-palette.png', alt: 'Brand color palette for cover text styling' },
  { src: '/screenshots/content-studio/12-cover-alt-text.png', alt: 'Image alt text and caption for accessibility' },
  { src: '/screenshots/content-studio/13-cover-crop.png', alt: 'Crop cover image with custom aspect ratio and rotation' },

  // Content authoring
  { src: '/screenshots/content-studio/06-rich-content.png', alt: 'Rich content — headings, callouts, accordions, and code blocks' },
  { src: '/screenshots/content-studio/16-button-link-edit.png', alt: 'Button block with inline link editing' },
  { src: '/screenshots/content-studio/17-button-link-saved.png', alt: 'Button with saved link and URL preview' },
  { src: '/screenshots/content-studio/15-form-embed.png', alt: 'Form survey and embedded link card with article preview' },
  { src: '/screenshots/content-studio/14-video-block.png', alt: 'Video block — upload, browse, URL, record, or embed' },

  // Page preview
  { src: '/screenshots/content-studio/07-page-preview.png', alt: 'Page preview in viewing mode with cover and content' },

  // Page settings & publish
  { src: '/screenshots/content-studio/08-page-settings.png', alt: 'Page settings — author, content type, category, and language' },
  { src: '/screenshots/content-studio/09-customize-preview.png', alt: 'Customize page preview — thumbnail, topics, and summary' },
  { src: '/screenshots/content-studio/10-published-view.png', alt: 'Published page with cover, author info, and content' },
];

type Project = {
  name: string;
  description: string;
  tags: string[];
  primaryLanguage: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
  demoUrl?: string;
  videoUrl?: string;
  screenshots?: { src: string; alt: string }[];
};

const projects: Project[] = [
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
    screenshots: contentStudioScreenshots,
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
  const [demoProject, setDemoProject] = useState<Project | null>(null);

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
        <DialogContent
          className={`flex flex-col gap-0 p-0 ${
            demoProject?.screenshots
              ? 'max-w-3xl lg:max-w-5xl xl:max-w-6xl max-h-[90vh]'
              : 'h-[85vh] max-w-5xl lg:max-w-6xl xl:max-w-7xl'
          }`}
        >
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

          {demoProject?.screenshots ? (
            <div className='min-h-0 flex-1 overflow-y-auto p-4 sm:p-6'>
              {/* Screenshot Carousel */}
              <Carousel opts={{ loop: true }} className='mx-auto w-full'>
                <CarouselContent>
                  {demoProject.screenshots.map((screenshot, index) => (
                    <CarouselItem key={index}>
                      <div className='overflow-hidden rounded border bg-muted'>
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          width={1024}
                          height={640}
                          className='h-auto w-full object-contain'
                        />
                      </div>
                      <p className='mt-2 text-center text-xs text-muted-foreground'>
                        {screenshot.alt}
                      </p>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className='-left-3 sm:-left-4' />
                <CarouselNext className='-right-3 sm:-right-4' />
              </Carousel>

              {/* Demo Video Accordion */}
              {demoProject.videoUrl && (
                <Accordion type='single' collapsible className='mt-4'>
                  <AccordionItem value='demo-video' className='border rounded'>
                    <AccordionTrigger className='px-4 py-3 hover:no-underline'>
                      <div className='flex items-center gap-2'>
                        <Play className='h-4 w-4' />
                        <span>Watch Demo Video</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='px-4'>
                      <div className='aspect-video w-full overflow-hidden rounded'>
                        <iframe
                          src={demoProject.videoUrl}
                          className='h-full w-full'
                          allow='autoplay; encrypted-media'
                          allowFullScreen
                          title={`${demoProject.name} Demo Video`}
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </div>
          ) : (
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
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
