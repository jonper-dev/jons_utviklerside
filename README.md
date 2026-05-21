# Jon's developer corner
A personal developer portfolio and project site built to present my projects, background and contact information.

## About
"Jons utviklerhjørne" ("Jon's developer corner") is my personal corner of the web,
a place where I document and present the projects I have worked on, what I have learned from them,
and who I am as a developer. The site is written primarily in Norwegian.

## Built with
* **Astro** — static site generator with file-based routing and content collections
* **TypeScript** — type safety throughout components and utilities
* **SCSS** — modular styling with BEM conventions, CSS custom properties for theming
* **MDX** — project pages written in Markdown with Astro component support

## Project Structure
```
src/
├── assets/         # Fonts, images, icons and global SCSS partials
├── components/     # Reusable Astro components including project-specific ones
├── content/        # MDX project pages and content collection config
├── layouts/        # Base layout with header, footer and theme handling
├── pages/          # File-based routing. One file per route.
└── utils/          # Shared TypeScript utilities
```

## Features
* Light, dark and system theme switching with a three-position slider
* Scroll-triggered reveal animations with reduced motion support
* Typewriter effect on the hero section
* SVG logo with hover draw animation and blinking underline
* Adaptive favicon following system color preference
* Project pages with scrollytelling layout, image lightbox and contributor credits
* Tech stack tags with auto-resolved Simple Icons logos
* Content collections for structured project data

## Design
The site uses a warm sans-serif and serif font pairing (DM Sans and Lora) with JetBrains Mono for code and technical elements. The terminal/typewriter aesthetic runs as a thread through the logo, hero section and navigation — blinking underlines, monospace fonts and a draw-on-hover arc animation.

## Projects documented
* **PAI chatbot** — a pedagogical AI chatbot built as a bachelor project (MERN stack, Claude API).
* **Horse Race** — a browser-based horse racing game built with web components.
* **Smart home-system for plants** — a web of things home plant-care system using JavaScript and Micro:bit.

## Deployment
The site is deployed to GitHub Pages via GitHub Actions on push to main.
It can be found here: [jonper-dev.github.io/jons_utviklerside/](https://jonper-dev.github.io/jons_utviklerside/)
It's also hosted here: [jpervik.no](https://jpervik.no).

## License
### English language
The code in this project is licensed under the [MIT license](LICENSE) — you are free to use, modify and distribute it.

The content — including text, images, own logo and project descriptions — is copyrighted Jon Petter Ervik, ©&nbsp;2026. All rights reserved.

### Norwegian language
Koden i dette prosjektet er lisensiert under [MIT-lisensen](LICENSE) – du står fritt til å bruke, endre og distribuere den.

Innholdet – inkludert tekst, bilder, egen logo og prosjektbeskrivelser – er opphavsrettslig beskyttet Jon Petter Ervik, ©&nbsp;2026. Alle rettigheter forbeholdt.
