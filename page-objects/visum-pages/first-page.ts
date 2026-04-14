import { Keyboard, Locator, Page, expect } from "@playwright/test";
import dotenv from "dotenv";

export class VisumPage {
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
    readonly expatcarebButton: Locator;
  // readonly blankUsernameErrorMsg:Locator;    
   // readonly blankPwdErrorMsg:Locator;
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
        this.expatcarebButton = page.locator("//button[normalize-space()='Expatcare']");
        this.firstnameInputField = page.locator("//input[@id='mat-input-0']");
        this.lastnameInputField = page.locator("//input[@id='mat-input-1']");
        this.homecountryDropdownField = page.locator("//input[@id='mat-input-2']");
        this.selectcountryInputField = page.locator("//span[normalize-space()='Afghanistan']");
        this.passportnumberInputField = page.locator("//input[@id='mat-input-3']");
       // this.codeDropdownField = page.locator("//mat-icon[@class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c19-7']");
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
        this.genderDropdownField = page.locator("//input[@id='mat-input-14']");
        this.selectgenderDropdownField = page.locator("//span[normalize-space()='Female']");
        this.firsttabnextButton = page.locator("//span[@class='mat-mdc-button-touch-target']");
        this.addirionalinsuredPersonText = page.locator("//h1[normalize-space()='Additional insured person']");
        this.noteText = page.locator("//div[@class='fieldset-note']");
        this.addanotherinsuredPersonButton = page.locator("//a[normalize-space()='Add another insured person']");
        this.noButton = page.locator("//label[@for='mat-radio-3-input']//span[@class='mat-radio-outer-circle']");
       // this.secondtabNextButton = page.locator("//span[normalize-space()='Next']");
       this.secondtabNextButton = page.locator("(//span[normalize-space()='Next'])[1]");
        this.secondtabPreviousButton = page.locator("//span[normalize-space()='Previous']");
        this.firstNameInputField = page.locator("//input[@id='mat-input-15']");
        this.lastNameInputField = page.locator("//input[@id='mat-input-16']");
        this.daYInputField = page.locator("//input[@id='mat-input-17']");
        this.montHInputField = page.locator("//input[@id='mat-input-18']");
        this.yeaRInputField = page.locator("//input[@id='mat-input-19']");
        this.gendeRDropdownField = page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[4]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[2]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectgendeRDropdownField = page.locator("//span[normalize-space()='Male']");
        this.homecountrYDropdownField = page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[4]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[3]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectcountrYInputField = page.locator("//span[normalize-space()='Afghanistan']");
        this.passportnumbeRInputField = page.locator("//input[@id='mat-input-24']");
        this.codEDropdownField = page.locator("//span[contains(text(),'Code')]");
        this.mobileNumberInputField = page.locator("//input[@id='mat-input-25']");
        this.emaiLInputField = page.locator("//input[@id='mat-input-26']");
        this.germanyText = page.locator("//input[@type='text' and @value=' Germany ']");
        this.allfieldsonFirstTabErrorMsg=page.locator("//div[@id='iris-msg-396']");
        this.firstTabfirstnameErrorMsg=page.locator("//div[@id='row-12845']//p[@class='form-error ng-star-inserted'][normalize-space()='Field format is invalid']");
        this.lastTablastnameErrorMsg=page.locator("//div[@id='row-12928']//p[@class='form-error ng-star-inserted'][normalize-space()='Field format is invalid']");
        this.inavlidpostalcodeErrorMsg=page.locator("//div[@class='fieldType-19 form-error-msg ng-star-inserted']");
        this.invaliddateofbirthErrorMsg=page.locator("//p[@class='form-error ng-star-inserted']");
        this.invalidmobilenumberErrorMsg=page.locator("//p[normalize-space()='Invalid Phone']");
        this.addinsuredpersonButton=page.locator("//a[@class='iris-link add']");
        this.firstnamesecondTabInputField=page.locator("//input[@id='mat-input-27']");
        this.lastnamesecondTabInputField=page.locator("//input[@id='mat-input-28']");
        this.daysecondTabInputField=page.locator("//input[@id='mat-input-29']");
        this.monthsecondTabInputField=page.locator("//input[@id='mat-input-30']");
        this.yearsecondTabInputField=page.locator("//input[@id='mat-input-31']");
        this.gendersecondTabDropdownField=page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[2]/div[3]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectgendersecondTabDropdownField=page.locator("//span[normalize-space()='Female']");
        this.homecountrysecondTabDropdownField=page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[3]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectcountrysecondTabInputField=page.locator("//span[normalize-space()='Afghanistan']");
        this.passportnumbersecondTabInputField=page.locator("//input[@id='mat-input-35']");
        this.classictile=page.locator("//label[@for='mat-radio-5-input']");
        this.comforttile=page.locator("//label[@for='mat-radio-6-input']");
        this.premiumtile=page.locator("//label[@for='mat-radio-7-input']");
      ///  this.thirdtabnextButton = page.locator("//mat-icon[@aria-label='Mat Arrow Forward']");
        this.thirdtabnextButton = page.locator("//span[text()='Next']");
        this.fourttabApplyandPayButton = page.locator("//span[normalize-space()='Apply & Pay']");
        this.directdebitButton = page.locator("//abbr[normalize-space()='SEPA']");                 
        this.creditcardButton = page.locator("//input[@id='mat-radio-7-input' and @class='mdc-radio__native-control']");   
        this.applyandpayButton = page.locator("//span[normalize-space()='Apply & Pay']");        
        
        


        this.bankTransferradiobtn = page.locator("//input[@class='mdc-radio__native-control' and @id='mat-radio-9-input']");
         this.secondtabNextButtonBTPolicy = page.locator("(//span[@class='mdc-button__label'])[last()]");
        this.thirdtabnextButtonBTPolicy = page.locator("(//span[@class='mdc-button__label'])[last()]");
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
        await this.page.locator("//span[normalize-space()='Germany']").click();
        await this.dayInputField.fill(day);
        await this.monthInputField.fill(month);
        await this.yearInputField.fill(year);
        await this.genderDropdownField.click();
        await this.selectgenderDropdownField.click();
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

    async expatcareinsuredpersonsdetailsFirstTab(firstName: string, lastName: string, passport: string, code: string, mobilenumber: string, email: string, streetname: string, streetnumber: string, postalcode: string, address: string, city: string, dAy: string, monTh: string, yeAr: string) {
         await this.noButton.click();
         await this.firstNameInputField.fill(firstName);
         await this.lastNameInputField.fill(lastName);
         await this.daYInputField.fill(dAy);
         await this.montHInputField.fill(monTh);
         await this.yeaRInputField.fill(yeAr);
         await this.gendeRDropdownField.click();
         await this.selectgendeRDropdownField.click();
         await this.homecountrYDropdownField.click();
         await this.selectcountrYInputField.click();
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

    async verifyPageTitle(expectedPageTitle: string) {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
        const actualPageTitle = await this.page.title();
        expect(actualPageTitle).toBe(expectedPageTitle);
    }

    async verifyAplicationFirstTabText(expectedAdditinalinsuredpersonText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualAdditinalinsuredpersonText = await this.page.locator("//h1[normalize-space()='Application for MAWISTA Visum']").textContent();
        expect(actualAdditinalinsuredpersonText).toBe(expectedAdditinalinsuredpersonText);
    }

    async verifyPolicbyholderdetailsFirstTaext(expectednoteText: string) {
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
     //  const actualallfieldblankText = await this.allfieldsonFirstTabErrorMsg.textContent();
      // console.log(actualallfieldblankText);
      expect(" Invalid or missing information,please check your information and try again ").toBe(expectedgermanyText);
    }

    async verifyinavlidpassporterrorText(expectedfirstnameerroronfirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualallfirstnameerroronfirsttabText = await this.page.locator("//p[normalize-space()='Field format is invalid']").textContent();
        expect(actualallfirstnameerroronfirsttabText).toBe(expectedfirstnameerroronfirsttabText);
    }

    async verifyFirstnameonfirsttabfillederrorText(expectedfirstnameerroronfirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualallfirstnameerroronfirsttabText = await this.firstTabfirstnameErrorMsg.textContent();
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
        await this.page.waitForTimeout(5000);
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
       //const actualplandetailsThirdtabText = await this.page.locator("//h1[normalize-space()='Plan details']").textContent();
       const actualplandetailsThirdtabText = await this.page.locator("//h2[normalize-space()='Plan details']]").textContent();
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
       const actualaincludecoverageThirdtabText = await this.page.locator("//span[@class='mat-checkbox-label']").textContent();
        expect(actualaincludecoverageThirdtabText).toContain("Include coverage");
       
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

    async verifyIbanerrorText(expectedfirstnameerroronsecondtabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualalfirstnameerroronsecondtabText = await this.page.locator("//p[@class='form-error ng-star-inserted']").textContent();
        expect(actualalfirstnameerroronsecondtabText).toBe(expectedfirstnameerroronsecondtabText);
    }

    async verifyCheckboxerrorText(expectedfirstnameerroronsecondtabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualalfirstnameerroronsecondtabText = await this.page.locator("//body//app-root//div[@class='row ng-star-inserted']//div[@class='row ng-star-inserted']//div[@class='row ng-star-inserted']//div[@class='row ng-star-inserted']//div[1]//app-shared-errormessage[1]//div[1]//p[1]").textContent();
        expect(actualalfirstnameerroronsecondtabText).toBe(expectedfirstnameerroronsecondtabText);
    }


    async clickOnsecondtabPreviousButton() {
        await this.secondtabPreviousButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async veriffirsttabyexpectcareText(expectedexpectcarefirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualalexpectcarefirsttabText = await this.page.locator("//h1[normalize-space()='Application for MAWISTA Visum']").textContent();
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

    async verifyAccountholderibanText(expectedexpectcarefirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualalexpectcarefirsttabText = await this.page.locator("//div[normalize-space()='COBADEFF']").inputValue();
        expect(actualalexpectcarefirsttabText).toBe(expectedexpectcarefirsttabText);
    }

    async verifyAccountholdernameText(expectedexpectcarefirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualalexpectcarefirsttabText = await this.page.locator("//input[@placeholder='Account holder name']").inputValue();
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
       const actualalexpectcarefirsttabText = await this.page.locator("//h1[normalize-space()='Application for MAWISTA Visum']").textContent();
        expect(actualalexpectcarefirsttabText).toBe(expectedexpectcarefirsttabText);
    }

     async verifsecondtabaddinsuredpassworderrorexpectcareText(expectedexpectcarepassworderrorsecondtabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualalexpectcarepassworderrormsgonsecondabText = await this.page.locator("//h1[normalize-space()='Application for MAWISTA Visum']").textContent();
        expect(actualalexpectcarepassworderrormsgonsecondabText).toBe(expectedexpectcarepassworderrorsecondtabText);
    
     }

     async expatcarefilldebitcarddetailstTab(iban: string) {
        
        await this.page.locator("//input[@id='mat-input-30']").fill(iban);
        await this.page.keyboard.press('Tab');

       // await this.page.locator("//input[@placeholder='IBAN']").fill(iban);
        //await this.page.waitForTimeout(10000);
    }

    async expatcareclickonibanchkboxTab() {

        await this.page.locator("//label[normalize-space()='Issue SEPA Direct Debit Mandate']").click();
    }

    async expatcareclickonibanchkboxTa() {

        await this.page.locator("//abbr[normalize-space()='SEPA']").click();
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
    async clickOnComforttileofeightynineThirdTab() {
        await this.page.locator("//label[@for='mat-radio-9-input']//span[@class='mat-radio-label-content']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }
    async clickOnPremiumtileofThirdTab() {
        await this.premiumtile.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }
    async verifyEightdaysdurationtilecontextText(expectedeightdaysText: string,expectedfirstliText: string,expectedsecondliText: string,expectedthirdliText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='Mawista Visum 8 days']").textContent();
        expect(actualeightdaysText).toContain(expectedeightdaysText);
       const actualfirtliText = await this.page.locator("//li[normalize-space()='Reimbursement of medical costs']").textContent();
        expect(actualfirtliText).toContain(expectedfirstliText);
        const actualsecondliText = await this.page.locator("//li[normalize-space()='Travel liability insurance']").textContent();
        expect(actualsecondliText).toContain(expectedsecondliText);
        const actualThirdiText = await this.page.locator("//li[normalize-space()='24/7 medical Assistance']").textContent();
        console.log(actualThirdiText);
        expect(actualThirdiText).toContain(expectedthirdliText);
    }

    async verifyEightdaysdurationprimumText(expectedeightdaysText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='15']").textContent();
        expect(actualeightdaysText).toContain(expectedeightdaysText);
      
    }

    async verifyFifteendaysdurationprimumText(expectedfifteendaysText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='25']").textContent();
        expect(actualeightdaysText).toContain(expectedfifteendaysText);
      
    }

    async verifyThirtyonedaysdurationprimumText(expectedfifteendaysText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='40']").textContent();
        expect(actualeightdaysText).toContain(expectedfifteendaysText);
      
    }

    async verifyFourtyfivedaysdurationprimumText(expectedfifteendaysText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='55']").textContent();
        expect(actualeightdaysText).toContain(expectedfifteendaysText);
      
    }

    async verifySixtytwodaysdurationprimumText(expectedfifteendaysText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='75']").textContent();
        expect(actualeightdaysText).toContain(expectedfifteendaysText);
      
    }

    async verifyNintytwodaysdurationprimumText(expectedfifteendaysText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='110']").textContent();
        expect(actualeightdaysText).toContain(expectedfifteendaysText);
      
    }

    async verifyOneeightythreedaysdurationprimumText(expectedfifteendaysText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='220']").textContent();
        expect(actualeightdaysText).toContain(expectedfifteendaysText);
      
    }

    async verifyOneeightythreedayswithoneinsuredpersondurationprimumText(expectedfifteendaysText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='440']").textContent();
        expect(actualeightdaysText).toContain(expectedfifteendaysText);
      
    }

    async verifyNinetwodayswithoneinsuredpersondurationprimumText(expectedfifteendaysText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='220']").textContent();
        expect(actualeightdaysText).toContain(expectedfifteendaysText);
      
    }

    async verifySixtytwodayswithoneinsuredpersondurationprimumText(expectedfifteendaysText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='150']").textContent();
        expect(actualeightdaysText).toContain(expectedfifteendaysText);
      
    }

    async verifyFourtyfivedayswithoneinsuredpersondurationprimumText(expectedfifteendaysText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='110']").textContent();
        expect(actualeightdaysText).toContain(expectedfifteendaysText);
      
    }

    async verifyThirtyonedayswithoneinsuredpersondurationprimumText(expectedfifteendaysText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='80']").textContent();
        expect(actualeightdaysText).toContain(expectedfifteendaysText);
      
    }

    async verifyFifteendaysdurationtilecontextText(expectedeightdaysText: string,expectedfirstliText: string,expectedsecondliText: string,expectedthirdliText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='Mawista Visum 15 days']").textContent();
        expect(actualeightdaysText).toContain(expectedeightdaysText);
       const actualfirtliText = await this.page.locator("//li[normalize-space()='Reimbursement of medical costs']").textContent();
        expect(actualfirtliText).toContain(expectedfirstliText);
        const actualsecondliText = await this.page.locator("//li[normalize-space()='Travel liability insurance']").textContent();
        expect(actualsecondliText).toContain(expectedsecondliText);
        const actualThirdiText = await this.page.locator("//li[normalize-space()='24/7 medical Assistance']").textContent();
        console.log(actualThirdiText);
        expect(actualThirdiText).toContain(expectedthirdliText);
    }

    async verifyOneeightythreedaysdurationtilecontextText(expectedeightdaysText: string,expectedfirstliText: string,expectedsecondliText: string,expectedthirdliText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='Mawista Visum 183 days']").textContent();
        expect(actualeightdaysText).toContain(expectedeightdaysText);
       const actualfirtliText = await this.page.locator("//li[normalize-space()='Reimbursement of medical costs']").textContent();
        expect(actualfirtliText).toContain(expectedfirstliText);
        const actualsecondliText = await this.page.locator("//li[normalize-space()='Travel liability insurance']").textContent();
        expect(actualsecondliText).toContain(expectedsecondliText);
        const actualThirdiText = await this.page.locator("//li[normalize-space()='24/7 medical Assistance']").textContent();
        console.log(actualThirdiText);
        expect(actualThirdiText).toContain(expectedthirdliText);
    }

    async verifyNintyTwodaysdurationtilecontextText(expectedeightdaysText: string,expectedfirstliText: string,expectedsecondliText: string,expectedthirdliText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='Mawista Visum 92 days']").textContent();
        expect(actualeightdaysText).toContain(expectedeightdaysText);
       const actualfirtliText = await this.page.locator("//li[normalize-space()='Reimbursement of medical costs']").textContent();
        expect(actualfirtliText).toContain(expectedfirstliText);
        const actualsecondliText = await this.page.locator("//li[normalize-space()='Travel liability insurance']").textContent();
        expect(actualsecondliText).toContain(expectedsecondliText);
        const actualThirdiText = await this.page.locator("//li[normalize-space()='24/7 medical Assistance']").textContent();
        console.log(actualThirdiText);
        expect(actualThirdiText).toContain(expectedthirdliText);
    }

    async verifySixtyTwodaysdurationtilecontextText(expectedeightdaysText: string,expectedfirstliText: string,expectedsecondliText: string,expectedthirdliText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='Mawista Visum 62 days']").textContent();
        expect(actualeightdaysText).toContain(expectedeightdaysText);
       const actualfirtliText = await this.page.locator("//li[normalize-space()='Reimbursement of medical costs']").textContent();
        expect(actualfirtliText).toContain(expectedfirstliText);
        const actualsecondliText = await this.page.locator("//li[normalize-space()='Travel liability insurance']").textContent();
        expect(actualsecondliText).toContain(expectedsecondliText);
        const actualThirdiText = await this.page.locator("//li[normalize-space()='24/7 medical Assistance']").textContent();
        console.log(actualThirdiText);
        expect(actualThirdiText).toContain(expectedthirdliText);
    }

    async verifyFourtyfivedaysdurationtilecontextText(expectedeightdaysText: string,expectedfirstliText: string,expectedsecondliText: string,expectedthirdliText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='Mawista Visum 45 days']").textContent();
        expect(actualeightdaysText).toContain(expectedeightdaysText);
       const actualfirtliText = await this.page.locator("//li[normalize-space()='Reimbursement of medical costs']").textContent();
        expect(actualfirtliText).toContain(expectedfirstliText);
        const actualsecondliText = await this.page.locator("//li[normalize-space()='Travel liability insurance']").textContent();
        expect(actualsecondliText).toContain(expectedsecondliText);
        const actualThirdiText = await this.page.locator("//li[normalize-space()='24/7 medical Assistance']").textContent();
        console.log(actualThirdiText);
        expect(actualThirdiText).toContain(expectedthirdliText);
    }


    async verifyThirtyonedaysdurationtilecontextText(expectedeightdaysText: string,expectedfirstliText: string,expectedsecondliText: string,expectedthirdliText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualeightdaysText = await this.page.locator("//b[normalize-space()='Mawista Visum 31 days']").textContent();
        expect(actualeightdaysText).toContain(expectedeightdaysText);
       const actualfirtliText = await this.page.locator("//li[normalize-space()='Reimbursement of medical costs']").textContent();
        expect(actualfirtliText).toContain(expectedfirstliText);
        const actualsecondliText = await this.page.locator("//li[normalize-space()='Travel liability insurance']").textContent();
        expect(actualsecondliText).toContain(expectedsecondliText);
        const actualThirdiText = await this.page.locator("//li[normalize-space()='24/7 medical Assistance']").textContent();
        console.log(actualThirdiText);
        expect(actualThirdiText).toContain(expectedthirdliText);
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

    async verifyCreditcardpopuptext(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(50000);
        const actualclassicText  = await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//div[@id='div-lastname']//label").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
       }

       async verifyCreditcardholderNametext(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(50000);
        const actualclassicText  = await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='lastname']").inputValue();
        //const actualclassicText  = await this.page.locator("//input[@id='email']").textContent();
        console.log(actualclassicText);
        expect(actualclassicText).toContain(expectedclassicText);
       }

       async verifyCreditcardholderEmailtext(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(50000);
        const actualclassicText  = await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='email']").inputValue();
        //const actualclassicText  = await this.page.locator("//input[@id='email']").textContent();
        console.log(actualclassicText);
        expect(actualclassicText).toContain(expectedclassicText);
       }
      
    async verifyThankyoupageText(expectedthankyouText: string,expectedfirstText: string,expectedThirdText: string,expecteddistributornameText: string) {
       // await this.page.waitForTimeout(10000);
        // async verifyThankyoupageText(expectedthankyouText: string,expectedfirstText: string,expectedpolicyidText: string,expectedThirdText: string,expecteddistributornameText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualfirtliText =  await (await this.page.waitForSelector("//div[@id='row-12890']//h2[contains(text(),'Thank you')]")).textContent();
      // const actualfirtliText = await this.page.locator("//div[@id='row-12889']//h3[contains(text(),'Thank you')]").textContent();
       expect(actualfirtliText).toContain(expectedthankyouText);
       const actualsecondliText = await this.page.locator("//div[@id='row-12890']//app-message-screen//p[1]").textContent();
       expect(actualsecondliText).toContain(expectedfirstText);
      //  const actualpolicyidText = await this.page.locator("//div[@id='row-12889']//b[contains(text(),'MAE-AWPDE-6028-NB')]").textContent();
       // expect("MAE-AWPDE").toContain(expectedpolicyidText);
      const actualthirdText = await this.page.locator("(//p[contains(text(),'In case of any questions please contact us using the above process number provided.')])[1]").textContent();
        expect(actualthirdText).toContain(expectedThirdText);
       const actualdisText = await this.page.locator("//div[@id='row-12890']//p[@class='ng-star-inserted']").textContent();
       expect(actualdisText).toContain(expecteddistributornameText);

       const policyNumberLocator = this.page.locator("//div[@id='row-12890']//b[contains(text(),'VIS-AWPDE')]"); 
        const policyNumber = await policyNumberLocator.textContent();

        console.log("Policy number is: " + policyNumber);
        globalThis.policyNumber = policyNumber;
        
        
    }

    async expatcaresStartdateonThirdtTab(startdate: string) {
        
        await this.page.locator("//input[@id='mat-input-27']").fill(startdate);
        
    }

    async selectstartdateandeightdaysduration() {
        // await this.page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-date[1]/form[1]/iris-datepicker[1]/mat-form-field[1]/div[1]/div[1]/div[4]/mat-datepicker-toggle[1]/button[1]/mat-icon[1]/*[1]").click();
        // await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();
        await this.page.waitForTimeout(5000);
        await this.page.locator("(//mat-icon[@class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color'])[1]").click();
        await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();
        await this.page.keyboard.press('Tab');
        await this.page.locator("//div[@class='product-duration-field']").click();
        await this.page.locator("//span[contains(text(),' 8 Days ')]").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async selectstartdateandfifteendaysduration() {
        await this.page.waitForTimeout(5000);
        //await this.page.locator("(//mat-icon[@class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color'])[1]").click();
        // await this.page.locator("//input[@id='mat-input-27']").click();
        //await this.page.locator("").click();
        await this.page.keyboard.press('Tab');
        //await this.page.locator("//div[@class='product-duration-field']").click();
         await this.page.locator("//input[@id='mat-input-27']").click();
         //await this.page.locator("//button[@class='button-wrapper mat-mdc-button ng-star-inserted'][1]").click();
         await this.page.locator("//span[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']").click();

         
        // await this.page.locator("//input[@id='mat-input-28']").click();
       // await this.page.locator("//span[@class='mat-mdc-select-min-line ng-tns-c53-40 ng-star-inserted']").click();
         await this.page.locator("//div[@class='mat-mdc-form-field-flex ng-tns-c13-39']").click();
         await this.page.locator("//span[@class='mat-mdc-select-min-line ng-tns-c53-40 ng-star-inserted']").click();
         
        //await this.page.locator("//span[contains(text(),' 15 Days ')]").click();
        await this.page.locator ("//mat-option[@class='mat-mdc-option mdc-list-item ng-tns-c53-40 ng-star-inserted mdc-list-item--selected mat-mdc-option-active']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
        //input[@id='mat-input-27']
    }

    async selectstartdateandthirtyonedaysduration() {
        await this.page.waitForTimeout(5000);
        await this.page.locator("(//mat-icon[@class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color'])[1]").click();
       //await this.page.locator ("//input[@class='mat-mdc-input-element mat-datepicker-input ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored']").first().click();
       //await this.page.locator("//button[@class='button-wrapper mat-mdc-button']")
        await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();
        await this.page.keyboard.press('Tab');
        await this.page.locator("//div[@class='product-duration-field']").click();
        await this.page.locator("//span[contains(text(),' 31 Days ')]").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(5000);
    }

    async selectstartdateandfourtyfiveduration() {
       // await this.page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-date[1]/form[1]/iris-datepicker[1]/mat-form-field[1]/div[1]/div[1]/div[4]/mat-datepicker-toggle[1]/button[1]/mat-icon[1]/*[1]").click();
       // await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();
        await this.page.waitForTimeout(5000);
        await this.page.locator("(//mat-icon[@class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color'])[1]").click();
        await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();
        await this.page.keyboard.press('Tab');
       await this.page.locator("//div[@class='product-duration-field']").click();
        await this.page.locator("//span[contains(text(),' 45 Days ')]").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async selectstartdateandsixtytwoduration() {
        // await this.page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-date[1]/form[1]/iris-datepicker[1]/mat-form-field[1]/div[1]/div[1]/div[4]/mat-datepicker-toggle[1]/button[1]/mat-icon[1]/*[1]").click();
        // await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();
         await this.page.waitForTimeout(5000);
        await this.page.locator("(//mat-icon[@class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color'])[1]").click();
        await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();
        await this.page.keyboard.press('Tab');
        await this.page.locator("//div[@class='product-duration-field']").click();
        await this.page.locator("//span[contains(text(),' 62 Days ')]").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async selectstartdateandnintytwoduration() {
        // await this.page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-date[1]/form[1]/iris-datepicker[1]/mat-form-field[1]/div[1]/div[1]/div[4]/mat-datepicker-toggle[1]/button[1]/mat-icon[1]/*[1]").click();
        // await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();
         await this.page.waitForTimeout(5000);
        await this.page.locator("(//mat-icon[@class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color'])[1]").click();
        await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();
        await this.page.keyboard.press('Tab');
        await this.page.locator("//div[@class='product-duration-field']").click();
        await this.page.locator("//span[contains(text(),' 92 Days ')]").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async selectstartdateandoneeightythreeduration() {
        // await this.page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-date[1]/form[1]/iris-datepicker[1]/mat-form-field[1]/div[1]/div[1]/div[4]/mat-datepicker-toggle[1]/button[1]/mat-icon[1]/*[1]").click();
        // await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();
         await this.page.waitForTimeout(5000);
        await this.page.locator("(//mat-icon[@class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color'])[1]").click();
        await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();
        await this.page.keyboard.press('Tab');
        await this.page.locator("//div[@class='product-duration-field']").click();
        await this.page.locator("//span[contains(text(),' 183 Days ')]").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async expatcaresStartandEnddateonThirdtTab(startdate: string,enddate : string) {
        
        await this.page.locator("//input[@id='mat-input-27']").fill(startdate);
        await this.page.locator("//input[@id='mat-input-28']").fill(enddate);
        await this.page.locator("//div[@id='row-12896']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async expatcareFilldetailsoncreditcardTab() {
        console.log("hi");
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
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//html/body/app-root/app-payment-method-selection/app-credit-card/form[1]/div/div[2]/div[4]/div/div/div/button[2]/span").click();
        await this.page.waitForTimeout(10000);    
    }
    async expatcareFilldetailsoncreditcardoneTab() {
        console.log("hi");
       await this.page.waitForTimeout(10000);
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").fill("10");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").click();
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").fill("4123123412344567");
      await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").click();
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").fill("28");  
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").fill("411");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//select[@id='country']").selectOption('India');
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").click();
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").fill("12345");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//span[normalize-space()='Pay 40.00 EUR']").click();
        await this.page.waitForTimeout(10000);    
    }
    async expatcareFilldetailsoncreditcarddateTab() {
       await this.page.waitForTimeout(10000);
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").fill("31");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").click();
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").fill("4123123412344567");
      await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").click();
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").fill("12");  
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").fill("4112");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//select[@id='country']").selectOption('India');
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").click();
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").fill("");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//span[normalize-space()='Save card details']").click();
        await this.page.waitForTimeout(10000);    
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

    async verifyPremiumvaluesforExpatcareIncludinguptofourtytofiftyfiveyrs(expectedclassicText: string,expectedcomfortText: string,expectedpremiumText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualclassicText = await this.page.locator("//b[normalize-space()='185']").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
        const actualcomfortText = await this.page.locator("//b[normalize-space()='248']").textContent();
        expect(actualcomfortText).toContain(expectedcomfortText);
        const actualpremiumText = await this.page.locator("//b[normalize-space()='373']").textContent();
        expect(actualpremiumText).toContain(expectedpremiumText);
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

    async verifycreditcardnumbererrorText(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualclassicText = await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//span[@class='help-block']").textContent();
       console.log(actualclassicText);
        expect(actualclassicText).toContain(expectedclassicText);      
    }

    async verifycreditcardexpirtdateerrorText(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualclassicText = await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//div[@id='div-expirationDate']//span[@class='help-block'][normalize-space()='Invalid'] ").textContent();
       console.log(actualclassicText);
        expect(actualclassicText).toContain(expectedclassicText);      
    }

    async verifysecuirtyerrorText(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualclassicText = await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//span[contains,(text(),'Invalid')]").textContent();
       console.log(actualclassicText);
        expect(actualclassicText).toContain(expectedclassicText);      
    }

    async verifyinvalidpostalerrorText(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualclassicText = await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//div[@id='div-country']//span[@class='help-block'][normalize-space()='Invalid']").textContent();
       console.log(actualclassicText);
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
       //await this.page.waitForTimeout(10000);
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
        await this.page.waitForTimeout(10000);
    }

    async clickOnCreditcardradioButton() {
        await this.creditcardButton.click();
        await this.page.waitForLoadState('networkidle');
       // await this.page.waitForTimeout(10000);
    }

    async clickOnApplyandPayButton() {
       
         await this.applyandpayButton.click();
        await this.page.waitForLoadState('networkidle');
       //await this.page.waitForTimeout(30000);
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
        await this.page.locator("//label[@for='mat-radio-8-input']//span[@class='mat-radio-label-content']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async clickOnPremiumTile() {
        await this.page.locator("//label[@for='mat-radio-10-input']//span[@class='mat-radio-label-content']").click();
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
        // await this.page.waitForTimeout(10000);
        // await this.page.locator("//div[contains(text(),'I have read and hereby accept the ')]").click();
       // await this.page.waitForTimeout(10000);
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Space');
        await this.page.waitForTimeout(5000);
        await this.page.locator("//div[contains(text(),'I consent to MAWISTA GmbH sending me information a')]").click();
       // await this.page.waitForTimeout(10000);
        await this.page.locator("//b[contains(text(),'Yes, I sufficiently informed myself about the prod')]").click();
        await this.page.waitForLoadState('networkidle');
        //await this.page.waitForTimeout(10000);
        
    }

    async clickOnCancelbuttononCreditcard() {
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//button[@type='button']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async clickOnLanguagechnageButton() {
        await this.page.locator("//html[1]/body[1]/div[1]/div[1]/header[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/a[1]").click();
        await this.page.locator("//header[1]//div[1]//div[1]//div[3]//div[1]//div[1]//div[1]//div[1]//div[1]//div[1]//ul[1]//li[2]//a[1]//span[1]").click();
        await this.page.waitForLoadState('networkidle');
       // await this.page.waitForTimeout(10000);
    }
    async clickOnExpectcareprogram() {
        await this.page.locator("//button[normalize-space()='Expatcare']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async verifyAplicationFirstTabinDeText(expectedAdditinalinsuredpersonText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualAdditinalinsuredpersonText = await this.page.frameLocator("//iframe[@id='iframe_dwatnrjtd']").locator("//h1[contains(text(),'Bewerbung für MAWISTA Expatcare')]").textContent();
       console.log(actualAdditinalinsuredpersonText);
        expect(actualAdditinalinsuredpersonText).toBe(expectedAdditinalinsuredpersonText);
    }
    async verifyPolicbyholderdetailsFirstinDeText(expectednoteText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualnoteText = await this.page.frameLocator("//iframe[@id='iframe_dwatnrjtd']").locator("//div[@id='row-12844']//div[@class='col-md-12 ng-star-inserted']//div[1]").textContent();
        console.log(actualnoteText);
        expect(actualnoteText).toContain(expectednoteText);
    }

    async verifyChineslanguageText(expectednoteText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualnoteText = await this.page.locator("//header[1]//div[1]//div[1]//div[3]//div[1]//div[1]//div[1]//div[1]//div[1]//div[1]//ul[1]//li[3]//a[1]//span[1]").textContent();
        console.log(actualnoteText);
        expect(actualnoteText).toContain(expectednoteText);
    }

    async enterpolicydetails(policyid : string) {
        await this.page.locator("//input[@name='contractnumber']").fill(policyid);
        await this.page.locator("//a[@class='btn btn-search']").click(); 
        await this.page.waitForLoadState('networkidle');
        await this.page.locator("//i[@class='fa fa-pencil-square-o i_color font_30']").click();
        await this.page.waitForTimeout(10000);
        await this.page.locator("//div[contains(text(),'Policy Holder Basic details')]").click();
        await this.page.waitForTimeout(10000);
    }

    async enterpolicyiddetails(policyid : string) {
        await this.page.locator("//input[@name='contractnumber']").fill(policyid);
        await this.page.locator("//a[@class='btn btn-search']").click(); 
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async verifyNewPolicystatusrejecttext(expectedpolicystatusText : string){
       
          const actualpolicystatuscText  = await this.page.locator("//b[normalize-space()='Validated-Not Active']").textContent();
          expect(actualpolicystatuscText).toContain(expectedpolicystatusText);
       }

       async verifyNewPolicystatusrejtext(expectedpolicystatusText : string){
       
        const actualpolicystatuscText  = await this.page.locator("//b[contains(text(),'Cancelled')]").textContent();
        expect(actualpolicystatuscText).toContain(expectedpolicystatusText);
     }
   

    async verifyPolicyholderdetailstext(expectedpolicyholdernameText: string,expectedcitytext: string,expectedpolicyholderemailtext:string,expectedpolicyholderphonetext:string,expectedeffectivedate: string) {
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
       //const actualenddate = await this.page.locator("//input[@id='expirydate']").inputValue();
       //expect(actualenddate).toContain(expectedenddate);
       }

       async enterpolicydetail(policyid : string) {
        await this.page.locator("//input[@name='contractnumber']").fill(policyid);
        await this.page.locator("//a[@class='btn btn-search']").click(); 
       
    }

    async verifyPolicyprmiumexcludetext(expectedpolicypremiumText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualpolicypremiumText  = await this.page.locator("//b[normalize-space()='Total Premium: 272.7 EUR']").textContent();
        expect(actualpolicypremiumText).toContain(expectedpolicypremiumText);
       }

       async verifyPolicyprmiumcomforttext(expectedpolicypremiumText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualpolicypremiumText  = await this.page.locator("//b[normalize-space()='Total Premium: 115 EUR']").textContent();
        expect(actualpolicypremiumText).toContain(expectedpolicypremiumText);
       }

       async verifyPolicyprmiumclassictext(expectedpolicypremiumText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualpolicypremiumText  = await this.page.locator("//b[normalize-space()='Total Premium: 85 EUR']").textContent();
        expect(actualpolicypremiumText).toContain(expectedpolicypremiumText);
       }

       async verifyPolicyprmiumprmiumtext(expectedpolicypremiumText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualpolicypremiumText  = await this.page.locator("//b[normalize-space()='Total Premium: 170 EUR']").textContent();
        expect(actualpolicypremiumText).toContain(expectedpolicypremiumText);
       }

       async verifyPolicyprmiumincludetext(expectedpolicypremiumText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualpolicypremiumText  = await this.page.locator("Total Premium: 40 EUR").textContent();
        expect(actualpolicypremiumText).toContain(expectedpolicypremiumText);
       }

    async verifyPolicystatustext(expectedpolicystatusText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualpolicystatuscText  = await this.page.locator("//b[normalize-space()='Validated-Not Active']").textContent();
        expect(actualpolicystatuscText).toContain(expectedpolicystatusText);
       }

       async verifyPolicystatusrejecttext(expectedpolicystatusText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualpolicystatuscText  = await this.page.locator("//b[normalize-space()='Rejected']").textContent();
        expect(actualpolicystatuscText).toContain(expectedpolicystatusText);
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
}