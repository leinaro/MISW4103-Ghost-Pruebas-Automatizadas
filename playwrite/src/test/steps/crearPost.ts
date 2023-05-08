import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";


setDefaultTimeout(60 * 1000 * 2)

Given('User navigates to the application', async function () {
    await pageFixture.page.goto("http://localhost:2368/ghost/#/signin")
    await pageFixture.page.screenshot({path: './pagina.png'})

});

Then('Post is created', async function () {
    console.log("b")
});

Then('User enter the username as {string}', async function (username) {
    await pageFixture.page.getByPlaceholder('jamie@example.com').fill(username);
    
});
Then('User enter the password as {string}', async function (password) {
    await pageFixture.page.getByPlaceholder('•••••••••••••••').fill(password);
});
Given('User click the login button', async function () {
    await pageFixture.page.getByRole('button', { name: 'Sign in →' }).click();
    await pageFixture.page.screenshot({path:"state.png"})
});

Given('User publishes the post', async function () {
    await pageFixture.page.getByRole('button', { name: 'Publish' }).click();
    await pageFixture.page.getByRole('button', { name: 'Continue, final review →' }).click();
    await pageFixture.page.screenshot({path:"screenshot.png"})
    await pageFixture.page.getByRole('button', { name: 'Publish post, right now' , exact: false}).waitFor();
    await pageFixture.page.getByRole('button', { name: 'Publish post, right now' , exact: false}).click({force: true});
});
Then('User goes to published posts', async function () {
    await pageFixture.page.getByRole('button', { name: 'Editor', exact: true }).click();
    await pageFixture.page.screenshot({path:"hpta.png"})
    await pageFixture.page.getByRole('link', { name: 'Posts' }).click();
    await pageFixture.page.getByRole('link', { name: 'Published', exact: true }).click();
  });
Then('User confirms published to have title as {string}', async function (test_name) {
    await pageFixture.page.getByRole('link', { name: `${test_name} By Erich Giusseppe - a few seconds ago Published` }).click({force: true});
});

  Given('User goes to create a new post', async function () {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.page.getByRole('link', { name: 'Posts', exact: true }).click();
    await pageFixture.page.getByTitle('New post').click();
  });



  Given('User fills the title as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.page.getByPlaceholder('Post title').fill(string);
  });
  Then('User navigates to link as {string}', async function (string) {
    await pageFixture.page.goto(string)
  });



  Given('User fills the description as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.page.locator('.koenig-editor__editor').fill(string);
  });



  Then('User confirms draft to have title as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.page.getByRole('link', { name: `${string} By Erich Giusseppe - a few seconds ago Draft` }).click({force: true});
  });

  Given('User goes to draft posts', async function () {
    await pageFixture.page.screenshot({path:"hpta.png"})
    await pageFixture.page.getByRole('link', { name: 'Posts' }).click();
    await pageFixture.page.getByRole('link', { name: 'Drafts', exact: true }).click();
  });
  Given('User publishes the post with Schedule', async function () {
    
    await pageFixture.page.getByRole('button', { name: 'Publish' }).click();
    await pageFixture.page.getByRole('button', { name: 'Right now' }).click();
    await pageFixture.page.getByText('Schedule for later').click();
    await pageFixture.page.getByPlaceholder('YYYY-MM-DD').fill('3000-05-07');
    await pageFixture.page.getByRole('textbox').nth(2).fill('11:34');
    await pageFixture.page.getByRole('button', { name: 'Continue, final review →' }).click();
    await pageFixture.page.screenshot({path:"screenshot.png"})
    await pageFixture.page.getByRole('button', { name: 'Publish post, on May 7th' }).waitFor();
    await pageFixture.page.getByRole('button', { name: 'Publish post, on May 7th' }).click({force: true});
});
Then('User confirms post Schedule to have title as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.page.getByRole('link', { name: `${string} By Erich Giusseppe - a few seconds ago Scheduled`}).click({force: true});
  });
  Then('User goes to published Schedule posts', async function () {
    await pageFixture.page.getByRole('button', { name: 'Editor' }).click();
    await pageFixture.page.getByRole('link', { name: 'Posts' }).click();
    await pageFixture.page.getByRole('link', { name: 'Scheduled', exact: true }).click();
  });

Given('User fills the link as {string}', async function (string) {
    await pageFixture.page.getByRole('button', { name: 'Settings' }).click();
    await pageFixture.page.getByRole('button', { name: 'Meta data' }).click();
    await pageFixture.page.locator('input[name="post-setting-canonicalUrl"]').fill(string);
    await pageFixture.page.getByRole('button', { name: 'Settings' }).click();
});


Then('User confirms published to have the link as {string}', async function (string) {
    await pageFixture.page.getByRole('button', { name: 'Settings' }).click();
    await pageFixture.page.getByRole('button', { name: 'Meta data' }).click();
    const value= await pageFixture.page.locator('input[name="post-setting-canonicalUrl"]').inputValue();
    if(value !== string) {
        throw new Error(string);
    }
    await pageFixture.page.getByRole('button', { name: 'Settings' }).click();
});
Given('User fills the tag as {string}', async function (string) {
    await pageFixture.page.getByRole('button', { name: 'Settings' }).click();
    await pageFixture.page.locator('#tag-input input').click();
    await pageFixture.page.getByRole('option', { name: 'News' }).click();
  });


  Then('User confirms published to have tag in post as {string}', async function (string) {
    await pageFixture.page.getByRole('link', { name: `${string} By Erich Giusseppe in News - a few seconds ago Published` }).click({force: true});
  });


