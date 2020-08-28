class commons {

    static pageMustHave(text){
        cy.contains(text).should('be.visible');  
    }

    static checkCustomerName(locator, line, text){
        cy.get(locator).eq(line).should('have.text', text);
    }
}

export default commons;