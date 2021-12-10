# Arcane UI Library for React applications

This component library aims to unify the UI and front-end functionality across the different Arcane React applications.

## Usage

- Include `Poppins` from Google Fonts and Font Awesome in your global `<head>` section.
  ```
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <script src="https://kit.fontawesome.com/8cdc127bcf.js" crossorigin="anonymous"></script>
  ```
- `npm install @arcanetechnology/react-ui-lib --save` - to install the library
- `import '@arcanetechnology/react-ui-lib/lib/global.css';` at application entry point - to include global styles, including the `Poppins` font

### Components

- `import { Button } from '@arcanetechnology/react-ui-lib';` - to import a component in an ESM module.

### Responsive Design

All Arcane applications should use common threshold points for respinsive design.

- `@import '@arcanetechnology/react-ui-lib/lib/vars.scss';` in your SCSS files to use SCSS variables like `$mobile-width` and `$tablet-width`.

# Development

## To run storybook locally:
- `npm run storybook`

The project is set up with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app), which is used when running storybook. Each component uses its own **SCSS modules** and `@testing-library/react` / `jest` unit tests. This makes it possible to develop the component first in your specific Arcane app *(using SCSS modules and @testing-library/react / jest in every Arcane app is strogly recommanded for that reason)* with a rapid pace, and, only when it is production ready and tested, to move it to this library. The move should *iteally* happen transparently without any extra effort.

In order to package the project as a library (ESM & CJS), `rollup.js` is used. `rollup.config.js` defines the configuration that transpiles the `src` folder to the `lib` folder, which is published on NPM.

## Publish a new version

- Make a code change
- commit and push
- `npm run build`
- `npm publish`
- Update application references you are responsible for: `npm install --save @arcanetechnology/react-ui-lib@latest`
