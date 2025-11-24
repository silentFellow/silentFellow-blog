# silentFellow Blog

This repository contains the source code for my personal blog — a simple, calm, text-focused space where I write about the things that run around in my head. No noise, no extra shenanigans. Just thoughts, reflections, and the occasional nerdy experiment.

The whole site is built with **Hugo**, styled with **Tailwind CSS**, and shaped with my own taste for minimalism and dark vibes.

If you're curious about the final site, you can visit it here:

👉 **https://blogs.silentfellow.dev**

---

## 🧱 Tech Stack

- **Hugo** — static site generator, ridiculously fast
- **Tailwind CSS** — utility-first styling
- **Fuse.js** — lightweight client-side fuzzy search
- **Custom Hugo layouts & partials** — clean and distraction-free

---

## 📦 Tailwind Setup

To use Tailwind inside Hugo, install the required Node modules:

```sh
npm i
````

Your Tailwind input file lives here:

```
assets/styles/index.css
```

Tailwind outputs the final CSS here:

```
assets/styles/tailwind.css
```

You can customize everything (fonts, colors, themes) directly inside your index.css using Tailwind CSS.

---

## 🚀 Development Scripts

### **Start local development (Hugo + Tailwind watch mode)**

```sh
hugo server -D -p=1313 --noHTTPCache & \
npx @tailwindcss/cli -i ./assets/styles/index.css -o ./assets/styles/tailwind.css --watch
```

* Hugo runs your blog locally
* Tailwind regenerates CSS on every change
* Both run together so the flow stays smooth

---

### **Create a New Blog Post**

A simple helper command:

```sh
hugo new ${title}.md
```

Example:

```sh
hugo new blog/why-i-started-blogging.md
```

This sets up a fresh Markdown file with front-matter.

---

## 📂 Project Structure

```
.
├── content/        # Blog posts in Markdown
├── layouts/        # Hugo templates, partials, single + list pages
├── assets/         # Tailwind, fonts, pipeline styles
├── static/         # Images, icons, search.json, public files
├── js/             # Fuse.js search and other scripts
└── hugo.toml       # Site configuration
```

Clean, simple, predictable.

---

## 📌 Why This Blog Exists

I wanted a quiet place on the internet to slow down and actually *think*, instead of constantly consuming whatever social media decides for me. Writing helps me shift from **passive consumption** to **active reflection**, and this repo holds the code behind that space.

Nothing fancy. Just me trying to listen to my own thoughts without all the noise.

---

## 🧡 License

This project is open-source. Feel free to look around, borrow ideas, and tweak things. Please don’t summon chaos.
