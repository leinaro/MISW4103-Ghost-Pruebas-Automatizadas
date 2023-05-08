import { Page } from "@playwright/test"

export class LoginPage{
    page: Page
    usernarname_box: any
    password_box: any
    login_button: any
    constructor(page:Page){
        this.page=page
        this.usernarname_box=page.getByPlaceholder('jamie@example.com')
        this.password_box=page.getByPlaceholder('•••••••••••••••')
        this.login_button=page.getByRole('button', { name: 'Sign in →' })
    
    }
    async navigation(){
        await this.page.goto("http://localhost:2368/ghost/#/signin")
    }
        
    
    async login(username:string, password:string){

        await this.usernarname_box.fill(username)
        await this.password_box.fill(password)
        await this.login_button.click()
    }

}