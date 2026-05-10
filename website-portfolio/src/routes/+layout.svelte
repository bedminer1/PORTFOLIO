<script lang="ts">
	import '../app.css'
	import { ModeWatcher, toggleMode, mode } from 'mode-watcher'
	import { Toaster } from "$lib/components/ui/sonner";
	import { Separator } from '$lib/components/ui/separator';
	import { Sun, Moon } from "lucide-svelte"
	import { getActiveSection } from '$lib/activeSection.svelte'

	/**
	 * Scroll-spy highlighting.
	 *
	 * $derived tracks getActiveSection() through the .svelte.ts boundary
	 * because it follows the $state reactive graph — unlike $: which only
	 * tracks top-level variable reads at compile time.
	 */
	let current = $derived(getActiveSection())

	let aboutColor = $derived(current === 'about'
		? 'text-ctp-red-light dark:text-ctp-red-dark'
		: 'text-muted-foreground')
	let updatesColor = $derived(current === 'updates'
		? 'text-ctp-red-light dark:text-ctp-red-dark'
		: 'text-muted-foreground')
	let projectsColor = $derived(current === 'projects'
		? 'text-ctp-red-light dark:text-ctp-red-dark'
		: 'text-muted-foreground')

	/** Smooth-scroll to a section by its DOM id. */
	function scrollTo(id: string) {
		const el = document.getElementById(id)
		if (el) el.scrollIntoView({ behavior: 'smooth' })
	}
</script>

<Toaster />
<ModeWatcher defaultMode="light" />

<!-- Theme toggle -- fixed top-right, always accessible -->
<div class="fixed top-4 right-4 z-50">
	<button onclick={toggleMode} class="opacity-60 hover:opacity-100 transition-opacity">
		{#if $mode === "light"}
			<Sun size={18} />
		{:else}
			<Moon size={18} />
		{/if}
	</button>
</div>

<!-- Sidebar nav + main content, side-by-side -->
<div class="flex min-h-screen max-w-5xl mx-auto px-6">
	<!-- Sticky sidebar -- vertically centred, tracks scroll-spy -->
	<nav class="w-28 shrink-0 sticky top-0 self-start h-screen flex flex-col justify-center">
		<div class="flex flex-col gap-5 text-sm">
			<button
				onclick={() => scrollTo('about')}
				class={aboutColor + ' cursor-pointer bg-transparent border-none italic tracking-wide'}
			>about</button>
			<button
				onclick={() => scrollTo('updates')}
				class={updatesColor + ' cursor-pointer bg-transparent border-none italic tracking-wide'}
			>updates</button>
			<button
				onclick={() => scrollTo('projects')}
				class={projectsColor + ' cursor-pointer bg-transparent border-none italic tracking-wide'}
			>projects</button>
		</div>
	</nav>

	<Separator orientation="vertical" class="h-auto" />

	<!-- Page content rendered by the router (+page.svelte) -->
	<main class="flex-1 py-20 pl-10">
		<slot />
	</main>
</div>
