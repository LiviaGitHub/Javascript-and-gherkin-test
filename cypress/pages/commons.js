class commons {

    static pageMustHave(text){
        cy.contains(text).should('be.visible');  
    }

    static getTheLatestIndustryType(industry){
        cy.get('.style__industry___1UBeU').last().contains(industry);
    }

}

export default commons;