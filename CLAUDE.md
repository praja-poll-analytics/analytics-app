# CLAUDE.md

Project notes for Claude Code working in this repository.

## Project

Praja Poll Analytics — Next.js 16 (App Router) marketing site that publishes
state-by-state Indian election predictions, results, and analysis.

## Stack

- Next.js 16 (App Router, Turbopack dev server) on React 19
- TypeScript (strict)
- Tailwind v4 (config-less, via `@tailwindcss/postcss`); base color `neutral`
- shadcn/ui (`new-york` style) for primitives in `components/ui/`
- `react-simple-maps` + `d3-geo` + `topojson-client` for state/India choropleths
- `@tanstack/react-table` for poll result tables
- `recharts` for distribution pies
- `axios` for client CSV fetches; `googleapis` for the contact-form Sheets sink
- Yarn (`yarn.lock`)

## Commands

- `yarn dev` — dev server on **port 3001** (Turbopack)
- `yarn build` — production build
- `yarn start` — start built app
- `yarn lint` — ESLint (Next.js config)
- `npx tsc --noEmit` — type check

## Conventions

- Path alias `@/*` resolves from repo root (see `tsconfig.json`).
- Components grouped by feature folder under `components/`: `home`, `polls`,
  `about`, `contact`, plus `ui` for shadcn primitives.
- Client components are explicitly marked `'use client'` (App Router default
  is server). Anything that uses `useState`, `useEffect`, browser APIs, or
  third-party client libs (recharts, react-simple-maps) needs it.
- Styling is Tailwind utility classes inline; no CSS modules. Brand color is
  `primary` (defined in `app/globals.css`).
- Commit messages: **single short subject line, no body**. Match the existing
  style ("Add WB assembly election predictions", "Fix issue of map being cut off").

## Adding a new state / election

The repeated pattern across Bihar, BMC, TN, WB, Puducherry:

1. **CSVs** under `public/data/<stateKey>/`:
   - `<electionType>-party-wise.csv` — alliance/party seat predictions
   - `<electionType>-constituency-wise.csv` (or `-ward-wise.csv` for Municipal)
   - `electionType` is `assembly`, `loksabha`, or `municipal` — must match the
     `ElectionType` chosen in config.
   - Include a `District` column when you want map clicks to filter the
     constituency table. Values must `startsWith` a district name from the
     state's topojson (`properties.district`). See "Maps" below.
2. **Election config** in `components/polls/data.ts` under `electionData`:
   - Set `estimatedColumn` / `actualColumn` to header strings present in the
     party-wise CSV. The pie chart reads these via `getChartData`.
   - `mergeColumns` lists CSV headers whose consecutive identical values
     should render as a single rowspan'd cell (e.g. `Alliance`, `District`).
   - `partyNameColumns` lists header names that should render with the
     party-color pill cell (always include `'Party Name'`).
   - `isOngoing: true` gives the card a pulsing border + "Latest" badge on the
     polls listing. `isUpcoming: true` makes the link inert.
3. **Routing**: add the state key to `availableStates` in
   `app/polls/states/[id]/page.tsx`.
4. **Updates feed**: add an entry in `components/home/WhatsNewSection.tsx`
   (`category: 'latest' | 'recent' | 'upcoming' | 'research'`).
5. **Party colors**: any party not already in `partyColorMapping`
   (bottom of `components/polls/data.ts`) needs an entry, otherwise the pill
   falls back to the `Others` color.
6. **State stats**: optional row in `stateStats` (MLAs, MPs, ULBs, Rajya Sabha,
   Legislative Council) shown in the home-page state card.

## Maps

`components/polls/maps/StateMapChart.tsx` auto-fits the projection: it fetches
`/topoJsons/states/<key>.json`, runs `d3-geo`'s
`geoMercator().fitExtent(...)` against the loaded features, and passes that
projection straight to `ComposableMap`.

- The projection is passed as a `GeoProjection` cast to `ProjectionFunction`.
  RSM's runtime returns the prop as-is when it's a function and hands it to
  `geoPath().projection(...)`, which needs `.stream()`. Wrapping it in
  another arrow function breaks every state map. (See commit
  "Fix state map crash by passing projection directly".)
- Topojson district names are the canonical IDs — when a state's PDF uses
  newer districts that aren't in the topojson (e.g. WB's Alipurduar split
  from Jalpaiguri, TN's Tirupathur split from Vellore), fold them back into
  the topojson parent district in the CSV's `District` column.
- If a state has no topojson (e.g. Puducherry), `StateMapChart` silently
  renders nothing — the rest of the page (tables, chart) still works.

## Contact form

`app/api/contact/route.ts` writes submissions to a Google Sheet via
`googleapis`. Requires env vars `GOOGLE_CLIENT_EMAIL`, `GOOGLE_PRIVATE_KEY`
(escape newlines as `\n`), and `GOOGLE_SHEET_ID`.

## Source PDFs

PPA's source PDFs live under `tmp/` (gitignored work area, not deployed).
When adding a new poll, read the PDF, extract winners/votes/margins, and
hand-craft the CSVs. The PDFs typically have OCR/text-extraction quirks
(party-name typos like `ADMK` → `AIDMK`, `DMD` → `DMDK`) — normalize to the
canonical party names used elsewhere in the codebase.
