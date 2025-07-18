# Location Intelligence Dashboard

This project is a React + Tailwind CSS-based dashboard that replicates the "Location Intelligence" screen from an existing Laravel admin panel. The dashboard is built using components from the Ecme React Template.

##  Tech Stack

- React
- Tailwind CSS
- React Icons
- Vite / Webpack
- Classnames (`clsx`)

## 📁 Project Structure
src/
├── auth/                    # Auth context/provider
├── components/
│   ├── layouts/             # Layout component with Sidebar & Header
│   └── template/            # UI templates like Logo, SideNav
├── configs/                 # Global configs (e.g. app.config.js)
├── store/                   # Zustand-based theme state
├── views/
│   └── Insights/
│       └── CustomerLocation.jsx  # Main Location Intelligence screen
├── App.jsx                  # Main entry point
└── index.jsx                # ReactDOM render entry



## Getting Started

1. **Install dependencies:**

```bash
npm install

Run the development server:
npm run dev

Build for production:
npm run build
