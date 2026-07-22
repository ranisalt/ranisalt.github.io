<script lang="ts">
  import "./styles.css";

  import { resolve } from "$app/paths";

  import type { LayoutProps } from "./$types";

  const { data, children }: LayoutProps = $props();
</script>

<svelte:head>
  <title>{data.title} — Ranieri Althoff</title>
  <meta name="description" content={data.description} />
  <meta property="og:title" content={`${data.title} — Ranieri Althoff`} />
  <meta property="og:description" content={data.description} />
  <meta property="og:type" content="article" />
</svelte:head>

<div class="space-y-6">
  <a
    href={resolve("/blog")}
    class="block text-sm tracking-wider opacity-50 transition-opacity hover:opacity-100 print:hidden"
  >
    &larr; Back to all posts
  </a>

  <div
    class="reveal mx-auto prose max-w-5xl prose-invert lg:prose-lg prose-headings:font-serif prose-p:tracking-wider print:prose-hr:hidden"
  >
    <h1>{data.title}</h1>

    {@render children()}
  </div>
</div>
