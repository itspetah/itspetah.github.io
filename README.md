# peterwang.dev — Personal Portfolio

Personal portfolio website built with **Next.js 15**, **Tailwind CSS**, and **TypeScript**.

Live at → [itspetah.github.io](https://itspetah.github.io)

## Stack

- [Next.js 15](https://nextjs.org) — framework
- [Tailwind CSS](https://tailwindcss.com) — styling
- [TypeScript](https://www.typescriptlang.org) — types
- [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) — font

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customising

All content (bio, experience, projects, skills) lives at the top of `src/app/page.tsx` in plain data objects — no CMS, no database. Just edit and push.

## Deploying

The site is deployed via [GitHub Pages](https://pages.github.com). Any push to `main` triggers a rebuild.