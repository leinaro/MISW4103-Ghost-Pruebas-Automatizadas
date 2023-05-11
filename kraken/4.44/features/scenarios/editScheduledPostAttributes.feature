Feature: Crear un nuevo scheduled post, buscarlo en la lista de schedule, ir al detalle del post,
modificarlo, darle reschedule buscarlo por el nuevo titulo

@user1 @web
Scenario: Como autor creo un scheduled post, y  busco en publicados
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