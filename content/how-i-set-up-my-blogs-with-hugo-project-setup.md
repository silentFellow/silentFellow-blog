+++
date = '2025-11-28T20:50:15+05:30'
title = 'How I Set Up My Blogs With Hugo — Project Setup'
draft = false
url = "/how-i-set-up-my-blogs-with-hugo-project-setup"
description = "A simple breakdown of how I built my blog using Hugo — from installation to project initialization and understanding the core folder structure."
tags = ["blogging", "hugo", "tutorial", "static site", "project setup"]
keywords = ["hugo project setup", "hugo folder structure", "hugo installation guide", "how to start a hugo site", "hugo beginner tutorial"]
+++

In [this article](/why-i-started-blogging), I discussed the reason behind starting this blog. Here, I'll walk you through how I set up this website with `Hugo` — a static site generator. In the next parts, I'll also talk about building your own custom theme, integrating `tailwind css`, adding search functionality, and showing similar post recommendations in a simple way.

### Why Hugo

When I started blogging, I wanted a simple, no-shenanigan, text-based blogging site with minimal `js` and a good `SEO`. While searching I came across `Hugo` — A simple static site generation tool that converts `markdown` into `html` for blogs. As a developer and the nature of `markdown` to be simple, I love `markdown` to take down notes. So when `Hugo` offers this flexibility I prefer `Hugo`.

> `Hugo` is a high performant, SEO friendly static site generator tool from markdown.

### Hugo Installation

Helpfully `Hugo` docs are simple, and you can find Installation [here](https://gohugo.io/installation/)

### Project Initialization And Folder Structure

You can initiate a `Hugo` project with:

```sh
hugo new site <folder_name>     # if new folder
hugo new site .                 # if in current folder
```

After initialization, The folder structure will look like this

```sh
.
├── archetypes/
│   └── default.md
├── assets
├── content
├── data
├── i18n
├── layouts
├── static
├── themes
└── hugo.toml
```

> NOTE: from here, you can simply use an existing themes(there are plenty available). But if you want to build your own simple theme follow the blog.

- **archetypes/** contains a `default.md` file, which acts as a template for the metadata of any new content you create.

```toml
+++
date = '{{ .Date }}'
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
draft = true
+++
```

This is the default metadata `Hugo` adds for every new blog.

> `draft = true` means the post only appears in development mode. Set it to `false` to make it visible in production.

You can modify this metadata to fit your needs. Here's how my `archetypes/default.md` looks:

```toml
+++
date = '{{ .Date }}'
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
draft = true
url = '/{{ .File.ContentBaseName }}'            # Defines the permalink for the post — used for URLs in search redirects
description = ""                                # Meta description used by search engines and previews
tags = []                                       # Tags applied to classify the post within the site
keywords = []                                   # Additional SEO keywords for search indexing
+++
```

- **assets/** is used to store files that `Hugo` needs to _process_—like Tailwind CSS input, images that go through pipelines, minification, etc. We’ll use this to generate Tailwind output.
- **content/** is where all your markdown blogs live. This is your main writing space.
- **data/** stores optional structured data like `json`, `toml`, or `yaml`. Mostly used in portfolio or custom-data heavy sites.
- **layouts/** is where you build your custom theme logic.
- **static/** stores files that should be copied directly to the final site with _no processing_ — images, JS, CSS, fonts, etc.
- **themes/** contains downloaded themes. Each theme has its own replica of this folder structure.
- **hugo.toml** is the main config file for your entire site.

### Let's Test

```sh
hugo new <blog-title>.md          # It's best practice to use "-" in place of "<spaces>"
```

This creates a file in `content/<blog-title>.md`, with the format of archetypes/default.md

Now, for testing purpose let's use a predefined theme. In this example, I use the **terminal theme**, since I like using terminal

> You can find themes and their installation [here](https://themes.gohugo.io/)
> for [terminal theme](https://github.com/panr/hugo-theme-terminal)

After installing the theme, to use that theme:

- You can either add `theme = <theme-name>` to the config file
- Or while running with "- flag" `hugo server -t <theme-name>`

> NOTE: some themes require a specific content folder structure, like `content/post/<blog-name>.md` for `terminal` theme

Run the site using the following command

```sh
hugo server -t <theme-name>
```

> In the next part, we'll explore how to create a custom theme by understanding the layout structure in `Hugo`.
