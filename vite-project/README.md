# React Task Manager + API Integration

A responsive React application built with Vite and Tailwind CSS demonstrating component architecture, state management with hooks, custom hooks, context, and external API integration (JSONPlaceholder). This project was created as a Week 3 assignment for PLP.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Folder Structure](#folder-structure)
5. [Getting Started](#getting-started)

   * [Prerequisites](#prerequisites)
   * [Installation](#installation)
   * [Running the App](#running-the-app)
6. [Available Scripts](#available-scripts)
7. [Components & Pages](#components--pages)
8. [State Management & Hooks](#state-management--hooks)
9. [API Integration](#api-integration)
10. [Styling & Theming](#styling--theming)
11. [Testing & Debugging Tips](#testing--debugging-tips)
12. [Deployment](#deployment)
13. [Project Checklist for Submission](#project-checklist-for-submission)
14. [Known Issues & Notes](#known-issues--notes)
15. [Credits & Resources](#credits--resources)

---

## Project Overview

This project implements a Task Manager UI where users can add, complete, filter, and delete tasks (persisted to `localStorage`). It also integrates with the JSONPlaceholder API to fetch and display a list of users. The app emphasizes modular component design, clean folder organization, and responsive UI using Tailwind CSS.

## Features

* Add, delete, and filter tasks (All / Active / Completed)
* Task persistence using `localStorage`
* Component-driven architecture (`Button`, `Card`, `Navbar`, `Footer`, `TaskManager`, `UsersList`)
* Routing with React Router (Home, Tasks, About pages)
* API integration (fetch users from JSONPlaceholder) with loading and error states
* Responsive design with Tailwind CSS
* PropTypes for component prop validation

## Tech Stack

* React (via Vite)
* Vite (dev tooling)
* Tailwind CSS
* React Router
* PropTypes
* JSONPlaceholder (fake REST API for demo)

## Folder Structure

```
src/
├── api/                # API helper functions (e.g. usersApi.js)
├── components/         # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── TaskManager.jsx
│   └── UsersList.jsx
├── context/            # React Context providers (e.g. ThemeContext.jsx)
├── hooks/              # Custom hooks (e.g. useLocalStorage.js)
├── pages/              # Route pages (Home, Tasks, About)
├── utils/              # Utility functions
├── App.jsx             # Main app component with routes
├── main.jsx            # App entry (wrap with BrowserRouter)
└── index.css / App.css # Tailwind + app specific CSS
```

## Getting Started

### Prerequisites

* Node.js (v18 or later recommended)
* npm (comes with Node) or yarn
* Recommended editor: Visual Studio Code

### Installation

1. Clone your GitHub Classroom repository (if not already done):

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

2. Install dependencies:

```bash
npm install
```

3. If `prop-types` is required and not installed:

```bash
npm install prop-types
```

### Running the App (development)

```bash
npm run dev
```

Open the local dev URL shown by Vite (usually `http://localhost:5173`).

## Available Scripts

* `npm run dev` - start Vite dev server
* `npm run build` - build production bundle
* `npm run preview` - preview production build locally

## Components & Pages

**Components**

* `Button.jsx` — Reusable button with variants and sizes (uses PropTypes)
* `Card.jsx` — Small boxed layout wrapper for content
* `Navbar.jsx` — Top navigation links (Home, Tasks, About)
* `Footer.jsx` — Footer with copyright text
* `TaskManager.jsx` — Task app (add, toggle, delete, filter, localStorage)
* `UsersList.jsx` — Fetches users from JSONPlaceholder and displays them

**Pages**

* `Home.jsx` — Landing page / brief project description
* `Tasks.jsx` — Page embedding the `TaskManager` component
* `About.jsx` — Information about the project

## State Management & Hooks

* `useState` — local component state (inputs, filters, tasks)
* `useEffect` — side effects (loading tasks from `localStorage`, API fetch)
* Custom Hook Example: `useLocalStorage` (or an inline hook in `TaskManager.jsx`) — synchronizes state to `localStorage`
* `useContext` (optional) — used for theme management (light/dark) if implemented

## API Integration

* API helper located in `src/api/usersApi.js` (or `src/api/users.js`) that wraps `fetch` for JSONPlaceholder:

  * Endpoint: `https://jsonplaceholder.typicode.com/users`
* `UsersList.jsx` handles loading & error states and renders a responsive grid/list of users.

## Styling & Theming

* Tailwind CSS is used for layout, spacing, typography, and colors.
* Dark mode is supported if configured in `tailwind.config.js` (`darkMode: 'class'` or `media`).
* Use of utility-first classes keeps markup concise and responsive.

## Testing & Debugging Tips

* If you see errors about missing imports (e.g., `App.css` or `UsersList.jsx`), confirm the file exists and the import path is correct.
* If Vite shows an overlay error, fix the code and save; Vite's HMR will update automatically.
* If PropTypes import fails, run `npm install prop-types`.

## Deployment

You can deploy this project to Vercel, Netlify, or GitHub Pages.

**Vercel** (recommended)

1. Push your repo to GitHub.
2. Import the repo on Vercel and follow the prompts.
3. Build command: `npm run build` (Vite auto-detects)
4. Output directory: `dist`

**Netlify**

1. Connect your GitHub repo to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`

## Project Checklist for Submission

* [ ] All required components implemented
* [ ] TaskManager features (add, delete, filter, toggle) work
* [ ] Local persistence (localStorage) implemented
* [ ] API integration with loading and error handling
* [ ] Responsive layout for mobile, tablet, desktop
* [ ] README.md with instructions and screenshots
* [ ] Deployed site URL added to README
* [ ] Frequent commits showing progress

## Known Issues & Notes

* Ensure file names and import paths match exactly (case-sensitive on some systems)
* Tailwind v4 differences: If using Tailwind v4 features, check compatibility; this project uses v3-compatible utility classes.

## Credits & Resources

* React: [https://react.dev/](https://react.dev/)
* Vite: [https://vitejs.dev/](https://vitejs.dev/)
* Tailwind CSS: [https://tailwindcss.com/](https://tailwindcss.com/)
* React Router: [https://reactrouter.com/](https://reactrouter.com/)
* JSONPlaceholder: [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

---
