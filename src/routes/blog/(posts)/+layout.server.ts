import * as path from "node:path";

import { error } from "@sveltejs/kit";

import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ route }) => {
  const slug = path.basename(route.id);

  const {
    metadata,
  }: {
    metadata: {
      title: string;
      description?: string;
      published?: string;
      updated?: string;
    };
  } = await import(`./${slug}/+page.svx`);

  if (!metadata.published) {
    error(404);
  }

  return { ...metadata };
};
