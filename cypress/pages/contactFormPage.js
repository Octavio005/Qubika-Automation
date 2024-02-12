/// <reference types="cypress" />

class ContactFormPageLoactors {
    constructor() {
        this.logo = '[class = "logo"]';
        this.contactUsButton = '[class="content text-intro"] a';
        this.firstNameInput = 'input[id*="firstname"]';
        this.lastNameInput = 'input[id*="lastname"]';
        this.emailInput = 'input[id*="email"]';
        this.companyInput = 'input[id*="company"]';
        this.contactSelect = 'select[id*="contact"]';
        this.messageTextarea = 'textarea[id*="message"]';
        this.submitButton = '[type = "submit"]';
        this.scroller = '[class = "modal-scroller"]';
        this.emptyFieldAlert = '[role = "alert"]';
    };
};

export default class ContactFormPage {
    constructor() {
        this.locators = new ContactFormPageLoactors();
    };

    getLogo() {
        return cy.get(this.locators.logo);
    }

    getContactUsButton() {
        return cy.get(this.locators.contactUsButton);
    }

    getFirstNameInput() {
        return cy.get(this.locators.firstNameInput);
    }

    getLastNameInput() {
        return cy.get(this.locators.lastNameInput);
    }

    getEmailInput() {
        return cy.get(this.locators.emailInput);
    }

    getCompanyInput() {
        return cy.get(this.locators.companyInput);
    }

    getContactSelect() {
        return cy.get(this.locators.contactSelect);
    }

    getMessageTextarea() {
        return cy.get(this.locators.messageTextarea);
    }

    getSubmitButton() {
        return cy.get(this.locators.submitButton);
    }

    getModalScroller() {
        return cy.get(this.locators.scroller);
    }

    getEmptyFieldAlert() {
        return cy.get(this.locators.emptyFieldAlert);
    }

    validateForm(){
        this.getFirstNameInput().should('be.visible');
        this.getEmailInput().should('be.visible');
        this.getModalScroller().scrollTo('bottom');
        this.getSubmitButton().should('be.visible');
    }

    validateErrorMessages(firstNameError = true) {
        this.getModalScroller().scrollTo('top');
        if(firstNameError){
            this.getFirstNameInput().parent().find(' + [role = "alert"]').should('be.visible');
        } else {
            this.getFirstNameInput().parent().find(' + [role = "alert"]').should('not.exist');
        }
        this.getLastNameInput().parent().find(' + [role = "alert"]').should('be.visible');
        this.getEmailInput().parent().find(' + [role = "alert"]').should('be.visible');
        this.getModalScroller().scrollTo('bottom');
        this.getContactSelect().parent().parent().find(' + [role = "alert"]').should('be.visible');
        this.getMessageTextarea().parent().find(' + [role = "alert"]').should('be.visible');
    }
};