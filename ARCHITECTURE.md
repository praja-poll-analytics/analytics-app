# Architecture

## Overview

Single Next.js 16 App Router project. All pages are statically rendered on
the server; CSV poll data is fetched at request time on the client (via
`axios`) and cached in component state. There is no database — the source of
truth for every poll is a CSV under `public/data/`.

## Top-level layout

```
app/                      Next.js App Router routes
  layout.tsx              Root layout (font, metadata, OG tags)
  page.tsx                Home (hero + India map + updates feed)
  polls/
    page.tsx              Listing of all states with elections
    states/[id]/page.tsx  Per-state detail page (gates by availableStates)
  about/page.tsx          About page (team, advisory, media coverage)
  contact/page.tsx        Contact form
  api/contact/route.ts    POST → Google Sheets append

components/
  home/                   Hero, navigation, footer, India map card,
                          updates feed, election results overview
  polls/                  Per-state detail page + sub-pieces
    data.ts               electionData, stateStats, partyColorMapping
    types.ts              ElectionType, ElectionConfig, CSVData, etc.
    StateDetailsPage.tsx  Orchestrates fetch + table + chart + map
    PollsListingPage.tsx  Wraps ElectionResults for /polls
    ElectionSelector.tsx  Switches between Assembly/LokSabha/etc.
    Methodology.tsx       State-specific methodology blurbs
    maps/
      data.ts             stateAbbreviations, statesMapConfig
      IndiaMapChart.tsx   National choropleth
      StateMapChart.tsx   Per-state choropleth (auto-fit projection)
    tables/
      ResultsTable.tsx    Tanstack table with mergeCells + pagination
      columns.tsx         getTableColumns(csvData) — party-name pills
      utils/csvMapper.ts  Parse CSV → {data, headers, mergeCells}
    charts/
      PartyVoteDistributionChart.tsx  Recharts pie (predicted vs actual)
  about/                  Sections + data for the About page
  contact/                Form + validation
  ui/                     shadcn primitives (button, table, page-loader)

public/
  data/<state>/<type>-<scope>-wise.csv   Poll data (the source of truth)
  topoJsons/states/<state>.json          GeometryCollection per state
  assets/                                Images, icons, logos

lib/utils/                Shared helpers (e.g. number/string formatting)
```

## Data flow: state detail page

```
URL  /polls/states/<id>?election=<n>
  │
  ├── app/polls/states/[id]/page.tsx
  │     └── availableStates whitelist gate → notFound()
  │
  └── components/polls/StateDetailsPage.tsx
        │
        │  config = electionData[stateId]
        │  currentElection = config.availableElections[?election]
        │  electionKey = 'assembly' | 'loksabha' | 'municipal'
        │
        ├── axios.get(`/data/${stateId}/${electionKey}-party-wise.csv`)
        │     → mapCSV(text, currentElection) → CSVData
        │     → ResultTable (party-wise table)
        │     → PartyVoteDistributionChart (predicted/actual pies)
        │
        ├── axios.get(`/data/${stateId}/${electionKey}-{constituency|ward}-wise.csv`)
        │     → mapCSV(...) → CSVData
        │     → ResultTable with subComponent={<DistrictSelector />}
        │
        ├── DistrictSelector
        │     └── StateMapChart fetches /topoJsons/states/<id>.json
        │           ├── builds geoMercator().fitExtent(...)
        │           └── onEntrySelected(districtName) → setSelectedDistrict
        │
        └── selectedDistrict change → useEffect filters constituency rows
              where row['District'].toLowerCase().startsWith(selectedDistrict)
              and recalculates mergeCells for the filtered slice.
```

## Data shape: CSV → CSVData

`mapCSV` (in `tables/utils/csvMapper.ts`):

```
{
  headers:   string[]                       // first CSV row, trimmed
  data:      Record<string,string>[]        // rows keyed by header
  mergeCells: { columnKey, startRow,
                rowSpan, value }[]          // computed from electionConfig.mergeColumns
  partyNameColumns: string[]                // from electionConfig
  totalConfig:    TotalRowConfig | undefined // from electionConfig
}
```

Merge logic: walks each `mergeColumns` column top-to-bottom; consecutive
identical values (or empty values continuing a non-empty value) collapse into
a rowspan'd cell. This is what produces the visually grouped Alliance /
District / Expected Total Seats columns.

## Election types

`ElectionType` (numeric enum) drives both URL conventions and CSV file
naming:

| Type      | electionKey   | Constituency file suffix       |
| --------- | ------------- | ------------------------------ |
| Assembly  | `assembly`    | `assembly-constituency-wise`   |
| LokSabha  | `loksabha`    | `loksabha-constituency-wise`   |
| Municipal | `municipal`   | `municipal-ward-wise`          |

The `ElectionSelector` only renders if a state has more than one configured
election (e.g. AP has both Assembly 2024 and LokSabha 2024).

## Map auto-fit

`StateMapChart` computes the projection at runtime so any state — regardless
of north-south extent or aspect ratio — fits inside the SVG viewBox without
clipping. The flow:

1. Fetch `/topoJsons/states/<key>.json`.
2. Pull the first object: `topo.objects[Object.keys(topo.objects)[0]]`
   (consistently a `GeometryCollection` named e.g. `bihar_district`).
3. `feature(topo, geometryCollection)` → `FeatureCollection`.
4. `geoMercator().fitExtent([[pad,pad], [w-pad, h-pad]], featureCollection)` →
   sized projection with translate + scale baked in.
5. Pass directly to `<ComposableMap projection={proj as ProjectionFunction}>`
   — RSM stores the function and hands it to `geoPath().projection(...)`,
   which expects something with `.stream()` (a `GeoProjection` has it).

The pre-existing `statesMapConfig` (`maps/data.ts`) is now used only as a
"state is supported" check via the `name` lookup; its `scaleMap`/`centerMap`
fields are obsolete since the auto-fit replaces them.

## Adding parties / colors

`partyColorMapping` (bottom of `components/polls/data.ts`) maps party name
→ `{ bg, fg, border }`. The `PartyNameCell` (`tables/columns.tsx`) splits on
`' ('` so a value like `BJP (NDA)` displays the pill as BJP and shows
`(NDA)` underneath. Unknown parties render with the `Others` color.

## Contact form

POSTs to `/api/contact` (`app/api/contact/route.ts`). The route appends a
row to a Google Sheet using a service account (`GOOGLE_CLIENT_EMAIL`,
`GOOGLE_PRIVATE_KEY`, `GOOGLE_SHEET_ID`). No DB; no email; no rate limiting.

## What's deliberately not here

- No CMS, no DB, no auth. Each new poll is a hand-edited CSV + small config
  change.
- No tests. Verification is `yarn lint`, `npx tsc --noEmit`, and visual smoke
  in the dev server.
- No CI configured in-repo.
