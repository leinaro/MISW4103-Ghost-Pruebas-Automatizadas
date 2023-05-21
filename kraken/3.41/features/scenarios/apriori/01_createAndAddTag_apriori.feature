Feature: Crear un tag, Crear un nuevo post, agregarle el tag y publicarlo ,y buscarlo en la lista de publicados

@user1 @web
Scenario: Como autor creo un tag, y lo agrego a un post
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>"
    And I go to page "<HOST>" "ghost/#/tags" 
    And I create new tag with apriori category0
    When I click new post
    And I set post attributes title and body apriori0
    And I select tag with name apriori category0
    And I close settings menu
    And I publish the post
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    And I filter posts by tag with name apriori category0
    Then I validate the post with apriori headline exists0
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    And I Click a post with title apriori headline0
    And I press settings button
    And I click delete from settings
    And I delete post
