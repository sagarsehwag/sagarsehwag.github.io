# Sagar Sehwag - Portfolio

A minimal, monospace-themed developer portfolio built with Next.js, TypeScript, and Tailwind CSS. Fully responsive and deployed on both GitHub Pages and Vercel.

**[sagarsehwag.github.io](https://sagarsehwag.github.io)** | **[sagarsehwag.vercel.app](https://sagarsehwag.vercel.app)**

---

## Screenshots

<table>
  <tr>
    <td align="center"><strong>Hero & Projects</strong></td>
    <td align="center"><strong>Projects</strong></td>
    <td align="center"><strong>Experience</strong></td>
  </tr>
  <tr>
    <td><img src="public/screenshots/mobile-view-1-top.png" width="200" alt="Hero section" /></td>
    <td><img src="public/screenshots/mobile-view-2-scroll.png" width="200" alt="Projects section" /></td>
    <td><img src="public/screenshots/mobile-view-4-experience.png" width="200" alt="Experience section" /></td>
  </tr>
</table>

---

## Tech Stack

| Category       | Technology                                             |
| -------------- | ------------------------------------------------------ |
| **Framework**  | [Next.js 16](https://nextjs.org/) (App Router)        |
| **Language**   | [TypeScript](https://www.typescriptlang.org/)          |
| **Styling**    | [Tailwind CSS v4](https://tailwindcss.com/)            |
| **Components** | [shadcn/ui](https://ui.shadcn.com/) + Radix Primitives|
| **Font**       | [Geist Mono](https://vercel.com/font)                  |
| **Theming**    | [next-themes](https://github.com/pacocoursey/next-themes) (dark/light) |
| **Icons**      | [Lucide React](https://lucide.dev/)                    |

---

## Sections

- **Hero** -- Introduction, role, and quick links
- **Projects** -- Notable work with tech tags and GitHub stats
- **Experience** -- Timeline of roles with detailed bullet points
- **Education** -- Academic background
- **Socials** -- Email, LinkedIn, GitHub, Phone

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/sagarsehwag/sagarsehwag.github.io.git
cd sagarsehwag.github.io

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Build & Deploy

```bash
# Production build (outputs static files to ./out)
npm run build
```

### GitHub Pages

Deployments are automated via GitHub Actions. Every push to `main` triggers a build and deploys the static output to GitHub Pages.

See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) for the workflow configuration.

### Vercel

The repository is connected to Vercel for automatic deployments. Every push to `main` triggers a production deployment.

---

## Project Structure

```
src/
  app/
    globals.css        # Theme variables, font config, responsive overrides
    layout.tsx         # Root layout with header, theme provider
    page.tsx           # Home page composing all sections
  components/
    hero.tsx           # Hero section with intro and CTA buttons
    projects.tsx       # Project cards with tags and stats
    experience.tsx     # Work experience timeline
    education.tsx      # Education card
    socials.tsx        # Social links grid
    footer.tsx         # Footer with copyright
    theme-provider.tsx # next-themes provider wrapper
    theme-toggle.tsx   # Dark/light mode toggle
    ui/                # shadcn/ui primitives (badge, button, card, separator)
  lib/
    utils.ts           # Utility functions (cn)
```

---

## License

This project is open source and available for reference. Feel free to take inspiration for your own portfolio.
