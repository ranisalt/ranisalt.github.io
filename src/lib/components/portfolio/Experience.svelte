<script lang="ts">
  import SectionLabel from "$lib/components/portfolio/SectionLabel.svelte";
  import { education, experiences } from "$lib/portfolio-data.json" with { type: "json" };
</script>

<section id="work" class="space-y-12 *:break-inside-avoid">
  <div class="space-y-6">
    <SectionLabel>Experience</SectionLabel>

    <div class="divide-y">
      {#each experiences as item (`${item.company}-${item.period}`)}
        <article class="break-inside-avoid space-y-3 py-6 text-sm">
          <header class="reveal">
            <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
              <h3>
                <span class="font-serif text-lg">{item.role}</span>
                <span class="text-muted-foreground"> · {item.company}</span>
              </h3>

              <p class="text-xs text-muted-foreground uppercase">
                {item.period}
              </p>
            </div>

            <p class="text-sm text-muted-foreground">{item.location}</p>
          </header>

          <ul class="reveal space-y-2">
            {#each item.bullets as bullet (`${item.company}-${bullet}`)}
              <li class="text-pretty before:text-muted-foreground/50 before:content-['—_']">
                {bullet}
              </li>
            {/each}
          </ul>

          {#if item.stack}
            <ul
              class="reveal flex flex-wrap text-muted-foreground *:not-last:after:mx-2 *:not-last:after:content-['·']"
            >
              {#each item.stack as stackItem (stackItem)}
                <li class="text-xs not-print:font-mono">
                  {stackItem}
                </li>
              {/each}
            </ul>
          {/if}
        </article>
      {/each}
    </div>
  </div>

  <div class="space-y-6">
    <SectionLabel>Education</SectionLabel>

    <div class="divide-y">
      {#each education as item (`${item.school}-${item.period}`)}
        <article class="break-inside-avoid space-y-3 py-6 text-sm">
          <header class="reveal">
            <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
              <h3 class="font-serif text-lg">{item.degree}</h3>

              <p class="text-xs text-muted-foreground uppercase">
                {item.period}
              </p>
            </div>

            <p class="text-sm text-muted-foreground">{item.school}</p>
          </header>

          <p class="reveal text-pretty">
            {item.detail}
          </p>
        </article>
      {/each}
    </div>
  </div>
</section>
