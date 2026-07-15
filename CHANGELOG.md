# Changelog

All notable changes to the Teledígitos Web project will be documented in this file.

## [2026-07-15] - Bug Fixes, Mobile Nav, SEO, and Content

### Added
- **Mobile hamburger menu**: replaced `display: none` on `.nav-links` with a working toggle menu in `AppHeader.js`, including animated icon and close-on-link-click behavior.
- **SEO meta tags**: added `<meta name="description">` and Open Graph / Twitter Card tags to all three pages, each with page-specific copy.
- **CSS `.scrolled` class**: navbar scroll effect now uses a CSS class instead of inline styles, keeping colors in one place.
- **`app-header` height reservation**: added `app-header { height: 80px }` to prevent layout shift before the custom element upgrades.
- **Logo CSS classes**: `.nav-logo` and `.footer-logo-img` added to `style.css` to replace inline `style=` attributes on logo images.

### Changed
- **Profile photo**: replaced `profile.svg` placeholder with `yoFoto.png` in `index.html` and `about.html`.
- **Favicon paths**: changed `href="/favicon.svg"` to `href="%BASE_URL%favicon.svg"` on all pages so the favicon resolves correctly under the `/TeledigitosWeb/` base path on GitHub Pages.
- **Image paths**: fixed root-absolute `/yoFoto.png` to relative `./images/yoFoto.png` so assets load correctly on GitHub Pages.
- **`<script>` placement**: moved `type="module"` script tag to `<head>` on all pages so custom element definitions are fetched as early as possible.
- **Merged duplicate media queries**: consolidated two separate `@media (max-width: 768px)` blocks in `style.css` into one, resolving a silent `hero-title` font-size conflict.
- **`about.html` content**: slimmed down to a personal intro + skills summary, removing sections duplicated verbatim from `aspiracion.html` (identity paragraphs, engagement policy, purpose section).
- **Brand copy**: rewrote the `index.html` about section and `about.html` bio to reduce repetition of "soberanía tecnológica / sin ruido / deuda técnica / criterio autodidacta" across pages; `aspiracion.html` remains the canonical source.


### Added
- **Web Components**: Extracted Navbar and Footer into native Web Components (`<app-header>` and `<app-footer>`) to centralize layout, ensure link consistency, and prevent duplicated HTML across pages.
- **Images**: Added official brand assets (`teledigitos.png` and `logo-Teledigitos.png`) and profile photo (`yoFoto.png`) to replace plain text placeholders.
- **Deployment Scripts**: Added the `gh-pages` dependency and an `npm run deploy` script in `package.json` for easy one-command deployments.
- **Documentation**: 
  - Added `TROUBLESHOOTING.md` documenting common Vite asset resolution and MPA build issues.
  - Added GitHub Actions automation instructions to `README.md`.

### Changed
- **Vite Config**: Updated `vite.config.js` to define multiple Rollup inputs so all pages (`index.html`, `about.html`, `aspiracion.html`) are compiled during `npm run build`.
- **Styling**: Adjusted navigation bar padding and increased the size of the footer logo for better prominence.
- **Content**: Refined and simplified the content in `about.html` and `aspiracion.html` regarding the "Nómada de Base" lifestyle and technical discipline.

### Removed
- **Dead Code**: Removed unused Vite template files (`src/counter.js`).
- **Build Artifacts**: Removed `page.html` (an outdated, untracked build artifact).

## [2026-07-12] - Initial Release

### Added
- **Initial Commit**: Uploaded the foundational Teledígitos Web project built with Vite.
- **Content Structure**: Created `index.html`, `about.html`, and `aspiracion.html` reflecting the brand's manifesto and focus on Software Architecture.
- **Base Config**: Configured `vite.config.js` with `base: '/TeledigitosWeb/'` for proper GitHub Pages hosting.
- **Documentation**: Included foundational `README.md` and environment examples.
