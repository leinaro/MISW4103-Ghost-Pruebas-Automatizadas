import { Page, expect } from "@playwright/test"

export class PrincipalPage{
    page: Page
    constructor(page:Page){
        this.page=page
    }
    async go_create_new_post(){

        await this.page.getByRole('link', { name: 'Posts', exact: true }).click();
        await this.page.getByTitle('New post').click();
    }
    async publish_post(){
        await this.page.getByRole('button', { name: 'Publish' }).click();

        await this.page.screenshot({ path: '1_1.png' });
        await this.page.getByRole('button', { name: 'Continue, final review →' }).click();

        await this.page.screenshot({ path: '1_2.png' });
        
        await this.page.getByRole('button', { name: 'Publish post, right now' , exact: false}).waitFor();
        await this.page.getByRole('button', { name: 'Publish post, right now' , exact: false}).click({force: true});
       

        
    }
    async user_fill_title_description(title:string,description:string){
        await this.page.getByPlaceholder('Post title').fill(title);
        await this.page.locator('.koenig-editor__editor').fill(description);
    }
    async user_goes_to_link(link:string){
        await this.page.goto(link)
    }
    async user_goes_to_schedule(){
        await this.page.getByRole('button', { name: 'Editor' }).click();
        await this.page.getByRole('link', { name: 'Posts' }).click();
        await this.page.getByRole('link', { name: 'Scheduled', exact: true }).click();
    }
    async user_goes_to_published(){
        await this.page.getByRole('button', { name: 'Editor' }).click();
        await this.page.getByRole('link', { name: 'Posts' }).click();
        await this.page.getByRole('link', { name: 'Published', exact: true }).click();
    }
    async user_goes_to_draft(){
        await this.page.getByRole('link', { name: 'Posts' }).click();
        await this.page.getByRole('link', { name: 'Drafts', exact: true }).click();
    }
    async published_have_title(test_name:string){
        await this.page.getByRole('link', { name: `${test_name} By Erich Giusseppe - a few seconds ago Published` }).click({force: true});
    }

    async confirm_draft_exist(string:string){
        await this.page.getByRole('link', { name: `${string} By Erich Giusseppe - a few seconds ago Draft` }).click({force: true});
    }

    async user_fills_Schedule(){
        await this.page.getByRole('button', { name: 'Publish' }).click();
        await this.page.getByRole('button', { name: 'Right now' }).click();
        await this.page.getByText('Schedule for later').click();
        await this.page.getByPlaceholder('YYYY-MM-DD').fill('3000-05-07');
        await this.page.getByRole('textbox').nth(2).fill('11:34');
        await this.page.getByRole('button', { name: 'Continue, final review →' }).click();
        await this.page.screenshot({path:"screenshot.png"})
        await this.page.getByRole('button', { name: 'Publish post, on May 7th' }).waitFor();
        await this.page.getByRole('button', { name: 'Publish post, on May 7th' }).click({force: true});
    }
    async user_confirms_Schedule(name_test:string){
        await this.page.getByRole('link', { name: `${name_test} By Erich Giusseppe - a few seconds ago Scheduled`}).click({force: true});
    }
    async user_fills_the_link(link:string){
        await this.page.getByRole('button', { name: 'Settings' }).click();
        await this.page.getByRole('button', { name: 'Meta data' }).click();
        await this.page.locator('input[name="post-setting-canonicalUrl"]').fill(link);
        await this.page.getByRole('button', { name: 'Settings' }).click();
    }
    async user_confirms_link(link:string){
        await this.page.getByRole('button', { name: 'Settings' }).click();
        await this.page.getByRole('button', { name: 'Meta data' }).click();
        const value= await this.page.locator('input[name="post-setting-canonicalUrl"]').inputValue();
        if(value !== link) {
            throw new Error(link);
        }
        await this.page.getByRole('button', { name: 'Settings' }).click();
    }
    async user_fills_tag(tag:string){
        await this.page.getByRole('button', { name: 'Settings' }).click();
        await this.page.locator('#tag-input input').click();
        await this.page.getByRole('option', { name: tag }).click();
    }
    async user_confirms_tag_post(test_name:string){
        await this.page.getByRole('link', { name: `${test_name} By Erich Giusseppe in News - a few seconds ago Published` }).click({force: true});
    }
    async delete_post(){
        await this.page.getByRole('button', { name: 'Settings' }).click();
        await this.page.getByRole('button', { name: 'Delete post' }).click();
        await this.page.getByRole('button', { name: 'Delete', exact: true }).click();
    }
    async validates_post_eliminated(string:string){
        const elements = await this.page.locator('h3.gh-content-entry-title').all();
        let found = false;
        for (const element of elements) {
            if (await element.innerText() === string) {
                found = true;
                break;
            }
        }
        await expect(found).toBe(false);
    }
    

}