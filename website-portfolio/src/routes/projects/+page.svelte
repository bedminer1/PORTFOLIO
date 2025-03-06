<script lang="ts">
    import { mode } from "mode-watcher"

    interface Project {
        title: string
        description: string
        link: string
    }

    let projects: Project[] = [
        {
            title: "HDB Buddy",
            description: "Finding a home in Singapore can be overwhelming. HDB Buddy simplifies this process by providing insights into resale prices, grants, and loan eligibility. It helps users navigate the complexities of buying an HDB flat with data-driven recommendations and an intuitive interface.",
            link: "https://github.com/bedminer1/HDB_BUDDY"
        },
        {
            title: "Paper Trading & Investment Comparator",
            description: "Investing is a skill, and the best way to improve is through practice. This app allows users to simulate trades, compare investment strategies, and analyze historical performance without financial risk. By offering side-by-side comparisons of different approaches, it bridges the gap between theory and real-world investing.",
            link: "https://github.com/bedminer1/INVESTING_STRATEGY_COMPARER"
        },
        {
            title: "Path Hero",
            description: "Firefighting is all about making split-second decisions in high-risk environments. Path Hero is designed to assist firefighters in navigation and resource allocation during emergencies. With real-time data and AI-driven route suggestions, it improves efficiency in critical situations.",
            link: "https://github.com/ViincentLim/path-hero"
        },
        {
            title: "Stabletide",
            description: "Staying ahead of market trends requires processing vast amounts of information. Stabletide aggregates news, research papers, and financial data into a streamlined platform, helping investors and analysts make informed decisions. By leveraging AI to filter noise and highlight key insights, it turns overwhelming data into actionable knowledge.",
            link: "https://github.com/bedminer1/STABLETIDE"
        }
];
</script>

<div class="w-full flex flex-col justify-center pl-4 gap-10">
    <div class="w-3/4">
        <h1 class="text-xl mb-10"><a target="_blank" href="https://github.com/bedminer1">Projects</a></h1>
        <div class={$mode === "light" ? "text-gray-600" : "text-gray-300"}>
            <p class="mb-4">
                I’ve worked on a variety of projects ranging from practical tools for everyday life to innovative applications in finance, emergency response, and AI-driven research. 
            </p>
            <br>
            <div class="flex flex-col gap-8">
                {#each projects as project}
                <div>
                    <h1 class="bold mb-2 {$mode === "light" ? "hover:text-gray-900" : "hover:text-gray-100"}"><a href={project.link} target="_blank">{project.title}</a></h1>
                    <p class={$mode === "light" ? "text-gray-600" : "text-gray-400"}>{project.description}</p>
                </div>
                {/each}
            </div>
        </div>
    </div>
</div>