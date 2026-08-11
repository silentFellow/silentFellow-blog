+++
date = '2026-08-11T23:45:22+05:30'
title = 'Why I Like Using CLIs — A Retrospective'
url = '/why-i-like-using-clis-a-retrospective'
description = "As a terminal user, I always wondered why i am using the terminal — when there a some easy ways out there. What made me stick with it?. This blog is my thought expression on this idea."
draft = false
tags = ["unix", "linux", "cli", "tech", "Retrospective"]
keywords = ["unix", "linux", "cli", "tech", "Retrospective", "understanding the minds of cli users", "confortable consistency"]
+++

I been using `CLI` and `terminal` as long as I been a **software dev**, at least as I know. You been seen some of the people in your like, who prefers to use `CLIs` over `GUI`. This sometimes look stupid, especially during these times where most of things can be done in a few clicks or so. what's the point in just sticking with a `terminal` and typing commands. Even a person who has been using for years, actually don't understand it until recently. There have been many **misinterpretation** of the beauty of `CLI`. This is just a blog post of me just expressing why I am using it over `GUIs`.

## Misunderstood ideas of CLI:

Before going for the beauty of `CLIs`, I just wanna explore some of my thoughts on some, may be one of the biggest misunderstood idea of `CLI`:

1. CLIs make you more productive/faster:
   I think this is one of (if not) the most misleading take about working with `CLIs`. I mean working in terminal and doing stuff will make you more productive. But that does not explain the full story. Anything you put your time into will absolutely make you productive (Of course the level of speed and time taken will vary). But it will still make you productive enough.
   **What I mean is enough** — let me give my idea, I always believe when you learn `touch typing`, I don't actually think having the ability to type at `60WPM` or `100WPM` makes that much amount of difference. There is always at some point the difference in speed will eventually fade away. Yeah there is absolutely a difference in speed, But will you notice it, and will that affect you that much (I don't think so). I think it's the meaning of `touch typing` is to make the one thing you are going to do a thousand times on a good day easy (i.e. typing).

> It's not like we are going to type mindlessly without thinking, we are obviously going to think about the stuff that needs to type, and we are not gonna think at that pace.

In my view, the same thing applies to being productive too, there is a threshold point till which you can view difference. But there is a threshold. I see people who are plenty enough being productive in `GUIs`

## Then what makes CLIs beautiful:

I think the beauty of `CLIs` lies within it's **consistency**. In a single word it might look abstract, but I will explain it with a idea.

### **Consistency in UNIX**:
before the entire `CLI` thing, the main idea is `UNIX` philosophy strongly influenced the design of many CLI tools. The `UNIX` philosophy is that `each tool should do only one thing, and do it to it's absolute best` — the wording may be different. But the idea remains the same.

**How this applies to the concept of consistency** you might wonder, I can further abstract the philosophy a bit. Each tool can take input, process it, and produce output — often through plain text, or some meaningful representation like file names, port numbers or so. This behavior is **consistent** across many terminal commands. This allows:

- Piping one's commands output to another commands input.
- using `redirection operator` to save the output into a file or vise versa.

Once understand this, you can effectively do stuff without thinking so much.

> Also when i do repeated stuff, I can always create my own script, with whatever command i just use (no changes needed).

### **Consistency in nvim**:
`nvim` or `neovim` is the editor I personally use. In `nvim`, most things I interact with are `buffers (data in memory)`. This itself makes `nvim` consistent. Meaning whatever I do in a `editing place`, I can often do similar things in a `file tree` or any form of `lists` and expect the familiar result. Obviously, some buffers have some keybindings and restrictions, but those can be editable and it's still a buffer.

You can:
- Press `/` search in any buffer.
- Press 'hjkl' for movements in any buffer.

There are some much more keybindings being **consistent** across the editor.

## Is consistency everywhere?

And you might ask is consistency everywhere in `terminal`. The `terminal` absolutely follow some philosophical common behaviours, but each have it own flavour.

If so, then what does it mean to be consistent?

### The Paradox of duct taping tools

One of the common paradoxical thing about `terminal` and workflow based on it is `duct taping` tools. Unlike `GUIs` like `editor`, `git desktop client`, `RestAPI client` and so on. `CLIs` don't have to contain every possible feature built-in to a single tool. There can be many individual tools — The user can pick based on their needs and likings and configure it to make it their own working environment.

**Duct Taping** may make people feel like this tool doesn't belong here or some kind of thought, but the thing is most of the `CLI` tools allows configuring the tool as per the user. So even the tool by default doesn't make the work experience consistent, with a few tweaks you can make the stuff your own

> `GUIs` generally don't offer this level of flexibility, because they are not as easy to compose and automate as `CLIs` — at least in terms of inputs and outputs.

## Is consistency worth it?

After all my views, one might still ask — Going through all these instead of working with the software as they intended to, even though not all software have same intention of use, Is it worth it?.

And the thing is, It's a hard (maybe complex) thing to answer. I can't say it will be useful for everyone, absolutely there are people who are fine with using a non consistent environment or with a minimal requirements that can be configured.

> But at the end of the day, it's about reducing the fatigue. Like in my keyboard example, we don't need to actually that fast or productive in order to finish the job. But it's about are we constantly putting effort on something that doesn't matter for the job or things that we do often like **navigating**, **editing text**, **using git**, **copying and moving files**, **printing file contents** etc... as easy as possible, which will free us from the mental energy to focus on more important work like **thinking logic** and so on

## Conclusion

For me the terminal is all about a **simple, yet consistent and powerful** `PDE (Personalized Development Environment)` where I can focus on the important things i need to do, while reducing the fatigue of repeated tasks.
