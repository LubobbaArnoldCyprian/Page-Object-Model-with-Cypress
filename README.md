Here is the corrected markdown file:

# onafriq-assignment

## Page Object Model (POM) with Cypress

### Introduction

Page Object Model (POM) is a design pattern used in test automation to create an object repository for storing web elements. In POM, each web page of an application is considered a class file. Each class file contains only the corresponding web page elements, and using these elements, operations can be performed on the application under test.

### Benefits of Page Object Model

- **Reduces Code Duplication**: By encapsulating the page elements and their interactions within classes, the POM pattern minimizes redundancy in test scripts.
- **Improves Test Case Maintenance**: Any changes to the web page's UI can be easily managed within the corresponding page class, ensuring that test cases do not need to be rewritten.
- **Code Reusability**: Common operations can be reused across multiple test cases, promoting modularity.
- **Enhances Readability and Reliability**: By organizing the code into clear, logical sections, POM makes the scripts easier to read and maintain.

### Tools and Dependencies

- **IDE**: Visual Studio Code
- **Test Framework**: Cypress 13.9.0
- **Node.js and npm**: Used for package management and running scripts.
- **Programming Language**: JavaScript

### Setting Up the Project Locally

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/LubobbaArnoldCyprian/onafriq-assignment.git
   ```

2. **Ensure Node.js and npm are Installed**:
   - Download and install Node.js from [Node.js official website](https://nodejs.org/).
   - npm comes with Node.js, so it will be installed automatically.

3. **Navigate to the Project Directory**:
   ```sh
   cd onafriq-assignment
   ```

4. **Install Node Modules**:
   ```sh
   npm install
   ```

5. **Install Cypress**:
   ```sh
   npm install cypress --save-dev
   ```

### Running Tests

- **Run Tests with GUI**:
  To run tests with the graphical user interface open:
  ```sh
  npx cypress open
  ```
  A Cypress GUI will open where you can select and run specific tests.

### Test Cases

- **Test Case 1**: Get the label and associated price of those items. Fetch them and sort by their price [Low to High] and print it on Console [Label & Price].
- **Test Case 2**: Sign In and Checkout Order.

```