Feature: Login works
 import random
  Background: 
    Given User navigates to the application
  Scenario: User Login works 
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button 
    And User enters
  Scenario: User Login does not have correct password
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "BADPASSWORD" and click the login button 
    And User dont enter because there is a bad password
  Scenario: User Login does not have correct email
    And User enter the username as "BADEMAIL" and password as "Supermean_1" and click the login button 
    And User dont enter because bad email 
  Scenario: User Login does not put an email good password
    And User enter the username as "" and password as "Supermean_1" and click the login button 
    And User dont enter beacause there is no email 
  Scenario: User Login does not put an email good password
    And User enter the username as "" and password as "BADPASSWORD" and click the login button 
    And User dont enter beacause there is no email 
  Scenario: User Login does not put a password
    And User enter the username as "BADEMAIL" and password as "" and click the login button 
    And User dont enter beacause there is no password
  Scenario: User Login dosent work, because bad email bad password
    And User enter the username as "BADEMAIL" and password as "BADPASSWORD" and click the login button 
    And User dont enter because bad email
  Scenario: User Login does not put a password
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "" and click the login button 
    And User dont enter beacause there is no password
  
  


