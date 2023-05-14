Feature: Post autentication 

  Background: 
    Given User navigates to the application
  Scenario: User Post must be created
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User goes to create a new post
    And User fills the title as "test_1" and description as "test_1"
    Then User publishes the post
    And User goes to published posts
    And User confirms published to have title as "test_1"