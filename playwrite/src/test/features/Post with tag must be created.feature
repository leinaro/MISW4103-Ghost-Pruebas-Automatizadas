Feature: Post autentication 
  Background: 
    Given User navigates to the application
  Scenario: User Post with tag must be created
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button  
    And User goes to create a new post
    And User fills the tag as "News"
    And User fills the title as "VALID_TITLE" and description as "VALID_DESCRIPTION"
    Then User publishes the post
    And User goes to published posts
    And User confirms published to have tag in post