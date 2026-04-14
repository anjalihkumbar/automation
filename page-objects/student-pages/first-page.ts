import {Keyboard,Locator,Page, expect} from "@playwright/test";
import dotenv from "dotenv"


export class StudentPage {

    readonly page:Page;
    readonly applicationText: Locator;
    readonly policyholderText : Locator;
    readonly policyholderaddressText: Locator;
    readonly areyouinsuredpersonText: Locator;
    readonly enterdateofbirthText : Locator;
    readonly studydetailsText: Locator;
    readonly coursedetailsText: Locator;
    readonly medicalinformationText:Locator;
    readonly medicalinformationoneText : Locator;
    readonly medicalinformationtwoText : Locator;
    readonly additionalinforamationText : Locator;
    readonly additionalinformationoneText : Locator;
    readonly additionalinformationtwoText : Locator;
    readonly firstname : Locator;
    readonly lastname : Locator;
    readonly passport : Locator;
    readonly homecountrydropdown : Locator;
    readonly homecountry : Locator;
    readonly mobilenumbercode : Locator;
    readonly mobilenumber : Locator;
    readonly mobilenumbercodedropdown : Locator;
    readonly mobilenumberselectcode : Locator;
    readonly email : Locator;
    readonly streetname : Locator;
    readonly streetnumber : Locator;
    readonly postalcode : Locator;
    readonly city : Locator;
    readonly countrydropdown : Locator;
    readonly selectcountry : Locator;
    readonly day : Locator;
    readonly month : Locator;
    readonly year : Locator;
    readonly genderdropdown : Locator;
    readonly gender : Locator;
    readonly studydetails : Locator;
    readonly studytype : Locator;
    readonly selectstudenttype : Locator;
    readonly startofstudy : Locator;
    readonly endofstudy : Locator;
    readonly medicalinformation1 : Locator;
    readonly medicalinformation2 : Locator;
    readonly addressinformation1 : Locator;
    readonly addressinformation2 : Locator;
    readonly nextbutton : Locator;
    readonly addinsuredText : Locator;
    readonly missingInformationText : Locator;
    readonly addAnotherInsuredPerson : Locator;
    readonly removeButton : Locator;
    readonly additionalInsuredPersonInformationText : Locator;
    readonly nextbuttonSecondTab : Locator;
    readonly previousButtonSecondTab : Locator;
    readonly additionalInsuredFirstName : Locator;
    readonly additionalInsuredLastName : Locator;
    readonly additionalInsuredDayOfBirth : Locator;
    readonly additionalInsuredMonthOfBirth : Locator;
    readonly additionalInsuredYearOfBirth : Locator;
    readonly additionalInsuredGenderDropdown : Locator;
    readonly additionalInsuredSelectGender : Locator;
    readonly additionalInsuredCountryDropdown : Locator;
    readonly additionalInsuredSelectCountry : Locator;
    readonly additionalInsuredPassport : Locator;
    readonly additionalInsuredEmail : Locator;
    readonly additionalInsuredmedicalinformation1 : Locator;
    readonly additionalInsuredmedicalinformation2 : Locator;
    readonly additionalInsuredaddressinformation1 : Locator;
    readonly additionalInsuredaddressinformation2 : Locator;
    readonly thirdTabPlanDetailsText : Locator;
    readonly DOBErrorText : Locator;
    readonly passportErrorText : Locator;
    readonly startDateThirdTab : Locator;
    readonly endDateThirdTab : Locator;
    readonly classicPlanPremium : Locator;
    readonly classicPlusPremium : Locator;
    readonly comfortPlanPremium : Locator;
    readonly studentClassicRadioBtn : Locator;
    readonly studentClassicPlusRadioBtn : Locator;
    readonly studentComfortRadioBtn : Locator;
    readonly expectedPaymentSummaryNameText : Locator;
    readonly expectedTotalMonthlyPremium : Locator;
    readonly periodOfInsuranceText : Locator;
    readonly chooseYourPreferredPlanText : Locator;
    readonly paymentSummaryText : Locator;
    readonly thirdTabPreviousButton : Locator;
    readonly thirdTabNextButton : Locator;
    readonly expectedFourthTabPaymentMethodText : Locator;
    readonly fourthTabCreditCardRadioBtn : Locator;
    readonly fourthTabDebitCardRadioBtn : Locator;
    readonly ibannumber : Locator;
    readonly ddmandatecheckbox : Locator;
    readonly fourthTabConsentCheckBox1: Locator;
    readonly fourthTabConsentCheckBox2: Locator;
    readonly fourthTabConsentCheckBox3: Locator;
    readonly fourthTabConsentCheckBox4: Locator;
    readonly fourthTabApplyAndPayBtn : Locator;
    readonly thirdTabStartDateCalField : Locator;
    readonly thirdTabStartDateMonthField : Locator;
    readonly thirdTabEndDateCalField : Locator;
    readonly thirdTabEndDateMonthField : Locator;
    readonly thirdTabStartDateValue : Locator;
    readonly thirdTabEndDateValue : Locator;
    readonly policynum : Locator;
    readonly savecarddetails: Locator;

      readonly bankTransfercardButton: Locator;
    readonly codeDropdownFieldForBTPolicy: Locator;
    readonly readandacceptBTPolicy:Locator;
    readonly consentBTPolicy:Locator;
    readonly consultationBTPolicy:Locator;
    readonly applyandpaybtnForBTPolicy:Locator;
    readonly secondtabNextButtonBTPolicy: Locator;
    readonly thirdtabnextButtonBTPolicy: Locator;
    readonly bankTransferradiobtn: Locator;
    readonly consentPolicy: Locator;
    readonly thirdtabnextButton : Locator;
    // readonly nextbuttonSecondTab: Locator;

    constructor(page : Page){

        this.page = page;
        this.applicationText = page.locator("//h1[normalize-space()='Application for MAWISTA Student']");
        this.policyholderText = page.locator("//div[@id='row-12844']//div[@class='col-md-12 ng-star-inserted']//div[1]");
        this.policyholderaddressText = page.locator("//div[@id='row-12929']//div[@class='col-md-12 ng-star-inserted']//div[1]");
        this.areyouinsuredpersonText = page.locator("//div[@id='row-12794']//div[@class='col-md-12 ng-star-inserted']//div[1]");
        this.enterdateofbirthText = page.locator("//div[contains(text(),'Enter your date of birth and gender')]");
        this.studydetailsText = page.locator("//div[@class='question-title mb-xs']");
        this.coursedetailsText= page.locator("//div[@class='fieldset-note ng-star-inserted']");
        this.medicalinformationText = page.locator("//div[normalize-space()='Medical information']");
        this.medicalinformationoneText=page.locator("//body/app-root/div[@id='main-container']/app-application-form/div[@id='CheckDataHeight']/div[@class='row']/div[@class='mb-md']/form[@class='ng-untouched ng-pristine ng-invalid']/app-dynamic-form[@class='ng-untouched ng-pristine ng-invalid']/div[@id='dynamic-form-container']/form[@class='ng-untouched ng-pristine ng-invalid']/div[@class='step-1']/div[@class='row ng-star-inserted']/div[@class='12792 MainSection-container col-md-12 ng-star-inserted']/div[@class='row fieldset-container']/app-dynamic-form-builder/div[@class='row ng-star-inserted']/div[@id='row-12814']/app-dynamic-form-field[@class='ng-star-inserted']/div/app-field-fieldset[@class='ng-star-inserted']/div[@class='row fieldset-container mb-xl']/div[@class='col-md-12']/div[@class='fieldInnerContainer']/div[@class='row']/div[@class='col-md-12']/app-dynamic-form-builder[@class='ng-star-inserted']/div[@class='row ng-star-inserted']/div[@id='row-12812']/app-dynamic-form-field[@class='ng-star-inserted']/div/app-component-loader[@class='ng-untouched ng-pristine ng-invalid ng-star-inserted']/app-questionnaire[@class='ng-untouched ng-pristine ng-invalid ng-star-inserted']/form[@class='ng-untouched ng-pristine ng-invalid']/div[@class='row-questionnaire']/div[@class='ng-untouched ng-pristine ng-invalid']/div[@class='row ng-star-inserted']/div[1]/div[1]");
        this.medicalinformationtwoText=page.locator("//body/app-root/div[@id='main-container']/app-application-form/div[@id='CheckDataHeight']/div[@class='row']/div[@class='mb-md']/form[@class='ng-untouched ng-pristine ng-invalid']/app-dynamic-form[@class='ng-untouched ng-pristine ng-invalid']/div[@id='dynamic-form-container']/form[@class='ng-untouched ng-pristine ng-invalid']/div[@class='step-1']/div[@class='row ng-star-inserted']/div[@class='12792 MainSection-container col-md-12 ng-star-inserted']/div[@class='row fieldset-container']/app-dynamic-form-builder/div[@class='row ng-star-inserted']/div[@id='row-12814']/app-dynamic-form-field[@class='ng-star-inserted']/div/app-field-fieldset[@class='ng-star-inserted']/div[@class='row fieldset-container mb-xl']/div[@class='col-md-12']/div[@class='fieldInnerContainer']/div[@class='row']/div[@class='col-md-12']/app-dynamic-form-builder[@class='ng-star-inserted']/div[@class='row ng-star-inserted']/div[@id='row-12812']/app-dynamic-form-field[@class='ng-star-inserted']/div/app-component-loader[@class='ng-untouched ng-pristine ng-invalid ng-star-inserted']/app-questionnaire[@class='ng-untouched ng-pristine ng-invalid ng-star-inserted']/form[@class='ng-untouched ng-pristine ng-invalid']/div[@class='row-questionnaire']/div[@class='ng-untouched ng-pristine ng-invalid']/div[@class='row ng-star-inserted']/div[2]/div[1]");
        this.additionalinforamationText=page.locator("//div[normalize-space()='Additional Information']");
        this.additionalinformationoneText=page.locator("//div[normalize-space()='Additional Information']");
        this.additionalinformationtwoText=page.locator("//div[normalize-space()='Does the insured person have a limited residence permit in Germany']");
        this.firstname = page.locator("//input[@id='mat-input-0']");
        this.lastname = page.locator("//input[@id='mat-input-1']");
        this.passport= page.locator("//input[@id='mat-input-3']");
        this.homecountrydropdown = page.locator("//*[@id='mat-input-2']");
        this.homecountry=page.locator("//span[normalize-space()='Afghanistan']");
       // this.mobilenumbercodedropdown = page.locator("(//mat-icon[contains(@class,'mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c')])[1]");
       this.mobilenumbercodedropdown = page.locator("(//mat-label[text()='Code'])[1]");
        this.mobilenumbercode = page.locator("//mat-option[@id='mat-option-101']//span[@class='mdc-list-item__primary-text']");
        this.mobilenumberselectcode = page.locator("//small[normalize-space()='+91']");
        this.mobilenumber = page.locator("//input[@id='mat-input-25']");
        this.email = page.locator("//input[@id='mat-input-4']");
        this.streetname = page.locator("//input[@id='mat-input-5']");
        this.streetnumber = page.locator("//input[@id='mat-input-6']");
        this.postalcode = page.locator("//input[@id='mat-input-7']");
        this.city = page.locator("//input[@id='mat-input-9']");
        this.countrydropdown =page.locator("//input[@id='mat-input-11']")//("//label[@id='mat-form-field-label-27']"); 
        this.selectcountry = page.locator("//span[@class='mdc-list-item__primary-text']");
        this.day = page.locator("//input[@id='mat-input-11']");
        this.month = page.locator("//input[@id='mat-input-12']");
        this.year = page.locator("//input[@id='mat-input-13']");
        this.genderdropdown = page.locator("//input[@id='mat-input-14']");
        this.gender = page.locator("//span[normalize-space()='Female']");
        this.studydetails = page.locator("//input[@id='EducationQuestionnaire']");
        this.studytype = page.locator("//input[@id='mat-input-28']");
        this.selectstudenttype = page.locator("//span[normalize-space()='Student (Bachelor, Master, PhD)']");
        this.startofstudy = page.locator("//input[@id='mat-input-29']");
        this.endofstudy = page.locator("//input[@id='mat-input-30']");
        this.medicalinformation1 = page.locator("//label[@for='mat-radio-11-input']//div[contains(text(),'Yes')]");
        this.medicalinformation2 = page.locator("//label[@for='mat-radio-15-input']//div[contains(text(),'No')]");
        this.addressinformation1 = page.locator("//label[@for='mat-radio-5-input']//div[contains(text(),'Yes')]");
        this.addressinformation2 =page.locator("//label[@for='mat-radio-9-input']//div[contains(text(),'No')]");
        this.nextbutton = page.locator("//span[@class='mdc-button__label']");
        this.addinsuredText = page.locator("//h1[normalize-space()='Additional insured person']");
        this.missingInformationText = page.locator("//div[@class='iris-messages error ng-star-inserted']");
        this.addAnotherInsuredPerson = page.locator("//a[@class='iris-link add']");
        this.removeButton = page.locator("//span[text()='Remove']");
        this.additionalInsuredPersonInformationText = page.locator("//span[text()='Additional insured person information']");
       // this.nextbuttonSecondTab = page.locator("//span[@class='mdc-button__label'][text()=' Next ']");
          this.nextbuttonSecondTab = page.locator("(//span[normalize-space()='Next'])[1]");
        this.previousButtonSecondTab = page.locator("//span[@class='mdc-button__label'][text()=' Previous ']");

        this.additionalInsuredFirstName = page.locator("//label[@id='mat-form-field-label-71']");
        this.additionalInsuredLastName = page.locator("//label[@id='mat-form-field-label-73']");
        this.additionalInsuredDayOfBirth = page.locator("//label[@id='mat-form-field-label-75']");
        this.additionalInsuredMonthOfBirth = page.locator("//label[@id='mat-form-field-label-77']");
        this.additionalInsuredYearOfBirth = page.locator("//label[@id='mat-form-field-label-79']");
        this.additionalInsuredGenderDropdown = page.locator("//label[@id='mat-form-field-label-83']");
        this.additionalInsuredSelectGender = page.locator("//span[text()=' Male ']");
        this.additionalInsuredCountryDropdown = page.locator("//label[@id='mat-form-field-label-85']");
        this.additionalInsuredSelectCountry = page.locator("//span[text()=' India ']");
        this.additionalInsuredPassport = page.locator("//label[@id='mat-form-field-label-87']");
        this.additionalInsuredEmail = page.locator("//label[@id='mat-form-field-label-89']");
        this.additionalInsuredmedicalinformation1 = page.locator("//label[@for='mat-radio-18-input']//div[contains(text(),'No')]");
        this.additionalInsuredmedicalinformation2 = page.locator("//label[@for='mat-radio-21-input']//div[contains(text(),'No')]");
        this.additionalInsuredaddressinformation1 = page.locator("//label[@for='mat-radio-24-input']//div[contains(text(),'No')]");
        this.additionalInsuredaddressinformation2 = page.locator("//label[@for='mat-radio-27-input']//div[contains(text(),'No')]");
        this.thirdTabPlanDetailsText = page.locator("//h1[text()=' Plan details ']");
        this.DOBErrorText = page.locator("//p[text()=' Invalid date ']");
        this.passportErrorText = page.locator("//p[text()=' Field format is invalid ']");
        this.startDateThirdTab = page.locator("//input[@id='mat-input-31']");
        this.endDateThirdTab = page.locator("//input[@id='mat-input-32']");
        //this.startDateThirdTab = page.locator("//input[@id='mat-input-41']");
        //this.endDateThirdTab = page.locator("//input[@id='mat-input-42']");
        this.classicPlanPremium = page.locator("(//b[@class='ng-star-inserted'])[1]");
        this.classicPlusPremium = page.locator("(//b[@class='ng-star-inserted'])[3]");
        this.comfortPlanPremium = page.locator("(//b[@class='ng-star-inserted'])[5]");
        this.studentClassicRadioBtn = page.locator("//mat-radio-button[@id='mat-radio-20']");
        //this.studentClassicRadioBtn = page.locator("//mat-radio-button[@id='mat-radio-17']");
        this.studentClassicPlusRadioBtn = page.locator("//mat-radio-button[@id='mat-radio-21']");
        this.studentComfortRadioBtn = page.locator("//mat-radio-button[@id='mat-radio-22']");
        this.expectedPaymentSummaryNameText = page.locator("(//div[@class='col-md-12 ng-star-inserted']/span)[1]");
        this.expectedTotalMonthlyPremium = page.locator("(//div[@class='col-md-12 ng-star-inserted']/span)[4]");
        this.periodOfInsuranceText = page.locator("//div[@class='col-md-12 ng-star-inserted']/h2/div[normalize-space()='Period of insurance']");
        this.chooseYourPreferredPlanText = page.locator("//div[@class='col-md-12 ng-star-inserted']/h2/div[normalize-space()='Choose your preferred plan']");
        this.paymentSummaryText = page.locator("//div[@class='col-md-12 ng-star-inserted']/h2/div[normalize-space()='Payment summary']");
        this.thirdTabPreviousButton = page.locator("//button[@class='mat-focus-indicator mat-stroked-button mat-button-base mat-accent ng-star-inserted']");
        this.thirdTabNextButton = page.locator("//span[@class= 'mdc-button__label'][text()=' Next ']");
        //this.expectedFourthTabPaymentMethodText = page.locator("//h1[text()=' Payment method and checkout ']");
        this.expectedFourthTabPaymentMethodText = page.locator("//h2[text()=' Payment method and checkout ']");

        this.fourthTabCreditCardRadioBtn = page.locator("//label[@for='mat-radio-24-input']");
        this.fourthTabDebitCardRadioBtn = page.locator("//label[@for='mat-radio-25-input']");
        this.ibannumber = page.locator("//input[@id='mat-input-34']");
       // this.ddmandatecheckbox = page.locator ("//input[@id='mat-mdc-checkbox-1-input']");
       this.ddmandatecheckbox = page.locator ("//label[normalize-space()='Issue SEPA Direct Debit Mandate']");

        //this.fourthTabConsentCheckBox1 = page.locator("(//span[@class='checkmark'])[1]");
        this.fourthTabConsentCheckBox1 = page.locator("//input[@class='mdc-checkbox__native-control' and @id='mat-mdc-checkbox-1-input']");

       // this.fourthTabConsentCheckBox2 = page.locator("(//span[@class='checkmark'])[2]");
        this.fourthTabConsentCheckBox2 = page.locator("//input[@class='mdc-checkbox__native-control' and @id='mat-mdc-checkbox-2-input']");

        //this.fourthTabConsentCheckBox3 = page.locator("(//span[@class='checkmark'])[3]");
        this.fourthTabConsentCheckBox3 = page.locator("//input[@class='mdc-checkbox__native-control' and @id='mat-mdc-checkbox-3-input']");

       // this.fourthTabConsentCheckBox4 = page.locator("(//span[@class='checkmark'])[4]");
          this.fourthTabConsentCheckBox4 = page.locator("//input[@class='mdc-checkbox__native-control' and @id='mat-mdc-checkbox-4-input']");

       // this.fourthTabApplyAndPayBtn = page.locator("//span[@class='mdc-button__label'][text()=' Apply & Pay ']");
        this.fourthTabApplyAndPayBtn = page.locator("//span[@title='Apply & Pay']");

        this.thirdTabStartDateCalField =page.locator("(//button[@class='mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base'])[3]");
        this.thirdTabStartDateMonthField =page.locator("//button[@class='mat-calendar-body-cell mat-calendar-body-active']");
        this.thirdTabEndDateCalField =page.locator("//div[@class='mat-form-field-suffix ng-tns-c9-38 ng-star-inserted']");
        this.thirdTabEndDateMonthField =page.locator("//button[@class='mat-calendar-body-cell']");
        this.thirdTabStartDateValue =page.locator("//input[@id='mat-input-31']");
        this.thirdTabEndDateValue =page.locator("//input[@id='mat-input-32']");
        this.policynum = page.locator("//p[contains(text(),'We have received your request.')]/following-sibling::p/b");
        this.savecarddetails = page.locator("//span[text()='Save card details']");
       //this.thirdtabnextButton = page.locator("//span[text()='Next']");
       // this.thirdtabnextButton = page.locator("//span[@title='Next']");
       //this.thirdtabnextButton = page.locator("//span[@title='Next']");
        // this.thirdtabnextButton = page.locator("//button[@title ='Next']");

        this.thirdtabnextButton = page.locator("(//span[@class='mdc-button__label'])[last()]");
        //this.thirdtabnextButton = page.locator("//html/body/app-root/app-layout/div/main/div[3]/div/section/form/app-dynamic-form/div/form/iris-stepper-nav/div/div[2]/iris-qnb-button/iris-button-action/iris-action-base/button/span[2]");
        //this.thirdtabnextButton = page.locator("(//span[normalize-space()='Next'])[2]");
        //this.thirdtabnextButton = page.locator("//*[@id="dynamic-form-container"]/form/iris-stepper-nav/div/div[2]/iris-qnb-button/iris-button-action/iris-action-base/button/span[2]");
          //this.thirdtabnextButton = page.locator("//mat-icon[@aria-label='Mat Arrow Forward']");


         this.bankTransferradiobtn = page.locator("//input[@class='mdc-radio__native-control' and @id='mat-radio-26-input']");
         this.secondtabNextButtonBTPolicy = page.locator("(//span[@class='mdc-button__label'])[last()]");
        this.thirdtabnextButtonBTPolicy = page.locator("(//span[@class='mdc-button__label'])[last()]");
        this.bankTransfercardButton = page.locator("//input[@id='mat-radio-14-input']");  
        this.codeDropdownFieldForBTPolicy = page.locator("//mat-label[@class='ng-tns-c19-7']");
        this.readandacceptBTPolicy = page.locator("//div[contains(text(),'I have read and hereby accept the ')]/../span");
       // this.readandacceptBTPolicy = page.locator(" label[contains(., 'I have read and hereby accept')]//input[@type='checkbox']")
     // this.consentPolicy = page.locator("//div[contains(text(),'Yes, I have read the notification for the   ')]");
        this.consentPolicy = page.locator("//div[contains(text(),'Yes, I have read the notification for the disclosure obligation')]/../span[contains(@class,'checkmark')]");
        this.consentBTPolicy = page.locator("//div[contains(text(),'I consent to MAWISTA GmbH sending me information a')]");
        this.consultationBTPolicy = page.locator("//b[contains(text(),'Yes, I sufficiently informed myself about the prod')]");
        this.applyandpaybtnForBTPolicy = page.locator("(//span[@class='mdc-button__label'])[last()]");
    }

    async gotoHomePage(url:string)
    {
        await this.page.goto(process.env.URL as string || url);
        await this.page.waitForLoadState('networkidle');
        await this.page.setViewportSize({width : 1300 , height: 800});
    }

    async varifyPageTitle(expextedPageTitle: string)
    {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
        const actualPageTitle = await this.page.title();
        console.log(actualPageTitle)
        expect(actualPageTitle).toBe(expextedPageTitle);
    }

    async varifyapplicationText(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.applicationText.textContent();
        expect(actualtext).toBe(expectedtext);   
    }

    async varifypolicyholderText(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.policyholderText.textContent();
        expect(actualtext).toContain(expectedtext);   
    }

    async varifypolicyholderaddressText(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.policyholderaddressText.textContent();
        expect(actualtext).toContain(expectedtext);   
    }

    async varifyareyouinsuredpersonText(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.areyouinsuredpersonText.textContent();
        expect(actualtext).toContain(expectedtext);   
    }

    async varifyenterdateofbirthText(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.enterdateofbirthText.textContent();
        expect(actualtext).toBe(expectedtext);   
    }

    async varifystudydetailsText(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.studydetailsText.textContent();
        expect(actualtext).toContain(expectedtext);   
    }

    async varifycoursedetailsText(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.coursedetailsText.textContent();
        expect(actualtext).toBe(expectedtext);   
    }

    async varifymedicalinformationText(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.medicalinformationText.textContent();
        expect(actualtext).toBe(expectedtext);   
    }

    async varifymedicalinformationoneText(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.medicalinformationoneText.textContent();
        expect(actualtext).toBe(expectedtext);   
    }

    async varifymedicalinformationtwoText(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.medicalinformationtwoText.textContent();
        expect(actualtext).toBe(expectedtext);   
    }

    async varifyadditionalinforamationText(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.additionalinforamationText.textContent();
        expect(actualtext).toBe(expectedtext);   
    }

    async varifyadditionalinformationoneText(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.additionalinformationoneText.textContent();
        expect(actualtext).toBe(expectedtext);   
    }

    async varifyadditionalinformationtwoText(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.additionalinformationtwoText.textContent();
        expect(actualtext).toBe(expectedtext);   
    }

    async fillfirsttabdetails(firstName : string, lastname : string, passport : string,mobilnumbercode : string,monbilenumberinput : string,email: string,streetname : string,streetnumber: string,postalcode: string,city : string,day : string,month : string,year : string,nameofinstitue: string,startofstudy: string,endofstudy : string,)
    {

        await this.firstname.fill(firstName);
        await this.lastname.fill(lastname);
        await this.homecountrydropdown.click();
        await this.homecountry.click();
        await this.passport.fill(passport);
        await this.mobilenumbercodedropdown.click();
        await this.mobilenumbercode.click();
       // await this.mobilenumbercode.fill(mobilnumbercode);
      //  await this.mobilenumberselectcode.click();
        await this.mobilenumber.fill(monbilenumberinput);
        await this.page.waitForTimeout(5000);
        await this.email.fill(email); 
        await this.streetname.fill(streetname);
        await this.streetnumber.fill(streetnumber);
        await this.postalcode.fill(postalcode);
        await this.city.fill(city);
        await this.countrydropdown.click();
        await this.selectcountry.click();
        await this.day.fill(day);
        await this.month.fill(month);
        await this.year.fill(year);
        await this.genderdropdown.click();
        await this.gender.click();
        await this.studydetails.fill(nameofinstitue);
        await this.studytype.click();
        await this.selectstudenttype.click();
        await this.startofstudy.fill(startofstudy);
        await this.endofstudy.fill(endofstudy);
        await this.medicalinformation1.click();
        await this.medicalinformation2.click();
        await this.addressinformation1.check();
        await this.addressinformation2.check();
        await this.nextbutton.click();
    }

    async VerifyNextButtonClickWithBlankDetails(expectedtext: string)
    {
        await this.page.waitForTimeout(10000);
        await this.nextbutton.click();
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.missingInformationText.textContent();
        expect(actualtext).toBe(expectedtext);
    }

    async VerifyNextButtonClickWithSpaceDetails(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.missingInformationText.textContent();
        expect(actualtext).toBe(expectedtext);
    }


    async verifysecondtabText(additionalinsuredpersonText: string)
    { await this.page.waitForLoadState('networkidle');
        const actualtext = await this.addinsuredText.textContent();
        expect(actualtext).toBe(additionalinsuredpersonText);   
    }

    async clickOnsecondtabNextButton()
    {
        await this.page.waitForLoadState('networkidle');
        await this.nextbuttonSecondTab.click();
        await this.page.waitForTimeout(2000);

    }



    async verifyRemoveButtonFunctionality(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        await this.addAnotherInsuredPerson.click();
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.additionalInsuredPersonInformationText.textContent();
        expect(actualtext).toBe(expectedtext);
        await this.removeButton.click();
        await this.page.waitForLoadState('networkidle');
        await expect(this.additionalInsuredPersonInformationText).toHaveCount(0);

    }

    async VerifyNextButtonClickWithBlankDetailsOnSecondTab(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        await this.addAnotherInsuredPerson.click();
        await this.page.waitForLoadState('networkidle');
        await this.nextbuttonSecondTab.click();
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.missingInformationText.textContent();
        expect(actualtext).toBe(expectedtext);
    }

    async VerifyPreviousButtonClickWithBlankDetailsOnSecondTab(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        await this.addAnotherInsuredPerson.click();
        await this.page.waitForLoadState('networkidle');
        await this.previousButtonSecondTab.click();
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.applicationText.textContent();
        expect(actualtext).toBe(expectedtext);
    }


    async fillSecondTabDetails(additionalInsuredFirstName : string, additionalInsuredLastName : string, additionalInsuredDayOfBirth : string, additionalInsuredMonthOfBirth : string, additionalInsuredYearOfBirth : string, additionalInsuredPassport : string, additionalInsuredEmail : string, expectedtext : string)
    {

        await this.page.waitForLoadState('networkidle');
        await this.addAnotherInsuredPerson.click();
        await this.page.waitForLoadState('networkidle');
        await this.additionalInsuredFirstName.fill(additionalInsuredFirstName);
        await this.additionalInsuredLastName.fill(additionalInsuredLastName);
        await this.additionalInsuredDayOfBirth.fill(additionalInsuredDayOfBirth);
        await this.additionalInsuredMonthOfBirth.fill(additionalInsuredMonthOfBirth);
        await this.additionalInsuredYearOfBirth.fill(additionalInsuredYearOfBirth);
        await this.additionalInsuredGenderDropdown.click();
        await this.additionalInsuredSelectGender.click();
        await this.additionalInsuredCountryDropdown.click();
        await this.additionalInsuredSelectCountry.click();

        await this.additionalInsuredPassport.fill(additionalInsuredPassport);
        await this.additionalInsuredEmail.fill(additionalInsuredEmail);
        await this.additionalInsuredmedicalinformation1.click();
        await this.additionalInsuredmedicalinformation2.click();
        await this.additionalInsuredaddressinformation1.click();
        await this.additionalInsuredaddressinformation2.click();
        await this.nextbuttonSecondTab.click();
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.thirdTabPlanDetailsText.textContent();
        expect(actualtext).toBe(expectedtext);
    }


    async fillInvalidSecondTabDetails(additionalInsuredFirstName : string, additionalInsuredLastName : string, additionalInsuredDayOfBirth : string, additionalInsuredMonthOfBirth : string, additionalInsuredYearOfBirth : string, additionalInsuredPassport : string, expectedtext: string, expectedTextPassport: string)
    {

        await this.page.waitForLoadState('networkidle');
        await this.addAnotherInsuredPerson.click();
        await this.page.waitForLoadState('networkidle');
        await this.additionalInsuredFirstName.fill(additionalInsuredFirstName);
        await this.additionalInsuredLastName.fill(additionalInsuredLastName);
        await this.additionalInsuredDayOfBirth.fill(additionalInsuredDayOfBirth);
        await this.additionalInsuredMonthOfBirth.fill(additionalInsuredMonthOfBirth);
        await this.additionalInsuredYearOfBirth.fill(additionalInsuredYearOfBirth);
        await this.additionalInsuredGenderDropdown.click();
        await this.additionalInsuredSelectGender.click();
        await this.additionalInsuredCountryDropdown.click();
        await this.additionalInsuredSelectCountry.click();

        await this.additionalInsuredPassport.fill(additionalInsuredPassport);
        await this.nextbuttonSecondTab.click();
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.DOBErrorText.textContent();
        expect(actualtext).toBe(expectedtext);
        const actualTextPassport = await this.passportErrorText.textContent();
        expect(actualTextPassport).toBe(expectedTextPassport);


    }


    // async enterThirdTabDetails(thirdTabPlanDetailsText: string, startDateThirdTab: string, endDateThirdTab: string)
    // {

    //     await this.page.waitForLoadState('networkidle');
    //     await this.nextbuttonSecondTab.click();
    //     //await this.page.waitForLoadState('networkidle');
    //     //const actualtext = await this.thirdTabPlanDetailsText.textContent();
    //     //expect(actualtext).toBe(thirdTabPlanDetailsText);
    //     await this.startDateThirdTab.fill(startDateThirdTab);
    //     await this.endDateThirdTab.fill(endDateThirdTab);
    //     await this.page.waitForLoadState('networkidle');

    // }

    async enterThirdTabDetails(startDateThirdTab: string, endDateThirdTab: string) {
       await this.startDateThirdTab.fill(startDateThirdTab);
         //await this.page.waitForTimeout(3000);
         await this.page.keyboard.press('Tab');
        await this.endDateThirdTab.fill(endDateThirdTab);
        await this.page.waitForLoadState('networkidle');
    }
        
        //await this.page.waitForTimeout(10000);
        //const actualtext1 = await this.classicPlanPremium.textContent();
       /* expect(actualtext1).toBe(expectedClassicPlanPremium);
        const actualtext2 = await this.classicPlusPremium.textContent();
        expect(actualtext2).toBe(expectedClassicPlusPremium);
        const actualtext3 = await this.comfortPlanPremium.textContent();
        expect(actualtext3).toBe(expectedComfortPlanPremium);
        const actualtext4 = await this.periodOfInsuranceText.textContent();
        expect(actualtext4).toBe(periodOfInsuranceText);
        const actualtext5 = await this.chooseYourPreferredPlanText.textContent();
        expect(actualtext5).toBe(chooseYourPreferredPlanText);
        const actualtext6 = await this.paymentSummaryText.textContent();
        expect(actualtext6).toBe(paymentSummaryText);
        await this.thirdTabPreviousButton.isVisible();
        await this.thirdTabNextButton.isVisible(); */
        
    

    async selectClassic()
    {   
        await this.studentClassicRadioBtn.click();
        await this.page.waitForTimeout(10000);
        //await this.thirdTabNextButton.click();
        
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
        await this.consentPolicy.click();
        await this.consentBTPolicy.click();
        await this.consultationBTPolicy.click();
    }

    async clickOnApplyAndPayForBTPolicy() {
        await this.applyandpaybtnForBTPolicy.click();
        await this.page.waitForLoadState('networkidle');

    }

    async selectClassicplus()
    {
        await this.studentClassicPlusRadioBtn.click(); 
        await this.page.waitForTimeout(10000);
        //await this.thirdTabNextButton.click();   
        
    }

    async selectComfort()
    {
        await this.studentComfortRadioBtn.click(); 
        await this.page.waitForTimeout(10000);
        //await this.thirdTabNextButton.click();   
        
    }

    async verifyThirdTabDetails(thirdTabPlanDetailsText: string, startDateThirdTab: string, endDateThirdTab: string, expectedClassicPlanPremium: string, expectedClassicPlusPremium: string, expectedComfortPlanPremium: string, periodOfInsuranceText: string, chooseYourPreferredPlanText: String, paymentSummaryText: String)
    {

        await this.page.waitForLoadState('networkidle');
        await this.nextbuttonSecondTab.click();
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.thirdTabPlanDetailsText.textContent();
        expect(actualtext).toBe(thirdTabPlanDetailsText);
        await this.startDateThirdTab.fill(startDateThirdTab);
        await this.endDateThirdTab.fill(endDateThirdTab);
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
        await this.studentClassicRadioBtn.click();
        await this.page.waitForTimeout(10000);
        const actualtext1 = await this.classicPlanPremium.textContent();
        expect(actualtext1).toBe(expectedClassicPlanPremium);
        const actualtext2 = await this.classicPlusPremium.textContent();
        expect(actualtext2).toBe(expectedClassicPlusPremium);
        const actualtext3 = await this.comfortPlanPremium.textContent();
        expect(actualtext3).toBe(expectedComfortPlanPremium);
        const actualtext4 = await this.periodOfInsuranceText.textContent();
        expect(actualtext4).toBe(periodOfInsuranceText);
        const actualtext5 = await this.chooseYourPreferredPlanText.textContent();
        expect(actualtext5).toBe(chooseYourPreferredPlanText);
        const actualtext6 = await this.paymentSummaryText.textContent();
        expect(actualtext6).toBe(paymentSummaryText);
        await this.thirdTabPreviousButton.isVisible();
        await this.thirdTabNextButton.isVisible();
        await this.thirdTabNextButton.click();

        
    }

    async verifyThirdTabDateDetails(expectedThirdTabPlanDetailsText: string, startDateThirdTab: string, endDateThirdTab: string)
    {

        await this.page.waitForLoadState('networkidle');
        await this.nextbuttonSecondTab.click();
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.thirdTabPlanDetailsText.textContent();
        expect(actualtext).toBe(expectedThirdTabPlanDetailsText);
        await this.startDateThirdTab.fill(startDateThirdTab);
        await this.endDateThirdTab.fill(endDateThirdTab);
        //await this.classicPlanPremium.click();
        await this.classicPlusPremium.click();
        //await this.comfortPlanPremium.click(); 
        //await this.page.waitForTimeout(110000);
        //await this.thirdTabEndDateCalField.click();
        await this.page.waitForLoadState('networkidle');
        //await this.thirdTabEndDateMonthField.click();
        //await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
        //const actualtext1 = await this.thirdTabStartDateValue.textContent();
        //expect(actualtext1).toBe(expectedThirdTabStartDateValue);
        //await this.page.waitForLoadState('networkidle');
        //const actualtext2 = await this.thirdTabEndDateValue.textContent();
        //expect(actualtext2).toBe(expectedThirdTabEndDateValue);
        
        
        
    }

    async verifyPaymentSummaryDetails(expectedPaymentSummaryNameText: string, expectedTotalMonthlyPremium: string)
    {

        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.expectedPaymentSummaryNameText.textContent();
        expect(actualtext).toBe(expectedPaymentSummaryNameText);
        const actualtext1 = await this.expectedTotalMonthlyPremium.textContent();
        expect(actualtext1).toBe(expectedTotalMonthlyPremium);

        
    }

    async fillFourthTabDetailsCreditCard(expectedFourthTabPaymentMethodText: string)
    {

        //await this.thirdTabNextButton.click();
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.expectedFourthTabPaymentMethodText.textContent();
        expect(actualtext).toBe(expectedFourthTabPaymentMethodText);
        await this.fourthTabCreditCardRadioBtn.click();
        await this.page.waitForLoadState('networkidle');
        await this.fourthTabConsentCheckBox1.click();
        await this.fourthTabConsentCheckBox2.click();
        await this.fourthTabConsentCheckBox3.click();
        await this.fourthTabConsentCheckBox4.click();
        await this.fourthTabApplyAndPayBtn.click();

    }

    async fillFourthTabDetailsDebitCard(expectedFourthTabPaymentMethodText: string, ibannumber: string)
    {

        //await this.thirdTabNextButton.click();
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.expectedFourthTabPaymentMethodText.textContent();
        expect(actualtext).toBe(expectedFourthTabPaymentMethodText);
        await this.fourthTabDebitCardRadioBtn.click();
        await this.ibannumber.fill(ibannumber);
        await this.page.waitForLoadState('networkidle');
        await this.page.keyboard.press('Tab');
        await this.page.waitForLoadState('networkidle');
        await this.ddmandatecheckbox.click();
        await this.fourthTabConsentCheckBox1.click();
        await this.fourthTabConsentCheckBox2.click();
        await this.fourthTabConsentCheckBox3.click();
        await this.fourthTabConsentCheckBox4.click();
        await this.fourthTabApplyAndPayBtn.click();

    }

    async enterCreditCardDetails() {
        await this.page.waitForLoadState('networkidle');
        console.log("hi");
        await this.page.waitForTimeout(20000);
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").fill("10");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").fill("4111111111111111");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").fill("28");  
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").fill("405");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//select[@id='country']").selectOption('India');
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").fill("12345");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//span[normalize-space()='Save card details']").click();
        await this.page.waitForTimeout(10000);    
        }
    async saveCreditCardDetails() {
    await this.savecarddetails.click();
    
    }


    async checkThankyoupageText(thankyouText: string){
        await this.page.waitForTimeout(10000);
        const actualfirtliText =  await (await this.page.waitForSelector("(//h2[contains(text(),'Thank you')])[1]")).textContent();
        expect(actualfirtliText).toContain(thankyouText);
        globalThis.policyNumber = await this.policynum.textContent();
        console.log("Policy number is :" + globalThis.policyNumber);

    }
         async clickOnThirdTabNextButtonBTPolicy() {
        await this.thirdtabnextButtonBTPolicy.click();
        await this.page.waitForLoadState('networkidle');
         }

}

