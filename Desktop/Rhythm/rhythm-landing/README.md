# Rhythm Landing Page

A responsive SaaS landing page built with Next.js and Tailwind CSS.

## 📝 Project Overview
This project was built to be extremely lightweight. I avoided using heavy UI component libraries or external icon packages to keep the bundle size minimal.

**Key Technical Decisions:**
* **Zero External Dependencies:** Apart from the core Next.js/React framework, I didn't install any third-party UI packages.
* **Custom Icon System:** Instead of importing the entire `lucide-react` library, I extracted only the SVGs I needed into a local component.
* **Manual Utility Layer:** I wrote a simple native function to handle Tailwind class merging, removing the need for `clsx` or `tailwind-merge`.

## 🛠 Tech Stack
* Next.js 16
* Tailwind CSS v4
* TypeScript

## 🚀 Live Demo
[https://rhythm-landing.vercel.app](https://rhythm-landing.vercel.app)