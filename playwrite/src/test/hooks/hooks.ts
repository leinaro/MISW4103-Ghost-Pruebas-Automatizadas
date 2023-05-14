import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import { pageFixture } from "./pageFixture";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { PrincipalPage } from "../pages/principalPage";
import { PrincipalPage3_42 } from "../pages/principalPage";
import { LoginPage3_42 } from "../pages/loginPage";
let browser: Browser;
let page: Page;
let context: BrowserContext;
let page2:Page;
BeforeAll(async function(){
    browser = await chromium.launch({headless:false}); //si quisieramos el chromium headless {headless:true}
});
Before(async function(){
    
    context = await browser.newContext();
    page = await context.newPage();
    page2= await context.newPage();
    pageFixture.page=page;
    pageFixture.page2=page2;
    pageFixture.login_page=new LoginPage(page)
    pageFixture.principal_page=new PrincipalPage(page)
    pageFixture.login_page_3_42=new LoginPage3_42(page)
    pageFixture.principal_page_3_42=new PrincipalPage3_42(page)

});
After(async function ({pickle}){
    const img= await pageFixture.page.screenshot({path:'./test-result/screenshots/${pickle.name}.png' ,type:"png"})
    await this.attach(img, "image/png")
    await pageFixture.page.close();
    await context.close();
})
AfterAll(async function(){
    await browser.close();
});

