<script lang="ts">
	import '../app.css'
	import { ModeWatcher, toggleMode } from 'mode-watcher'
	import { Toaster } from "$lib/components/ui/sonner";
  	import { Switch } from '$lib/components/ui/switch';

	let toggled = false

	$: {
		if (toggled) {}
	 	toggleMode() 
	}
	toggleMode()
</script>

<Toaster />
<ModeWatcher />
<div class="p-2 mb-20 w-full justify-end flex">
	<Switch bind:checked={toggled}/>
</div>
<div class="flex w-full">
	<div class="w-1/2 flex flex-col items-center pt-10">
		<div class="flex flex-col text-right gap-3">
			<a href="/">about</a>
			<a href="/notes">notes</a>
			<a href="/projects">projects</a>
		</div>
	</div>
	<slot />
</div>	