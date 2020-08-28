Feature: Edit an existing customer

    As an user, I want to edit an existing customer 

    @edit
    Scenario: Edit an existing customer
    Given I open the Parloa application
    When I click on the edit icon of the first listed customer
    And I edit the informations
    And I add the new informations
    Then I should see the new information recorded
