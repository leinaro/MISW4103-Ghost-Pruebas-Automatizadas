Feature: Post autentication 

  Background: 
    Given User navigates to the application
  Scenario: User Post Schedule must be created
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "test_3" and description as "test_3"
    Then User publishes the post with Schedule
    And User goes to published Schedule posts
    And User confirms post Schedule to have title as "test_3"