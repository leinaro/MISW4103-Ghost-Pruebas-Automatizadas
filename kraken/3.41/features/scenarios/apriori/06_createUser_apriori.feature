Feature: Agregar staff

@user1 @web
Scenario: Como admin invito un nuevo usuario y valido que se agregue correctamente  
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    And I go to page "<HOST>" "ghost/#/staff"
    When I click invite people
    And I set new member email valid apriori email2
    And I go to page "<HOST>" "ghost/#/staff"
    Then I validate the user apriori valid email2 exists
    And I revoke invitations