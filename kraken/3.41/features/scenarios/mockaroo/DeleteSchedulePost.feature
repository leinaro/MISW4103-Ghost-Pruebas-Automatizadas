Feature: Crear un nuevo post en schedule, lo elimino y buscarlo en la lista de schedule, valido que no existe

@user1 @web
Scenario: Como autor creo un post en schedule, y lo busco en la lista de schedule, lo elimino y luego valido que no existe
    Given I go to page "<HOST>" "ghost/#/signin"
    And Generate mockaroo record
    And I sign in with "<USERNAME>" and "<PASSWORD>"
    When I click new post
    And I set post attributes title and body with mockaroo
    And I select schedule post
    And I go to page "<HOST>" "ghost/#/posts?type=scheduled"
    And I Click a post with title mockaroo
    And I press settings button
    And I click delete from settings
    And I delete post
    And I go to page "<HOST>" "ghost/#/posts?type=scheduled"
    Then I validate the post with mockaroo not exists
