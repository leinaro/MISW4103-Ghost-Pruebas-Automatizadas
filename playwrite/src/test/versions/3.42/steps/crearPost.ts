import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { LoginPage } from "../pages/loginPage";


setDefaultTimeout(60 * 1000 * 2)
Given('User2 navigates to the application', async function () {
  await pageFixture.login_page.navigation()
});

Then('User2 enter the username as {string} and password as {string} and click the login button', async function (username,password) {
  
  await pageFixture.login_page.login(username,password)
  
});

Given('User2 publishes the post', async function () {
  await pageFixture.principal_page.publish_post()
});
Then('User2 goes to published posts', async function () {
  await pageFixture.principal_page.user_goes_to_published()
  });
Then('User2 confirms published to have title as {string}', async function (test_name) {
  await pageFixture.principal_page.published_have_title(test_name)
});

  Given('User2 goes to create a new post', async function () {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.principal_page.go_create_new_post()
  });
  Given('User2 publishes post in a different way as {string}', async function (string) {
    await pageFixture.principal_page.user_published_diferent(string)
  });

  Given('User2 publishes post in a different link way as {string}', async function (string) {
    await pageFixture.principal_page.user_published_diferent_link(string)
  });


  Given('User2 fills the title as {string} and description as {string}', async function (string,description) {
    await pageFixture.principal_page.user_fill_title_description(string,description)
  });
  Then('User2 navigates to link as {string}', async function (link) {
    await pageFixture.principal_page.user_goes_to_link(link)
  });

  Then('User2 confirms draft to have title as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.principal_page.confirm_draft_exist(string)
  });

  Given('User2 goes to draft posts', async function () {
    await pageFixture.principal_page.user_goes_to_draft()
  });
  Given('User2 publishes the post with Schedule', async function () {
    await pageFixture.principal_page.user_fills_Schedule()
});

Then('User2 confirms post Schedule to have title as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.principal_page.user_confirms_Schedule(string)
  });
  Then('User2 goes to published Schedule posts', async function () {
    await pageFixture.principal_page.user_goes_to_schedule()
  });

Given('User2 fills the link as {string}', async function (string) {
    await pageFixture.principal_page.user_fills_the_link(string)
});


Then('User2 confirms published to have the link as {string}', async function (string) {
    await pageFixture.principal_page.user_confirms_link(string)
});
Given('User2 fills the tag as {string}', async function (string) {
    await pageFixture.principal_page.user_fills_tag(string)
  });


  Then('User2 confirms published to have tag in post as {string}', async function (string) {
    await pageFixture.principal_page.user_confirms_tag_post(string)
  });
  