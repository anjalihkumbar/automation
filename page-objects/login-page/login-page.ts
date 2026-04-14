import { Keyboard, Locator, Page, expect } from "@playwright/test";
import dotenv from "dotenv";

export class SyncroLoginPage {
    readonly page: Page;
    readonly usernameInputField: Locator;
    readonly passwordInputField: Locator;
    readonly loginButton: Locator;
    readonly passportnumberInputField: Locator;
    readonly selectcountryInputField: Locator;
  //  readonly codeDropdownField: Locator;
  //  readonly mobilecodeInputField: Locator;
  //  readonly selectmobilecodeInputField: Locator;
  //  readonly mobilenumberInputField: Locator;
 // readonly emailInputField: Locator;
    
    constructor(page: Page) {
        this.page = page;
     
        this.usernameInputField = page.locator("//input[@id='sUserName']");
        this.passwordInputField = page.locator("//input[@id='sPassword']");
        this.loginButton = page.locator("//button[@id='button_login']");
        this.selectcountryInputField = page.locator("//span[normalize-space()='Afghanistan']");
        this.passportnumberInputField = page.locator("//input[@id='mat-input-3']");
    }

    async gotoHomePage(url: string) {
        await this.page.goto(process.env.URL as string || url);
        await this.page.waitForLoadState('networkidle');
        await this.page.setViewportSize({ width: 1540, height: 730 });

    }
    
    async filllogindetails(username: string,password : string) {
        await this.usernameInputField.fill(username);
        await this.passwordInputField.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
        
    }
    
}