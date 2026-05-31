<script lang="ts">
	import '../app.css'
	import { ModeWatcher } from 'mode-watcher'
	import { Toaster } from "$lib/components/ui/sonner";
	import { getActiveSection } from '$lib/activeSection.svelte'
	import HeaderNav from '$lib/components/header-nav.svelte'
	import SidebarNav from '$lib/components/sidebar-nav.svelte'

	/** Receive the child page content as a snippet (Svelte 5). */
	let { children } = $props()

	/**
	 * Scroll-spy highlighting — derived from the shared $state rune.
	 *
	 * $derived tracks getActiveSection() through the .svelte.ts boundary
	 * because it follows the $state reactive graph at runtime.
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
</script>

<Toaster />
<ModeWatcher defaultMode="system" />

<HeaderNav />

<div class="flex min-h-screen justify-center items-center mx-4">
	<SidebarNav {aboutColor} {updatesColor} {projectsColor} />

	<main class="w-2/3 min-w-1/2 py-20 pl-10">
		{@render children()}
	</main>
</div>
