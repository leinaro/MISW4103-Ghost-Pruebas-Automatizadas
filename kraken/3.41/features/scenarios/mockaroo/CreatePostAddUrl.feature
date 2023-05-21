Feature: Crear un post, Agregarle una Url publicarlo y y buscarlo en la lista de publicados

@user1 @web
Scenario: Como autor creo un post con url diferente, lo publico, y lo busco en publicados
    Given I go to page "<HOST>" "ghost/#/signin"
    And Generate mockaroo record
    And I sign in with "<USERNAME>" and "<PASSWORD>"
    When I click new post
    And I set post attributes title and body with mockaroo
    And I press settings button
    And I set url field to mockaroo
    And I close settings menu
    And I publish the post
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    Then I validate the post with mockaroo exists
    And I go to page "<HOST>" post details
    Then I check page full title with mockaroo
