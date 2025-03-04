<script lang="ts">
    import { mode } from "mode-watcher"
    import { marked } from "marked"
    import hljs from "highlight.js";
    import javascript from 'highlight.js/lib/languages/javascript';
    import python from 'highlight.js/lib/languages/python';
  import { parse } from "svelte/compiler";

    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('python', python);

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
            "date": "27 FEB 2025",
            "text": "One of the key ideas in Never Eat Alone is that successful people don’t just collect knowledge; they share it. The concept of being a knowledge broker resonated with me—curating, connecting, and distributing valuable insights not just to build relationships but to create an ecosystem of learning. This website is my attempt at that: a library of ideas, a space to document my thoughts, projects, and lessons learned. The goal isn’t just self-improvement but to provide others with a structured, accessible way to gain insight from my journey."
        },
        {
            "title": "Building Systems, Not Goals",
            "date": "15 JAN 2025",
            "text": "Atomic Habits reframed the way I think about self-improvement. Instead of obsessing over distant goals, the book emphasizes the power of systems—small, consistent changes that compound over time. This mindset applies directly to programming and learning: rather than 'mastering' a language or concept, the focus should be on refining my daily process. Whether it’s writing, coding, or fitness, habits shape identity. This blog itself is a system—a place to regularly document progress, ensuring that learning isn’t just consumed but actively reinforced."
        },
        {
            "title": "Demystifying Zero-Knowledge Proofs",
            "date": "10 DEC 2024",
            "text": "Zero-knowledge proofs (ZKPs) initially seemed like magic—how can you prove something without revealing the information itself? Breaking it down, I realized it's all about trust minimization. ZKPs allow one party to prove they know a secret (like a password) without exposing it. The applications are massive: cryptographic authentication, privacy in blockchains, and even real-world identity verification. One of the most fascinating examples is zk-SNARKs, which power private transactions in Zcash. I’m still diving deeper, but it’s clear ZKPs will play a big role in the future of security and cryptography."
        },
        {
            "title": "Swift and SwiftUI Thoughts",
            "date": "02 NOV 2024",
            "text": "Diving into Swift and SwiftUI felt like stepping into a polished, streamlined world of app development. Swift’s strong typing and safety features make it feel like a modern mix of Python and Rust, while SwiftUI is declarative and intuitive. The way it handles state management reminds me of React, but with Apple’s tight integration into the ecosystem. My biggest takeaway so far? Apple’s approach makes it incredibly easy to build visually appealing apps with minimal boilerplate, but the learning curve comes from understanding Swift’s nuances, like optionals and protocol-oriented programming."
        },
        {
            title: "Understanding Options Terminology: A Mental Model",
            date: "20 OCT 2024",
            text: `Options trading comes with its own dense jargon—calls, puts, greeks, IV crush—but breaking it down makes it more digestible.

### Basics of Options
- **Call Option**: The right to buy at a specific price.
- **Put Option**: The right to sell at a specific price.

### Example Code
\`\`\`javascript
// Simple options calculation 
function calculateOptionPrice(strikePrice, currentPrice) {
    let optionPrice = strikePrice - currentPrice
    return optionPrice
}
\`\`\`

Understanding **implied volatility (IV)** is crucial: an overpriced option can lose value even when the stock moves in the expected direction.
`
        }
    ]

    function handleSelectNote(note: Note) {
        noteReadingMode = true

        let tempText = note.text
            .replace(/\n\n/g, " @@BR@@\n")
            .replace(/``` (?!\n)/g, "```\n")
        let parsedHtml = marked(tempText, { gfm: true, breaks: false }) as string
        parsedHtml = parsedHtml.replace(/(<pre>[\s\S]*?<\/pre>)|@@BR@@/g, (match, preBlock) => {
            return preBlock ? preBlock : "<br><br>";
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
                <div class="pt-10">
                    <h1 class="text-xl mb-4 {$mode === "light" ? "text-gray-800" : "text-gray-200"}">{selectedNote!.title}</h1>
                    <p class="w-full [&_code]:text-sm">{@html selectedNote?.text}</p>
                    <div class="flex w-full justify-end">
                        <button class={$mode === "light" ? "hover:text-gray-900" : "hover:text-gray-100"} onclick={handleUnselectNote}>&larr; Back</button>
                    </div>
                </div>
            {:else}
                {#each notes as note}
                <button class="flex w-full justify-between {$mode === "light" ? "hover:text-gray-900" : "hover:text-gray-100"}" onclick={() => handleSelectNote(note)}>
                    <p>{note.title}</p>
                    <p>{note.date}</p>
                </button>
                {/each}
            {/if}
        </div>
    </div>
</div>
