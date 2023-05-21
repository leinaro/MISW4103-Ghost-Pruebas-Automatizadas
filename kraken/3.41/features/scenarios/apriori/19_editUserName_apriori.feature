Feature: Edit user name

@user1 @web
Scenario: Como admin edito el nombre del usuario Ghost y valido que se actualice correctamente  
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    And I go to page "<HOST>" "ghost/#/staff/ghost"
    When I update the user name to apriori author_name2
    And I go to page "<HOST>" "ghost/#/staff"
    Then I validate the user apriori author_name2 exists
