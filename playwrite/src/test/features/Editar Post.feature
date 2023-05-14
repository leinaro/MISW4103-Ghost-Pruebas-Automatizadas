Feature: User Authentication tests
  Background: 
    Given User navigates to the application
  Scenario: User Post must be edited 
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User goes to create a new post
    And User fills the title as "test_11" and description as "test_11"
    Then User publishes the post
    And User goes to published posts
    And User confirms published to have title as "test_11"
    Then User edit post
  
  Scenario: User Post must be edited descripion
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User goes to create a new post
    And User fills the title as "test_11" and description as "test_11"
    Then User publishes the post
    And User goes to published posts
    And User confirms published to have title as "test_11"
    Then User edit post description

  Scenario: User Post must be edited title
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User goes to create a new post
    And User fills the title as "test_12" and description as "test_12"
    Then User publishes the post
    And User goes to published posts
    And User confirms published to have title as "test_12"
    Then User edit post title
  Scenario: User Post on draft
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User goes to create a new post
    And User fills the title as "test_13" and description as "test_13"
    Then User publishes the post
    
    And User goes to published posts
    And User confirms published to have title as "test_13"
    Then User see post on draft
    
  Scenario: User Post setting
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User goes to create a new post
    And User fills the title as "test_14" and description as "test_14"
    Then User publishes the post
    
    And User goes to published posts
    And User confirms published to have title as "test_14"
    Then User see setting post


   