# Spiro-inspired multi-page website

Static site modelled on the flow and structure of spironet.com (Home, Ekon 450M1, Swap Network, Technology).

## Features
- Shared header + footer, sticky nav
- Working mobile hamburger menu (three lines)
- Call: `tel:+254104076565`
- WhatsApp: `https://wa.me/254104076565`
- Brand colors: accent `#3038FC`, soft cream backgrounds (`#F6F4EE` / `#EFECE4`) — no pure white body
- Product photos organised by Ekon colour (Blue, Red, Green, Black, Yellow, Silver)
- Logo: `images/logo.jpg` (power-pin mark)

## Pages
| File | Purpose |
|------|---------|
| `index.html` | Home — hero, stats, savings, ownership, photo gallery |
| `ekon.html` | Ekon 450M1 product page + colour gallery |
| `energy.html` | Swap network / energy |
| `technology.html` | IoT, app, maps |

## Images naming
Photos are named systematically, for example:
- `ekon-blue-hero.jpg`, `ekon-red-fleet.jpg`, `ekon-green-side.jpg`
- `ekon-black-side-studio.jpg`, `ekon-yellow-expo.jpg`, `ekon-silver-m1v3.jpg`
- `fleet-outdoor-colors.jpg`, `warehouse-packed.jpg`, `swap-batteries-booth.jpg`
- `rider-woman-happy.jpg`, `factory-assembly.jpg`, `logo.jpg`

Original WhatsApp filenames (`IMG-20261110-WA*.jpg`) are kept in `images/` as backups.

## Run locally
Open `index.html` in a browser, or:
```bash
npx serve .
```

## GitHub Pages
Push this folder to a repo and enable Pages on the root (or `/docs` if you move files there).

## Contact
+254 104 076 565 (Call & WhatsApp)
