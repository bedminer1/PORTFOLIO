/**
 * Projects data.
 *
 * Each project has a title, markdown-ish description, and optional source link.
 * Import into components with `import { projects } from "$lib/projects"`.
 */

export interface Project {
	title: string
	description: string
	link: string
}

export const projects: Project[] = [
	{
		title: "Calibur Telemetry System",
		description: "So annoying to manually check if we break any of the hundreds of rules any time we tune the robot, made this to automate the process. Basically it just gives commands and reads the sensor readings to check if it behaves as expected, logs all the results into a csv file and highlights failed tests.",
		link: "",
	},
	{
		title: "Oak Golem",
		description: `Lazy to sort my own workspace, screws and wires and tools everywhere. Built this `,
		link: "",
	},
	{
		title: "Bridge Club",
		description: `Multiplayer Singapore Bridge with elo and leaderboards. `,
		link: "https://bridge-club.duckdns.org",
	},
]
