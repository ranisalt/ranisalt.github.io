import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".svx"],
  kit: { adapter: adapter({ fallback: "404.html" }), alias: { $posts: "src/routes/blog/(posts)" } },
  preprocess: [mdsvex({ extensions: [".svx"] })],
};

export default config;
