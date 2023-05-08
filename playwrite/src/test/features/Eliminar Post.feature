Feature: User Authentication tests

  Background: 
    Given User navigates to the application
  Scenario: Post must be created
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User goes to create a new post
    And User fills the title as "test_6" and description as "test_6"
    Then User publishes the post
    And User goes to published posts
    And User confirms published to have title as "test_6"
    And User deletes post
    And User validates there is no post as "test_6"
  Scenario: Post draft must be created
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User goes to create a new post
    And User fills the title as "test_7" and description as "test_7"
    And User goes to draft posts
    And User confirms draft to have title as "test_7"
    And User deletes post
    And User validates there is no post as "test_7"
  Scenario: Post Schedule must be created
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User goes to create a new post
    And User fills the title as "test_8" and description as "test_8"
    Then User publishes the post with Schedule
    And User goes to published Schedule posts
    And User confirms post Schedule to have title as "test_8"
    And User deletes post
    And User validates there is no post as "test_8"
  Scenario: Post with Link must be created
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User goes to create a new post
    And User fills the title as "test_9" and description as "test_9"
    And User fills the link as "http://localhost:2368/ghost/#/signin"
    Then User publishes the post
    And User goes to published posts
    And User confirms published to have title as "test_9"
    And User confirms published to have the link as "http://localhost:2368/ghost/#/signin"
    And User deletes post
    And User validates there is no post as "test_9"
  Scenario: Post with Link must be created and navigated
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User goes to create a new post
    And User fills the title as "test_10" and description as "test_10"
    And User fills the tag as "News"
    Then User publishes the post
    And User goes to published posts
    And User confirms published to have tag in post as "test_10"
    And User deletes post
    And User validates there is no post as "test_10"
    And User navigates to link as "http://localhost:2368/ghost/#/signin"