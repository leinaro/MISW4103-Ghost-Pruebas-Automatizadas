Feature: Crear un post, publicarlo, eliminarlo, validar que ya no aparece en la lista de publicados

@user1 @web
Scenario: Como autor creo un post lo publico, y lo elimino, valido que ya no aparece en la lista de publicados
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>"
    When I click new post
    And I set post attributes title "$number_1" and body "$string_1"
    And I publish the post
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    And I Click a post with title "$$number_1"
    And I press settings button
    And I click delete from settings
    And I delete post
    Then I validate the post with "$number_1" not exists
