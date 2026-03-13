# FGCLC KingdomBuilder - Deployment Guide

## Easiest Option: Netlify (FREE - 2 minutes)

1. Go to **https://app.netlify.com/drop**
2. Drag and drop the **`deploy`** folder (containing `index.html` and `app.jsx`)
3. Done! You get a URL like `https://random-name.netlify.app`
4. Optional: Click "Site settings" > "Change site name" to get `https://fgclc.netlify.app`

## Alternative: Vercel (FREE)

1. Go to **https://vercel.com** and sign up with GitHub
2. Create a new GitHub repo, upload the `deploy` folder contents
3. Import the repo in Vercel > Deploy
4. Get a URL like `https://fgclc.vercel.app`

## Alternative: Single HTML File (simplest possible)

Use `kingdombuilder.html` - this is EVERYTHING in one file.
Upload it to any web host, or even open it directly in a browser.

- **Tiiny Host** (https://tiiny.host) - drag and drop, free
- **Surge** - `npm install -g surge && surge ./deploy`
- **GitHub Pages** - push to a repo, enable Pages

## Custom Domain

After deploying on Netlify/Vercel:
1. Buy a domain (e.g. `fgclc.app` or `kingdombuilder.church`)
2. In Netlify/Vercel settings > Domains > Add custom domain
3. Update DNS as instructed

## For Members

Share the URL with your church members. They can:
- Open it in any browser (Chrome, Safari, Firefox)
- On iPhone: Open in Safari > Share > "Add to Home Screen" (works like an app)
- On Android: Open in Chrome > Menu > "Add to Home Screen" (works like an app)

## Data

All data is stored in your Supabase database - it syncs across all devices automatically.
