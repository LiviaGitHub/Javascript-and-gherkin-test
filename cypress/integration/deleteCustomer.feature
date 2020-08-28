Feature: Delete an existing customer

    As an user, I want to delete an existing customer 

    @delete
    Scenario: Delete an existing customer
    Given I open the Parloa application
    When I click on the trash icon of the first listed customer
    And A window opens to confirm
    Then I delete the customer
