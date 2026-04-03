<script lang="ts">
    import { mode } from "mode-watcher"
    import pfp from "$lib/assets/diving_pfp_circle.png"
</script>

<div class="w-full flex flex-col justify-center pl-4 gap-10">
    <div class="w-full pr-3 md:w-3/4">
        <div class="flex justify-between mb-5 items-center">
            <h1 class="text-xl">Alexander Seah</h1>
            <img class="w-24 mr-10" src={pfp} alt="profile">
        </div>
        <div class={$mode === "light" ? "text-gray-600" : "text-gray-300"}>
            <p>
                Hi, I'm a CS student from NUS. I like problems that require clever math to solve, like optimizing game strategies.
            </p>
            <br>
            <p>
                Nowadays, I'm mostly focused on robotics in my school's club for building <a class="underline dark:text-red-500 text-red-700" target="_blank" href="https://www.nusrobomaster.com/">battle robots</a>. Under NUS' Venture Initiation Programme, I also received some seed funding to build a robot scouting system.
            </p>
            <br>
            <div class="space-y-4 mt-10">
                <p class="text-sm font-medium opacity-80 uppercase tracking-widest">
                    Some stuff I use
                </p>
                <div class="flex flex-wrap gap-3">
                    <a href="https://strava.app.link/QaUm8XGkKYb" target="_blank" 
                       class="flex items-center gap-2 px-3 py-2 border rounded-lg transition-all duration-200 border-neutral-200 dark:border-neutral-800 hover:border-red-700 dark:hover:border-red-500 group">
                        <svg class="w-5 h-5 fill-current text-neutral-600 dark:text-neutral-400 group-hover:text-red-700 dark:group-hover:text-red-500" viewBox="0 0 24 24">
                            <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
                        </svg>
                        <span class="text-sm font-medium">Strava</span>
                    </a>
            
                    <a href="https://open.spotify.com" target="_blank" 
                       class="flex items-center gap-2 px-3 py-2 border rounded-lg transition-all duration-200 border-neutral-200 dark:border-neutral-800 hover:border-red-700 dark:hover:border-red-500 group">
                        <svg class="w-5 h-5 fill-current text-neutral-600 dark:text-neutral-400 group-hover:text-red-700 dark:group-hover:text-red-500" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.502 17.303c-.218.358-.684.474-1.038.256-2.813-1.718-6.353-2.103-10.523-1.151-.41.094-.813-.163-.907-.573-.094-.411.163-.813.573-.907 4.56-1.041 8.468-.597 11.631 1.336.354.218.47.684.264 1.039zm1.472-3.26c-.274.446-.853.585-1.303.311-3.22-1.98-8.125-2.55-11.93-1.397-.502.152-1.03-.135-1.182-.637-.152-.502.135-1.03.637-1.182 4.35-1.321 9.756-.68 13.465 1.599.45.275.588.854.313 1.301zm.127-3.39c-3.863-2.295-10.244-2.507-13.916-1.393-.593.18-1.222-.163-1.402-.756-.18-.593.163-1.222.756-1.402 4.22-1.282 11.272-1.03 15.673 1.583.533.317.708 1.005.391 1.538-.317.533-1.005.708-1.538.391z"/>
                        </svg>
                        <span class="text-sm font-medium">Spotify</span>
                    </a>
            
                    <a href="https://github.com/bedminer1" target="_blank" 
                       class="flex items-center gap-2 px-3 py-2 border rounded-lg transition-all duration-200 border-neutral-200 dark:border-neutral-800 hover:border-red-700 dark:hover:border-red-500 group">
                        <svg class="w-5 h-5 fill-current text-neutral-600 dark:text-neutral-400 group-hover:text-red-700 dark:group-hover:text-red-500" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span class="text-sm font-medium">GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<p class="text-red-700 text-red-200"></p>