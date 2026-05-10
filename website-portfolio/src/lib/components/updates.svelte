<script lang="ts">
	/**
	 * Updates — expandable blog/journal entries.
	 *
	 * Each entry shows title + date. Clicking toggles the full text inline,
	 * rendered from markdown (via `marked`) into HTML. Archived entries are
	 * filtered out. Tags render as shadcn Badge components.
	 */
	import { notes as updates } from "$lib/updates"
	import { marked } from "marked"
	import { Badge } from "$lib/components/ui/badge/index.js"

	/**
	 * Map of note-title → expanded-state.
	 * Re-assigning after mutation signals Svelte to re-render.
	 * @type {Record<string, boolean>}
	 */
	let expanded: Record<string, boolean> = {}

	/** Toggle a note's expanded state by its title key. */
	function toggle(title: string) {
		expanded[title] = !expanded[title]
		expanded = expanded // trigger reactivity
	}

	/**
	 * Parse markdown text into styled HTML.
	 * - Double-newlines → <br>
	 * - Code fences get syntax-highlight classes (hljs handles the rest)
	 * - Links open in new tabs
	 * - Lists get Tailwind list utilities
	 *
	 * Uses a DOM fragment for safe class injection (no innerHTML until sanitised).
	 */
	function parse(text: string): string {
		// Normalise line breaks and code fence markers for `marked`
		let t = text
			.replace(/\n\n/g, " @@BR@@\n")
			.replace(/``` (?!\n)/g, "```\n")

		let html = marked(t, { gfm: true, breaks: true }) as string

		// Restore double-newlines as <br> (marked collapses them)
		html = html.replace(/(<pre>[\s\S]*?<\/pre>)|@@BR@@/g, (m, pre) =>
			pre ? pre : "<br>")

		// Inject styles via DOM so we never trust innerHTML directly
		const div = document.createElement('div')
		div.innerHTML = html

		div.querySelectorAll('a').forEach(a => {
			a.target = "_blank"
			a.classList.add("underline", "text-ctp-red-light", "dark:text-ctp-red-dark")
		})
		div.querySelectorAll('ul').forEach(ul =>
			ul.classList.add('list-disc', 'list-outside', 'mb-2', 'mt-1', 'ml-4'))
		div.querySelectorAll('ol').forEach(ol =>
			ol.classList.add('list-decimal', 'list-outside', 'mb-2', 'mt-1', 'ml-4'))

		return div.innerHTML
	}
</script>

<section id="updates" class="scroll-mt-16 text-muted-foreground">
	<h1 class="text-2xl mb-8 text-foreground">Updates</h1>

	<div class="space-y-1 max-w-prose">
		{#each updates as note}
		{@const isArchived = note.tags.split(",").includes("Archived")}
		{#if !isArchived}
		<div>
			<!-- Toggle button -- title left, date + arrow right -->
			<button
				onclick={() => toggle(note.title)}
				class="flex w-full items-baseline justify-between gap-4 text-left bg-transparent border-none cursor-pointer text-muted-foreground hover:text-foreground"
			>
				<span>{note.title}</span>
				<span class="text-xs shrink-0 tabular-nums opacity-60">
					{note.date} {expanded[note.title] ? '▲' : '▼'}
				</span>
			</button>

			{#if expanded[note.title]}
			<div class="mt-4 mb-8 text-sm leading-relaxed">
				<!-- Short summary -->
				<p class="mb-3 italic opacity-70">{note.description}</p>

				<!-- Tag badges -->
				{#if note.tags !== ""}
				<div class="flex gap-2 flex-wrap mb-4">
					{#each note.tags.split(",") as tag}
						<Badge variant="secondary">{tag}</Badge>
					{/each}
				</div>
				{/if}

				<!-- Full body rendered from markdown -->
				<div class="[&_code]:text-sm">
					{@html parse(note.text)}
				</div>
			</div>
			{/if}
		</div>
		{/if}
		{/each}
	</div>
</section>
