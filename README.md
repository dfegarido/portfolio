## Darwin Fegarido — Portfolio

Personal portfolio site for **Darwin Fegarido** (Software Engineer | Full Stack Web Developer), built with **React + Vite + TypeScript + Tailwind** and enhanced with **Framer Motion** interactions.

- **GitHub**: `https://github.com/dfegarido`
- **LinkedIn**: `https://www.linkedin.com/in/darwinfegarido/`
- **Email**: `darwinfegarido@gmail.com`

## Features

- **Modern UI**: glassmorphism, custom cursor, magnetic hover, scroll progress indicator, parallax elements
- **Interactive background**: layered dot/starfield canvas with smooth cursor connections + depth micro-dots
- **Projects / Experience / Skills**: content-driven from `constants.tsx`
- **AI Chat (Gemini)**: optional API key to enable Gemini chat session (falls back to in-memory Q&A if you don’t provide a key)

## Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **Animations**: Framer Motion
- **Build**: Vite
- **AI (optional)**: Google Gemini via `@google/genai`

## Getting Started (Local)

### Prerequisites

- Node.js (recommended: Node 18+)

### Install

Using pnpm (recommended):

```bash
pnpm install
```

Or npm:

```bash
npm install
```

### Environment Variables (Optional Gemini)

Create a `.env.local` file (or copy from `.env.example`):

```bash
cp .env.example .env.local
```

Set your Gemini key:

```bash
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
```

### Run

```bash
pnpm dev
```

## Build / Preview

```bash
pnpm build
pnpm preview
```

## Customize Content

Most portfolio content is centralized here:

- `constants.tsx`: name, tagline, about, skills, experiences, projects, links
- `public/images/`: project images

## Deployment Notes (GitHub Pages)

This repo is configured for GitHub Pages style hosting.

- `vite.config.ts` switches base path when `GITHUB_PAGES=true` (e.g. `/portfolio/`)
- If you deploy to a different repo name, update the base path accordingly
