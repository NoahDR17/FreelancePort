This project contains a small personal portfolio site.

Changes made:
- Extracted inline CSS into `css/style.css`.
- Extracted inline JS into `js/main.js` (uses event delegation and DOMContentLoaded).
- Updated `index.html` to reference the external files and removed inline onclick attributes.

How to work on the project:
- Open `index.html` in a browser (double-click or serve with a static server).
- Edit styles in `css/style.css` and scripts in `js/main.js`.

Notes:
- Scripts are loaded with `defer` so they run after the DOM is parsed.
- If you want to serve the project locally, you can use a simple server like `npx serve` or `python -m http.server`.
