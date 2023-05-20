Feature: Crear un nuevo post, publicarlo, buscarlo en la lista de publicados, ir al detalle del post, agregar un tag, publicar ir a lista de post con tags y validar que aparce.

@user1 @web
Scenario: Como autor navego a un post, y  busco en publicados
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    And I click new post
    And I set post attributes title "$number_1" and body "$string_1"
    And I publish the post
    And I go to page "<HOST>" "ghost/#/tags" 
    And I create new tag with "$name_1"
    When I go to page "<HOST>" "ghost/#/posts?type=published"
    And I Click a post with title "$$number_1"
    And I select tag with name "$$name_1"
    And I close settings menu
    And I publish the post
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    And I filter posts by tag with name "$$name_1"
    Then I validate the post with "$$number_1" exists