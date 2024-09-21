# Social Media App

This is a modern social media application built with React, TypeScript, and Vite, using React Router for navigation, Tailwind CSS for styling, shadcn/ui for pre-built components, and designed with the assistance of v0 AI.

## Features

- View posts with titles, descriptions, like counts, and comments
- Like posts
- Add comments to posts
- Load more posts
- Responsive design
- Type-safe development with TypeScript
- Fast development and build times with Vite
- Consistent and accessible UI components with shadcn/ui
- AI-assisted design and development with v0

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js (version 14.0 or later)
- You have a basic understanding of React, React Router, Tailwind CSS, TypeScript, Vite, and shadcn/ui
- You have access to v0 AI for design assistance (optional for further development)

## Installing Social Media App

To install the Social Media App, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/ssmousav1/bettermode-vite.git
   ```

2. Navigate to the project directory:
   ```
   cd social-media-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up shadcn/ui components:
   ```
   npx shadcn-ui@latest init
   ```
   Follow the prompts to configure shadcn/ui for your project.

## Using Social Media App

To use Social Media App, follow these steps:

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your web browser and visit `http://localhost:5173` (Vite's default port)

3. You should see the main posts page. From here, you can:
   - View existing posts
   - Like posts by clicking the thumbs up icon
   - Add comments to posts
   - Load more posts by clicking the "Show More" button at the bottom of the page

## Project Structure

- `src/`
  - `components/` - React components
    - `ui/` - shadcn/ui components
  - `pages/` - Page components for React Router
  - `types/` - TypeScript type definitions
  - `styles/` - Global styles and Tailwind CSS imports
  - `App.tsx` - Main application component
  - `main.tsx` - Entry point of the application
- `public/` - Public assets
- `index.html` - HTML entry point
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `components.json` - shadcn/ui configuration

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run serve` - Serve the production build locally
- `npm run lint` - Lint the project files
- `npm run test` - Run the test suite

## Using v0 for Further Development

This project was designed with the assistance of v0 AI. To continue using v0 for development:

1. Access the v0 platform at https://v0.dev
2. Use the v0 interface to describe new components or modifications
3. Integrate the v0-generated code into your project, ensuring it fits with the existing structure and style

## Contributing to Social Media App

To contribute to Social Media App, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contact

If you want to contact me, you can reach me at `your_email@example.com`.

## License

This project uses the following license: [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [v0](https://v0.dev/)





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
