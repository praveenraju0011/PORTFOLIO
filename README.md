# My Portfolio

A simple, beautiful React portfolio website built with Vite.

## Run locally in VS Code

1. **Unzip** the folder and open it in VS Code:
   ```
   File → Open Folder → my-portfolio
   ```
2. **Open the terminal** in VS Code (`Ctrl + ~` or `View → Terminal`).
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the dev server**:
   ```bash
   npm run dev
   ```
5. Open the URL printed in the terminal (usually http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview
```

## Where to edit your content

| What | File |
|---|---|
| Name, description, avatar | `src/components/Hero.jsx` |
| Avatar image | replace `src/assets/avatar.png` |
| Skills list | `src/components/Skills.jsx` |
| Basic & Advanced projects (titles, links, descriptions) | `src/App.jsx` |
| Footer: contact info, email, socials | `src/components/Footer.jsx` |
| Colors / theme | `src/styles.css` (top `:root` block) |

Each project card is a clickable link — replace `https://your-app.vercel.app` with your real Vercel URL.
