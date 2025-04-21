# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- Dev server: `bundle exec jekyll serve --livereload`
- Production build: `JEKYLL_ENV=production bundle exec jekyll build`
- Docker build: `docker build -t raf-bristol-pt .`
- Docker run: `docker run -p 4000:4000 raf-bristol-pt`

## Technology Stack
- Jekyll static site generator
- Bootstrap 3 for responsive design
- jQuery for DOM manipulation
- Ruby 2.7+ and Bundler required

## Code Style Guidelines
- HTML: Use semantic elements, include appropriate ARIA attributes
- CSS: Follow existing BEM-like naming patterns in _sass/ directory
- JS: Keep scripts minimal, prefer vanilla JS or jQuery methods
- Liquid templates: Use consistent indentation with 2 spaces
- Avoid inline styles and scripts
- Maintain responsive design principles
- Place new components in appropriate _includes/ directory
- Reference existing code patterns before adding new features