import { notes } from '../notes.js'

export const ssr = false

export const load = ({ params }) => {
    for (let note of notes) {
        if (note.title === params.slug) {
            return {
                title: note.title,
                text: note.text,
                date: note.date,
            }
        }
    }
    
    return {
        title: "'" + params.slug + "' note doesn't exist :(",
        text: "",
        date: "",
    }
}