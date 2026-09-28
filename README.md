# Aurex Global Technologies

Corporate website for **Aurex Global Technologies** — a telecommunication and
technology solutions provider. Built as a fast, responsive single-page
application with smooth in-page navigation.

## Tech stack

- **React 18** (JavaScript, no Next.js)
- **Vite** (dev server & build)
- **Tailwind CSS** (design system + responsive layout)
- **React Icons** (lightweight icon set)

## Brand system

Red + Charcoal + White, driven by the Aurex Global logo.

| Token | Value |
| ----- | ----- |
| Primary Red | `#E50914` |
| Dark Red | `#B30000` |
| Charcoal | `#1F1F1F` |
| Dark Black | `#111111` |
| Light Background | `#F7F7F7` |
| Border Gray | `#E5E5E5` |
| Text Gray | `#555555` |

Fonts: **Poppins** (headings) + **Inter** (body).

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

### Other scripts

```bash
npm run build     # production build to /dist
npm run preview   # preview the production build
npm run lint      # eslint
```

## Project structure

```
src/
  components/       Reusable UI (Navbar, Footer, Logo, Button,
                    SectionTitle, ServiceCard, FeatureCard,
                    ContactForm, Reveal, NetworkGraphic)
  sections/         Page sections (Hero, About, Services,
                    TelecomSolutions, WhyChooseUs, CTA, Contact)
  assets/           Brand logo
  data.js           Company info, nav links, services content
  index.css         Tailwind layers + base styles
  App.jsx           Section composition
  main.jsx          App entry
public/             Static assets (logo, favicon)
```

## Sections

Home (Hero) · About · Services · Built for Modern Communication ·
Why Choose Us · Call-to-action · Contact.

## Contact form

The form runs full client-side validation and shows a success confirmation on
submit. **No email/backend API is wired up yet** — it does not actually send
mail. It is structured so a future integration only needs to POST the collected
`values` object in `src/components/ContactForm.jsx`.

## Company

- **Aurex Global Technologies**
- Company number: 9211308896
- Email: aurexglobaltechnologies@gmail.com

© 2026 Aurex Global Technologies. All rights reserved.
