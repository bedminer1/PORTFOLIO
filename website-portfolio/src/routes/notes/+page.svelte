<script lang="ts">
    import { mode } from "mode-watcher"
    import * as HoverCard from "$lib/components/ui/hover-card/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";

    let { data } = $props()
    let { notes } = data
</script>

<div class="w-full flex flex-col justify-center pl-4 pr-4 {$mode === "light" ? "text-gray-500" : "text-gray-400"}">
    {#each notes as note, index}
    <HoverCard.Root>
        <HoverCard.Trigger>
            <a class="flex w-full mb-1 justify-between {$mode === "light" ? "hover:text-gray-900" : "hover:text-gray-100"}" href={"notes/" + note.title.replace(/\?/g, "%3F")}>
                <p class="text-left">{note.title}</p>
                <p class="text-right">{note.date}</p>
            </a>
        </HoverCard.Trigger>
        <HoverCard.Content side={index < 2 ? "bottom" : "top"} align="start" class="w-1/2">
            <p><b>tldr</b>: {note.description}</p>
            {#if note.tags !== ""}
            <div class="flex gap-2 w-full justify-start mt-2">
                {#each note.tags.split(",") as tag}
                    <Badge variant="secondary">
                        {tag}
                    </Badge>
                {/each}
            </div>
            {/if} 
        </HoverCard.Content>
    </HoverCard.Root>
    {/each}
</div>

