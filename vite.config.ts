import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), ViteImageOptimizer()],
});
