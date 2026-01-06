# AI Coding Instructions for Siyabonga's Portfolio

## Project Overview

This is a **static portfolio website** for Siyabonga Khanyile, a full-stack developer. The site is built with vanilla HTML, CSS, and JavaScript, using Bootstrap 5 for UI components and responsive layout. It's hosted on GitHub Pages and showcases projects, resume, and contact information.

## Architecture & File Structure

### Page Structure

- **4 main HTML pages**: `index.html` (home), `resume.html`, `projects.html`, `contact.html`
- All pages share **identical navigation bar** structure (`.navbar` with links to all 4 pages)
- Each page links to the same stylesheet: `css/styles.css`
- Favicon: `assets/profile_img.png` (used consistently across all pages)

### Styling Convention

- **Bootstrap 5.2.3** is the primary CSS framework (loaded via CDN)
- Custom styles in `/css/styles.css` (12,000+ lines, includes Bootstrap core + custom theme)
- Primary color: `#1e30f3` (blue), Secondary: `#e21e80` (pink)
- Gradient class: `.text-gradient` (primary-to-secondary gradient on headings)
- Font: **Plus Jakarta Sans** (Google Fonts, weights 100-900)
- Icons: **Bootstrap Icons 1.8.1** (CDN)

### Asset Organization

- **Images** live directly in `/assets/` (not in subdirectories)
- Project screenshots: `CardGame.png`, `convertor-cli.png`, `links-vault.png`, etc.
- Profile image: `assets/profile_img.png`
- Video: `assets/Siyabonga's Pitch - Made with Clipchamp.mp4` (embedded in [index.html](index.html#L87-L91))

## Key Patterns & Conventions

### Navigation Bar (Replicated Across All Pages)

```html
<nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
  <div class="container px-5">
    <a class="navbar-brand" href="index.html">
      <span class="fw-bolder text-primary">Siyabonga Khanyile</span>
    </a>
    <!-- Navigation links: Home, Resume, Projects, Contact -->
  </div>
</nav>
```

**Important**: When editing navigation, update **all 4 HTML files** to maintain consistency.

### Project Cards Pattern ([projects.html](projects.html))

Projects use a **card grid layout** (`.projects-grid` in CSS) with this structure:

```html
<div class="card project-card overflow-hidden shadow rounded-4 border-0">
  <img class="project-image" src="assets/[PROJECT_IMAGE].png" alt="..." />
  <div class="card-body p-0">
    <div class="project-content">
      <h2 class="fw-bolder">[Project Name]</h2>
      <p>[Description]</p>
      <pre><strong>Tech stack:</strong>
[Technologies]

<strong>Github:</strong> <a href="..." target="_blank">View Project</a></pre>
    </div>
  </div>
</div>
```

**Pattern**: Tech stack and links are inside a `<pre>` tag for formatting preservation.

### Contact Form ([contact.html](contact.html) + [js/scripts.js](js/scripts.js))

- Form uses **EmailJS** for submissions (Service ID: `service_hw57qkd`, Template: `template_057amt8`)
- **Client-side validation**: All fields required, real-time validation feedback (`.is-valid`/`.is-invalid` classes)
- **Submit button** is disabled until all fields are valid (see [scripts.js](js/scripts.js#L6-L22))
- Spinner animation shows during submission ([scripts.js](js/scripts.js#L35-L38))
- Success/error messages toggle via `.d-none` class

## Developer Workflows

### Local Development

1. **No build step required** - open `index.html` directly in browser
2. For live reload: Use VS Code Live Server extension or `python -m http.server`
3. **Testing**: Manually test all 4 pages and navigation between them

### Adding a New Project

1. Create project screenshot and save to `/assets/[project-name].png`
2. Add new card in [projects.html](projects.html) following the project card pattern above
3. Include: title, description, tech stack (inside `<pre>`), GitHub link, and optional live demo link

### Styling Changes

- **Global styles**: Edit `/css/styles.css` (affects all pages)
- **Bootstrap overrides**: Look for CSS custom properties in `:root` (lines 13-50 in styles.css)
- **Custom gradients**: `.text-gradient` and `.bg-gradient-primary-to-secondary` are key classes

### Contact Form Configuration

- EmailJS credentials are in [js/scripts.js](js/scripts.js#L44-L47)
- To test: Fill form, check browser console for EmailJS response
- Form fields: name, email, phone, message (all required)

## External Dependencies

- **Bootstrap 5.2.3** (CDN) - UI framework
- **Bootstrap Icons 1.8.1** (CDN) - Icon font
- **EmailJS** (CDN) - Contact form submission (loaded in [contact.html](contact.html))
- **Google Fonts** (CDN) - Plus Jakarta Sans

## Important Notes

- **No build system** or package.json - this is a static site
- **No JavaScript framework** - uses vanilla JS only
- **Resume download link** ([resume.html](resume.html#L50)) points to Google Drive
- **Social links** ([index.html](index.html#L89-L90)): LinkedIn and GitHub in footer
- **GitHub Pages hosting** - changes to `main` branch auto-deploy

## Common Tasks

### Update Resume/Bio

- Bio text: [index.html](index.html#L71-L79) (About Me section)
- Resume content: [resume.html](resume.html#L44-L150) (Experience and Education sections)

### Add Navigation Link

1. Edit navigation in all 4 HTML files (`index.html`, `resume.html`, `projects.html`, `contact.html`)
2. Add new `<li class="nav-item"><a class="nav-link" href="...">Link Text</a></li>`

### Change Color Scheme

- Edit CSS variables in [css/styles.css](css/styles.css#L13-L50) (`:root` selector)
- Primary color: `--bs-primary`, Secondary: `--bs-secondary`
