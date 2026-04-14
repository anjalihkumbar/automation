import { Keyboard, Locator, Page, expect } from "@playwright/test";
import dotenv from "dotenv";

export class SyncroEUPage {
    readonly page: Page;
    //Individual policy locators***
    readonly userNameInputField: Locator;
    readonly passwordInputField: Locator;
    readonly loginButton: Locator;
  //  readonly newPolicyIcon: Locator;
 //  readonly individualPolicyLink: Locator;
    readonly managedPolicyLink: Locator;
    readonly contractNumberField: Locator;
    readonly searchBtn: Locator;
   // readonly managedPolicyEditBtn: Locator;
    readonly editPolicyBtn:Locator;
    readonly acceptBtn: Locator;
    readonly confirmBtn: Locator;
    



    constructor(page: Page) {
        this.page = page;
        this.userNameInputField = page.locator("//input[@id='sUserName']");
        this.passwordInputField = page.locator("//input[@id='sPassword']");
        this.loginButton = page.locator("//button[@id='button_login']");
        //this.newPolicyIcon = page.locator("//a[@title='New Policy']");
        //this.individualPolicyLink = page.locator("//span[text()='Individual ']");
        this.managedPolicyLink = page.locator("//a[@title='Manage Policies']");
        this.contractNumberField = page.locator("//input[@name='contractnumber']");
        this.searchBtn = page.locator("//a[@class='btn btn-search']");
        this.editPolicyBtn = page.locator("//i[@class='fa fa-pencil-square-o i_color font_30']");
        this.acceptBtn = page.locator("//a[@id= 'accept_quotation_btn']");
        this.confirmBtn = page.locator("//button[@class='btn btn_custom_pad confirm']");
    
       
    }


   async gotoLoginPage(url: string) {
        await this.page.goto(process.env.URL as string || url);
        await this.page.waitForLoadState('networkidle');
    }
/*
    async verifyPageURL(expectedPageURL: string) {
        await this.page.waitForLoadState('networkidle');
        const actualPageURL = await this.page.url();
        console.log(actualPageURL);
        expect(actualPageURL).toBe(expectedPageURL);
    }
*/
    async loginToApplication(username: string, password: string) {
        await this.userNameInputField.fill(username);
        await this.passwordInputField.fill(password);
        //await this.rememberMeCheckbox.click();
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async searchPolicy () {
        await this.contractNumberField.fill(globalThis.policyNumber);
        await this.searchBtn.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(20000);
        //click on edit the policy locator
    }

    async validatePolicy () {
           await this.page.waitForTimeout(5000);
        await this.editPolicyBtn.click();
       // await this.page.waitForLoadState('networkidle');
    
         await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(5000);
        await this.acceptBtn.click();
        await this.page.waitForTimeout(5000);
        await this.confirmBtn.click();
        await this.page.waitForTimeout(5000);
    }


async clickOnNewPolicyIcon() {
        
        await this.page.waitForLoadState('networkidle');
        await this.newPolicyIcon.click();
        //await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(2000);
    }


    async clickOnIndividualPolicyLink() {
        
        await this.page.waitForLoadState('networkidle');
        await this.individualPolicyLink.click();
        //await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(2000);
    }

    }
 








































































