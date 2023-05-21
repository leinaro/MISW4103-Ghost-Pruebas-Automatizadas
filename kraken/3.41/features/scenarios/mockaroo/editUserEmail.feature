Feature: Edit user email

@user1 @web
Scenario: Como admin edito el email del usuario Ghost y valido que se actualice correctamente  
    Given I go to page "<HOST>" "ghost/#/signin"
    And Generate mockaroo record
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    And I go to page "<HOST>" "ghost/#/staff/ghost"
    When I update the user email to mockaroo
    And I go to page "<HOST>" "ghost/#/staff"
    And I go to page "<HOST>" "ghost/#/staff/ghost"
    Then I validate the user email mockaroo exists