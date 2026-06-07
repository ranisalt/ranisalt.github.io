<script lang="ts">
  import { resolve } from "$app/paths";
  import { profile } from "$lib/portfolio-data.json" with { type: "json" };

  const links = [
    { label: "About", href: resolve("/#about") },
    { label: "Work", href: resolve("/#work") },
    { label: "Projects", href: resolve("/#projects") },
    { label: "Writing", href: resolve("/blog") },
  ];
</script>

<header class="sticky inset-x-0 top-0 z-10 border-b backdrop-blur-sm print:hidden">
  <nav class="container max-w-5xl mx-auto flex items-center justify-between gap-6 px-6 py-4">
    <a href={resolve("/")} class="font-serif italic tracking-wide" aria-label="Home">
      {profile.name.split(" ")[0]}<span class="text-primary">.</span>
    </a>

    <ul class="hidden items-center gap-6 text-sm sm:flex tracking-wider">
      {#each links as link (link.href)}
        <li>
          <a
            href={link.href}
            class="-m-3 p-3 text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
