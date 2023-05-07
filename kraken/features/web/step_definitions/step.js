const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

Given, When('I go to page {kraken-string} {kraken-string}', async function (host, url) {
    return await this.driver.url(host+url);
});


When('I sign in with {kraken-string} and {kraken-string}', async function (user, pass) {
    let elementUser = await this.driver.$("#ember8");
    await elementUser.setValue(user);
    let elementPass = await this.driver.$("#ember10");
    await elementPass.setValue(pass);
    await new Promise(r => setTimeout(r, 300))
    let elementLoginButton = await this.driver.$("#ember12");
    return await elementLoginButton.click();
});

When('I click new post', async function () {
    let elementNewPost = await this.driver.$(".gh-nav-new-post");
    return await elementNewPost.click();
});

When('I set post attributes title {kraken-string} and body {kraken-string}', async function (title, content) {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(title);
    let elementContent = await this.driver.$(".koenig-editor__editor");
    await elementContent.click();
    await this.deviceClient.browser.keys(["-"]);
    return await elementContent.setValue(content);
});

When('I publish the post', async function () {
    
    let publishDropdown = await this.driver.$(".gh-publishmenu-trigger");
    await publishDropdown.click();
    let publishButton = await this.driver.$(".gh-publishmenu-button");
    return await publishButton.click();
 
});



Then('I validate the post with {kraken-string} exists', async function (name) {
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + name + "']");
    return expect(await postItem.isExisting()).to.be.true;
});

