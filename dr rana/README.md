# Dr. Rana Obaid Dental Surgery — Website Concept

Responsive React/Vite redesign concept using the clinic's current public branding, copy and image assets. It is a discussion prototype, not an official clinic launch. Please confirm clinic details and obtain permission before using the original brand or photos in a public/live website.

## Run locally

Requirements: Node.js 20+ and pnpm 11.25.0.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Vite (the project defaults to port 3000). To make a production build:

```bash
pnpm run build
```

The static output is created in `dist/`.

## Put this code in your own GitHub repository

1. Sign in to your GitHub account and create a new repository under your username. Choose the repository name you want. You may make it private or public; do not initialize it with a second README if you plan to upload these files.
2. Download and extract this ZIP on your computer. Upload the **extracted files and folders** to the repository root (not the ZIP itself). Keep `package.json`, `pnpm-lock.yaml`, `src/` and `public/` at the top level.
3. Or use Git from the extracted project folder:

```bash
git init
git add .
git commit -m "Add dental website redesign source"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your GitHub account name and the repository name you chose. If `origin` is already set, use `git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git` instead.

Your GitHub username and repository name control the repository link. The site's displayed clinic name, logo, text and photographs remain Dr. Rana Obaid's because this project was created as that clinic's redesign pitch; uploading it under your GitHub account does not change the website's brand or make it the official clinic website.

GitHub stores the source code; it does not automatically host this Vite website. Hosting it publicly requires a separate deployment/setup step. The ZIP omits `.git`, `node_modules`, `dist` and generated TypeScript build cache; dependencies are restored from the included lockfile.
