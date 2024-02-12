/// <reference types="cypress" />

class HomePageLocators {
    constructor() {
        this.logo = '[class = "logo"]';
        this.contactUsButton = '[class="content text-intro"] a';
    };
};

export default class HomePage {
    constructor() {
        this.locators = new HomePageLocators();
    };

    getLogo() {
        return cy.get(this.locators.logo);
    }

    getContactUsButton() {
        return cy.get(this.locators.contactUsButton);
    }
};