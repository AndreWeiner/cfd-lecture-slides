# CFD lecture slides

Reveal.js slides for the Computational Fluid Dynamics course, with the versioned Reveal Ink handwriting plugin used by the ML-CFD slides.

Requires Node.js 22.12 or newer:

```bash
npm install
npm start
```

Build the static site with `npm run build`; output is written to `dist/` and can be hosted from any static web server or GitHub Pages.

Open the root `course_intro.html` directly in Firefox or Chromium. Its CSS is embedded, its classic JavaScript runtime is stored in `public/deck-runtime.js`, and its figures and videos come from `public/media/`. Edit `course_intro.html` directly, including in the local Reveal editor. Run `npm run build` to copy the deck and its local assets into `dist/` for publication; this does not overwrite the editable deck. Equations use the local KaTeX renderer and fonts in `public/libs/katex/`, copied from the general slides repository, without requiring an internet connection.

## Reveal Ink

The deck pins Reveal Ink 0.3.7 in `plugin/ink/v0.3.7/`. Annotations are stored locally in the browser. Use **More → Export JSON** for a durable backup. Give every slide a stable, unique `id` so its annotations survive reordering.

To adopt a later plugin release, build it in the separate `reveal-ink` repository and run its `scripts/copy-release.mjs` script against this repository, then update the imports in `src/main.js`.

## Lecture 1 structure

`course_intro.html` contains 39 slides: a title and eight horizontal sections, with topics arranged vertically. Section zero uses incremental fragments for AI-learning guidance; the remaining slides use headings, visuals, and space for handwriting. Presenter notes carry explanatory prompts. Figures and videos are copied from the course repository into `public/media/`; refresh these copies when the lecture assets change.
