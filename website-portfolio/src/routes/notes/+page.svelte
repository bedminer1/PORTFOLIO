<script lang="ts">
    import { mode } from "mode-watcher"
    import * as Tooltip from "$lib/components/ui/tooltip/index.js"

    let { data } = $props()
    let { notes } = data
</script>

<div class="w-full flex flex-col justify-center pl-4 pr-4 {$mode === "light" ? "text-gray-500" : "text-gray-400"}">
    {#each notes as note, index}
    <Tooltip.Root>
        <Tooltip.Trigger>
            <a class="flex w-full mb-1 justify-between {$mode === "light" ? "hover:text-gray-900" : "hover:text-gray-100"}" href={"notes/" + note.title.replace(/\?/g, "%3F")}>
                <p class="text-left">{note.title}</p>
                <p class="text-right">{note.date}</p>
            </a>
        </Tooltip.Trigger>
        <Tooltip.Content side={index < 2 ? "bottom" : "top"} align="start" class="w-1/2">
            <p>{note.description}</p>
        </Tooltip.Content>
    </Tooltip.Root>
    {/each}
</div>

