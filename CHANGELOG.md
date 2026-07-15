# Changelog

All notable changes to the Teledígitos Web project will be documented in this file.

## [2026-07-15] - Architecture, Assets, and Documentation

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
