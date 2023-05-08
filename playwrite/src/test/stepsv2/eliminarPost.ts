import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

Then('User deletes post', async function () {
    await pageFixture.principal_page.delete_post()
  });


Then('User validates there is no post as {string}', async function (string:string) {
    await pageFixture.principal_page.validates_post_eliminated(string)
});