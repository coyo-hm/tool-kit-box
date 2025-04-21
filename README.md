# [Tool Kit Box](https://tool-kit-box.vercel.app/en)

A curated collection of reusable components and utilities built with Next.js and TypeScript, designed to accelerate web
development workflows.

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![vanilla-extract](https://img.shields.io/badge/vanilla--extract-%23DDC500?style=flat&logo=css3&logoColor=black)
![Zustand](https://img.shields.io/badge/Zustand-%23FFDD57?style=flat&logo=react&logoColor=black)

---

## 🚀 Overview

**Tool Kit Box** serves as a centralized repository for modular components, hooks, and utilities commonly used across
various projects. By consolidating these tools, developers can maintain consistency and improve productivity in their
development processes.

---

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [vanilla-extract](https://vanilla-extract.style/) – zero-runtime, type-safe CSS
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) – minimal, scalable global state
- **Package Manager:** [Yarn](https://yarnpkg.com/)
- **Linting & Formatting:** ESLint, Prettier
- **Commit Hooks:** Husky

---

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/coyo-hm/tool-kit-box.git
   cd tool-kit-box
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

## 📁 Project Structure

```plaintext
tool-kit-box/
├── public/ # Static assets
├── src/
│ ├── app/ # Next.js App Router (pages, layouts, etc.)
│ ├── components/ # Reusable UI components
│ ├── constants/ # Reusable constants
│ ├── hooks/ # Custom React hooks
│ ├── i18n/ # Next-intl config
│ ├── providers/ # Next-intl config
│ ├── stores/ # Zustand global state stores
│ ├── utils/ # Utility functions
│ └── styles/ # Global styles & vanilla-extract config
├── eslint.config.mjs
├── tsconfig.json
└── next.config.ts

```

## 🌐 Live Demo

Check out the live application at: [tool-kit-box.vercel.app](https://tool-kit-box.vercel.app/en)

## 📬 Contributing

Feel free to fork the repo and submit pull requests for any improvements or new tools/components you'd like to add.

If you encounter any bugs, have feature requests, or want to discuss improvements, **please open an issue** — your feedback is always welcome!
