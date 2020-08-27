class parloaHomePage {

    static visitHomePage(){
        cy.visit('/');
    }

    static clickAddCustomer(){
        cy.contains('ADD CUSTOMER').click()
    }
}

export default parloaHomePage;