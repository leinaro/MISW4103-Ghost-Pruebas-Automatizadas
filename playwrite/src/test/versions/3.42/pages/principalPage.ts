import { Page, expect } from "@playwright/test"

export class PrincipalPage{
    page: Page
    constructor(page:Page){
        this.page=page
    }
    async go_create_new_post(){

        await this.page.getByRole('link', { name: 'New post' }).click();
    }
    async publish_post(){

        await this.page.getByRole('button', { name: 'Publish' }).click();
        await this.page.getByRole('button', { name: 'Publish', exact: true }).click();

      
    }
    async user_fill_title_description(title:string,description:string){
        await this.page.screenshot({ path: 'sett.png' })
        await this.page.getByPlaceholder('Post title').fill(title);
        await this.page.locator('.koenig-editor__editor').fill(description);
        
    }
    async user_goes_to_link(link:string){
        await this.page.goto(link)
    }
    async user_goes_to_schedule(){
        await this.page.getByRole('link', { name: 'Posts' }).click();
        await this.page.getByRole('button', { name: 'Leave' }).click();
        await this.page.getByRole('link', { name: 'Scheduled', exact: true }).click();
    }
    async user_goes_to_published(){
        await this.page.getByRole('link', { name: 'Posts' }).click();
        await this.page.getByRole('button', { name: 'Leave' }).click();
        await this.page.screenshot({path:"aesfasfasefasef.png"})
        await this.page.getByTitle('Published').click();
        
    }
    async user_goes_to_draft(){
        await this.page.getByRole('link', { name: 'Posts' }).click();
        await this.page.getByRole('link', { name: 'Drafts', exact: true }).click();
    }
    async published_have_title(test_name:string){
        await this.page.getByRole('link', { name: `${test_name} By Erich Giusseppe • a few seconds ago` }).click({force: true});
    }

    async confirm_draft_exist(string:string){
        await this.page.getByRole('link', { name: `${string} By Erich Giusseppe • a few seconds ago` }).click({force: true});
    }

    async user_fills_Schedule(){
        await this.page.getByRole('button', { name: 'Publish' }).click();
        await this.page.locator('div:nth-child(2) > .gh-publishmenu-radio-button').click();
        await this.page.getByRole('button', { name: 'Schedule', exact: true }).click();
    }
    async user_confirms_Schedule(name_test:string){
        await this.page.getByRole('link', { name: `${name_test} By Erich Giusseppe • a few seconds ago` }).click({force: true});
    }
    async user_fills_the_link(link:string){
        await this.page.getByRole('button', { name: 'Settings' }).click();
        await this.page.getByRole('button', { name: 'Meta data Extra content for search engines' }).click();
        //await page.screenshot({ path: 'bbbbbbbbbb.png' });
        const inputLocator = this.page.locator('label:has-text("Canonical URL") + input');
        await inputLocator.fill(link);
        await this.page.getByRole('button', { name: 'Back' }).click();
        await this.page.getByRole('button', { name: 'Close' }).click();
    }
    async user_confirms_link(link:string){
        await this.page.getByRole('button', { name: 'Settings' }).click();
        await this.page.getByRole('button', { name: 'Meta data Extra content for search engines' }).click();
        const value= await this.page.locator('label:has-text("Canonical URL") + input').inputValue();
        if(value !== link) {
            throw new Error(link);
        }
        await this.page.getByRole('button', { name: 'Back' }).click();
        await this.page.getByRole('button', { name: 'Close' }).click();
    }
    async user_fills_tag(tag:string){
        await this.page.getByRole('button', { name: 'Settings' }).click();
        await this.page.locator('#tag-input input').click();
        await this.page.getByRole('option', { name: 'Getting Started' }).click();
        await this.page.screenshot({ path: 'eeeeee.png' })
        await this.page.screenshot({ path: 'oooooo.png' })
        await this.page.getByRole('button', { name: 'Close' }).click();
        await this.page.screenshot({ path: 'a.png' })
        await this.page.getByRole('button', { name: 'Close' }).click();
        await this.page.screenshot({ path: 'e.png' })
    }
    async user_confirms_tag_post(test_name:string){
        await this.page.getByRole('link', { name: `${test_name} By Erich Giusseppe • a few seconds ago` }).click({force: true});
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
    async user_published_diferent(nombre:string){
        await this.page.waitForTimeout(4000);
        await this.page.screenshot({ path: 'beforepost.png' });
        await this.page.goto("http://localhost:3001/ghost/#/posts?type=draft")
        await this.page.screenshot({ path: 'in page.png' });
        await this.page.getByRole('link', { name: `${nombre} By Erich Giusseppe in Getting Started • a few seconds ago` }).click();
        await this.page.getByRole('button', { name: 'Publish' }).click();
        await this.page.getByRole('button', { name: 'Publish', exact: true }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('link', { name: 'Posts' }).click();
    }
    async user_published_diferent_link(nombre:string){
        await this.page.waitForTimeout(4000);
        await this.page.screenshot({ path: 'beforepost.png' });
        await this.page.goto("http://localhost:3001/ghost/#/posts?type=draft")
        await this.page.screenshot({ path: 'in page.png' });
        await this.page.getByRole('link', { name: `${nombre} By Erich Giusseppe • a few seconds ago` }).click();
        await this.page.getByRole('button', { name: 'Publish' }).click();
        await this.page.getByRole('button', { name: 'Publish', exact: true }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('link', { name: 'Posts' }).click();
    }

}