Feature: Crear un nuevo post, publicarlo, y buscarlo en la lista de publicados, editar el titulo y el contenido

@user1 @web
Scenario: Como autor navego a un post, y  busco en publicados
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    And I click new post
    And I set post attributes title "$number_1" and body "$string_1"
    And I publish the post
    When I set post attributes title "$number_2" and body "$string_2"
    And I publish the post
    And I go to page "<HOST>" "$$number_1"
    Then I validate the post publication with title "$$number_2" and content "$$string_2" 