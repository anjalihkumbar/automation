import { Keyboard, Locator, Page, expect } from "@playwright/test";
import dotenv from "dotenv";

export class ReiscarePage {
    readonly page: Page;
    readonly firstnameInputField: Locator;
    readonly lastnameInputField: Locator;
    readonly homecountryDropdownField: Locator;
    readonly passportnumberInputField: Locator;
    readonly selectcountryInputField: Locator;
    readonly codeDropdownField: Locator;
    readonly mobilecodeInputField: Locator;
    readonly selectmobilecodeInputField: Locator;
    readonly mobilenumberInputField: Locator;
    readonly emailInputField: Locator;
    readonly streetnameInputField: Locator;
    readonly streetnumberInputField: Locator;
    readonly postalcodeInputField: Locator;
    readonly additionaladdressInputField: Locator;
    readonly cityInputField: Locator;
    readonly countryDropdownField: Locator;
    readonly dayInputField: Locator;
    readonly monthInputField: Locator;
    readonly yearInputField: Locator;
    readonly genderDropdownField: Locator;
    readonly selectgenderDropdownField: Locator;
    readonly firsttabnextButton: Locator;
    readonly addirionalinsuredPersonText: Locator;    
    readonly noteText: Locator;
    readonly addanotherinsuredPersonButton: Locator;
    readonly noButton: Locator;
    readonly secondtabNextButton: Locator;
    readonly secondtabPreviousButton: Locator;
    readonly reiscareButton: Locator;
  //  readonly blankUsernameErrorMsg:Locator;    
  //  readonly blankPwdErrorMsg:Locator;
   // readonly lessCharUsernameErrorMsg:Locator;
    readonly firstNameInputField: Locator;
    readonly lastNameInputField: Locator;
    readonly daYInputField: Locator;
    readonly montHInputField: Locator;
    readonly yeaRInputField:Locator;    
    readonly gendeRDropdownField:Locator;
    readonly selectgendeRDropdownField:Locator;
    readonly homecountrYDropdownField:Locator;    
    readonly selectcountrYInputField:Locator;
    readonly passportnumbeRInputField:Locator;        
    readonly germanyText:Locator;                              
    readonly codEDropdownField:Locator;
    readonly mobileNumberInputField:Locator;
    readonly emaiLInputField:Locator;                                     
    readonly allfieldsonFirstTabErrorMsg:Locator;
    readonly firstTabfirstnameErrorMsg:Locator;
    readonly lastTablastnameErrorMsg:Locator;
    readonly inavlidpostalcodeErrorMsg:Locator;                   
    readonly invaliddateofbirthErrorMsg:Locator; 
    readonly invalidmobilenumberErrorMsg:Locator; 
    readonly addinsuredpersonButton:Locator;     
    readonly firstnamesecondTabInputField: Locator;
    readonly lastnamesecondTabInputField: Locator;
    readonly daysecondTabInputField: Locator;
    readonly monthsecondTabInputField: Locator;
    readonly yearsecondTabInputField: Locator;
    readonly gendersecondTabDropdownField: Locator;
    readonly selectgendersecondTabDropdownField: Locator;
    readonly homecountrysecondTabDropdownField: Locator;
    readonly selectcountrysecondTabInputField: Locator;
    readonly passportnumbersecondTabInputField: Locator;                  
    readonly classictile: Locator; 
    readonly comforttile: Locator; 
    readonly premiumtile: Locator;
    readonly thirdtabnextButton: Locator;                             
    readonly fourttabApplyandPayButton: Locator;
    readonly directdebitButton: Locator;                          
    readonly creditcardButton: Locator;                         
    readonly applyandpayButton: Locator;
    readonly gendeDropdownField:Locator;
    readonly selectgendeDropdownField:Locator;
    readonly homecountrDropdownField:Locator;    
    readonly selectcountrInputField:Locator;
    readonly startDateThirdTab: Locator;
    readonly endDateThirdTab: Locator;
    readonly policynum: Locator;

    readonly bankTransfercardButton: Locator;
    readonly codeDropdownFieldForBTPolicy: Locator;
    readonly readandacceptBTPolicy:Locator;
    readonly consentBTPolicy:Locator;
    readonly consultationBTPolicy:Locator;
    readonly applyandpaybtnForBTPolicy:Locator;
    readonly secondtabNextButtonBTPolicy: Locator;
    readonly thirdtabnextButtonBTPolicy: Locator;
    readonly bankTransferradiobtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.reiscareButton = page.locator("//button[normalize-space()='Expatcare']");
        this.firstnameInputField = page.locator("//input[@id='mat-input-0']");
        this.lastnameInputField = page.locator("//input[@id='mat-input-1']");
        this.homecountryDropdownField = page.locator("//input[@id='mat-input-2']");
        this.selectcountryInputField = page.locator("//span[normalize-space()='Afghanistan']");
        this.passportnumberInputField = page.locator("//input[@id='mat-input-3']");
      //this.codeDropdownField = page.locator("//mat-icon[@class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c19-7']");
        this.codeDropdownField = page.locator("(//mat-label[text()='Code'])[1]");
        this.mobilecodeInputField = page.locator("//input[@class='mat-select-search-input mat-input-element ng-valid ng-touched ng-dirty']");
        this.selectmobilecodeInputField = page.locator("//mat-option[@id='mat-option-2944']//span[@class='mat-option-text']//span[1]");
        this.mobilenumberInputField = page.locator("//input[@id='mat-input-25']");
        this.emailInputField = page.locator("//input[@id='mat-input-4']");
        this.streetnameInputField = page.locator("//input[@id='mat-input-5']");
        this.streetnumberInputField = page.locator("//input[@id='mat-input-6']");
        this.postalcodeInputField = page.locator("//input[@id='mat-input-7']");
        this.additionaladdressInputField = page.locator("//input[@id='mat-input-8']");
        this.cityInputField = page.locator("//input[@id='mat-input-9']");
        this.countryDropdownField = page.locator('input[title="Email or Username"]');
        this.dayInputField = page.locator("//input[@id='mat-input-11']");
        this.monthInputField = page.locator("//input[@id='mat-input-12']");
        this.yearInputField = page.locator("//input[@id='mat-input-13']");
        //this.genderDropdownField = page.locator("//mat-icon[@class='mat-icon notranslate ng-tns-c19-20 material-icons mat-ligature-font mat-icon-no-color']");
        this.genderDropdownField = page.locator("//input[@id='mat-input-14']");
        this.selectgenderDropdownField = page.locator("//span[normalize-space()='Female']");
        //this.selectgenderDropdownField = page.locator("/html/body/div[3]/div/div/div/mat-option[1]");
       // this.selectgenderDropdownField = page.locator("//input[@id='mat-input-15']");
        this.firsttabnextButton = page.locator("//span[@class='mat-mdc-button-touch-target']");
        this.addirionalinsuredPersonText = page.locator("//h1[normalize-space()='Additional insured person']");
        this.noteText = page.locator("//div[@class='fieldset-note']");
        this.addanotherinsuredPersonButton = page.locator("//a[normalize-space()='Add another insured person']");
        this.noButton = page.locator("//label[@for='mat-radio-3-input']//span[@class='mat-radio-outer-circle']");
        //this.secondtabNextButton = page.locator("//span[normalize-space()='Next']");
          this.secondtabNextButton = page.locator("(//span[normalize-space()='Next'])[1]")
        this.secondtabPreviousButton = page.locator("//span[normalize-space()='Previous']");
        this.firstNameInputField = page.locator("//input[@id='mat-input-16']");
        this.lastNameInputField = page.locator("//input[@id='mat-input-17']");
        this.daYInputField = page.locator("//input[@id='mat-input-18']");
        this.montHInputField = page.locator("//input[@id='mat-input-19']");
        this.yeaRInputField = page.locator("//input[@id='mat-input-20']");
        this.gendeRDropdownField = page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[4]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[2]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectgendeRDropdownField = page.locator("//span[normalize-space()='Male']");
        this.homecountrYDropdownField = page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[4]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[3]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectcountrYInputField = page.locator("//span[normalize-space()='India']");
        this.passportnumbeRInputField = page.locator("//input[@id='mat-input-24']");
        this.codEDropdownField = page.locator("//mat-icon[@class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c9-30']");
        this.mobileNumberInputField = page.locator("//input[@id='mat-input-25']");
        this.emaiLInputField = page.locator("//input[@id='mat-input-26']");
        this.germanyText = page.locator("//input[@type='text' and @value=' Germany ']");
        this.allfieldsonFirstTabErrorMsg=page.locator("//div[@id='iris-msg-396']");
        this.firstTabfirstnameErrorMsg=page.locator("//div[@id='row-12845']//p[@class='form-error ng-star-inserted'][normalize-space()='Field format is invalid']");
        this.lastTablastnameErrorMsg=page.locator("//div[@id='row-12928']//p[@class='form-error ng-star-inserted'][normalize-space()='Field format is invalid']");
        this.inavlidpostalcodeErrorMsg=page.locator("//div[@class='fieldType-19 form-error-msg ng-star-inserted']");
        this.invaliddateofbirthErrorMsg=page.locator("//p[@class='form-error ng-star-inserted']");
        this.invalidmobilenumberErrorMsg=page.locator("//p[normalize-space()='Invalid Phone']");
        //this.addinsuredpersonButton=page.locator("//a[@class='iris-link add']");
        this.addinsuredpersonButton = page.locator("//text()[normalize-space()=\"Add another insured person\"]/parent::*");
        this.firstnamesecondTabInputField=page.locator("//input[@id='mat-input-27']");
        this.lastnamesecondTabInputField=page.locator("//input[@id='mat-input-28']");
        this.daysecondTabInputField=page.locator("//input[@id='mat-input-29']");
        this.monthsecondTabInputField=page.locator("//input[@id='mat-input-30']");
        this.yearsecondTabInputField=page.locator("//input[@id='mat-input-31']");
        this.gendersecondTabDropdownField=page.locator("//mat-icon[@class='mat-icon notranslate ng-tns-c19-46 material-icons mat-ligature-font mat-icon-no-color']");
        this.selectgendersecondTabDropdownField=page.locator("//span[normalize-space()='Female']");
        this.homecountrysecondTabDropdownField=page.locator("//mat-icon[@class='mat-icon notranslate ng-tns-c19-48 material-icons mat-ligature-font mat-icon-no-color']");
        this.selectcountrysecondTabInputField=page.locator("//span[normalize-space()='Germany']");
        this.passportnumbersecondTabInputField=page.locator("//input[@id='mat-input-35']");
        this.classictile=page.locator("//label[@for='mat-radio-5-input']");
        this.comforttile=page.locator("//label[@for='mat-radio-6-input']");
        this.premiumtile=page.locator("//label[@for='mat-radio-7-input']");
        //this.thirdtabnextButton = page.locator("//mat-icon[@aria-label='Mat Arrow Forward']");
        this.thirdtabnextButton = page.locator("//span[text()='Next']");
       // this.thirdtabnextButton = page.locator("//html//body//app-root//app-layout//div//main//div[3]//div//section//form//app-dynamic-form//div//form//iris-stepper-nav//div//div[2]//iris-qnb-button//iris-button-action//iris-action-base//button//span[2]//iris-base-label//span");
       //this.thirdtabnextButton = page.locator("(//span[@class='mdc-button__label'])[last()]");
       // this.thirdtabnextButton = page.locator("//span[@title='Next']");

        this.fourttabApplyandPayButton = page.locator("//span[normalize-space()='Apply & Pay']");
        this.directdebitButton = page.locator("//label[@for='mat-radio-5-input']");                 
        this.creditcardButton = page.locator("//input[@id='mat-radio-6-input' and @class='mdc-radio__native-control']");   
       //this.applyandpayButton = page.locator("//span[normalize-space()='Apply & Pay']"); 
        this.applyandpayButton = page.locator("//span[@title='Apply & Pay']");
        this.gendeDropdownField = page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[4]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[2]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]"); 
        this.selectgendeDropdownField = page.locator("//span[normalize-space()='Male']");                           
        this.homecountrDropdownField = page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[4]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[3]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectcountrInputField = page.locator("//span[normalize-space()='Afghanistan']");
        this.startDateThirdTab = page.locator("//input[@class='mat-mdc-input-element ng-tns-c19-0 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored ng-dirty ng-valid ng-touched']");
        this.endDateThirdTab = page.locator("//input[@class='mat-mdc-input-element mat-datepicker-input ng-tns-c19-53 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored']");
        this.policynum = page.locator("//p[contains(text(),'We have received your request.')]/following-sibling::p/b");

        this.bankTransferradiobtn = page.locator("//input[@class='mdc-radio__native-control' and @id='mat-radio-11-input']");
         this.secondtabNextButtonBTPolicy = page.locator("(//span[@class='mdc-button__label'])[last()]");
       this.thirdtabnextButtonBTPolicy = page.locator("(//span[@class='mdc-button__label'])[last()]");
           // this.thirdtabnextButtonBTPolicy = page.locator("//mat-icon[@aria-label='Mat Arrow Forward']");
     
        this.bankTransfercardButton = page.locator("//input[@id='mat-radio-14-input']");  
        this.codeDropdownFieldForBTPolicy = page.locator("//mat-label[@class='ng-tns-c19-7']");
        this.readandacceptBTPolicy = page.locator("//div[contains(text(),'I have read and hereby accept the ')]/../span");
     // this.consentPolicy = page.locator("//div[contains(text(),'Yes, I have read the notification for the   ')]");
       // this.consentPolicy = page.locator("//div[contains(text(),'Yes, I have read the notification for the disclosure obligation')]/../span[contains(@class,'checkmark')]");
        this.consentBTPolicy = page.locator("//div[contains(text(),'I consent to MAWISTA GmbH sending me information a')]");
        this.consultationBTPolicy = page.locator("//b[contains(text(),'Yes, I sufficiently informed myself about the prod')]");
        this.applyandpaybtnForBTPolicy = page.locator("(//span[@class='mdc-button__label'])[last()]");




    }  




    async gotoHomePage(url: string) {
        await this.page.goto(process.env.URL as string || url);
        await this.page.waitForLoadState('networkidle');
        await this.page.setViewportSize({ width: 1536, height: 730 });

    }

    async verifyPageURL(expectedPageURL: string) {
        await this.page.waitForLoadState('networkidle');
        const actualPageURL = await this.page.url();
        console.log(actualPageURL);
        expect(actualPageURL).toBe(expectedPageURL);
    }

    async expatcareFirstTab(firstname: string, lastname: string, passport: string, code: string, mobilenumber: string, email: string, streetname: string, streetnumber: string, postalcode: string, address: string, city: string, day: string, month: string, year: string) {
        // await this.expatcarebButton.click();
         await this.firstnameInputField.fill(firstname);
         await this.lastnameInputField.fill(lastname);
         await this.homecountryDropdownField.click();
         await this.selectcountryInputField.click();
         await this.passportnumberInputField.fill(passport);
         await this.codeDropdownField.click();
         await this.page.locator("//div[@class='cdk-overlay-pane']//mat-option[2]//img").click();
         await this.mobilenumberInputField.fill(mobilenumber);
         await this.page.waitForTimeout(1000);
         await this.emailInputField.fill(email);
         await this.streetnameInputField.fill(streetname);
         await this.streetnumberInputField.fill(streetnumber);
         await this.postalcodeInputField.fill(postalcode);
         await this.additionaladdressInputField.fill(address);
         await this.cityInputField.fill(city);
        await this.page.locator("//mat-label[contains(text(),'Country')]").click();
        await this.page.locator("//span[normalize-space()='Afghanistan']").click();
         await this.dayInputField.fill(day);
         await this.monthInputField.fill(month);
         await this.yearInputField.fill(year);
         await this.genderDropdownField.click();
         await this.selectgenderDropdownField.click();
         //await this.firsttabnextButton.click();
         
         //await this.page.waitForLoadState('networkidle');
        // await this.page.waitForTimeout(10000);
     }

    async reiscareFirstTab(firstname: string, lastname: string, passport: string, code: string, mobilenumber: string, email: string, streetname: string, streetnumber: string, postalcode: string, address: string, city: string, day: string, month: string, year: string) {
       // await this.expatcarebButton.click();
        await this.firstnameInputField.fill(firstname);
        await this.lastnameInputField.fill(lastname);
        await this.homecountryDropdownField.click();
        await this.selectcountryInputField.click();
        await this.passportnumberInputField.fill(passport);
        await this.codeDropdownField.click();
        await this.page.locator("//mat-option[@id='mat-option-101']//span[@class='mdc-list-item__primary-text']").click();
        await this.mobilenumberInputField.fill(mobilenumber);
        await this.page.waitForTimeout(1000);
        await this.emailInputField.fill(email);
        await this.streetnameInputField.fill(streetname);
        await this.streetnumberInputField.fill(streetnumber);
        await this.postalcodeInputField.fill(postalcode);
        await this.additionaladdressInputField.fill(address);
        await this.cityInputField.fill(city);
        await this.page.locator("//mat-label[contains(text(),'Country')]").click();
        await this.page.locator("//span[normalize-space()='Afghanistan']").click();
        await this.dayInputField.fill(day);
        await this.monthInputField.fill(month);
        await this.yearInputField.fill(year);
        await this.genderDropdownField.click();
        await this.selectgenderDropdownField.click();
        //await this.firsttabnextButton.click();
        
        //await this.page.waitForLoadState('networkidle');
       // await this.page.waitForTimeout(10000);
    }

    async expatcareinsuredpersonsdetailsFirstTab(firstName: string, lastName: string, passport: string, code: string, mobilenumber: string, email: string, streetname: string, streetnumber: string, postalcode: string, address: string, city: string, dAy: string, monTh: string, yeAr: string) {
        await this.noButton.click();
        await this.firstNameInputField.fill(firstName);
        await this.lastNameInputField.fill(lastName);
        await this.daYInputField.fill(dAy);
        await this.montHInputField.fill(monTh);
        await this.yeaRInputField.fill(yeAr);
        await this.gendeDropdownField.click();
        await this.selectgendeDropdownField.click();
        await this.homecountrDropdownField.click();
        await this.selectcountrInputField.click();
        await this.passportnumbeRInputField.fill(passport);
        await this.page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[4]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[4]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-phone[1]/form[1]/app-phone-number[1]/div[1]/mat-form-field[1]/div[1]/div[1]/div[3]/div[1]/iris-select-with-search[1]/mat-form-field[1]/div[1]/div[1]/div[3]").click();
        await this.page.locator("//div[@class='cdk-overlay-pane']//mat-option[2]//img").click();
        await this.mobileNumberInputField.fill(mobilenumber);
        await this.page.waitForTimeout(1000);
        await this.emaiLInputField.fill(email);
        //await this.firsttabnextButton.click();
        
        //await this.page.waitForLoadState('networkidle');
       // await this.page.waitForTimeout(10000);
    }

    async expatcaregenderchangeFirstTab(firstname: string, lastname: string, passport: string, code: string, mobilenumber: string, email: string, streetname: string, streetnumber: string, postalcode: string, address: string, city: string, day: string, month: string, year: string) {
        // await this.expatcarebButton.click();
         await this.firstnameInputField.fill(firstname);
         await this.lastnameInputField.fill(lastname);
         await this.homecountryDropdownField.click();
         await this.selectcountryInputField.click();
         await this.passportnumberInputField.fill(passport);
         await this.codeDropdownField.click();
         await this.page.locator("//div[@class='cdk-overlay-pane']//mat-option[2]//img").click();
         await this.mobilenumberInputField.fill(mobilenumber);
         await this.page.waitForTimeout(1000);
         await this.emailInputField.fill(email);
         await this.streetnameInputField.fill(streetname);
         await this.streetnumberInputField.fill(streetnumber);
         await this.postalcodeInputField.fill(postalcode);
         await this.additionaladdressInputField.fill(address);
         await this.cityInputField.fill(city);
         await this.dayInputField.fill(day);
         await this.monthInputField.fill(month);
         await this.yearInputField.fill(year);
         await this.genderDropdownField.click();
         await this.page.locator("//span[normalize-space()='Male']").click();
         //await this.firsttabnextButton.click();
         
         //await this.page.waitForLoadState('networkidle');
        // await this.page.waitForTimeout(10000);
     }
 

    async clickOnFirstTabNextButton() {
        await this.firsttabnextButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(1000);
    }

    async clickOnNoButton() {
        await this.noButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async reiscarecareinsuredpersonsdetailsFirstTab(firstName: string, lastName: string, passport: string, code: string, mobilenumber: string, email: string, streetname: string, streetnumber: string, postalcode: string, address: string, city: string, dAy: string, monTh: string, yeAr: string) {
        //await this.page.waitForTimeout(10000);
       // await this.noButton.click();
        //await this.page.waitForTimeout(10000);
         await this.firstNameInputField.fill(firstName);
        /* await this.lastNameInputField.fill(lastName);
         await this.daYInputField.fill(dAy);
         await this.montHInputField.fill(monTh);
         await this.yeaRInputField.fill(yeAr);
         await this.gendeRDropdownField.click();
         await this.selectgendeRDropdownField.click();
         await this.homecountrYDropdownField.click();
         await this.selectcountrYInputField.click();
         await this.passportnumbeRInputField.fill(passport);
         await this.codEDropdownField.click();
         await this.page.locator("//div[@class='cdk-overlay-pane']//mat-option[2]//img").click();
         await this.mobileNumberInputField.fill(mobilenumber);
         await this.page.waitForTimeout(1000);
         await this.emaiLInputField.fill(email);*/
         //await this.firsttabnextButton.click();
         
         //await this.page.waitForLoadState('networkidle');
        // await this.page.waitForTimeout(10000);
     }

    async verifyPageTitle(expectedPageTitle: string) {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
        const actualPageTitle = await this.page.title();
        expect(actualPageTitle).toBe(expectedPageTitle);
    }

    async verifyAplicationFirstTabText(expectedAdditinalinsuredpersonText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualAdditinalinsuredpersonText = await this.page.locator("//h1[normalize-space()='Application for MAWISTA Reisecare']").textContent();
        expect(actualAdditinalinsuredpersonText).toBe(expectedAdditinalinsuredpersonText);
    }

    async verifyDEAplicationFirstTabText(expectedAdditinalinsuredpersonText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualAdditinalinsuredpersonText = await this.page.locator("//h1[normalize-space()='Bewerbung für MAWISTA Reisecare']").textContent();
        expect(actualAdditinalinsuredpersonText).toBe(expectedAdditinalinsuredpersonText);
    }

    async verifyPolicbyholderdetailsFirstTaext(expectednoteText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualnoteText = await this.page.locator("//div[@id='row-12844']//div[@class='col-md-12 ng-star-inserted']//div[1]").textContent();
        console.log(actualnoteText);
        expect(actualnoteText).toContain(expectednoteText);
    }

    async verifyPolicbyholderaddressgermanyText(expectednoteText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualnoteText = await this.page.locator("//div[@id='row-12844']//div[@class='col-md-12 ng-star-inserted']//div[1]").textContent();
        console.log(actualnoteText);
        expect(actualnoteText).toContain(expectednoteText);
    }

    async verifyAreyouinsuredpersonFirstText(expectednoteText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualnoteText = await this.page.locator("//div[@id='row-12794']//div[@class='col-md-12 ng-star-inserted']//div[1]").textContent();
        expect(actualnoteText).toContain(expectednoteText);
    }

    async verifyEnteryourdateofbirthFirstText(expectednoteText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualnoteText = await this.page.locator("//div[contains(text(),'Enter your date of birth and gender')]").textContent();
        expect(actualnoteText).toBe(expectednoteText);
    }

    async verifyadditionalinsuredPersonText(expectedAdditinalinsuredpersonText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualAdditinalinsuredpersonText = await this.addirionalinsuredPersonText.textContent();
        expect(actualAdditinalinsuredpersonText).toBe(expectedAdditinalinsuredpersonText);
    }

    async verifynoteText(expectednoteText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualnoteText = await this.noteText.textContent();
        expect(actualnoteText).toBe(expectednoteText);
    }

    async verifyGermanyText(expectedgermanyText: string) {
        await this.page.waitForLoadState('networkidle');
       // const actualgermanyText = await this.germanyText.textContent();
        expect("Germany").toBe(expectedgermanyText);
    }

    async verifyNoanydetailsfillederrorText(expectedgermanyText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualallfieldblankText = await this.page.locator("//div[contains(text(),'Invalid or missing information, please check your information and try again')]").textContent();
      // console.log(actualallfieldblankText);
      expect(actualallfieldblankText).toBe(expectedgermanyText);
    }

    async verifyFirstnameonfirsttabfillederrorText(expectedfirstnameerroronfirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualallfirstnameerroronfirsttabText = await this.firstTabfirstnameErrorMsg.textContent();
        expect(actualallfirstnameerroronfirsttabText).toBe(expectedfirstnameerroronfirsttabText);
    }

    async verifyFirstnameoninsuredfirsttabfillederrorText(expectedfirstnameerroronfirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualallfirstnameerroronfirsttabText = await this.page.locator("//p[@class='form-error ng-star-inserted']").textContent();
        expect(actualallfirstnameerroronfirsttabText).toBe(expectedfirstnameerroronfirsttabText);
    }

   async verifyinvalidpostalcodeerrorText(expectedinvalidpostalcodefirsttabText: string) {
       await this.page.waitForLoadState('networkidle');
       const actualalinvalidpostalcodeText = await this.page.locator("//p[normalize-space()='Invalid Postal Code']").textContent();
       console.log(actualalinvalidpostalcodeText);
       expect(actualalinvalidpostalcodeText).toBe(expectedinvalidpostalcodefirsttabText);
    }

    async verifylastnameonfirsttabfillederrorText(expectedlastnameerroronfirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualallastnameerroronfirsttabText = await this.lastTablastnameErrorMsg.textContent();
      // console.log("actualallastnameerroronfirsttabText");
        expect(actualallastnameerroronfirsttabText).toBe(expectedlastnameerroronfirsttabText);
    }

    async verifyinvalidDateofbirtherrorText(expectedinvaliddateofbirthfirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualinvaliddateofbirthfirsttabText = await this.invaliddateofbirthErrorMsg.textContent();
       console.log(actualinvaliddateofbirthfirsttabText);
        expect(" Min date should be ").toBe(expectedinvaliddateofbirthfirsttabText);
    }

    async verifyinvalidPassprterrorText(expectedinvaliddateofbirthfirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualinvaliddateofbirthfirsttabText = await this.page.locator("//p[normalize-space()='Field format is invalid']").textContent();
       console.log(actualinvaliddateofbirthfirsttabText);
        expect(actualinvaliddateofbirthfirsttabText).toBe(expectedinvaliddateofbirthfirsttabText);
    }

    async verifyinvalidPassportnumberrrorText(expectedinvaliddateofbirthfirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualinvaliddateofbirthfirsttabText = await this.page.locator("//p[@class='form-error ng-star-inserted']").textContent();
       console.log(actualinvaliddateofbirthfirsttabText);
        expect(actualinvaliddateofbirthfirsttabText).toBe(expectedinvaliddateofbirthfirsttabText);
    }

    async verifyinvalidMobilenumbererrorText(expectedinvalidmobilenumberfirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualinvalidmobilenumberfirsttabText = await this.invalidmobilenumberErrorMsg.textContent();
        expect(actualinvalidmobilenumberfirsttabText).toBe(expectedinvalidmobilenumberfirsttabText);
    }

    async verifyfemalegenderText(expectedfemalegenderfirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualfemalegenderfirsttabText = await this.page.locator("//input[@id='mat-input-15']").textContent();
       console.log(actualfemalegenderfirsttabText);
        expect(" Female ").toBe(expectedfemalegenderfirsttabText);
    }

    async clickOnAddanotherinsuredpersonButton() {
        await this.addinsuredpersonButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

       async reisecaresecondtTabOneMemberDetail(firstname: string, lastname: string, passport: string,day: string, month: string, year: string) {
        
        await this.firstnamesecondTabInputField.fill(firstname);
        await this.lastnamesecondTabInputField.fill(lastname);
        await this.daysecondTabInputField.fill(day);
        await this.monthsecondTabInputField.fill(month);
        await this.yearsecondTabInputField.fill(year);
        await this.gendersecondTabDropdownField.click();
        await this.selectgendersecondTabDropdownField.click();
        await this.homecountrysecondTabDropdownField.click();
        await this.selectcountrysecondTabInputField.click();
        await this.passportnumbersecondTabInputField.fill(passport);
        await this.page.waitForTimeout(10000);
    }


    async verifypaymentoptionText(expectedfemalegenderfirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualfemalegenderfirsttabText = await this.page.locator("//div[@id='row-12887']//div[@class='col-md-12 ng-star-inserted']//div[1]").textContent();
       console.log(actualfemalegenderfirsttabText);
        expect(actualfemalegenderfirsttabText).toBe(expectedfemalegenderfirsttabText);
    }

    

     async expatcaresecondpersoninfosecondtTab(firstname: string, lastname: string, passport: string,day: string, month: string, year: string) {
        
        await this.page.locator("//input[@id='mat-input-37']").scrollIntoViewIfNeeded();
       // await this.page.waitForTimeout(10000);
        await this.page.locator("//input[@id='mat-input-37']").fill(firstname);
        await this.page.locator("//input[@id='mat-input-38']").fill(lastname);
        await this.page.locator("//input[@id='mat-input-39']").fill(day);
        await this.page.locator("//input[@id='mat-input-40']").fill(month);
        await this.page.locator("//input[@id='mat-input-41']").fill(year);
        
        await this.page.locator("//mat-icon[@class='mat-icon notranslate ng-tns-c9-49 material-icons mat-ligature-font mat-icon-no-color']").click();
        
        await this.page.locator("//span[normalize-space()='Male']").click();
        await this.page.locator("//mat-icon[@class='mat-icon notranslate ng-tns-c9-50 material-icons mat-ligature-font mat-icon-no-color']").click();
        await this.page.locator("//span[normalize-space()='Afghanistan']").click();
       // await this.page.waitForTimeout(50000);
        await this.page.locator("//input[@id='mat-input-45']").fill(passport);
        await this.page.waitForTimeout(10000);
    }

     async expatcaresecondtTab(firstname: string, lastname: string, passport: string,day: string, month: string, year: string) {
        
        await this.firstnamesecondTabInputField.fill(firstname);
        await this.lastnamesecondTabInputField.fill(lastname);
        await this.daysecondTabInputField.fill(day);
        await this.monthsecondTabInputField.fill(month);
        await this.yearsecondTabInputField.fill(year);
        await this.gendersecondTabDropdownField.click();
        await this.selectgendersecondTabDropdownField.click();
        await this.homecountrysecondTabDropdownField.click();
        await this.selectcountrysecondTabInputField.click();
        await this.passportnumbersecondTabInputField.fill(passport);
        await this.page.waitForTimeout(10000);
    }

   

    async expatcaregendersecondtTab(firstname: string, lastname: string, passport: string,day: string, month: string, year: string) {
        
        await this.firstnamesecondTabInputField.fill(firstname);
        await this.lastnamesecondTabInputField.fill(lastname);
        await this.daysecondTabInputField.fill(day);
        await this.monthsecondTabInputField.fill(month);
        await this.yearsecondTabInputField.fill(year);
        await this.gendersecondTabDropdownField.click();
        await this.page.locator("//span[normalize-space()='Male']").click();
        await this.homecountrysecondTabDropdownField.click();
        await this.selectcountrysecondTabInputField.click();
        await this.passportnumbersecondTabInputField.fill(passport);
        await this.page.waitForTimeout(10000);
    }

    async expatcareThiradpersoninfosecondtTab(firstname: string, lastname: string, passport: string,day: string, month: string, year: string) {
       
        await this.page.locator("//input[@id='mat-input-47']").fill(firstname);
        await this.page.locator("//input[@id='mat-input-48']").fill(lastname);
        //await this.page.locator("//input[@id='mat-input-49']").scrollIntoViewIfNeeded();
       
        await this.page.locator("//input[@id='mat-input-49']").fill(day);
        await this.page.waitForTimeout(10000);
        //await this.page.locator("//input[@id='mat-input-51']").scrollIntoViewIfNeeded();
        //await this.page.waitForTimeout(30000);
        await this.page.locator("//input[@id='mat-input-51']").fill(month);
        await this.page.locator("//input[@id='mat-input-51']").fill(year);
        await this.page.waitForTimeout(30000);
        await this.page.locator("//mat-icon[@class='mat-icon notranslate ng-tns-c9-59 material-icons mat-ligature-font mat-icon-no-color']").scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(10000);
        await this.page.locator("//mat-icon[@class='mat-icon notranslate ng-tns-c9-59 material-icons mat-ligature-font mat-icon-no-color']").click();
        await this.page.waitForTimeout(90000);
        await this.page.locator("//span[normalize-space()='Male']").click();
        await this.page.waitForTimeout(30000);
        await this.page.locator("//mat-icon[@class='mat-icon notranslate ng-tns-c9-60 material-icons mat-ligature-font mat-icon-no-color']").click();
        await this.page.locator("//span[normalize-space()='Afghanistan']").click();
        await this.page.waitForTimeout(30000);
        await this.page.locator("//input[@id='mat-input-55']").fill(passport);
        await this.page.waitForTimeout(30000);
        await this.page.waitForTimeout(900000);
    }

     async clickOnsecondtabNextButton() {
        await this.secondtabNextButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async clickOnsecondtabRemoveButton() {
        await this.page.locator("//span[normalize-space()='Remove']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(30000);
    }
    
    async verifyaddanotherinsuredPersonButton(expectedaddaditionalinsuredpersonText: string) {
        const buttonVisible = await this.page.isVisible('addanotherinsuredPersonButton');
    if (buttonVisible) {
      console.log('Button is visible');
      const actualbuttonText = await this.page.textContent('addanotherinsuredPersonButton');
      expect(actualbuttonText).toBe(expectedaddaditionalinsuredpersonText);
      //console.log('Button is visible');
       } else {
      //console.log('Button is not visible');
    }
    }

    async verifysecondtabNextButton(expectedsecondtabNextText: string) {
        const buttonVisible = await this.page.isVisible('secondtabNextButton');
    if (buttonVisible) {
      console.log('Button is visible');
      const actualsecondtabNextbuttonText = await this.page.textContent('secondtabNextButton');
      expect(actualsecondtabNextbuttonText).toBe(expectedsecondtabNextText);
      //console.log('Button is visible');
       } else {
      //console.log('Button is not visible');
    }
  
    }

    async verifysecondtabPreviousButton(expectedsecondtabPreviousButtonText: string) {
        const buttonVisible = await this.page.isVisible('secondtabPreviousButton');
    if (buttonVisible) {
      console.log('Button is visible');
      const actualsecondtabPreviousButtonText = await this.page.textContent('secondtabPreviousButton');
      expect(actualsecondtabPreviousButtonText).toBe(expectedsecondtabPreviousButtonText);
      //console.log('Button is visible');
       } else {
      //console.log('Button is not visible');
    }
  
    }

    async verifyfourthtabNextButton(expectedsecondtabNextText: string) {
        const buttonVisible = await this.page.isVisible('fourttabApplyandPayButton');
    if (buttonVisible) {
      console.log('Button is visible');
      const actualsecondtabNextbuttonText = await this.page.textContent('fourttabApplyandPayButton');
      expect(actualsecondtabNextbuttonText).toBe(expectedsecondtabNextText);
      //console.log('Button is visible');
       } else {
      //console.log('Button is not visible');
    }
  
    }

    async verifyfourthtabPreviousButton(expectedsecondtabPreviousButtonText: string) {
        const buttonVisible = await this.page.isVisible('secondtabPreviousButton');
    if (buttonVisible) {
      console.log('Button is visible');
      const actualsecondtabPreviousButtonText = await this.page.textContent('secondtabPreviousButton');
      expect(actualsecondtabPreviousButtonText).toBe(expectedsecondtabPreviousButtonText);
      //console.log('Button is visible');
       } else {
      //console.log('Button is not visible');
    }
  
    }


    async verifyPlandetailsText(expectedplandetailsthirdtabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualplandetailsThirdtabText = await this.page.locator("//h1[normalize-space()='Plan details']").textContent();
        expect(actualplandetailsThirdtabText).toBe(expectedplandetailsthirdtabText);
    }

    async verifyPeriodofinsuranceText(expectedperiodofinsurancethirdtabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualperiodofinsuranceThirdtabText = await this.page.locator("//div[contains(text(),'Period of insurance')]").textContent();
        expect(actualperiodofinsuranceThirdtabText).toBe(expectedperiodofinsurancethirdtabText);
    }

    async verifyPreferredplanText(expectedpreferredplanthirdtabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualperferredplanThirdtabText = await this.page.locator("//div[contains(text(),'Choose your preferred plan')]").textContent();
        expect(actualperferredplanThirdtabText).toBe(expectedpreferredplanthirdtabText);
    }

    async verifyAdditionnaloptionText(expectedadditionaloptionthirdtabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualadditionaloptionThirdtabText = await this.page.locator("//h2[@class='mat-h2 mb-md']//div[1]").textContent();
        expect(actualadditionaloptionThirdtabText).toContain("Additional option");
    }

    async verifyIncludecoverageText(expectedincludecoveragethirdtabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualaincludecoverageThirdtabText = await this.page.locator("//label[@for='mat-checkbox-1-input']//span[@class='mat-checkbox-label']").textContent();
        expect(actualaincludecoverageThirdtabText).toContain(expectedincludecoveragethirdtabText);
       
    }

    async verifyPaymentsummaryText(expectedpaymentsummarythirdtabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualpaymentsummaryThirdtabText = await this.page.locator("//div[contains(text(),'Payment summary')]").textContent();
        expect(actualpaymentsummaryThirdtabText).toBe(expectedpaymentsummarythirdtabText);
    }

    async verifyTotalpaymentText(expectedtotalpaymentthirdtabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualtotalpaymentThirdtabText = await this.page.locator("//b[normalize-space()='Total payment per month']").textContent();
        expect(actualtotalpaymentThirdtabText).toBe(expectedtotalpaymentthirdtabText);
    }

    async verifyfirstnamesecondtaberrorText(expectedfirstnameerroronsecondtabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualalfirstnameerroronsecondtabText = await this.page.locator("//div[@id='row-12900']//p[@class='form-error ng-star-inserted'][normalize-space()='Field is required']").textContent();
        expect(actualalfirstnameerroronsecondtabText).toBe(expectedfirstnameerroronsecondtabText);
    }

    async clickOnsecondtabPreviousButton() {
        await this.secondtabPreviousButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async clickOnIncludecoveragecheckbox() {
        await this.page.locator("//label[contains(text(),' Include coverage for USA & Canada ')]").click();
        //await this.page.locator("//input[@id='mat-mdc-checkbox-3-input']").click();
        //await this.page.getByLabel('Include coverage for USA & Canada').click();

        await this.page.waitForLoadState('networkidle');
       // await this.page.waitForTimeout(10000);
    }
    async clickOnIncludeliabilitycheckbox() {
        await this.page.locator("//label[contains(text(),' Include coverage for accident and liability insurance ')]").click();
        await this.page.waitForLoadState('networkidle');

    }

    async veriffirsttabyexpectcareText(expectedexpectcarefirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualalexpectcarefirsttabText = await this.page.locator("//h1[normalize-space()='Application for MAWISTA Expatcare']").textContent();
        expect(actualalexpectcarefirsttabText).toBe(expectedexpectcarefirsttabText);
    }

    async verifyCheckboxconseterrorText(expectedexpectcarefirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualalexpectcarefirsttabText = await this.page.locator("//body//app-root//div[@class='row ng-star-inserted']//div[@class='row ng-star-inserted']//div[@class='row ng-star-inserted']//div[@class='row ng-star-inserted']//div[1]//app-shared-errormessage[1]//div[1]//p[1]").textContent();
        expect(actualalexpectcarefirsttabText).toBe(expectedexpectcarefirsttabText);
    }

    async verifyBICFiledText(expectedexpectcarefirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualalexpectcarefirsttabText = await this.page.locator("//div[normalize-space()='COBADEFF']").textContent();
        expect(actualalexpectcarefirsttabText).toBe(expectedexpectcarefirsttabText);
    }

    async verifywrongibanText(expectedexpectcarefirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualalexpectcarefirsttabText = await this.page.locator("//p[normalize-space()='Account Number check digit not correct']").textContent();
        expect(actualalexpectcarefirsttabText).toBe(expectedexpectcarefirsttabText);
    }

    async verifsecondtabinsuredfirstnameText(expectedexpectcarefirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualalexpectcarefirsttabText = await this.page.locator("//p[normalize-space()='Field format is invalid']").textContent();
       console.log(actualalexpectcarefirsttabText);
       expect(actualalexpectcarefirsttabText).toBe(expectedexpectcarefirsttabText);
    }

    async verifsecondtabinsuredlastnameText(expectedexpectcarelasttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualalexpectcarelasttabText = await this.page.locator("//div[@id='row-12901']//p[@class='form-error ng-star-inserted'][normalize-space()='Field format is invalid']").textContent();
       console.log(actualalexpectcarelasttabText);
       expect(actualalexpectcarelasttabText).toBe(expectedexpectcarelasttabText);
    }

    async verifsecondtabaddinsuredmemberexpectcareText(expectedexpectcarefirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualalexpectcarefirsttabText = await this.page.locator("//h1[normalize-space()='Application for MAWISTA Expatcare']").textContent();
        expect(actualalexpectcarefirsttabText).toBe(expectedexpectcarefirsttabText);
    }

     async verifsecondtabaddinsuredpassworderrorexpectcareText(expectedexpectcarepassworderrorsecondtabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualalexpectcarepassworderrormsgonsecondabText = await this.page.locator("//h1[normalize-space()='Application for MAWISTA Expatcare']").textContent();
        expect(actualalexpectcarepassworderrormsgonsecondabText).toBe(expectedexpectcarepassworderrorsecondtabText);
    
     }

     async expatcarefilldebitcarddetailstTab(iban: string) {
        
        //await this.page.locator("//input[@id='mat-input-33']").fill(name);
        await this.page.locator("//input[@placeholder='IBAN']").fill(iban);
        await this.page.keyboard.press('Tab');
        await this.page.waitForTimeout(10000);
    }

    async expatcareclickonibanchkboxTab() {

        await this.page.locator("//label[normalize-space()='Issue SEPA Direct Debit Mandate']").click();
    }
     async clickOnClassictileofThirdTab() {
        await this.classictile.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }
    async clickOnComforttileofThirdTab() {
        await this.comforttile.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }
    async clickOnPremiumtileofThirdTab() {
        await this.premiumtile.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }
    async verifyClassicTileText(expectedfirstliText: string,expectedsecondliText: string,expectedthirdliText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualfirtliText = await this.page.locator("//li[normalize-space()='Reimbursement of medical costs']").textContent();
        expect(actualfirtliText).toContain(expectedfirstliText);
        const actualsecondliText = await this.page.locator("//li[normalize-space()='Reimbursement of medication']").textContent();
        expect(actualsecondliText).toContain(expectedsecondliText);
        const actualThirdiText = await this.page.locator("//li[normalize-space()='24/7 medical Assistance']").textContent();
        expect(actualThirdiText).toContain(expectedthirdliText);
    }

    async verifyNameandPremiumonpaymentsummarypageText(expectedfirstliText: string,expectedsecondliText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualfirtliText = await this.page.locator("//span[normalize-space()='Test Character']").textContent();
        expect(actualfirtliText).toContain(expectedfirstliText);
        const actualsecondliText = await this.page.locator("//span[normalize-space()='13.5']").textContent();
        expect(actualsecondliText).toContain(expectedsecondliText);
        
    }

    async verifyCofortTileText(expectedfirstliText: string,expectedsecondliText: string,expectedthirdliText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualfirtliText = await this.page.locator("//li[normalize-space()='All the benefits of Classic']").textContent();
        expect(actualfirtliText).toContain(expectedfirstliText);
        const actualsecondliText = await this.page.locator("//li[normalize-space()='Incl. dental treatment']").textContent();
        expect(actualsecondliText).toContain(expectedsecondliText);
        const actualThirdiText = await this.page.locator("//li[normalize-space()='Incl. membership card']").textContent();
        expect(actualThirdiText).toContain(expectedthirdliText);
    }

    async verifyPremiumTileText(expectedfirstliText: string,expectedsecondliText: string,expectedthirdliText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualfirtliText = await this.page.locator("//li[normalize-space()='All the benefits of Comfort']").textContent();
        expect(actualfirtliText).toContain(expectedfirstliText);
        const actualsecondliText = await this.page.locator("//li[normalize-space()='Incl. STIKO vaccinations']").textContent();
        expect(actualsecondliText).toContain(expectedsecondliText);
        const actualThirdiText = await this.page.locator("//li[normalize-space()='Incl. psychotherapy sessions']").textContent();
        expect(actualThirdiText).toContain(expectedthirdliText);
    }

    async verifyPremiumvaluesforExpatcareExcludinguptofourtyyrs(expectedclassicText: string,expectedcomfortText: string,expectedpremiumText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualclassicText = await this.page.locator("//b[normalize-space()='69']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
        const actualcomfortText = await this.page.locator("//b[normalize-space()='89']").textContent();
        expect(actualcomfortText).toContain(expectedcomfortText);
        const actualpremiumText = await this.page.locator("//b[normalize-space()='139']").textContent();
        expect(actualpremiumText).toContain(expectedpremiumText);
    }
      
    /*async verifyThankyoupageText(expectedthankyouText: string,expectedfirstText: string,expectedThirdText: string,expecteddistributornameText: string) {
        // await this.page.waitForTimeout(10000);
         // async verifyThankyoupageText(expectedthankyouText: string,expectedfirstText: string,expectedpolicyidText: string,expectedThirdText: string,expecteddistributornameText: string) {
         await this.page.waitForLoadState('networkidle');
         const actualfirtliText =  await (await this.page.waitForSelector("//div[@id='row-12889']//h3[contains(text(),'Thank you')]")).textContent();
       // const actualfirtliText = await this.page.locator("//div[@id='row-12889']//h3[contains(text(),'Thank you')]").textContent();
        expect(actualfirtliText).toContain(expectedthankyouText);
        console.log(actualfirtliText);
        const actualsecondliText = await this.page.locator("//div[@id='row-12889']//app-message-screen//p[1]").textContent();
        expect(actualsecondliText).toContain(expectedfirstText);
        console.log(actualsecondliText);
       //  const actualpolicyidText = await this.page.locator("//div[@id='row-12889']//b[contains(text(),'MAE-AWPDE-6028-NB')]").textContent();
        // expect("MAE-AWPDE").toContain(expectedpolicyidText);
       const actualthirdText = await this.page.locator("(//p[contains(text(),'If you have any questions please contact the below')])[1]").textContent();
         expect(actualthirdText).toContain(expectedThirdText);
         console.log(actualthirdText);
        const actualdisText = await this.page.locator("//div[@id='row-12889']//p[@class='ng-star-inserted']").textContent();
        expect(actualdisText).toContain(expecteddistributornameText);
         
     }*/
 
   async verifyThankyoupageText(expectedthankyouText: string,expectedfirstText: string,expectedThirdText: string,expecteddistributornameText: string) {
       
        await this.page.waitForLoadState('networkidle');
        const actualfirtliText =  await (await this.page.waitForSelector("//div[@id='row-12890']//h2[contains(text(),'Thank you')]")).textContent();
        expect(actualfirtliText).toContain(expectedthankyouText);
       const actualsecondliText = await this.page.locator("//div[@id='row-12890']//app-message-screen//p[1]").textContent();
       expect(actualsecondliText).toContain(expectedfirstText);
     
      const actualthirdText = await this.page.locator("(//p[contains(text(),'In case of any questions please contact us using the above process number provided.')])[2]").textContent();
        expect(actualthirdText).toContain(expectedThirdText);
       const actualdisText = await this.page.locator("//div[@id='row-12890']//p[@class='ng-star-inserted']").textContent();
       expect(actualdisText).toContain(expecteddistributornameText);
       
        
    }

    async verifyIbanerrorText(expectedfirstnameerroronsecondtabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualalfirstnameerroronsecondtabText = await this.page.locator("//p[@class='form-error ng-star-inserted']").textContent();
        expect(actualalfirstnameerroronsecondtabText).toBe(expectedfirstnameerroronsecondtabText);
    }

    async expatcaresStartdateonThirdtTab(startdate: string) {
        
        await this.page.locator("//input[@id='mat-input-27']").fill(startdate);
        
    }

    async verifyCreditcardpopuptext(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(50000);
        const actualclassicText  = await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//div[@id='div-lastname']//label").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
       }

       async verifyCreditcardholderNametext(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(50000);
        const actualclassicText  = await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='lastname']").textContent();
        console.log(actualclassicText);
        expect(actualclassicText).toContain(expectedclassicText);
       }

       async verifyCreditcardholderEmailtext(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(5000);
        const actualclassicText  = await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='email']").inputValue();
        console.log(actualclassicText);
        expect(actualclassicText).toContain(expectedclassicText);
       }
       //async verifyPolicyholderdetailstext(expectedpolicyholdernameText: string,expectedcountrytext: string,expectedprogramtext: string) {
      async verifyPolicyholderdetailstext(expectedpolicyholdernameText: string,expectedcitytext: string,expectedpolicyholderemailtext:string,expectedpolicyholderphonetext:string,expectedeffectivedate: string,expectedenddate: string) {
        await this.page.waitForLoadState('networkidle');
        const actualpolicyholdernameText = await this.page.locator("//input[@name='groupname']").inputValue();
       expect(actualpolicyholdernameText).toContain(expectedpolicyholdernameText);
       //const actualcountrytext = await this.page.locator("//html[1]/body[1]/div[2]/div[5]/div[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/span[1]/span[1]/span[1]/span[1]").inputValue();
       //expect(actualcountrytext).toContain(expectedcountrytext);
       const actualcitytext = await this.page.locator("//input[@name='STREETADDRESS']").inputValue();
       expect(actualcitytext).toContain(expectedcitytext);
       const actualpolicyholderemailtext = await this.page.locator("//input[@placeholder='email@email.com']").inputValue();
       expect(actualpolicyholderemailtext).toContain(expectedpolicyholderemailtext);
       const actualpolicyholderphonetext = await this.page.locator("//input[@placeholder='Eg. 971-XXXXXXXXX']").inputValue();
       expect(actualpolicyholderphonetext).toContain(expectedpolicyholderphonetext);
      // const actualprogramtext = await this.page.locator("//span[contains(text(),'Reisecare')]").inputValue();
       //expect(actualprogramtext).toContain(expectedprogramtext);
       const actualeffectivedate = await this.page.locator("//input[@id='effectivedate']").inputValue();
       expect(actualeffectivedate).toContain(expectedeffectivedate);
       const actualenddate = await this.page.locator("//input[@id='expirydate']").inputValue();
       expect(actualenddate).toContain(expectedenddate);
       }


       async expatcareFilldetailsoncreditcardNumber() {
      
        await this.page.waitForTimeout(10000);
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").click();
        // await this.page.waitForTimeout(5000);
         await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").fill("10");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").click();
        //await this.page.waitForTimeout(5000);
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").fill("4111111111111111");
        
     }
     async verifyNewPolicystatusrejecttext(expectedpolicystatusText : string){
     //async verifyNewPolicystatusrejecttext(policyid: string,expectedpolicystatusText : string) {
       // const policystatuscText  = await this.page.locator("//b[normalize-space()='Open for Renewal']").textContent();
       /* if(policystatuscText)
          {
            await this.page.locator("//button[@class='btn initiate_renew']").click();
            await this.page.locator("//div[contains(text(),'Policy Holder Full Details')]").click();
            await this.page.locator("//a[@class='btn save_and_continue master-contract-save']").click();
            await this.page.locator("//a[@class='btn btn_custom_pad proceed_firt_sub submission_btnsave']").click();
            await this.page.locator("//a[@id='accept_quotation_btn']").click();
            await this.page.locator("//button[@class='btn btn_custom_pad confirm']").click();
            await this.page.locator("//a[@title='Manage Policies']").click();
            await this.page.locator("//input[@name='contractnumber']").fill(policyid);
            await this.page.locator("//a[@class='btn btn-search']").click(); 
            await this.page.waitForLoadState('networkidle');
           const actualpolicystatuscText  = await this.page.locator("//b[normalize-space()='Validated-Active']").textContent();
            expect(actualpolicystatuscText).toContain(expectedpolicystatusText);
          }
        else{
            const actualpolicystatuscText  = await this.page.locator("//b[normalize-space()='Validated-Active']").textContent();
            expect(actualpolicystatuscText).toContain(expectedpolicystatusText);
       }*/
       const actualpolicystatuscText  = await this.page.locator("//b[normalize-space()='Validated-Active']").textContent();
       expect(actualpolicystatuscText).toContain(expectedpolicystatusText);
    }

     async verifyPolicystatustext(expectedpolicystatusText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualpolicystatuscText  = await this.page.locator("//b[normalize-space()='Validated-Active']").textContent();
        expect(actualpolicystatuscText).toContain(expectedpolicystatusText);
       }

       async verifyPolicyprmiumexcludetext(expectedpolicypremiumText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualpolicypremiumText  = await this.page.locator("//b[normalize-space()='Total Premium: 272.7 EUR']").textContent();
        expect(actualpolicypremiumText).toContain(expectedpolicypremiumText);
       }

       async verifyPolicyprmiumincludetext(expectedpolicypremiumText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualpolicypremiumText  = await this.page.locator("Total Premium: 40 EUR").textContent();
        expect(actualpolicypremiumText).toContain(expectedpolicypremiumText);
       }

     async verifycreditcardnumbererrorText(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualclassicText = await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//span[@class='help-block']").textContent();
       console.log(actualclassicText);
        expect(actualclassicText).toContain(expectedclassicText);      
    }

    async expatcareFilldetailsoncreditcarddateTab() {
        await this.page.waitForTimeout(10000);
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").click();
         await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").fill("10");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").fill("4111111111111111");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").fill("28");  
         await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").click();
         await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").fill("411");
         await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//select[@id='country']").selectOption('India');
         await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").fill("12345");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//button[@type='submit']").click();
         await this.page.waitForTimeout(10000);    
     }

     async verifysecuirtyerrorText(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualclassicText = await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//div[@id='div-cvc']//span[@class='help-block'][normalize-space()='Invalid']").textContent();
       console.log(actualclassicText);
        expect(actualclassicText).toContain(expectedclassicText);      
    }

    async expatcareBlankcreditcarddateTab() {
        await this.page.waitForTimeout(10000);
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").click();
         await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").fill("");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").fill("");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").fill("");  
         await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").click();
         await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").fill("");
         await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//select[@id='country']").selectOption('');
         await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").fill("");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//span[normalize-space()='Save card details']").click();
         await this.page.waitForTimeout(10000);    
     }

     async clickOnCancelbuttononCreditcard() {
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//button[@type='button']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }


    async verifyinvalidpostalerrorText(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualclassicText = await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//div[@id='div-country']//span[@class='help-block'][normalize-space()='Invalid']").textContent();
       console.log(actualclassicText);
        expect(actualclassicText).toContain(expectedclassicText);      
    }



    async reiscareStartandenddateonThirdtTab() {
       // await this.page.locator("//div[@class='mat-mdc-form-field-icon-suffix ng-tns-c19-39 ng-star-inserted']").click();
         await this.page.locator("//div[@class='mat-mdc-form-field-icon-suffix ng-tns-c13-37 ng-star-inserted']").click();
         

        //await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();
         await this.page.locator("//div[@class='mat-mdc-form-field-icon-suffix ng-tns-c13-38 ng-star-inserted']").click();

        await this.page.locator("//div[@class='mat-mdc-form-field-icon-suffix ng-tns-c19-40 ng-star-inserted']").click();
        await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();  
    
       
    }


    async reiscareselectfutureStartandenddateonThirdtTab() {
        await this.page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-date[1]/form[1]/iris-datepicker[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]").click();
        await this.page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-date[1]/form[1]/iris-datepicker[1]/mat-form-field[1]/div[1]/div[1]/div[3]/input[1]").fill("14/10/2025");
        await this.page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-date[1]/form[1]/iris-datepicker[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]").click();
       await this.page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-date[1]/form[1]/iris-datepicker[1]/mat-form-field[1]/div[1]/div[1]/div[3]/input[1]").fill("23/10/2025");
            
    }

    async reiscareselectoneyearStartandenddateonThirdtTab() {
        await this.page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-date[1]/form[1]/iris-datepicker[1]/mat-form-field[1]/div[1]/div[1]/div[4]/mat-datepicker-toggle[1]/button[1]/mat-icon[1]/*[1]").click();
       await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();
        await this.page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-date[1]/form[1]/iris-datepicker[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]").click();
       await this.page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-date[1]/form[1]/iris-datepicker[1]/mat-form-field[1]/div[1]/div[1]/div[3]/input[1]").fill("02/04/2025");
        await this.page.locator("//div[@class='secondOption']//h2[@class='mat-h2 mb-md ng-star-inserted']").click();    
    }

    async reiscareEnddateonThirdtTab(startdate: string) {
        
        await this.page.locator("//input[@id='mat-input-28']").fill(startdate);
        
    }

    async expatcaresStartandEnddateonThirdtTab(startdate: string,enddate : string) {
        
        await this.page.locator("//input[@id='mat-input-27']").fill(startdate);
        await this.page.locator("//input[@id='mat-input-28']").fill(enddate);
        //await this.page.locator("//div[@id='row-12896']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

//     async expatcaresStartandEnddateonThirdtTab(startdate: string, enddate: string) {
//         const startInput = this.page.locator("//input[@id='mat-input-27']");
//         const endInput = this.page.locator("//input[@id='mat-input-28']");

//         await startInput.waitFor({ state: 'visible' });
//         await startInput.click();
//         await startInput.fill(startdate);
//         await this.page.keyboard.press('Tab');

//         await endInput.waitFor({ state: 'visible' });
//         await endInput.click();
//         await endInput.fill(enddate);
//         await this.page.keyboard.press('Tab');

//         // await this.page.locator("//div[@id='row-12896']").click();
//         // await this.page.waitForLoadState('networkidle');
//         // await this.page.waitForTimeout(5000);
//    }


    async reiscareFilldetailsoncreditcardTab() {
        console.log("hi");
       await this.page.waitForTimeout(10000);
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").click();
       // await this.page.waitForTimeout(5000);
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").fill("10");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").click();
       //await this.page.waitForTimeout(5000);
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").fill("4111111111111111");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").click();
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").fill("28");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").click();
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").fill("411");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//select[@id='country']").selectOption('India');
       
      //await this.page.locator("//select[@id='country']").click();
     //await this.page.waitForTimeout(5000);
     await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").click();
     //await this.page.waitForTimeout(5000);
     await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").fill("12345");
     await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//span[normalize-space()='Pay 13.50 EUR']").click();
     await this.page.waitForTimeout(10000); 
    }

    async reiscareinvalidcreditcardnumberTab() {
       console.log("hi");
       await this.page.waitForTimeout(10000);
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").click();
       // await this.page.waitForTimeout(5000);
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").fill("10");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").click();
       //await this.page.waitForTimeout(5000);
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").fill("411111111111111");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").click();
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").fill("28");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").click();
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").fill("411");
       //await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//select[@id='country']").selectOption('India'); 
       //await this.page.locator("//select[@id='country']").click();
       //await this.page.waitForTimeout(5000);
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").click();
      //await this.page.waitForTimeout(5000);
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").fill("12345");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//span[normalize-space()='Pay 13.50 EUR']").click();
       await this.page.waitForTimeout(10000);
       
    }

    async reiscareFilldetailsoncreditcardwithinsuredpersonTab() {
       console.log("hi");
       await this.page.waitForTimeout(10000);
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").click();
       // await this.page.waitForTimeout(5000);
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").fill("10");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").click();
       //await this.page.waitForTimeout(5000);
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").fill("4111111111111111");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").click();
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").fill("28");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").click();
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").fill("411");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//select[@id='country']").selectOption('India');
      //await this.page.locator("//select[@id='country']").click();
      //await this.page.waitForTimeout(5000);
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").click();
      //await this.page.waitForTimeout(5000);
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").fill("12345");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//span[normalize-space()='Pay 27.00 EUR']").click();
       await this.page.waitForTimeout(10000);
       
    }

    async expatcaresStartandEnddateonaddinginsuredThirdtTab(startdate: string,enddate : string) {
        
        await this.page.locator("//input[@id='mat-input-37']").fill(startdate);
        await this.page.locator("//input[@id='mat-input-38']").fill(enddate);
        await this.page.locator("//div[@id='row-12896']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async ClickonincludeciverageforUSAandCandaThirdtTab() {
        
        await this.page.locator("//span[@class='mat-checkbox-label']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async verifyPremiumvaluesforExpatcareIncludinguptofourtyyrs(expectedclassicText: string,expectedcomfortText: string,expectedpremiumText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualclassicText = await this.page.locator("//b[normalize-space()='148']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
        const actualcomfortText = await this.page.locator("//b[normalize-space()='198']").textContent();
        expect(actualcomfortText).toContain(expectedcomfortText);
        const actualpremiumText = await this.page.locator("//b[normalize-space()='323']").textContent();
        expect(actualpremiumText).toContain(expectedpremiumText);
    }

    async verifyPremiumvaluesforExpatcareExcludinguptofourtytofiftyfiveyrs(expectedclassicText: string,expectedcomfortText: string,expectedpremiumText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualclassicText = await this.page.locator("//b[normalize-space()='79']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
        const actualcomfortText = await this.page.locator("//b[normalize-space()='109']").textContent();
        expect(actualcomfortText).toContain(expectedcomfortText);
        const actualpremiumText = await this.page.locator("//b[normalize-space()='159']").textContent();
        expect(actualpremiumText).toContain(expectedpremiumText);
    }

    async verifyPremiumvaluesforResicareexcludeclassiczerotosixtyfiveageband(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualclassicText = await this.page.locator("//b[normalize-space()='13.5']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
    }

    async verifyPremiumvaluesforResicareexcludeclassicsixtyfivetoeightyageband(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualclassicText = await this.page.locator("//b[normalize-space()='65']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
    }

    async verifyPremiumvaluesforResicareexcludeclassicsixtyfivetoeightageband(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualclassicText = await this.page.locator("//b[normalize-space()='2145']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
    }

    async selectreiscareplanonThirdtTab() {
        await this.page.locator("(//span[@class='mat-radio-label-content'])[3]").click();
                
    }

    async verifyPremiumvaluesforResicareexcludewithoneinsuredpersoneband(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualclassicText = await this.page.locator("//b[normalize-space()='27']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
    }

    async verifyPremiumvaluesforResicarewithoutinsureperson(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualclassicText = await this.page.locator("//b[normalize-space()='40']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
    }

    async verifyPremiumvaluesforResicareincludewithoneinsuredpersoneband(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualclassicText = await this.page.locator("//b[normalize-space()='80']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
    }

    async verifyPremiumvaluesforExpatcareExcludinguptofiftysixtosixtyyrs(expectedclassicText: string,expectedcomfortText: string,expectedpremiumText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualclassicText = await this.page.locator("//b[normalize-space()='228']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
        const actualcomfortText = await this.page.locator("//b[normalize-space()='298']").textContent();
        expect(actualcomfortText).toContain(expectedcomfortText);
        const actualpremiumText = await this.page.locator("//b[normalize-space()='329']").textContent();
        expect(actualpremiumText).toContain(expectedpremiumText);
    }

    async verifyPremiumvaluesforExpatcareIncludinguptofiftysixtosixtyyrs(expectedclassicText: string,expectedcomfortText: string,expectedpremiumText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualclassicText = await this.page.locator("//b[normalize-space()='570']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
        const actualcomfortText = await this.page.locator("//b[normalize-space()='745']").textContent();
        expect(actualcomfortText).toContain(expectedcomfortText);
        const actualpremiumText = await this.page.locator("//b[normalize-space()='823']").textContent();
        expect(actualpremiumText).toContain(expectedpremiumText);
    }

    async verifyPremiumvaluesforExpatcareclassic(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualclassicText = await this.page.locator("//b[normalize-space()='148']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
        
    }

    async verifyPremiumvaluesforExpatcarecomfort(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualclassicText = await this.page.locator("//b[normalize-space()='89']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
        
    }

    async verifyPremiumvaluesforExpatcareprepium(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualclassicText = await this.page.locator("//b[normalize-space()='139']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
        
    }

    async verifyMalegenderpremiumforExpatcare(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualclassicText = await this.page.locator("//b[normalize-space()='79']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
        
    }

    async verifyclasaluesforExpatcareprepium(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualclassicText = await this.page.locator("//b[normalize-space()='148']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
        
    }

    async verifycomforaluesforExpatcareprepium(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualclassicText = await this.page.locator("//b[normalize-space()='109']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
        
    }

    async verifyLastdayofmonthinEnddatefield(expecteddateText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualdateText = await this.page.locator("//input[@id='mat-input-28']").textContent();
        expect(actualdateText).toContain(expecteddateText);
        await this.page.waitForTimeout(10000);
    }

    async clickOnThirdTabNextButton() {
        await this.thirdtabnextButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async clickOnBankTransferRadioButton() {
        await this.page.waitForLoadState('networkidle');
        await this.bankTransferradiobtn.click();
    }

      async clickOnBTPolicyDeclarationCheckboxes() {
        await this.page.waitForLoadState('networkidle');
        await this.readandacceptBTPolicy.click();
       // await this.consentPolicy.click();
        await this.consentBTPolicy.click();
        await this.consultationBTPolicy.click();
    }


    async clickOnDirectdebittButton() {
        await this.directdebitButton.click();
        await this.page.waitForLoadState('networkidle');
        //await this.page.waitForTimeout(10000);
    }

     async clickOnApplyAndPayForBTPolicy() {
        await this.applyandpaybtnForBTPolicy.click();
        await this.page.waitForLoadState('networkidle');

    }

    async clickOnCreditcardradioButton() {
        await this.creditcardButton.click();
        await this.page.waitForLoadState('networkidle');
       // await this.page.waitForTimeout(10000);
    }

    async clickOnApplyandPayButton() {
       // await this.page.waitForTimeout(50000);
         await this.applyandpayButton.click();
        await this.page.waitForLoadState('networkidle');
        // await this.page.waitForTimeout(30000);
    }

    async verifpaymentmethodandcheckouttextonthirstab(expecteddateText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualdateText = await this.page.locator("//h1[normalize-space()='Payment method and checkout']").textContent();
        expect(actualdateText).toContain(expecteddateText);
       // await this.page.waitForTimeout(10000);
    }
    
    async verifydebitcarddettailstab(){
     // async verifydebitcarddettailstab(expectednameText: string,expectedibanText: string) {
      /* await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
       const actualnameText = await this.page.locator("//input[@id='mat-input-29']").textContent();
        expect(actualnameText).toContain(expectednameText);
        console.log(actualnameText);
        const actualibanText = await this.page.locator("//input[@id='mat-input-30']").textContent();
        expect(actualibanText).toContain(expectednameText);
        console.log(actualibanText);*/
        const textisvisible = await this.page.locator("//input[@id='mat-input-29']").isVisible();
        const ibanvisible = await this.page.locator("//input[@id='mat-input-30']").isVisible();
       // await this.page.waitForTimeout(10000);
    }

    async verifpaymentPaymentoptionfourthtab(expecteddateText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualdateText = await this.page.locator("//div[@id='row-12887']//div[@class='col-md-12 ng-star-inserted']//div[1]").textContent();
        expect(actualdateText).toContain(expecteddateText);
        //await this.page.waitForTimeout(10000);
    }
     
    async verifcreditcardformtextfoonurthtab() {
    //async verifcreditcardformtextfoonurthtab(expectednameText: string) {
        await this.page.waitForLoadState('networkidle');
        const buttonVisible = await this.page.locator("//button[contains(text(),'Cancel')]").isVisible();
       //const actualdateText = await this.page.locator("//button[contains(text(),'Cancel')]").textContent();
        //expect(actualdateText).toContain(expectednameText);
        //await this.page.waitForTimeout(10000);
    }

    async verifycreditcardtextfourthtab(expecteddateText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualdateText = await this.page.locator("//div[normalize-space()='Credit Card']").textContent();
        console.log(actualdateText);
        expect(actualdateText).toContain(expecteddateText);
        console.log(actualdateText);
       // await this.page.waitForTimeout(10000);
    }

    async verifydebitcardtextfourthtab(expecteddateText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualdateText = await this.page.locator("//abbr[normalize-space()='SEPA']").textContent();
        console.log(actualdateText);
        expect(actualdateText).toContain(expecteddateText);
        await this.page.waitForTimeout(10000);
    }

    async verifyimpinfotextfourthtab(expecteddateText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualdateText = await this.page.locator("//h2[@class='mat-h2 mb-md ng-star-inserted']//div[contains(text(),'Important information')]").textContent();
        console.log(actualdateText);
        expect(actualdateText).toContain(expecteddateText);
       // await this.page.waitForTimeout(10000);
    }
    async verifyimpinfodistextfourthtab(expecteddateText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualdateText = await this.page.locator("//div[@class='ng-star-inserted'][normalize-space()='Please note that there is a statutory obligation for inhabitants in some countries to take out health insurance that contains a statutory (minimum) level of coverage. It is the responsibility of the policyholder and the insured persons to ensure that they satisfy the statutory requirements regarding health insurance protection in their country of domicile or the country of residence. We recommend that you seek external advice. Section 193 (3) of the German Insurance Contract Act (VVG) contains an obligation for persons resident in Germany (with a few exceptions) to take out insurance. The MAWISTA Expatcare policy is not adequate to meet the insurance obligation in the Federal Republic of Germany. The level of coverage provided by the policy does, however, essentially match that of a medical expenses policy. The policy provides insurance protection for periods of temporary residence outside of Germany and for periods of temporary residence.']").textContent();
        console.log(actualdateText);
        expect(actualdateText).toContain(expecteddateText);
        //await this.page.waitForTimeout(10000);
    }

    async verifyCheckboconefourthtab(expecteddateText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualdateText = await this.page.locator("//body//app-root//div[@class='row ng-star-inserted']//div[@class='row ng-star-inserted']//div[@class='row ng-star-inserted']//div[@class='row ng-star-inserted']//div[1]//div[1]//label[1]//div[1]").textContent();
        console.log(actualdateText);
        expect(actualdateText).toContain(expecteddateText);
       // await this.page.waitForTimeout(10000);
    }

    async verifyCheckboxtwofourthtab(expecteddateText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualdateText = await this.page.locator("//div[contains(text(),'I consent to MAWISTA GmbH sending me information a')]").textContent();
        console.log(actualdateText);
        expect(actualdateText).toContain(expecteddateText);
       // await this.page.waitForTimeout(10000);
    }

    async verifyCheckboxthirdfourthtab(expecteddateText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualdateText = await this.page.locator("//b[contains(text(),'Yes, I sufficiently informed myself about the prod')]").textContent();
        console.log(actualdateText);
        expect(actualdateText).toContain(expecteddateText);
       // await this.page.waitForTimeout(10000);
    }

    async clickOnClassicTile() {
        await this.page.locator("//label[@for='mat-radio-14-input']//span[@class='mat-radio-label-content']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async clickOnClassiccTile() {
        await this.page.locator("//label[@for='mat-radio-4-input']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async verifyclassicincludealuesforExpatcareprepium(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualclassicText = await this.page.locator("//b[normalize-space()='185']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
        
    }

    async verifystartdateerrortext(expectederrorText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualerrorText = await this.page.locator("//div[@id='row-12799']//p[@class='form-error ng-star-inserted'][normalize-space()='Field is required']").textContent();
        expect(actualerrorText).toContain(expectederrorText);
        
    }

    async clickOnCheckboxesonfourthtab() {
        await this.page.locator("//html/body/app-root/div/app-application-form/div/div[2]/div/form/app-dynamic-form/div/form/div[4]/div[2]/div/div/app-dynamic-form-builder/div[2]/div/app-dynamic-form-field/div/app-field-fieldset/div/div/div/div/div/app-dynamic-form-builder/div/div/app-dynamic-form-field/div/app-component-loader/app-questionnaire/form/div/div/div/div[1]/div/label/span").click();
        await this.page.locator("//div[contains(text(),'I consent to MAWISTA GmbH sending me information a')]").click();
       // await this.page.waitForTimeout(10000);
    
        await this.page.locator("//b[contains(text(),'Yes, I sufficiently informed myself about the prod')]").click();
        await this.page.waitForLoadState('networkidle');
       // await this.page.waitForTimeout(50000);
      //  await this.page.locator("//label[@class='iris-checkbox']//div[contains(text(),'I have read and hereby accept the ')]").click();
    }

    async enterpolicydetail(policyid : string) {
        await this.page.locator("//input[@name='contractnumber']").fill(policyid);
        await this.page.locator("//a[@class='btn btn-search']").click(); 
       
    }

    async enterpolicydetails(policyid : string) {
        await this.page.locator("//input[@name='contractnumber']").fill(policyid);
        await this.page.locator("//a[@class='btn btn-search']").click(); 
        await this.page.waitForLoadState('networkidle');
        await this.page.locator("//div[4]//div[3]//a[1]//i[1]").click();
        await this.page.waitForTimeout(10000);
        await this.page.locator("//div[contains(text(),'Policy Holder Basic details')]").click();
        await this.page.waitForTimeout(10000);
    }

    async scrolldown(){

    const scrollDownJS = `
        async function scrollDown() {
            await new Promise((resolve, reject) => {
                let totalHeight = 0;
                let distance = 100;
                let timer = setInterval(() => {
                    let scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;

                    if (totalHeight >= scrollHeight) {
                        clearInterval(timer);
                        resolve();
                    }
                }, 100);
            });
        }
        scrollDown();
    `;

    // Execute the JavaScript function to scroll down
    await this.page.evaluate(scrollDownJS);
    // You can also use a single scroll command like this:
    // await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');

    
}

async clickOnCheckboxesonfourtthtab() {
     //await this.page.locator("(//span[@class='checkmark'])[1]").click();
     //await this.page.locator("//div[contains(text(),'I have read and hereby accept the')]").click();
    //await this.page.locator("//div[contains(text(),'I have read and hereby accept the')]").click();
    await this.page.locator("//input[@class='mdc-checkbox__native-control' and @id='mat-mdc-checkbox-5-input']").click();
  //await this.page.locator("//input[@class='mdc-checkbox__native-control' and @id='mat-mdc-checkbox-6-input']").click();

     await this.page.locator("//input[@class='mdc-checkbox__native-control' and @id='mat-mdc-checkbox-6-input']").click();
    await this.page.locator("//div[contains(text(),'I consent to MAWISTA GmbH sending me information a')]").click();
    //await this.page.locator("//input[@class='mdc-checkbox__native-control' and @id='mat-mdc-checkbox-7-input']").click();
    await this.page.locator("///input[@id='mat-mdc-checkbox-4-input']").click();
    //await this.page.locator("//b[contains(text(),'Yes, I sufficiently informed myself about the prod')]").click();
    await this.page.waitForLoadState('networkidle');
    await new Promise(resolve => setTimeout(resolve, 5000));

}

async clickOnLanguagechnageButton() {
    await this.page.locator("//html[1]/body[1]/div[1]/div[1]/header[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/a[1]").click();
    await this.page.locator("//header[1]//div[1]//div[1]//div[3]//div[1]//div[1]//div[1]//div[1]//div[1]//div[1]//ul[1]//li[2]//a[1]//span[1]").click();
    await this.page.waitForLoadState('networkidle');
   // await this.page.waitForTimeout(10000);
}
async clickOnRaisecarecareprogram() {
    await this.page.locator("//button[normalize-space()='Reisecare']").click();
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(10000);
}

 /*   async enterLoginDetails(username: string,  password: string) {
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
    /*async verifyPageTitle(expectedPageTitle: string) {
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

    /*async verifyEnteredUsernameCharacter(expectedCharacter: string) {
        await this.page.waitForLoadState('networkidle');
        //const actualCharacter = await this.userNameOrEmailInputField.inputValue();
        expect(actualCharacter).toBe(expectedCharacter);
    }

    async verifyValidationUsernameField(expectedLessCharMessage: string) {
        const actualLessCharUsernameErrorMessage = await this.lessCharUsernameErrorMsg.textContent();
        expect(actualLessCharUsernameErrorMessage).toBe(expectedLessCharMessage);
    }*/
async checkThankyoupageText(thankyouText: string){
        await this.page.waitForTimeout(10000);
        const actualfirtliText =  await (await this.page.waitForSelector("(//h2[contains(text(),'Thank you')])[2]")).textContent();
        expect(actualfirtliText).toContain(thankyouText);
        globalThis.policyNumber = await this.policynum.textContent();
        console.log("Policy number is :" + globalThis.policyNumber);
    }
}