Feature: Crear un nuevo post, publicarlo, buscarlo en la lista de publicados, ir al detalle del post, agregar un tag, publicar ir a lista de post con tags y validar que aparce.

@user1 @web
Scenario: Como autor navego a un post, y  busco en publicados
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>"
    When I click new post
    And I set post attributes title "$name_1" and body "$string_1"
    And I select schedule post
    And I go to page "<HOST>" "ghost/#/posts?type=scheduled"
    And I Click a post with title "$$name_1"
    When I set post attributes title "$number_2" and body "$string_2"
    And I select reschedule post
    And I go to page "<HOST>" "ghost/#/posts?type=scheduled"
    Then I validate the schedule post with "$$number_2" exists