'use client';

import { Github, FileDown, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useState } from 'react';

const RESUME_URL =
  'https://drive.google.com/file/d/1EA3EzRyDfaPQiyf-hxQhXyne3z62RnSW/view?usp=drive_link';
const RESUME_EMBED_URL =
  'https://drive.google.com/file/d/1EA3EzRyDfaPQiyf-hxQhXyne3z62RnSW/preview';

export function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className='space-y-4 py-8 sm:space-y-6 sm:py-12'>
      <h1 className='mb-1 inline-block text-3xl font-bold sm:text-5xl'>
        Sagar Sehwag
      </h1>
      <p className='text-muted-foreground'>Frontend @ Simpplr | Ex-Zomato</p>

      <p>
        A Software Engineer specializing in the development of scalable web
        applications using React, TypeScript, and a strong commitment to long
        term engineering quality. I enjoy experimenting with Golang as well.
      </p>

      <div className='flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4 sm:pt-4'>
        <button
          onClick={() => setOpen(true)}
          className='inline-flex h-10 cursor-pointer items-center justify-center gap-2 bg-primary px-6 font-mono text-sm font-medium tracking-wider whitespace-nowrap text-primary-foreground uppercase ring-offset-background transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none sm:h-11'
        >
          <FileDown className='h-4 w-4' />
          Resume
        </button>

        <a
          href='https://github.com/sagarsehwag'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex h-10 items-center justify-center gap-2 border border-input bg-background bg-transparent px-6 font-mono text-sm font-medium tracking-wider whitespace-nowrap uppercase ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none sm:h-11'
        >
          <Github className='h-4 w-4' />
          GitHub
        </a>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='flex h-[85vh] max-w-5xl flex-col gap-0 p-0 lg:max-w-6xl xl:max-w-7xl'>
          <DialogHeader className='flex-none border-b px-4 py-3'>
            <div className='flex items-center justify-between pr-8'>
              <div>
                <DialogTitle className='text-base leading-normal'>
                  Resume
                </DialogTitle>
                <DialogDescription className='sr-only'>
                  Sagar Sehwag - Frontend Engineer Resume
                </DialogDescription>
              </div>
              <a
                href={RESUME_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                <ExternalLink className='h-4 w-4' />
                Open in Drive
              </a>
            </div>
          </DialogHeader>
          <div className='min-h-0 flex-1 p-4'>
            <iframe
              src={RESUME_EMBED_URL}
              className='h-full w-full rounded border'
              allow='autoplay'
              title='Sagar Sehwag Resume'
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
