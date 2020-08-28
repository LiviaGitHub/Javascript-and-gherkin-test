class customerPage {

    static pageMustHave(text){
        cy.contains(text).should('be.visible')  
    }

    static enterCompanyName(name){
        cy.get('[type="text"]').type(name);
    }

    static cleanCompanyName(){
        cy.get('[type="text"]').clear() 
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

    static clickEdit(){
        cy.get('.style__text___2xIA2').contains('EDIT').click({ force: true });
    } 
}

export default customerPage;
