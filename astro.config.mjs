import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  adapter: node({
    mode: "standalone",
  }),
  integrations: [icon(), react(), tailwind()],
  output: "server",
});
