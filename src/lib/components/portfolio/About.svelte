<script lang="ts">
  import SectionLabel from "$lib/components/portfolio/SectionLabel.svelte";
  import { about, languages, skills } from "$lib/portfolio-data.json" with { type: "json" };

  const skillGroups = Object.entries(skills);
</script>

<section id="about" class="space-y-12 *:break-inside-avoid">
  <div class="space-y-6">
    <SectionLabel>About</SectionLabel>

    <p class="reveal leading-relaxed text-foreground">
      {about}
    </p>
  </div>

  <div class="space-y-6">
    <SectionLabel>Skills</SectionLabel>

    <dl class="reveal grid grid-cols-[max-content_1fr] gap-x-6 gap-y-3 text-sm">
      {#each skillGroups as [group, items] (group)}
        <div class="col-span-full grid grid-cols-subgrid items-baseline">
          <dt class="text-muted-foreground">{group}</dt>
          <dd>{items.join(", ")}</dd>
        </div>
      {/each}
    </dl>
  </div>

  <div class="space-y-6">
    <SectionLabel>Languages</SectionLabel>

    <dl class="reveal grid grid-cols-[max-content_1fr] gap-x-6 gap-y-3 text-sm">
      {#each languages as language (language.name)}
        <div class="col-span-full grid grid-cols-subgrid items-baseline">
          <dt class="text-muted-foreground">{language.name}</dt>
          <dd>{language.level}</dd>
        </div>
      {/each}
    </dl>
  </div>
</section>
