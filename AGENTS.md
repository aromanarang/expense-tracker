
# AGENTS.md

## Project Overview

Project: Expense Tracker

Technology:
- React
- Vite
- JavaScript
- CSS
- Vitest
- React Testing Library
- Cypress

## Folder Structure

src/
  components/
    ExpenseForm.jsx
    ExpenseList.jsx
    ExpenseItem.jsx
    CategoryFilter.jsx
  utils/
    expenseUtils.js
  App.jsx
  App.css
  index.css
  main.jsx

src/__tests__/
  expenseUtils.test.js
  ExpenseForm.test.jsx
  App.test.jsx

cypress/
  e2e/
    expenses.cy.js

## Development Commands

Install dependencies:
npm install

Start development server:
npm run dev

Build:
npm run build

Lint:
npm run lint

Run unit tests:
npx vitest run

Run coverage:
npx vitest run --coverage

Open Cypress:
npm run cy:open

Run Cypress:
npm run cy:run

## Coding Conventions

1. Use React functional components.
2. One component per file.
3. Keep application state in App.jsx.
4. Pass data and event handlers through props.
5. Use meaningful variable and function names.
6. Keep reusable business logic inside utility files.
7. Use data-cy attributes for Cypress selectors.
8. Write readable and maintainable code.

## Agent Rules

1. Never install new dependencies without asking.
2. Never work directly on main.
3. Create a separate branch for every scoped task.
4. Explain the implementation plan before writing code.
5. Wait for approval before making changes.
6. Do not modify unrelated files.
7. Run relevant tests after changes.
8. Summarise all modifications for the pull request.
9. Never commit or push without user approval.
10. Never merge a pull request automatically.

## Git Workflow

1. Start from an updated main branch.
2. Create a feature branch.
3. Implement one scoped task.
4. Review git diff.
5. Run tests and lint.
6. Commit changes.
7. Push the branch.
8. Create a pull request.
9. Review and obtain approval.
10. Merge only after approval.
