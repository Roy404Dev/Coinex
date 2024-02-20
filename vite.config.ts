import path from "path";
import { defineConfig } from "vitest/config";
/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  define: {
    __APP_VERSION__: JSON.stringify("v1.0.0"),
    // __API_URL__: "window.__backend_api_url",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup",
  },
});
