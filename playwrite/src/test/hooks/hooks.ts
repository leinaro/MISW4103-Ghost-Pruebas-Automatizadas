import { BeforeAll, AfterAll, Before, After, AfterStep } from "@cucumber/cucumber";
import { pageFixture } from "./pageFixture";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { PrincipalPage } from "../pages/principalPage";
import { PrincipalPage3_42 } from "../pages/principalPage";
import { LoginPage3_42 } from "../pages/loginPage";
const fs = require("fs");
const path = require("path");
let browser: Browser;
let page: Page;
let context: BrowserContext;
let stepCount = 0
BeforeAll(async function(){
    browser = await chromium.launch({headless:false}); //si quisieramos el chromium headless {headless:true}
});
Before(async function(scenario){
    stepCount = 0
    context = await browser.newContext();
    page = await context.newPage();
    pageFixture.page=page;
    const substrings = scenario.pickle.name.split(" ");
    const firstSubstring = substrings[0];
    if (firstSubstring === "User") {
      pageFixture.login_page=new LoginPage(page)
      pageFixture.principal_page=new PrincipalPage(page)
    } else if (firstSubstring === "User2") {
      pageFixture.login_page_3_42=new LoginPage3_42(page)
      pageFixture.principal_page_3_42=new PrincipalPage3_42(page)
    }

});
AfterStep(async function(scenario) {
    let featurePath = scenario.pickle.uri.split('\\');
    var last = featurePath[featurePath.length-1];
    let featureName = last.split('.')[0].split('_')[0];
    var filename = scenario.pickle.uri.substring(scenario.pickle.uri.lastIndexOf('/')+1);
    const substrings = scenario.pickle.name.split(" ");
    const firstSubstring = substrings[0];
    if (firstSubstring === "User") {
        if (!fs.existsSync('../screenshots/5-47-0')) {
            fs.mkdirSync('../screenshots/5-47-0/'+featureName, {
              recursive: true
            });
            const absolutePath = path.resolve('../screenshots/5-47-0/'+featureName);
        }
        
        if (!fs.existsSync('../screenshots/5-47-0/'+featureName )) {
            fs.mkdirSync('../screenshots/5-47-0/'+featureName, {
                recursive: true
            });
            const absolutePath = path.resolve('../screenshots/5-47-0/'+featureName);
        }
        stepCount += 1;
        await pageFixture.login_page.page.screenshot({ path: '../screenshots/'  +'5-47-0/'+featureName+'/'+ stepCount + '.png'});
    } else if (firstSubstring === "User2") {
        const absolutePath = path.resolve('../screenshots/3-42/'+featureName);
        if (!fs.existsSync('../screenshots/3-42')) {
            fs.mkdirSync('../screenshots/3-42/'+featureName, {
              recursive: true
            });
            
          }
        
          if (!fs.existsSync('../screenshots/3-42/'+featureName )) {
            fs.mkdirSync('../screenshots/3-42/'+featureName, {
              recursive: true
            });
            const absolutePath = path.resolve('../screenshots/3-42/'+featureName);
          }
        stepCount += 1;
        await pageFixture.login_page_3_42.page.screenshot({ path: '../screenshots/'  +'3-42/'+featureName+'/'+ stepCount + '.png'});
    }
    
    //console.log("*********** "+featurePath);
    //console.log("*********** "+featureName);
    //console.log("*********** "+filename);
  });
  After(async function ({pickle}){
    await pageFixture.page.close();
    await context.close();
})
AfterAll(async function(){
    await browser.close();
});

