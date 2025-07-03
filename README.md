Dylan Warrener • Software Developer Portfolio
Welcome! This repository hosts my personal portfolio website, built with Nuxt 3, Vue 3, Vuetify 3, Tailwind CSS, TypeScript, Pinia, and more. Its goal is to showcase my projects, skills, and experience as a full-stack developer.

📦 Scripts
Use these npm scripts to develop, build, generate, and maintain the site:

Script Description
npm run dev Launches the Nuxt development server with hot-reload (local preview at http://localhost:3000).
npm run build Compiles a production-ready build for server-side rendering or static generation.
npm run generate Generates fully static HTML files (ideal for GitHub Pages or any static-hosting environment).
npm run preview Starts a local preview of your built (or generated) site to validate production output.
npm run postinstall Automatically runs nuxt prepare after installing dependencies, ensuring Nuxt’s type metadata is up to date.
npm run lint Runs ESLint on all .js, .ts, and .vue files to catch syntax errors, best-practice violations, and style issues.
npm run format Runs Prettier to format JavaScript, TypeScript, Vue, JSON, CSS, and other supported files.

🚀 Getting Started
Clone the repo

bash
Copy
Edit
git clone https://github.com/DylanWarrener/dylan-warrener.github.io.git
cd dylan-warrener.github.io
Install dependencies

bash
Copy
Edit
npm install
Run in development mode

bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser to see the site.

Build for production (SSR or generate static)

For server-side rendering:

bash
Copy
Edit
npm run build
npm run preview
For fully static output:

bash
Copy
Edit
npm run generate
The static files will be in the .output/public folder, ready for deployment.

🛠️ Tech Stack
Framework: Nuxt 3 / Vue 3

UI Components: Vuetify 3 (Material Design)

CSS: Tailwind CSS, Sass, PostCSS, Autoprefixer

State Management: Pinia

Routing: Vue Router 4 (powered by Nuxt’s file-based router)

Language: TypeScript

Linting & Formatting: ESLint (Vue & Nuxt plugins) + Prettier

📄 License
This project is open-source and available under the MIT License.

Built with ❤️ by Dylan Warrener
dylan-warrener.github.io
GitHub • LinkedIn • Email

To enable the **CV** download link in the navigation bar, place your CV PDF at
`public/CV.pdf` in the project root. The file will be served statically and
downloaded when visitors click the CV button.

Feel free to explore the code, submit feedback, or reach out if you have any questions or collaboration ideas!
