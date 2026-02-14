import { ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScreenshotCarousel } from './screenshot-carousel';
import type { Project } from './project-data';

type ProjectDemoDialogProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDemoDialog({
  project,
  onClose,
}: ProjectDemoDialogProps) {
  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className={`flex flex-col gap-0 p-0 ${
          project?.screenshots
            ? 'max-w-3xl lg:max-w-5xl xl:max-w-6xl max-h-[90vh]'
            : 'h-[85vh] max-w-5xl lg:max-w-6xl xl:max-w-7xl'
        }`}
      >
        <DialogHeader className='flex-none border-b px-4 py-3'>
          <div className='flex items-center justify-between pr-8'>
            <div className='min-w-0 pr-4'>
              <DialogTitle className='text-base leading-normal truncate'>
                {project?.name}
              </DialogTitle>
              <DialogDescription className='sr-only'>
                Live demo of {project?.name}
              </DialogDescription>
            </div>
            {!project?.screenshots && project?.demoUrl && (
              <a
                href={project.demoUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex shrink-0 items-center gap-1 rounded-xs text-xs text-muted-foreground transition-colors hover:text-foreground'
                title='Open in new tab'
              >
                <ExternalLink className='h-3.5 w-3.5' />
                Open in new tab
              </a>
            )}
          </div>
        </DialogHeader>

        {project?.screenshots ? (
          <ScreenshotCarousel
            screenshots={project.screenshots}
            videos={project.videos}
            videoUrl={project.videoUrl}
            projectName={project.name}
          />
        ) : (
          <div className='min-h-0 flex-1 p-4'>
            {project?.videoUrl ? (
              <iframe
                src={project.videoUrl}
                className='h-full w-full rounded border'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title={`${project.name} Demo`}
              />
            ) : (
              project?.demoUrl && (
                <iframe
                  src={project.demoUrl}
                  className='h-full w-full rounded border'
                  title={`${project.name} Demo`}
                />
              )
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
