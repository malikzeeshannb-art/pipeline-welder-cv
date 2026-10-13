# Zeeshan Hafeez | Pipeline Welder CV

A responsive, print-ready CV web page for a **Pipeline Welder (6G SMAW, ASME Section IX)**, built with plain HTML, CSS and JavaScript and published on GitHub Pages.

**Live CV:** https://malikzeeshannb-art.github.io/pipeline-welder-cv/

> Add a screenshot here after publishing: `![CV preview](screenshot.png)`

---

## About this project

I am a pipe welder and a self-taught frontend developer. I built this CV as a real project to present my welding profile in a clean, professional style and to practise structured HTML, CSS variables, responsive layout and Git/GitHub deployment.

The page works as:
- a live CV link I can send to employers and recruiters,
- the source of a downloadable 2-page A4 PDF (generated from the same page),
- the CV page that my upcoming welding portfolio website will link to.

The CV is deliberately focused on welding work. Hobbies, videos, galleries and extra material belong in the separate portfolio.

## Features

- **Arrow-shaped coloured header** with circular photo (soft shadow) and click-to-contact details
- **Mobile header:** dark emerald gradient, centred photo and name, compact two-column contact panel
- **Sidebar and main layout:** About Me, Links, Personal Details, References, Work Experience, Certification, Education, Skills, Languages, Additional Skills
- **Timeline** for experience, certification and education
- **Plain skills list** (two columns, easy to edit)
- **Round progress rings** for languages (pure CSS, one variable per language)
- **Contact popup:** clicking the phone number offers *Chat on WhatsApp* or *Phone call* (without JavaScript it simply dials)
- **Clickable everything:** WhatsApp opens a pre-filled chat, email opens a new message, the location opens Google Maps for Madinah, LinkedIn opens in a new tab
- **Download my CV** button: downloads the A4 PDF (same file on phone and laptop)
- **Photo placeholder:** shows "ADD PHOTO" automatically if the image file is missing
- **Print/PDF styles:** A4, desktop layout, 2 pages, colours preserved (also when printed from a phone)
- **SEO and sharing:** title, description, keywords, Open Graph, Twitter Card, structured data (JSON-LD) and sitemap

## Tech stack

| Part | Technology |
| --- | --- |
| Structure | HTML5 (semantic sections, inline SVG icon sprite) |
| Styling | CSS3 (Grid, Flexbox, `clip-path`, `conic-gradient`, CSS variables) |
| Behaviour | Vanilla JavaScript (download handler, contact popup, photo fallback) |
| Icons | Inline SVG |
| Fonts | Google Fonts: Lato and Oswald |
| Hosting | GitHub Pages |
| Version control | Git and GitHub, edited in VS Code |

## Project structure

```
pipeline-welder-cv/
├── index.html                  # page content, meta tags, structured data
├── style.css                   # all styling; one :root block with all variables
├── script.js                   # download button, contact popup, photo fallback
├── shanis-image.png            # profile photo shown in the header
├── shanis-image-blue-bg.png    # favicon and link-preview image (og:image)
├── Zeeshan_Hafeez_CV.pdf       # downloadable CV (re-generate after every edit)
├── sitemap.xml                 # for Google Search Console
└── README.md
```

File names on GitHub are case-sensitive: keep them exactly as above (`sitemap.xml`, `README.md`).

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
| Colors | `--color-header`, `--color-sidebar`, `--color-title`, `--color-ring` | header band, sidebar, section titles, language rings |
| Font sizes | `--fs-xs` ... `--fs-name` | text sizes |
| Spacing | `--space-1` ... `--space-6` | gaps and padding |
| Border radius | `--radius-pill`, `--radius-round`, `--radius-card` | buttons, circles, panels |
| Sizes | `--photo-size`, `--ring-size`, `--ring-thickness`, `--arrow-depth` | photo, language rings, header arrow |
| Mobile header | `--hero-emerald`, `--hero-mid`, `--hero-dark`, `--hero-accent` | mobile gradient and accent |

**Add or remove a skill:** copy or delete one `<li>` inside `<ul class="skills-list">` in `index.html`.

**Change a language ring:** edit the number in `style="--pct:75"` (0 to 100).

**Contact popup:** any element with the attribute `data-contact-chooser` opens it. The popup markup is `#contactChooser` at the bottom of `index.html`.

## Create the PDF

1. Open the live page in Chrome **on a laptop** with a wide window.
2. Press `Cmd+P` (Mac) or `Ctrl+P` (Windows).
3. Destination: **Save as PDF**, Paper size: **A4**, Margins: **None**, tick **Background graphics**.
4. Check that the preview says **2 pages**.
5. Save as `Zeeshan_Hafeez_CV.pdf` in the project folder (overwrite the old file), then commit and push.

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

- Short, descriptive `<title>` and meta description
- Open Graph and Twitter Card tags for link previews (WhatsApp, LinkedIn, Facebook)
- Structured data (JSON-LD, `Person`) and favicon
- `sitemap.xml` submitted in Google Search Console
- Preview cache can be refreshed with the LinkedIn Post Inspector and the Facebook Sharing Debugger

## Privacy

- No ID numbers (iqama, passport) and no date of birth are published on this page or in the PDF.
- Git commits use a GitHub no-reply email address.
- References are available on request.

## Roadmap

- [ ] Luxury welding portfolio website (separate repository): CV, certificate, welding and skill video galleries, LinkedIn, WhatsApp, GitHub, hobbies and email, with two key buttons: **View my CV** (opens this page) and **Download my CV** (downloads the PDF from this repository)
- [ ] Update certification details when the corrected certificate and experience letter are issued
- [ ] Add a 1200x630 social-preview image

## License and credits

Personal content (text, photo, certification details) is © 2026 Zeeshan Hafeez, all rights reserved. Please do not reuse it. The layout and code structure are free to learn from.

## Author

**Zeeshan Hafeez** | Pipeline Welder (6G SMAW) | Madinah, Saudi Arabia

- GitHub: [malikzeeshannb-art](https://github.com/malikzeeshannb-art)
- LinkedIn: [zeeshan-hafeez-6g-smaw-pipe-welder](https://www.linkedin.com/in/zeeshan-hafeez-6g-smaw-pipe-welder)
- Contact details are on the [live CV](https://malikzeeshannb-art.github.io/pipeline-welder-cv/)