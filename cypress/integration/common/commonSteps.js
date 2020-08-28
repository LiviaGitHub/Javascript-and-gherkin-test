import { Given } from "cypress-cucumber-preprocessor/steps"
import parloaHomePage from '../../pages/homePage.js'

Given('I open the Parloa application', () => {
    parloaHomePage.visitHomePage();
})