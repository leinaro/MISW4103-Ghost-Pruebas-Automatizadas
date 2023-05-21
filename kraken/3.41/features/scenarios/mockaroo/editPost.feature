Feature: Crear un nuevo post, publicarlo, y buscarlo en la lista de publicados, editar el titulo y el contenido

@user1 @web
Scenario: Como autor navego a un post, y  busco en publicados
    Given I go to page "<HOST>" "ghost/#/signin"
    And Generate mockaroo record
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    And I click new post
    And I set post attributes title and body with mockaroo
    And I press settings button
    And I set url field to mockaroo
    And I close settings menu
    And I publish the post
    And Generate mockaroo record
    When I set post attributes title and body with mockaroo
    And I publish the post
    And I go to previous page "<HOST>" post details
    Then I validate the post publication with title and content mockaroo 