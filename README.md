# Arcane UI Library for React applications

This component library aims to unify the UI and functionality across the different Arcane React applications.

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

## To run storybook locally:
- `npm run storybook`

## Publish a new version

- Make a code change
- commit and push
- `npm run build`
- `npm publish`
- Update application references you are responsible for.
