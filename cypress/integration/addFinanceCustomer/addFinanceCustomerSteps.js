import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import parloaHomePage from '../../pages/homePage.js'
import addCustomerPage from '../../pages/addCustomerPage.js'
import commons from '../../pages/commons.js'
import faker from 'faker'

let companyName = faker.name.findName();
let description = faker.lorem.sentence(8);

Given('I open the Parloa application', () => {
    parloaHomePage.visitHomePage();
})

When('I click Add Customer', () => {
    parloaHomePage.clickAddCustomer();
})

And('I fill out the form', () => {
    addCustomerPage.enterCompanyName(companyName);
    addCustomerPage.chooseFinance();
    addCustomerPage.enterDescription(description);
})

And('I click on Add', () => {
    addCustomerPage.clickAdd();
})

Then('I should see the new registered customer', () => {
    commons.pageMustHave(companyName);
    commons.getTheLatestIndustryType('finance');
})
