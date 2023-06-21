# Project Setup

npm install - install dependencies
npm run start:dev or npm run start:dev:vite - start the server + frontend project in dev mode

---

## Scripts

-   `npm run start` - Start the frontend project on webpack dev server
-   `npm run start:vite` - Start the frontend project on vite
-   `npm run start:dev` - Start the frontend project on webpack dev server + backend
-   `npm run start:dev:vite` - Start the frontend project on vite + backend
-   `npm run start:dev:server` - Start the backend server
-   `npm run build:prod` - Build in production mode
-   `npm run build:dev` - Build in development mode (not minified)
-   `npm run lint:ts` - Check ts files with the linter
-   `npm run lint:ts:fix` - Fix ts files with the linter
-   `npm run lint:scss` - Check scss style files with the linter
-   `npm run lint:scss:fix` - Fix scss style files with the linter
-   `npm run test:unit` - Run unit tests with jest
-   `npm run test:ui` - Run screenshot tests with loki
-   `npm run test:ui:ok` - Confirm new screenshots
-   `npm run test:ui:ci` - Run screenshot tests in CI
-   `npm run test:ui:report` - Generate a complete report for screenshot tests
-   `npm run test:ui:json` - Generate a JSON report for screenshot tests
-   `npm run test:ui:html` - Generate an HTML report for screenshot tests
-   `npm run storybook` - Run Storybook
-   `npm run storybook:build` - Build Storybook
-   `npm run prepare` - Pre-commit hooks
-   `npm run generate:slice` - Script for generating FSD slices

---

## Project Architecture

The project is developed according to the Feature Sliced Design methodology.

Documentation link - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Working with feature flags

Allowed to use feature flags on with helpers, helper has options:

-   name: feature name
-   on: function that returs after enabling feature
-   off: function that returs after disabling feature

For automated delition features there is a script remove-feature that has 2 props

1. Feature name
2. State (on/off)

---

## Working with Translations

The project uses the i18next library for handling translations.
Translation files are stored in public/locales.

To work comfortably, we recommend installing the plugin for WebStorm/VSCode.

i18next documentation - [https://react.i18next.com/](https://react.i18next.com/)

---

## Tests

The project uses 4 types of tests:

1. Regular unit tests with jest - `npm run test:unit`
2. Component tests with React Testing Library - `npm run test:unit`
3. Screenshot testing with loki `npm run test:ui`
4. End-to-end testing with Cypress `npm run test:e2e`

More about tests - [testing documentation](/docs/tests.md)

---

## Linting

The project uses eslint for checking TypeScript code and stylelint for checking style files.

Additionally, to enforce strict control over key architectural principles, a custom eslint plugin _eslint-plugin-viktors-plugin_ is used, which includes 3 rules:

1. path-checker - prohibits the use of absolute imports within the same module
2. layer-imports - checks the correct usage of layers from the perspective of FSD (e.g., widgets cannot be used in features and entities)
3. public-api-imports - allows imports from other modules only from the public API. It has auto fix.

##### Running linters

-   `npm run lint:ts` - Check ts files with the linter
-   `npm run lint:ts:fix` - Fix ts files with the linter
-   `npm run lint:scss` - Check scss style files with the linter
-   `npm run lint:scss:fix` - Fix scss style files with the linter

---

## Git Hooks

Git hooks are set up for the project to run linters before commit.

To add git hooks to your project, run `npm run prepare`.

---

## Storybook

The project uses Storybook for component development and documentation.

-   `npm run storybook` - Run Storybook
-   `npm run storybook:build` - Build Storybook

More about Storybook - [https://storybook.js.org/](https://storybook.js.org/)
