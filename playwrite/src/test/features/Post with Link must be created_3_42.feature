Feature: Post autentication 
  Background: 
    Given User2 navigates to the application
  Scenario: User2 Post with Link must be created
    And User2 enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User2 goes to create a new post
    And User2 fills the link as "http://localhost:2368/ghost/#/signin"
    And User2 fills the title as "test_4" and description as "test_4"
    And User2 publishes post in a different link way as "test_4"
    And User2 goes to published posts
    And User2 confirms published to have title as "test_4"
    And User2 confirms published to have the link as "http://localhost:2368/ghost/#/signin"