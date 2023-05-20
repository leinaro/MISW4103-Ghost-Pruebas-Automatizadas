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
  Scenario: User Post must not be created because invalid title
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "INVALID_TITLE_LESS" and description as "VALID_DESCRIPTION"
    Then User checks if the publish button exists
  Scenario: User Post must not be created because invalid description
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "INVALID_TITLE_LESS" and description as "INVALID_DESCRIPTION_LESS"
    Then User checks if the publish button exists
  Scenario: User Post must not be created because no title 
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "" and description as "VALID_DESCRIPTION"
    Then User checks if the publish button exists
  Scenario: User Post must should let create with no title 
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "" and description as "VALID_DESCRIPTION"
    Then User checks if the publish button exists positive
  Scenario: User Post must not be created because no description
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "VALID_TITLE" and description as ""
    Then User checks if the publish button exists
  Scenario: User Post draft must not be created because no description and no title
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "" and description as ""
    Then User checks if the publish button exists
  Scenario: User Post must not be created because invalid description
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "VALID_TITLE" and description as "INVALID_DESCRIPTION_MORE"
    Then User checks if the publish button exists
    
  


