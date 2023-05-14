Feature: Post autentication 
  Background: 
    Given User2 navigates to the application
  Scenario: User2 Post draft must be created
    And User2 enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User2 goes to create a new post
    And User2 fills the title as "test_2" and description as "test_2"
    And User2 goes to draft posts
    And User2 confirms draft to have title as "test_2"