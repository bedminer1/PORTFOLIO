interface Note {
    title: string
    date: string
    text: string
}

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

let notes: Note[] = [
    {
        "title": "Just Not Feeling It",
        "date": "31 MAR 2025",
        "text": `It's Day 4 of my "Write a Note Everyday" Challenge, but I'm still on note number 3.

I noticed that after sharing links to my portfolio website, I became much more self aware of the content I put out, becoming a perfectionist when writing new notes (in a bad way). 

I had many ideas on what to write about but shot them all down, constipation caused by thoughts of "This isn't interesting enough", "My opinion on this wouldn't matter", etc. 

Perfectionism is counter-productive; 'bad writing' can be good learning opportunities. Anyway, the primary goal of this exercise isn't even to get myself to write super well either — it's suppose to be an outlet for self-expression, and it's unrealistic to be 100% creative/inspired all the time. 

Drive to get better at writing (eg. asking LLMs to give me tips on writing and implementing those tips) is only helpful/productive so long as it stays fun and doesn't become a burden.

So a small note to self: "Don't worry too much and just get into the writing. Take it easy, stay true to yourself and just write about what's on your mind."`
    },
    {
        "title": "Building for Ghosts",
        "date": "29 MAR 2025",
        "text": `The room was thick with anticipation. Moments earlier, we'd laid out our vision: PathHero, an app to transform firefighting with interactive digital maps and AI-driven rescue routes. Now, the investors' questions hung in the air, each one a potential landmine. 'Have you spoken to the firefighters?' one asked, his brow furrowed. 'Would they _actually_ use this?'

It was a good learning opportunity. We had focused too much on the 'what' — the cool tech, the innovative features, neglecting the 'who' — feedback from firefighters that would actually use the app. 

I walked away from that pitch with a few questions I could use to guide future idea validation (and surprisingly, the 10k grant lol) —"Would firefighters actually want to use a program like this?" and "How would the target audience of the product want to improve this product for their own use?".

I also realized that the compelling slide on a pitch deck wouldn't be a feature list, but a collection of users' voices — quotes, authentic feedback, and validation that they would actually want to use the app.
`
    },
    {
        "title": "Writing Everyday",
        "date": "28 MAR 2025",
        "text": `Inspired by "Day XX of practicing public speaking on Tiktok" videos, I've realized how developing a habit of expression your reflections and thoughts daily can be a good way of consolidating your learning and building a brand, showing others the type of person you are.

So this note is a way of making my commitment to writing daily blogs public. I want to write about a range of topics, things I've read about, things I've learnt from personal experience, rants, and celebrations.

Instead of writing only when "inspiration strikes", it's better to form the habit of writing everyday. Even though at the beginning it might feel like I have nothing to say, over time my ability to share and express my own opinions will become more refined, by then hopefully my daily writing won't too bad. `,
    },
    {
        "title": "Why Be a Knowledge Broker?",
        "date": "5 MAR 2025",
        "text": `**Knowledge Brokers**
In _Never Eat Alone_, the author introduces the concept of _knowledge brokers_—people who curate, connect, and distribute valuable insights. He describes it as a relationship-building system: you start with one friend and one problem, but over time, you become a hub of interconnected people and solutions.

**An Example**
The author shares a story about a duffle bag entrepreneur struggling with marketing. A mutual connection introduces him to a Reebok executive, who provides insights into branding and distribution. In return, the entrepreneur shares his knowledge of manufacturing and design, helping the executive refine Reebok’s bag line. Both walk away with valuable takeaways, and the mutual contact strengthens their network by facilitating the exchange.

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
    {
        "title": "Leetcode Interviewer Manual",
        "date": "17 MAR 2025",
        "text": `A close friend recently offered to be a mock interviewer for leetcode interview practice even though she doesn't have much experience with leetcode (yet). This guide was written for her to learn about the basics of leetcode, with tips for being a good interviewer. 

**The Problem**
The interviewer presents a programming problem, designed to test your ability to understand and define inputs, outputs, and constraints, design and implement step-by-step plans (algorithms) to solve the problem, and analyze the solution for it's efficiency. 

For example, a simple problem might be *"Given an array of integers, return the sum of all elements."* You then need to write code(usually a function) that takes in any array of numbers, computes and returns the sum total.

**Test Cases**
They are a set of pre-computed inputs and outputs used to test if a solution is correct. For example, a test case for the previous question might be: 
- Input: \`[1, 2, 3, 4, 5]\`

- Output: \`15\`


There are usually many test cases for one problem, maybe with edge cases with inputs at the boundaries of a problem's constraints (e.g empty arrays, negative numbers, large number on inputs).

*Interviewer Tip:* When observing me, listen for how thoroughly I consider the test cases. Do I take the time to think about edge cases? Do I miss edge cases?

**Analyzing the Solution**
Time complexity is a way to measure how the runtime of an algorithm scales with the size of the input. We use Big O notation to express this.

- O(1): Constant time (the runtime doesn't depend on the input size).

- O(n): Linear time (the runtime grows linearly with the input size).

- O(n^2): Quadratic time (the runtime grows quadratically with the input size).

- O(log n): Logarithmic time (the runtime grows logarithmically with the input size).


For example, the sum problem has a time complexity of O(n) because we need to iterate through each element in the array once.

*Interviewer Tip:* Do I explain why my solution has a particular time complexity? Do I consider alternative solutions with better time complexities? If I am not considering time complexity or explaining it well, let me know.

**Common Topics**
LeetCode problems often fall into these categories:

- Arrays and Strings: Manipulating sequences of data.

- Linked Lists: Working with data structures that are linked together.

- Trees and Graphs: Representing hierarchical and interconnected data.

- Dynamic Programming: Breaking down problems into smaller, overlapping subproblems.

- Sorting and Searching: Efficiently organizing and finding data.

- Hash Tables: Storing and retrieving data using key-value pairs.

- Recursion: Solving problems by breaking them down into smaller instances of the same problem.


*Interviewer Tip:* When you are listening to me, if I mention these topics, you can ask a question about the topic. For example, if I mention a Hash Table, you can ask "What is a Hash table?" This will allow me to practice explaining the concepts.

**Interviewer Checklist**
Clarity:
- Did I clearly explain _what_ I'm trying to do and _why_?

- Did I break down the problem into smaller, manageable steps?

- Did I ask enough clarifying questions to get all the details required for a proper solution?


Code Efficiency
- Did I discuss the time complexity?

- Did I discuss the space complexity


Code Quality
- Is the code readable? with meaning variable names and comments.

- Did I test my code with the test cases that were created?

- Is the code correct? How did I handle bugs?`

    }
]