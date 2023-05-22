Feature: Post autentication 

  Background: 
    Given User navigates to the application
  Scenario: User Post draft must be created
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "VALID_TITLE" and description as "VALID_DESCRIPTION"
    And User goes to draft posts
    And User confirms draft to have title
 Scenario: User Post draft must not be created because invalid title with more than 255 characters
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "INVALID_TITLE_MORE" and description as "VALID_DESCRIPTION"
    And User goes to draft posts not saving
    And User confirms draft dont exist to have title
 Scenario: User Post draft must not be created because invalid title with less than 2 characters
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "INVALID_TITLE_LESS" and description as "VALID_DESCRIPTION"
    And User goes to draft posts not saving
    And User confirms draft dont exist to have title
 Scenario: User Post draft must not be created because invalid description with more than 2000 character
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "VALID_TITLE" and description as "INVALID_DESCRIPTION_MORE"
    And User goes to draft posts not saving
    And User confirms draft dont exist to have title
  Scenario: User Post draft must not be created because invalid description with less than 1 character
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "VALID_TITLE" and description as "INVALID_DESCRIPTION_LESS"
    And User goes to draft posts not saving
    And User confirms draft dont exist to have title
  Scenario: User Post draft must be created because no description
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "VALID_TITLE" and description as ""
    And User goes to draft posts
    And User confirms draft to have title
  Scenario: User Post draft must be created because with no title
    And User enter the username as "eg.soto@uniandes.edu.co" and password as "Supermean_1" and click the login button
    And User goes to create a new post
    And User fills the title as "" and description as "VALID_DESCRIPTION"
    And User goes to draft posts
    And User confirms draft to have title
 
