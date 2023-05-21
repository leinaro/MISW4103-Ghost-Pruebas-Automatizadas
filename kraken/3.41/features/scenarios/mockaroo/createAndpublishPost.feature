Feature: Crear un nuevo post, publicarlo, y buscarlo en la lista de publicados

@user1 @web
Scenario: Como autor creo un post lo publico, y lo busco en publicados
    Given I go to page "<HOST>" "ghost/#/signin"
    And Generate mockaroo record
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    When I click new post
    And I set post attributes title and body with mockaroo
    And I publish the post
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    Then I validate the post with mockaroo exists
