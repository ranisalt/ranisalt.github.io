<script lang="ts">
  import "./layout.css";

  import favicon from "$lib/assets/favicon.svg";
  import Nav from "$lib/components/portfolio/Nav.svelte";

  const { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Iosevka+Charon+Mono&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Nav />

<main
  class="container mx-auto max-w-5xl space-y-12 px-6 tracking-wide not-print:py-12 not-print:lg:space-y-24 not-print:lg:py-24"
>
  {@render children()}
</main>
