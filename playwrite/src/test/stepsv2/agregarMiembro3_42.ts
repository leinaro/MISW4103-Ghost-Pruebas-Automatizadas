import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";


Given('User2 goes to staff', async function () {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.principal_page_3_42.go_staft()
  });

  
  Given('User2 goes to url staff', async function () {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.principal_page_3_42.go_to_url_staft()
  });
  Given('User2 click invite people', async function () {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.principal_page_3_42.invite()
  });

  Given('User2 put mail as {string} and role {string}', async function (mail,role) {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.principal_page_3_42.putMailAndRole(mail,role)
  });


  Given('User2 no put mail as  {string} and role {string}', async function (mail, role) {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.principal_page_3_42.NoputMailAndRole(mail,role)
  });

  Given('User2 create mail as {string} and role {string}', async function (mail, role) {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.principal_page_3_42.createMailAndRole(mail,role)
  });

  Given('User2 revoke last mail', async function () {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.principal_page_3_42.revoke()
  });