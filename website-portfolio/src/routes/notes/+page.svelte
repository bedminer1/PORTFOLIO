<script lang="ts">
    import { mode } from "mode-watcher"
    import { marked } from "marked"
    import hljs from "highlight.js";
    import javascript from 'highlight.js/lib/languages/javascript';
    import python from 'highlight.js/lib/languages/python';
    import go from 'highlight.js/lib/languages/go';

    // register languages for syntax highlighting
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('python', python);
    hljs.registerLanguage('go', go);

    // changing code block style based on light/dark mode
    $effect(() => {
        if ($mode) {}
        const existingLink = document.getElementById("hljs-theme");

        if (existingLink) {
            existingLink.remove();
        }

        const link = document.createElement("link");
        link.id = "hljs-theme";
        link.rel = "stylesheet";
        link.href = $mode === "light"
            ? "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css"
            : "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark.min.css";

        document.head.appendChild(link)
    })

    interface Note {
        title: string
        date: string
        text: string
    }

    let noteReadingMode = $state(false)
    let selectedNote: Note | undefined = $state(undefined)
    let notes: Note[] = [
        {
            "title": "Why Be a Knowledge Broker?",
            "date": "5 MAR 2025",
            "text": `**Knowledge Brokers**
In _Never Eat Alone_, the author introduces the concept of _knowledge brokers_—people who curate, connect, and distribute valuable insights. He describes it as a relationship-building system: you start with one friend and one problem, but over time, you become a hub of interconnected people and solutions.

**An Example**
In _Never Eat Alone_, the author shares a story about a duffle bag entrepreneur struggling with marketing. A mutual connection introduces him to a Reebok executive, who provides insights into branding and distribution. In return, the entrepreneur shares his knowledge of manufacturing and design, helping the executive refine Reebok’s bag line. Both walk away with valuable takeaways, and the mutual contact strengthens their network by facilitating the exchange.

**My Attempt**
This website is my own attempt at being a knowledge broker—a library of ideas, a space to document my thoughts, projects, and lessons learned. It’s not just a trophy case of past work but a living resource where others can tap into insights I’ve stumbled upon. By sharing knowledge openly, I hope to spark new ideas, help others navigate challenges, and create a space for continuous learning and collaboration.`
        },
        {
            "title": "Building Systems, Not Goals",
            "date": "5 MAR 2025",
            "text": `**Systems**
Goals define where you want to go (like a compass), but systems determine whether you get there. Instead of obsessing over the end result, focus on the processes that drive consistent progress. A basketball coach doesn’t win championships by fixating on the trophy but by implementing the right training drills, strategies, and player development. Success is a byproduct of well-designed systems.

**Identity-based Motivation**
One effective approach is to make habits identity-based rather than outcome-based. For example, it would be more effective for a smoker wanting to quit to think "I'm not a smoker" than "I'm trying really hard to quit".  Every action is a vote for the identity you want to reinforce. Aligning goals with your identity makes consistency feel natural rather than forced.

**Habit Engineering**
A practical way to build better habits is through the framework of making them **obvious, attractive, easy, and satisfying**. Place cues in visible spots, associate the habit with something enjoyable, lower the effort barrier by starting small, and create a sense of progress with rewards or tracking. For breaking bad habits, do the opposite—make them invisible, unattractive, difficult, and unsatisfying.

**Show Up**
Progress compounds over time, and the real challenge is staying in the game long enough to see results. Consistency matters more than intensity. The key is to **just show up**. Missing one day doesn’t mean failure, and not every session needs to be a breakthrough. Even on low-energy days, doing the bare minimum keeps the habit alive.`
        },
        
    ]

    function handleSelectNote(note: Note) {
        noteReadingMode = true

        let tempText = note.text
            .replace(/\n\n/g, " @@BR@@\n")
            .replace(/``` (?!\n)/g, "```\n")
        let parsedHtml = marked(tempText, { gfm: true, breaks: true }) as string
        parsedHtml = parsedHtml.replace(/(<pre>[\s\S]*?<\/pre>)|@@BR@@/g, (match, preBlock) => {
            return preBlock ? preBlock : "<br>";
        });


        selectedNote = {
            ...note,
            text: parsedHtml
        }

        setTimeout(() => { // wait for marked to parse markdown
            hljs.highlightAll()
        }, 10)
    }

    function handleUnselectNote() {
        noteReadingMode = false
        selectedNote = undefined
    }
</script>

<div class="w-full flex flex-col justify-center pl-4 gap-10">
    <div class="w-full pr-4">
        <div class={$mode === "light" ? "text-gray-500" : "text-gray-400"}>
            {#if noteReadingMode}
                <div class="pt-10 pr-4 md:pr-20">
                    <h1 class="text-xl mb-4 {$mode === "light" ? "text-gray-800" : "text-gray-200"}">{selectedNote!.title}</h1>
                    <p class="w-full mb-10 [&_code]:text-sm {$mode === "light" ? "text-gray-600" : "text-gray-400"}">{@html selectedNote?.text}</p>
                    <div class="flex w-full justify-end">
                        <button class={$mode === "light" ? "hover:text-gray-900" : "hover:text-gray-100"} onclick={handleUnselectNote}>&larr; Back</button>
                    </div>
                </div>
            {:else}
                {#each notes as note}
                <button class="flex w-full justify-between {$mode === "light" ? "hover:text-gray-900" : "hover:text-gray-100"}" onclick={() => handleSelectNote(note)}>
                    <p class="text-left">{note.title}</p>
                    <p class="text-right">{note.date}</p>
                </button>
                {/each}
            {/if}
        </div>
    </div>
</div>

<style>

</style>
