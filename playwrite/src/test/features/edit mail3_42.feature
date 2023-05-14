Feature: Post autentication 
  Background: 
    Given User2 navigates to the application


  Scenario: edit mail
    And User2 enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button  
    And User2 goes to staff
    And User2 click invite people
    And User2 create mail as "Mario@gmail.com" and role "loquesea"
    And User2 goes to url staff
    And User2 revoke last mail
    And User2 goes to staff
    And User2 click invite people
    And User2 create mail as "MarioEditado@gmail.com" and role "loquesea"
    And User2 goes to url staff