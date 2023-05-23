import { Page, expect } from "@playwright/test"
import { faker } from '@faker-js/faker';
import * as fs from 'fs';
export class PrincipalPage{
    page: Page
    constructor(page:Page){
        this.page=page
    }
async fakerUser(){
   
   // let faker = require('faker');
   // let fs = require('fs');
    
    function generateMembers() {
        
      let members: {id:number; first_name: string; last_name:string;email:string }[] = [];
     
      for (let id = 1; id <= 10; id++) {
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let email = faker.internet.email();
        members.push({
          id: id,
          first_name: firstName,
          last_name: lastName,
          email: email,
        });
      }
      return { members:members };
    }
    module.exports = generateMembers;
    
    let dataObj = generateMembers();
    fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));

}


async putNoteMembers(username:string,newusername:string, note:string){
    //await this.page.goto('http://localhost:2368/ghost/#/members');
    //await this.page.getByRole('link', { name: 'New member' }).click();
   // await this.page.getByLabel('Name').fill(`${username}`);

   //await this.page.getByLabel('Email').fill(`${usermail}`);
   // await this.page.screenshot({path: 'src/test/screenshots/4.newMenber.png'});
   // await this.page.getByText('(not visible to member)').click();
     await this.page.getByLabel('Note (not visible to member)').fill(`${note}`);
    await this.page.getByRole('button', { name: 'Save' }).click();
    await this.page.screenshot({path: 'z.note.png'});
    
}
async go_to_members(){
    //await this.page.getByRole('link', { name: 'Posts', exact: true }).click();
   // await this.page.goto('http://localhost:2368/ghost/#/members');
   await this.page.getByRole('link', { name: 'Members', exact: true }).click();
    //await this.page.waitForTimeout(2000);
    //await this.page.screenshot({ path: 'z.png' });
}
    async go_create_new_post(){

        await this.page.getByRole('link', { name: 'Posts', exact: true }).click();
        await this.page.getByTitle('New post').click();
        await this.page.waitForTimeout(1000);
        await this.page.screenshot({ path: 'src/test/screenshots/new_post_new.png' });
    }
    async publish_post(){
        await this.page.getByRole('button', { name: 'Publish' }).click();
        await this.page.getByRole('button', { name: 'Continue, final review →' }).click();
        await this.page.getByRole('button', { name: 'Publish post, right now' , exact: false}).waitFor();
        await this.page.getByRole('button', { name: 'Publish post, right now' , exact: false}).click({force: true});
        await this.page.waitForTimeout(1000);
        await this.page.screenshot({ path: 'src/test/screenshots/post_published_new.png' });
       
    }
    async user_fill_title_description(title:string,description:string){
        await this.page.getByPlaceholder('Post title').fill(title);
        await this.page.locator('.koenig-editor__editor').fill(description);
    }
    async user_goes_to_link(link:string){
        await this.page.goto(link);
    }
    async user_goes_to_schedule(){
        await this.page.getByRole('button', { name: 'Editor', exact: true }).click();
        await this.page.getByRole('link', { name: 'Posts' }).click();
        await this.page.getByRole('link', { name: 'Scheduled', exact: true }).click();
        await this.page.waitForTimeout(1000);
        await this.page.screenshot({ path: 'src/test/screenshots/post_Scheduled_new.png' });
    }
    async user_goes_to_published(){
        await this.page.getByRole('button', { name: 'Editor', exact: true }).click();
        await this.page.getByRole('link', { name: 'Posts' }).click();
        await this.page.getByRole('link', { name: 'Published', exact: true }).click();
        await this.page.waitForTimeout(1000);
        await this.page.screenshot({ path: 'src/test/screenshots/post_published_new.png' });
    }
    async user_goes_to_draft(){
        await this.page.getByRole('link', { name: 'Posts' }).click();
        await this.page.getByRole('link', { name: 'Drafts', exact: true }).click();
        await this.page.waitForTimeout(1000);
    }
    async user_goes_to_draft_not_saving(){
        await this.page.getByRole('link', { name: 'Posts' }).click();
        await this.page.getByRole('button', { name: 'Leave' }).click();
        await this.page.getByRole('link', { name: 'Drafts', exact: true }).click();
        await this.page.waitForTimeout(1000);
        
    }
    async published_have_title(test_name:string){
        await this.page.getByRole('link', { name: `${test_name} By Erich Giusseppe - a few seconds ago Published` }).click({force: true});
    }

    async confirm_draft_exist(string:string){
        await this.page.getByRole('link', { name: `${string} By Erich Giusseppe - a few seconds ago Draft` }).click({force: true});
    }
    async confirm_draft_dont_exist(name:string){
        await expect(this.page.locator(`[role="link"][aria-label="${name} By Erich Giusseppe - a few seconds ago Draft"]`)).toHaveCount(0)

    }

    async user_fills_Schedule(){
        await this.page.getByRole('button', { name: 'Publish' }).click();
        await this.page.getByRole('button', { name: 'Right now' }).click();
        await this.page.getByText('Schedule for later').click();
        await this.page.getByPlaceholder('YYYY-MM-DD').fill('3000-05-07');
        await this.page.getByRole('textbox').nth(2).fill('11:34');
        await this.page.getByRole('button', { name: 'Continue, final review →' }).click();
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
        await this.page.waitForTimeout(4000);
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

    async edit_post_descripion(){
      //  await this.page.getByRole('menuitem', { name: 'By Erich Giusseppe - a few seconds ago Published Go to Analytics' }).getByRole('link', { name: 'Go to Analytics' }).click({force: true});

        //await this.page.getByRole('link', { name: 'Edit post' }).click();
        //await this.page.getByPlaceholder('Post title').fill('Prueba creación post (editado)');
        await this.page.locator('.koenig-editor__editor').fill('Esta es un prueba realizada con playright..! (editado)');
        await this.page.screenshot({path: 'src/test/screenshots/7.editPost.png'})
        await this.page.getByRole('button', { name: 'Update' }).click();
       // console.log(browserType+'-----------Post editado    -------------------------------')
    
      await this.page.goto('http://localhost:2368/ghost/#/posts?type=published');
      await this.page.getByRole('link', { name: 'Published', exact: true }).click();
  
    
    }
    
    async edit_post(){
        //  await this.page.getByRole('menuitem', { name: 'By Erich Giusseppe - a few seconds ago Published Go to Analytics' }).getByRole('link', { name: 'Go to Analytics' }).click({force: true});
  
          //await this.page.getByRole('link', { name: 'Edit post' }).click();
          await this.page.getByPlaceholder('Post title').fill('Prueba creación  (editado)');
          await this.page.locator('.koenig-editor__editor').fill('Esta es un prueba realizada con playright..!');
          await this.page.screenshot({path: 'src/test/screenshots/7.editPost.png'})
          await this.page.getByRole('button', { name: 'Update' }).click();
         // console.log(browserType+'-----------Post editado    -------------------------------')
      
        await this.page.goto('http://localhost:2368/ghost/#/posts?type=published');
        await this.page.getByRole('link', { name: 'Published', exact: true }).click();
    
      
      }
    
    async edit_post_title(){
        //  await this.page.getByRole('menuitem', { name: 'By Erich Giusseppe - a few seconds ago Published Go to Analytics' }).getByRole('link', { name: 'Go to Analytics' }).click({force: true});
  
          //await this.page.getByRole('link', { name: 'Edit post' }).click();
          await this.page.getByPlaceholder('Post title').fill('Prueba creación post (editado)');
          //await this.page.locator('.koenig-editor__editor').fill('Esta es un prueba realizada con playright..! (editado)');
          await this.page.screenshot({path: 'src/test/screenshots/7.editPost.png'})
          await this.page.getByRole('button', { name: 'Update' }).click();
         // console.log(browserType+'-----------Post editado    -------------------------------')
      
        await this.page.goto('http://localhost:2368/ghost/#/posts?type=published');
        await this.page.getByRole('link', { name: 'Published', exact: true }).click();
    
      
      }
    async post_draft(){
        await this.page.getByPlaceholder('Post title').fill('editado..');
        await this.page.locator('.koenig-editor__editor').fill('editado');
        await this.page.getByRole('button', { name: 'Update' }).click();
        await this.page.goto('http://localhost:2368/ghost/#/posts?type=draft');
        await this.page.getByRole('link', { name: 'Drafts', exact: true }).click();
    }

    async post_setting(){
  await this.page.getByRole('button', { name: 'Settings' }).click(); 
    }

    async createNewMembers(username:string,usermail:string,nota:string){
   //await new Promise(r => setTimeout(r, 1000));
        await this.page.goto('http://localhost:2368/ghost/#/members');
        await this.page.getByRole('link', { name: 'New member' }).click();
        await this.page.getByLabel('Name').fill(`${username}`);
        //await this.page.getByLabel('Email').click();
        await this.page.getByLabel('Email').fill(`${usermail}`);
        await this.page.screenshot({path: 'src/test/screenshots/4.newMenber.png'});
        await this.page.getByText('(not visible to member)').click();
         await this.page.getByLabel('Note (not visible to member)').fill(`${nota}`);
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.screenshot({path: 'src/test/screenshots/newMemberAdded.png'});
           }

           
           
           async editMembers(username:string,newusername:string){
        
            await this.page.goto('http://localhost:2368/ghost/#/members');
           
            await this.page.getByRole('link', { name: 'Members 1' }).click();
            await this.page.getByRole('link', { name: 'rrr@hotmail.com' }).click();
            await this.page.getByLabel('Email').click();
            await this.page.getByLabel('Email').click();
            await this.page.getByLabel('Email').fill('rrr@hotmail1.com');
            await this.page.getByLabel('Note (not visible to member)').click();
            await this.page.getByLabel('Note (not visible to member)').fill('hola 111');
            await this.page.getByRole('button', { name: 'Save' }).click();
           // await this.page.getByRole('button', { name: 'Save' }).click();
           
               }



           
               async seachMember(username:string,newmail:string){

                

                
                await this.page.getByRole('link', { name:`${username} ${newmail}`}).click();
               
                 
                
                 //await this.page.getByRole('link', { name: 'rrr@hotmail1.com' }).click();
                 await this.page.screenshot({path: 'z1.sechMember.png'});
                }
           async editMailMembers(username:string,newmail:string){
 
          
            await this.page.getByLabel('Email').click();
            //await this.page.getByLabel('Email').fill('rrr@hotmail2.com');
            await this.page.getByLabel('Email').fill(`${username}${newmail}`);
            
          //  await this.page.getByLabel('Note (not visible to member)').click();
           // await this.page.getByLabel('Note (not visible to member)').fill('hola 112');
            await this.page.getByRole('button', { name: 'Save' }).click();
            await new Promise(r => setTimeout(r, 1000)); 
               }
    async checks_publish_exist(){
        const publishButton = await this.page.$('text="Publish"');
        if (publishButton) {
            throw new Error('The Publish button exists on the page');
        } else {
            console.log('The Publish button does not exist on the page');
        }
    } 
    async checks_publish_exist_positive(){
        const publishButton = await this.page.$('text="Publish"');
        if (!publishButton) {
            throw new Error('The Publish button exists on the page');
        } else {
            console.log('The Publish button does not exist on the page');
        }
    }       
    
    async editNameMember(username:string,newmail:string){
//trabajando
//await this.page.getByRole('link', { name: 'Members 14' }).click();
//await this.page.getByRole('link', { name: 'Abigale LulaCorreoEditadoFaker@hotmail.com' }).click();
await this.page.getByLabel('Name').click();
await this.page.getByLabel('Name').fill(`${username}`);
await this.page.getByRole('button', { name: 'Save' }).click();
    }
}
export class PrincipalPage3_42{
    page: Page
    constructor(page:Page){
        this.page=page
    }
    async go_create_new_post(){

        await this.page.getByRole('link', { name: 'New post' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.screenshot({ path: 'src/test/screenshots/new_post_old.png' });
    }
    async publish_post(){

        await this.page.getByRole('button', { name: 'Publish' }).click();
        await this.page.getByRole('button', { name: 'Publish', exact: true }).click();
        await this.page.waitForTimeout(1000);
        await this.page.screenshot({ path: 'src/test/screenshots/post_published_old.png' });

      
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
        await this.page.getByRole('link', { name: 'Scheduled', exact: true }).click();
        await this.page.waitForTimeout(1000);
        await this.page.screenshot({ path: 'src/test/screenshots/post_Scheduled_old.png' });
    }
    async user_goes_to_published(){
        await this.page.getByRole('link', { name: 'Posts' }).click();
        await this.page.getByTitle('Published').click();
        await this.page.waitForTimeout(1000);
        await this.page.screenshot({ path: 'src/test/screenshots/post_published_old.png' });
        
    }
    async user_goes_to_draft(){
        await this.page.getByRole('link', { name: 'Posts' }).click();
        await this.page.getByRole('link', { name: 'Drafts', exact: true }).click();
        await this.page.waitForTimeout(1000);
        await this.page.screenshot({ path: 'src/test/screenshots/post_Draft_old.png' });
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
        await this.page.getByRole('button', { name: 'Close' }).click();
        await this.page.getByRole('button', { name: 'Close' }).click();

    }
    async user_confirms_tag_post(test_name:string){
        await this.page.getByRole('link', { name: 'test_5 By Erich Giusseppe in Getting Started • a few seconds ago' }).click();
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
        await this.page.goto("http://localhost:3001/ghost/#/posts?type=draft")
        await this.page.getByRole('link', { name: `${nombre} By Erich Giusseppe in Getting Started • a few seconds ago` }).click();
        await this.page.getByRole('button', { name: 'Publish' }).click();
        await this.page.getByRole('button', { name: 'Publish', exact: true }).click();
        await this.page.waitForTimeout(1000);
    }
    async user_published_diferent_link(nombre:string){
        await this.page.waitForTimeout(4000);
        await this.page.goto("http://localhost:3001/ghost/#/posts?type=draft")
        await this.page.getByRole('link', { name: `${nombre} By Erich Giusseppe • a few seconds ago` }).click();
        await this.page.getByRole('button', { name: 'Publish' }).click();
        await this.page.getByRole('button', { name: 'Publish', exact: true }).click();
        await this.page.waitForTimeout(1000);
    }

    async go_staft(){
        await this.page.getByRole('link', { name: 'Staff' }).click();
    }
    async go_to_url_staft(){
        await this.page.goto('http://localhost:3001/ghost/#/staff');
    }
   

    async  invite(){
        await this.page.getByRole('button', { name: 'Invite people' }).click();
    }

    
    async  putMailAndRole(mail:string, role:string){
        
        await this.page.waitForTimeout(1000);
         await this.page.getByPlaceholder('Email Address').fill(mail+Math.floor(Math.random() * 1000) + 1+'@gmail.com');
         //await this.page.waitForTimeout(1000);
         await this.page.getByRole('button', { name: 'Send invitation now' }).click();
         await this.page.waitForTimeout(1000);
    }

    async  NoputMailAndRole(mail:string, role:string){
        
        await this.page.waitForTimeout(1000);
         await this.page.getByPlaceholder('Email Address').fill("");
         //await this.page.waitForTimeout(1000);
         await this.page.getByRole('button', { name: 'Send invitation now' }).click();
         await this.page.waitForTimeout(1000);
    }

    async  createMailAndRole(mail:string, role:string){
        
        await this.page.waitForTimeout(1000);
         await this.page.getByPlaceholder('Email Address').fill(mail);
         //await this.page.waitForTimeout(1000);
         await this.page.getByRole('button', { name: 'Send invitation now' }).click();
         await this.page.waitForTimeout(1000);
    }


    
    async  revoke(){
        await this.page.getByRole('link',{name:'REVOKE'}).filter({ hasText: 'ic Mario@gmail.com Invitation sent:a few seconds ago, expires in 7 days' });
    }


}