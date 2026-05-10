<script lang="ts">
	/**
	 * About — concise bio card.
	 *
	 * Just name, role, and a one-liner. The tip of the iceberg;
	 * in-depth project details live in the Projects section below.
	 */
	import pfp from "$lib/assets/diving_pfp_circle.png"
</script>

<section id="about" class="scroll-mt-16">
	<!-- Header row: name + circular profile photo -->
	<div class="flex items-start gap-8 mb-8">
		<div class="flex-1">
			<h1 class="text-2xl mb-1">Alexander Seah</h1>
		</div>
		<img class="w-20 h-20 rounded-full object-cover shrink-0" src={pfp} alt="profile">
	</div>

	<!-- One-liner bio -- concise, no stack detail dumps -->
	<div class="max-w-prose text-muted-foreground">
		<p>
			Firmware lead at <a class="underline text-ctp-red-light dark:text-ctp-red-dark" target="_blank" href="https://www.nusrobomaster.com/">Calibur Robotics</a>.
			Embedded C++ for battle robots, CAN/PID/sensor fusion.
			Building Oak Golem on the side.
		</p>
	</div>
</section>
