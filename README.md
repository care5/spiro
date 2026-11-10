# Spiro Website (Structural Clone)

Multi-page static website that follows the **structure, flow, design system and layout** of [spironet.com](https://www.spironet.com/).

Built for learning / portfolio / local demonstration purposes.

## Contact

- **Call:** [+254 104 076 565](tel:+254104076565)
- **WhatsApp:** [Chat on WhatsApp](https://wa.me/254104076565)

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| Ekon 450M1 (product) | `ekon.html` |
| Swap Network | `energy.html` |
| Technology | `technology.html` |

## Features

- Consistent sticky header + country banner
- Call & WhatsApp buttons on every page (CTA + footer)
- Responsive layout
- Shared design system (CSS variables, cards, buttons, stats, ownership cards)
- Savings calculator on home page

## How to run locally

Open `index.html` in a browser, or serve the folder:

```bash
# Python
python -m http.server 8080

# Node
npx serve .
```

Then open http://localhost:8080

## Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push this folder as the root (or put the files in the root of the repo)
3. Go to **Settings → Pages**
4. Set source to `main` branch (root)
5. Your site will be live at `https://<username>.github.io/<repo-name>/`

## Project structure

```
spiro-clone/
├── index.html
├── ekon.html
├── energy.html
├── technology.html
├── css/
│   └── styles.css
├── js/          (empty – reserved for future scripts)
├── images/      (empty – add your product photos here)
├── .gitignore
└── README.md
```

## Notes

- This is a **structural recreation**. Real Spiro photography, exact brand assets, live maps and complex interactions are not included.
- Replace CSS bike placeholders with real images when available.
- Forms currently show a simple alert – connect them to a backend or form service as needed.

Inspired by the public structure of spironet.com.
