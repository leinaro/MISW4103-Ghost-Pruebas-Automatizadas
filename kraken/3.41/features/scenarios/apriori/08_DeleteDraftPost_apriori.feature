Feature: Crear un Draft post, buscarlo en la lista de draft y eliminarlo

@user1 @web
Scenario: Como autor creo un draft post, y lo busco en drafts y lo elimino
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>"
    When I click new post
    And I set post attributes title and body apriori0
    And I go to page "<HOST>" "ghost/#/posts?type=draft"
    And I Click a post with title apriori headline0
    And I press settings button
    And I click delete from settings
    And I delete post
    And I go to page "<HOST>" "ghost/#/posts?type=draft"
    Then I validate the post with apriori headline0 not exists
