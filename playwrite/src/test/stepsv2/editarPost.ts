import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { LoginPage } from "../pages/loginPage";

Then('User seach post created', async function () {

return 'pending';
});


Then('User edit post description', async function () {
// Write code here that turns the phrase above into concrete actions

    await pageFixture.principal_page.edit_post_descripion();


});

Then('User edit post title', async function () {
    // Write code here that turns the phrase above into concrete actions
    
        await pageFixture.principal_page.edit_post_title();
    
    
    });


    Then('User edit post', async function () {
        // Write code here that turns the phrase above into concrete actions
        
            await pageFixture.principal_page.edit_post();
        
        
        });
        Then('User see post on draft', async function () {
            // Write code here that turns the phrase above into concrete actions
            
                await pageFixture.principal_page.post_draft();
            
            
            });

            Then('User see setting post', async function () {
                // Write code here that turns the phrase above into concrete actions
                
                    await pageFixture.principal_page.post_setting();
                
                
                });
        
           

Then('review post edited', async function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});