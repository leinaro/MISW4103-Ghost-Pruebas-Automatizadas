Feature: Post autentication 
  Background: 
    Given User2 navigates to the application
  Scenario: Post must be created
    And User2 enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User2 goes to create a new post
    And User2 fills the title as "test_1" and description as "test_1"
    Then User2 publishes the post
    And User2 goes to published posts
    And User2 confirms published to have title as "test_1"
  Scenario: Post draft must be created
    And User2 enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User2 goes to create a new post
    And User2 fills the title as "test_2" and description as "test_2"
    And User2 goes to draft posts
    And User2 confirms draft to have title as "test_2"
  Scenario: Post Schedule must be created
    And User2 enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User2 goes to create a new post
    And User2 fills the title as "test_3" and description as "test_3"
    Then User2 publishes the post with Schedule
    And User2 goes to published Schedule posts
    And User2 confirms post Schedule to have title as "test_3"
  Scenario: Post with Link must be created
    And User2 enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User2 goes to create a new post
    And User2 fills the link as "http://localhost:2368/ghost/#/signin"
    And User2 fills the title as "test_4" and description as "test_4"
    And User2 publishes post in a different link way as "test_4"

  Scenario: Post with tag must be created
    And User2 enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button  
    And User2 goes to create a new post
    And User2 fills the tag as "News"
    And User2 fills the title as "test_5" and description as "test_5"
    And User2 publishes post in a different way as "test_5"





    
  







  