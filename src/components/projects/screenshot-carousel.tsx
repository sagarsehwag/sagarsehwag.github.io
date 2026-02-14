import { Play } from 'lucide-react';
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
import Image from 'next/image';
import type { Screenshot, Video } from './project-data';

type ScreenshotCarouselProps = {
  screenshots: Screenshot[];
  videos?: Video[];
  videoUrl?: string;
  projectName: string;
};

export function ScreenshotCarousel({
  screenshots,
  videos,
  videoUrl,
  projectName,
}: ScreenshotCarouselProps) {
  // Build a unified video list: prefer explicit videos array, fall back to single videoUrl
  const videoList: Video[] =
    videos ?? (videoUrl ? [{ src: videoUrl, title: 'Watch Demo Video', type: 'iframe' as const }] : []);

  return (
    <div className='min-h-0 flex-1 overflow-y-auto p-4 sm:p-6'>
      <Carousel opts={{ loop: true }} className='mx-auto w-full'>
        <CarouselContent>
          {screenshots.map((screenshot, index) => (
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
        <CarouselPrevious className='-left-3 sm:-left-4 bg-black text-white border-border hover:bg-black/80 hover:text-white dark:bg-black dark:text-white dark:border-input dark:hover:bg-black/80' />
        <CarouselNext className='-right-3 sm:-right-4 bg-black text-white border-border hover:bg-black/80 hover:text-white dark:bg-black dark:text-white dark:border-input dark:hover:bg-black/80' />
      </Carousel>

      {videoList.length > 0 && (
        <Accordion type='single' collapsible className='mt-4 space-y-2'>
          {videoList.map((video, index) => (
            <AccordionItem
              key={index}
              value={`video-${index}`}
              className='border rounded'
            >
              <AccordionTrigger className='px-4 py-3 hover:no-underline'>
                <div className='flex items-center gap-2'>
                  <Play className='h-4 w-4' />
                  <span>{video.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className='px-4'>
                <div className='aspect-video w-full overflow-hidden rounded'>
                  {video.type === 'iframe' ? (
                    <iframe
                      src={video.src}
                      className='h-full w-full'
                      allow='autoplay; encrypted-media'
                      allowFullScreen
                      title={`${projectName} — ${video.title}`}
                    />
                  ) : (
                    <video
                      src={video.src}
                      className='h-full w-full'
                      controls
                      playsInline
                      title={`${projectName} — ${video.title}`}
                    />
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
