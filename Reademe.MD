# Zeeshan Hafeez | Pipeline Welder CV

A responsive, print-ready CV web page for a **Pipeline Welder (6G SMAW, ASME Section IX)**, built with plain HTML, CSS and JavaScript and published on GitHub Pages.

**Live CV:** https://malikzeeshannb-art.github.io/pipeline-welder-cv/

> Add a screenshot here after publishing: `![CV preview](screenshot.png)`

---

## About this project

I am a pipe welder and a self-taught frontend developer. I built this CV as a real project to present my welding profile in a clean, international style and to practise structured HTML, CSS variables, responsive layout and Git/GitHub deployment.

The page works as:
- a live CV link I can send to employers and recruiters,
- a downloadable A4 PDF (generated from the same page),
- the CV page that my upcoming welding portfolio website will link to.

## Features

- **Arrow-shaped coloured header** with circular photo (soft shadow) and click-to-contact details
- **Sidebar and main layout:** About Me, Links, Personal Details, References, Hobbies, Work Experience, Certification, Education, Skills, Languages, Additional Skills
- **Timeline** for experience, certification and education
- **Round progress rings** for languages (pure CSS, driven by one variable per language)
- **Hobbies with Font Awesome icons**, in a flexible container that wraps automatically
- **Clickable everything:** phone numbers open the dialer, WhatsApp opens a pre-filled chat, email opens a new message, the location opens Google Maps for Madinah, LinkedIn/GitHub/portfolio open in new tabs
- **Download my CV** button: downloads the PDF, and falls back to the browser print dialog if the PDF is missing
- **Photo placeholder:** shows "ADD PHOTO" automatically if the image file is missing
- **Print/PDF styles:** A4 page with colours preserved
- **Responsive:** desktop, tablet and phone layouts
- **SEO and sharing:** title, description, keywords, Open Graph and Twitter Card meta tags

## Tech stack

| Part | Technology |
| --- | --- |
| Structure | HTML5 (semantic sections, inline SVG icon sprite) |
| Styling | CSS3 (Grid, Flexbox, `clip-path`, `conic-gradient`, CSS variables) |
| Behaviour | Vanilla JavaScript (download handler, photo fallback, placeholder links) |
| Icons | Inline SVG (contact/social) and Font Awesome 6 (hobbies) |
| Fonts | Google Fonts: Lato and Oswald |
| Hosting | GitHub Pages |
| Version control | Git and GitHub, edited in VS Code |

## Project structure

```
pipeline-welder-cv/
├── index.html              # page content, meta tags
├── style.css               # all styling; one :root block with all variables
├── script.js               # small helpers (download, photo fallback, placeholders)
├── shanis-image.png             # profile photo (use the exact file name referenced in index.html)
├── favicon.png             # browser-tab icon
├── apple-touch-icon.png    # iPhone/iPad home-screen icon
├── Zeeshan_Hafeez_CV.pdf   # downloadable CV (re-generate after every edit)
├── sitemap.xml             # for Google Search Console
└── README.md
```

## Run locally

1. Clone the repo:
   ```bash
   git clone https://github.com/malikzeeshannb-art/pipeline-welder-cv.git
   cd pipeline-welder-cv
   ```
2. Open `index.html` in Chrome, or use the **Live Server** extension in VS Code.

No build step or dependencies are needed.

## Customising the design

Everything visual is controlled from the single `:root` block at the top of `style.css`:

| Variable group | Examples | What it changes |
| --- | --- | --- |
| Colors | `--color-header`, `--color-sidebar`, `--color-ink` | header band, sidebar, headings |
| Font sizes | `--fs-xs` ... `--fs-name` | text sizes |
| Spacing | `--space-1` ... `--space-6` | gaps and padding |
| Border radius | `--radius-pill`, `--radius-round` | buttons and circles |
| Sizes | `--photo-size`, `--ring-size`, `--ring-thickness`, `--arrow-depth` | photo, language rings, header arrow |

**Add a hobby:** copy one line inside `<ul class="hobbies">` in `index.html`, change the Font Awesome class (browse free icons at fontawesome.com/search) and the text. The container wraps by itself.

```html
<li class="hobby"><i class="fa-solid fa-dumbbell"></i><span>Fitness</span></li>
```

**Change a language ring:** edit the number in `style="--pct:75"` (0 to 100).

## Create the PDF

1. Open the live page or `index.html` in Chrome.
2. Press `Cmd+P` (Mac) or `Ctrl+P` (Windows).
3. Destination: **Save as PDF**, Paper size: **A4**, Margins: **None**, tick **Background graphics**.
4. Save as `Zeeshan_Hafeez_CV.pdf` in the project folder (overwrite the old file), then commit and push.

## Deploy on GitHub Pages

1. Repository **Settings** > **Pages**.
2. **Build and deployment** > Source: **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`, then **Save**.
4. After 1-2 minutes the site is live at the URL at the top of this README.

## Update workflow (Git)

```bash
git pull                              # get the latest version
# edit files in VS Code and save
git status                            # see what changed
git add .
git commit -m "Update CV: short message"
git push
```

Changes appear on the live site 1-2 minutes after `git push`. Use a hard refresh (`Cmd+Shift+R`) to bypass the browser cache.

## SEO and sharing

- Descriptive `<title>`, meta description and keywords
- Open Graph and Twitter Card tags for link previews (WhatsApp, LinkedIn, Facebook)
- `rel="canonical"` link, favicon and apple-touch-icon
- `sitemap.xml` submitted in Google Search Console
- Preview cache can be refreshed with the LinkedIn Post Inspector and the Facebook Sharing Debugger

## Privacy

- No ID numbers (iqama, passport) and no date of birth are published on this page or in the PDF.
- Git commits use a GitHub no-reply email address.
- References are available on request.

## Roadmap

- [ ] Luxury welding portfolio website (separate repository) with two buttons: **View my CV** (opens this page) and **Download my CV** (downloads the PDF from this repository)
- [ ] Update certification details when the corrected certificate and experience letter are issued
- [ ] Add a 1200x630 social-preview image

## License and credits

Personal content (text, photo, certification details) is © 2026 Zeeshan Hafeez, all rights reserved. Please do not reuse it. The layout and code structure are free to learn from.

## Author

**Zeeshan Hafeez** | Pipeline Welder (6G SMAW) | Madinah, Saudi Arabia

- GitHub: [malikzeeshannb-art](https://github.com/malikzeeshannb-art)
- LinkedIn: (add your LinkedIn URL here)
- Contact details are on the [live CV](https://malikzeeshannb-art.github.io/pipeline-welder-cv/)