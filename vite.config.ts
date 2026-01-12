import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    // Set base path for GitHub Pages
    // If GITHUB_REPOSITORY is set (in CI), use it to determine base path
    // For user/organization pages (repo name ends with .github.io), use '/'
    // For project pages, use '/repository-name/'
    let base = '/';
    if (process.env.GITHUB_PAGES === 'true') {
      const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'portfolio';
      // If it's a user/organization page, base is '/', otherwise use repo name
      base = repoName.endsWith('.github.io') ? '/' : `/${repoName}/`;
    }
    
    return {
      base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
