Feature: User Authentication tests
 import random
  Background: 
    Given User navigates to the application
Scenario:  User edit note  member 
  And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
  And User go to members
  And User create new member as name "fakerNameSix" and mail "fakerCorreoSix" and nota "Comentario Sobre escrito y EDITADO" and click the save botton
  #And User seachMember name "fakerNameSix" mail "fakerCorreoSix"


  #Scenario: User edit member name
   # And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
  
   # And User edit new member as name "ander" as "juan" click the save botton
   #Scenario: edit note member
#Scenario: delele note member
#Scenario:Seach by filters
#Scenario: Filters empty
#Scenario: Export all members on csv
#Create tag
#Edit tag
#Delete name tag
#Edit tag's slug
#Put tag description
#Delete tag's slug
#Delete tag's description
#Delete page
#Edit page