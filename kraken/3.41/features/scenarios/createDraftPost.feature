Feature: Crear un nuevo post, dejarlo en draft, y buscarlo en la lista de draft

	
	@user2 @web
Scenario: Como autor creo un post en draft, y lo busco en lista de draft
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    When I click new post
    And I set post attributes title "$name_1" and body "$string_1"
    And I go to page "<HOST>" "ghost/#/posts?type=draft"
    Then I validate the draft post with "$$name_1" exists

