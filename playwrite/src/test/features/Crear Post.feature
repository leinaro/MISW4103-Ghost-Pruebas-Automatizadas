Feature: Post autentication 

  Background: 
    Given User navigates to the application
  Scenario: Post must be created
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User goes to create a new post
    And User fills the title as "test_1" and description as "test_1"
    Then User publishes the post
    And User goes to published posts
    And User confirms published to have title as "test_1"
  Scenario: Post draft must be created
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "test_2" and description as "test_2"
    And User goes to draft posts
    And User confirms draft to have title as "test_2"
  Scenario: Post Schedule must be created
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "test_3" and description as "test_3"
    Then User publishes the post with Schedule
    And User goes to published Schedule posts
    And User confirms post Schedule to have title as "test_3"

  Scenario: Post with Link must be created
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User goes to create a new post
    And User fills the title as "test_4" and description as "test_4"
    And User fills the link as "http://localhost:2368/ghost/#/signin"
    Then User publishes the post
    And User goes to published posts
    And User confirms published to have title as "test_4"
    And User confirms published to have the link as "http://localhost:2368/ghost/#/signin"

  Scenario: Post with tag must be created
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button  
    And User goes to create a new post
    And User fills the title as "test_5" and description as "test_5"
    And User fills the tag as "News"
    Then User publishes the post
    And User goes to published posts
    And User confirms published to have tag in post as "test_5"



    
  







  