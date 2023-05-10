const { Given, When, Then } = require('@cucumber/cucumber');
const { assert } = require('chai');
const expect = require('chai').expect;

Given, When, Then('I go to page {kraken-string} {kraken-string}', async function (host, url) {
    await new Promise(r => setTimeout(r, 5000))
    console.log(">>>>>>>>>>>"+host+url);
    return await this.driver.url(host+url);
});

When('I sign in with {kraken-string} and {kraken-string}', async function (user, pass) {
    let elementUser = await this.driver.$("#ember8");
    await elementUser.setValue(user);
    console.log(">>>>>>>>>>>"+user);
    let elementPass = await this.driver.$("#ember10");
    await elementPass.setValue(pass);
    console.log(">>>>>>>>>>>"+pass);
    await new Promise(r => setTimeout(r, 300))
    let elementLoginButton = await this.driver.$("#ember12");
    return await elementLoginButton.click();
});

When('I click new post', async function () {
    await new Promise(r => setTimeout(r, 300))
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

When('I update post attributes title {kraken-string} and body {kraken-string}', async function (title, content) {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(title);
    let elementContent = await this.driver.$(".koenig-editor__editor.__mobiledoc-editor");
    return await elementContent.setValue(content);
});

When('I click invite people', async function () {
    let elementInvitePeople = await this.driver.$("button.gh-btn.gh-btn-green");
    return await elementInvitePeople.click();
});

When('I set new member email {kraken-string}', async function (email) {
    let elementEmail = await this.driver.$("#new-user-email");
    await elementEmail.setValue(email);
    await new Promise(r => setTimeout(r, 300))
    let sendButton = await this.driver.$("button.gh-btn.gh-btn-green.gh-btn-icon.ember-view");
    return await sendButton.click();
});

When('I publish the post', async function () {
    
    let publishDropdown = await this.driver.$(".gh-publishmenu-trigger");
    await publishDropdown.click();
    let publishButton = await this.driver.$(".gh-publishmenu-button");
    return await publishButton.click();
 
});

When('I navigate to user {kraken-string} details', async function (name) {
    let userItem = await this.driver.$(".//*//article[contains(@class, 'apps-card-app')]//*//h3[text() = '" + name + "']");
    return await userItem.click();
});

When('I update the user name to {kraken-string}', async function (newName) {
    let userName = await this.driver.$("#user-name");
    await userName.setValue(newName);
    await new Promise(r => setTimeout(r, 300))
    let elementSave = await this.driver.$("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
    return await elementSave.click();
});

When('I update the user email to {kraken-string}', async function (newEmail) {
    let userEmail = await this.driver.$("#user-email");
    await userEmail.setValue(newEmail);
    await new Promise(r => setTimeout(r, 300))
    let elementSave = await this.driver.$("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
    return await elementSave.click();
});

When('I click on view post from settings', async function () {
    let settingsButton = await this.driver.$(".post-settings");
    await settingsButton.click();
    let viewPostLink = await this.driver.$("a.post-view-link");
    return await viewPostLink.click();
});

Then('I validate the post publication with title {kraken-string} and content {kraken-string}', async function (title, content) {
    let postTitle = await this.driver.$(".//*//h1[text() = '" + title + "']");
    expect(await postTitle.isExisting()).to.be.true;
    let postContent = await this.driver.$(".post-full-content > .post-content").getText();
    return expect(postContent).to.have.string(content);

});

Then('I validate the post with {kraken-string} exists', async function (name) {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + name + "']");
    return expect(await postItem.isExisting()).to.be.true;
});

Then('I validate the post with {kraken-string} not exists', async function (name) {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + name + "']");
    return expect(await postItem.isExisting()).to.not.be.true;
});

Then('I validate the draft post with {kraken-string} exists', async function (name) {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//h3[text() = '" + name + "']");
    return expect(await postItem.isExisting()).to.be.true;
});

Then('I validate the schedule post with {kraken-string} exists', async function (name) {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//h3[text() = '" + name + "']");
    return expect(await postItem.isExisting()).to.be.true;
});

Then('I validate the user {kraken-string} exists', async function (email) {
    await new Promise(r => setTimeout(r, 1000))

    let userItem = await this.driver.$(".//*//article[contains(@class, 'apps-card-app')]//*//h3[text() = '" + email + "']");
    return expect(await userItem.isExisting()).to.be.true;
});

Then('I validate the user email {kraken-string} exists', async function (email) {
    await new Promise(r => setTimeout(r, 3000))
    let userEmail = await this.driver.$("#user-email").getValue();
    await new Promise(r => setTimeout(r, 3000));
    return expect( userEmail).to.be.equal(email);

});

When, Then('I revoke invitations', async function () {
    await new Promise(r => setTimeout(r, 1000))
    let revokeButton = await this.driver.$("a.apps-configured-action.red-hover");
    return await revokeButton.click()
});

Then('I validate invitation for {kraken-string} not exists', async function (email) {
    let userItem = await this.driver.$(".//*//article[contains(@class, 'apps-card-app')]//*//h3[text() = '" + email + "']");
    return expect(await userItem.isExisting()).to.be.false;
});


Then('I validate invalid email error is visible', async function () {
    await new Promise(r => setTimeout(r, 1000))

    let userItem = await this.driver.$(".//*//p[text() = 'Invalid Email.']");
    return expect(await userItem.isExisting()).to.be.true;
});

Then('I validate error banner is visible', async function () {
    let errorBanner = await this.driver.$("#ember257");
    return expect(await errorBanner.isExisting()).to.be.true;
});

When('I go to draft posts', async function () {
    let elementPostsButton = await this.driver.$("a[href='#/posts/?type=draft']");
    return await elementPostsButton.click();
});


When('I select schedule post', async function () {
    let publishDropdown = await this.driver.$(".ember-basic-dropdown-trigger");
    await publishDropdown.click();
    let unpublishRadio = await this.driver.$(".//*//div[contains(@class, 'gh-publishmenu-radio')]//*//div[text() = 'Schedule it for later']");
    await unpublishRadio.click();
    let publishButton = await this.driver.$(".gh-publishmenu-footer > .gh-publishmenu-button");
    return await publishButton.click();

});

When('I select reschedule post', async function () {

    await new Promise(r => setTimeout(r, 300))
    let publishDropdown = await this.driver.$(".ember-basic-dropdown-trigger");
    await publishDropdown.click();
    let publishButton = await this.driver.$(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view");
    return await publishButton.click();

});

When('I create new tag with {kraken-string}', async function (name) {
    let elementNewTag = await this.driver.$("a[href='#/tags/new/']");
    await elementNewTag.click();
    let elementTitle = await this.driver.$("#tag-name");
    await elementTitle.setValue(name);
    let saveButton = await this.driver.$(".gh-canvas-header > .view-actions > button");
    return await saveButton.click();
});

When('I select tag with name {kraken-string}', async function (name) {
    let menuButton = await this.driver.$(".post-settings");
    await menuButton.click();
    let tagCombo = await this.driver.$("#tag-input > ul > input.ember-power-select-trigger-multiple-input");
    await tagCombo.setValue(name);
    await new Promise(r => setTimeout(r, 3000))
    let tagOption = await this.driver.$(".//*//li[text() = '" + name + "']");
    return await tagOption.click();
});

When('I press settings button', async function () {
    let menuButton = await this.driver.$("button.post-settings");
    return await menuButton.click();
});

When('I set url field to {kraken-string}', async function (url) {
    let elementUser = await this.driver.$("#url");
    return await elementUser.setValue(url);
});

Then('I check page full title with {kraken-string}', async function (title) {
    await new Promise(r => setTimeout(r, 5000))
    let titleItem = await this.driver.$(".//*//h1[text() = '" + title + "']");
    return expect(await titleItem.isExisting()).to.be.true;
});


When('I close settings menu', async function () {
	let elementCloseSettings = await this.driver.$(".settings-menu-header-action");
    return await elementCloseSettings.click();
});

When('I filter posts by tag with name {kraken-string}', async function (tag) {
    let elementTagsCombo = await this.driver.$(".gh-contentfilter-tag > div > .ember-power-select-selected-item");
    await elementTagsCombo.click();
    let elementTagOption = await this.driver.$(".//*//li[text() = '" + tag + "']");
    return await elementTagOption.click();
});


When('I click delete from settings', async function () {
    await new Promise(r => setTimeout(r, 3000))
    let deleteButton = await this.driver.$(".gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button");
    deleteButton.scrollIntoView();
    deleteButton.executeScript("window.scrollBy(0,-350)", "");
    await new Promise(r => setTimeout(r, 2000))
    return await deleteButton.click();
});

When('I delete post', async function () {
    await new Promise(r => setTimeout(r, 5000))
    let spanButton = await this.driver.$("button.gh-btn-red");
    return await spanButton.click();
});

When('I Click a post with title {kraken-string}', async function (title) {
    await new Promise(r => setTimeout(r, 2000))
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + title + "']");
    return await postItem.click();
});

Then('I can not get page', async function () {
    let errorCode = await this.driver.$(".error-code").getText();
    await expect(errorCode).to.have.string("404");
    let errorDescription = await this.driver.$(".error-description").getText();
    return expect(errorDescription).to.have.string("not found");
});