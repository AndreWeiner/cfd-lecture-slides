import { cp, mkdir, rm } from 'node:fs/promises';

// Publish the editable deck unchanged, including its relative local assets.
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('course_intro.html', 'dist/course_intro.html');
for (const directory of ['public', 'editor-assets', 'plugin']) {
  await cp(directory, `dist/${directory}`, { recursive: true });
}
