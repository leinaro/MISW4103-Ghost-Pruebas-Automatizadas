Feature: Crear un tag, Crear un nuevo post, agregarle el tag y publicarlo ,y buscarlo en la lista de publicados

@user1 @web
Scenario: Como autor creo un post en schedule, y lo busco en la lista de shcedule, lo elimino y luego valido que no existe
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>"
    And I go to page "<HOST>" "ghost/#/tags" 
    And I create new tag with "$number_1"
    When I click new post
    And I set post attributes title "$name_1" and body "$string_2"
    And I select tag with name "$$number_1"
    And I close settings menu
    And I publish the post
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    And I filter posts by tag with name "$$number_1"
    Then I validate the post with "$$name_1" exists
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    And I Click a post with title "$$name_1"
    And I press settings button
    And I click delete from settings
    And I delete post
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    And I filter posts by tag with name "$$number_1"
    Then I validate the post with "$$name_1" not exists


    