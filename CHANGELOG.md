# Changelog

All notable changes to the Teledígitos Web project will be documented in this file.

## [2026-07-16] - Servicios page, content cleanup, and minor fixes

### Added
- **`servicios.html`**: extracted the three service cards from `index.html` into a standalone page, consistent with `about.html` and `aspiracion.html`. Registered in `vite.config.js` rollup inputs and linked from the nav.
- **SEO meta tags for `servicios.html`**: added `<meta name="description">` and OG/Twitter tags.

### Changed
- **Nav**: replaced `index.html#manifesto` and `index.html#services` links with direct links to `servicios.html`. Nav now has four items: Inicio, Servicios, Aspiración, About.
- **Hero CTA**: button now links to `servicios.html` instead of the removed `#services` anchor.
- **Manifesto section removed**: "El Camino de la Precisión" block removed from `index.html`; its unique content (real-life/bienestar angle) was folded into the hero subtitle. Removal was intentional.
- **`bienestar`**: replaced "salud mental" with "bienestar" in hero subtitle.
- **Section padding**: reduced `.section` from `6rem 0` to `3rem 0`, `.content-page` from `120px` to `80px`, and `.article-section` padding, to keep vertical gaps under ~2cm.
- **Mobile header height**: added `app-header { height: 64px }` inside the `@media (max-width: 768px)` block to match the actual 64px navbar height on mobile, eliminating the remaining layout shift.
- **Hamburger `aria-label`**: label now toggles between "Abrir menú" and "Cerrar menú" on open/close, including the close-on-link-click path.
- **`h2` bottom margin**: added `margin-bottom: 1rem` to the global `h1, h2, h3, h4` rule so headings no longer touch the content below them.
- **`h3` top margin**: added `margin-top: 2.5rem` to `.article-section h3` for visual separation in the Aspiración document.
- **Unclosed `<div>` in `index.html`**: added the missing closing tag for `.container.grid-2` in the About Summary section.

### Removed
- **Dead CSS**: removed `.manifesto-card`, `.manifesto-card::before`, and `.mission-text` — no longer referenced after the manifesto section deletion.
- **`index.html#services` section**: service cards removed from homepage, now live exclusively in `servicios.html`.
- **`index.html#manifesto` section**: removed entirely (see above).

## [2026-07-15] - Bug Fixes, Mobile Nav, SEO, and Content

### Added
- **Mobile hamburger menu**: replaced `display: none` on `.nav-links` with a working toggle menu in `AppHeader.js`, including animated icon and close-on-link-click behavior.
- **SEO meta tags**: added `<meta name="description">` and Open Graph / Twitter Card tags to all three pages, each with page-specific copy.
- **CSS `.scrolled` class**: navbar scroll effect now uses a CSS class instead of inline styles, keeping colors in one place.
- **`app-header` height reservation**: added `app-header { height: 80px }` to prevent layout shift before the custom element upgrades.
- **Logo CSS classes**: `.nav-logo` and `.footer-logo-img` added to `style.css` to replace inline `style=` attributes on logo images.
- **ROADMAP.md**: added roadmap focused on concreteness — metrics, case studies, linked repos, contact channel.

### Changed
- **Profile photo**: replaced `profile.svg` placeholder with `yoFoto.png` in `index.html` and `about.html`.
- **Favicon paths**: changed `href="/favicon.svg"` to `href="%BASE_URL%favicon.svg"` on all pages so the favicon resolves correctly under the `/TeledigitosWeb/` base path on GitHub Pages.
- **Image paths**: fixed root-absolute `/yoFoto.png` to relative `./images/yoFoto.png` so assets load correctly on GitHub Pages.
- **`<script>` placement**: moved `type="module"` script tag to `<head>` on all pages so custom element definitions are fetched as early as possible.
- **Merged duplicate media queries**: consolidated two separate `@media (max-width: 768px)` blocks in `style.css` into one, resolving a silent `hero-title` font-size conflict.
- **`about.html` content**: slimmed down to a personal intro + skills summary, removing sections duplicated verbatim from `aspiracion.html`.
- **Brand copy**: rewrote the `index.html` about section and `about.html` bio to reduce repetition across pages; `aspiracion.html` remains the canonical source.
- **TROUBLESHOOTING.md Section 3**: corrected asset path guidance — removed the root-absolute `src="/..."` recommendation and documented `%BASE_URL%` and relative paths as the correct patterns for this project.

## [2026-07-15] - Architecture, Assets, and Documentation

### Added
- **Web Components**: extracted Navbar and Footer into native Web Components (`<app-header>` and `<app-footer>`) to centralize layout and prevent duplicated HTML across pages.
- **Images**: added official brand assets (`teledigitos.png`, `logo-Teledigitos.png`) and profile photo (`yoFoto.png`) to replace plain text placeholders.
- **Deployment Scripts**: added the `gh-pages` dependency and an `npm run deploy` script in `package.json` for easy one-command deployments.
- **Documentation**: added `TROUBLESHOOTING.md` documenting common Vite asset resolution and MPA build issues; added GitHub Actions automation instructions to `README.md`.

### Changed
- **Vite Config**: updated `vite.config.js` to define multiple Rollup inputs so all pages are compiled during `npm run build`.
- **Styling**: adjusted navigation bar padding and increased footer logo size.
- **Content**: refined content in `about.html` and `aspiracion.html` regarding the "Nómada de Base" lifestyle section.

### Removed
- **Dead Code**: removed unused Vite template files (`src/counter.js`).
- **Build Artifacts**: removed `page.html` (an outdated, untracked build artifact).

## [2026-07-12] - Initial Release

### Added
- **Initial Commit**: uploaded the foundational Teledígitos Web project built with Vite.
- **Content Structure**: created `index.html`, `about.html`, and `aspiracion.html` reflecting the brand's manifesto and focus on Software Architecture.
- **Base Config**: configured `vite.config.js` with `base: '/TeledigitosWeb/'` for proper GitHub Pages hosting.
- **Documentation**: included foundational `README.md` and environment examples.
