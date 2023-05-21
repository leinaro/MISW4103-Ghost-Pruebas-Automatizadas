Feature: Crear un nuevo post, dejarlo en draft, y buscarlo en la lista de draft

	
	@user2 @web
Scenario: Como autor creo un post en draft, y lo busco en lista de draft
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    When I click new post
    And I set post attributes title and body valid apriori2
    And I go to page "<HOST>" "ghost/#/posts?type=draft"
    Then I validate the post with valid apriori headline exists2
    And I go to page "<HOST>" "ghost/#/posts?type=draft"
    And I Click a post with title apriori headline2
    And I press settings button
    And I click delete from settings
    And I delete post

