import { Keyboard, Locator, Page, expect } from "@playwright/test";
import dotenv from "dotenv";

export class LoginPage {
    readonly page: Page;
    readonly userNameOrEmailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly rememberMeCheckbox: Locator;
    readonly forgotPasswordButton: Locator;
    readonly closePopup: Locator;
    readonly signinButton: Locator;
    readonly blankUsernameErrorMsg:Locator;
    readonly blankPwdErrorMsg:Locator;
    readonly lessCharUsernameErrorMsg:Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.userNameOrEmailInputField = page.locator('input[title="Email or Username"]');
        this.passwordInputField = page.locator('input[title="Password"]');
        this.rememberMeCheckbox = page.locator('mat-checkbox[id*="mat-mdc-checkbox-"]');
        this.forgotPasswordButton = page.locator('a[title="Forgot Password ?"]');
        this.closePopup = page.locator('[class="close-icon"] button');
        this.signinButton = page.locator('button[title="Sign in"]');
        this.blankUsernameErrorMsg=page.locator('//mat-label[text()="Field is required"]').first();
        this.blankPwdErrorMsg=page.locator('//mat-label[text()="Field is required"]').last();
        this.lessCharUsernameErrorMsg=page.locator('mat-label[title="Minimum field length is 3"]');
    }

    async gotoLoginPage(url: string) {
        await this.page.goto(process.env.URL as string || url);
        await this.page.waitForLoadState('networkidle');
    }

    async verifyPageURL(expectedPageURL: string) {
        await this.page.waitForLoadState('networkidle');
        const actualPageURL = await this.page.url();
        console.log(actualPageURL);
        expect(actualPageURL).toBe(expectedPageURL);
    }

    async loginToApplication(username: string, password: string) {
        await this.userNameOrEmailInputField.fill(username);
        await this.passwordInputField.fill(password);
        await this.rememberMeCheckbox.click();
        await this.signinButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async enterLoginDetails(username: string,  password: string) {
        await this.userNameOrEmailInputField.fill(username);
        await this.passwordInputField.fill(password);
        await this.rememberMeCheckbox.click();
    }

    async enterEmailId(emailID: string) {
        await this.userNameOrEmailInputField.fill(emailID);
    }

    async clickOnSigninButton() {
        await this.signinButton.click();
        await this.page.waitForLoadState('networkidle');
    }
    /**
     * This function is used to verify the current page title
     * @param expectedPageTitle - the title youwant to verify
     */
    async verifyPageTitle(expectedPageTitle: string) {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
        const actualPageTitle = await this.page.title();
        expect(actualPageTitle).toBe(expectedPageTitle);
    }

    async verifyDashboardPageTitleText(expectedPageTitle: string) {
        await this.page.waitForLoadState('networkidle');
        const actualBlankUsernameErrorMessage = await this.blankUsernameErrorMsg.textContent();
        expect(actualBlankUsernameErrorMessage).toBe(expectedPageTitle);
    }

    //Verify BlankUsername Error Message.
    async verifyBlankUsernameErrorMessage(expectedBlankUsernameErrorMessage: string) {
        const actualBlankUsernameErrorMessage = await this.blankUsernameErrorMsg.textContent();
        expect(actualBlankUsernameErrorMessage).toBe(expectedBlankUsernameErrorMessage);
    }

    //Verify Blank Password Error Message.
    async verifyBlankPasswordErrorMessage(expectedBlankUsernameErrorMessage: string) {
        const actualBlankUsernameErrorMessage = await this.blankPwdErrorMsg.textContent();
        expect(actualBlankUsernameErrorMessage).toBe(expectedBlankUsernameErrorMessage);
    }

    async verifyBlankUsernameErrorMessage1(expectedBlankUsernameErrorMessage: string) {
        const actualBlankUsernameErrorMessage = await this.blankUsernameErrorMsg.textContent();
        expect(actualBlankUsernameErrorMessage).toBe(expectedBlankUsernameErrorMessage);
    }

    async verifyBlankPasswordErrorMessage1(expectedBlankUsernameErrorMessage: string) {
        const actualBlankUsernameErrorMessage = await this.blankPwdErrorMsg.textContent();
        expect(actualBlankUsernameErrorMessage).toBe(expectedBlankUsernameErrorMessage);
    }

    async verifyEnteredUsernameCharacter(expectedCharacter: string) {
        await this.page.waitForLoadState('networkidle');
        const actualCharacter = await this.userNameOrEmailInputField.inputValue();
        expect(actualCharacter).toBe(expectedCharacter);
    }

    async verifyValidationUsernameField(expectedLessCharMessage: string) {
        const actualLessCharUsernameErrorMessage = await this.lessCharUsernameErrorMsg.textContent();
        expect(actualLessCharUsernameErrorMessage).toBe(expectedLessCharMessage);
    }

}