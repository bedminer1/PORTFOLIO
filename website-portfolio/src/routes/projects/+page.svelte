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
I played it everyday in high school, during breaks, after school. But after graduating, it's been harder to organize sessions. I built this to play bridge online/with bots. It's also fun seeing how good of a bot I could build.
`,
            link: "https://bridge-psi-ten.vercel.app/"
        },
        {
            title: "Bastion",
            description: "What's the best way to place bariers to have the best balance of security, cost and minimal impact to traffic? Originally for events like the National Day Parade but it can be used on smaller scales too, like running races on roads.<br/><br/> Also comes with a robot with a camera module, used to monitor the event with OCR (useful if anyone faints during a marathon.) ",
            link: "https://github.com/ViincentLim/path-hero"
        },
        {
            title: "Excalibur",
            description: "Robot shooting balls at the enemy's robots. Built with a team with other mechanical and electrical engineers. I did the firmware eg communication with robomaster's server, state machines, motor control etc.",
            link: "",
        },
];
</script>

<div class="w-full flex flex-col justify-center pl-4 gap-10">
    <div class="w-3/4">
        <h1 class="text-xl mb-10"><a target="_blank" href="https://github.com/bedminer1">Projects</a></h1>
        <div class={$mode === "light" ? "text-gray-600" : "text-gray-300"}>
            <p class="mb-10">
                I like building things that the people would find useful/fun.
            <br>
            <div class="flex flex-col gap-8">
                {#each projects as project}
                <div>
                    <h1 class="bold mb-2 underline {$mode === "light" ? "hover:text-gray-900" : "hover:text-gray-100"}"><a href={project.link} target="_blank">{project.title}</a></h1>
                    <p class={$mode === "light" ? "text-gray-600" : "text-gray-400"}>{@html project.description}</p>
                </div>
                {/each}
            </div>
        </div>
    </div>
</div>