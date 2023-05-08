import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import { pageFixture } from "./pageFixture";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { PrincipalPage } from "../pages/principalPage";

let browser: Browser;
let page: Page;
let context: BrowserContext;
BeforeAll(async function(){
    browser = await chromium.launch({headless:false}); //si quisieramos el chromium headless {headless:true}
});
Before(async function(){
    
    context = await browser.newContext();
    page = await context.newPage();
    pageFixture.page=page;
    pageFixture.login_page=new LoginPage(page)
    pageFixture.principal_page=new PrincipalPage(page)

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

