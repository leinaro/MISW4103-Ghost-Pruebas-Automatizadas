import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { LoginPage } from "../pages/loginPage";
import { faker } from '@faker-js/faker';
import * as fs from 'fs';

setDefaultTimeout(60 * 1000 * 2)
Given('User create new member as name {string} and mail {string} and nota {string} and click the save botton', async function (username,usermail,nota) {
   
    if (username==="fakerName"){
        

        const jsonString = fs.readFileSync('data.json', 'utf-8');
        const jsonData = JSON.parse(jsonString);
        let foundUser = null;
        for (let key in jsonData.members) {
        if (jsonData.members[key].id === 1) {
            foundUser = jsonData.members[key].first_name;
        break;
    }
}
    username=foundUser;
    console.log( foundUser);
    }
    if(usermail==="fakerCorreo"){
        const jsonString = fs.readFileSync('data.json', 'utf-8');
        const jsonData = JSON.parse(jsonString);
        let foundUserMail = null;
        for (let key in jsonData.members) {
        if (jsonData.members[key].id === 1) {
            foundUserMail = jsonData.members[key].email;
        break;
    }
}
        usermail=foundUserMail;
    }

    if (username==="fakerNameFour"){
        

        const jsonString = fs.readFileSync('data.json', 'utf-8');
        const jsonData = JSON.parse(jsonString);
        let foundUser = null;
        for (let key in jsonData.members) {
        if (jsonData.members[key].id === 4) {
            foundUser = jsonData.members[key].first_name;
        break;
    }
}
    username=foundUser;
    console.log( foundUser);
    }
    if(usermail==="fakerCorreoFour"){
        const jsonString = fs.readFileSync('data.json', 'utf-8');
        const jsonData = JSON.parse(jsonString);
        let foundUserMail = null;
        for (let key in jsonData.members) {
        if (jsonData.members[key].id === 4) {
            foundUserMail = jsonData.members[key].email;
        break;
    }
}
        usermail=foundUserMail;
    }

    if (username==="fakerNameFive"){
        

        const jsonString = fs.readFileSync('data.json', 'utf-8');
        const jsonData = JSON.parse(jsonString);
        let foundUser = null;
        for (let key in jsonData.members) {
        if (jsonData.members[key].id === 5) {
            foundUser = jsonData.members[key].first_name;
        break;
    }
   
}
    username=foundUser;
    console.log( foundUser);
    }

    

    if( usermail==="fakerCorreoFive"){
        const jsonString = fs.readFileSync('data.json', 'utf-8');
        const jsonData = JSON.parse(jsonString);
        let foundUserMail = null;
        for (let key in jsonData.members) {
        if (jsonData.members[key].id === 5) {
            foundUserMail = jsonData.members[key].mail;
        break;
    }
}
      usermail=foundUserMail;
    }
    if (username==="fakerNameSix"){
        

        const jsonString = fs.readFileSync('data.json', 'utf-8');
        const jsonData = JSON.parse(jsonString);
        let foundUser = null;
        for (let key in jsonData.members) {
        if (jsonData.members[key].id === 6) {
            foundUser = jsonData.members[key].first_name;
        break;
    }
}
    username=foundUser;
    console.log( foundUser);
    }
    if(usermail==="fakerCorreoSix"){
        const jsonString = fs.readFileSync('data.json', 'utf-8');
        const jsonData = JSON.parse(jsonString);
        let foundUserMail = null;
        for (let key in jsonData.members) {
        if (jsonData.members[key].id === 6) {
            foundUserMail = jsonData.members[key].email;
        break;
    }
}
        usermail=foundUserMail;
    }



    await pageFixture.principal_page.createNewMembers(username,usermail,nota);
 
});
  
Given('User edit new member as name {string} as {string} click the save botton', async function (username,newusername) {
  
    await pageFixture.principal_page.editMembers(username,newusername);
   // console.log("username"+username+", correo: "+newusername)
 
});

Then('User put note on member {string}', async function (username,newusername, note) {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.principal_page.putNoteMembers(username,newusername, note);
  });
Given('User edit new mail with name {string} mail {string} click the save botton', async function (username,newmail) {
    
    if (username==="fakerName"){
        

        const jsonString = fs.readFileSync('data.json', 'utf-8');
        const jsonData = JSON.parse(jsonString);
        let foundUser = null;
        for (let key in jsonData.members) {
        if (jsonData.members[key].id === 2) {
            foundUser = jsonData.members[key].first_name;
        break;
    }
}
    username=foundUser;
    
    }
    await pageFixture.principal_page.editMailMembers(username,newmail);
 
});

Given('User go to members', async function () {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.principal_page.go_to_members()
  
  });
  Given('User put member name {string} and mail {string}', async function (username, newmail) {
    // Write code here that turns the phrase above into concrete actions
    if (username==="fakerNameFour"){
        

        const jsonString = fs.readFileSync('data.json', 'utf-8');
        const jsonData = JSON.parse(jsonString);
        let foundUser = null;
        for (let key in jsonData.members) {
        if (jsonData.members[key].id === 4) {
            foundUser = jsonData.members[key].first_name;
        break;
    }
}
    username=foundUser;
    console.log( foundUser);
    }
   
    if (username==="dataJsonNumberThree"){
        

        const jsonString = fs.readFileSync('data.json', 'utf-8');
        const jsonData = JSON.parse(jsonString);
        let foundUser = null;
        for (let key in jsonData.members) {
        if (jsonData.members[key].id === 3) {
            foundUser = jsonData.members[key].first_name;
        break;
    }
}
    username=foundUser;
    console.log( foundUser);
    }
    //aqui
    await pageFixture.principal_page.editNameMember(username,newmail);
  });

Given('User seachMember name {string} mail {string}', async function (username,newmail) {
   
    if (username==="fakerName"){
        

        const jsonString = fs.readFileSync('data.json', 'utf-8');
        const jsonData = JSON.parse(jsonString);
        let foundUser = null;
        for (let key in jsonData.members) {
        if (jsonData.members[key].id === 1) {
            foundUser = jsonData.members[key].first_name;
        break;
    }
   
}
    username=foundUser;
    console.log( foundUser);
    }
    if(newmail==="fakerCorreo"){
        const jsonString = fs.readFileSync('data.json', 'utf-8');
        const jsonData = JSON.parse(jsonString);
        let foundUserMail = null;
        for (let key in jsonData.members) {
        if (jsonData.members[key].id === 1) {
            foundUserMail = jsonData.members[key].email;
        break;
    }
}
            newmail=foundUserMail;
    }
   
    if(newmail==="fakerCorreoEditado"){
        const jsonString = fs.readFileSync('data.json', 'utf-8');
        const jsonData = JSON.parse(jsonString);
        let foundUserMail = null;
        for (let key in jsonData.members) {
        if (jsonData.members[key].id === 2) {
            foundUserMail = jsonData.members[key].first_name;
        break;
    }
}
            newmail=foundUserMail+"CorreoEditadoFaker@hotmail.com";
    }

    if (username==="fakerNameFive"){
        

        const jsonString = fs.readFileSync('data.json', 'utf-8');
        const jsonData = JSON.parse(jsonString);
        let foundUser = null;
        for (let key in jsonData.members) {
        if (jsonData.members[key].id === 5) {
            foundUser = jsonData.members[key].first_name;
        break;
    }
   
}
    username=foundUser;
    console.log( foundUser);
    }

    

    if(newmail==="fakerCorreoFive"){
        const jsonString = fs.readFileSync('data.json', 'utf-8');
        const jsonData = JSON.parse(jsonString);
        let foundUserMail = null;
        for (let key in jsonData.members) {
        if (jsonData.members[key].id === 5) {
            foundUserMail = jsonData.members[key].mail;
        break;
    }
}
            newmail=foundUserMail;
    }

    await pageFixture.principal_page.seachMember(username,newmail);
 
});
Given('User create fake user', async function () {
    await pageFixture.principal_page.fakerUser();
 
});