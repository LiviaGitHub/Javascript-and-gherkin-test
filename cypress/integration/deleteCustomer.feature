Feature: Delete an existing customer

    As an user, I want to delete an existing customer 

    @delete
    Scenario: Delete an existing customer
    Given I open the Parloa application
    When I click on the trash icon of the first listed customer
    Then A window opens to confirm
    And I click on Yes
