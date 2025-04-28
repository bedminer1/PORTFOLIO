<script lang="ts">
    import { mode } from "mode-watcher"

    let { data } = $props()
    let { notes } = data
</script>

<div class="w-full flex flex-col justify-center pl-4 pr-4 {$mode === "light" ? "text-gray-500" : "text-gray-400"}">
    {#each notes as note}
    <a class="flex w-full mb-1 justify-between {$mode === "light" ? "hover:text-gray-900" : "hover:text-gray-100"}" href={"notes/" + note.title.replace(/\?/g, "%3F")}>
        <p class="text-left">{note.title}</p>
        <p class="text-right">{note.date}</p>
    </a>
    {/each}
</div>

