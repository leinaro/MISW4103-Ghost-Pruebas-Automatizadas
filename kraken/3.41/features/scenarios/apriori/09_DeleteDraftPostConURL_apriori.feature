Feature: Crear un post,agregarle una url, publicarlo, validar la url, eliminarlo validar que la pagina ya no existe

@user1 @web
Scenario: Como autor creo un post, le agrego url, lo elimino y luego valido que no existe
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>"
    When I click new post
    And I set post attributes title and body apriori0
    And I press settings button
    And I set url field to apriori category2
    And I close settings menu
    And I publish the post
    And I go to page "<HOST>" apriori category2
    Then I check page full title with apriori headline0
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    And I Click a post with title apriori headline0
    And I press settings button
    And I click delete from settings
    And I delete post
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    Then I validate the post with apriori headline0 not exists
    And I go to page "<HOST>" apriori category2
    Then I can not get page
