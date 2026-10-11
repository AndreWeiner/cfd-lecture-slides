import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rolldownOptions: {
      input: 'course_intro.html'
    },
    outDir: 'dist',
    emptyOutDir: true
  }
});
