<script lang="ts">
  import { resolve } from "$app/paths";

  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();

  const dtf = new Intl.DateTimeFormat(undefined, { dateStyle: "long" });
</script>

<svelte:head>
  <title>Blog — Ranieri Althoff</title>
  <meta
    name="description"
    content="Read my latest thoughts on frontend development, web performance, and more."
  />
  <meta property="og:title" content="Blog — Ranieri Althoff" />
  <meta
    property="og:description"
    content="Read my latest thoughts on frontend development, web performance, and more."
  />
  <meta property="og:type" content="website" />
</svelte:head>

<div class="divide-y">
  {#each data.posts as { slug, title, published, description } (slug)}
    <article class="break-inside-avoid space-y-3 py-6 text-sm reveal">
      <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
        <a href={resolve(`/blog/${slug}`)} class="font-serif text-xl hover:underline">
          {title}
        </a>

        <time class="text-xs text-muted-foreground uppercase tracking-wider" datetime={published}>
          {dtf.format(new Date(published))}
        </time>
      </div>

      {#if description}
        <p class="text-sm text-muted-foreground">{description}</p>
      {/if}
    </article>
  {/each}
</div>
