# The Rodger Tax™ — Sterling Enterprises

A fictional, black-and-gold TWB wrestling roleplay tax portal, designed for **GitHub Pages**.

## Features

- Search, filter and sort **100** Rodger Tax offences.
- Add multiple offences and quantities to personalised superstar invoices.
- Copy invoices for Discord or use **Print / Save PDF** for printable invoices.
- Fictional Rodger Coin dashboard and a satirical Counter-Tax fraud bulletin.
- Mobile-friendly interface, with no account, backend or external dependencies.

## Publish on GitHub Pages

1. Create a public repository, for example `rodger-tax`.
2. Upload `index.html` and `app.js` **into the root** of the repository (not inside a nested `rodger-tax` directory). Include this `README.md` if desired.
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, then **main**, then **/ (root)**, and save.
5. Visit `https://YOUR-USERNAME.github.io/rodger-tax/` after GitHub finishes publishing.

For other repo names the last path segment will match that repository name.

## Modify taxes

Open `app.js` and edit the `raw` list. Each entry is `Tax Name|amount|Description`, one offence per line. Entries 1–40, 41–60, 61–80, 81–90, and 91–100 are classified into the five categories automatically. If you add more offences or want to reorder categories, adjust the category assignment in `app.js`.

## Notes

- The invoice draft is saved in the current browser's `localStorage`. It is **not shared between visitors or devices**.
- The simulated Rodger Coin chart never connects to real financial markets.
- No real payments, cryptocurrency transfers, account registration or personal financial data are collected.
- This is fictional TWB satire, not a government, banking or tax service.
- A cross-user leaderboard or secured admin dashboard would require a backend and authentication beyond static GitHub Pages.
