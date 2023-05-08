Feature: Crear un Draft post, buscarlo en la lista de draft y eliminarlo

@user1 @web
Scenario: Como autor creo un draft post, y lo busco en drafts y lo elimino
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>"
    When I click new post
    And I set post attributes title "$number_1" and body "$string_1"
    And I go to page "<HOST>" "ghost/#/posts?type=draft"
    And I Click a post with title "$$number_1"
    And I press settings button
    And I click delete from settings
    And I delete post
    And I go to page "<HOST>" "ghost/#/posts?type=draft"
    Then I validate the post with "$number_1" not exists
