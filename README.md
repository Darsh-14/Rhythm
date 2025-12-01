# Rhythm | The "No-Nonsense" SaaS Landing Page

> ⚡️ Live Demo: **[rhythm-landing.vercel.app](https://rhythm-landing.vercel.app)**

![Rhythm Preview](/public/dash.png)

## 📖 The Backstory
Most landing pages are 90% `npm` packages and 10% actual code. I wanted to flip that ratio.

While building this, I actually ran into some heavy network constraints that stopped me from installing standard libraries like `lucide-react` or `clsx`. Instead of waiting for the wifi to come back, I took it as a challenge: **Could I build a production-grade site with ZERO external UI dependencies?**

The answer is yes. And honestly? It runs faster this way.

## 🛠️ Under the Hood (The Cool Stuff)

### 1. "Vendoring" Over Importing
I didn't want to bloat the bundle with a 5MB icon library just to use 4 icons.
* **What I did:** I built a custom, tree-shakable Icon component (`/ui/icons.tsx`) that houses only the raw SVGs we actually use.
* **The Result:** Zero extra HTTP requests for assets. Instant load times.

### 2. Manual Utility Functions
Who needs `tailwind-merge`?
* **What I did:** I wrote a native TypeScript utility to handle class merging.
* **The Result:** One less dependency to break in the future.

### 3. The "Stranger Things" Theme Engine
I didn't just hardcode colors. I set up the Tailwind config to act as a **theming engine**.
* Right now, it's set to **"Electric Indigo"** (Professional SaaS mode).
* But because the logic is decoupled from the hex codes, you can flip this entire site to a **"Stranger Things" Red/Black aesthetic** or any theme of your choice in about 30 seconds just by touching `tailwind.config.ts`.

## 💻 Tech Stack
* **Next.js 16** (App Router because we like the bleeding edge)
* **Tailwind CSS v4** (Because writing CSS files manually is so 2015)
* **TypeScript** (Strict mode, always)
* **Vercel** (For that sweet, sweet Edge Network deployment)

## 🏃‍♂️ How to Run It
You know the drill. It's a standard Next.js app, just leaner.

```bash
# Clone it
git clone [https://github.com/Darsh-14/Rhythm.git](https://github.com/Darsh-14/Rhythm.git)

# Enter the folder
cd Rhythm

# Install (It's fast, trust me)
npm install

# Run it
npm run dev
