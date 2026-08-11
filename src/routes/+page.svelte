<script lang="ts">
  import About from "$lib/components/portfolio/About.svelte";
  import Experience from "$lib/components/portfolio/Experience.svelte";
  import Hero from "$lib/components/portfolio/Hero.svelte";
  import Projects from "$lib/components/portfolio/Projects.svelte";
</script>

<svelte:head>
  <title>Ranieri Althoff — Senior Software Engineer</title>
  <meta
    name="description"
    content="Senior software engineer based in Stockholm. 10+ years building full-stack, backend, and platform systems at Volvo Cars, Klarna and beyond."
  />
  <meta property="og:title" content="Ranieri Althoff — Senior Software Engineer" />
  <meta
    property="og:description"
    content="Senior software engineer based in Stockholm. 10+ years across full-stack, backend, and platform systems."
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Hero />
<About />
<Experience />
<Projects />
