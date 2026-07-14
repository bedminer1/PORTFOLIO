<script lang="ts">
	let { url, label } = $props();
</script>

<a class="underline dark:text-ctp-red-dark" target="_blank" href={url}>
	{label}
</a>