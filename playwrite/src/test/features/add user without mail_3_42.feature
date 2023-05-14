Feature: Post autentication 
  Background: 
    Given User2 navigates to the application


  Scenario: add user without mail
  And User2 enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button  
    And User2 goes to staff
    And User2 click invite people
    And User2 no put mail as  "" and role "loquesea"
    And User2 goes to url staff