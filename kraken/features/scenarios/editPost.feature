Feature: Crear un nuevo post, publicarlo, y buscarlo en la lista de publicados

@user1 @web
Scenario: Como autor creo un post lo publico, y lo busco en publicados
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    When I click new post
    And I set post attributes title "$name_1" and body "$string_1"
    And I publish the post
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    Then I validate the post with "$$name_1" exists
