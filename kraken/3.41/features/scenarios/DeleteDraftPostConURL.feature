Feature: Crear un post,agregarle una url, publicarlo, validar la url, eliminarlo validar que la pagina ya no existe

@user1 @web
Scenario: Como autor creo un post, le agrego url, lo elimino y luego valido que no existe
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>"
    When I click new post
    And I set post attributes title "$number_1" and body "$string_1"
    And I press settings button
    And I set url field to "$name_2"
    And I close settings menu
    And I publish the post
    And I go to page "<HOST>" "$$name_2"
    Then I check page full title with "$$number_1"
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    And I Click a post with title "$$number_1"
    And I press settings button
    And I click delete from settings
    And I delete post
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    Then I validate the post with "$number_1" not exists
    And I go to page "<HOST>" "$$name_2"
    Then I can not get page
