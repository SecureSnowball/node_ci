## NodeJS Project
- Uses ESLint for linting
- Husky for pre commit
- Mocha, Chai and supertest for testing
- Github actions for testing using CI

## How to setup in new project
- ESLint: `npx eslint --init`
- Husky: `npm i husky -D`, `npx husky install` and `npx husky add .husky/pre-commit "npm test"`