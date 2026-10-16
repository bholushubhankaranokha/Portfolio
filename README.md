# 🌸 Bholu Shubhankar Anokha — Personal Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-bholushubhankar.vercel.app-ff2a2a?style=for-the-badge&logo=vercel&logoColor=white)](https://bholushubhankar.vercel.app/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![EmailJS](https://img.shields.io/badge/EmailJS-Integrated-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](https://www.emailjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

> A modern, Japanese landscape-inspired personal portfolio and AI developer showcase built with **React**, **Vite**, **Vanilla CSS**, and **Framer Motion**. Features dynamic dark/light scenery, interactive GitHub contribution snake animation, verified certificates, EmailJS contact system, and an intelligent client-side **Ask AI** assistant.

---

## 🔗 Live Website

Explore the live portfolio at:  
👉 **[https://bholushubhankar.vercel.app/](https://bholushubhankar.vercel.app/)**

---

## ✨ Key Features

### 🌅 Dynamic Japanese Scenic Atmosphere
- **Morning / Evening Themes**: Harmonious dark and light themes toggle between evening and morning Japanese anime landscapes (`footer-evening.png` & `footer-morning.png`), with preferences preserved in `localStorage`.
- **Falling Cherry Blossom Petals**: Subtle, ambient particle layer that respects user accessibility settings (`prefers-reduced-motion`).
- **Glassmorphism Design System**: Tailored HSL colors, frosted glass backdrops, micro-interactions, and neon accent highlights.

### 🚀 Interactive Experience & Sections
- **Hero & About Me**: Bold introduction showcasing credentials, core roles, educational milestones, and quick stats.
- **Interactive Skills Matrix**: Filterable skill cards across **AI/ML**, **Full-Stack**, **IoT & Hardware**, **Data Science**, and **Developer Tools** with brand technology icons.
- **Featured Projects Showcase**: Detailed project cards with category filters (All, AI/ML, Full-Stack, IoT), live preview links, and GitHub source links for flagship works like:
  - **RescueAI**: Autonomous flood victim detection utilizing YOLO11, SAHI, and vision-language reasoning.
  - **LogiEdge**: Full-stack logistics and warehouse route optimization platform.
  - **Bi-LSTM Weather Forecasting**: Deep learning meteorological prediction model.
  - **IoT Smart Aquaculture**: Real-time environmental monitoring telemetry.
- **Interactive GitHub Contribution Snake**: Custom-rendered contribution tracker featuring an animated snake eating contribution squares alongside real repository highlights.
- **Resume Hub**: Instant in-browser PDF preview in a new window or one-click direct download.
- **Certificates & Achievements**: High-resolution certificate gallery (IIT Java Training, HCL GUVI, AI Chatbots) featuring a full-screen image preview modal.
- **Direct EmailJS Contact System**: 90% translucent frosted glass form that validates inputs and securely dispatches inquiries directly to Bholu's inbox using EmailJS with formatted HTML email alerts.
- **Ask AI Companion**: Floating client-side assistant with quick questions (`🚀 Projects`, `⚡ Tech Stack`, `🎓 Education`, `💼 Experience`, `📬 Contact`), offering immediate answers about Bholu's background and achievements with zero external API dependencies.

---

## 🛠️ Tech Stack

| Domain | Technologies & Libraries |
| :--- | :--- |
| **Frontend Core** | React 18, JSX, JavaScript (ES6+) |
| **Build & Tooling** | Vite 6 |
| **Styling** | Vanilla CSS (CSS Variables, Flexbox, CSS Grid, Glassmorphism) |
| **Animations** | Framer Motion, CSS Keyframes |
| **Icons** | Lucide React, Custom Inline SVGs |
| **Email Service** | EmailJS Browser SDK (`@emailjs/browser`) |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```text
Portfolio/
├── public/
│   ├── assets/
│   │   ├── certificates/     # High-res certificate credentials (IIT, GUVI, Chatbot)
│   │   ├── hero-morning.png  # Scenic landscape background (Morning / Light mode)
│   │   ├── footer-evening.png# Scenic landscape background (Evening / Dark mode)
│   │   ├── portrait.webp     # Developer profile portrait
│   │   ├── favicon.png       # Site branding emblem & favicon
│   │   └── Bholu_Shubhankar_Anokha_Resume.pdf
├── src/
│   ├── components/
│   │   ├── CertificateModal.jsx   # Full-screen certificate viewer
│   │   ├── PortfolioAssistant.jsx # "Ask AI" floating chatbot & quick questions
│   │   └── TechIcons.jsx          # SVG brand technology icons
│   ├── data/
│   │   └── portfolio.js           # Skills, projects, education, & AI knowledge base
│   ├── hooks/
│   │   └── useTheme.js            # Theme state management & localStorage sync
│   ├── styles/
│   │   └── global.css             # Unified modern CSS design system & responsive rules
│   ├── App.jsx                    # Primary application layout & section orchestration
│   └── main.jsx                   # Application entry point
├── .env.example                   # Template for EmailJS environment variables
├── .gitignore                     # Git ignore rules (protecting .env & build artifacts)
├── index.html                     # HTML5 shell & SEO meta configuration
├── package.json                   # Dependencies and npm scripts
├── vite.config.js                 # Vite bundler configuration
└── README.md                      # Project documentation
```

---

## 🚀 Getting Started Locally

Follow these steps to set up and run the portfolio on your local machine:

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or `pnpm` / `yarn`)

### 2. Clone the Repository
```bash
git clone https://github.com/bholushubhankaranokha/Portfolio.git
cd Portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

> *Note: If keys are omitted, the contact form gracefully falls back to direct `mailto:` dispatch.*

### 5. Launch the Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

### 6. Build for Production
To test the production bundle:

```bash
npm run build
npm run preview
```

---

## 📬 Contact & Connect

**Bholu Shubhankar Anokha**  
*AI/ML Engineer · Full-Stack Developer · Data Science | IoT*

- 🌐 **Live Website**: [bholushubhankar.vercel.app](https://bholushubhankar.vercel.app/)
- 💻 **GitHub**: [@bholushubhankaranokha](https://github.com/bholushubhankaranokha)
- 💼 **LinkedIn**: [linkedin.com/in/bholushubhankaranokha](https://linkedin.com)
- ✉️ **Email**: [bholushubhankaranokha@gmail.com](mailto:bholushubhankaranokha@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to explore, learn from, and adapt for personal use.
