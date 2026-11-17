# Neeraj | Video Editor & Motion Designer

The portfolio of Neeraj (Instagram: [@aiwithneeraj](https://www.instagram.com/aiwithneeraj/)), a video editor and motion designer who creates AI-powered motion graphics and teaches video editing and content creation.

**Live site:** https://neerajjjj6.github.io/aiwithneeraj-portfolio/

The site is a single page built with plain HTML, CSS and a small amount of JavaScript. There is no build step, no framework and no tracking. The fonts (League Gothic and Inter) are bundled in `assets/fonts`, so the page makes no external requests.

## Features

- Sticky navigation with anchor links and an active-section indicator
- Animated hero with a motion-graphics composition built from inline SVG and CSS
- Subtle scroll reveals and hover micro-interactions
- Responsive layout for phone, tablet and desktop
- Keyboard-friendly: skip link, visible focus states, semantic landmarks
- Respects the `prefers-reduced-motion` setting
- Inline SVG favicon, Open Graph and Twitter card metadata

## Run locally

Open `index.html` in a browser, or start a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Project structure

| Path | Purpose |
| --- | --- |
| `index.html` | All page content and metadata |
| `css/style.css` | Design tokens, layout, components and animations |
| `js/main.js` | Scroll reveals, active navigation link and hover effects |
| `assets/reels/` | Reel thumbnails |
| `assets/fonts/` | Self-hosted fonts |
| `assets/og-image.png` | Preview image used when the link is shared (1200 x 630 px) |

## Editing content

Open `index.html` and edit the text between the tags. Keep the tags and `class` attributes intact.

```html
<h3>Video Editing</h3>
<p>Reels and videos shaped with clean cuts, deliberate pacing and a clear narrative.</p>
```

## Changing colours

The colour tokens are at the top of `css/style.css`, inside `:root`. The main values are `--bg`, `--blue` and `--cyan`.

## Adding a reel

1. Save a thumbnail (about 720 x 900 px, `.jpg`) in `assets/reels/`, for example `reel-1.jpg`.
2. Copy the reel link from Instagram (Share > Copy link).
3. In the "Work" section of `index.html`, remove one of the `work-card placeholder` blocks ("Coming soon").
4. Copy the **REAL REEL TEMPLATE** from the comment at the end of the work grid, paste it in, and delete the `<!--` and `-->` markers.
5. Update the link (`href`), the image path (`src`), the `alt` text (a short description of the reel), the title and the one-line description.
6. Repeat for each reel. The grid adjusts automatically.

Remove all remaining "Coming soon" cards once real reels are in place.

## Instagram links

The profile link is `https://www.instagram.com/aiwithneeraj/`. It appears in the hero, the contact section and the footer of `index.html`. Search for `aiwithneeraj` to update it.

## Deployment

The repository is public and the site is published with GitHub Pages from the `main` branch (root folder). Every push to `main` redeploys the site automatically, usually within a minute. If a change does not appear straight away, refresh the page.
