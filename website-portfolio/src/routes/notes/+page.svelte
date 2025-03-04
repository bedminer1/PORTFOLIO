<script lang="ts">
    import { mode } from "mode-watcher"

    interface Note {
        title: String
        date: String
        text: String
    }

    let noteReadingMode = false
    let selectedNote: Note | undefined = undefined
    let notes: Note[] = [
        {
            title: "test title",
            date: "4 MAR 2024",
            text: "test body"
        },
        {
            title: "test title 2",
            date: "4 MAR 2024",
            text: "test body 2"
        },
    ]

    function handleSelectNote(note: Note) {
        noteReadingMode = true
        selectedNote = note
    }

    function handleUnselectNote() {
        noteReadingMode = false
        selectedNote = undefined
    }
</script>

<div class="w-full flex flex-col justify-center pl-4 gap-10">
    <div class="w-3/4">
        <div class={$mode === "light" ? "text-gray-600 hover:text-gray-800" : "text-gray-300 hover:text-white"}>
            {#if noteReadingMode}
                <div class="pt-10">
                    <h1 class="text-xl mb-4 {$mode === "light" ? "text-gray-800" : "text-gray-200"}">{selectedNote!.title}</h1>
                    <p>{selectedNote!.text}</p>
                    <button onclick={handleUnselectNote}>&larr;</button>
                </div>
            {:else}
                {#each notes as note}
                <button class="flex w-full justify-between" onclick={() => handleSelectNote(note)}>
                    <p>{note.title}</p>
                    <p>{note.date}</p>
                </button>
                {/each}
            {/if}
        </div>
    </div>
</div>