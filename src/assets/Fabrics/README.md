# 🪟 KK Curtain Design

High-quality custom curtain design and delivery service based in South Africa. We specialize in tailor-made curtains crafted to each customer's exact specifications, with nationwide delivery and B2B expansion plans.

---

## 💼 What We Do

KK Curtain Design provides professional, made-to-order curtains based on client measurements and preferences. All curtains are handcrafted in-house with customizable finishes such as lace or plain styles. Visual fabric samples are also available to educate customers on materials and linings.

---

## 🛠 Problems We Solve

- Difficulty finding custom-size curtains
- No streamlined, delivery-friendly curtain services in South Africa
- Slow or unclear communication when placing orders
- Lack of access to wholesale curtains for businesses

---

## 🎯 Target Audience

- South African homeowners needing tailor-made curtains
- Interior decorators and designers
- B2B clients and retailers needing bulk curtain supply
- Clients seeking easy, quick WhatsApp-based quotes

---

## ✨ Features

- 🖼️ Gallery showcasing past curtain projects
- 🧵 Fabric sample viewer (educational, with stock status)
- 📏 Online quote form with visual measurement guidance
- 📩 Optional email input for clients (clearly marked)
- 🧮 Specify number of curtains needed per request
- ✅ Manual quote approval & payment via proof upload
- 📄 Quotes sent via WhatsApp are saved in admin and downloadable as PDFs
- 🛠️ Admin portal (with user roles & main admin access control)
- 🔒 Secure admin access, no user logins needed
- 🟢 WhatsApp integration for client communication
- ⭐ Customer testimonials

---

## 🧪 Tech Stack

- Vite + React
- TypeScript
- Tailwind CSS
- [shadcn/ui](https://ui.shadcn.com) component library
- Firebase (Auth, Firestore, Storage)
- WhatsApp Business API or deep link integration

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/kk-curtain-design.git
cd kk-curtain-design
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment file

```bash
cp .env.example .env
```

### 4. Add Firebase credentials to `.env`

Get these from your [Firebase Console > Project Settings > General > Your Apps](https://console.firebase.google.com/).

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MEASUREMENT_ID=...
```

### 5. Run development server

```bash
npm run dev
```

---

## 🛡 Environment & Security Notes

- ✅ Firebase credentials are stored as environment variables (never in source)
- 🔐 `.env` is gitignored and safe for version control
- 🌍 Variables must begin with `VITE_` to be exposed to the client (per Vite)
- 📦 In production, set these in your host (e.g. Vercel, Netlify)

---

## 📌 Additional Notes

- All quotes are manually reviewed before approval and payment
- Admin dashboard does not require client login but uses secure access methods
- Delivery takes ~2 days for bulk orders (estimate based on size/location)

---

> Designed with care by **KK Curtain Design** — Curtains with class, made to measure.