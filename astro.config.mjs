import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://scrapeman.app",
	integrations: [tailwind(), react(), sitemap()],
	output: "static",
	trailingSlash: "never",
});
