class addCustomerPage {

    static pageMustHave(text){
        cy.contains(text).should('be.visible')  
    }

    static enterCompanyName(name){
        cy.get('[type="text"]').type(name);
    }

    static chooseFinance(){
        cy.get('select').select('finance');
    }

    static enterDescription(description){
        cy.get('textarea').type(description);
    }

    static clickAdd(){
        cy.get('.style__text___2xIA2').contains('ADD').click({ force: true });
    } 
}

export default addCustomerPage;
