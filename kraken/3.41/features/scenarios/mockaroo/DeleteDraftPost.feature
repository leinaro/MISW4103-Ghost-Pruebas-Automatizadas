Feature: Crear un Draft post, buscarlo en la lista de draft y eliminarlo

@user1 @web
Scenario: Como autor creo un draft post, y lo busco en drafts y lo elimino
    Given I go to page "<HOST>" "ghost/#/signin"
    And Generate mockaroo record
    And I sign in with "<USERNAME>" and "<PASSWORD>"
    When I click new post
    And I set post attributes title and body with mockaroo
    And I go to page "<HOST>" "ghost/#/posts?type=draft"
    And I Click a post with title mockaroo
    And I press settings button
    And I click delete from settings
    And I delete post
    And I go to page "<HOST>" "ghost/#/posts?type=draft"
    Then I validate the post with mockaroo not exists
