# Shashwat Sangewadikar — Portfolio

> Personal portfolio built with React + Vite, deployed on GitHub Pages.

## 🚀 Quick Start (local dev)

```bash
npm install
npm run dev
```

Open `http://localhost:5173` to see it.

---

## 📦 Deploy to GitHub Pages — Step by Step

### Step 1: Create the GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it **`Shashwat-r-s.github.io`** (must match your username exactly for a user site)
3. Set it to **Public**
4. Do NOT initialise with README (you'll push this code)

### Step 2: Push This Code

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/Shashwat-r-s/Shashwat-r-s.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages with Actions

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. That's it — the workflow in `.github/workflows/deploy.yml` handles the rest.

### Step 4: Wait ~60 seconds

The Actions tab will show a running workflow. When it's green ✅, your site is live at:

**`https://Shashwat-r-s.github.io`**

---

## 🛠 Customisation

| File | What to edit |
|------|-------------|
| `src/App.jsx` | All content — update `EXPERIENCE`, `PROJECTS`, `SKILLS`, `EDUCATION` arrays |
| `src/index.css` | Design tokens in `:root {}` at the top (colors, fonts) |
| `index.html` | Meta tags, page title, Open Graph description |
| `vite.config.js` | Change `base` if using a project repo (not user site) |

### Adding a real project with GitHub link

In `PROJECTS` inside `App.jsx`, add a `link` field and render it as a button in the card.

---

## 📂 File Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml      ← Auto-deploy on push to main
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx             ← All components & data
│   ├── main.jsx            ← React entry
│   └── index.css           ← All styles & design system
├── index.html
├── package.json
└── vite.config.js
```

---

Built with React + Vite. Zero third-party UI libraries — pure CSS.
