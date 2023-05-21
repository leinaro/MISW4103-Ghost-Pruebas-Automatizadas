Feature: Crear un nuevo scheduled post, buscarlo en la lista de schedule, ir al detalle del post,
modificarlo, darle reschedule buscarlo por el nuevo titulo

@user1 @web
Scenario: Como autor creo un scheduled post, y  busco en publicados
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>"
    When I click new post
    And I set post attributes title and body apriori0
    And I select schedule post
    And I go to page "<HOST>" "ghost/#/posts?type=scheduled"
    And I Click a post with title apriori headline0
    When I set post attributes title and body valid apriori2
    And I select reschedule post
    And I go to page "<HOST>" "ghost/#/posts?type=scheduled"
    Then I validate the schedule post with apriori headline2 exists
    And I go to page "<HOST>" "ghost/#/posts?type=scheduled"
    And I Click a post with title apriori headline2
    And I press settings button
    And I click delete from settings
    And I delete post