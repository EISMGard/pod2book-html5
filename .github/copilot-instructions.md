# Pod2Book Website - Copilot Instructions

## Git Workflow

**ALWAYS use PRs. Never commit directly to main.**

1. Create a feature branch: `git checkout -b fix/description` or `feat/description`
2. Commit changes to that branch
3. Push branch: `git push origin <branch>`
4. Open PR: `gh pr create --title "..." --body "..."`

## Project
Static HTML5 website for Pod2Book macOS app.
- Hosted on GitHub Pages
- Main repo: https://github.com/EISMGard/pod2book-html5
- Uses Tailwind CSS via CDN
- Gumroad for payments (Stripe backend in progress)
