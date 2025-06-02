import { defineConfig } from "vite";
import { githubPagesSpa } from "@sctg/vite-plugin-github-pages-spa";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "frontend-practice",
  plugins: [githubPagesSpa({ verbose: true }), react(), tailwindcss()],
});
