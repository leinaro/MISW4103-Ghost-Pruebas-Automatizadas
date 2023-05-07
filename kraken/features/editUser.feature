Feature: Agregar staff

@user1 @web
Scenario: Como admin invito un nuevo usuario y valido que se agregue correctamente  
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    And I go to page "<HOST>" "ghost/#/staff/ghost"
    When I update the user name to "$name_1"
    And I go to page "<HOST>" "ghost/#/staff"
    Then I validate the user "$$name_1" exists
