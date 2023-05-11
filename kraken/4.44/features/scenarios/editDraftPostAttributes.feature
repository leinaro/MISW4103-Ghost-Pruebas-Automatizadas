Feature: Crear un nuevo post en draft, buscarlo en la lista de draft, modificarlo,y validar la modificacion

@user1 @web
Scenario: Como autor creo un post en draft, lo modificao y valido las modificaciones
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    And I click new post
    And I set post attributes title "$number_1" and body "$string_1"
    And I go to page "<HOST>" "ghost/#/posts?type=draft"
    And I Click a post with title "$$number_1"
    When I set post attributes title "$number_2" and body "$string_2"
    And I go to page "<HOST>" "ghost/#/posts?type=draft"
    And I validate the draft post with "$$number_2" exists 