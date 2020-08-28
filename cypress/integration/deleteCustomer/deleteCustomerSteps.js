import { When, And, Then } from "cypress-cucumber-preprocessor/steps"
import parloaHomePage from '../../pages/homePage.js'
import deleteCustomerPage from '../../pages/deleteCustomerPage.js'
import commons from '../../pages/commons.js'
import commonSteps from '../common/commonSteps'

When('I click on the trash icon of the first listed customer', () => {
    parloaHomePage.clickOnTheFirstTrashIcon();
})

And('A window opens to confirm', () => {
    commons.pageMustHave('re you sure you want to remove customer');
    commons.pageMustHave('YES');
    commons.pageMustHave('NO');
})

Then('I delete the customer', () => {
    deleteCustomerPage.deleteCustomer();
})



