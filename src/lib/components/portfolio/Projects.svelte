<script lang="ts">
  import RepoCard from "$lib/components/portfolio/RepoCard.svelte";
  import SectionLabel from "$lib/components/portfolio/SectionLabel.svelte";
  import { githubRepos } from "$lib/portfolio-data.json" with { type: "json" };
</script>

<section id="projects" class="break-inside-avoid space-y-6">
  <div class="reveal flex items-baseline justify-between gap-6">
    <SectionLabel>Projects</SectionLabel>

    <p class="text-xs text-muted-foreground">Stars, forks and language pulled from GitHub</p>
  </div>

  <div class="divide-y">
    {#each githubRepos as slug (slug)}
      <RepoCard {slug} />
    {/each}
  </div>
</section>
