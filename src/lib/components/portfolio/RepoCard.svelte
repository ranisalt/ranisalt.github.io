<script lang="ts">
  import LinkIcon from "@iconify-svelte/lucide/external-link";
  import ForkIcon from "@iconify-svelte/lucide/git-fork";
  import StarIcon from "@iconify-svelte/lucide/star";
  import { onMount } from "svelte";

  import { fetchGithubRepo, type GithubRepo } from "$lib/github";

  type Props = {
    slug: string;
  };

  const { slug }: Props = $props();

  const name = $derived(slug.split("/")[1] ?? slug);

  let data = $state<Promise<GithubRepo>>(new Promise(() => {}));

  onMount(() => {
    const controller = new AbortController();
    data = fetchGithubRepo(slug, controller.signal);
    return () => controller.abort();
  });
</script>

<article class="block break-inside-avoid space-y-3 py-6">
  <header class="reveal">
    <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
      <header class="reveal">
        {#snippet externalLink(href: string, value: string)}
          <a
            {href}
            rel="external noreferrer"
            target="_blank"
            class="group flex items-center gap-x-1 font-serif text-lg"
          >
            <span>{value}</span>
            <LinkIcon
              class="size-[1em] text-muted-foreground transition-colors group-hover:text-primary"
              aria-hidden="true"
            />
          </a>
        {/snippet}

        {#await data}
          {@render externalLink(`https://github.com/${slug}`, name)}
        {:then data}
          {@render externalLink(data.html_url, data.name)}
        {:catch}
          {@render externalLink(`https://github.com/${slug}`, name)}
        {/await}

        {#await data}
          <p class="w-20 animate-pulse rounded-md bg-muted-foreground text-sm text-transparent">
            —
          </p>
        {:then data}
          <p class="text-sm text-muted-foreground">{data.language}</p>
        {:catch}
          <p class="text-sm text-muted-foreground">Couldn't load repo info.</p>
        {/await}
      </header>

      <div class="flex items-center gap-2 text-sm">
        {#await data}
          <span class="h-lh w-[5ch] animate-pulse rounded-md bg-muted-foreground text-transparent"
          ></span>
        {:then data}
          <div class="inline-flex items-center gap-1">
            <StarIcon class="size-[1em] text-muted-foreground" aria-hidden="true" />
            <span class="text-muted-foreground">{data?.stargazers_count ?? "—"}</span>
          </div>
        {/await}

        {#await data}
          <span class="h-lh w-[5ch] animate-pulse rounded-md bg-muted-foreground text-transparent"
          ></span>
        {:then data}
          <div class="inline-flex items-center gap-1">
            <ForkIcon class="size-[1em] text-muted-foreground" aria-hidden="true" />
            <span class="text-muted-foreground">{data?.forks_count ?? "—"}</span>
          </div>
        {/await}
      </div>
    </div>
  </header>

  {#await data}
    <p class="reveal w-sm animate-pulse rounded-md bg-muted-foreground text-sm text-transparent">
      —
    </p>
  {:then data}
    <p class="reveal text-sm text-pretty text-muted-foreground">
      {data?.description ?? "No description."}
    </p>
  {:catch}
    <p class="reveal text-sm text-pretty text-muted-foreground">Couldn't load repo info.</p>
  {/await}
</article>
