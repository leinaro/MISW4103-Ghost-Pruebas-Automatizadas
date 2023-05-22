Feature: User Authentication tests
  Background: 
    Given User navigates to the application
  Scenario: User Post with Link must be created and eliminated
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "VALID_TITLE" and description as "VALID_DESCRIPTION"
    And User fills the link as "http://localhost:2368/ghost/#/signin"
    Then User publishes the post
    And User goes to published posts
    And User confirms published to have title
    And User confirms published to have the link as "http://localhost:2368/ghost/#/signin"
    And User deletes post
    And User validates there is no post
  Scenario: User Post must be created and eliminated
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
     And User goes to create a new post
    And User fills the title as "VALID_TITLE" and description as "VALID_DESCRIPTION"
    Then User publishes the post
    And User goes to published posts
    And User confirms published to have title
    And User deletes post
    And User validates there is no post
  Scenario: User Post draft must be created and eliminated
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "VALID_TITLE" and description as "VALID_DESCRIPTION"
    And User goes to draft posts
    And User confirms draft to have title
    And User deletes post
    And User validates there is no post
  Scenario: User Post Schedule must be created and eliminated
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "VALID_TITLE" and description as "VALID_DESCRIPTION"
    Then User publishes the post with Schedule
    And User goes to published Schedule posts
    And User confirms post Schedule to have title
    And User deletes post
    And User validates there is no post
  Scenario: User Post with Link must be created and eliminated
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "VALID_TITLE" and description as "VALID_DESCRIPTION"
    And User fills the link as "http://localhost:2368/ghost/#/signin"
    Then User publishes the post
    And User goes to published posts
    And User confirms published to have title
    And User confirms published to have the link as "http://localhost:2368/ghost/#/signin"
    And User deletes post
    And User validates there is no post
  Scenario: User Post with Link must be created and navigated and eliminated
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "VALID_TITLE" and description as "VALID_DESCRIPTION"
    And User fills the tag as "News"
    Then User publishes the post
    And User goes to published posts
    And User confirms published to have tag in post
    And User deletes post
    And User validates there is no post
    And User navigates to link as "http://localhost:2368/ghost/#/signin"

