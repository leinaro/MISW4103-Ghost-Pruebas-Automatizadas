Feature: User Authentication tests
 import random
  Background: 
    Given User navigates to the application
  Scenario: add user
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User goes to create a new post
    And User create new member as name "ande" and mail "a.avilar@uniandes.edu.co" and nota "aaaaa ssssssss ssssss" and click the save botton
  