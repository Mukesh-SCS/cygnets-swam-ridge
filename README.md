# Cygnet's Swan Ridge

Website for **Cygnet's Swan Ridge** — a premium Tasmanian blackberry farm (Gardners Bay, TAS). Static, light-themed site for farm gate, Hobart/Tasmania delivery, wholesale, and export partnerships.

---

## What’s in the site

- **Home** — Hero, offer tiles, about preview, blackberry varieties, berry program, farm gate & wholesale previews  
- **Our Blackberries** — Chester & Cluster Thornless varieties, packaging, harvest updates, order CTAs, storage tips  
- **Farm Gate & Pick Your Own** — Address, map, hours, PYO details, rules & safety  
- **Wholesale** — Who we supply, formats, ordering info, wholesale enquiry form  
- **Delivery & Export** — Tasmania delivery, mainland, international (“Export partnerships welcome”)  
- **Meet Our Team** — Team bios and working principles  
- **Join Us** — Work application form, partnership CTA  
- **Contact** — Address, map, phone/email, general enquiry form  

---

## Tech

- **Static HTML** — No build step; open `index.html` or use any static server.  
- **CSS** — `assets/css/` (variables, reset, layout, components, main).  
- **JS** — `assets/js/` (nav, forms, harvest-updates).  
- **Data** — `data/varieties.json`, `data/harvest.json` for varieties and harvest updates.  
- **SEO** — `sitemap.xml`, `robots.txt`, per-page titles and meta descriptions.  

---

## Project structure

```
cygnets-swam-ridge/
├── index.html              # Home
├── blackberries.html
├── farm-gate.html
├── wholesale.html
├── delivery-export.html
├── team.html
├── join.html
├── contact.html
├── sitemap.xml
├── robots.txt
├── assets/
│   ├── css/                # main.css, variables, layout, components, reset
│   ├── js/                 # nav.js, forms.js, harvest-updates.js
│   └── images/
│       ├── logo/           # Updated_logo_nobg.png (transparent logo)
│       ├── blackberries/
│       ├── farm/
│       ├── raspberries/
│       └── team/
├── components/             # header.html, footer.html (reference)
└── data/
    ├── varieties.json
    └── harvest.json
```

---

## Run locally

**Option 1 — Open in browser**  
Double-click `index.html` or drag it into a browser. Some features (e.g. loading `data/harvest.json`) may need a local server.

**Option 2 — Local server (recommended)**  

```bash
# From project root (PowerShell use ; instead of &&)
cd cygnets-swam-ridge
npx -y serve -l 3000
```

Then open **http://localhost:3000**

To stop the server: press **Ctrl+C** in the terminal, or kill the process using port 3000.

---

## Before going live

1. **Contact** — Replace placeholder phone and email in `contact.html`, `blackberries.html`, and footers.  
2. **Social** — Replace `#` with real Facebook/Instagram URLs in each page footer.  
3. **Domain** — Update `sitemap.xml` and `robots.txt` with your real domain (e.g. `https://www.cygnetswanridge.com.au/`).  
4. **Images** — Add photos under `assets/images/` (blackberries, farm, team) as needed.  
5. **Forms** — Connect contact, wholesale, and join forms to a backend or form service (e.g. Formspree, Netlify Forms).  
6. **Maps** — Replace map iframe `src` with your own Google Maps embed for Gospel Hall Rd, Gardners Bay, TAS 7112 if desired.  

---

## Logo

Site logo: `assets/images/logo/Updated_logo_nobg.png` (transparent background).

---

© Cygnet's Swan Ridge — Product of Australia
