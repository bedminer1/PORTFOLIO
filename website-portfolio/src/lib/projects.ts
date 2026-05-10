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
		title: "Oak Golem",
		description: `A custom SO-ARM101 robotic arm for teleoperation and robotics research. Built on Rust firmware with ESP32-C6 controllers, PCNT encoders, and WS2812 status indicators. Integrated with LeRobot for data collection and policy learning pipelines.`,
		link: "",
	},
	{
		title: "Bridge Club",
		description: `A CLI-based bridge club management system built in C++. Handles member registration, session scheduling, and game result tracking for the Singapore Bridge Club community.`,
		link: "",
	},
]
