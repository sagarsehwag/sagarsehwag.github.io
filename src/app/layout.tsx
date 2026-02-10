import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { Terminal } from 'lucide-react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sagarsehwag.github.io'),
  title: 'Sagar Sehwag - Frontend Engineer',
  description:
    'Frontend Engineer (5+ years) specializing in scalable web applications using React, TypeScript with a strong commitment to long-term engineering quality.',
  openGraph: {
    title: 'Sagar Sehwag - Frontend Engineer',
    description:
      'Frontend Engineer (5+ years) specializing in scalable web applications using React, TypeScript with a strong commitment to long-term engineering quality.',
    images: [
      {
        url: '/og-image.png',
        width: 1565,
        height: 1343,
        alt: 'Sagar Sehwag',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagar Sehwag - Frontend Engineer',
    description:
      'Frontend Engineer (5+ years) specializing in scalable web applications using React, TypeScript with a strong commitment to long-term engineering quality.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='font-sans antialiased'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <header className='sticky top-0 z-50 w-full'>
            <div className='mx-auto max-w-3xl border-b border-border bg-background px-4 sm:px-6'>
              <div className='flex h-14 items-center justify-between'>
                <div className='flex items-center'>
                  <a href='/' className='flex items-center gap-x-2'>
                    <Terminal className='size-6' />
                    <div className='flex items-center justify-center'>
                      <span className='text-2xl sm:text-3xl'>SS</span>
                    </div>
                  </a>
                </div>
                <div className='flex items-center'>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </header>
          <main className='mx-auto max-w-3xl px-4 sm:px-6'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
