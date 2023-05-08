import { Page } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { PrincipalPage } from "../pages/principalPage";
export const pageFixture = {
    //@ts-ignore
    page: undefined as Page,
    //@ts-ignore
    login_page:undefined as LoginPage,
    //@ts-ignore
    principal_page:undefined as PrincipalPage,
    
}