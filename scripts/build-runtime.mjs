import { build } from 'vite';
import { copyFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Keep the editable HTML intact; refresh only its external classic-script runtime.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = await mkdtemp(resolve(tmpdir(), 'cfd-deck-runtime-'));
try {
  await build({ configFile: false, root,
    plugins: [{
      name: 'bounded-mobile-media-recovery',
      transform(code, id) {
        if (!id.endsWith('/reveal.js/dist/reveal.mjs')) return;
        const original = /this\.ensureMobileMediaPlaying\s*=\s*this\.ensureMobileMediaPlaying\.bind\(\s*this\s*\)/;
        if (!original.test(code)) throw new Error('Reveal media controller changed; review recovery patch');
        return {
          code: `import { createMobileMediaRecovery } from ${JSON.stringify(resolve(root, 'src/mobile-media-recovery.js'))};\n` +
            code.replace(original, 'this.ensureMobileMediaPlaying = createMobileMediaRecovery()'),
          map: null
        };
      }
    }], build: {
    outDir: output, emptyOutDir: true,
    lib: { entry: 'src/main.js', name: 'CFDLecture', formats: ['iife'], fileName: () => 'deck-runtime.js' },
    minify: true
  } });
  await copyFile(resolve(output, 'deck-runtime.js'), resolve(root, 'public/deck-runtime.js'));
} finally {
  await rm(output, { recursive: true, force: true });
}
