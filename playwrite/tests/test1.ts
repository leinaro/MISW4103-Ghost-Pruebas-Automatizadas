//Importar Playwright
const playwright = require('playwright');
const url ='http://localhost:2368/ghost';
const editPost1= async()=>{
  //(async  () => {
    //Definir los navegadores en los que se quiere hacer la prueba
    for (const browserType of ['chromium']){//, 'firefox', 'webkit']) {
      //Contenido de la prueba
      console.log(browserType+'-----------Editar Post-------------------------------')
      console.log(browserType+'-----------login      -------------------------------')
  
      //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
      const browser = await playwright[browserType].launch();
      const context = await browser.newContext();
      const page = await context.newPage();
      
   //sing in
      await page.goto(url);
      await new Promise(r => setTimeout(r, 4000));
      await page.type('input[name="identification"]', 'playright@pruebas.com');
      await page.type('input[name="password"]', 'a1b2c3d4e5');
      await page.screenshot({path: './1.signin.png'})
      await page.getByRole('button', { name: 'Sign in' }).click();
      await new Promise(r => setTimeout(r, 2000));
      await page.screenshot({path: './2.dashboard.png'});
      //crear post
      console.log(browserType+'-----------Create post   -------------------------------')
  
      await page.getByRole('link', { name: 'Posts', exact: true }).click();
      await page.getByTitle('New post').click();
      await page.getByPlaceholder('Post title').fill('Prueba creación post');
      await page.locator('.koenig-editor__editor').fill('Esta es un prueba realizada con playright..!');
      await page.screenshot({path:"3.newPost.png"})
      //publicar post
      console.log(browserType+'-----------Publish Post  -------------------------------')
      await new Promise(r => setTimeout(r, 2000));
      await page.getByRole('button', { name: 'Publish' }).click();
      await page.getByRole('button', { name: 'Continue, final review →' }).click();
      await page.screenshot({path:"4.Publish.png"})
      await page.getByRole('button', { name: 'Publish post, right now' }).click({force: true});
      await new Promise(r => setTimeout(r, 1000));
      await page.screenshot({path:"5.does it pass.png"})
      await page.goto(url+'/posts');
      await page.getByRole('link', { name: 'Published', exact: true }).click();
      await new Promise(r => setTimeout(r, 1000));
      await page.screenshot({path: '6.post.png'});
      await page.getByRole('menuitem', { name: 'By playrightUser - a few seconds ago Published Go to Analytics' }).getByRole('link', { name: 'Go to Analytics' }).click({force: true});
        await new Promise(r => setTimeout(r, 1000));
        
      
        await page.getByRole('link', { name: 'Edit post' }).click();
        await page.getByPlaceholder('Post title').fill('Prueba creación post (editado)');
        await page.locator('.koenig-editor__editor').fill('Esta es un prueba realizada con playright..! (editado)');
        await page.screenshot({path: '7.editPost.png'})
        await page.getByRole('button', { name: 'Update' }).click();
        console.log(browserType+'-----------Post editado    -------------------------------')
    
      await page.goto('http://localhost:2368/ghost/#/posts?type=published');
      await page.getByRole('link', { name: 'Published', exact: true }).click();
      await new Promise(r => setTimeout(r, 2000));
      await page.screenshot({path: '8.verificacion.png'});
      console.log(browserType+'-----------Verificacion de edicion realizada -------------------------------')
    
      await browser.close();
      
      
      
    }
    
  }
//const url = 'https://angular-6-registration-login-example.stackblitz.io/register';





//Función flecha asíncrona
const editPost2= async()=>{
//(async  () => {
  //Definir los navegadores en los que se quiere hacer la prueba
  for (const browserType of ['chromium']){//, 'firefox', 'webkit']) {
    //Contenido de la prueba
    console.log(browserType+'-----------Editar Post-------------------------------')
    console.log(browserType+'-----------login      -------------------------------')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    
 //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 4000));
    await page.type('input[name="identification"]', 'playright@pruebas.com');
    await page.type('input[name="password"]', 'a1b2c3d4e5');
    await page.screenshot({path: './1.signin.png'})
    await page.getByRole('button', { name: 'Sign in' }).click();
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: './2.dashboard.png'})
    console.log(browserType+'-----------Create post   -------------------------------')

    await page.getByRole('link', { name: 'Posts', exact: true }).click();
    await page.getByTitle('New post').click();
    await page.getByPlaceholder('Post title').fill('Prueba creación post');
    await page.locator('.koenig-editor__editor').fill('Esta es un prueba realizada con playright..!');
    await page.screenshot({path:"3.newPost.png"})
    console.log(browserType+'-----------Publish Post  -------------------------------')
    await new Promise(r => setTimeout(r, 2000));
    await page.getByRole('button', { name: 'Publish' }).click();
    await page.getByRole('button', { name: 'Continue, final review →' }).click();
    await page.screenshot({path:"4.Publish.png"})
    await page.getByRole('button', { name: 'Publish post, right now' }).click({force: true});
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path:"5.does it pass.png"})
    await page.goto(url+'/posts');
    await page.getByRole('link', { name: 'Published', exact: true }).click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: '6.post.png'});
    await page.getByRole('menuitem', { name: 'By playrightUser - a few seconds ago Published Go to Analytics' }).getByRole('link', { name: 'Go to Analytics' }).click({force: true});
      await new Promise(r => setTimeout(r, 1000));
      await page.getByRole('link', { name: 'Edit post' }).click();
     
      await page.getByPlaceholder('Post title').fill('Prueba creación post (editado)');
      await page.locator('.koenig-editor__editor').fill('Esta es un prueba realizada con playright..! (editado)');
      await page.screenshot({path: '7.editPost.png'})
      await page.getByRole('button', { name: 'Update' }).click();
      console.log(browserType+'-----------Post editado    -------------------------------')
  
    await page.goto('http://localhost:2369/ghost/#/posts?type=published');
    await page.getByRole('link', { name: 'Published', exact: true }).click();
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: '8.verificacion.png'});
    console.log(browserType+'-----------Verificacion de edicion realizada -------------------------------')
  
    await browser.close();
    
    
    
  }
  
}
//-------------------------------------------------------------------------------
const editPost3= async()=>{
  //(async  () => {
    //Definir los navegadores en los que se quiere hacer la prueba
    for (const browserType of ['chromium']){//, 'firefox', 'webkit']) {
      //Contenido de la prueba
      console.log(browserType+'-----------login    -------------------------------')
  
      //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
      const browser = await playwright[browserType].launch();
      const context = await browser.newContext();
      const page = await context.newPage();
      
   //Abrir la URL a probar en la página y cargar el proyecto en una SPA
      await page.goto(url);
      await new Promise(r => setTimeout(r, 4000));
      await page.type('input[name="identification"]', 'playright@pruebas.com');
      await page.type('input[name="password"]', 'a1b2c3d4e5');
      await page.screenshot({path: './1.signin.png'})
      await page.getByRole('button', { name: 'Sign in' }).click();
      await new Promise(r => setTimeout(r, 2000));
      await page.screenshot({path: './2.dashboard.png'})
      console.log(browserType+'-----------Create post -------------------------------')
  
      await page.getByRole('link', { name: 'Posts', exact: true }).click();
      await page.getByTitle('New post').click();
      await page.getByPlaceholder('Post title').fill('The best travel');
      await page.locator('.koenig-editor__editor').fill('I was ..');
      await page.screenshot({path:"3.newPost.png"})
      console.log(browserType+'-----------Publish Post-------------------------------')
      await new Promise(r => setTimeout(r, 2000));
      await page.getByRole('button', { name: 'Publish' }).click();
      await page.getByRole('button', { name: 'Continue, final review →' }).click();
      await page.screenshot({path:"4.Publish.png"})
      await page.getByRole('button', { name: 'Publish post, right now' }).click({force: true});
      await new Promise(r => setTimeout(r, 1000));
      await page.screenshot({path:"5.does it pass.png"})
      await page.goto(url+'/posts');
      await page.getByRole('link', { name: 'Published', exact: true }).click();
      await page.screenshot({path: '6.post.png'})
      
      await page.getByRole('menuitem', { name: 'By playrightUser - a few seconds ago Published Go to Analytics' }).getByRole('link', { name: 'Go to Analytics' }).click({force: true});
      await new Promise(r => setTimeout(r, 2000));
      await page.getByRole('link', { name: 'Edit post' }).click();
      await page.screenshot({path: '7.editPost.png'})
      await page.getByPlaceholder('Post title').fill('The best travel (editado)');
      await page.locator('.koenig-editor__editor').fill('');
     
      await page.getByRole('button', { name: 'Update' }).click();
      console.log(browserType+'-----------Post editado    -------------------------------')
     // http://localhost:2369/ghost/#/posts?type=draft
    await page.goto('http://localhost:2369/ghost/#/posts?type=draft');
    await page.getByRole('link', { name: 'Drafts', exact: true }).click();
    //await page.getByRole('link', { name: 'Published', exact: true }).click();
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: '8.verificacion.png'});
    console.log(browserType+'-----------Verificacion de edicion realizada -------------------------------')
  
      await browser.close();
      
    }
    

  }

//-----------------------------------------------------------------------------------
const editPost4= async()=>{
  //(async  () => {
    //Definir los navegadores en los que se quiere hacer la prueba
    for (const browserType of ['chromium']){//, 'firefox', 'webkit']) {
      //Contenido de la prueba
      console.log(browserType+'-----------login    -------------------------------')
  
      //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
      const browser = await playwright[browserType].launch();
      const context = await browser.newContext();
      const page = await context.newPage();
      
   //Abrir la URL a probar en la página y cargar el proyecto en una SPA
      await page.goto(url);
      await new Promise(r => setTimeout(r, 4000));
      await page.type('input[name="identification"]', 'playright@pruebas.com');
      await page.type('input[name="password"]', 'a1b2c3d4e5');
      await page.screenshot({path: './1.signin.png'})
      await page.getByRole('button', { name: 'Sign in' }).click();
      await new Promise(r => setTimeout(r, 2000));
      await page.screenshot({path: './2.dashboard.png'})
      console.log(browserType+'-----------Create post -------------------------------')
  
      await page.getByRole('link', { name: 'Posts', exact: true }).click();
      await page.getByTitle('New post').click();
      await page.getByPlaceholder('Post title').fill('The best travel');
      await page.locator('.koenig-editor__editor').fill('I was ..');
      await page.screenshot({path:"3.newPost.png"})
      console.log(browserType+'-----------Publish Post-------------------------------')
      await new Promise(r => setTimeout(r, 2000));
      await page.getByRole('button', { name: 'Publish' }).click();
      await page.getByRole('button', { name: 'Continue, final review →' }).click();
      await page.screenshot({path:"4.Publish.png"})
      await page.getByRole('button', { name: 'Publish post, right now' }).click({force: true});
      await new Promise(r => setTimeout(r, 1000));
      await page.screenshot({path:"5.does it pass.png"})
      await page.goto(url+'/posts');
      await page.getByRole('link', { name: 'Published', exact: true }).click();
      await page.screenshot({path: '6.post.png'})
      
      //await page.getByRole('menuitem', { name: 'By playrightUser - a few seconds ago Published Go to Analytics' }).getByRole('link', { name: 'Go to Analytics' }).click({force: true});
      await new Promise(r => setTimeout(r, 3000));
  await page.getByRole('menuitem', { name: 'By playrightUser - a few seconds ago Published Go to Analytics' }).getByRole('link', { name: 'Go to Analytics' }).click();
 // await page.screenshot({path: '7.post'})
  await page.getByRole('link', { name: 'Edit post' }).click();
  await page.screenshot({path: '8.editPost.png'});
  await page.getByRole('button', { name: 'Settings' }).click(); 
  await page.screenshot({path: '9.postSetting.png'}) 
  await browser.close();
}
}


const menber1= async()=>{

  for (const browserType of ['chromium']){//, 'firefox', 'webkit']) {
    //Contenido de la prueba
    console.log(browserType+'-----------login    -------------------------------')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
await page.goto('http://localhost:2369/ghost/');
await page.goto('http://localhost:2369/ghost/#/signin');
await page.screenshot({path: '1.singIn.png'})
await page.getByPlaceholder('jamie@example.com').click();
await page.getByPlaceholder('jamie@example.com').fill('playright@pruebas.com');
await page.getByPlaceholder('•••••••••••••••').click();
await page.getByPlaceholder('•••••••••••••••').click();
await page.getByPlaceholder('•••••••••••••••').fill('a1b2c3d4e5');
await page.getByRole('button', { name: 'Sign in →' }).click();
await new Promise(r => setTimeout(r, 3000));
await page.screenshot({path: '2.dasboard.png'})
await page.getByRole('link', { name: 'Members' }).click();
await new Promise(r => setTimeout(r, 3000));
await page.screenshot({path: '3.Menbers.png'})
await page.getByRole('link', { name: 'New member' }).click();
await new Promise(r => setTimeout(r, 3000));
await page.getByLabel('Name').click();
await page.getByLabel('Name').press('CapsLock');
await page.getByLabel('Name').fill('Mateo');
await page.getByLabel('Email').click();
await page.getByLabel('Email').fill('mateo@pruebas.com');
await page.screenshot({path: '4.newMenber.png'});
await page.getByText('(not visible to member)').click();
await page.getByLabel('Note (not visible to member)').click();
await page.getByLabel('Note (not visible to member)').press('CapsLock');
await page.getByLabel('Note (not visible to member)').fill('Hola a todos este es mi primer ');
await page.getByRole('button', { name: 'Save' }).click();
await page.screenshot({path: '5.newMenber.png'});
await page.goto('http://localhost:2369/ghost/#/members');
await page.screenshot({path:'6.Verification.png'});
await browser.close();
}
}

const menber2= async()=>{

  for (const browserType of ['chromium']){//, 'firefox', 'webkit']) {
    //Contenido de la prueba
    console.log(browserType+'-----------login    -------------------------------')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
await page.goto('http://localhost:2369/ghost/');
await page.goto('http://localhost:2369/ghost/#/signin');
await page.screenshot({path: '1.singIn.png'})
await page.getByPlaceholder('jamie@example.com').click();
await page.getByPlaceholder('jamie@example.com').fill('playright@pruebas.com');
await page.getByPlaceholder('•••••••••••••••').click();
await page.getByPlaceholder('•••••••••••••••').click();
await page.getByPlaceholder('•••••••••••••••').fill('a1b2c3d4e5');
await page.getByRole('button', { name: 'Sign in →' }).click();
await new Promise(r => setTimeout(r, 3000));
await page.screenshot({path: '2.dasboard.png'})
await page.getByRole('link', { name: 'Members' }).click();
await new Promise(r => setTimeout(r, 3000));
await page.screenshot({path: '3.Menbers.png'})
await page.getByRole('link', { name: 'New member' }).click();
await new Promise(r => setTimeout(r, 3000));
await page.getByLabel('Name').click();
await page.getByLabel('Name').press('CapsLock');
await page.getByLabel('Name').fill('Mateo');
await page.getByLabel('Email').click();
await page.getByLabel('Email').fill('');
await page.screenshot({path: '4.newMenber.png'});
await page.getByText('(not visible to member)').click();
await page.getByLabel('Note (not visible to member)').click();
await page.getByLabel('Note (not visible to member)').press('CapsLock');
await page.getByLabel('Note (not visible to member)').fill('Hola a todos este es mi primer ');
await page.getByRole('button', { name: 'Save' }).click();
await page.screenshot({path: '5.newMenber.png'});
await page.goto('http://localhost:2369/ghost/#/members');
await page.screenshot({path:'6.Verification.png'});
await browser.close();
}
}


const menberEditName= async()=>{

  for (const browserType of ['chromium']){//, 'firefox', 'webkit']) {
    //Contenido de la prueba
    console.log(browserType+'-----------login    -------------------------------')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost:2369/ghost/');
    await page.goto('http://localhost:2369/ghost/#/signin');
    await page.getByPlaceholder('jamie@example.com').click();
    await page.getByPlaceholder('jamie@example.com').fill('playright@pruebas.com');
    await page.getByPlaceholder('•••••••••••••••').click();
    await page.getByPlaceholder('•••••••••••••••').fill('a1b2c3d4e5');

    await new Promise(r => setTimeout(r, 3000));
    await page.screenshot({path:'1.signIn.png'});

    await page.getByRole('button', { name: 'Sign in →' }).click();
    await page.getByRole('link', { name: 'Members' }).click();
    await new Promise(r => setTimeout(r, 3000));
    await page.screenshot({path:'Member.png'});

    await page.getByRole('link', { name: 'Mateo' }).click();
    await page.screenshot({path:'6.png'});
    await page.getByLabel('Name').click();
    await page.getByLabel('Name').fill('Mateo3');
    //await page.getByLabel('Email').click();
    await page.screenshot({path:'7.png'});
   // await page.getByLabel('Email').fill('mateo2@prueba.com');
    await page.getByRole('button', { name: 'Save' }).click();
    await new Promise(r => setTimeout(r, 3000));
    await page.goto('http://localhost:2369/ghost/#/members');
   await page.screenshot({path:'8.Verification.png'});
await browser.close();
}
}

const memberEditMail= async()=>{

  for (const browserType of ['chromium']){//, 'firefox', 'webkit']) {
    //Contenido de la prueba
    console.log(browserType+'-----------login    -------------------------------')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost:2369/ghost/');
    await page.goto('http://localhost:2369/ghost/#/signin');
    await page.getByPlaceholder('jamie@example.com').click();
    await page.getByPlaceholder('jamie@example.com').fill('playright@pruebas.com');
    await page.getByPlaceholder('•••••••••••••••').click();
    await page.getByPlaceholder('•••••••••••••••').fill('a1b2c3d4e5');

    await new Promise(r => setTimeout(r, 3000));
    await page.screenshot({path:'1.signIn.png'});

    await page.getByRole('button', { name: 'Sign in →' }).click();
    await page.getByRole('link', { name: 'Members' }).click();
    await new Promise(r => setTimeout(r, 3000));
    await page.screenshot({path:'Member.png'});

    await page.getByRole('link', { name: 'Mateo' }).click();
    await page.screenshot({path:'6.png'});
    await page.getByLabel('Name').click();
    //await page.getByLabel('Name').fill('Mateo3');
    await page.getByLabel('Email').click();
    await page.screenshot({path:'7.png'});
    await page.getByLabel('Email').fill('mateo3@prueba.com');
    await page.getByRole('button', { name: 'Save' }).click();
    await new Promise(r => setTimeout(r, 3000));
    await page.goto('http://localhost:2369/ghost/#/members');
   await page.screenshot({path:'8.Verification.png'});
await browser.close();
}
}

const memberModifyNote= async()=>{

  for (const browserType of ['chromium']){//, 'firefox', 'webkit']) {
    //Contenido de la prueba
    console.log(browserType+'-----------login    -------------------------------')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost:2369/ghost/');
    await page.goto('http://localhost:2369/ghost/#/signin');
    await page.getByPlaceholder('jamie@example.com').click();
    await page.getByPlaceholder('jamie@example.com').fill('playright@pruebas.com');
    await page.getByPlaceholder('•••••••••••••••').click();
    await page.getByPlaceholder('•••••••••••••••').fill('a1b2c3d4e5');

    await new Promise(r => setTimeout(r, 3000));
    await page.screenshot({path:'1.signIn.png'});

    await page.getByRole('button', { name: 'Sign in →' }).click();
    await page.getByRole('link', { name: 'Members' }).click();
    await new Promise(r => setTimeout(r, 3000));
    await page.screenshot({path:'Member.png'});

    await page.getByRole('link', { name: 'Mateo' }).click();
    await page.screenshot({path:'6.png'});
    await page.getByLabel('Name').click();
    //await page.getByLabel('Name').fill('Mateo3');
    await page.getByLabel('Email').click();
    await page.screenshot({path:'7.png'});
   // await page.getByLabel('Email').fill('mateo3@prueba.com');
    await page.getByLabel('Note (not visible to member)').fill('Hola a todos este Modificando nota');

    await page.getByRole('button', { name: 'Save' }).click();
    await new Promise(r => setTimeout(r, 3000));
    await page.goto('http://localhost:2369/ghost/#/members');
   await page.screenshot({path:'8.Verification.png'});
await browser.close();
}
}


const memberDetail= async()=>{

  for (const browserType of ['chromium']){//, 'firefox', 'webkit']) {
    //Contenido de la prueba
    console.log(browserType+'-----------login    -------------------------------')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    
      await page.goto('http://localhost:2369/ghost/');

      await page.goto('http://localhost:2369/ghost/#/signin');
      await page.screenshot({path:'1.png'});
      await page.getByPlaceholder('jamie@example.com').click();
      await page.getByPlaceholder('jamie@example.com').fill('playright@pruebas.com');
      await page.getByPlaceholder('•••••••••••••••').click();
      await new Promise(r => setTimeout(r, 3000));
      await page.screenshot({path:'2.png'});
      await page.getByPlaceholder('•••••••••••••••').fill('a1b2c3d4e5');
      await page.getByRole('button', { name: 'Sign in →' }).click();
      await new Promise(r => setTimeout(r, 3000));
      await page.getByRole('link', { name: 'Members 4' }).click();
      await page.screenshot({path:'3.png'});
      await page.getByRole('link', { name: 'Mateo mateo3@prueba.com' }).click();
      await new Promise(r => setTimeout(r, 3000));
   await page.screenshot({path:'8.Verification.png'});
await browser.close();
}
  }
  //editPost1();
  //editPost2();
  //editPost3();
  //editPost4();
  //menber1();
  //menber2();
  //menberEditName();
  //memberEditMail();
  //memberModifyNote();
   memberDetail();


