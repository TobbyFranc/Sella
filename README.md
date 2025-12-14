# 🛒 Sella Ecommerce Website

A modern, responsive ecommerce platform built with **React**, **TailwindCSS**, and **Vite**.  
Sella Ecommerce demonstrates a complete shopping flow — from browsing products to checkout — with a clean UI, smooth UX, and scalable architecture.

---

## 🚀 Features

- 📦 **Product Catalog** — Browse products with images, descriptions, and categories.
- 🔍 **Filtering & Sorting** — Filter by category, search by keyword, and sort by price or newest arrivals.
- 🛒 **Shopping Cart** — Add, remove, and update items with persistent state (local storage).
- 💳 **Checkout Flow** — Simulated payment integration for realistic transactions.
- 👤 **User Authentication** — Login, signup, and profile management.
- 📂 **Category Browsing** — Navigate products by category with dynamic routes.
- 📬 **Contact Page** — Integrated with **EmailJS** for direct communication.
- 📱 **Responsive Design** — Optimized for mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS, Vite
- **State Management:** Context API (or Redux Toolkit)
- **API:** Fake Store API (mock data)
- **Payments:** Stripe (test mode simulation)
- **Email Integration:** EmailJS
- **Deployment:** Vercel

---

## 📂 Project Structure

src/ ├── components/ # Reusable UI components (Navbar, Footer, ProductCard, etc.) 
    ├── context/ # CartContext, AuthContext
    ├── pages/ # Page views (Home, Products, Cart, Checkout, Contact, etc.)
    ├── data/ # JSON data (projects, mock products)
    ├── App.jsx # Main app with routes
    └── index.jsx # Entry point


---

## ⚙️ Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/sella-ecommerce.git
   cd sella-ecommerce
