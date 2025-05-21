import { cpSync } from 'node:fs';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/main.ts'], // define ponto de entrada explícito
  outDir: 'dist',
  format: ['cjs'],        // apenas 'cjs' para compatibilidade Node.js
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  target: 'es2020',       // recomendável para Node.js 16+
  dts: false,             // não precisa de arquivos .d.ts no dist

  onSuccess: async () => {
    cpSync('src/utils/translations', 'dist/translations', { recursive: true });
  },

  loader: {
    '.json': 'file',      // permite importar JSON como recurso
  },
});
