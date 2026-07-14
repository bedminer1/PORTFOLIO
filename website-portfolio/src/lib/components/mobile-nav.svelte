<script lang="ts">
	import { Separator } from "$lib/components/ui/separator/index.js";
	import { Menu, X } from "lucide-svelte";

	let { aboutColor, updatesColor, projectsColor }: {
		aboutColor: string;
		updatesColor: string;
		projectsColor: string;
	} = $props();

	let open = $state(false);

	function scrollTo(id: string) {
		open = false;
		// small delay so the panel starts closing before the scroll
		setTimeout(() => {
			const el = document.getElementById(id);
			if (el) el.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}
</script>

<!-- Trigger button (mobile only) -->
<button
	class="fixed top-4 left-4 z-50 p-1 rounded-md hover:brightness-125 brightness-50 transition-colors md:hidden"
	onclick={() => (open = !open)}
	aria-label="Toggle navigation"
>
	{#if open}
		<X size={18} />
	{:else}
		<Menu size={18} />
	{/if}
</button>

<!-- Overlay backdrop (mobile only) -->
{#if open}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity md:hidden"
		onclick={() => (open = false)}
	></div>
{/if}

<!-- Slide-in panel (mobile only) -->
<div
	class="fixed top-0 left-0 z-40 h-full w-32 bg-background shadow-lg transition-transform duration-200 flex flex-col justify-center md:hidden"
	class:-translate-x-full={!open}
>
	<nav class="flex flex-col gap-6 text-sm px-6">
		<button
			onclick={() => scrollTo("about")}
			class={aboutColor + " cursor-pointer bg-transparent border-none italic tracking-wide"}
		>about</button>
		<button
			onclick={() => scrollTo("updates")}
			class={updatesColor + " cursor-pointer bg-transparent border-none italic tracking-wide"}
		>updates</button>
		<button
			onclick={() => scrollTo("projects")}
			class={projectsColor + " cursor-pointer bg-transparent border-none italic tracking-wide"}
		>projects</button>
	</nav>
</div>

<!-- Desktop sidebar — exact old styling, visible only on md+ -->
<div class="hidden md:flex sticky top-0 self-start h-[16vh] mt-10 flex-col justify-center">
	<div class="flex items-start h-full mx-2 gap-4">
		<div class="flex flex-col gap-6 text-sm pt-4">
			<button
				onclick={() => scrollTo("about")}
				class={aboutColor + " cursor-pointer bg-transparent border-none italic tracking-wide"}
			>about</button>
			<button
				onclick={() => scrollTo("updates")}
				class={updatesColor + " cursor-pointer bg-transparent border-none italic tracking-wide"}
			>updates</button>
			<button
				onclick={() => scrollTo("projects")}
				class={projectsColor + " cursor-pointer bg-transparent border-none italic tracking-wide"}
			>projects</button>
		</div>
		<Separator orientation="vertical" class="self-stretch" />
	</div>
</div>
