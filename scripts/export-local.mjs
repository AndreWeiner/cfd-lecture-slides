import { cp, mkdir, rm } from 'node:fs/promises';

// Publish the editable deck unchanged, including its relative local assets.
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const deck of ['course_intro.html', 'classification.html', 'finite_difference_foundations.html']) {
  await cp(deck, `dist/${deck}`);
}
for (const directory of ['public', 'editor-assets', 'plugin']) {
  await cp(directory, `dist/${directory}`, { recursive: true });
}
