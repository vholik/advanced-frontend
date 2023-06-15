## Tests

The project uses 4 types of tests:

1. Regular unit tests with jest - `npm run test:unit`
2. Component tests with React Testing Library - `npm run test:unit`
3. Screenshot testing with loki `npm run test:ui`
4. End-to-end testing with Cypress `npm run test:e2e`

More about tests - [testing documentation](/docs/tests.md)

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
