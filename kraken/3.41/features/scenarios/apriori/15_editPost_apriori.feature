Feature: Crear un nuevo post, publicarlo, y buscarlo en la lista de publicados, editar el titulo y el contenido

@user1 @web
Scenario: Como autor navego a un post, y  busco en publicados
    Given I go to page "<HOST>" "ghost/#/signin"
    And I sign in with "<USERNAME>" and "<PASSWORD>" 
    And I click new post
    And I set post attributes title and body apriori0
    And I publish the post
    When I set post attributes title and body valid apriori2
    And I publish the post
    And I go to page "<HOST>" apriori headline0
    Then I validate the post publication with title and content headline2 article_text2
    And I go to page "<HOST>" "ghost/#/posts?type=published"
    And I Click a post with title apriori headline2
    And I press settings button
    And I click delete from settings
    And I delete post