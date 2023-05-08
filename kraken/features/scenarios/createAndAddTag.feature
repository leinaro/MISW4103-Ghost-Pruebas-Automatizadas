Feature: Crear un tag, Crear un nuevo post, agregarle el tag y publicarlo ,y buscarlo en la lista de publicados

@user1 @web
Scenario: Como autor creo un tag, y lo agrego a un post
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>"
    And I go to page "<HOST>" "ghost/#/tags" 
    And I create new tag with "$string_1"
    When I click new post
    And I set post attributes title "$name_1" and body "$string_2"
    And I select tag with name "$$string_1"
    And I close settings menu
    And I publish the post
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    And I filter posts by tag with name "$$string_1"
    Then I validate the post with "$$name_1" exists
