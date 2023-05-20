import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

import { faker } from '@faker-js/faker';
Given('User enters', async function () {
    await pageFixture.login_page.verify_enter()
  });
Then('User enter the username as {string} and password as {string} and click the login button', async function (username,password) {
  if (password==='BADPASSWORD'){
    password=faker.internet.password()
  }
  if (username==='BADEMAIL'){
    username=faker.internet.email()
  }
  await pageFixture.login_page.login(username,password)
});
Given('User dont enter because there is a bad password', async function () {
  await pageFixture.login_page.bad_password()
});
Given('User dont enter because bad email', async function () {
  await pageFixture.login_page.bad_email()
});

Given('User dont enter beacause there is no email', async function () {
  await pageFixture.login_page.no_email()
});
Given('User dont enter beacause there is no password', async function () {
  await pageFixture.login_page.no_password()
});


  
