/**
 * Active section tracking for the single-page scroll-spy.
 *
 * Uses Svelte 5's $state rune (module-level) instead of a writable store.
 * Components import the getter/setter functions; reactivity is tracked
 * automatically by the compiler through the $state reference.
 *
 * The section is one of: 'about' | 'updates' | 'projects'
 */

/** @type {'about' | 'updates' | 'projects'} Currently visible section */
let current: 'about' | 'updates' | 'projects' = $state('about')

/** Return the reactive section value. Svelte auto-tracks reads in $derived/$: */
export function getActiveSection(): 'about' | 'updates' | 'projects' {
	return current
}

/** Update which section is active. Called by the scroll-spy in +page.svelte */
export function setActiveSection(section: 'about' | 'updates' | 'projects') {
	current = section
}
