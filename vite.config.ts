import { defineConfig, loadEnv } from 'vite';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: mode === 'development' ? '/' : env.VITE_BASE_URL || '/',
    plugins: [react(), eslintPlugin()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    server: {
      open: 'index.html',
    },
  };
});
