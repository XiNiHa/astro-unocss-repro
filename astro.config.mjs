import { defineConfig } from "astro/config";
import unocss from "unocss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      unocss(),
    ]
  },
});