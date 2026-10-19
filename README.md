# CFD lecture slides

Reveal.js slides for the Computational Fluid Dynamics course, with versioned Reveal Ink handwriting and Reveal Flashcards review plugins.

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

`course_intro.html` contains 24 slides in six horizontal groups, with topics arranged vertically. The deck begins with the title and AI-learning guidance, followed by the CFD introduction, equations, and belt-flow example. The final slide provides 20 flashcards based on Lecture 1. Presenter notes carry explanatory prompts. Figures and videos are copied from the course repository into `public/media/`; refresh these copies when the lecture assets change.

## Reveal Flashcards

The deck pins Reveal Flashcards 0.1.2 in `plugin/flashcards/v0.1.2/`. The final **Review — Lecture 1** slide contains 20 questions and answers. Reveal an answer, then select **Again**, **Hard**, or **Good** to manage the current review session. Progress is local to the current page load; **Start again** reshuffles the cards. The review controls remain above the annotation toolbar, and long answers scroll within the card.

When changing plugin imports or configuration in `src/main.js`, run `npm run build:runtime` to regenerate `public/deck-runtime.js`, then run `npm run build`. The runtime stays an external classic script, so direct HTML opening and the editor's global `window.Reveal` integration are preserved.

## Lecture 2 structure

Open `classification.html` for transport phenomena and PDE classification. The deck contains 41 slides in eight horizontal groups (including the title); move vertically through each topic. Titled blank canvases leave room for live derivations. All 18 sketches and animations from the course's Lecture 2 are included in their dark variants, with local video controls and explanatory presenter notes. Its annotation storage is separate from Lecture 1. Both decks are included by `npm run build`.

Lecture 2 ends with **Review — Lecture 2**, containing 20 flashcards based on `cfd-lecture/notebooks/lecture_02.py`. The review uses the same answer-reveal and Again/Hard/Good controls as Lecture 1.
