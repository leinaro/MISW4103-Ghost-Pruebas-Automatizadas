import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

Then('User deletes post', async function () {
    await pageFixture.principal_page.delete_post()
  });


