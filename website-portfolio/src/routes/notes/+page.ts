import { notes } from './notes.js'

export const ssr = false

export const load = () => {
    return {
        notes
    }
}