Feature: Crear un nuevo post en draft, buscarlo en la lista de draft, modificarlo,y validar la modificacion

@user1 @web
Scenario: Como autor creo un post en draft, lo modificao y valido las modificaciones
    Given I go to page "<HOST>" "ghost/#/signin"
    And Generate mockaroo record
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    And I click new post
    And I set post attributes title and body with mockaroo
    And I go to page "<HOST>" "ghost/#/posts?type=draft"
    And I Click a post with title mockaroo
    When I set post attributes title and body with mockaroo
    And I go to page "<HOST>" "ghost/#/posts?type=draft"
    And I validate the draft post with mockaroo exists 