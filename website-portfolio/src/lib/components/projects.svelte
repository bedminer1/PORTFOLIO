<script lang="ts">
	/**
	 * Projects — expandable project cards with devlog links.
	 *
	 * Each project has a toggleable description. "devlog →" links route
	 * to /projects/<slug> for per-project update entries.
	 */
	import { projects } from "$lib/projects"
	import Separator from "./ui/separator/separator.svelte";

	let expanded: Record<string, boolean> = Object.fromEntries(
		projects.map(p => [p.title, true])
	);

	function toggle(title: string) {
		expanded[title] = !expanded[title]
		expanded = expanded
	}
</script>

<section id="projects" class="scroll-mt-16">
	<h1 class="text-2xl mb-8 text-foreground">Projects</h1>

	<div class="max-w-prose space-y-1 text-muted-foreground">
		{#each projects as project}
		<div>
			<button
				onclick={() => toggle(project.title)}
				class="flex w-full items-baseline justify-between gap-4 text-left bg-transparent text-subtle-foreground border-none cursor-pointer hover:text-foreground"
			>
				<span>{project.title}</span>
				<span class="text-xs shrink-0 tabular-nums opacity-60">
					{expanded[project.title] ? '▲' : '▼'}
				</span>
			</button>

			{#if expanded[project.title]}
			<div class="mt-3 mb-6 text-sm leading-relaxed">
				<p>{@html project.description}</p>

				<div class="flex gap-4 mt-2">
					<a href="/projects/{project.slug}"
					   class="inline-block text-xs underline underline-offset-2 text-ctp-red-light dark:text-ctp-red-dark">
						devlog →
					</a>
					{#if project.link}
					<a href={project.link} target="_blank"
					   class="inline-block text-xs underline underline-offset-2 text-ctp-red-light dark:text-ctp-red-dark">
						live site ↗
					</a>
					{/if}
				</div>
			<Separator class="mt-4 w-1/4" />
			</div>
			{/if}
		</div>
		{/each}
	</div>
</section>
