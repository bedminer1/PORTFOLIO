<script lang="ts">
	/**
	 * About — concise bio card.
	 *
	 * Just name, role, and a one-liner. The tip of the iceberg;
	 * in-depth project details live in the Projects section below.
	 */
	import pfp from "$lib/assets/diving_pfp_circle.png";
	import Link from "$lib/components/link.svelte";
</script>

<section id="about" class="scroll-mt-16">
	<!-- Header row: name + circular profile photo -->
	<div class="flex items-start gap-8 mb-8">
		<div class="flex-1">
			<h1 class="text-2xl mb-1">Alexander Seah</h1>
		</div>
		<img class="w-20 h-20 rounded-full object-cover shrink-0 mr-4" src={pfp} alt="profile">
	</div>

	<!-- One-liner bio -- concise, no stack detail dumps -->
	<div class="max-w-prose text-muted-foreground">
		<p>
			I write code for robots at <Link label="Calibur Robotics" url="https://www.nusrobomaster.com/"/>.
			This website is mostly to share devlogs for my robotics projects.
		</p>
	</div>
</section>
