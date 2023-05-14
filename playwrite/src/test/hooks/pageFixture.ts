import { Page } from "@playwright/test";
import { LoginPage, LoginPage3_42 } from "../pages/loginPage";
import { PrincipalPage, PrincipalPage3_42 } from "../pages/principalPage";
export const pageFixture = {
    //@ts-ignore
    page: undefined as Page,
    //@ts-ignore
    page2:undefined as Page,
    //@ts-ignore
    login_page:undefined as LoginPage,
    //@ts-ignore
    principal_page:undefined as PrincipalPage,
    //@ts-ignore
    login_page_3_42:undefined as LoginPage3_42,
    //@ts-ignore
    principal_page_3_42:undefined as PrincipalPage3_42
    
}