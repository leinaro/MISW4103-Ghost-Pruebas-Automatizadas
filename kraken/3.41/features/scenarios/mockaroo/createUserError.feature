Feature: Agregar staff mensaje de error

@user1 @web
Scenario: Como admin invito un nuevo usuario con email invalido y recibo un error  
    Given I go to page "<HOST>" "ghost/#/signin"
    And Generate mockaroo record
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    And I go to page "<HOST>" "ghost/#/staff"
    When I click invite people
    And I set new member invalid email with mockaroo
    Then I validate invalid email error is visible