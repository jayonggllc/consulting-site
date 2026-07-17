# Jay Ongg - Coaching, Mentoring, and Consulting

A simple landing page for hourly software consulting, styled as an
engineering blueprint (schematic diagram, spec-sheet rate table, grid background).

## Files

- `index.html` — page content
- `style.css` — all styling
- `script.js` — scroll-reveal + footer year (no dependencies)

## 1. Before you publish — things to edit

Search each file for these and replace with your real info:

| Placeholder | Where | Replace with |
|---|---|---|
| `Your Name` / `YOUR NAME` | `index.html` (title, nav, footer) | Your name or business name |
| `https://calendly.com/jayongg-llc` | `index.html`, "Book" section | Your real Calendly link |
| `you@example.com` | `index.html`, footer + book section | Your email |
| `https://github.com/your-username` | `index.html`, footer | Your GitHub |
| `https://www.linkedin.com/in/your-username` | `index.html`, footer | Your LinkedIn (or delete the line) |
| `$XXX` | `index.html`, rates table | Your actual hourly rates |

## 2. Run it locally (optional, to preview)

No build step needed — it's plain HTML/CSS/JS. Just open `index.html`
in a browser, or serve it locally:

```bash
cd consulting-site
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 3. Push it to GitHub and turn on GitHub Pages

Open a terminal (PowerShell or Git Bash) in `D:\projects\consulting-site`
and run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
```

Then on GitHub.com:

1. Create a new **empty** repository (no README, no .gitignore) — name it
   whatever you like, e.g. `consulting-site`.
2. Copy the remote URL it gives you, then run:

```bash
git remote add origin https://github.com/YOUR-USERNAME/consulting-site.git
git push -u origin main
```

3. On the repo's GitHub page, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
6. Wait ~1 minute, refresh the Pages settings tab — you'll see your live URL,
   typically:

```
https://YOUR-USERNAME.github.io/consulting-site/
```

### Using a custom domain (optional)

If you own a domain, add it under **Settings → Pages → Custom domain**,
and create a `CNAME` DNS record pointing to `YOUR-USERNAME.github.io`.
GitHub will add a `CNAME` file to your repo automatically once you save it.

## 4. Future updates

Any time you edit the files, just commit and push again:

```bash
git add .
git commit -m "Update rates"
git push
```

GitHub Pages redeploys automatically within a minute or two.
