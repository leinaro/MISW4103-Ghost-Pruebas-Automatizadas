Feature: Crear un post, Agregarle una Url publicarlo y y buscarlo en la lista de publicados

@user1 @web
Scenario: Como autor creo un post con url diferente, lo publico, y lo busco en publicados
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>"
    When I click new post
    And I set post attributes title "$name_1" and body "$string_1"
    And I press settings button
    And I set url field to "$name_2"
    And I close settings menu
    And I publish the post
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    Then I validate the post with "$$name_1" exists
    And I go to page "<HOST>" "$$name_2"
    Then I check page full title with "$$name_1"
