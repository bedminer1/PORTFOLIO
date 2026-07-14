/**
 * Per-project devlog entries.
 *
 * Each entry: { title, date, text, image? }
 * Rendered as accordion items on /projects/[slug].
 * The `text` field supports full markdown (same as updates.ts notes).
 */

export interface DevlogEntry {
	title: string;
	date: string;
	text: string;
	image?: {
		src: string;
		alt: string;
	};
}

export const devlogs: Record<string, DevlogEntry[]> = {
	calibur: [
		{
			title: "Sunday PID Learning Plan",
			date: "2026-07-05",
			text: `**Readings**

- *Real-Time C++* Ch 3 (An Easy Jump Start) — the safe subset of C++ for bare metal. Which features are zero-cost on a Cortex-M7, which ones to avoid.
- *Real-Time C++* Ch 6 (Optimized C++ for Microcontrollers) — measuring runtime and code size down to the byte. 
- *Real-Time C++* Ch 12 (Floating-Point Math) — <code>fp32</code> precision, <code>isnan</code>, denormals, <code>fminf</code>/<code>fmaxf</code> behavior. 
- "PID Without a PhD" by Tim Wescott (free, ~10 pages) — sections on integral windup and derivative kick. Explains why derivative-on-measurement exists as a pattern.
\n
**Code archaeology**
Deep dive into a reference PID implementation from other RoboMaster teams (scutrobotlabs, jiaodragon), stealing concepts like low-pass filters on error and derivative, dynamic dt from hardware timer, integral separation. 

**Mini-challenge — derivative-on-measure**
Improvement to my toy pid simulator. Adding a feature where the target can move every few seconds to mimic how aimbot is constantly giving the robot new targets to aim at, can test many optimizations like derivative-on-measure`,
		}
	],
	"bridge-club": [
	],
	"proper-golem": [
	],
};
