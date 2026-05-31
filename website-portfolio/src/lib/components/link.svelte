<script lang="ts">
	let { url, label } = $props();
</script>

<a class="underline text-ctp-red-light dark:text-ctp-red-dark" target="_blank" href={url}>
	{label}
</a>