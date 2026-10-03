# Implementation Plan — Suresh Portfolio Features

## Approved scope
Implement the user's approved, single-page personal-portfolio Features section. Preserve the supplied React, TypeScript, Tailwind CSS and lucide-react requirements, exact copy, media URLs, card content, visual values and responsive breakpoints. The approved Blueprint confirms these same requirements; this plan introduces no additional product features.

## Design direction
- **Design movement:** Dark editorial digital craft, with a restrained liquid-glass finish.
- **Core principles:** High-contrast and legible; concise editorial hierarchy; tactile translucent edges; motion contained to supplied ambient videos and software marquees.
- **Color philosophy:** Near-black (#0a0a0a) keeps attention on the content and cinematic media; white and muted white text establish hierarchy; deep teal (#324444) provides a subtle contrast for testimonial and contact cards.
- **Layout paradigm:** A content-led header above three grouped card columns, adapting from one column on mobile to two on tablet and three on large screens; cards retain their distinct grouped structure.
- **Signature elements:** Video-backed cards with restrained dark scrims; thin liquid-glass borders on the call-to-action and software tiles; subtle monochrome noise on teal panels.
- **Interaction philosophy:** The main CTA and contact actions are direct, accessible links; the moving marquees remain decorative and pause under reduced-motion preferences.
- **Animation:** Keep the supplied background clips muted, inline, and looping; software marquees glide linearly in opposite directions and become static for reduced-motion users. Avoid added entrance effects.
- **Typography system:** Inter with a system sans-serif fallback; responsive heading, compact uppercase tracking labels, readable supporting copy, and light oversized metric.
- **Brand essence:** A multidisciplinary creative technologist presenting purposeful digital work; personality: considered, precise, quietly confident.
- **Brand voice:** Direct and collaborative. Examples: “Hi, I'm Suresh!” and “Let’s Build Something Great Together.”
- **Wordmark & logo:** A minimal S monogram will be used only as the platform/project logo asset if required; the page itself follows the supplied text-first header.
- **Signature brand color:** Deep slate teal (#324444), used sparingly on testimonial and contact cards.

## Implementation approach
Create a static Vite application using React and TypeScript, styled with Tailwind CSS and the exact custom CSS requested in `index.css`. Use lucide-react for available iconography at stroke width 1.5, while retaining legible accessible labels for tile names. Compose the interface as a responsive page component with reusable section-label, video-card, and software-marquee components. Use the three provided video URLs unchanged. There is no requested server, database, login, data persistence, or additional external integration; serve the built frontend from the configured WebDev runtime on port 3000.

## Project structure
- `index.html` — document shell, title, Inter font loading, and app mount point.
- `src/main.tsx` — React bootstrap and global stylesheet import.
- `src/App.tsx` — header, three responsive card groups, page copy and media references.
- `src/index.css` — Tailwind layers, global reset/theme, liquid-glass/noise styles, marquees, reduced-motion rules.
- `public/manus-routes.json` — static route manifest for `/`.
- `public/` — favicon and platform metadata logo asset, where applicable.
- `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `tsconfig*.json`, `vite.config.ts`, `postcss.config.js`, `tailwind.config.js` — pinned toolchain, dependencies, build and TypeScript/Tailwind configuration.

## Serving and delivery
Use the existing Cloud WebDev workspace and its port 3000 runtime. Keep the project static and dependency-light. Add a production build declaration for static output, verify the Preview and route manifest, run TypeScript/build checks, then commit the finished source to the canonical `main` branch so WebDev can record its checkpoint. Publishing remains off unless separately requested.