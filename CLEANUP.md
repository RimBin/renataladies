# Repo cleanup

This repository now uses a single Next.js app under `web/`.

Removed legacy/unused files and folders to prevent accidental runs:

- `renataladies-custom/` (WordPress plugin scaffolding)
- Root Vite-based `package.json` was replaced with scripts that proxy to `web/`.

## Starting the dev server

**Option 1: Double-click launcher (stays open until you close it)**
- Windows: Double-click `start-dev.bat` in repo root
- Opens a new window with the dev server
- Server runs at http://localhost:3000
- Press Ctrl+C in that window to stop

**Option 2: VS Code Task (integrated terminal)**
- Terminal → Run Task → "Next.js: Dev (web/)"
- Server runs in VS Code terminal
- Press Ctrl+C to stop

**Option 3: VS Code Task (new window)**
- Terminal → Run Task → "Next.js: Dev (New Window)"
- Opens a new PowerShell window
- Server stays open until you close the window

**Option 4: Command line**
```powershell
npm run dev
```

## Other commands at repo root
- `npm run build` → builds Next.js in `web/`
- `npm start` → starts the built Next.js app
- `npm run lint` → runs lint in `web/`

## VS Code tasks
- Next.js: Dev (web/) – runs in integrated terminal
- Next.js: Dev (New Window) – opens separate window
- Next.js: Build (web/) – production build

If you still need the WordPress plugin for another project, keep it in a separate repo to avoid confusion here.