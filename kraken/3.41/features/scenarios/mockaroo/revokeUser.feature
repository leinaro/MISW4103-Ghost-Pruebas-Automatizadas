Feature: Remove staff

@user1 @web
Scenario: Como admin invito un nuevo usuario y revoke su invitación 
    Given I go to page "<HOST>" "ghost/#/signin"
    And Generate mockaroo record
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    And I go to page "<HOST>" "ghost/#/staff"
    When I click invite people
    And I set new member email with mockaroo
    And I go to page "<HOST>" "ghost/#/staff"
    And I revoke invitations
    Then I validate invitation for mockaroo not exists