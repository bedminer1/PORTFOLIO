<script lang="ts">
    import { mode } from "mode-watcher"
    import pfp from "$lib/assets/githubpfpcircle.png"
</script>

<div class="w-full flex flex-col justify-center pl-4 gap-10">
    <div class="w-full pr-3 md:w-3/4">
        <div class="flex justify-between mb-5 items-center">
            <h1 class="text-xl">Alexander Seah</h1>
            <img class="w-20 border-2 border-black" src={pfp} alt="profile">
        </div>
        <div class={$mode === "light" ? "text-gray-600" : "text-gray-300"}>
            <p>
                I'm a developer based in Singapore. I like making tools to solve my own pain points, mostly using 'simple' (but productive) languages like Go and Svelte. 
            </p>
            <br>
            <p>
                Some other hobbies include jamming out jazz <a class="underline" target="_blank" href="https://www.youtube.com/watch?v=gJ9WBYmSO4w&list=PLxe0KcilTZ5BJYFjTUjZTkvazRwZSAAb7&pp=gAQB">trumpet and guitar solos</a> and working on Giannis-inspired moves for pick-up basketball runs. 
            </p>
            <br>
            <p>
                If my <a class="underline" href="/projects">projects</a>, <a class="underline" href="/notes">notes</a>, or hobbies seem interesting, I'm always down to talk — feel free to reach out on <a target="_blank" class="underline" href="https://x.com/bedminer1">Twitter</a> or <a target="_blank" class="underline" href="https://www.instagram.com/dkffjlrtm/">Instagram</a>!
            </p>
        </div>
    </div>
</div>