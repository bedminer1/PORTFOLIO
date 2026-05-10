<script lang="ts">
	import { Separator } from "$lib/components/ui/separator/index.js"

	/**
	 * Sidebar navigation — sticky left nav with a compact separator line.
	 *
	 * Props:
	 *   aboutColor    — Tailwind class for the about button (active / inactive)
	 *   updatesColor  — Tailwind class for the updates button
	 *   projectsColor — Tailwind class for the projects button
	 */

	let { aboutColor, updatesColor, projectsColor }: {
		aboutColor: string
		updatesColor: string
		projectsColor: string
	} = $props()

	/** Smooth-scroll to a section by its DOM id. */
	function scrollTo(id: string) {
		const el = document.getElementById(id)
		if (el) el.scrollIntoView({ behavior: 'smooth' })
	}
</script>

<div class="sticky top-0 self-start h-screen flex flex-col justify-center">
	<div class="flex items-start mx-2 gap-4">
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
		<Separator orientation="vertical" class="self-stretch" />
	</div>
</div>
