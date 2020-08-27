Feature: Create a new Finance customer

    I want to create a new Finance customer.

    @finance
    Scenario: Create a customer using Finance as an industry
    Given I open the Parloa application
    When I click Add Customer
    And I fill out the form
    And I click on Add
    Then I should see the new registered customer
