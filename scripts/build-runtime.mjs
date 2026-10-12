import { build } from 'vite';
import { copyFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Keep the editable HTML intact; refresh only its external classic-script runtime.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = await mkdtemp(resolve(tmpdir(), 'cfd-deck-runtime-'));
try {
  await build({ configFile: false, root, build: {
    outDir: output, emptyOutDir: true,
    lib: { entry: 'src/main.js', name: 'CFDLecture', formats: ['iife'], fileName: () => 'deck-runtime.js' },
    minify: true
  } });
  await copyFile(resolve(output, 'deck-runtime.js'), resolve(root, 'public/deck-runtime.js'));
} finally {
  await rm(output, { recursive: true, force: true });
}
