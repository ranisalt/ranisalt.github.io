import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { mdsvex } from "mdsvex";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      extensions: [".svelte", ".svx"],
      preprocess: [mdsvex({ extensions: [".svx"] })],
      adapter: adapter({ fallback: "404.html" }),
    }),
  ],
});
