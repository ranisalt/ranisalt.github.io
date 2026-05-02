<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
</script>

<h2 class="reveal text-xs font-medium tracking-widest text-muted-foreground uppercase">
  {@render children()}
</h2>
