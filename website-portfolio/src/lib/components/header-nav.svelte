<script lang="ts">
	import { toggleMode, mode } from 'mode-watcher'
	import { Sun, Moon } from "lucide-svelte"
</script>

<!-- Fixed top-right theme toggle -->
<div class="fixed top-4 right-4 z-50">
	<button onclick={toggleMode} class="opacity-60 hover:opacity-100 transition-opacity">
		{#if $mode === "light"}
			<Sun size={18} />
		{:else}
			<Moon size={18} />
		{/if}
	</button>
</div>
