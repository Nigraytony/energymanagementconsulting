# Energy Management Consulting Website (EMCx)

Vue 3 + Vite frontend deployed to Azure Static Web Apps, with an Azure Function API for contact form email delivery through SendGrid.

## Local Development

1. Install frontend dependencies:
   - `npm install`
2. Run frontend locally:
   - `npm run dev`
3. Build production frontend:
   - `npm run build`

## API (Azure Functions)

API source lives in `api/`.

Required production environment variables in Azure Static Web Apps:

- `SENDGRID_API_KEY`
- `CONTACT_TO_EMAIL` (set to `[redacted-contact-inbox]`)
- `CONTACT_FROM_EMAIL` (set to `[redacted-sender]`)
- Optional: `CONTACT_CC_EMAIL`
- Optional: `CONTACT_SUBJECT_PREFIX`

## Content Maintenance

- Team, services, portfolio, and memberships are in `src/data/siteContent.js`.
- Add new project cards by appending an item to the `portfolio` array.
- Portfolio images should be placed in `public/img/portfolio`.
