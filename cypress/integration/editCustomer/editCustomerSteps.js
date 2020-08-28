import { When, And, Then } from "cypress-cucumber-preprocessor/steps"
import parloaHomePage from '../../pages/homePage.js'
import customerPage from '../../pages/customerPage.js'
import commons from '../../pages/commons.js'
import commonSteps from '../common/commonSteps'
import faker from 'faker'

let newCompanyName = faker.name.findName();

When('I click on the edit icon of the first listed customer', () => {
    parloaHomePage.clickOnTheFirstEditIcon();
})

And('I edit the informations', () => {
    customerPage.cleanCompanyName();
    customerPage.enterCompanyName(newCompanyName);
})

And('I add the new informations', () => {
    customerPage.clickEdit();
})

Then('I should see the new information recorded', () => {
    commons.pageMustHave(newCompanyName);
    commons.checkCustomerName('.style__name___1HNGn', 0, newCompanyName);
})
