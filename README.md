# Pratikshay Awadhoot — Portfolio

A responsive, static portfolio built with HTML, CSS, and JavaScript. No package installation or build step is required.

The website includes seven project case studies, category filters, an experience timeline, education and certifications, a downloadable résumé, keyboard-accessible AI and dancing tabs, and email contact. Scroll reveals and transitions respect the visitor's reduced-motion preference.

## Files

- `dist/index.html`: page content, experience, education, and contact form.
- `dist/projects.js`: project titles, descriptions, technologies, and links.
- `dist/app.js`: filters, project dialogs, tabs, navigation, and email composition.
- `dist/styles.css`: responsive styling and motion.
- `dist/assets/Pratikshay-Awadhoot-Resume.pdf`: the supplied résumé.
- `dist/assets/rhythm-and-reason.webp`: original generated decorative artwork.
- `.github/workflows/pages.yml`: the GitHub Pages publishing workflow.

All local asset references use relative paths, so the site works on a user Pages domain or in a repository subdirectory.

## GitHub Pages

1. Create a public GitHub repository named `Patrickshay.github.io` for a personal domain, or choose another repository name for a project URL.
2. Add this source, preserving the `dist` directory and the `.github/workflows/pages.yml` workflow, to the repository's `main` branch.
3. In repository **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source.
4. Run **Deploy portfolio to GitHub Pages** from the Actions tab, or push a change to `main`.
5. Use the URL shown by the successful Pages deployment. The expected personal domain for the named repository is `https://patrickshay.github.io/`; it is not live until deployment succeeds.

The workflow uploads only `dist`. The `.openai` directory identifies the hosted Site and is not part of the GitHub Pages website.

GitHub documentation: [Publishing with GitHub Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Workflow versions follow the [official static-site template](https://github.com/actions/starter-workflows/blob/main/pages/static.yml) retrieved September 8, 2026.

## Contact behavior

**Prepare email** validates the fields and opens an email draft addressed to `pratikshayawadhoot@gmail.com`. **Open in Gmail** prepares the same message in Gmail. The visitor must send it from their email account. The site does not claim a message was delivered, store submissions, or silently send emails.

The contact fields compose a draft locally. There is no `mailto:` form action or native form submission; the explicit **Prepare email** button opens the email app only after validation. This removes the insecure form target while retaining the original contact options. The direct email link and copy-email option give visitors alternatives. For automatic submission without an email app, a separately configured form-delivery provider would be needed. No email credentials belong in this static site's source.

## Content and maintenance

The supplied résumé is the primary source for work history and education. All seven public project repositories are included; the eighth repository, `Patrickshay/Patrickshay`, contains profile configuration rather than a separate project. See `SOURCES.md` for the source links.

The legal chatbot's former Azure demo returned HTTP 502 during the build, so the portfolio links to its source instead. The bookstore's date is omitted because the résumé's June 2022 date is inconsistent with the stated .NET 8 technology. Update the résumé and portfolio together when employment, qualifications, or project details change.

The artwork is an abstract sculpture, not a photograph of Pratikshay. No project screenshots, customer quotations, or project performance measurements were invented.

## Local viewing

Open `dist/index.html` in a modern browser. For local HTTP serving, run `python3 -m http.server 8080 --directory dist` and visit `http://localhost:8080` on your own machine.
