Feature: Agregar staff

@user1 @web
Scenario: Como admin edito el nombre del usuario Ghost y valido que se actualice correctamente  
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    And I go to page "<HOST>" "ghost/#/staff/ghost"
    When I update the user name to "$name_1"
    And I go to page "<HOST>" "ghost/#/staff"
    Then I validate the user "$$name_1" exists


@user2 @web
Scenario: Como admin edito el email del usuario Ghost y valido que se actualice correctamente  
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    And I go to page "<HOST>" "ghost/#/staff/ghost"
    When I update the user email to "$email_1"
    And I go to page "<HOST>" "ghost/#/staff"
    And I go to page "<HOST>" "ghost/#/staff/ghost"
    Then I validate the user email "$$email_1" exists