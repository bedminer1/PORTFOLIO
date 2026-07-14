<script lang="ts">
	import '../app.css'
	import { ModeWatcher } from 'mode-watcher'
	import { Toaster } from "$lib/components/ui/sonner";
	import { getActiveSection } from "$lib/activeSection.svelte";
	import HeaderNav from '$lib/components/header-nav.svelte'
	import MobileNav from '$lib/components/mobile-nav.svelte'

	let { children } = $props()

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
	<MobileNav {aboutColor} {updatesColor} {projectsColor} />
	<main class="w-2/3 min-w-1/2 py-20 pl-0 md:pl-10">
		{@render children()}
	</main>
</div>
