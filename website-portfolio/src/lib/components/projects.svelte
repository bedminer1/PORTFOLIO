<script lang="ts">
	/**
	 * Projects — expandable project cards.
	 *
	 * Each project has a toggleable description. Links to source repos
	 * appear as "↗ source" when expanded. Same collapse/expand UX as
	 * the updates section for visual consistency.
	 *
	 * Data imported from $lib/projects.ts.
	 */
	import { projects } from "$lib/projects"

	/**
	 * Map of project-title → expanded-state.
	 * Re-assigned after mutation to signal Svelte's reactivity system.
	 * @type {Record<string, boolean>}
	 */
	let expanded: Record<string, boolean> = {}

	/** Toggle a project's expanded state by its title key. */
	function toggle(title: string) {
		expanded[title] = !expanded[title]
		expanded = expanded // trigger reactivity
	}
</script>

<section id="projects" class="scroll-mt-16 h-[60vh]">
	<h1 class="text-2xl mb-8 text-foreground">Projects</h1>

	<div class="max-w-prose space-y-1 text-muted-foreground">
		{#each projects as project}
		<div>
			<!-- Toggle button -- project title left, arrow right -->
			<button
				onclick={() => toggle(project.title)}
				class="flex w-full items-baseline justify-between gap-4 text-left bg-transparent border-none cursor-pointer text-muted-foreground hover:text-foreground"
			>
				<span>{project.title}</span>
				<span class="text-xs shrink-0 tabular-nums opacity-60">
					{expanded[project.title] ? '▲' : '▼'}
				</span>
			</button>

			{#if expanded[project.title]}
			<div class="mt-3 mb-6 text-sm leading-relaxed">
				<p>{@html project.description}</p>

				<!-- External link -- only shown when a URL is set -->
				{#if project.link}
				<a href={project.link} target="_blank"
				   class="inline-block mt-2 text-xs underline underline-offset-2 text-ctp-red-light dark:text-ctp-red-dark">
					↗ source
				</a>
				{/if}
			</div>
			{/if}
		</div>
		{/each}
	</div>
</section>
