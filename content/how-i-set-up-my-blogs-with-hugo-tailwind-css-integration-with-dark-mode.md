+++
date = '2025-12-01T18:47:05+05:30'
title = 'How I Set Up My Blogs With Hugo — Tailwind CSS Integration With Dark Mode'
url = '/how-i-set-up-my-blogs-with-hugo-tailwind-css-integration-with-dark-mode'
description = "A detailed walkthrough on integrating Tailwind CSS v4 and dark mode into a custom Hugo theme — including setup, pipeline usage, styling fixes, and theme switching logic."
draft = true
tags = ["blogging", "hugo", "tutorial", "static site", "tailwind css", "dark mode"]
keywords = ["hugo tailwind css", "hugo tailwind integration", "hugo dark mode", "tailwind css v4 hugo", "hugo theme styling"]
+++

In [this article](/how-i-set-up-my-blogs-with-hugo-custom-theme), we explored how to create our own custom theme for our blog with `Hugo` by working with the `layouts` directory. Here, we walk through how to integrate our website with `Tailwind CSS` — a utility-first styling framework — into our `Hugo` site, along with enabling dark mode.

### Why Tailwind CSS

As a developer, who works with front-end frameworks from time to time — I found it difficult when working with plain `CSS` due to its scoping and overriding behaviour. It's hard to keep track of which part of the style gets priority — with the availability of tons of selectors, it's hard to figure out which selectors to use and where to use it — Along with the naming the classes, which sometimes gets messier and looks a lot complex.

When going through these issues, `Tailwind CSS` is found out to be a sweet spot on styling webpages, due to its ease of use — nearly sorting out all the major problems with plain `CSS`. It also allows flexible styling unlike many popular frameworks — where all webpages created with it look similar.

### How To Integrate Tailwind CSS With Hugo

There are 2 popular ways to integrate `Tailwind` with `Hugo`

- Using `CDN`
- Using `Tailwind CSS` pipeline to convert `Tailwind` code into normal `CSS` and use it

### **Method 1:** Using CDN (Easy way, but not recommended)

`CDN (Content Delivery Network)` simply is a bunch of servers, which have copies of a file, that will be fetched on demand from the closest server. In this way, we are going to fetch the entire `Tailwind` utility classes and use it.

```html
<script
  src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
  defer
>
</script>
```

Place this snippet of code in `baseof.html` file, boom you integrated your project with tailwind CSS.

- Since, `CDN` simply send the entire copy of all utilities on demand. It will contain all the unnecessary classes that are predefined, even when it's not used.
- Our aim in this blog site is to make it as fast as possible, these are things that can be easily optimized and should be optimized.

### **Method 2:** Using Tailwind CSS CLI To Convert It Into Plain Normal CSS

In this method, we are going to convert `Tailwind CSS` into normal plain CSS and use it directly.

```sh
# Run the following commands
npm init -y
npm install -D tailwindcss @tailwindcss/cli @tailwindcss/typography
```

> - Ensure `node` and `npm` is installed.
> - NOTE: This step only converts `CSS` — The website won't build or run using `JavaScript`.

- Add the following to `assets/styles/index.css`:

```css
/* assets/styles/index.css */
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```

- Now you can convert these files into normal `CSS` file by:

```sh
npx @tailwindcss/cli -i assets/styles/index.css -o assets/styles/tailwindcss.css
```

- Add this inside the `head` tag of `baseof.html`:
```html
<!-- layouts/_default/baseof.html -->
{{ $style := resources.Get "styles/tailwindcss.css" | resources.Minify | resources.Fingerprint }}
<link rel="preload" href="{{ $style.RelPermalink }}" as="style" />
<link
  href="{{ $style.RelPermalink }}"
  rel="stylesheet"
  integrity="{{ $style.Data.Integrity }}"
  crossorigin="anonymous"
/>
```

- Since, `Tailwind CSS V4` have some default resets, it resets markdown output. To avoid this add the `typography plugin` and wrap the main content block with some classes as follows:

```html
<!-- layouts/_default/single.html -->
{{ define "main" }}
  <article class="prose prose-invert">{{ .Content }}</article>
{{ end }}

<!-- `prose` restores readable default styles for markdown. -->
<!-- `prose-invert` applies readable styles when the `.dark` class (dark mode) is active. -->
```

- Now everything is ready. You can start using `Tailwind CSS` With `Hugo` with the following command:

```sh
hugo server -D & \
npx @tailwindcss/cli -i assets/styles/index.css -o assets/styles/tailwindcss.css --watch &
```

### How To Add Theme Switcher With Hugo + Tailwind CSS

Adding dark mode or theme switcher is one of the selling factors of `Tailwind CSS`.

- Add this line to `assets/styles/index.css`:
```css
/* assets/styles/index.css */
@custom-variant dark (&:where(.dark, .dark *));
```

- Set up a script to set and switch themes
```js
// static/js/themes.js
const getCurrentTheme = () => localStorage.getItem("theme") ?? "light";

const setTheme = (theme) => {
	document.documentElement.classList.toggle("dark", theme === "dark");
	document.documentElement.classList.toggle("light", theme === "light");
	localStorage.setItem("theme", theme);
};

const toggleTheme = () => {
	document
		.getElementById("theme-toggle-button")
		?.addEventListener("click", () => {
			const next = getCurrentTheme() === "dark" ? "light" : "dark";
			setTheme(next);
		});
};

setTheme(getCurrentTheme());
toggleTheme();
```

- Add the script inside `baseof.html`
```html
<script src="/js/themes.js" defer></script>
```

- Now create a button with ID `theme-toggle-button` — That will be responsible to switch themes.
- Now, `Tailwind CSS` with dark mode is integrated successfully.
```html
<body class="bg-white dark:bg-black">
  <!-- HTML Body -->
</body>

- bg-white will be applied to light theme in the above example
- bg-black will be applied to dark theme in the above example
```
- See How dark `Tailwind` dark theme works [here](https://tailwindcss.com/docs/dark-mode)

> In the next part, we will explore about how to integrate search functionality, tag categorization and suggest related blogs.
