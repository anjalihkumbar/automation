import { Keyboard, Locator, Page, expect } from "@playwright/test";
import dotenv from "dotenv";

export class ProtectPage {
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
    //readonly selectgenderDropdownField: Locator;
    readonly firsttabnextButton: Locator;
    readonly addirionalinsuredPersonText: Locator;    
    readonly noteText: Locator;
    readonly addanotherinsuredPersonButton: Locator;
    readonly noButton: Locator;
    readonly secondtabNextButton: Locator;
    readonly secondtabPreviousButton: Locator;
    readonly reiscareButton: Locator;
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

    readonly firstnamesecondTabSecondMemberInputField: Locator;
    readonly lastnamesecondTabSecondMemberInputField: Locator;
    readonly daysecondTabSecondMemberInputField: Locator;
    readonly monthsecondTabSecondMemberInputField: Locator;
    readonly yearsecondTabSecondMemberInputField: Locator;
    readonly gendersecondTabSecondMemberDropdownField: Locator;
    readonly selectgendersecondTabSecondMemberDropdownField: Locator;
    readonly homecountrysecondTabSecondMemberDropdownField: Locator;
    readonly selectcountrysecondTabSecondMemberInputField: Locator;
    readonly passportnumbersecondTabSecondMemberInputField: Locator;

    readonly startDateThirdTab: Locator;   
    readonly endDateThirdTab: Locator;   
    
    readonly startDateThirdTabTwoMemberDetail:Locator;
    readonly endDateThirdTabTwoMemberDetail:Locator;

    readonly startDateThirdTabOneMemberDetail:Locator;
    readonly endDateThirdTabOneMemberDetail:Locator;

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

    readonly creditcardradiobtn:Locator;
    readonly debitcardradiobtn:Locator;
    readonly accountholdername:Locator;
    readonly iban:Locator;
    readonly nameaccholder: Locator;
    readonly ddmandatecheckbox:Locator;
    readonly readandaccept:Locator;
    readonly consent:Locator;
    readonly consultation:Locator;
    readonly applyandpaybtn:Locator;
    readonly cardholdername:Locator;
    readonly creditcardnbr:Locator;
    readonly expirydatemonth:Locator;
    readonly expirydateyear:Locator;
    readonly securitycode:Locator;
    readonly countrydrpdwn:Locator;
    readonly countryindia:Locator;
    readonly postalcode:Locator;
    readonly email:Locator;
    readonly savecarddetails:Locator;
    readonly policynum: Locator;
    readonly addinsuredbutton: Locator;
    readonly depfirstname: Locator;
    readonly deplastname: Locator;
   // readonly readandaccepts:Locator;

    readonly bankTransferradiobtn: Locator;
    readonly codeDropdownFieldForBTPolicy: Locator;
    readonly readandacceptBTPolicy:Locator;
    readonly consentBTPolicy:Locator;
    readonly consultationBTPolicy:Locator;
    readonly applyandpaybtnForBTPolicy:Locator;
    readonly secondtabNextButtonBTPolicy: Locator;
    readonly thirdtabnextButtonBTPolicy: Locator;


    constructor(page: Page) {
        this.page = page;
        this.reiscareButton = page.locator("//button[normalize-space()='Expatcare']");
        this.firstnameInputField = page.locator("//input[@id='mat-input-0']");
        this.lastnameInputField = page.locator("//input[@id='mat-input-1']");
        this.homecountryDropdownField = page.locator("//input[@id='mat-input-2']");
        this.selectcountryInputField = page.locator("//span[normalize-space()='India']");
        this.passportnumberInputField = page.locator("//input[@id='mat-input-3']");
       // this.codeDropdownField = page.locator("//mat-icon[@class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c19-7']");
       this.codeDropdownField = page.locator("(//mat-label[text()='Code'])[1]");
       this.mobilecodeInputField = page.locator("//input[@id='mat-input-4']");
       this.selectmobilecodeInputField = page.locator("//mat-option[@id='mat-option-2944']//span[@class='mat-option-text']//span[1]");
       //this.selectmobilecodeInputField = page.locator("(//mat-icon[@title='Dropdown icon for Code list'])[1]");
        this.selectmobilecodeInputField = page.locator("(//mat-label[text()='Code'])[1]");
        this.mobilenumberInputField = page.locator("//input[@id='mat-input-25']");
        this.emailInputField = page.locator("//input[@id='mat-input-4']");
        this.streetnameInputField = page.locator("//input[@id='mat-input-5']");
        this.streetnumberInputField = page.locator("//input[@id='mat-input-6']");
        this.postalcodeInputField = page.locator("//input[@id='mat-input-7']");
        this.additionaladdressInputField = page.locator("//input[@id='mat-input-8']");
        this.cityInputField = page.locator("//input[@id='mat-input-9']");
        this.countryDropdownField = page.locator('//input[title="Email or Username"]');
        this.dayInputField = page.locator("//input[@id='mat-input-11']");
        this.monthInputField = page.locator("//input[@id='mat-input-12']");
        this.yearInputField = page.locator("//input[@id='mat-input-13']");
        this.genderDropdownField = page.locator("//input[@id='mat-input-14']");
        this.firsttabnextButton = page.locator("//span[@class='mat-mdc-button-touch-target']");
        this.addirionalinsuredPersonText = page.locator("//h1[normalize-space()='Additional insured person']");
        this.noteText = page.locator("//div[@class='fieldset-note']");
        this.addanotherinsuredPersonButton = page.locator("//a[normalize-space()='Add another insured person']");
        this.noButton = page.locator("//label[@for='mat-radio-3-input']//span[@class='mat-radio-outer-circle']");
        this.secondtabNextButtonBTPolicy = page.locator("//span[@title='Next']");
        this.secondtabNextButton = page.locator("(//span[normalize-space()='Next'])[1]");
        this.secondtabPreviousButton = page.locator("//span[normalize-space()='Previous']");
        this.firstNameInputField = page.locator("//input[@id='mat-input-15']");
        this.lastNameInputField = page.locator("//input[@id='mat-input-16']");
        this.daYInputField = page.locator("//input[@id='mat-input-17']");
        this.montHInputField = page.locator("//input[@id='mat-input-18']");
        this.yeaRInputField = page.locator("//input[@id='mat-input-19']");
        this.gendeRDropdownField = page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[4]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[2]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectgendeRDropdownField = page.locator("//span[normalize-space()='Female']");
        this.homecountrYDropdownField = page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[4]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[3]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectcountrYInputField = page.locator("//span[normalize-space()='Afghanistan']");
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
        this.gendersecondTabDropdownField=page.locator("//input[@id='mat-input-33' and @role='combobox']");
        this.selectgendersecondTabDropdownField=page.locator("//span[normalize-space()='Female']");
        this.homecountrysecondTabDropdownField=page.locator("//input[@id='mat-input-34' and @role='combobox']");
        this.selectcountrysecondTabInputField=page.locator("//span[normalize-space()='Afghanistan']");
        this.passportnumbersecondTabInputField=page.locator("//input[@id='mat-input-35']");

        this.firstnamesecondTabSecondMemberInputField=page.locator("//input[@id='mat-input-37']");
        this.lastnamesecondTabSecondMemberInputField=page.locator("//input[@id='mat-input-38']");
        this.daysecondTabSecondMemberInputField=page.locator("//input[@id='mat-input-39']");
        this.monthsecondTabSecondMemberInputField=page.locator("//input[@id='mat-input-40']");
        this.yearsecondTabSecondMemberInputField=page.locator("//input[@id='mat-input-41']");
        this.gendersecondTabSecondMemberDropdownField=page.locator("//input[@id='mat-input-43' and @role='combobox']");
        this.selectgendersecondTabSecondMemberDropdownField=page.locator("//span[normalize-space()='Female']");
        this.homecountrysecondTabSecondMemberDropdownField=page.locator("//input[@id='mat-input-44' and @role='combobox']");
        this.selectcountrysecondTabSecondMemberInputField=page.locator("//span[normalize-space()='Afghanistan']");
        this.passportnumbersecondTabSecondMemberInputField=page.locator("//input[@id='mat-input-45']");

        this.startDateThirdTab=page.locator("//input[@id='mat-input-27']");
        this.endDateThirdTab=page.locator("//input[@id='mat-input-28']");
        // this.startDateThirdTab=page.locator("(//button[@class='mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base'])[1]");
        // this.endDateThirdTab=page.locator("(//button[@class='mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base'])[2]");


        this.startDateThirdTabTwoMemberDetail=page.locator("//input[@id='mat-input-47']");
        this.endDateThirdTabTwoMemberDetail=page.locator("//input[@id='mat-input-48']");

        this.startDateThirdTabOneMemberDetail=page.locator("//input[@id='mat-input-37']");
        this.endDateThirdTabOneMemberDetail=page.locator("//input[@id='mat-input-38']");
        
        this.classictile=page.locator("//label[@for='mat-radio-5-input']");
        this.comforttile=page.locator("//label[@for='mat-radio-6-input']");
        this.premiumtile=page.locator("//label[@for='mat-radio-7-input']");
        //this.thirdtabnextButton = page.locator("//mat-icon[@aria-label='Mat Arrow Forward']");
        this.thirdtabnextButton = page.locator("//span[text()='Next']");
        this.thirdtabnextButtonBTPolicy = page.locator("//span[@title='Next']");
        this.fourttabApplyandPayButton = page.locator("//span[normalize-space()='Apply & Pay']");
        this.directdebitButton = page.locator("//label[@for='mat-radio-13-input']//div[@class='mat-h2 mb-none']");                 
        this.creditcardButton = page.locator("//div[normalize-space()='Credit Card']");   
        this.applyandpayButton = page.locator("//span[normalize-space()='Apply & Pay']");  
        this.gendeDropdownField = page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[4]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[2]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]"); 
        this.selectgendeDropdownField = page.locator("//span[normalize-space()='Male']");                           
        this.homecountrDropdownField = page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[4]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[3]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectcountrInputField = page.locator("//span[normalize-space()='Afghanistan']");
        
        this.creditcardradiobtn = page.locator("//label[@for='mat-radio-8-input']");
        this.debitcardradiobtn = page.locator("//label[@for='mat-radio-9-input']");
        this.accountholdername = page.locator("//input[@placeholder='Account holder name']");
        this.iban = page.locator("//input[@placeholder='IBAN']");
        this.nameaccholder = page.locator ("//div[text()=' Name of the account holder ']");
        this.ddmandatecheckbox = page.locator("//div[@class='mdc-checkbox']/input");
        //this.readandaccept = page.locator("(//span[@class='checkmark'])[1]");
       // this.readandaccept = page.locator("//div[contains(text(),'I have read and hereby accept the')]");
        //this.readandaccept = page.locator("//input[@class='mdc-checkbox__native-control' and @id='mat-mdc-checkbox-1-input']");
           // this.readandaccept = page.locator("//div[contains(text(),'I consent to MAWISTA GmbH sending me information a')]");
            this.readandaccept = page.locator("//input[@class='mdc-checkbox__native-control' and @id='mat-mdc-checkbox-0-input']");
       // this.consent = page.locator("(//span[@class='checkmark'])[2]");
       // this.consent = page.locator("//div[contains(text(),'I consent to MAWISTA GmbH sending me information a')]");
       // this.consent = page.locator("//input[@class='mdc-checkbox__native-control' and @id='mat-mdc-checkbox-2-input']");
         this.consent = page.locator("//input[@class='mdc-checkbox__native-control' and @id='mat-mdc-checkbox-1-input']");
       // this.consultation = page.locator("(//span[@class='checkmark'])[3]");
       // this.consultation = page.locator("//b[contains(text(),'Yes, I sufficiently informed myself about the prod')]");
         this.consultation = page.locator("//input[@class='mdc-checkbox__native-control' and @id='mat-mdc-checkbox-2-input']");
           // this.consultation = page.locator("//input[@class='mdc-checkbox__native-control mdc-checkbox--selected']");
       // this.applyandpaybtn = page.locator("//button[@color='primary']"); 
       this.applyandpaybtn = page.locator("//span[@title='Apply & Pay']");
        this.cardholdername = page.locator("//input[@name='lastname']");
        this.creditcardnbr = page.locator("//input[@name='cardnumber']");
        this.expirydatemonth = page.locator("//input[@name='expirationMM']");
        this.expirydateyear = page.locator("//input[@name='expirationYYYY']");
        this.securitycode = page.locator("//input[@name='cvc']");
        this.countrydrpdwn = page.locator("//select[@name='country']");
        this.countryindia = page.locator("//select[@name='country']/option[text()='India']");
        this.postalcode = page.locator("//input[@name='postalCode']");
        this.email = page.locator("//span[text()='Save card details']");  
        this.savecarddetails = page.locator("//span[text()='Save card details']");  
        this.policynum = page.locator("//p[contains(text(),'We have received your request.')]/following-sibling::p/b");
        this.addinsuredbutton = page.locator("//a[@class='iris-link add']");
        this.depfirstname = page.locator("//div[@class='col-sm-6 DependentFirstName div-field-box ng-star-inserted']");
        this.deplastname = page.locator("//div[@class='col-sm-6 DependentLastName div-field-box ng-star-inserted']");

        this.bankTransferradiobtn = page.locator("//input[@class='mdc-radio__native-control' and @id='mat-radio-14-input']");
        this.codeDropdownFieldForBTPolicy = page.locator("//mat-label[@class='ng-tns-c15-6']");
        this.readandacceptBTPolicy = page.locator("//input[@class='mdc-checkbox__native-control' and @id='mat-mdc-checkbox-1-input']");
        this.consentBTPolicy = page.locator("//input[@class='mdc-checkbox__native-control' and @id='mat-mdc-checkbox-2-input']");
        this.consultationBTPolicy = page.locator("//input[@class='mdc-checkbox__native-control' and @id='mat-mdc-checkbox-3-input']");
        this.applyandpaybtnForBTPolicy = page.locator("//span[@title='Apply & Pay']");
      /*  this.depdobday = page.locator("//label[@id='mat-mdc-form-field-label-66']");
        this.depdobmon = page.locator("//label[@id='mat-mdc-form-field-label-68']");
        this.depdobyear = page.locator("//label[@id='mat-mdc-form-field-label-70']");
        */


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

    async protectFirstTab(firstname: string, lastname: string, passport: string, code: string, mobilenumber: string, email: string, streetname: string, streetnumber: string, postalcode: string, address: string, city: string, day: string, month: string, year: string) {
        await this.firstnameInputField.fill(firstname);
        await this.lastnameInputField.fill(lastname);
        await this.homecountryDropdownField.click();
        await this.selectcountryInputField.click();
        await this.passportnumberInputField.fill(passport);
        //await this.page.waitForTimeout(3000);
        await this.codeDropdownField.click();
        //await this.page.waitForTimeout(3000);
        await this.page.locator("//mat-option[@id='mat-option-101']//span[@class='mdc-list-item__primary-text']").click();
        //await this.page.locator("//span[text()='India']").click();
        //await this.page.locator("//div[@class='cdk-overlay-pane']//mat-option[2]//img").click();
        //await this.page.locator('span.mdc-list-item__primary-text', { hasText: 'India'}).click();
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
        await this.page.locator("//span[normalize-space()='Male']").click();
       // await this.selectgenderDropdownField.click();
    }

    async expatcaregenderchangeFirstTab(firstname: string, lastname: string, passport: string, code: string, mobilenumber: string, email: string, streetname: string, streetnumber: string, postalcode: string, address: string, city: string, day: string, month: string, year: string) {
        // await this.expatcarebButton.click();
         await this.firstnameInputField.fill(firstname);
         await this.lastnameInputField.fill(lastname);
         await this.homecountryDropdownField.click();
         await this.selectcountryInputField.click();
         await this.passportnumberInputField.fill(passport);
         await this.codeDropdownField.click();
         //await this.page.locator("//div[@class='cdk-overlay-pane']//mat-option[2]//img").click();
         await this.page.locator("//mat-option[@id='mat-option-101']//span[@class='mdc-list-item__primary-text']").click();
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

    async protectinsuredpersonsdetailsFirstTab(firstName: string, lastName: string, passport: string, code: string, mobilenumber: string, email: string, streetname: string, streetnumber: string, postalcode: string, address: string, city: string, dAy: string, monTh: string, yeAr: string) {
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

    async verifyPageTitle(expectedPageTitle: string) {
        await this.page.waitForLoadState('networkidle');
        //await this.page.waitForTimeout(20000);
        const actualPageTitle = await this.page.title();
        expect(actualPageTitle).toBe(expectedPageTitle);
    }

    async verifyAplicationFirstTabText(expectedAdditinalinsuredpersonText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualAdditinalinsuredpersonText = await this.page.locator("//h1[normalize-space()='Application for MAWISTA Protect']").textContent();
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
     //  const actualallfieldblankText = await this.allfieldsonFirstTabErrorMsg.textContent();
      // console.log(actualallfieldblankText);
      expect(" Invalid or missing information,please check your information and try again ").toBe(expectedgermanyText);
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

    async verifyinvalidpassportText(expectedfemalegenderfirsttabText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualfemalegenderfirsttabText = await this.page.locator("//p[@class='form-error ng-star-inserted']").textContent();
       console.log(actualfemalegenderfirsttabText);
        expect(" Female ").toBe(expectedfemalegenderfirsttabText);
    }

    async clickOnAddanotherinsuredpersonButton() {
        await this.page.waitForTimeout(10000);
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

     async expatcaresecondtTabOneMemberDetail(firstname: string, lastname: string, passport: string,day: string, month: string, year: string) {
        
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

         async expatcaresecondtTabSecondMemberDetail(firstname: string, lastname: string, passport: string,day: string, month: string, year: string) {
        
        await this.firstnamesecondTabSecondMemberInputField.fill(firstname);
        await this.lastnamesecondTabSecondMemberInputField.fill(lastname);
        await this.daysecondTabSecondMemberInputField.fill(day);
        await this.monthsecondTabSecondMemberInputField.fill(month);
        await this.yearsecondTabSecondMemberInputField.fill(year);
        await this.gendersecondTabSecondMemberDropdownField.click();
        await this.selectgendersecondTabSecondMemberDropdownField.click();
        await this.homecountrysecondTabSecondMemberDropdownField.click();
        await this.selectcountrysecondTabSecondMemberInputField.click();
        await this.passportnumbersecondTabSecondMemberInputField.fill(passport);
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
        await this.page.waitForTimeout(6000);
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

    async clickOnsecondtabPreviousButton() {
        await this.secondtabPreviousButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
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

    async protectStartandenddateonThirdtTab(startDateThirdTab: string, endDateThirdTab: string) {
       /* await this.page.locator("(//mat-icon[@class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color'])[1]").click();
        await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();
        await this.page.locator("(//mat-icon[@class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color'])[2]").click();
        await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();     
    */
        await this.startDateThirdTab.fill(startDateThirdTab);
         //await this.page.waitForTimeout(3000);
         await this.page.keyboard.press('Tab');
        await this.endDateThirdTab.fill(endDateThirdTab);
        await this.page.waitForLoadState('networkidle');
        }
         
        
        

        async protectStartandenddateonThirdtTabForAnotherInsuredPerson(startDateThirdTabTwoMemberDetail: string, endDateThirdTabTwoMemberDetail: string) {
       /* await this.page.locator("(//mat-icon[@class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color'])[1]").click();
        await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();
        await this.page.locator("(//mat-icon[@class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color'])[2]").click();
        await this.page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]").click();     
    */
        // await this.startDateThirdTabTwoMemberDetail.fill(startDateThirdTabTwoMemberDetail);
        //  await this.endDateThirdTabTwoMemberDetail.fill(endDateThirdTabTwoMemberDetail);

        await this.startDateThirdTabOneMemberDetail.fill(startDateThirdTabTwoMemberDetail);
        await this.endDateThirdTabOneMemberDetail.fill(endDateThirdTabTwoMemberDetail);
        await this.page.waitForLoadState('networkidle');
        }

        
        


    async enterThirdTabDetails(startDateThirdTab: string, endDateThirdTab: string){
        await this.page.waitForLoadState('networkidle');
        await this.startDateThirdTab.fill(startDateThirdTab);
        await this.page.keyboard.press('Tab');
        await this.page.waitForTimeout(5000);
        await this.endDateThirdTab.fill(endDateThirdTab);
        await this.page.waitForLoadState('networkidle');

    }

    // async expatcaresStartandEnddateonThirdtTab(startdate: string, enddate: string) {
    //     const startInput = this.page.locator('#mat-input-27');
    //     const endInput = this.page.locator('#mat-input-28');
    //       // Start Date
    //     await startInput.click();
    //     await startInput.press('Control+A');
    //     await startInput.press('Backspace');
    //     await startInput.type(startdate, { delay: 120 });
    //     await startInput.press('Tab');
 
    //     // End Date
    //     await endInput.click();
    //     await endInput.press('Control+A');
    //     await endInput.press('Backspace');
    //     await endInput.type(enddate, { delay: 120 });
    //     await endInput.press('Tab');
    // }

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
        //await this.page.waitForTimeout(10000);
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
    async verifyProtectlibiltyTileText(expectedpremiumText: string,expectedfirstliText: string,expectedsecondliText: string,expectedthirdliText: string) {
        await this.page.waitForLoadState('networkidle');
        await this.page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-component-loader[1]/app-plans[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/mat-radio-group[1]/div[1]/div[2]/mat-radio-button[1]/label[1]").click();
        const actualpremiumText = await this.page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-component-loader[1]/app-plans[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/mat-radio-group[1]/div[1]/div[2]/mat-radio-button[1]/label[1]/span[2]/b[2]").textContent();
        expect(actualpremiumText).toContain(expectedpremiumText);
        const actualfirtliText = await this.page.locator("//li[normalize-space()='Compensation in the event of disability']").textContent();
        expect(actualfirtliText).toContain(expectedfirstliText);
        const actualsecondliText = await this.page.locator("//li[normalize-space()='Compensation on death']").textContent();
        expect(actualsecondliText).toContain(expectedsecondliText);
        const actualThirdiText = await this.page.locator("//li[normalize-space()='24/7 worldwide accident consultation']").textContent();
        expect(actualThirdiText).toContain(expectedthirdliText);
    }

    async verifyPremiumvaluesforProtectaccidentwithoutinsureperson(expectedclassicText: string) {
        await this.page.waitForLoadState('networkidle');
       const actualclassicText = await this.page.locator("//b[contains(text(),'€6')]").textContent();
        expect(actualclassicText).toContain(expectedclassicText);
    }

    async verifyProtectaccidentTileText(expectedpremiumText: string,expectedfirstliText: string,expectedsecondliText: string,expectedthirdliText: string) {
        await this.page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-component-loader[1]/app-plans[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/mat-radio-group[1]/div[1]/div[2]/mat-radio-button[2]/label[1]").click();
        await this.page.waitForLoadState('networkidle');
        const actualpremiumText = await this.page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-component-loader[1]/app-plans[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/mat-radio-group[1]/div[1]/div[2]/mat-radio-button[2]/label[1]/span[2]/b[2]").textContent();
        expect(actualpremiumText).toContain(expectedpremiumText);
       const actualfirtliText = await this.page.locator("//li[normalize-space()='Material damage compensation']").textContent();
        expect(actualfirtliText).toContain(expectedfirstliText);
        const actualsecondliText = await this.page.locator("//li[normalize-space()='Rental damage compensation']").textContent();
        expect(actualsecondliText).toContain(expectedsecondliText);
        const actualThirdiText = await this.page.locator("//li[normalize-space()='Personal injury compensation']").textContent();
        expect(actualThirdiText).toContain(expectedthirdliText);
    }

    async verifyProtectaccidentandlibiltyTileText(expectedpremiumtliText: string,expectedfirstliText: string,expectedsecondliText: string,expectedthirdliText: string) {
        await this.page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-component-loader[1]/app-plans[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/mat-radio-group[1]/div[1]/div[2]/mat-radio-button[2]/label[1]").click();
        await this.page.waitForLoadState('networkidle');
        const actualpremiumliText = await this.page.locator("//b[normalize-space()='12']").textContent();
        expect(actualpremiumliText).toContain(expectedpremiumtliText);
       const actualfirtliText = await this.page.locator("//li[normalize-space()='Includes liability insurance']").textContent();
        expect(actualfirtliText).toContain(expectedfirstliText);
        const actualsecondliText = await this.page.locator("//li[normalize-space()='Includes accident insurance']").textContent();
        expect(actualsecondliText).toContain(expectedsecondliText);
        const actualThirdiText = await this.page.locator("//li[normalize-space()='24/7 worldwide support service']").textContent();
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
      
    async verifyThankyoupageText(expectedthankyouText: string,expectedfirstText: string,expectedThirdText: string,expecteddistributornameText: string) {
       // await this.page.waitForTimeout(10000);
        // async verifyThankyoupageText(expectedthankyouText: string,expectedfirstText: string,expectedpolicyidText: string,expectedThirdText: string,expecteddistributornameText: string) {
        await this.page.waitForLoadState('networkidle');
        const actualfirtliText =  await (await this.page.waitForSelector("//div[@id='row-12889']//h3[contains(text(),'Thank you')]")).textContent();
      // const actualfirtliText = await this.page.locator("//div[@id='row-12889']//h3[contains(text(),'Thank you')]").textContent();
       expect(actualfirtliText).toContain(expectedthankyouText);
       const actualsecondliText = await this.page.locator("//div[@id='row-12889']//app-message-screen//p[1]").textContent();
       expect(actualsecondliText).toContain(expectedfirstText);
      //  const actualpolicyidText = await this.page.locator("//div[@id='row-12889']//b[contains(text(),'MAE-AWPDE-6028-NB')]").textContent();
       // expect("MAE-AWPDE").toContain(expectedpolicyidText);
      const actualthirdText = await this.page.locator("(//p[contains(text(),'If you have any questions please contact the below')])[1]").textContent();
        expect(actualthirdText).toContain(expectedThirdText);
       const actualdisText = await this.page.locator("//div[@id='row-12889']//p[@class='ng-star-inserted']").textContent();
       expect(actualdisText).toContain(expecteddistributornameText);
        
    }

    async expatcaresStartdateonThirdtTab(startdate: string) {
        
        await this.page.locator("//input[@id='mat-input-27']").fill(startdate);
        
    }

    async clickOnaccidentButton() {
        await this.page.locator("//label[@for='mat-radio-5-input']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(20000);
    }
    async clickOnliabilityButton() {
        await this.page.locator("//label[@for='mat-radio-6-input']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(20000);
    }
    async clickOnaccidentandliabilityButton() {
        await this.page.locator("//label[@for='mat-radio-7-input']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(20000);
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
       
      //  await this.page.locator("//select[@id='country']").click();
        //await this.page.waitForTimeout(5000);
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").click();
        //await this.page.waitForTimeout(5000);
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").fill("12345");
       await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//span[normalize-space()='Save card details']").click();
        await this.page.waitForTimeout(10000);
        //const iframeElement = await this.page.locator("//iframe[@id='CreditCardIframe']");
         console.log("hi");
          // Switch to the iframe
        // await iframeElement.locator("//input[@id='cardnumber']").fill("4111 1111 1111 1111");*/

       
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

    async clickOnDirectdebittButton() {
        await this.directdebitButton.click();
        await this.page.waitForLoadState('networkidle');
        //await this.page.waitForTimeout(10000);
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
        await this.page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[4]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[3]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-component-loader[1]/app-questionnaire[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/label[1]/span[1]").click();
       // await this.page.waitForTimeout(10000);
        await this.page.locator("//div[contains(text(),'I consent to MAWISTA GmbH sending me information a')]").click();
       // await this.page.waitForTimeout(10000);
        await this.page.locator("//b[contains(text(),'Yes, I sufficiently informed myself about the prod')]").click();
        await this.page.waitForLoadState('networkidle');
        //await this.page.waitForTimeout(10000);
        
    }

    async ProtectStartdateandEnddate(startdate: string, enddate: string)
    {
        await this.page.waitForLoadState('networkidle');
        await this.page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-date[1]/form[1]/iris-datepicker[1]/mat-form-field[1]/div[1]/div[1]/div[3]/input[1]").fill(startdate);
        await this.page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[3]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-date[1]/form[1]/iris-datepicker[1]/mat-form-field[1]/div[1]/div[1]/div[3]/input[1]").fill(enddate);
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
    await this.page.evaluate(scrollDownJS);    
}

async clickOnDebitCardRadioButton() {
    await this.page.waitForLoadState('networkidle');
    await this.debitcardradiobtn.click();
}

async accountHolderName(accountholdername: string, iban: string ) {
await this.page.waitForLoadState('networkidle');
await this.accountholdername.fill(accountholdername);
await this.iban.fill(iban);
//await this.page.pause();
//await this.nameaccholder.click();
await this.page.keyboard.press('Tab');

}
async clickMandateCheckbox() {
await this.page.waitForLoadState('networkidle');
await this.page.locator("//input[@id='mat-mdc-checkbox-3-input']").click();

}

async clickOnDeclarationCheckboxes() {
await this.page.waitForLoadState('networkidle');
await this.readandaccept.click();
await this.consent.click();
await this.consultation.click();

}
async clickOnApplyAndPay() {
await this.applyandpaybtn.click();
await this.page.waitForLoadState('networkidle');

}

async checkThankyoupageText(thankyouText: string){
    await this.page.waitForLoadState('networkidle');    
    const actualfirtliText =  await (await this.page.waitForSelector("(//h2[contains(text(),'Thank you')])[1]")).textContent();
    expect(actualfirtliText).toContain(thankyouText);
    const policyNumber = await this.policynum.textContent();
    globalThis.policyNumber = await this.policynum.textContent();
    console.log("Policy number is :" + globalThis.policyNumber);
// await this.page.pause();

}

async clickOnCreditCardRadioButton() {
    // await this.page.waitForLoadState('networkidle');
    // await this.page.waitForTimeout(10000);
    // const actualPageTitle = await this.page.title();
    // expect(actualPageTitle).toBe(expectedPageTitle);
    await this.creditcardradiobtn.click();
}

async enterCreditCardDetails() {
    await this.page.waitForLoadState('networkidle');
       console.log("hi");
    await this.page.waitForTimeout(2000);
    await this.page.frameLocator("//iframe[@id='CreditCardIframe']");
    await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").click();
    await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").fill("3");
    await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").click();
    await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").fill("4111111111111111");
    await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").click();
    await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").fill("26");  
    await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").click();
    await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").fill("411");
    await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//select[@id='country']").selectOption('India');
    await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").click();
    await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").fill("12345");
    await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//span[normalize-space()='Save card details']").click();
    await this.page.waitForTimeout(10000);    
    }

    async saveCreditCardDetails() {
        await this.savecarddetails.click();
    
    }

    async clickOnBankTransferRadioButton() {
        await this.page.waitForLoadState('networkidle');
        await this.bankTransferradiobtn.click();
    }

    async protectFirstTabForBTPolicy(firstname: string, lastname: string, passport: string, code: string, mobilenumber: string, email: string, streetname: string, streetnumber: string, postalcode: string, address: string, city: string, day: string, month: string, year: string) {
        await this.firstnameInputField.fill(firstname);
        await this.lastnameInputField.fill(lastname);
        await this.homecountryDropdownField.click();
        await this.selectcountryInputField.click();
        await this.passportnumberInputField.fill(passport);
        //await this.page.waitForTimeout(3000);
        await this.codeDropdownFieldForBTPolicy.click();
        //await this.page.waitForTimeout(3000);
        await this.page.locator("//mat-option[@id='mat-option-101']//span[@class='mdc-list-item__primary-text']").click();
       // await this. page.locator("//input[@id='mat-radio-13-input' and @type='radio']").check();

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
        await this.page.locator("//span[normalize-space()='Male']").click();
       // await this.selectgenderDropdownField.click();
    }

    async clickOnMawistaProtectUnfallversicherungButton() {
        //await this.page.locator("//label[@for='mat-radio-11-input']").click();
        await this.page.locator("//label[@for='mat-radio-8-input']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async clickOnBTPolicyDeclarationCheckboxes() {
        await this.page.waitForLoadState('networkidle');
        await this.readandacceptBTPolicy.click();
        await this.consentBTPolicy.click();
        await this.consultationBTPolicy.click();
    }

    async clickOnApplyAndPayForBTPolicy() {
        await this.applyandpaybtnForBTPolicy.click();
        await this.page.waitForLoadState('networkidle');
    }

    async checkThankYouPageTextForBTPolicy(thankyouText: string){
        await this.page.waitForLoadState('networkidle');    
        const actualfirtliText =  await (await this.page.waitForSelector("//div[@class='col-sm-12 policyManualReviewMessage div-field-box ng-star-inserted']//h2[@title='Thank you'][normalize-space()='Thank you']")).textContent();
        expect(actualfirtliText).toContain(thankyouText);
        const policyNumber = await this.policynum.textContent();
        globalThis.policyNumber = await this.policynum.textContent();
        console.log("Policy number is :" + globalThis.policyNumber);
    }

    async clickOnsecondtabNextButtonBTPolicy() {
        await this.secondtabNextButtonBTPolicy.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(6000);
    }

    async clickOnThirdTabNextButtonBTPolicy() {
        await this.thirdtabnextButtonBTPolicy.click();
        await this.page.waitForLoadState('networkidle');
       //await this.page.waitForTimeout(10000);
    }


}
