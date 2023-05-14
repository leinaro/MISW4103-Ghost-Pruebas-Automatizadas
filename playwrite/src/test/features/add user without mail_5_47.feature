Feature: User Authentication tests
 import random
  Background: 
    Given User navigates to the application

  Scenario: add user without mail
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User create new member as name "andersson" and mail "" and nota "" and click the save botton
  