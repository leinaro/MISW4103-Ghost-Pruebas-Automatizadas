const { Given, When, Then } = require('@cucumber/cucumber');
const { assert } = require('chai');
const expect = require('chai').expect;
var krakenNode = require('kraken-node');
delete krakenNode['generateValueForKey'];
var record = null
var previousRecord = null
var Mockaroo = require('mockaroo');
var client = new Mockaroo.Client({
  apiKey: '9655b2d0' // see http://mockaroo.com/api/docs to get your api key
})

var aprioriData = readAriclesFile(); 

function readAriclesFile(){
    const dataJson = require('../../../articles-apriori.json');
    console.log(typeof dataJson);
    console.log(dataJson);
    return dataJson;
}

client.generate({
    count: 100,
    schema: 'articles'
  }).then(function(records) {
    this.records = records
  });

function generateMockarooRecord() {
    console.log("iarl---"+this.record)
    console.log("iarl---"+this.previousRecord)

    if (this.record != undefined){
        console.log("iarl---siiii")
        this.previousRecord = this.record
    }
    
    let random = Math.floor(Math.random() * (this.records.length - 0 + 1) + 0)
    record = this.records[random];
    console.log('record ' + random, 'headline:' + record.headline + ', tags:' + record.tags);
    return record 
}



Given ('Generate mockaroo record', async function() {
    console.log(">>>>>>>>>>> generate mockaroo record");
    if (this.record != undefined){
        console.log("iarl---siiii")
        this.previousRecord = this.record
    }
    this.record = generateMockarooRecord()
});

Given, When, Then('I go to previous page {kraken-string} post details', async function (host) {
    await new Promise(r => setTimeout(r, 5000))
    console.log("iarl >>>>")
    console.log("iarl >>>>"+host)
    console.log("iarl >>>>"+this.previousRecord)
    console.log(">>>>>>>>>>>"+host+this.previousRecord.source.replace(".", "-"));
    return await this.driver.url(host+this.previousRecord.source.replace(".", "-"));
});

Given, When, Then('I go to page {kraken-string} post details', async function (host) {
    await new Promise(r => setTimeout(r, 5000))
    console.log(">>>>>>>>>>>"+host+this.record.source.replace(".", "-"));
    return await this.driver.url(host+this.record.source.replace(".", "-"));
});

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

When('I set post attributes title and body with mockaroo', async function () {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(this.record.headline);
    let elementContent = await this.driver.$(".koenig-editor__editor");
    await elementContent.click();
    await this.deviceClient.browser.keys(["-"]);
    return await elementContent.setValue(this.record.article_text);
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

When('I set new member invalid email with mockaroo', async function () {
    let elementEmail = await this.driver.$("#new-user-email");
    await elementEmail.setValue(this.record.author_name);
    await new Promise(r => setTimeout(r, 300))
    let sendButton = await this.driver.$("button.gh-btn.gh-btn-green.gh-btn-icon.ember-view");
    return await sendButton.click();
});

When('I set new member email with mockaroo', async function () {
    let elementEmail = await this.driver.$("#new-user-email");
    await elementEmail.setValue(this.record.email);
    await new Promise(r => setTimeout(r, 300))
    let sendButton = await this.driver.$("button.gh-btn.gh-btn-green.gh-btn-icon.ember-view");
    return await sendButton.click();
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

When('I update the user name to mockaroo', async function () {
    let userName = await this.driver.$("#user-name");
    await userName.setValue(this.record.author_name);
    await new Promise(r => setTimeout(r, 300))
    let elementSave = await this.driver.$("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
    return await elementSave.click();
});

When('I update the user name to {kraken-string}', async function (newName) {
    let userName = await this.driver.$("#user-name");
    await userName.setValue(newName);
    await new Promise(r => setTimeout(r, 300))
    let elementSave = await this.driver.$("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
    return await elementSave.click();
});

When('I update the user email to mockaroo', async function () {
    let userEmail = await this.driver.$("#user-email");
    await userEmail.setValue(this.record.email);
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

Then('I validate the post publication with title and content mockaroo', async function () {
    let postTitle = await this.driver.$(".//*//h1[text() = '" + this.record.headline + "']");
    expect(await postTitle.isExisting()).to.be.true;
    let postContent = await this.driver.$(".post-full-content > .post-content").getText();
    return expect(postContent).to.have.string(this.record.article_text);
});

Then('I validate the post publication with title {kraken-string} and content {kraken-string}', async function (title, content) {
    let postTitle = await this.driver.$(".//*//h1[text() = '" + title + "']");
    expect(await postTitle.isExisting()).to.be.true;
    let postContent = await this.driver.$(".post-full-content > .post-content").getText();
    return expect(postContent).to.have.string(content);
});

Then('I validate the post with mockaroo exists', async function () {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + this.record.headline + "']");
    return expect(await postItem.isExisting()).to.be.true;
});

Then('I validate the post with {kraken-string} exists', async function (name) {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + name + "']");
    return expect(await postItem.isExisting()).to.be.true;
});

Then('I validate the post with mockaroo not exists', async function () {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + this.record.headline + "']");
    return expect(await postItem.isExisting()).to.not.be.true;
});

Then('I validate the post with {kraken-string} not exists', async function (name) {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + name + "']");
    return expect(await postItem.isExisting()).to.not.be.true;
});


Then('I validate the draft post with mockaroo exists', async function () {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//h3[text() = '" + this.record.headline + "']");
    return expect(await postItem.isExisting()).to.be.true;
});

Then('I validate the draft post with {kraken-string} exists', async function (name) {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//h3[text() = '" + name + "']");
    return expect(await postItem.isExisting()).to.be.true;
});

Then('I validate the schedule post with mockaroo exists', async function () {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//h3[text() = '" + this.record.headline + "']");
    return expect(await postItem.isExisting()).to.be.true;
});

Then('I validate the schedule post with {kraken-string} exists', async function (name) {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//h3[text() = '" + name + "']");
    return expect(await postItem.isExisting()).to.be.true;
});


Then('I validate the user name mockaroo exists', async function () {
    await new Promise(r => setTimeout(r, 1000))
    let userItem = await this.driver.$(".//*//article[contains(@class, 'apps-card-app')]//*//h3[text() = '" + this.record.author_name + "']");
    return expect(await userItem.isExisting()).to.be.true;
});

Then('I validate the user mockaroo exists', async function () {
    await new Promise(r => setTimeout(r, 1000))
    let userItem = await this.driver.$(".//*//article[contains(@class, 'apps-card-app')]//*//h3[text() = '" + this.record.email + "']");
    return expect(await userItem.isExisting()).to.be.true;
});

Then('I validate the user {kraken-string} exists', async function (email) {
    await new Promise(r => setTimeout(r, 1000))

    let userItem = await this.driver.$(".//*//article[contains(@class, 'apps-card-app')]//*//h3[text() = '" + email + "']");
    return expect(await userItem.isExisting()).to.be.true;
});

Then('I validate the user email mockaroo exists', async function () {
    await new Promise(r => setTimeout(r, 3000))
    let userEmail = await this.driver.$("#user-email").getValue();
    await new Promise(r => setTimeout(r, 3000));
    return expect(userEmail).to.be.equal(this.record.email);
});

Then('I validate the user email {kraken-string} exists', async function (email) {
    await new Promise(r => setTimeout(r, 3000))
    let userEmail = await this.driver.$("#user-email").getValue();
    await new Promise(r => setTimeout(r, 3000));
    return expect(userEmail).to.be.equal(email);
});

When, Then('I revoke invitations', async function () {
    await new Promise(r => setTimeout(r, 1000))
    let revokeButton = await this.driver.$("a.apps-configured-action.red-hover");
    return await revokeButton.click()
});

Then('I validate invitation for mockaroo not exists', async function () {
    let userItem = await this.driver.$(".//*//article[contains(@class, 'apps-card-app')]//*//h3[text() = '" + this.record.email + "']");
    return expect(await userItem.isExisting()).to.be.false;
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

When('I create new tag with mockaroo', async function () {
    console.log("*****"+ this.record)
    let elementNewTag = await this.driver.$("a[href='#/tags/new/']");
    await elementNewTag.click();
    let elementTitle = await this.driver.$("#tag-name");
    await elementTitle.setValue(this.record.tags);
    let saveButton = await this.driver.$(".gh-canvas-header > .view-actions > button");
    return await saveButton.click();
});

When('I create new tag with {kraken-string}', async function (name) {
    let elementNewTag = await this.driver.$("a[href='#/tags/new/']");
    await elementNewTag.click();
    let elementTitle = await this.driver.$("#tag-name");
    await elementTitle.setValue(name);
    let saveButton = await this.driver.$(".gh-canvas-header > .view-actions > button");
    return await saveButton.click();
});

When('I select tag with name mockaroo', async function () {
    let menuButton = await this.driver.$(".post-settings");
    await menuButton.click();
    let tagCombo = await this.driver.$("#tag-input > ul > input.ember-power-select-trigger-multiple-input");
    await tagCombo.setValue(this.record.tags);
    await new Promise(r => setTimeout(r, 3000))
    let tagOption = await this.driver.$(".//*//li[text() = '" + this.record.tags + "']");
    return await tagOption.click();
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

When('I set url field to mockaroo', async function () {
    let elementUser = await this.driver.$("#url");
    return await elementUser.setValue(this.record.source.replace(".", "-"));
});

When('I set url field to {kraken-string}', async function (url) {
    let elementUser = await this.driver.$("#url");
    return await elementUser.setValue(url);
});


Then('I check page full title with mockaroo', async function () {
    await new Promise(r => setTimeout(r, 5000))
    let titleItem = await this.driver.$(".//*//h1[text() = '" + this.record.headline+ "']");
    return expect(await titleItem.isExisting()).to.be.true;
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


When('I filter posts by tag with name mockaroo', async function () {
    let elementTagsCombo = await this.driver.$(".gh-contentfilter-tag > div > .ember-power-select-selected-item");
    await elementTagsCombo.click();
    let elementTagOption = await this.driver.$(".//*//li[text() = '" + this.record.tags + "']");
    return await elementTagOption.click();
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


When('I Click a post with title mockaroo', async function () {
    await new Promise(r => setTimeout(r, 2000))
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + this.record.headline + "']");
    return await postItem.click();
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


Given, When, Then('I go to page {kraken-string} apriori tags2', async function (host) {
    await new Promise(r => setTimeout(r, 5000))
    console.log(">>>>>>>>>>>"+host+aprioriData[2].tags);
    return await this.driver.url(host+aprioriData[2].tags);
});

Given, When, Then('I go to page {kraken-string} apriori headline0', async function (host) {
    await new Promise(r => setTimeout(r, 5000))
    console.log(">>>>>>>>>>>"+host+aprioriData[0].headline);
    return await this.driver.url(host+aprioriData[0].headline);
});

Given, When, Then('I go to page {kraken-string} apriori category2', async function (host) {
    await new Promise(r => setTimeout(r, 5000))
    console.log(">>>>>>>>>>>"+host+aprioriData[2].category);
    return await this.driver.url(host+aprioriData[2].category);
});

When('I set post attributes title and body apriori0', async function () {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(aprioriData[0].headline);
    let elementContent = await this.driver.$(".koenig-editor__editor");
    await elementContent.click();
    await this.deviceClient.browser.keys(["-"]);
    return await elementContent.setValue(aprioriData[0].article_text);
});

When('I set post attributes title and body valid apriori2', async function () {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(aprioriData[2].headline);
    let elementContent = await this.driver.$(".koenig-editor__editor");
    await elementContent.click();
    await this.deviceClient.browser.keys(["-"]);
    return await elementContent.setValue(aprioriData[2].article_text);
});

When('I set new member email apriori email2', async function () {
    let elementEmail = await this.driver.$("#new-user-email");
    await elementEmail.setValue(aprioriData[2].email);
    await new Promise(r => setTimeout(r, 300))
    let sendButton = await this.driver.$("button.gh-btn.gh-btn-green.gh-btn-icon.ember-view");
    return await sendButton.click();
});

When('I set new member email apriori email3', async function () {
    let elementEmail = await this.driver.$("#new-user-email");
    await elementEmail.setValue(aprioriData[3].email);
    await new Promise(r => setTimeout(r, 300))
    let sendButton = await this.driver.$("button.gh-btn.gh-btn-green.gh-btn-icon.ember-view");
    return await sendButton.click();
});

When('I set new member apriori invalid email1', async function () {
    let elementEmail = await this.driver.$("#new-user-email");
    await elementEmail.setValue(aprioriData[1].email);
    await new Promise(r => setTimeout(r, 300))
    let sendButton = await this.driver.$("button.gh-btn.gh-btn-green.gh-btn-icon.ember-view");
    return await sendButton.click();
});

When('I set new member email valid apriori email2', async function () {
    let elementEmail = await this.driver.$("#new-user-email");
    await elementEmail.setValue(aprioriData[2].email);
    await new Promise(r => setTimeout(r, 300))
    let sendButton = await this.driver.$("button.gh-btn.gh-btn-green.gh-btn-icon.ember-view");
    return await sendButton.click();
});

When('I set new member email valid apriori email3', async function () {
    let elementEmail = await this.driver.$("#new-user-email");
    await elementEmail.setValue(aprioriData[3].email);
    await new Promise(r => setTimeout(r, 300))
    let sendButton = await this.driver.$("button.gh-btn.gh-btn-green.gh-btn-icon.ember-view");
    return await sendButton.click();
});

When('I update the user name to apriori author_name2', async function () {
    let userName = await this.driver.$("#user-name");
    await userName.setValue(aprioriData[2].author_name);
    await new Promise(r => setTimeout(r, 300))
    let elementSave = await this.driver.$("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
    return await elementSave.click();
});

When('I update the user email to apriori email0', async function () {
    let userEmail = await this.driver.$("#user-email");
    await userEmail.setValue(aprioriData[0].email);
    await new Promise(r => setTimeout(r, 300))
    let elementSave = await this.driver.$("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
    return await elementSave.click();
});

Then('I validate the post publication with title and content headline2 article_text2', async function () {
    let postTitle = await this.driver.$(".//*//h1[text() = '" + aprioriData[2].headline + "']");
    expect(await postTitle.isExisting()).to.be.true;
    let postContent = await this.driver.$(".post-full-content > .post-content").getText();
    return expect(postContent).to.have.string(aprioriData[2].article_text);

});


Then('I validate the post with mockaroo exists', async function () {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + this.record.headline + "']");
    return expect(await postItem.isExisting()).to.be.true;
});

Then('I validate the post with apriori headline exists0', async function () {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + aprioriData[0].headline + "']");
    return expect(await postItem.isExisting()).to.be.true;
});

Then('I validate the post with valid apriori headline exists2', async function () {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + aprioriData[2].headline + "']");
    return expect(await postItem.isExisting()).to.be.true;
});

Then('I validate the post with apriori headline0 not exists', async function () {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + aprioriData[0].headline + "']");
    return expect(await postItem.isExisting()).to.not.be.true;
});

Then('I validate the post with apriori headline2 not exists', async function () {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + aprioriData[2].headline + "']");
    return expect(await postItem.isExisting()).to.not.be.true;
});

Then('I validate the draft post with apriori headline2 exists', async function () {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//h3[text() = '" + aprioriData[2].headline + "']");
    return expect(await postItem.isExisting()).to.be.true;
});

Then('I validate the schedule post with apriori headline0 exists', async function () {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//h3[text() = '" + aprioriData[0].headline + "']");
    return expect(await postItem.isExisting()).to.be.true;
});

Then('I validate the schedule post with apriori headline2 exists', async function () {
    await new Promise(r => setTimeout(r, 300))
    let postItem = await this.driver.$(".//*//h3[text() = '" + aprioriData[2].headline + "']");
    return expect(await postItem.isExisting()).to.be.true;
});

Then('I validate the user apriori author_name2 exists', async function () {
    await new Promise(r => setTimeout(r, 1000))

    let userItem = await this.driver.$(".//*//article[contains(@class, 'apps-card-app')]//*//h3[text() = '" + aprioriData[2].author_name + "']");
    return expect(await userItem.isExisting()).to.be.true;
});

Then('I validate the user apriori valid email2 exists', async function () {
    await new Promise(r => setTimeout(r, 1000))

    let userItem = await this.driver.$(".//*//article[contains(@class, 'apps-card-app')]//*//h3[text() = '" + aprioriData[2].email + "']");
    return expect(await userItem.isExisting()).to.be.true;
});

Then('I validate the user apriori valid email3 exists', async function () {
    await new Promise(r => setTimeout(r, 1000))

    let userItem = await this.driver.$(".//*//article[contains(@class, 'apps-card-app')]//*//h3[text() = '" + aprioriData[3].email + "']");
    return expect(await userItem.isExisting()).to.be.true;
});

Then('I validate the user email apriori email0 exists', async function () {
    await new Promise(r => setTimeout(r, 3000))
    let userEmail = await this.driver.$("#user-email").getValue();
    await new Promise(r => setTimeout(r, 3000));
    return expect( userEmail).to.be.equal(aprioriData[0].email);

});

Then('I validate invitation for apriori email2 not exists', async function () {
    let userItem = await this.driver.$(".//*//article[contains(@class, 'apps-card-app')]//*//h3[text() = '" + aprioriData[2].email + "']");
    return expect(await userItem.isExisting()).to.be.false;
});

Then('I validate invitation for apriori email3 not exists', async function () {
    let userItem = await this.driver.$(".//*//article[contains(@class, 'apps-card-app')]//*//h3[text() = '" + aprioriData[3].email + "']");
    return expect(await userItem.isExisting()).to.be.false;
});

When('I create new tag with apriori category0', async function () {
    let elementNewTag = await this.driver.$("a[href='#/tags/new/']");
    await elementNewTag.click();
    let elementTitle = await this.driver.$("#tag-name");
    await elementTitle.setValue(aprioriData[0].category);
    let saveButton = await this.driver.$(".gh-canvas-header > .view-actions > button");
    return await saveButton.click();
});

When('I select tag with name mockaroo', async function () {
    let menuButton = await this.driver.$(".post-settings");
    await menuButton.click();
    let tagCombo = await this.driver.$("#tag-input > ul > input.ember-power-select-trigger-multiple-input");
    await tagCombo.setValue(this.record.tags);
    await new Promise(r => setTimeout(r, 3000))
    let tagOption = await this.driver.$(".//*//li[text() = '" + this.record.tags + "']");
    return await tagOption.click();
});

When('I select tag with name apriori category0', async function () {
    let menuButton = await this.driver.$(".post-settings");
    await menuButton.click();
    let tagCombo = await this.driver.$("#tag-input > ul > input.ember-power-select-trigger-multiple-input");
    await tagCombo.setValue(aprioriData[0].category);
    await new Promise(r => setTimeout(r, 3000))
    let tagOption = await this.driver.$(".//*//li[text() = '" + aprioriData[0].category + "']");
    return await tagOption.click();
});


When('I set url field to apriori category2', async function () {
    let elementUser = await this.driver.$("#url");
    return await elementUser.setValue(aprioriData[2].category);
});

When('I set url field to valid apriori tags2', async function () {
    let elementUser = await this.driver.$("#url");
    return await elementUser.setValue(aprioriData[2].tags);
});

Then('I check page full title with apriori headline0', async function () {
    await new Promise(r => setTimeout(r, 5000))
    let titleItem = await this.driver.$(".//*//h1[text() = '" + aprioriData[0].headline + "']");
    return expect(await titleItem.isExisting()).to.be.true;
});

Then('I check page full title with apriori headline2', async function () {
    await new Promise(r => setTimeout(r, 5000))
    let titleItem = await this.driver.$(".//*//h1[text() = '" + aprioriData[2].headline + "']");
    return expect(await titleItem.isExisting()).to.be.true;
});

Then('I check page full title with apriori category2', async function () {
    await new Promise(r => setTimeout(r, 5000))
    let titleItem = await this.driver.$(".//*//h1[text() = '" + aprioriData[2].category + "']");
    return expect(await titleItem.isExisting()).to.be.true;
});

When('I filter posts by tag with name apriori category0', async function () {
    let elementTagsCombo = await this.driver.$(".gh-contentfilter-tag > div > .ember-power-select-selected-item");
    await elementTagsCombo.click();
    let elementTagOption = await this.driver.$(".//*//li[text() = '" + aprioriData[0].category + "']");
    return await elementTagOption.click();
});


When('I Click a post with title apriori headline2', async function () {
    await new Promise(r => setTimeout(r, 2000))
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + aprioriData[2].headline + "']");
    return await postItem.click();
});

When('I Click a post with title apriori headline0', async function () {
    await new Promise(r => setTimeout(r, 2000))
    let postItem = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + aprioriData[0].headline + "']");
    return await postItem.click();
});
