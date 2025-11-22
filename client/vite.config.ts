import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = 'task-board';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
