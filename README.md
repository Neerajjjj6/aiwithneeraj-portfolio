# Neeraj | Motion graphics with AI - portfolio

One-page portfolio for Instagram @aiwithneeraj. Plain HTML, CSS and a little JavaScript. No build step, no trackers. Fonts (League Gothic, Inter) are included in `assets/fonts`.

## See it on your computer

Open `index.html` in a browser. Or, for a local server: `python3 -m http.server 8000` in this folder, then open http://localhost:8000.

## Files

- `index.html` - all the text and sections
- `css/style.css` - colours, fonts, spacing, animations (colours are at the top, in `:root`)
- `js/main.js` - scroll animations
- `assets/reels/` - put reel thumbnails here
- `assets/fonts/` - fonts

## Edit text

Open `index.html` and change the words between the tags, for example:

```html
<h3>Video Editing</h3>
<p>Reels aur videos ko clean cuts ...</p>
```

Do not remove the `<` `>` tags or the `class="..."` parts.

## Change colours

At the top of `css/style.css`, change `--blue`, `--cyan` or `--bg`.

## Add a reel

1. Save a thumbnail (a screenshot of the reel, about 720 x 1280 px, `.jpg`) in `assets/reels/`, for example `reel-1.jpg`.
2. Copy the reel link from Instagram (Share > Copy link).
3. In `index.html`, find the "Work" section. Delete one of the `work-card placeholder` blocks ("Reels coming soon").
4. Copy the **REAL REEL TEMPLATE** (it is inside a comment at the end of the work grid), paste it in, and remove the `<!--` and `-->` around it.
5. Change the link (`href`), the image file name (`src`), the `alt` text (a short description of the reel), the title and the one-line text.
6. Repeat for each reel. Add more cards the same way; the grid adjusts itself.

Delete the "Placeholder" cards once you have real reels so no "coming soon" is left.

## Instagram button

The link is `https://www.instagram.com/aiwithneeraj/`. It appears in the hero and in the contact section of `index.html`. Search for `aiwithneeraj` to change it.

## Putting it online

This repo is private. To make it a public website later (for example with GitHub Pages), the repo owner has to choose that.
