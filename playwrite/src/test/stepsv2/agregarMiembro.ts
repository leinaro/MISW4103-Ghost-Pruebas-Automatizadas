import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { LoginPage } from "../pages/loginPage";


setDefaultTimeout(60 * 1000 * 2)
Given('User create new member as name {string} and mail {string} and nota {string} and click the save botton', async function (username,usermail,nota) {
    await pageFixture.principal_page.createNewMembers(username,usermail,nota);
 
});
  
Given('User edit new member as name {string} as {string} click the save botton', async function (username,newusername) {
    await pageFixture.principal_page.editMembers(username,newusername);
 
});


Given('User edit new mail with name {string} mail {string} click the save botton', async function (username,newmail) {
    await pageFixture.principal_page.editMailMembers(username,newmail);
 
});