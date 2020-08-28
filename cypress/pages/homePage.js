class parloaHomePage {

    static visitHomePage(){
        cy.visit('/');
    }

    static clickAddCustomer(){
        cy.contains('ADD CUSTOMER').click()
    }

    static clickOnTheFirstTrashIcon(){
        cy.get('.style__icon___2WjcZ').eq(1).click();
    }

    static clickOnTheFirstEditIcon(){
        cy.get('.style__icon___2WjcZ').eq(0).click();
    }

    static getTheLatestIndustryType(industry){
        cy.get('.style__industry___1UBeU').last().contains(industry);
    }
}

export default parloaHomePage;