/**
 * Projects data.
 *
 * Each project has a title, markdown-ish description, optional source link,
 * and a slug that routes to /projects/<slug> for the devlog detail page.
 */

export interface Project {
	title: string;
	description: string;
	link: string;
	slug: string;
}

export const projects: Project[] = [
	{
		title: "Calibur Firmware",
		slug: "calibur",
		description: `I work mostly on the firing of the robots, going deep into Control Theory and latency optimizations to try to make a completely cracked and unfair aimbot. 
		<br/><br/>
		Mostly doing research work to improve the tuning process and the shooting- related decision making of the robot.`,
		link: "",
	},
	// {
	// 	title: "Proper Golem",
	// 	slug: "proper-golem",
	// 	description: `A workshop robot built on top of the lekiwi by Lerobot. Building it to help with picking up bullets/reloading my robomaster robots and doing some camera work to record scrims/internal testing. 
	// 	<br/><br/>
	// 	Name inspired by Copper Golems from Minecraft, sorting stuff and keep things neat and proper.`,
	// 	link: "https://properrobotics.org",
	// },
	{
		title: "Bridge Club",
		slug: "bridge-club",
		description: `Originally wanted to focus on multiplayer to play with friends, but its hard to recreate the subtle bluffing/social aspects. Project focus now is getting the bots as smart as possible, inspired by poker bots and trading bots. Maybe the 'Club' part of the name is a bit outdated.. `,
		link: "https://bridge-club.properrobotics.org",
	},
];
