Feature: Post autentication 
  Background: 
    Given User2 navigates to the application
  Scenario: User2 Post Schedule must be created
    And User2 enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User2 goes to create a new post
    And User2 fills the title as "test_3" and description as "test_3"
    Then User2 publishes the post with Schedule
    And User2 goes to published Schedule posts
    And User2 confirms post Schedule to have title as "test_3"