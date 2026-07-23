# Mac Energy — Networking Team Website

A professional, animated website for **Mac Energy**, a networking & IT systems team,
built with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, **Tailwind CSS**,
and **Framer Motion**.

## What's inside

- Animated hero with a live-style network topology diagram (custom SVG)
- Scrolling ticker of real networking terms (TCP/IP, DNS, VLAN, etc.)
- Services grid (Network Infrastructure, Computer Lab Setup, Hardware Management, API Integration, Cabling, Wireless, Security, Monitoring)
- "What we work with" hardware showcase (routers, switches, server racks, laptops, monitors, cabling) — as custom vector icons in your brand colors
- Computer Lab section with an animated seating/network grid
- 4-step process section (Assess → Design → Deploy → Monitor)
- Team section
- Contact section with your phone number, click-to-call, and a contact form
- Fully responsive, dark "network ops" visual theme, keyboard-accessible nav

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

## Customizing

- **Phone number / contact details:** edit `components/Navbar.tsx` (`PHONE_DISPLAY`, `PHONE_TEL`) and `components/Contact.tsx` / `components/Footer.tsx`.
- **Team members:** edit the `team` array in `components/Team.tsx`.
- **Services & copy:** edit `components/Services.tsx`, `components/Infrastructure.tsx`, `components/Lab.tsx`, `components/Process.tsx`.
- **Colors/fonts:** edit `tailwind.config.ts` (colors) and `app/layout.tsx` (fonts — currently Space Grotesk, Inter, JetBrains Mono from Google Fonts).
- **Real photos:** the hardware visuals are currently custom vector icons (no stock photos used, so nothing to license). To swap in real photos of your team's routers, switches, or lab, drop images into `public/images/` and replace the relevant `<Icon />` components with `<Image src="/images/your-photo.jpg" ... />` from `next/image`.

## Notes

- This project needs internet access on first build/dev run to fetch Google Fonts (`Space Grotesk`, `Inter`, `JetBrains Mono`). If you're building somewhere fully offline, swap `next/font/google` in `app/layout.tsx` for local font files or system fonts.
- The contact form is currently front-end only (no backend). Wire the `onSubmit` in `components/Contact.tsx` to your email service or API of choice (e.g. Formspree, Resend, or a custom API route) when you're ready to receive submissions.
