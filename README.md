# Raf Bristol Personal Training Website

This repository contains the source code for the Raf Bristol Personal Training website, built with [Jekyll](https://jekyllrb.com/) and [Bootstrap](https://getbootstrap.com/).

## Features
- One‑page layout with smooth scrolling navigation
- Responsive design powered by Bootstrap 3
- Custom sections: About, Services, Portfolio, Contact
- Configurable content via Liquid includes and `_config.yml`

## Getting Started
These instructions will help you run the site locally for development and preview.

### Prerequisites
- Ruby (>= 2.7)
- [Bundler](https://bundler.io/)
- Node.js & npm (optional, for front‑end tooling)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/raf-bristol-pt.git
   cd raf-bristol-pt
   ```
2. Install Ruby gems:
   ```bash
   bundle install
   ```
3. (Optional) Install front‑end dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the Jekyll development server with live reload:
```bash
bundle exec jekyll serve --livereload
```
Open your browser to [http://127.0.0.1:4000](http://127.0.0.1:4000).

### Directory Structure
- `_config.yml` — Site settings (title, URL, author, etc.)
- `_includes/` — Reusable HTML partials (header, footer, sections)
- `_layouts/` — Page layouts (front page, default wrapper)
- `css/` — Sass and compiled CSS
- `js/` — JavaScript plugins and custom scripts
- `img/` — Image assets
- `index.html` — Main entry point (front page)

### Customization
- Edit content in `_includes/*.html` to update text and structure.
- Adjust styles in `css/main.scss` and recompile.
- Modify navigation links in `_includes/nav.html`.
- Configure site title and base URL in `_config.yml`.

### Deployment
Build the site for production:
```bash
JEKYLL_ENV=production bundle exec jekyll build
```
The generated site will be in the `_site/` directory, ready for deployment (e.g., GitHub Pages, Netlify).

### Docker Usage (optional)
 A `Dockerfile` is provided to build and serve the site in a container:
```bash
docker build -t raf-bristol-pt .
docker run -p 4000:4000 raf-bristol-pt
```

## License
This project is licensed under the MIT License. See the [LICENCE](LICENCE) file for details.

