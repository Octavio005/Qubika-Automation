import HomePage from "../pages/homePage";
import ContactFormPage from "../pages/contactFormPage";

describe('Qubika Website Automation', () => {

  const homePage = new HomePage();
  const contactFormPage = new ContactFormPage();

  it('Qubika workflow', () => {
    
    cy.visit('www.qubika.com');
    cy.url().should('include', 'qubika.com');
    homePage.getLogo().should('be.visible');
    homePage.getContactUsButton().click();
    contactFormPage.validateForm();
    contactFormPage.getSubmitButton().click();
    contactFormPage.validateErrorMessages();
    contactFormPage.getFirstNameInput().type('Test name');
    contactFormPage.getSubmitButton().click();
    contactFormPage.validateErrorMessages(false);
  })
})