## 1. New Feature Prompt

Context:
We are building an Expense Tracker using React and Vite.

Goal:
Implement the requested feature: [FEATURE NAME].

Constraints:
- Use existing project structure.
- Keep application state in App.jsx.
- Do not install new dependencies without asking.
- Follow AGENTS.md.
- Work only on the current feature branch.
- Do not modify unrelated components.

Acceptance Criteria:
- [Criterion 1]
- [Criterion 2]
- [Criterion 3]

Before coding:
Explain your implementation plan and wait for approval.

After coding:
Summarise modified files and testing performed.

## 2. Bug Fix Prompt

Context:
The Expense Tracker has an existing bug.

Goal:
Fix the following issue: [BUG DESCRIPTION].

Constraints:
- Identify the root cause first.
- Avoid unrelated modifications.
- Do not introduce new dependencies.
- Preserve existing functionality.

Acceptance Criteria:
- The reported bug is fixed.
- Existing tests continue to pass.
- Add a regression test if necessary.

First explain the cause and proposed fix. Wait for approval.

## 3. Refactor Prompt

Context:
We have an existing React Expense Tracker.

Goal:
Refactor [COMPONENT OR FILE].

Constraints:
- Do not change application behaviour.
- Keep state in App.jsx.
- Follow existing naming conventions.
- Do not add dependencies.

Acceptance Criteria:
- Code is easier to understand.
- Existing functionality works.
- All existing tests pass.

Provide a plan before editing.

## 4. Generate Tests Prompt

Context:
The Expense Tracker uses Vitest and React Testing Library.

Goal:
Generate tests for [FEATURE].

Constraints:
- Test actual application behaviour.
- Include positive and negative cases.
- Do not write tests that always pass.
- Do not modify application code unless requested.

Acceptance Criteria:
- Tests verify expected behaviour.
- Tests fail when the relevant functionality is broken.
- Tests pass with the correct implementation.

Explain the test cases before creating them.

## 5. Review Diff Prompt

Review the current Git diff.

Check:
- Does the implementation match the request?
- Are there bugs or edge cases?
- Are there unnecessary changes?
- Are React state updates correct?
- Are components and props used properly?
- Are tests meaningful?
- Are existing features preserved?

Do not modify any files.

Provide findings ordered by severity.

## 6. Commit Message Prompt

Review the changes in the current Git diff.

Generate a concise Git commit message that:
- Uses the imperative mood.
- Describes the actual changes.
- Does not exaggerate the implementation.
- Follows conventional commit style where appropriate.

Do not commit automatically.



# Add Expense Feature - Detailed Prompt

## 1. Context

We are developing an Expense Tracker application using React and Vite.
The application allows users to manage their daily expenses.
The main application state is maintained inside App.jsx.

## 2. Goal

Create an ExpenseForm component that allows users to add a new expense by entering:
- Expense title
- Expense amount
- Expense category

Available categories:
Food, Travel, Bills and Other.

## 3. Constraints

- Create ExpenseForm.jsx as a separate component.
- Use React functional components.
- Keep application state in App.jsx.
- Pass required data and event handlers through props.
- Do not install additional dependencies.
- Follow AGENTS.md conventions.
- Do not modify unrelated files.
- Work on a separate Git branch.

## 4. Acceptance Criteria

1. The form displays a title input.
2. The form displays an amount input.
3. The form displays a category dropdown.
4. The dropdown contains Food, Travel, Bills and Other.
5. An empty title is rejected.
6. A non-numeric amount is rejected.
7. An amount of zero is rejected.
8. A negative amount is rejected.
9. A valid expense is added successfully.
10. After successful submission, the form inputs are cleared.

Each criterion must be verifiable through a test.

## 5. Examples

Valid input:
Title: Lunch
Amount: 250
Category: Food

Expected result:
A new expense is added with the title Lunch,
amount 250 and category Food.

Invalid input:
Title: (empty)
Amount: 250
Category: Food

Expected result:
The expense is not added and an error is displayed.

Invalid input:
Title: Cab
Amount: -100
Category: Travel

Expected result:
The expense is not added and an error is displayed.
