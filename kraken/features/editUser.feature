Feature: Agregar staff

@user1 @web
Scenario: Como admin invito un nuevo usuario y valido que se agregue correctamente  
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    And I go to page "<HOST>" "ghost/#/staff"
    When I click invite people
    And I set new member email "$email_1"
    And I go to page "<HOST>" "ghost/#/staff"
    Then I validate the user "$$email_1" exists


@user2 @web
Scenario: Como admin invito un nuevo usuario con email invalido y recibo un error  
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    And I go to page "<HOST>" "ghost/#/staff"
    When I click invite people
    And I set new member email "$name_1"
    Then I validate invalid email error is visible