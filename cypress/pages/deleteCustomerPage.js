class deleteCustomerPage {

    static deleteCustomer(){
        cy.get('.style__name___1HNGn').eq(0).then(($name1) => {
        const txt = $name1.text()
        
        cy.get('[role="Button"]').contains('YES').click();
        
        cy.get('.style__name___1HNGn').eq(0).should(($name2) => {
              expect($name2.text()).not.to.eq(txt)
            })
        })
    }
}

export default deleteCustomerPage;