interface Note {
    title: string
    date: string
    text: string
}

export const load = ({ params }) => {
    for (let note of notes) {
        if (note.title === params.slug) {
            return {
                title: note.title,
                text: note.text
            }
        }
    }
    
    return {
        title: "Note '" + params.slug + "' not found",
        text: "You're not suppose to be here.."
    }
}

let notes: Note[] = [
    {
        "title": "Why Be a Knowledge Broker?",
        "date": "5 MAR 2025",
        "text": `**Knowledge Brokers**
In _Never Eat Alone_, the author introduces the concept of _knowledge brokers_—people who curate, connect, and distribute valuable insights. He describes it as a relationship-building system: you start with one friend and one problem, but over time, you become a hub of interconnected people and solutions.

**An Example**
In _Never Eat Alone_, the author shares a story about a duffle bag entrepreneur struggling with marketing. A mutual connection introduces him to a Reebok executive, who provides insights into branding and distribution. In return, the entrepreneur shares his knowledge of manufacturing and design, helping the executive refine Reebok’s bag line. Both walk away with valuable takeaways, and the mutual contact strengthens their network by facilitating the exchange.

**My Attempt**
This website is my own attempt at being a knowledge broker—a library of ideas, a space to document my thoughts, projects, and lessons learned. However, I think one pitfall I have personally fallen into is that I spend too much time "tending to the garden" and not enough inviting others to come enjoy it too. It is a personal resolution to become more proactive in reaching out and engaging new connections.`
    },
    {
        "title": "Building Systems, Not Goals",
        "date": "5 MAR 2025",
        "text": `**Systems**
Goals define where you want to go (like a compass), but systems determine whether you get there. Instead of obsessing over the end result, focus on the processes that drive consistent progress. A basketball coach doesn’t win championships by fixating on the trophy but by implementing the right training drills, strategies, and player development. Success is a byproduct of well-designed systems.

**Identity-based Motivation**
One effective approach is to make habits identity-based rather than outcome-based. For example, it would be more effective for a smoker wanting to quit to think "I'm not a smoker" than "I'm trying really hard to quit".  Every action is a vote for the identity you want to reinforce. Aligning goals with your identity makes consistency feel natural rather than forced.

**Habit Engineering**
A practical way to build better habits is through the framework of making them **obvious, attractive, easy, and satisfying**. Place cues in visible spots, associate the habit with something enjoyable, lower the effort barrier by starting small, and create a sense of progress with rewards or tracking. For breaking bad habits, do the opposite—make them invisible, unattractive, difficult, and unsatisfying.

**Show Up**
Progress compounds over time, and the real challenge is staying in the game long enough to see results. Consistency matters more than intensity. The key is to **just show up**. Missing one day doesn’t mean failure, and not every session needs to be a breakthrough. Even on low-energy days, doing the bare minimum keeps the habit alive.`
    },
    
]