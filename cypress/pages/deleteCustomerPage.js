class deleteCustomerPage {

    static clickYesToDeleteCustomer(){
       cy.get('[role="Button"]').contains('YES').click();
    }
}

export default deleteCustomerPage;