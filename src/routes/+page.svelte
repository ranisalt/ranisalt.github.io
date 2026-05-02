<script lang="ts">
  import About from "$lib/components/portfolio/About.svelte";
  import Experience from "$lib/components/portfolio/Experience.svelte";
  import Hero from "$lib/components/portfolio/Hero.svelte";
  import Nav from "$lib/components/portfolio/Nav.svelte";
  import Projects from "$lib/components/portfolio/Projects.svelte";
</script>

<svelte:head>
  <title>Ranieri Althoff — Senior Frontend Engineer</title>
  <meta
    name="description"
    content="Senior Frontend Engineer based in Stockholm. 8+ years building scalable web products at Volvo Cars, Klarna and beyond."
  />
  <meta property="og:title" content="Ranieri Althoff — Senior Frontend Engineer" />
  <meta
    property="og:description"
    content="Senior Frontend Engineer based in Stockholm. 8+ years building scalable web products."
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Nav />

<main class="container mx-auto space-y-24 px-6 not-print:py-24 print:space-y-12">
  <Hero />
  <About />
  <Experience />
  <Projects />
</main>
