Feature: Crear un post, Agregarle una Url publicarlo y y buscarlo en la lista de publicados

@user1 @web
Scenario: Como autor creo un post con url diferente, lo publico, y lo busco en publicados
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>"
    When I click new post
    And I set post attributes title and body valid apriori2
    And I press settings button
    And I set url field to valid apriori tags2
    And I close settings menu
    And I publish the post
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    Then I validate the post with valid apriori headline exists2
    And I go to page "<HOST>" apriori tags2
    Then I check page full title with apriori headline2
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    And I Click a post with title apriori headline2
    And I press settings button
    And I click delete from settings
    And I delete post