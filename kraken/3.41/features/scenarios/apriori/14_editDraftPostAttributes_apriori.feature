Feature: Crear un nuevo post en draft, buscarlo en la lista de draft, modificarlo,y validar la modificacion

@user1 @web
Scenario: Como autor creo un post en draft, lo modificao y valido las modificaciones
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    And I click new post
    And I set post attributes title and body apriori0
    And I go to page "<HOST>" "ghost/#/posts?type=draft"
    And I Click a post with title apriori headline0
    When I set post attributes title and body valid apriori2
    And I go to page "<HOST>" "ghost/#/posts?type=draft"
    And I validate the draft post with apriori headline2 exists 
    And I go to page "<HOST>" "ghost/#/posts?type=draft"
    And I Click a post with title apriori headline2
    And I press settings button
    And I click delete from settings
    And I delete post