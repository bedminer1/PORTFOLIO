import type { PageLoad } from "./$types";
import { devlogs } from "$lib/devlogs";

export function entries() {
	return [
		{ slug: "calibur" },
		{ slug: "bridge-club" },
		{ slug: "proper-golem" },
	];
}

export const load: PageLoad = ({ params }) => {
	return {
		slug: params.slug,
		entries: devlogs[params.slug] ?? [],
	};
};
