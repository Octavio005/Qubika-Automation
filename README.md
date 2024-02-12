# Qubika Automation
## A Qubika Digital solutions Website Automation made with Cypress

### Project's structure
This is a basic and practical automation project based on the page object model which includes a pages folder, containing the home page and the cnotact form page.
The only test file is located in the e2e folder, qubika-automation.cy.js.

### Objective
The project's objective is to enter Qubika's Website, opening the contact us form and do some tests over it.

### Solution
As previously stated, the project works with the page object model, which means that for every page the Automation visits, a new file with its representation will be created, in this case the code goes through the home and contact us form pages, so two page files were created.
First, the Automation enters the Qubika website and validates the URL and that the logo is visible. Then it clicks on the Contact us form and proceeds validating that it is correctly displayed with the function validateForm, which checks if the Name and Email inputs and submit button are visible.
After that, it clicks the Submit button to display the error messages because of not filling the mandatory fields. This is done through the validateErrorMessages function, which checks that each one of the five mandatory files have their respective error message.
Then, it writes a generic name in the Name field to check if the error message has indeed disappeared, which ultimately leads to validate that now the Name field is the only one without an error message, the fastest and simplest way found to do this was by adding a firstNameError parameter to the validateErrorMessages function that, if false, asserted that the first name error message did not exist in the DOM.
Finally, if used the command 
`npx cypress run --reporter mochawesome --reporter-options reportDir="cypress/results",overwrite=false,html=true,json=true`
to run the automation, a new report in HTML and json formats will be generated in the results folder.

### How to run the Automation
First, this repository has to be cloned and the command `npm install` has to be ran in the repository directory.
To run the qubika-automation test case inside the project, run the command `npm run cypress:open` and then select the test case in Cypress UI.

### Important!
In steps 7 and 11 of the test objectives, the user is asked to validate that some fields are marked with red color, but no such color inside any field could be found.
