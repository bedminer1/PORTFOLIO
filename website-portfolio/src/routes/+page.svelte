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
                Hi, I'm a CS student from NUS. I like problems that require clever math to solve, like optimizing game strategies (maximizing expected value, minimizing risks). I like tactical games like bridge so much I built a <a class="underline dark:text-red-400 text-red-700" target="_blank" href="https://bridge-psi-ten.vercel.app/">bridge bot</a> you can play against, try it and let me know if you liked it :)
            </p>
            <br>
            <p>
                Nowadays, I'm mostly focused on robotics in my school's club for building <a class="underline dark:text-red-400 text-red-700" target="_blank" href="https://www.nusrobomaster.com/">war robots</a>. Under NUS' Venture Initiation Programme, I'm also working on a tool that can analyze barrier placements for large scale events like marathons, finding the optimal balance of safety, traffic impact, and cost.
            </p>
            <br>
            <p>
                Some stuff I use
            </p>
            <ol class="ml-4">
                <li>- <a class="underline dark:text-red-400 text-red-700" target="_blank" href="https://strava.app.link/QaUm8XGkKYb">strava</a></li>
                <li>- <a class="underline dark:text-red-400 text-red-700" target="_blank" href="https://strava.app.link/QaUm8XGkKYb">spotify</a></li>
                <li>- <a class="underline dark:text-red-400 text-red-700" target="_blank" href="https://github.com/bedminer1">github</a></li>
            </ol>
        </div>
    </div>
</div>

<p class="text-red-700 text-red-200"></p>