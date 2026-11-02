# SIVAKASI Crackers — Landing Page

A responsive React + Vite landing page for a cracker shop: hero, categories, a 70-product catalogue with filters, search and "load more", an enquiry list that sends the order to WhatsApp, how-to-order steps, safety tips, testimonials, FAQ and a contact form.

## Run locally
```bash
npm install
npm run dev
```
Open the URL shown in the terminal (usually http://localhost:5173).

## Build
```bash
npm run build
npm run preview
```
The output in `dist/` can be hosted on Netlify, Vercel or any static host.

## Customise
- `src/data/products.js` — product names, categories, images, and prices (set `price` to a number to show it)
- `src/data/content.js` — shop name, phone, WhatsApp number, email, address, hours, copy, FAQs and safety tips
- `src/styles.css` — colours and layout (CSS variables at the top)
- `public/images/` — product photos named by ID

## Before you launch
- Replace the placeholder phone, WhatsApp number, email, and address in `content.js`. The WhatsApp number is used by the enquiry list.
- Replace the placeholder testimonials with real customer reviews.
- Check the claims in the trust strip and FAQ (delivery, returns, quality checks) match your real policies.
- Several photos show third-party brand packaging (for example Ferrero Rocher, Haldiram's, Halonix and POP crackers). Use your own product photos or confirm you have rights to the images before publishing.
- The contact form only logs to the console. Connect it to an email service or backend.
- Check local rules on selling fireworks and online sales before going live.
