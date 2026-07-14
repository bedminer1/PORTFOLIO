<script lang="ts">
	import { Separator } from "$lib/components/ui/separator/index.js";
	import { marked } from "marked";

	let { data } = $props();

	const titles: Record<string, string> = {
		calibur: "Calibur Firmware",
		"bridge-club": "Bridge Club",
		"proper-golem": "Proper Golem",
	};

	// Accordion state: keyed by entry index
	let expanded: Record<number, boolean> = $state({});

	function toggle(idx: number) {
		expanded[idx] = !expanded[idx];
	}

	/**
	 * Parse markdown text into styled HTML (same as updates.svelte).
	 */
	function parse(text: string): string {
		let t = text
			.replace(/\n\n/g, " @@BR@@\n")
			.replace(/``` (?!\n)/g, "```\n");

		let html = marked(t, { gfm: true, breaks: true }) as string;

		html = html.replace(/(<pre>[\s\S]*?<\/pre>)|@@BR@@/g, (m, pre) =>
			pre ? pre : "<br>");

		const div = document.createElement('div');
		div.innerHTML = html;

		div.querySelectorAll('a').forEach(a => {
			a.target = "_blank";
			a.classList.add("underline", "text-ctp-red-light", "dark:text-ctp-red-dark");
		});
		div.querySelectorAll('ul').forEach(ul =>
			ul.classList.add('list-disc', 'list-outside', 'mb-2', 'mt-1', 'ml-4'));
		div.querySelectorAll('ol').forEach(ol =>
			ol.classList.add('list-decimal', 'list-outside', 'mb-2', 'mt-1', 'ml-4'));

		return div.innerHTML;
	}
</script>

<svelte:head>
	<title>{titles[data.slug] ?? data.slug} — robotsbybed</title>
</svelte:head>

<div class="max-w-2xl mx-auto py-20 px-4">
	<a href="/#projects" class="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 mb-8 inline-block">
		← back to projects
	</a>

	<h1 class="text-2xl text-foreground mb-2">{titles[data.slug] ?? data.slug}</h1>

	<Separator class="mb-12" />

	<section>
		<h2 class="text-sm text-muted-foreground uppercase tracking-widest mb-6">Devlog</h2>

		<div class="space-y-1 max-w-prose">
			{#each data.entries as entry, i}
				<div>
					<button
						onclick={() => toggle(i)}
						class="flex w-full items-baseline justify-between gap-4 text-left bg-transparent border-none cursor-pointer text-muted-foreground hover:text-foreground"
					>
						<span>{entry.title}</span>
						<span class="text-xs shrink-0 tabular-nums opacity-60">
							{entry.date} {expanded[i] ? '▲' : '▼'}
						</span>
					</button>

					{#if expanded[i]}
						<div class="mt-3 mb-8 text-sm leading-relaxed">
							<div class="[&_code]:text-sm text-muted-foreground">
								{@html parse(entry.text)}
							</div>

							{#if entry.image}
								<figure class="mt-4">
									<img
										src={entry.image.src}
										alt={entry.image.alt}
										class="rounded-md border border-border max-w-full"
										loading="lazy"
									/>
									<figcaption class="text-xs text-muted-foreground mt-1 italic">
										{entry.image.alt}
									</figcaption>
								</figure>
							{/if}

							<Separator class="mt-4 w-1/4" />
						</div>
					{/if}
				</div>
			{/each}
		</div>

		{#if data.entries.length === 0}
			<p class="text-sm text-muted-foreground italic">No devlog entries yet.</p>
		{/if}
	</section>
</div>
