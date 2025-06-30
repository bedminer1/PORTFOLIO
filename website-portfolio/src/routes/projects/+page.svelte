<script lang="ts">
    import { mode } from "mode-watcher"

    interface Project {
        title: string
        description: string
        link: string
    }

    let projects: Project[] = [
        {
            title: "Bridge",
            description: `Bridge is a simple game at its core like <b>uno</b>,
while strategy can go deeper with
expected value calculations like in <b>poker</b> and
deduction and bluffing like in <b>mafia</b> where you try figure out who's your teammate.
<br/><br/>
I played it everyday in high school, during breaks, after school. But after graduating, it's been harder to organize sessions. I built this to play bridge online/with bots.
`,
            link: "https://bridge-psi-ten.vercel.app/"
        },
        {
            title: "Path Hero",
            description: "Google maps is good if you know where you're going. But what if you don't really have a plan? You have to do lots of research on google, tiktok, asking chatgpt for ideas on where to go etc. <br/><br/> Maybe that whole process could be done in one step? ",
            link: "https://github.com/ViincentLim/path-hero"
        },
];
</script>

<div class="w-full flex flex-col justify-center pl-4 gap-10">
    <div class="w-3/4">
        <h1 class="text-xl mb-10"><a target="_blank" href="https://github.com/bedminer1">Projects</a></h1>
        <div class={$mode === "light" ? "text-gray-600" : "text-gray-300"}>
            <p class="mb-4">
                I like building things that the people around me would find useful/fun. The <a class="underline italic" target="_blank" href="https://github.com/bedminer1">full list</a> is quite long but here are {projects.length} of my favourites. (Click on the headers to check out the projects)
            </p>
            <br>
            <div class="flex flex-col gap-8">
                {#each projects as project}
                <div>
                    <h1 class="bold mb-2 {$mode === "light" ? "hover:text-gray-900" : "hover:text-gray-100"}"><a href={project.link} target="_blank">{project.title}</a></h1>
                    <p class={$mode === "light" ? "text-gray-600" : "text-gray-400"}>{@html project.description}</p>
                </div>
                {/each}
            </div>
        </div>
    </div>
</div>