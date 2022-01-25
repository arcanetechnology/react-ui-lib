# Arcane UI Library for React applications

https://arcanetechnology.github.io/react-ui-lib/

This component library aims to unify the UI and front-end functionality across the different Arcane React applications.

## Install

- Include `Poppins` from Google Fonts in your global `<head>` section.
  ```
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  ```
- `npm install @arcanetechnology/react-ui-lib --save` - to install the library

## Usage

### Prerequisites

- `import '@arcanetechnology/react-ui-lib/lib/global.css';` at application entry point - to include global styles, including the `Poppins` font.
- Wrap your React application inside the `ArcaneUIProvider` component, providing the `Link` component the application uses. The `Link` component should accept a `href` prop.
  - For **create-react-app** applications, you may provide the react-router `Link` component. Note that the react-router `Link` accept a `to` instead of `href` prop, so we need to handle that in our application.
    ```javascript
    import { ArcaneUIProvider } from '@arcanetechnology/react-ui-lib';
    import { Link, BrowserRouter as Router } from 'react-router-dom';

    export default function App() {
      return (
        <Router>
          <ArcaneUIProvider LinkComponent={RouterLink}>
            <MyApp />
          </ArcaneUIProvider>
        </Router>
      );
    }

    function RouterLink({ href, children, ...props }) {
      return (
        <Link to={href} {...props}>
          {children}
        </Link>
      );
    }
    ```
  - For **next.js** applications, you may provide the next.js `Link` component.
    ```javascript
    import { ArcaneUIProvider } from '@arcanetechnology/react-ui-lib';
    import Link from 'next/link';

    export default function MyApp({ Component, pageProps }) {
      return (
        <ArcaneUIProvider LinkComponent={NextLink}>
          <Component {...pageProps} />)
        </ArcaneUIProvider>
      );
    }

    function NextLink({ href, children, ...props }) {
      return (
        <Link href={href} {...props}>
          <a href={href} {...props}>
            {children}
          </a>
        </Link>
      );
    }
    ```
  - You can also use the basic &lt;a&gt; tag (e.g. for unit tests)
    ```javascript
    <ArcaneUIProvider LinkComponent={({...props}) => (<a {...props} />)}>
      // ...
    </ArcaneUIProvider>
    ```

### Components

- `import { Button } from '@arcanetechnology/react-ui-lib';` - to import a component in an ESM module.

### Responsive Design

All Arcane applications should use common threshold points for respinsive design.

- `@import '@arcanetechnology/react-ui-lib/lib/vars.scss';` in your SCSS files to use SCSS variables like `$mobile-width` and `$tablet-width`.

### Authentication

If an app uses authentication, it should also be wrapped inside `AuthProvider`:

```javascript
<AuthProvider>
  <App />
</AuthProvider>
```

Firebase needs to be initialized: call `initializeApp(firebaseConfig)`.

You can then use the `<SignInSignOutButton>` component to authenticate / log out, and the `useUser` custom hook to access the current user.

## Developing components

### To run storybook locally:
- `npm run storybook`

A component should in most cases consist of:
- a folder inside the `components` folder
- `index.tsx` - the React / Typescript implementation of the component
- `index.module.scss` - SCSS modules
- `index.test.js` - Unit tests
- `index.stories.tsx` - Storybook stories.
- Exports in `components/index.ts` and `index.ts`.

By implementing the same structure for each Arcane app, it is possible (and recommended) as a front-end developer to first implement the component in the specific Arcane app with a rapid pace, and, only when it is production ready and tested, to move it to this library. The move should *ideally* happen transparently without any extra effort.

## For library maintainers

The project is set up with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app), which is used when running storybook. The idea is to duplicate Arcane apps' toolchain while developing components.

In order to package the project as a library (ESM & CJS), `rollup.js` is used. `rollup.config.js` defines the configuration that transpiles the `src` folder to the `lib` folder, which is published on NPM.

## Publish a new version on npmjs

- Make a code change
- commit and push
- `npm run build-lib`
- `npm publish`
- Update application references you are responsible for: `npm install --save @arcanetechnology/react-ui-lib@latest`

## Deploy a new static version of the library

The library is hosted on GitHub Pages (can be hosted on any static server too). To update the static library version:
- `npm run deploy-storybook` - it builds a static assets to the `storybook-static` folder and deploys it to GitHub Pages. It is accessible on https://arcanetechnology.github.io/react-ui-lib/.

## Release = Publish + Deploy

- `npm run release`
