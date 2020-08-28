import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import parloaHomePage from '../../pages/homePage.js'
import customerPage from '../../pages/customerPage.js'
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
    customerPage.enterCompanyName(companyName);
    customerPage.chooseFinance();
    customerPage.enterDescription(description);
})

And('I click on Add', () => {
    customerPage.clickAdd();
})

Then('I should see the new registered customer', () => {
    commons.pageMustHave(companyName);
    parloaHomePage.getTheLatestIndustryType('finance');
})
