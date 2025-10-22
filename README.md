# SweetCrumb Bakery Website

A modern, conversion-focused website for **SweetCrumb Bakery**, showcasing handcrafted cakes, pastries, breads, and desserts. Built with Next.js 14, Tailwind CSS, and a lightweight Node-powered API for handling orders, custom inquiries, and newsletter subscriptions.

## ✨ Features

- **Warm, artisanal design** with curated typography, soft color palette, and subtle motion.
- **Responsive layout** optimized for mobile, tablet, and desktop experiences.
- **E-commerce ready** with cart management, customer details capture, and Stripe Checkout integration (optional via environment configuration).
- **Dynamic menu browsing** with category filters, search, and tag refinement.
- **Custom order workflow** supporting detailed inquiries, file uploads, and tasting requests.
- **Testimonials carousel, Instagram feed, and gallery lightbox** to highlight community love.
- **Contact forms & newsletter signup** with serverless persistence using MongoDB (when configured) or local JSON storage fallback.
- **Accessibility-minded** markup, color contrast, and semantic structure.

## 🧱 Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for subtle animations
- [Headless UI](https://headlessui.com/) for accessible dialogs & transitions
- [Stripe](https://stripe.com/) checkout (optional)
- [MongoDB](https://www.mongodb.com/) for data persistence (optional)

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install   # or npm install / yarn install

# Run the development server
pnpm dev

# Build for production
pnpm build
pnpm start
```

Visit `http://localhost:3000` to explore the experience locally.

## 🔐 Environment Variables

Create a `.env.local` file at the project root and populate as needed:

```env
# Optional: Stripe checkout support
STRIPE_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: MongoDB persistence
MONGO_URI=mongodb+srv://...
MONGO_DB=sweetcrumb
```

> Without `STRIPE_SECRET_KEY`, checkout requests are saved and acknowledged, but users are prompted to finalize payment directly with the bakery.

> Without `MONGO_URI`, form submissions fall back to JSON storage under `data/storage/` (ignored by Git) to preserve data during local development.

## 📄 API Routes

| Route | Method | Purpose |
| --- | --- | --- |
| `/api/checkout` | POST | Creates an order record and optional Stripe Checkout session. |
| `/api/custom-orders` | POST | Handles custom cake inquiries with file uploads. |
| `/api/contact` | POST | Receives general contact form submissions. |
| `/api/newsletter` | POST | Subscribes guests to the newsletter. |
| `/api/orders` | GET | Lists captured orders (for future admin tooling). |

## 🗂️ Project Structure

```
app/
  api/              // Serverless API handlers
  about/            // About page
  blog/             // Bakery journal
  contact/          // Visit & contact page
  custom-orders/    // Custom order workflow
  gallery/          // Image gallery with lightbox
  menu/             // Dynamic menu browsing
  thank-you/        // Post-checkout confirmation
components/
  context/          // Cart state management
  home/             // Homepage sections
  layout/           // Navbar, footer, providers, cart drawer
  sections/         // Reusable page headers
  ui/               // UI primitives (product card, controls)
data/               // Structured content (menu, testimonials, etc.)
lib/                // Fonts & persistence helpers
public/             // Static assets & uploads
```

## 🧩 Updating Content

- **Menu items** – edit `data/menu.ts` to adjust categories, pricing, or specials.
- **Testimonials** – update `data/testimonials.ts` with new stories and headshots.
- **Gallery** – manage feature imagery via `data/gallery.ts`.
- **Blog** – add entries in `data/blogPosts.ts`.
- **Team members** – revise `data/team.ts` to showcase the crew.

## 🧾 Order Management Notes

- Orders, contact requests, custom inquiries, and newsletter signups are saved via `lib/persistence.ts`.
- When `MONGO_URI` is present, data is stored in MongoDB. Otherwise, submissions are written to JSON files under `data/storage/` for quick prototyping.
- Uploaded design references are saved in `public/uploads/` and ignored by Git.

## 📣 Accessibility & Performance

- Semantic HTML, descriptive alt text, and ARIA labels enhance accessibility.
- Optimized remote imagery via Next Image for fast loading.
- Responsive typography and layout ensure readability across devices.

## 📚 Future Enhancements

- Loyalty program dashboard for repeat guests.
- Real-time inventory of “Today’s Specials.”
- Chatbot concierge for quick ordering assistance.
- Integration with external review platforms (Google / Yelp).

Enjoy baking delicious digital experiences with SweetCrumb Bakery! 🍰
