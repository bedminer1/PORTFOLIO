<script lang="ts">
    import { mode } from "mode-watcher"
</script>

<div class="w-full flex flex-col justify-center pl-4 gap-10">
    <div class="w-3/4">
        <h1 class="text-xl mb-10"><a target="_blank" href="https://github.com/bedminer1">Projects</a></h1>
        <div class={$mode === "light" ? "text-gray-600" : "text-gray-300"}>
            <p>
                I'm a developer based in Singapore. I like making tools to solve my own pain points, mostly using 'simple' (but productive) languages like Go and Svelte. 
            </p>
            <br>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus commodi ea aperiam recusandae modi aspernatur quo doloremque natus consectetur! Omnis id, quasi unde esse a nobis ullam delectus voluptas facilis!
            </p>
            <br>
            <p>
                If any of my <a class="underline" href="/projects">projects</a>, <a class="underline" href="/notes">notes</a>, or hobbies seem interesting, I'm always down to talk — feel free to reach out on <a target="_blank" class="underline" href="https://x.com/bedminer1">Twitter</a> or <a target="_blank" class="underline" href="https://www.linkedin.com/in/alexander-seah-4a23622b5/">LinkedIn</a>!
            </p>
        </div>
    </div>
</div>