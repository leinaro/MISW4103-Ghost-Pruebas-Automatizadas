Feature: Post autentication 

  Background: 
    Given User navigates to the application
  Scenario: User Post draft must be created
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "test_2" and description as "test_2"
    And User goes to draft posts
    And User confirms draft to have title as "test_2"