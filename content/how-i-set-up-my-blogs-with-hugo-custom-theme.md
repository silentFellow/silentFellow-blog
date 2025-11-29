+++
date = '2025-11-29T08:45:44+05:30'
title = 'How I Set Up My Blogs With Hugo — Custom Theme'
url = '/how-i-set-up-my-blogs-with-hugo-custom-theme'
description = "A walkthrough on how I built a custom Hugo theme — understanding layouts, base templates, partials, and how pages are rendered."
draft = false
tags = ["blogging", "hugo", "tutorial", "static site", "custom theme"]
keywords = ["hugo custom theme", "hugo layout tutorial", "hugo baseof.html", "hugo partials", "hugo theme development"]
+++

In [the previous blog](/how-i-set-up-my-blogs-with-hugo-project-setup), I discussed how I installed `Hugo` — a static site generator for my blog — and explained its folder structure. Here, we'll explore how to build a custom theme to add a unique touch to the blog.

### A Look Into Hugo layouts Directory

`Hugo` uses the `layouts` directory to form template of our content. A typical `layouts` directory follows the following structure.

```sh
.
├── _default
├── partials
└── 404.html
```

- **404.html** is a simple file that will be shown when the route user search for is **not found**.
- **\_default/** is used to store files that are responsible for the layout of the page.
- **partials/** is used to store small reusable components like **header**, **footer**, **preview cards** and other similar components.

### A Look Into Hugo layouts/\_default Directory

A typical `layouts/_default` consists of:

```sh
baseof.html
list.html
single.html
```

- **baseof.html** is the root layout file, which will be followed by all pagesinherit from, except special pages like `404.html`.
- `list.html` is used to render list pages, like the home page or tag pages, depending on your content structure.
- **single.html** is the page used to show contents of a blog individually.

### Let's Use This To Create A Simple Layout For Our Theme

```html
<!-- layouts/partials/header.html -->
<header>header</header>
```

```html
<!-- layouts/partials/footer.html -->
<footer>footer</footer>
```

```html
<!-- layouts/_default/single.html -->
{{ define "main" }}
<article>{{ .Content }}</article>
{{ end }}
```

- Everything inside `{{  }}` in `Hugo` is used for following templating by `Hugo`, which uses `Golang` behind the scenes.
- `{{ define "main" }}` and `{{ end }}` is used to create a custom block that will be rendered conditionally.
- `.` is used to specify that the variable belongs to current scope — useful for looping through values
- `{{ .Content }}` is a special variable in `Hugo` to show the content of the converted `markdown` file in `html` format.
- You can refer all major special variables in `Hugo` from the [official documentation](https://gohugo.io/documentation/).

```html
<!-- layouts/_default/list.html -->
{{ define "main" }}
    {{ range .Pages }}
        <article>{{ .Title }}</article>
    {{ end }}
{{ end }}
```

- `{{ .Pages }}` returns all pages under the current section or list context.
- `{{ range }}` is used to loop over the `array/slice`.
- Anything that is provided by default in `archetypes/default.md` that is title and date can be used with `{{ .<key> }}`
- For custom metadata, use `{{ .Params.<key> }}`

```html
<!-- layouts/_default/baseof.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>{{ .Title }}</title>
  </head>
  <body>
    {{ partial "header.html" . }} {{ block "main" . }} {{ end }} {{ partial
    "footer.html" . }}
  </body>
</html>
```

- Every layout inherits from `baseof.html` unless you explicitly bypass it.
- `{{ .Title }}` takes the title of the page and add to the `title` tag.
- `{{ partial "header/footer.html" . }}` renders header.html and footer.html from the `layouts/partials` folder respectively
- A `block` is a placeholder that child templates (like `single.html` and `list.html`) can override.
- `{{ block "main" . }}` starts to render the `html` based on the route. If the route is "/", renders list.html, else a blog URL renders single.html conditionally. `{{ end }}` is required to finish the scope of the block

> You can modify the metadata of home page by modifying `content/_index.md` file. You can find my `content/_index.md` file below.

```toml
+++
title = "silentFellow | Blogs"
description = "This is the homepage of silentFellow blogs page [https://blogs.silentFellow.dev]"
url = "/"
tags = []
keywords = ["silentfellow blogs home"]
+++
```

> In the next part, Let's walk through `tailwind css` integration with `Hugo`.
