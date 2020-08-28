import { Given, When } from "cypress-cucumber-preprocessor/steps"
import parloaHomePage from '../../pages/homePage.js'
import deleteCustomerPage from '../../pages/deleteCustomerPage.js'
import commons from '../../pages/commons.js'

Given('I open the Parloa application', () => {
    parloaHomePage.visitHomePage();
})

When('I click on the trash icon of the first listed customer', () => {
    parloaHomePage.clickOnTheFirstTrashIcon();
})

Then('A window opens to confirm', () => {
    commons.pageMustHave('re you sure you want to remove customer');
    commons.pageMustHave('YES');
    commons.pageMustHave('NO');
})

And('I click on Yes', () => {
    deleteCustomerPage.clickYesToDeleteCustomer();
})



