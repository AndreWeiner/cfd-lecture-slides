import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight';
import RevealMath from 'reveal.js/plugin/math';
import RevealNotes from 'reveal.js/plugin/notes';
import RevealInk from '../plugin/ink/v0.3.7/ink.mjs';
import RevealFlashcards from '../plugin/flashcards/v0.1.2/flashcards.mjs';

import 'reveal.js/reset.css';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';
import '../plugin/ink/v0.3.7/ink.css';
import './lecture.css';

const deck = new Reveal({
  katex: {
    local: new URL('libs/katex', document.currentScript?.src || document.baseURI).href
  },
  width: 960,
  height: 700,
  center: false,
  hash: true,
  progress: true,
  slideNumber: 'c',
  plugins: [RevealHighlight, RevealMath.KaTeX, RevealNotes, RevealFlashcards,
    ...(window.__editorInitialize ? [] : [RevealInk])],
  ink: {
    presentation: document.body.dataset.presentation || 'cfd-lecture-introduction',
    pen: { color: '#ffffff' },
    storage: { type: 'indexeddb', autosave: true }
  }
});

// The workspace editor's bridge uses the global instance for live editing.
window.Reveal = deck;
deck.initialize(window.__editorInitialize
  ? { view: 'slide', scrollActivationWidth: null, showHiddenSlides: true }
  : {});
