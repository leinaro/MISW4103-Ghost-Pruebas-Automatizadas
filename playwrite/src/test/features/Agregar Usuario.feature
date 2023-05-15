Feature: User Authentication tests
 import random
  Background: 
    Given User navigates to the application
  Scenario: User add user
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User goes to create a new post
    And User create new member as name "ande" and mail "a.avilar@uniandes.edu.co" and nota "aaaaa ssssssss ssssss" and click the save botton
  
  Scenario: User add user without mail
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User create new member as name "andersson" and mail "" and nota "" and click the save botton
  
  #Scenario: User edit member name
   # And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
  
    #And User edit new member as name "ander" as "juan" click the save botton
   
  Scenario: User edit mail 
   And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
   #And User edit new mail with name "aaa" and put "ander@mail.com" and click the save botton
   And User edit new mail with name "and" mail "ander@mail.com" click the save botton