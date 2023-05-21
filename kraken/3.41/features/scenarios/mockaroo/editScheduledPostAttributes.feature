Feature: Crear un nuevo scheduled post, buscarlo en la lista de schedule, ir al detalle del post,
modificarlo, darle reschedule buscarlo por el nuevo titulo

@user1 @web
Scenario: Como autor creo un scheduled post, y  busco en publicados
    Given I go to page "<HOST>" "ghost/#/signin"
    And Generate mockaroo record
    And I sign in with "<USERNAME>" and "<PASSWORD>"
    And I click new post
    And I set post attributes title and body with mockaroo
    And I press settings button
    And I set url field to mockaroo
    And I close settings menu    
    And I select schedule post
    And I go to page "<HOST>" "ghost/#/posts?type=scheduled"
    And I Click a post with title mockaroo
    And Generate mockaroo record
    When I set post attributes title and body with mockaroo
    And I select reschedule post
    And I go to page "<HOST>" "ghost/#/posts?type=scheduled"
    Then I validate the schedule post with mockaroo exists