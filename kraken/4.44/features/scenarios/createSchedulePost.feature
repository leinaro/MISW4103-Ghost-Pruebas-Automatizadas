Feature: Crear un nuevo post, dejarlo en schedule, y buscarlo en la lista de Schedule

@user3 @web
Scenario: Como autor creo un post en schedule, y lo busco en lista de schedule
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    When I click new post
    And I set post attributes title "$name_1" and body "$string_1"
    And I select schedule post
    And I go to page "<HOST>" "ghost/#/posts?type=scheduled"
    Then I validate the schedule post with "$$name_1" exists