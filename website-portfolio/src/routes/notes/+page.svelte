<script lang="ts">
    import { mode } from "mode-watcher"

    interface Note {
        title: string
        date: string
    }

    let notes: Note[] = [
        {
            "title": "Take It Easy",
            "date": "31 MAR 2025",
        },
        {
            "title": "Building for Ghosts",
            "date": "29 MAR 2025",
        },
        {
            "title": "Writing Everyday",
            "date": "28 MAR 2025",
        },
        {
            "title": "Leetcode Interviewer Manual",
            "date": "17 MAR 2025",
        },
        {
            "title": "Why Be a Knowledge Broker?",
            "date": "5 MAR 2025",
        },
        {
            "title": "Building Systems, Not Goals",
            "date": "5 MAR 2025",
        },
    ]

</script>

<div class="w-full flex flex-col justify-center pl-4 pr-4 {$mode === "light" ? "text-gray-500" : "text-gray-400"}">
    {#each notes as note}
    <a class="flex w-full mb-1 justify-between {$mode === "light" ? "hover:text-gray-900" : "hover:text-gray-100"}" href={"notes/" + note.title.replace(/\?/g, "%3F")}>
        <p class="text-left">{note.title}</p>
        <p class="text-right">{note.date}</p>
    </a>
    {/each}
</div>

<style>

</style>
