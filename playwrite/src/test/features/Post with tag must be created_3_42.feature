Feature: Post autentication 
  Background: 
    Given User2 navigates to the application
  Scenario: User2 Post with tag must be created
    And User2 enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button  
    And User2 goes to create a new post
    And User2 fills the tag as "News"
    And User2 fills the title as "test_5" and description as "test_5"
    And User2 publishes post in a different way as "test_5"
    And User2 goes to published posts
    And User2 confirms published to have tag in post as "test_5"