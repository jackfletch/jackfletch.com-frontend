# Upgrade Plan

Incremental plan to modernize the codebase from Next.js 9 / React 16 / styled-components 5 to current versions.

## Phase 1A: Next.js 9 → 10

Stay on React 16 and styled-components 5. Next.js 10 still supports React 16, so this is a safe first hop.

- `npm install next@10`
- Fix any breaking changes (mostly additive features like `next/image`)
- Custom webpack MDX chain and `require.context` should still work (webpack 4)
- Build-time scripts using `next/dist/build/entries` may break — check and fix

## Phase 1B: Next.js 10 → 12, React 16 → 17

React 17 is a stepping-stone release with no new APIs. Next.js 12 introduces SWC and webpack 5.

- `npm install next@12 react@17 react-dom@17`
- Delete `.babelrc` — Next.js 12 uses SWC by default
- Add `compiler: { styledComponents: true }` to `next.config.js` (replaces the Babel plugin)
- **The custom webpack MDX loader chain will break** due to webpack 5. Blog pages will 404 until Phase 2 is complete.

## Phase 2: Blog Pipeline Rewrite

Required here because webpack 5 (Next.js 12) breaks the old custom webpack MDX loader chain.
Use `@next/mdx` — the official Next.js MDX integration.

### 2.1 Install `@next/mdx` and dependencies
```
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

### 2.2 Convert `next.config.js` → `next.config.mjs`
Required because remark/rehype plugins are ESM-only. Use `createMDX()` from `@next/mdx`:
```js
import createMDX from '@next/mdx'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  compiler: { styledComponents: true },
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [/* ... */],
    rehypePlugins: [/* ... */],
  },
})

export default withMDX(nextConfig)
```

### 2.3 Create `mdx-components.tsx` at project root
Required by `@next/mdx`. Can be empty initially or used for global MDX component overrides.

### 2.4 Blog posts stay in `pages/blog/`
Unlike `next-mdx-remote`, `@next/mdx` uses file-based routing — posts remain as `pages/blog/*.md`.

### 2.5 Frontmatter handling
`@next/mdx` doesn't support frontmatter natively. Options:
- Keep the custom `lib/mdx-frontmatter-loader.js` in the webpack chain (it runs before `@mdx-js/loader`)
- Or switch to `remark-frontmatter` + `remark-mdx-frontmatter` to export frontmatter as a JS object

The current loader extracts frontmatter with `gray-matter`, exports it as `frontMatter`, and wraps content in `<BlogPost>`. This pattern still works — we just need to ensure it runs in the right order in the `@next/mdx` webpack config.

### 2.6 Update blog index (`pages/blog.js`)
Replace `require.context` (webpack-specific, unreliable across versions) with `getStaticProps` that:
- Reads `pages/blog/` directory with `fs`
- Parses frontmatter from each `.md` file with `gray-matter`
- Returns sorted post metadata as props

### 2.7 Handle remark/rehype plugins
Since the config is now ESM (`next.config.mjs`), we can use latest ESM-only plugin versions:

| Plugin | Current | Plan |
|---|---|---|
| `remark-numbered-footnote-labels` | CJS | Keep or find ESM alternative |
| `rehype-highlight` | v3 (CJS) | Replace with `rehype-pretty-code` (shiki) — match current highlight.js visual style |
| `rehype-slug` | v2 (CJS) | Upgrade to latest ESM version |
| `rehypeCodeSnippetIds` (custom) | CJS | Port to ESM |

### 2.8 Rewrite build-time scripts
- **RSS feed** (`lib/build/generateFeeds.js`): Rewrite to use `gray-matter` + filesystem reads directly
- **Sitemap** (`lib/build/generateSitemap.js`): Replace broken `next/dist/build/entries` import with simple filesystem scan or `next-sitemap` package
- **Post metadata** (`lib/build/generatePostMetadata.js`): Simplify — shared utility for both RSS and blog index

### 2.9 Delete dead files
- `lib/build/getPages.js` (used Next.js internals)
- `lib/excerpt/` directory (excerpt generation simplified or inlined)

## Phase 1C: Next.js 12 → 14, React 17 → 18

- `npm install next@14 react@18 react-dom@18`
- No major API changes needed (Pages Router is stable)
- `<Link>` still supports old `<a>` child pattern via `legacyBehavior`

## Phase 1D: Next.js 14 → 15, React 18 → 19

- `npm install next@15 react@19 react-dom@19`
- React 19 drops `prop-types` runtime checking (no-ops, don't break)

## Phase 1E: styled-components 5 → 6

Can happen at any point after Phase 1B.

- `npm install styled-components@6`
- Drop `styled-normalize` — inline normalize CSS or use a lightweight alternative
- Update `_document.js` — remove `ServerStyleSheet` (SWC handles SSR)
- Convert `_app.js` from class to function component

## Phase 3: Next.js API Fixes

- Remove `<a>` children from `<Link>` components (Hero, Navbar, Button, ConditionalLink, BlogCard)
- Replace `withRouter` HOC with `useRouter` hook (meta.js, navbar/index.js)
- Remove unnecessary `import React from 'react'` statements

Files to update:
- `components/Hero.js`
- `components/navbar/index.js`
- `components/Button.js`
- `components/ConditionalLink.js`
- `components/meta.js`

## Phase 4: GA4 Migration

- Update `config/env.js` — change tracking ID to `G-SW7ZWP5XTQ`
- Update `lib/gtag.js` — simplify for GA4 API
- Update `components/meta.js` — script tags already pull from config, just verify

## Phase 5: TypeScript

- `touch tsconfig.json && npm install --save-dev typescript @types/react @types/node`
- Next.js auto-populates `tsconfig.json` on next build
- Convert files incrementally: config → data → lib → components → pages
- Replace `prop-types` with TypeScript interfaces, then `npm uninstall prop-types`

## Phase 6: Dependency Cleanup & ESLint

Remove dead dependencies:
- `isomorphic-unfetch`, `babel-plugin-styled-components`, `babel-eslint`
- `eslint-config-react-app`, `eslint-plugin-flowtype`, `prettier-eslint`
- `styled-normalize`, `@mdx-js/loader`, `stringify-object`
- `remark`, `remark-frontmatter`, `unist-util-filter` (if absorbed into `@next/mdx` pipeline)
- `mdast-util-to-hast`, `hast-util-to-html`, `underscore.string` (if excerpt logic simplified)

Modernize ESLint:
- Replace `.eslintrc` with flat config (`eslint.config.mjs`)
- `npm install --save-dev eslint@latest eslint-config-next eslint-config-prettier eslint-plugin-prettier prettier`
- Remove `public/css/highlight.css` and its import from `_app.js`

## Phase 7: Docker & CI

- `Dockerfile`: `node:10-alpine` → `node:22-alpine`, use Next.js `output: 'standalone'`
- CI workflow:
  - `actions/checkout@master` → `actions/checkout@v4`
  - Replace `::set-env` with `echo "IMAGE_NAME=..." >> $GITHUB_ENV`
  - Consider `gcr.io` → Artifact Registry (`us-docker.pkg.dev`)
