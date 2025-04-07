# Training Playwright

This project is an automation testing practice repository based on the [Playwright](https://playwright.dev/) framework. It aims to provide a complete, clear, and extensible testing solution combining Page Object Model (POM) and Arrange-Act-Assert (AAA) methodologies.

## Project Structure

```
training_playwright/
├── .github/workflows/          # GitHub Actions CI configurations
├── pages/                      # Page Object Model (POM) definitions
├── testcases/                  # Test cases management and design
├── tests-examples/             # Official or example test scripts
├── tests/                      # Actual automated test scripts
├── data/                       # Test case files (CSV, Excel)
├── reports/                    # Test reports and screenshots
└── playwright.config.ts        # Playwright test runner configurations
```

## Configuration and Execution

### Install Dependencies

```bash
npm install
```

### Configure Test Runner

Edit `playwright.config.ts` to configure browsers, concurrency, base URL, and reporting options.

### Execute Tests

- **Run all tests:**

```bash
npx playwright test
```

- **Run specific test:**

```bash
npx playwright test tests/example.spec.ts
```

- **Update snapshots for visual tests:**

```bash
npx playwright test --update-snapshots
```

### Test Reporting

- **View HTML reports:**

```bash
npx playwright show-report
```

## Using Page Object Model (POM) and AAA Method

Tests follow the AAA pattern clearly:

- **Arrange**: Setup initial test conditions
- **Act**: Perform test actions
- **Assert**: Verify outcomes

The POM method separates page actions from element definitions. Refer to the `pages/` folder for structure.

### Example

```typescript
// Arrange
const loginPage = new LoginPage(page);

// Act
await loginPage.goto();
await loginPage.login('user', 'pass');

// Assert
await expect(page).toHaveURL(/dashboard/);
```

## VS Code Support and Recommended Plugin

- Install [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

## CI/CD Integration

This project includes automated Continuous Integration (CI) via GitHub Actions. Refer to the `.github/workflows/` folder for details.

## Features

- **Combined Test Structures**: Utilizing Page Object Model (POM) and AAA methodology.
- **Visual Testing and Image Comparison**: Leveraging Playwright's powerful visual regression testing capabilities.
- **Structured Workflow**: Fully covers the testing lifecycle: Planning → Analysis → Design → Execution → Reporting.
- **Test Cases Management**: Organized and structured test cases in CSV and Excel formats.
- **Enhanced VS Code Support**: Optimized VS Code environment with recommended plugins for efficient development.
- **CI/CD Integration**: Continuous integration and deployment via GitHub Actions.