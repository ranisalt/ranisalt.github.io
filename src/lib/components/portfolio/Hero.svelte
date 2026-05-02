<script lang="ts">
  import { profile } from "$lib/portfolio-data.json" with { type: "json" };

  const channels: { label: string; href: string; value?: string }[] = [
    { label: "GitHub", href: `https://github.com/${profile.github}` },
    {
      label: "LinkedIn",
      href: `https://linkedin.com/in/${profile.linkedin}`,
    },
    { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  ];
</script>

<section id="top" class="break-inside-avoid">
  <h1 class="reveal font-serif text-5xl">
    {profile.name}
  </h1>

  <p class="reveal mt-2 text-muted-foreground">
    {profile.role} · {profile.location}
  </p>

  <p class="reveal mt-8 max-w-xl leading-relaxed text-balance text-foreground">
    {profile.tagline}
  </p>

  <ul class="reveal mt-8 flex gap-x-6 gap-y-2 text-sm not-print:items-center print:flex-col">
    {#each channels as channel (channel.label)}
      <li class="text-muted-foreground transition-colors hover:text-foreground">
        <a href={channel.href} target="_blank" rel="external noreferrer">
          <span class="-m-3 p-3 print:hidden">{channel.label}</span>
          <span class="not-print:hidden">{channel.label}: {channel.value ?? channel.href}</span>
        </a>
      </li>
    {/each}
  </ul>
</section>
