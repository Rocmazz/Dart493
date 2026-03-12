# Portfolio — Editing Guide
## How to Edit Your Site

### Hero Text
Open `index.html` and find the `<!-- HERO SECTION -->` comment.
- Change the `<h1 class="hero__title">` text to your own headline.
- The `<em>` tag creates the outlined ghost text effect — keep it or remove it.
- Change the tagline in `<p class="text-body hero__description">`.
- The decorative background word is in `<div class="hero__bg-text">` — change "Portfolio" to any word.

### About Section
Find `<!-- ABOUT SECTION -->` in `index.html`.
- Replace the three `<p class="text-body">` paragraphs with your bio.
- Update the stats numbers (3+, 20+, etc.) and their labels.
- Add or remove `<span class="about__tag">` elements for your skills.

### Project Cards
Find `<!-- SELECTED WORK / PROJECTS SECTION -->` in `index.html`.
- Each project is an `<a class="project-card">` block.
- Duplicate one entire block to add a new project.
- Update the number, title, category, year, and href.
- The href should point to a new project HTML file you create.

### Project Detail Page
`project-template.html` is the template for every individual project.
- Duplicate this file and rename it (e.g. `project-branding.html`).
- Replace every placeholder text block marked with `<!-- Replace this text later -->`.
- Swap the placeholder image divs for real `<img>` tags when ready.
- Update the "Next Project" link at the bottom to chain your projects.

### Colors and Fonts
Open `css/style.css` and go to `/* 01. CSS VARIABLES */` at the very top.
- Change `--color-bg`, `--color-accent`, etc. to retheme the whole site instantly.
- Change `--font-display` and `--font-body` to different Google Font names (update the `<link>` in the HTML too).

### Decorative Background Text
- Hero background word: `<div class="hero__bg-text">Portfolio</div>` in `index.html`
- Contact background word: `<div class="contact__bg-text">Hello</div>` in `index.html`
- To remove them: delete those `<div>` elements entirely.
- To restyle them: look for `.hero__bg-text` and `.contact__bg-text` in `style.css`.

## File Structure
```
portfolio/
├── index.html              ← homepage
├── project-template.html   ← duplicate this for each project
├── css/
│   └── style.css           ← all styles, organized with comments
├── js/
│   └── main.js             ← scroll, nav, and animation logic
└── images/
    └── placeholders/       ← put your project images here
```

## Deploying to Netlify
1. Drag the entire `portfolio/` folder into Netlify's deploy dropzone.
2. Or connect your GitHub repo and Netlify will auto-deploy on every push.
