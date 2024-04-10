<script lang="ts">
	import kaboom from "kaboom";
	import { displayDialogue } from '$lib/utils'
	import mapJson from '$lib/public/map.json'
	import mapPng from '$lib/public/map.png'
	import spritesheetPng from '$lib/public/spritesheet.png'

	const k = kaboom({
		global: false,
		touchToMouse: true,
		canvas: document.getElementById("game") as HTMLCanvasElement
	})

	k.loadSprite("spritesheet", spritesheetPng, {
		sliceX: 39,
		sliceY: 31,
		anims: {
			"idle-down": 936,
			"walk-down": { from: 936, to: 939, loop: true, speed: 8 },
			"idle-side": 975,
			"walk-side": { from: 975, to: 978, loop: true, speed: 8 },
			"idle-up": 1014,
			"walk-up": { from: 1014, to: 1017, loop: true, speed: 8 },
		}		
	})

	k.loadSprite('map', mapPng)
	k.setBackground(k.Color.fromHex("#311047"))

	k.scene("main", async () => {
		const mapData = mapJson
		const layers = mapData.layers

		const map = k.add([
			k.sprite("map"),
			k.pos(0),
			k.scale(4)
		])

		const player = k.make([
			k.sprite("spritesheet", { anim: "idle-down" }),
			k.area({
				shape: new k.Rect(k.vec2(0, 3), 10, 10)
			}),
			k.body(),
			k.anchor("center"),
			k.pos(),
			k.scale(4),
			{
				 speed: 250,
				 direction: "down",
				 isInDialogue: false,
			},
			"player",
		])

		for (const layer of layers) {
			if (layer.name === "boundaries" && layer.objects !== undefined) {
				for (const boundary of layer.objects) {
					map.add([
						// for all boundaries make it a rectangle 
						// the width and height specified in json
						k.area({
							shape: new k.Rect(k.vec2(0), boundary.width, boundary.height)
						}),
						// enable collisions with the player/ prevent overlap
						k.body({ isStatic: true }),
						k.pos(boundary.x, boundary.y),
						// reference tag to the object eg 'CS Degree'
						boundary.name,
					]) 

					if (boundary.name) {
						player.onCollide(boundary.name, () => {
							player.isInDialogue = true
							displayDialogue("TODO", () => (player.isInDialogue = false))
						})
					}
				}
				continue
			}

			if (layer.name === "spawnpoints" && layer.objects !== undefined) {
				for (const entity of layer.objects) {
					if (entity.name === "player") {
						player.pos = k.vec2(
							(map.pos.x + entity.x) * 4,
							(map.pos.y + entity.y) * 4
						)
						k.add(player)
						continue
					}
				}
			}
		}

		k.onUpdate(() => {
			k.camPos(player.pos.x, player.pos.y + 100)
		})

		k.onMouseDown((mouseBtn) => {
			if (mouseBtn !== "left" || player.isInDialogue) return

			const worldMousePos = k.toWorld(k.mousePos())
			player.moveTo(worldMousePos, player.speed)
		})
	})

	k.go("main")
</script>

<div class="w-full overflow-hidden">
	<div id="textbox-container" class="hidden">
		<div>
			<p id="dialogue">Hi</p>
			<div>
				<button id="closeBtn">Close</button>
			</div>
		</div>
	</div>
</div>