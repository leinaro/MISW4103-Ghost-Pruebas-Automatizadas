Feature: Crear un tag, Crear un nuevo post, agregarle el tag y publicarlo ,y eliminar el post y validar que ya no aparece al buscar por tag

@user1 @web
Scenario: Como autor creo un tag, creo un post y le asigno el tag,elimino el post y valido que no aparece en filtro por tag
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
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    And I filter posts by tag with name apriori category0
    Then I validate the post with apriori headline0 not exists


    