<script lang="ts">
	import '../app.css'
	import { ModeWatcher, toggleMode, mode } from 'mode-watcher'
	import { Toaster } from "$lib/components/ui/sonner";
	import { Separator } from '$lib/components/ui/separator';
	import { page } from "$app/stores"
	import { Sun, Moon } from "lucide-svelte"

	$: currentPath = $page.url.pathname
	$: textColor = $mode === "dark" ? "text-gray-400" : "text-gray-400"
	$: highlightedTextColor = $mode === "dark" ? "text-white" : "text-black"
	let aboutColor = textColor
	let notesColor = textColor
	let projectsColor = textColor

	$: {
		if (currentPath === "/") { aboutColor = highlightedTextColor }
		else { aboutColor = textColor }
		if (currentPath.substring(0, 6) === "/notes") { notesColor = highlightedTextColor }
		else { notesColor = textColor }
		if (currentPath.substring(0, 9) === "/projects") { projectsColor = highlightedTextColor }
		else { projectsColor = textColor }
	}
</script>

<Toaster />
<ModeWatcher />
<div class="p-2 mb-4 w-full justify-end flex">
	<button onclick={toggleMode}>
		{#if $mode === "light"}
			<Sun />
		{:else}
			<Moon />
		{/if}
	</button>
</div>
<div class="flex w-full font-serif">
	<div class="w-1/4 flex flex-col items-center pt-10 italic">
		<div class="flex flex-col text-right gap-3">
			<a href="/" class={aboutColor}>about</a>
			<a href="/notes" class={notesColor}>notes</a>
			<a href="/projects" class={projectsColor}>projects</a>
		</div>
	</div>
	<Separator orientation="vertical" />
	<slot />
</div>	