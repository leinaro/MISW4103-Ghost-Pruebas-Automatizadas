import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
Then('User deletes post', async function () {
    await pageFixture.page.getByRole('button', { name: 'Settings' }).click();
    await pageFixture.page.getByRole('button', { name: 'Delete post' }).click();
    await pageFixture.page.getByRole('button', { name: 'Delete', exact: true }).click();
  });


Then('User validates there is no post as {string}', async function (string) {
    const elements = await pageFixture.page.locator('h3.gh-content-entry-title').all();
    let found = false;
    for (const element of elements) {
        if (await element.innerText() === 'text_3') {
            found = true;
            break;
        }
    }
    expect(found).toBe(false);
});

