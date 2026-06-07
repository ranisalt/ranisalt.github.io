import * as path from "node:path";

import type { SvelteComponent } from "svelte";

import type { Pathname } from "$app/types";

import type { PageServerLoad } from "./$types";

type WithoutPrefix<Prefix extends string, T extends string> = T extends `${Prefix}${infer Suffix}`
  ? Suffix
  : never;

export const load: PageServerLoad = async () => {
  const modules = import.meta.glob<{
    default: SvelteComponent;
    metadata: {
      title: string;
      description?: string;
      published?: string;
      updated?: string;
    };
  }>("$posts/**/*.svx");

  const posts = await Promise.all(
    Object.entries(modules).map(async ([filename, resolver]) => {
      const { dir } = path.parse(filename);
      const slug = path.basename(dir) as WithoutPrefix<"/blog/", Pathname & `/blog/${string}`>;

      const { metadata } = await resolver();
      return { slug, ...metadata };
    }),
  );

  return {
    posts: posts
      .filter(
        (post): post is typeof post & { published: NonNullable<typeof post.published> } =>
          post.published != null,
      )
      .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime()),
  };
};
