<script lang="ts">
    import { mode } from "mode-watcher"
</script>

<div class="w-full flex flex-col justify-center pl-4 gap-10">
    <div class="w-3/4">
        <h1 class="text-xl mb-10">Alexander Seah</h1>
        <div class={$mode === "light" ? "text-gray-600" : "text-gray-300"}>
            <p>
                I'm a developer based in Singapore. I like making tools to solve my own pain points, mostly using 'simple' (but productive) languages like Go and Svelte. 
            </p>
            <br>
            <p>
                Some other hobbies include jamming out jazz solos on the trumpet, playing ADC on Wildrift with my support duo, and working on post moves to bust out at Sunday morning basketball pick-up. 
            </p>
            <br>
            <p>
                If my <a class="underline" href="/projects">projects</a>, <a class="underline" href="/notes">notes</a>, or hobbies seem interesting, I'm always down to talk — feel free to reach out on <a target="_blank" class="underline" href="https://x.com/bedminer1">Twitter</a> or <a target="_blank" class="underline" href="https://www.linkedin.com/in/alexander-seah-4a23622b5/">LinkedIn</a>!
            </p>
        </div>
    </div>
</div>