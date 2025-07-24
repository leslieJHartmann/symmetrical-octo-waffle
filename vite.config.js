import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/symmetrical-octo-waffle/',  // <--- GitHub repo name
  plugins: [react()],
});
