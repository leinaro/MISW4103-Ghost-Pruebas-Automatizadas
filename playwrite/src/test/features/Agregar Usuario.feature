Feature: User Authentication tests
 import random
  Background: 
    Given User navigates to the application
Scenario: User add user
  And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
  And User goes to create a new post
  And User create fake user
  And User create new member as name "fakerName" and mail "fakerCorreo" and nota "aaaaa ssssssss ssssss" and click the save botton
  
Scenario: User add user without mail
  And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
  And User create new member as name "fakerName" and mail "" and nota "" and click the save botton
  

Scenario: User edit mail 
  And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
  And User go to members
  And User seachMember name "fakerName" mail "fakerCorreo" 
  And User edit new mail with name "fakerName" mail "CorreoEditadoFaker@hotmail.com" click the save botton
 
Scenario: User edit name member
  And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
  And User go to members
  And User seachMember name "fakerName" mail "fakerCorreoEditado"
 Then User put member name "dataJsonNumberThree" and mail ""
 
Scenario: User delete name member
  And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
  And User go to members
  And User create new member as name "fakerNameFour" and mail "fakerCorreoFour" and nota "aaaaa ssssssss ssssss" and click the save botton
 Then User put member name "" and mail ""
  
 Scenario: User put name member
  And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
  And User go to members
  And User create new member as name "fakerNameFour" and mail "fakerCorreoFour" and nota "aaaaa ssssssss ssssss" and click the save botton
 #Then User put member name "fakerNameFour" and mail "" 
Scenario: User create note member
  And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
  And User go to members
Then User create new member as name "fakerNameFive" and mail "fakerCorreoFive@.hotmail.com" and nota "Se crea esta nota como prueba" and click the save botton
Scenario:  User edit note  member 
  And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
  And User go to members
 # And User seachMember name "fakerName" mail "fakerCorreoEditado"
  #Then User put note on member "hola "
