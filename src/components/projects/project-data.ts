export type Screenshot = {
  src: string;
  alt: string;
};

export type Video = {
  src: string;
  title: string;
  type: 'iframe' | 'video';
};

export type Project = {
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
  videos?: Video[];
  screenshots?: Screenshot[];
};

const contentStudioScreenshots: Screenshot[] = [
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

export const projects: Project[] = [
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
    videos: [
      { src: '/sceenrecordings/cover-demo.mov', title: 'Cover Image Demo', type: 'video' },
      { src: 'https://drive.google.com/file/d/111vowwwOIX4U2DBHNBal4LUIvEusMAuM/preview', title: 'Full Editor Demo', type: 'iframe' },
    ],
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
