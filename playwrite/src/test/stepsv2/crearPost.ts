import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { LoginPage } from "../pages/loginPage";
import { faker } from '@faker-js/faker';
let title_g:string;
setDefaultTimeout(2000)
Given('User navigates to the application', async function () {
  await pageFixture.login_page.navigation()
});



Given('User publishes the post', async function () {
  await pageFixture.principal_page.publish_post()
});
Then('User goes to published posts', async function () {
  await pageFixture.principal_page.user_goes_to_published()
  });
Then('User confirms published to have title as {string}', async function (test_name) {
  await pageFixture.principal_page.published_have_title(test_name)
});

  Given('User goes to create a new post', async function () {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.principal_page.go_create_new_post()
  });

  Given('User fills the title as {string} and description as {string}', async function (title,description) {
    
    if(title==="VALID_TITLE"){
      const randomLength = faker.datatype.number({min: 1, max: 255});
      const randomString = faker.random.alphaNumeric(randomLength);
      title=randomString
    }
    else if(title==="INVALID_TITLE_MORE"){
      const randomLength = faker.datatype.number({min: 256, max: 1000});
      const randomString = faker.random.alphaNumeric(randomLength);
      title=randomString
    }
    else if(title==="INVALID_TITLE_LESS"){
      const randomLength = 1
      const randomString = faker.random.alphaNumeric(randomLength);
      title=randomString
    }
    if(description==="VALID_DESCRIPTION"){
      const randomLength = faker.datatype.number({min: 100, max: 2000});
      const randomString = faker.random.alphaNumeric(randomLength);
      description=randomString
    }
    else if(description==="INVALID_DESCRIPTION_LESS"){
      const randomLength = faker.datatype.number({min: 1, max: 99});
      const randomString = faker.random.alphaNumeric(randomLength);
      description=randomString
    }
    else if(description==="INVALID_DESCRIPTION_MORE"){
      const randomLength = faker.datatype.number({min: 2000, max: 4000});
      const randomString = faker.random.alphaNumeric(randomLength);
      description=randomString
    }
    title_g=title
    await pageFixture.principal_page.user_fill_title_description(title,description)
    if (title===""){
      title_g="(Untitled)"
    }
  });
  Then('User navigates to link as {string}', async function (link) {
    await pageFixture.principal_page.user_goes_to_link(link)
  });
  Then('User confirms draft to have title', async function () {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.principal_page.confirm_draft_exist(title_g)
  });

  Then('User confirms draft to have title as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.principal_page.confirm_draft_exist(string)
  });
  Then("User confirms draft dont exist to have title", async function() {
    await pageFixture.principal_page.confirm_draft_dont_exist(title_g)
  })

  Given('User goes to draft posts', async function () {
    await pageFixture.principal_page.user_goes_to_draft()
  });
  Given('User publishes the post with Schedule', async function () {
    await pageFixture.principal_page.user_fills_Schedule()
});

Then('User confirms post Schedule to have title as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.principal_page.user_confirms_Schedule(string)
  });
  Then('User goes to published Schedule posts', async function () {
    await pageFixture.principal_page.user_goes_to_schedule()
  });
  Then('User goes to draft posts not saving', async function () {
    await pageFixture.principal_page.user_goes_to_draft_not_saving()
  });
  

Given('User fills the link as {string}', async function (string) {
    await pageFixture.principal_page.user_fills_the_link(string)
});


Then('User confirms published to have the link as {string}', async function (string) {
    await pageFixture.principal_page.user_confirms_link(string)
});
Given('User fills the tag as {string}', async function (string) {
    await pageFixture.principal_page.user_fills_tag(string)
  });


  Then('User confirms published to have tag in post as {string}', async function (string) {
    await pageFixture.principal_page.user_confirms_tag_post(string)
  });
Then('User checks if the publish button exists', async function () {
  // Write code here that turns the phrase above into concrete actions
  await pageFixture.principal_page.checks_publish_exist()
});
Then('User checks if the publish button exists positive', async function () {
  // Write code here that turns the phrase above into concrete actions
  await pageFixture.principal_page.checks_publish_exist_positive()
});