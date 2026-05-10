<script lang="ts">
	import { onMount } from 'svelte'
	import { setActiveSection } from "$lib/activeSection.svelte"
	import About from "$lib/components/about.svelte"
	import Updates from "$lib/components/updates.svelte"
	import Projects from "$lib/components/projects.svelte"

	/**
	 * Scroll-spy: on each scroll event (and on mount), find which section's
	 * top edge is closest to the top of the viewport (with an 80px offset for
	 * the scroll-mt buffer). The last matching section wins — this naturally
	 * handles tall sections that span most of the viewport.
	 *
	 * Uses a passive scroll listener instead of IntersectionObserver because
	 * the sequential-section check is simpler and avoids the "multiple sections
	 * concurrent" ambiguity that observers introduce.
	 */
	onMount(() => {
		function onScroll() {
			/** Scroll position + header offset to account for scroll-mt-16 */
			const scrollY = window.scrollY + 80

			/** Walk sections top-to-bottom; the last one whose offsetTop is
			 *  above scrollY is the one the user is currently reading. */
			let current: 'about' | 'updates' | 'projects' = 'about'
			const ids: ('about' | 'updates' | 'projects')[] = ['about', 'updates', 'projects']
			for (const id of ids) {
				const el = document.getElementById(id)
				if (el && el.offsetTop <= scrollY) current = id
			}
			setActiveSection(current)
		}

		// Initialise on mount, then track scroll
		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	})
</script>

<div class="flex flex-col gap-32 pb-32">
	<About />
	<Updates />
	<Projects />
</div>
