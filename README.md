# Photo Browser

A single-page app for browsing photos, albums and photographers, built with React.

**Live demo:** https://photo-browser.muathothman.dev

Data comes from the [JSONPlaceholder](https://jsonplaceholder.typicode.com) REST API. Its image URLs no longer work, so images are generated with [picsum.photos](https://picsum.photos), seeded by photo id so each photo always shows the same image.

## Features

- **Photo grid** with "Load more" pagination (20 photos per page, 5000 in total)
- **Photo detail page** with the full-size image, its album and its photographer
- **Shareable URLs** for every photo, album and user, which also work when opened directly or refreshed
- **Back** button that stays in the app even when the page was opened from a shared link
- **Share** button that copies the page link to the clipboard
- **Albums**, **album** and **user** pages
- "Picked for you" featured photo on the home page
- Not found page for unknown URLs and missing photos, albums or users
- Responsive layout (2 to 5 columns) and dark mode support

## Assignment requirements

| Requirement | How it's met |
|---|---|
| Single-page app with routing and browser history | React Router (`BrowserRouter`), page changes without reloads, Back/Forward supported |
| Fetch photos from `/photos` and show thumbnails | `useSWRInfinite` with `_page` and `_limit`, images from picsum |
| Detail view with full image and related info | `/photos/:id` shows the image, title, album and user |
| Shareable photo URLs | each photo has its own URL; a Vercel rewrite serves the app for deep links |
| Works in the latest Chrome | verified with Playwright E2E tests in Chromium |
| Optional: users, albums, pagination, tests | all included |

## Tech stack

| Tool | Why |
|---|---|
| React 19 + Vite | fast dev server and optimised production build |
| React Router 7 | client-side routing, URL parameters, layout routes |
| SWR | data fetching with caching, deduplication and loading/error states |
| Tailwind CSS 4 | styling next to the markup, design tokens defined once |
| Vitest + React Testing Library | unit and component tests |
| Playwright | end-to-end tests in a real browser |

## Getting started


```bash
git clone https://github.com/MuathOthman/photo-browser-v2.git
cd photo-browser-v2
npm install
npm run dev
```


### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | start the development server |
| `npm run build` | build for production into `dist/` |
| `npm run preview` | serve the production build locally |
| `npm run lint` | run ESLint |
| `npm test` | run unit and component tests (Vitest, watch mode) |
| `npm run test:e2e` | build the app and run the E2E tests (Playwright) |
| `npm run test:e2e:report` | open the last E2E HTML report |

## Testing

| Level | What's tested | Tool |
|---|---|---|
| Unit | helpers (`initials`, image URLs) and the fetcher, with a mocked `fetch` | Vitest |
| Component | `PhotoCard` renders the right image, alt text and link | React Testing Library |
| End-to-end | deep links (including reload), not found pages, Load more, navigation, Back and Share | Playwright |



## Project structure

Code is organised **by feature**. Anything used by more than one feature lives in a shared folder.

```
src/
├── api/           fetcher (adds the base URL, throws on HTTP errors)
├── components/    shared UI: Navbar, MainLayout, HeroBanner, ScrollToTop
├── pages/         NotFoundPage
├── utils/         image URL and text helpers
└── features/
    ├── photos/    pages, components and hooks for photos
    ├── albums/    pages, components and hooks for albums
    └── users/     pages and hooks for users
e2e/               Playwright end-to-end tests
```

## Design decisions


## Deployment

Deployed on **Vercel**. Because the app handles routing in the browser, `vercel.json` rewrites every path to `index.html`, so links like `/photos/42` work when opened directly or refreshed:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

## Known limitations and next steps


## Use of AI
