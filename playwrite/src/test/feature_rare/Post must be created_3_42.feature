Feature: Post autentication 
  Background: 
    Given User2 navigates to the application
  Scenario: User2 Post must be created
    And User2 enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User2 goes to create a new post
    And User2 fills the title as "test_1" and description as "test_1"
    Then User2 publishes the post
    And User2 goes to published posts
    And User2 confirms published to have title as "test_1"