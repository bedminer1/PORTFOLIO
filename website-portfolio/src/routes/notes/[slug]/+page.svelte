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


    let { data } = $props()

    let tempText = data.text
        .replace(/\n\n/g, " @@BR@@\n")
        .replace(/``` (?!\n)/g, "```\n")
    let parsedHtml = marked(tempText, { gfm: true, breaks: true }) as string
    parsedHtml = parsedHtml.replace(/(<pre>[\s\S]*?<\/pre>)|@@BR@@/g, (match, preBlock) => {
        return preBlock ? preBlock : "<br>";
    });


    data.text = parsedHtml

    setTimeout(() => { // wait for marked to parse markdown
        hljs.highlightAll()
    }, 10)
</script>

<div class="pt-10 pr-4 md:pr-20 w-full flex flex-col justify-center pl-4 gap-4 {$mode === "light" ? "text-gray-500" : "text-gray-400"}">
    <h1 class="text-xl mb-4 {$mode === "light" ? "text-gray-800" : "text-gray-200"}">{data!.title}</h1>
    <p class="w-full mb-10 [&_code]:text-sm {$mode === "light" ? "text-gray-600" : "text-gray-400"}">{@html data?.text}</p>
    <div class="flex w-full justify-end">
        <a class={$mode === "light" ? "hover:text-gray-900" : "hover:text-gray-100"} href="/notes">&larr; Back</a>
    </div>
</div>