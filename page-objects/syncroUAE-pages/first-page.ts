import { Keyboard, Locator, Page, expect } from "@playwright/test";
import dotenv from "dotenv";

export class SyncroUaePage {
    readonly page: Page;
    //Individual policy locators***
    readonly userNameInputField: Locator;
    readonly passwordInputField: Locator;
    //readonly rememberMeCheckbox: Locator;
    readonly loginButton: Locator;
    readonly newPolicyIcon: Locator;
    readonly individualPolicyLink: Locator;
    //Policyholder basic details locators
    readonly payerDropdownField: Locator;
    readonly payerDropdownSearchField: Locator;
    readonly payerSelectValue: Locator;
    readonly distributorDropdownField: Locator;
    readonly distributorDropdownSearchField: Locator;
    readonly distributorSelectValue: Locator;
    readonly policyHolderName: Locator;
    readonly effectiveDate: Locator;
    readonly effectiveDateCalendarIcon: Locator;
    readonly effectiveDateTodaysDate: Locator;
    readonly expiryDate: Locator;
    readonly countryDropdownField: Locator;
    readonly countryDropdownSearchField: Locator;
    readonly countrySelectValue: Locator;
    readonly regionDropdownField: Locator;
    readonly regionDropdownSearchField: Locator;
    readonly regionSelectValue: Locator;
    readonly healthAuthDropdownField: Locator;
    readonly healthAuthDropdownSearchField: Locator;
    readonly healthAuthSelectValue: Locator;
    readonly programDropdownField: Locator;
    readonly programDropdownSearchField: Locator;
    readonly programSelectValue: Locator;
    readonly producerDropdownField: Locator;
    readonly producerDropdownSearchField: Locator;
    readonly producerSelectValue: Locator;
    readonly branchDropdownField: Locator;
    readonly branchDropdownFieldBroker: Locator;
    readonly branchDropdownSearchField: Locator;
    readonly branchSelectValue: Locator;
    readonly currencyDropdownField: Locator;
    readonly currencyDropdownSearchField: Locator;
    readonly currencySelectValue: Locator;
    readonly issuanceSourceDropdownField: Locator;
    readonly issuanceSourceDropdownSearchField: Locator;
    readonly issuanceSourceSelectValue: Locator;
    readonly startDate: Locator;
    readonly paymentFreqDropdownField: Locator;
    readonly paymentFreqDropdownSearchField: Locator;
    readonly paymentFreqSelectValue: Locator;
    readonly paymentMethodDropdownField: Locator;
    readonly paymentMethodDropdownSearchField: Locator;
    readonly paymentMethodSelectValue: Locator;
    readonly saveAndContinueBtn: Locator;
    readonly selectProgramPlanArrow: Locator;
    readonly silverMedicalCoveragePlan: Locator;
    readonly bronzeMedicalCoveragePlan: Locator;
    readonly goldMedicalCoveragePlan: Locator;
    readonly ebpDhaIndvidualPlan: Locator;
    readonly addSelectedProductBtn: Locator;
    readonly memberDetailsDependencyDropdown: Locator;
    readonly memberDetailsFirstName: Locator;
    readonly memberDetailsMiddleName: Locator;
    readonly memberDetailsFamilyName: Locator;
    readonly memberDetailsDoB: Locator;
    readonly memberDetailsGenderDropdown: Locator;
    readonly memberDetailsMaritalStatusDropdown: Locator;
    readonly memberDetailsCountryOfOriginDropdown: Locator;
    readonly memberDetailsIdTypeDropdown: Locator;
    readonly memberDetailsIdNumberField: Locator;
    readonly memberDetailsIdExpiryDateField: Locator;
    readonly memberDetailsProfessionDropdown: Locator;
    readonly memberDetailsNationalIdNumberField: Locator;
    readonly memberDetailsUidNumberField: Locator;
    readonly memberDetailsPassportNumberField: Locator;
    readonly memberDetailsSalaryDropdown: Locator;
    readonly memberDetailsPreviousInsuranceStartDate: Locator;
    readonly memberDetailsExternalIdField: Locator;
    readonly memberDetailsResidenceVisaPlaceDropdown: Locator;
    readonly memberDetailsGdrfaFileNumber: Locator;
    readonly memberDetailsMemberTypeDropdown: Locator;
    readonly memberDetailsDhpoMemberIdField: Locator;
    readonly memberDetailsEmailAddressField: Locator;
    readonly memberDetailsMobileNBRField: Locator;
    readonly memberDetailsCountryDropdown: Locator;
    readonly memberDetailsRegionDropdown: Locator;
    readonly memberDetailsSubRegionDropdown: Locator;
    readonly memberDetailsApplyBtn: Locator;
    readonly memberDetailsMemberListCheckBox: Locator;
    readonly memberDetailsMemberListCheckBox2: Locator;
    readonly memberDetailsMemberListCheckBox3: Locator;
    readonly memberDetailsMemberListCheckBox4: Locator;
    readonly memberListProductCategoryDropdown: Locator;
    readonly memberListProductCategoryDropdown2: Locator;
    readonly memberListProductCategoryDropdown3: Locator;
    readonly memberListProductCategoryDropdown4: Locator;
    readonly memberListSaveBtn: Locator;
    readonly memberListContinueBtn: Locator;
    
    readonly phfdSponserType: Locator;
    readonly phfdEstablishmentCardNumber: Locator;
    readonly phfdPolicyHolderEmail: Locator;
    readonly phfdPolicyHolderMobileNumber: Locator;
    readonly phfdPolicyHolderPhoneNumber: Locator;
    readonly phfdRepresentativeName: Locator;
    readonly phfdSubRegionDropdown: Locator;
    readonly phfdSubRegionDropdownSearch: Locator;
    readonly phfdSubRegionDropdownSelectValue: Locator;
    readonly phfdPoBoxNumber: Locator;
    readonly phfdDetailedAddress: Locator;
    readonly phfdUploadPaymentProofBtn: Locator;
    readonly phfdContinueBtn: Locator;

    readonly submissionPageValidateBtn: Locator;
    readonly submissionPageSubmitBtnBroker: Locator;
    
    readonly validateConfirmationYesBtn: Locator;
    readonly endorsementDetailsTabText: Locator;
    readonly generatedPolicyNumber: Locator;

    readonly managedPolicyLink: Locator;
    readonly contractNumberField: Locator;
    readonly searchBtn: Locator;
    readonly managedPolicyEditBtn: Locator;
    readonly newEndorsementBtn: Locator;
    readonly actionTypeDropdownField: Locator;
    readonly newEndorsementEffectiveDateField: Locator;
    readonly newEndorsementOkBtn: Locator;
    readonly addDependentIdNumberField: Locator;
    readonly membersMoveBtn: Locator;
    readonly childMemberMoveBtn: Locator;
    readonly childMemberEditBtn: Locator;
    readonly childMemberDeleteBtn: Locator;
    readonly addDependentPlusBtn: Locator;
    //readonly addDependentPlusBtn2: Locator;

    readonly addDependentMemberListCheckBox: Locator;
    readonly submitBtn: Locator;
    readonly okBtn: Locator;
    readonly addDependentMemberDetailsDoB: Locator;
    readonly cancellationReasonDropdown: Locator;
    readonly deletionReasonDropdown: Locator;
    readonly contractCancellationConfirmationBtn: Locator;
    readonly contractCancellationOkBtn: Locator;

    readonly deletionValidateLink: Locator;
    readonly cancelFromInceptionCheckBox: Locator;

    //Group policy locators from below line
    readonly groupPolicyLink: Locator;
    readonly numberOfBeneficiaries: Locator;
    readonly grpUploadMemberBtn: Locator;
    readonly grpOnExistingContractLink: Locator;



    constructor(page: Page) {
        this.page = page;
        this.userNameInputField = page.locator("//input[@id='sUserName']");
        this.passwordInputField = page.locator("//input[@id='sPassword']");
        this.loginButton = page.locator("//button[@id='button_login']");
        this.newPolicyIcon = page.locator("//a[@title='New Policy']");
        this.individualPolicyLink = page.locator("//span[text()='Individual ']");
        //this.payerDropdownField = page.locator("//span[contains(@id,'payer-mi-container')]");
        this.payerDropdownField = page.locator("(//span[text()='Select Payer'])[1]");
        this.payerDropdownSearchField = page.locator("//input[@type='search']");
        this.payerSelectValue = page.locator("//li[@role='treeitem']");
        this.distributorDropdownField = page.locator("//span[@title='Select Distributor']");
        this.distributorDropdownSearchField = page.locator("//input[@type='search']");
        this.distributorSelectValue = page.locator("//li[@role='treeitem']");
        this.policyHolderName = page.locator("//input[@name='groupname']");
        this.effectiveDate = page.locator("//input[@id='effectivedate']");
        this.effectiveDateCalendarIcon = page.locator("//i[@class='fa fa-calendar cal_for_inputs i_color effectivedatepicker']");
        this.effectiveDateTodaysDate = page.locator("//td[@class=' ui-datepicker-days-cell-over  ui-datepicker-today']");
        this.expiryDate = page.locator("//input[@id='expirydate']");
        this.countryDropdownField = page.locator("//span[@title='United Arab Emirates']");
        this.countryDropdownSearchField = page.locator("//input[@type='search']");
        this.countrySelectValue = page.locator("//li[@role='treeitem']");
        this.regionDropdownField = page.locator("(//span[@title='Select Region'])[2]");
        this.regionDropdownSearchField = page.locator("//input[@type='search']");
        this.regionSelectValue = page.locator("//li[@role='treeitem']");
        this.healthAuthDropdownField = page.locator("(//span[@title='Select Health Authority'])[2]");
        this.healthAuthDropdownSearchField = page.locator("//input[@type='search']");
        this.healthAuthSelectValue = page.locator("//li[@role='treeitem']");
        this.programDropdownField = page.locator("//span[@title='Select Program']");
        this.programDropdownSearchField = page.locator("//input[@type='search']");
        this.programSelectValue = page.locator("//li[@role='treeitem']");
        this.producerDropdownField = page.locator("//span[@title='Select Producer']");
        this.producerDropdownSearchField = page.locator("//input[@type='search']");
        this.producerSelectValue = page.locator("//li[@role='treeitem']");
        this.branchDropdownField = page.locator("(//span[@title='Dubai'])[2]");
        this.branchDropdownFieldBroker = page.locator("//span[@title='Select branch']");
        this.branchDropdownSearchField = page.locator("//input[@type='search']");
        this.branchSelectValue = page.locator("//li[@role='treeitem']");
        this.currencyDropdownField = page.locator("//span[@title='select currency']");
        this.currencyDropdownSearchField = page.locator("//input[@type='search']");
        this.currencySelectValue = page.locator("//li[@role='treeitem']");
        this.issuanceSourceDropdownField = page.locator("//span[@title='Select Issuance Source']");
        this.issuanceSourceDropdownSearchField = page.locator("//input[@type='search']");
        this.issuanceSourceSelectValue = page.locator("//li[@role='treeitem']");
        //this.startDate = page.locator("");
        this.paymentFreqDropdownField = page.locator("(//span[@title='Select Payment Frequency'])[2]");
        this.paymentFreqDropdownSearchField = page.locator("//input[@type='search']");
        this.paymentFreqSelectValue = page.locator("(//li[@role='treeitem'])[1]");
        this.paymentMethodDropdownField = page.locator("//span[@id='select2-payment_method-container']");
        this.paymentMethodDropdownSearchField = page.locator("//input[@type='search']");
        this.paymentMethodSelectValue = page.locator("//li[@role='treeitem']");
        this.saveAndContinueBtn = page.locator("//a[text()='Save & continue ']");
        this.selectProgramPlanArrow = page.locator("//a[@href='#collapse1']");
        this.silverMedicalCoveragePlan = page.locator("//div[@package-name='Silver Medical Coverage']");
        this.bronzeMedicalCoveragePlan = page.locator("//div[@package-name='Bronze Medical Coverage']");
        this.goldMedicalCoveragePlan = page.locator("//div[@package-name='Gold Medical Coverage']");
        this.ebpDhaIndvidualPlan = page.locator("//div[@package-name='EBP DHA - DHA INDVIDUAL']");
        this.addSelectedProductBtn = page.locator("//a[@class='btn btn_custom_pad add_selected_pr ']");
        this.memberDetailsDependencyDropdown = page.locator("//select[@id='change_dependency']");

        this.memberDetailsFirstName = page.locator("//input[@name='first_name']");
        this.memberDetailsMiddleName = page.locator("//input[@name='middle_name']");
        this.memberDetailsFamilyName = page.locator("//input[@name='family_name']");
        this.memberDetailsDoB = page.locator("//input[@name='date_of_birth']");
        this.memberDetailsGenderDropdown = page.locator("//select[@name='gender_m']");
        this.memberDetailsMaritalStatusDropdown = page.locator("//select[@name='marital_status']");
        this.memberDetailsCountryOfOriginDropdown = page.locator("//select[@name='nationality']");
        this.memberDetailsIdTypeDropdown = page.locator("//select[@name='idtype']");
        this.memberDetailsIdNumberField = page.locator("//input[@name='ssnbr']");
        this.memberDetailsIdExpiryDateField = page.locator("//input[@name='IDEXPIRYDATE']");
        this.memberDetailsProfessionDropdown = page.locator("//select[@name='PROFESSIONID']");
        this.memberDetailsNationalIdNumberField = page.locator("//input[@name='national_id']");
        this.memberDetailsUidNumberField = page.locator("//input[@name='uid']");
        this.memberDetailsPassportNumberField = page.locator("//input[@name='passport_number']");
        this.memberDetailsSalaryDropdown = page.locator("//select[@name='salary']");
        this.memberDetailsPreviousInsuranceStartDate = page.locator("//input[@name='insurance_start_date']");
        this.memberDetailsExternalIdField = page.locator("//input[@name='staff_id']");
        this.memberDetailsResidenceVisaPlaceDropdown = page.locator("//select[@name='RESIDENCEVISAPLACE']");
        this.memberDetailsGdrfaFileNumber = page.locator("//input[@name='GDRFA_file_number']");
        this.memberDetailsMemberTypeDropdown = page.locator("//select[@name='member_type']");
        this.memberDetailsDhpoMemberIdField = page.locator("//input[@name='DHPO_member_id']");
        this.memberDetailsEmailAddressField = page.locator("//input[@name='email']");
        this.memberDetailsMobileNBRField = page.locator("//input[@name='mobile_number']");
        this.memberDetailsCountryDropdown = page.locator("//select[@name='country_select']");
        this.memberDetailsRegionDropdown = page.locator("//select[@name='region_select']");
        this.memberDetailsSubRegionDropdown = page.locator("//select[@name='subregion_select']");
        this.memberDetailsApplyBtn = page.locator("//button[text()=' Apply ']");
        this.memberDetailsMemberListCheckBox = page.locator("(//input[@type='checkbox'])[2]");
        this.memberDetailsMemberListCheckBox2 = page.locator("(//input[@type='checkbox'])[4]");
        this.memberDetailsMemberListCheckBox3 = page.locator("(//input[@type='checkbox'])[6]");
        this.memberDetailsMemberListCheckBox4 = page.locator("(//input[@type='checkbox'])[8]");
        this.memberListProductCategoryDropdown = page.locator("//select[@class='select_product_grid_member']");
        this.memberListProductCategoryDropdown2 = page.locator("(//select[@class='select_product_grid_member'])[2]");
        this.memberListProductCategoryDropdown3 = page.locator("(//select[@class='select_product_grid_member'])[3]");
        this.memberListProductCategoryDropdown4 = page.locator("(//select[@class='select_product_grid_member'])[4]");
        this.memberListSaveBtn = page.locator("//a[@class='btn btn_custom_pad members_details_btn_save']");
        this.memberListContinueBtn = page.locator("//a[text()='Continue ']");

        this.phfdSponserType = page.locator("//select[@name='ENTITYTYPE']");
        this.phfdEstablishmentCardNumber = page.locator("(//input[@name='MAINSPONSORNUMBER'])[1]");
        this.phfdPolicyHolderEmail = page.locator("(//input[@type='email'])[1]");
        this.phfdPolicyHolderMobileNumber = page.locator("(//input[@name='HMOBILE'])[1]");
        this.phfdPolicyHolderPhoneNumber = page.locator("//input[@name='BPHONE']");
        this.phfdRepresentativeName = page.locator("//input[@name='CONTACTNAME']");
        this.phfdSubRegionDropdown = page.locator("//span[@title='Select SubRegion']");
        this.phfdSubRegionDropdownSearch = page.locator("//input[@type='search']");
        this.phfdSubRegionDropdownSelectValue = page.locator("//li[@role='treeitem']");
        this.phfdPoBoxNumber = page.locator("//input[@name='ZIPCODE']");
        this.phfdDetailedAddress = page.locator("//textarea[@name='MAILADDRESS']");
        this.phfdUploadPaymentProofBtn = page.locator("//i[@class='fa fa-upload upload_icon']");
        this.phfdContinueBtn = page.locator("//a[text()='Continue ']");

        this.submissionPageValidateBtn = page.locator("(//a[@id='validate_btn'])[1]");
        this.submissionPageSubmitBtnBroker = page.locator("//a[text()='Submit']");
        
        this.validateConfirmationYesBtn = page.locator("//button[@class='confirm']");
        this.endorsementDetailsTabText = page.locator("(//div[normalize-space()='Endorsement & Members Details'])[2]");
        this.generatedPolicyNumber = page.locator("//div[@class='top-title ref_nbr']");

        this.managedPolicyLink = page.locator("//a[@title='Manage Policies']");
        this.contractNumberField = page.locator("//input[@name='contractnumber']");
        this.searchBtn = page.locator("//a[@class='btn btn-search']");
    
        this.managedPolicyEditBtn = page.locator("//div[@class='tooltip  result_search_edit']");
        this.newEndorsementBtn = page.locator("//a[@class='btn btn_custom_pad_unfill']");
        this.actionTypeDropdownField = page.locator("//select[@name='actionType']");
        this.newEndorsementEffectiveDateField = page.locator("//input[@name='effDate']");
        this.newEndorsementOkBtn = page.locator("//button[@class='btn btn_custom_pad new_endor_ok']");
        this.addDependentIdNumberField = page.locator("//input[@name='idnumber']");
        this.membersMoveBtn = page.locator("//div[@action_name='move_action']");
        this.childMemberMoveBtn = page.locator("(//div[@class='tooltip display_inline_block move_icon'])[2]");
        this.childMemberEditBtn = page.locator("(//span[@class='edit_icon_span'])[5]");
        this.childMemberDeleteBtn = page.locator("(//div[@class='tooltip display_inline_block del_icon'])[2]");
        this.addDependentPlusBtn = page.locator("//div[@class='tooltip_add display_inline_block add_dependent']");
        //this.addDependentPlusBtn2 = page.locator("(//div[@class='tooltip_add display_inline_block add_dependent'])[2]");

        this.addDependentMemberListCheckBox = page.locator("(//input[@type='checkbox'])[6]");
        this.submitBtn = page.locator("//a[text()=' Submit ']");
        this.okBtn = page.locator("//button[@class='confirm']");
        this.addDependentMemberDetailsDoB = page.locator("(//input[@name='date_of_birth'])[2]");
        this.cancellationReasonDropdown = page.locator("//select[@name='cancellationReason']");
        this.deletionReasonDropdown = page.locator("//select[@name='deletionReason']");
        this.contractCancellationConfirmationBtn = page.locator("//button[@class='confirm']");
        this.contractCancellationOkBtn = page.locator("//button[text()='Ok']");
        this.deletionValidateLink = page.locator("//a[text()='Validate']");
        this.cancelFromInceptionCheckBox = page.locator("(//span[@class='checkmark'])[1]");

        //Group policy locators from below line ***
        this.groupPolicyLink = page.locator("//span[text()='Group ']");
        this.numberOfBeneficiaries = page.locator("//input[@name='NBROFBENEF']");
        this.grpUploadMemberBtn = page.locator("//a[@class='btn btn_custom_pad upload_template_member_list ']");
        this.grpOnExistingContractLink = page.locator("//a[text()='On existing contract']");
        


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
        await this.page.waitForTimeout(7000);
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


    async fillPolicyHolderBasicDetailsTPA(payerDropdownSearchField: string, distributorDropdownSearchField: string, policyHolderName: string, effectiveDate: string, countryDropdownSearchField: string, regionDropdownSearchField: string, healthAuthDropdownSearchField: string, programDropdownSearchField: string, producerDropdownSearchField: string, branchDropdownSearchField: string, currencyDropdownSearchField: string, issuanceSourceDropdownSearchField: string, paymentFreqDropdownSearchField: string, paymentMethodDropdownSearchField: string) {
        
        await this.payerDropdownField.click();
        await this.payerDropdownSearchField.click();
        await this.payerDropdownSearchField.fill(payerDropdownSearchField);
        await this.payerSelectValue.click();
        await this.distributorDropdownField.click();
        await this.distributorDropdownSearchField.click();
        await this.distributorDropdownSearchField.fill(distributorDropdownSearchField);
        await this.distributorSelectValue.click();
        await this.policyHolderName.fill(policyHolderName);
        await this.effectiveDate.fill(effectiveDate);
        await this.page.keyboard.press('Tab');
        await this.countryDropdownField.click();
        await this.countryDropdownSearchField.click();
        await this.countryDropdownSearchField.fill(countryDropdownSearchField);
        await this.countrySelectValue.click();
        
        await this.regionDropdownField.click();
        await this.regionDropdownSearchField.click();
        await this.regionDropdownSearchField.fill(regionDropdownSearchField);
        await this.regionSelectValue.click();
        await this.healthAuthDropdownField.click();
        await this.healthAuthDropdownSearchField.click();
        await this.healthAuthDropdownSearchField.fill(healthAuthDropdownSearchField);
        await this.healthAuthSelectValue.click();
        await this.programDropdownField.click();
        await this.programDropdownSearchField.click();
        await this.programDropdownSearchField.fill(programDropdownSearchField);
        await this.programSelectValue.click();
        await this.producerDropdownField.click();
        await this.producerDropdownSearchField.click();
        await this.producerDropdownSearchField.fill(producerDropdownSearchField);
        await this.producerSelectValue.click();
        await this.branchDropdownField.click();
        await this.branchDropdownSearchField.click();
        await this.branchDropdownSearchField.fill(branchDropdownSearchField);
        await this.branchSelectValue.click();
        await this.currencyDropdownField.click();
        await this.currencyDropdownSearchField.click();
        await this.currencyDropdownSearchField.fill(currencyDropdownSearchField);
        await this.currencySelectValue.click();
        await this.issuanceSourceDropdownField.click();
        await this.issuanceSourceDropdownSearchField.click();
        await this.issuanceSourceDropdownSearchField.fill(issuanceSourceDropdownSearchField);
        await this.issuanceSourceSelectValue.click();
        await this.paymentFreqDropdownField.click();
        await this.paymentFreqDropdownSearchField.click();
        await this.paymentFreqDropdownSearchField.fill(paymentFreqDropdownSearchField);
        await this.paymentFreqSelectValue.click();
        await this.paymentMethodDropdownField.click();
        await this.paymentMethodDropdownSearchField.click();
        await this.paymentMethodDropdownSearchField.fill(paymentMethodDropdownSearchField);
        await this.paymentMethodSelectValue.click();
        
        await this.saveAndContinueBtn.click();
        await this.page.waitForLoadState('networkidle');
        //await this.page.waitForTimeout(100000);


    }


    async fillPolicyHolderBasicDetailsBroker(payerDropdownSearchField: string, distributorDropdownSearchField: string, policyHolderName: string, effectiveDate: string, countryDropdownSearchField: string, regionDropdownSearchField: string, healthAuthDropdownSearchField: string, programDropdownSearchField: string, producerDropdownSearchField: string, branchDropdownSearchField: string, currencyDropdownSearchField: string, issuanceSourceDropdownSearchField: string, paymentFreqDropdownSearchField: string, paymentMethodDropdownSearchField: string) {
        
        /*
        await this.payerDropdownField.click();
        await this.payerDropdownSearchField.click();
        await this.payerDropdownSearchField.fill(payerDropdownSearchField);
        await this.payerSelectValue.click();
        await this.distributorDropdownField.click();
        await this.distributorDropdownSearchField.click();
        await this.distributorDropdownSearchField.fill(distributorDropdownSearchField);
        await this.distributorSelectValue.click(); */
        await this.policyHolderName.fill(policyHolderName);
        await this.page.waitForTimeout(5000);
        //await this.effectiveDate.fill(effectiveDate);
        await this.effectiveDateCalendarIcon.click();
        await this.page.waitForTimeout(5000);
        await this.effectiveDateTodaysDate.click();
        await this.page.keyboard.press('Tab');
        await this.countryDropdownField.click();
        await this.countryDropdownSearchField.click();
        await this.countryDropdownSearchField.fill(countryDropdownSearchField);
        await this.countrySelectValue.click();
        
        await this.regionDropdownField.click();
        await this.regionDropdownSearchField.click();
        await this.regionDropdownSearchField.fill(regionDropdownSearchField);
        await this.regionSelectValue.click();
        await this.healthAuthDropdownField.click();
        await this.healthAuthDropdownSearchField.click();
        await this.healthAuthDropdownSearchField.fill(healthAuthDropdownSearchField);
        await this.healthAuthSelectValue.click();
        await this.programDropdownField.click();
        await this.programDropdownSearchField.click();
        await this.programDropdownSearchField.fill(programDropdownSearchField);
        await this.programSelectValue.click();
        /*
        await this.producerDropdownField.click();
        await this.producerDropdownSearchField.click();
        await this.producerDropdownSearchField.fill(producerDropdownSearchField);
        await this.producerSelectValue.click(); */
        await this.branchDropdownFieldBroker.click();
        await this.branchDropdownSearchField.click();
        await this.branchDropdownSearchField.fill(branchDropdownSearchField);
        await this.branchSelectValue.click();
        await this.currencyDropdownField.click();
        await this.currencyDropdownSearchField.click();
        await this.currencyDropdownSearchField.fill(currencyDropdownSearchField);
        await this.currencySelectValue.click();
        /*
        await this.issuanceSourceDropdownField.click();
        await this.issuanceSourceDropdownSearchField.click();
        await this.issuanceSourceDropdownSearchField.fill(issuanceSourceDropdownSearchField);
        await this.issuanceSourceSelectValue.click();
        await this.paymentFreqDropdownField.click();
        await this.paymentFreqDropdownSearchField.click();
        await this.paymentFreqDropdownSearchField.fill(paymentFreqDropdownSearchField);
        await this.paymentFreqSelectValue.click();
        await this.paymentMethodDropdownField.click();
        await this.paymentMethodDropdownSearchField.click();
        await this.paymentMethodDropdownSearchField.fill(paymentMethodDropdownSearchField);
        await this.paymentMethodSelectValue.click();
        */
        await this.saveAndContinueBtn.click();
        await this.page.waitForLoadState('networkidle');
        //await this.page.waitForTimeout(100000);


    }


    async silverProductSelection() {
        
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(3000);
        await this.selectProgramPlanArrow.click();
        await this.silverMedicalCoveragePlan.click();
        await this.page.waitForTimeout(3000);
        await this.addSelectedProductBtn.click();
        ///await this.page.waitForTimeout(10000);
        await this.saveAndContinueBtn.click();
        //await this.page.waitForLoadState('networkidle');
        ///await this.page.waitForTimeout(2000);
    }

    async silverProductSelectionBroker() {
        
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(3000);
        //await this.selectProgramPlanArrow.click();
        await this.silverMedicalCoveragePlan.click();
        await this.page.waitForTimeout(3000);
        await this.addSelectedProductBtn.click();
        ///await this.page.waitForTimeout(10000);
        await this.saveAndContinueBtn.click();
        //await this.page.waitForLoadState('networkidle');
        ///await this.page.waitForTimeout(2000);
    }


    async fillMemberDetails(memberDetailsFirstName: string, memberDetailsMiddleName: string, memberDetailsFamilyName: string, memberDetailsDoB: string, memberDetailsIdNumberField: string, memberDetailsIdExpiryDateField: string, memberDetailsNationalIdNumberField: string, memberDetailsUidNumberField: string, memberDetailsPassportNumberField: string, memberDetailsPreviousInsuranceStartDate: string, memberDetailsExternalIdField: string, memberDetailsGdrfaFileNumber: string, memberDetailsDhpoMemberIdField: string, memberDetailsEmailAddressField: string, memberDetailsMobileNBRField: string) {
        
        await this.page.waitForLoadState('networkidle');
        await this.memberDetailsDependencyDropdown.selectOption('Principal');
        await this.memberDetailsFirstName.fill(memberDetailsFirstName);
        await this.memberDetailsMiddleName.fill(memberDetailsMiddleName);
        await this.memberDetailsFamilyName.fill(memberDetailsFamilyName);
        await this.memberDetailsDoB.fill(memberDetailsDoB);
        await this.page.keyboard.press('Tab');
        await this.memberDetailsGenderDropdown.selectOption('Male');
        await this.memberDetailsMaritalStatusDropdown.selectOption('Married');
        await this.memberDetailsCountryOfOriginDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsIdTypeDropdown.selectOption('Identity Card');
        await this.memberDetailsIdNumberField.fill(memberDetailsIdNumberField);
        await this.memberDetailsIdExpiryDateField.fill(memberDetailsIdExpiryDateField);
        await this.memberDetailsProfessionDropdown.selectOption('Accountant');
        await this.memberDetailsNationalIdNumberField.fill(memberDetailsNationalIdNumberField);
        await this.memberDetailsUidNumberField.fill(memberDetailsUidNumberField);
        await this.memberDetailsPassportNumberField.fill(memberDetailsPassportNumberField);
        await this.memberDetailsSalaryDropdown.selectOption('greater than 12,000 AED per month');
        await this.memberDetailsPreviousInsuranceStartDate.fill(memberDetailsPreviousInsuranceStartDate);
        await this.memberDetailsExternalIdField.fill(memberDetailsExternalIdField);
        await this.memberDetailsResidenceVisaPlaceDropdown.selectOption('Dubai');
        await this.memberDetailsGdrfaFileNumber.fill(memberDetailsGdrfaFileNumber);
        await this.memberDetailsMemberTypeDropdown.selectOption('Expat Residency in Dubai');
        //await this.memberDetailsDhpoMemberIdField.fill(memberDetailsDhpoMemberIdField);
        await this.memberDetailsEmailAddressField.fill(memberDetailsEmailAddressField);
        await this.memberDetailsMobileNBRField.fill(memberDetailsMobileNBRField);
        await this.memberDetailsCountryDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsRegionDropdown.selectOption('Dubai');
        await this.memberDetailsSubRegionDropdown.selectOption('AL BARSHA FIRST');
        await this.memberDetailsApplyBtn.click();
        await this.memberDetailsMemberListCheckBox.click();
        await this.memberListProductCategoryDropdown.selectOption('Silver Medical Coverage');
        await this.memberListSaveBtn.click();
        ///await this.memberListContinueBtn.click();
        //await this.page.waitForTimeout(1500000);
       
    }


    async fillMemberDetailsBroker(memberDetailsFirstName: string, memberDetailsMiddleName: string, memberDetailsFamilyName: string, memberDetailsDoB: string, memberDetailsIdNumberField: string, memberDetailsIdExpiryDateField: string, memberDetailsNationalIdNumberField: string, memberDetailsUidNumberField: string, memberDetailsPassportNumberField: string, memberDetailsPreviousInsuranceStartDate: string, memberDetailsExternalIdField: string, memberDetailsGdrfaFileNumber: string, memberDetailsDhpoMemberIdField: string, memberDetailsEmailAddressField: string, memberDetailsMobileNBRField: string) {
        
        await this.page.waitForLoadState('networkidle');
        await this.memberDetailsDependencyDropdown.selectOption('Principal');
        await this.memberDetailsFirstName.fill(memberDetailsFirstName);
        await this.memberDetailsMiddleName.fill(memberDetailsMiddleName);
        await this.memberDetailsFamilyName.fill(memberDetailsFamilyName);
        await this.memberDetailsDoB.fill(memberDetailsDoB);
        await this.page.keyboard.press('Tab');
        await this.memberDetailsGenderDropdown.selectOption('Male');
        await this.memberDetailsMaritalStatusDropdown.selectOption('Married');
        await this.memberDetailsCountryOfOriginDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsIdTypeDropdown.selectOption('Identity Card');
        await this.memberDetailsIdNumberField.fill(memberDetailsIdNumberField);
        //await this.memberDetailsIdExpiryDateField.fill(memberDetailsIdExpiryDateField);
        //await this.memberDetailsProfessionDropdown.selectOption('Accountant');
        await this.memberDetailsNationalIdNumberField.fill(memberDetailsNationalIdNumberField);
        await this.memberDetailsUidNumberField.fill(memberDetailsUidNumberField);
        await this.memberDetailsPassportNumberField.fill(memberDetailsPassportNumberField);
        await this.memberDetailsSalaryDropdown.selectOption('greater than 12,000 AED per month');
        await this.memberDetailsPreviousInsuranceStartDate.fill(memberDetailsPreviousInsuranceStartDate);
        await this.memberDetailsExternalIdField.fill(memberDetailsExternalIdField);
        await this.memberDetailsResidenceVisaPlaceDropdown.selectOption('Dubai');
        await this.memberDetailsGdrfaFileNumber.fill(memberDetailsGdrfaFileNumber);
        await this.memberDetailsMemberTypeDropdown.selectOption('Expat Residency in Dubai');
        //await this.memberDetailsDhpoMemberIdField.fill(memberDetailsDhpoMemberIdField);
        await this.memberDetailsEmailAddressField.fill(memberDetailsEmailAddressField);
        await this.memberDetailsMobileNBRField.fill(memberDetailsMobileNBRField);
        await this.memberDetailsCountryDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsRegionDropdown.selectOption('Dubai');
        await this.memberDetailsSubRegionDropdown.selectOption('AL BARSHA FIRST');
        await this.memberDetailsApplyBtn.click();
        await this.memberDetailsMemberListCheckBox.click();
        await this.memberListProductCategoryDropdown.selectOption('Silver Medical Coverage');
        await this.memberListSaveBtn.click();
        ///await this.memberListContinueBtn.click();
        //await this.page.waitForTimeout(1500000);
       
    }



    async fillPolicyHolderFullDetails(phfdEstablishmentCardNumber: string, phfdPolicyHolderEmail: string, phfdPolicyHolderMobileNumber: string, phfdRepresentativeName: string, phfdSubRegionDropdownSearch: string, phfdPoBoxNumber: string, phfdDetailedAddress: string) {
        
        //await this.page.waitForLoadState('networkidle');
        await this.memberListContinueBtn.click();
        await this.phfdEstablishmentCardNumber.fill(phfdEstablishmentCardNumber);
        await this.phfdPolicyHolderEmail.fill(phfdPolicyHolderEmail);
        await this.phfdPolicyHolderMobileNumber.fill(phfdPolicyHolderMobileNumber);
        await this.phfdRepresentativeName.fill(phfdRepresentativeName);
        await this.phfdSubRegionDropdown.click();
        await this.phfdSubRegionDropdownSearch.click();
        await this.phfdSubRegionDropdownSearch.fill(phfdSubRegionDropdownSearch);
        await this.phfdSubRegionDropdownSelectValue.click();
        await this.phfdPoBoxNumber.fill(phfdPoBoxNumber);
        await this.phfdDetailedAddress.fill(phfdDetailedAddress);
        await this.saveAndContinueBtn.click();
        //await this.page.waitForTimeout(1000000);
    
    }

    async fillPolicyHolderFullDetailsBroker(phfdEstablishmentCardNumber: string, phfdPolicyHolderEmail: string, phfdPolicyHolderMobileNumber: string, phfdPolicyHolderPhoneNumber: string, phfdRepresentativeName: string, phfdSubRegionDropdownSearch: string, phfdPoBoxNumber: string, phfdDetailedAddress: string) {
        
        //await this.page.waitForLoadState('networkidle');
        await this.memberListContinueBtn.click();
        //this.page.pause();
        await this.phfdSponserType.selectOption('Establishment');
        await this.phfdEstablishmentCardNumber.fill(phfdEstablishmentCardNumber);
        await this.phfdPolicyHolderEmail.fill(phfdPolicyHolderEmail);
        await this.phfdPolicyHolderMobileNumber.fill(phfdPolicyHolderMobileNumber);
        await this.phfdPolicyHolderPhoneNumber.fill(phfdPolicyHolderPhoneNumber);
        await this.phfdRepresentativeName.fill(phfdRepresentativeName);
        await this.phfdSubRegionDropdown.click();
        await this.phfdSubRegionDropdownSearch.click();
        await this.phfdSubRegionDropdownSearch.fill(phfdSubRegionDropdownSearch);
        await this.phfdSubRegionDropdownSelectValue.click();
        await this.phfdPoBoxNumber.fill(phfdPoBoxNumber);
        await this.phfdDetailedAddress.fill(phfdDetailedAddress);
        await this.saveAndContinueBtn.click();
        //await this.page.waitForTimeout(1000000);
    
    }

    async submissionPageValidatePolicy() {
        
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(5000);
        await this.submissionPageValidateBtn.click();
        await this.page.waitForTimeout(5000);
        await this.validateConfirmationYesBtn.click();
        await this.page.waitForTimeout(5000);
        
    }

    async submissionPageSubmitPolicyBroker() {
        
        await this.page.waitForLoadState('networkidle');
        //await this.page.waitForTimeout(5000);
        const fileWithPath = 'C:/Users/pankaj.e.patil/OneDrive - Accenture/Documents/2024/AzP/Playwright Automation/Syncro B2B Automation/UploadMembers/TESTING.pdf';
        const [fileChooser] = await Promise.all([
        this.page.waitForEvent('filechooser'),
        await this.phfdUploadPaymentProofBtn.click(),
        ]);
        await fileChooser.setFiles([fileWithPath]);
        await this.page.waitForTimeout(10000);
        await this.submissionPageSubmitBtnBroker.click();
        
        //await this.page.waitForTimeout(20000);
        //await this.submissionPageValidateBtn.click();
        
        //await this.validateConfirmationYesBtn.click();
        //await this.page.waitForTimeout(5000);
        
    }


    async verifyEndorsementDetailsTabText(expectedtext: string)
    {
        await this.page.waitForLoadState('networkidle');
        const actualtext = await this.endorsementDetailsTabText.textContent();
        const actualtextTrim = actualtext?.trim();
        expect(actualtextTrim).toContain(expectedtext);   
    }


    async getPolicyNumberText(): Promise<string>
    {
        await this.page.waitForLoadState('networkidle');
        const actualGeneratedPolicyNumber = await this.generatedPolicyNumber.textContent();
        const actualGeneratedPolicyNumberTrim = actualGeneratedPolicyNumber?.trim();
        return actualGeneratedPolicyNumberTrim ?? '';

    }


    //async managedPolicySearch(payerDropdownSearchField: string, newEndorsementEffectiveDateField: string, addDependentIdNumberField: string)
    //async managedPolicySearch(payerDropdownSearchField: string, actualGeneratedPolicyNumberTrim: string)
    async managedPolicySearch(payerDropdownSearchField: string, policyNumberValue: string): Promise<void>
    {
        await this.page.waitForLoadState('networkidle');
        //const actualGeneratedPolicyNumber = await this.generatedPolicyNumber.textContent();
        //const actualGeneratedPolicyNumberTrim = actualGeneratedPolicyNumber?.trim();
        await this.managedPolicyLink.click();
        await this.payerDropdownField.click();
        await this.payerDropdownSearchField.click();
        await this.payerDropdownSearchField.fill(payerDropdownSearchField);
        ///await this.page.waitForTimeout(1000);
        await this.payerSelectValue.click();
        await this.contractNumberField.fill(policyNumberValue);
        await this.page.waitForTimeout(3000);
        await this.searchBtn.click();
    }

    async additionEndorsement(newEndorsementEffectiveDateField: string, addDependentIdNumberField: string){
        await this.managedPolicyEditBtn.click();
        await this.newEndorsementBtn.click();
        await this.actionTypeDropdownField.selectOption('Addition');
        await this.newEndorsementEffectiveDateField.fill(newEndorsementEffectiveDateField);
        await this.newEndorsementOkBtn.click();
        await this.addDependentIdNumberField.fill(addDependentIdNumberField);
        await this.searchBtn.click();
        //await this.page.waitForTimeout(2000);
        await this.membersMoveBtn.click();
        await this.addDependentPlusBtn.click();
        ///await this.page.waitForTimeout(180000);

    }


    async addDependentMemberDetails(memberDetailsFirstName: string, memberDetailsMiddleName: string, memberDetailsFamilyName: string, addDependentMemberDetailsDoB: string, memberDetailsIdNumberField: string, memberDetailsIdExpiryDateField: string, memberDetailsNationalIdNumberField: string, memberDetailsUidNumberField: string, memberDetailsPassportNumberField: string, memberDetailsPreviousInsuranceStartDate: string, memberDetailsExternalIdField: string, memberDetailsGdrfaFileNumber: string, memberDetailsDhpoMemberIdField: string, memberDetailsEmailAddressField: string, memberDetailsMobileNBRField: string) {
        
        await this.page.waitForLoadState('networkidle');
        await this.memberDetailsDependencyDropdown.selectOption('Spouse');
        await this.memberDetailsFirstName.fill(memberDetailsFirstName);
        await this.memberDetailsMiddleName.fill(memberDetailsMiddleName);
        await this.memberDetailsFamilyName.fill(memberDetailsFamilyName);
        await this.addDependentMemberDetailsDoB.fill(addDependentMemberDetailsDoB);
        await this.page.keyboard.press('Tab');
        await this.memberDetailsGenderDropdown.selectOption('Female');
        await this.memberDetailsMaritalStatusDropdown.selectOption('Married');
        await this.memberDetailsCountryOfOriginDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsIdTypeDropdown.selectOption('Identity Card');
        await this.memberDetailsIdNumberField.fill(memberDetailsIdNumberField);
        await this.memberDetailsIdExpiryDateField.fill(memberDetailsIdExpiryDateField);
        await this.memberDetailsProfessionDropdown.selectOption('Accountant');
        await this.memberDetailsNationalIdNumberField.fill(memberDetailsNationalIdNumberField);
        await this.memberDetailsUidNumberField.fill(memberDetailsUidNumberField);
        await this.memberDetailsPassportNumberField.fill(memberDetailsPassportNumberField);
        await this.memberDetailsSalaryDropdown.selectOption('greater than 12,000 AED per month');
        await this.memberDetailsPreviousInsuranceStartDate.fill(memberDetailsPreviousInsuranceStartDate);
        await this.memberDetailsExternalIdField.fill(memberDetailsExternalIdField);
        await this.memberDetailsResidenceVisaPlaceDropdown.selectOption('Dubai');
        await this.memberDetailsGdrfaFileNumber.fill(memberDetailsGdrfaFileNumber);
        await this.memberDetailsMemberTypeDropdown.selectOption('Expat Residency in Dubai');
        //await this.memberDetailsDhpoMemberIdField.fill(memberDetailsDhpoMemberIdField);
        await this.memberDetailsEmailAddressField.fill(memberDetailsEmailAddressField);
        await this.memberDetailsMobileNBRField.fill(memberDetailsMobileNBRField);
        await this.memberDetailsCountryDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsRegionDropdown.selectOption('Dubai');
        await this.memberDetailsSubRegionDropdown.selectOption('AL BARSHA FIRST');
        await this.memberDetailsApplyBtn.click();
        await this.page.waitForTimeout(10000);
        //await this.addDependentMemberListCheckBox.click();
        //await this.memberListProductCategoryDropdown.selectOption('Silver Medical Coverage');
        await this.submitBtn.click();
        await this.page.waitForTimeout(10000);
        await this.okBtn.click();
        await this.page.waitForTimeout(3000);
        await this.deletionValidateLink.click();
        await this.page.waitForTimeout(3000);
        await this.validateConfirmationYesBtn.click();
        await this.page.waitForTimeout(3000);
        await this.okBtn.click();
        
        //await this.memberListContinueBtn.click();
        //await this.page.waitForTimeout(150000);
       
    }


    async cancellationOfContract(newEndorsementEffectiveDateField: string){
        await this.managedPolicyEditBtn.click();
        await this.newEndorsementBtn.click();
        await this.actionTypeDropdownField.selectOption('Cancel Contract');
        await this.newEndorsementEffectiveDateField.fill(newEndorsementEffectiveDateField);
        await this.cancellationReasonDropdown.selectOption('Alternative Insurance');
        await this.newEndorsementOkBtn.click();
        await this.contractCancellationConfirmationBtn.click();
        //await this.contractCancellationOkBtn.click();
        
    }


    async silverAndBronzeProductsSelection() {
        //select silver plan
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(3000);
        await this.selectProgramPlanArrow.click();
        await this.silverMedicalCoveragePlan.click();
        await this.page.waitForTimeout(3000);
        await this.addSelectedProductBtn.click();
        //await this.saveAndContinueBtn.click();

        //select bronze plan
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(3000);
        await this.selectProgramPlanArrow.click();
        await this.bronzeMedicalCoveragePlan.click();
        await this.page.waitForTimeout(3000);
        await this.addSelectedProductBtn.click();
        await this.saveAndContinueBtn.click();
        //await this.page.waitForTimeout(30000);

    }

    async silverAndGoldProductsSelection() {
        //select silver plan
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(3000);
        await this.selectProgramPlanArrow.click();
        await this.silverMedicalCoveragePlan.click();
        await this.page.waitForTimeout(3000);
        await this.addSelectedProductBtn.click();
        //await this.saveAndContinueBtn.click();

        //select gold plan
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(3000);
        await this.selectProgramPlanArrow.click();
        await this.goldMedicalCoveragePlan.click();
        await this.page.waitForTimeout(3000);
        await this.addSelectedProductBtn.click();
        await this.saveAndContinueBtn.click();
        //await this.page.waitForTimeout(30000);

    }

   /* async clickOnPlusButtonToAddDependent() {
        //select silver plan
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(3000);
        await this.addDependentPlusBtn.click();
        //await this.page.waitForTimeout(1500000);

    }
*/
    async addFirstDependentMemberDetails(memberDetailsFirstName: string, memberDetailsMiddleName: string, memberDetailsFamilyName: string, memberDetailsDoB: string, memberDetailsIdNumberField: string, memberDetailsIdExpiryDateField: string, memberDetailsNationalIdNumberField: string, memberDetailsUidNumberField: string, memberDetailsPassportNumberField: string, memberDetailsPreviousInsuranceStartDate: string, memberDetailsExternalIdField: string, memberDetailsGdrfaFileNumber: string, memberDetailsDhpoMemberIdField: string, memberDetailsEmailAddressField: string, memberDetailsMobileNBRField: string) {
        
        await this.page.waitForLoadState('networkidle');
        await this.addDependentPlusBtn.click();
        await this.memberDetailsDependencyDropdown.selectOption('Spouse');
        await this.memberDetailsFirstName.fill(memberDetailsFirstName);
        await this.memberDetailsMiddleName.fill(memberDetailsMiddleName);
        await this.memberDetailsFamilyName.fill(memberDetailsFamilyName);
        await this.memberDetailsDoB.fill(memberDetailsDoB);
        await this.page.keyboard.press('Tab');
        await this.memberDetailsGenderDropdown.selectOption('Female');
        await this.memberDetailsMaritalStatusDropdown.selectOption('Married');
        await this.memberDetailsCountryOfOriginDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsIdTypeDropdown.selectOption('Identity Card');
        await this.memberDetailsIdNumberField.fill(memberDetailsIdNumberField);
        await this.memberDetailsIdExpiryDateField.fill(memberDetailsIdExpiryDateField);
        await this.memberDetailsProfessionDropdown.selectOption('Accountant');
        await this.memberDetailsNationalIdNumberField.fill(memberDetailsNationalIdNumberField);
        await this.memberDetailsUidNumberField.fill(memberDetailsUidNumberField);
        await this.memberDetailsPassportNumberField.fill(memberDetailsPassportNumberField);
        await this.memberDetailsSalaryDropdown.selectOption('greater than 12,000 AED per month');
        await this.memberDetailsPreviousInsuranceStartDate.fill(memberDetailsPreviousInsuranceStartDate);
        await this.memberDetailsExternalIdField.fill(memberDetailsExternalIdField);
        await this.memberDetailsResidenceVisaPlaceDropdown.selectOption('Dubai');
        await this.memberDetailsGdrfaFileNumber.fill(memberDetailsGdrfaFileNumber);
        await this.memberDetailsMemberTypeDropdown.selectOption('Expat Residency in Dubai');
        //await this.memberDetailsDhpoMemberIdField.fill(memberDetailsDhpoMemberIdField);
        await this.memberDetailsEmailAddressField.fill(memberDetailsEmailAddressField);
        await this.memberDetailsMobileNBRField.fill(memberDetailsMobileNBRField);
        await this.memberDetailsCountryDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsRegionDropdown.selectOption('Dubai');
        await this.memberDetailsSubRegionDropdown.selectOption('AL BARSHA FIRST');
        await this.memberDetailsApplyBtn.click();
        await this.memberDetailsMemberListCheckBox2.click();
        //await this.page.waitForTimeout(150000);
        await this.memberListProductCategoryDropdown2.selectOption('Bronze Medical Coverage');
        await this.memberListSaveBtn.click();
        ///await this.memberListContinueBtn.click();
        await this.page.waitForTimeout(3000);
       
    }


    async addSecondDependentMemberDetails(memberDetailsFirstName: string, memberDetailsMiddleName: string, memberDetailsFamilyName: string, memberDetailsDoB: string, memberDetailsIdNumberField: string, memberDetailsIdExpiryDateField: string, memberDetailsNationalIdNumberField: string, memberDetailsUidNumberField: string, memberDetailsPassportNumberField: string, memberDetailsPreviousInsuranceStartDate: string, memberDetailsExternalIdField: string, memberDetailsGdrfaFileNumber: string, memberDetailsDhpoMemberIdField: string, memberDetailsEmailAddressField: string, memberDetailsMobileNBRField: string) {
        
        await this.page.waitForLoadState('networkidle');
        await this.addDependentPlusBtn.click();
        await this.memberDetailsDependencyDropdown.selectOption('Child');
        await this.memberDetailsFirstName.fill(memberDetailsFirstName);
        await this.memberDetailsMiddleName.fill(memberDetailsMiddleName);
        await this.memberDetailsFamilyName.fill(memberDetailsFamilyName);
        await this.memberDetailsDoB.fill(memberDetailsDoB);
        await this.page.keyboard.press('Tab');
        await this.memberDetailsGenderDropdown.selectOption('Male');
        await this.memberDetailsMaritalStatusDropdown.selectOption('Married');
        await this.memberDetailsCountryOfOriginDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsIdTypeDropdown.selectOption('Identity Card');
        await this.memberDetailsIdNumberField.fill(memberDetailsIdNumberField);
        await this.memberDetailsIdExpiryDateField.fill(memberDetailsIdExpiryDateField);
        await this.memberDetailsProfessionDropdown.selectOption('Accountant');
        await this.memberDetailsNationalIdNumberField.fill(memberDetailsNationalIdNumberField);
        await this.memberDetailsUidNumberField.fill(memberDetailsUidNumberField);
        await this.memberDetailsPassportNumberField.fill(memberDetailsPassportNumberField);
        await this.memberDetailsSalaryDropdown.selectOption('greater than 12,000 AED per month');
        await this.memberDetailsPreviousInsuranceStartDate.fill(memberDetailsPreviousInsuranceStartDate);
        await this.memberDetailsExternalIdField.fill(memberDetailsExternalIdField);
        await this.memberDetailsResidenceVisaPlaceDropdown.selectOption('Dubai');
        await this.memberDetailsGdrfaFileNumber.fill(memberDetailsGdrfaFileNumber);
        await this.memberDetailsMemberTypeDropdown.selectOption('Expat Residency in Dubai');
        //await this.memberDetailsDhpoMemberIdField.fill(memberDetailsDhpoMemberIdField);
        await this.memberDetailsEmailAddressField.fill(memberDetailsEmailAddressField);
        await this.memberDetailsMobileNBRField.fill(memberDetailsMobileNBRField);
        await this.memberDetailsCountryDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsRegionDropdown.selectOption('Dubai');
        await this.memberDetailsSubRegionDropdown.selectOption('AL BARSHA FIRST');
        await this.memberDetailsApplyBtn.click();
        await this.memberDetailsMemberListCheckBox3.click();
        //await this.page.waitForTimeout(150000);
        await this.memberListProductCategoryDropdown3.selectOption('Silver Medical Coverage');
        await this.memberListSaveBtn.click();
        ///await this.memberListContinueBtn.click();
        //await this.page.waitForTimeout(30000);
       
    }


    async addThirdDependentMemberDetails(memberDetailsFirstName: string, memberDetailsMiddleName: string, memberDetailsFamilyName: string, memberDetailsDoB: string, memberDetailsIdNumberField: string, memberDetailsIdExpiryDateField: string, memberDetailsNationalIdNumberField: string, memberDetailsUidNumberField: string, memberDetailsPassportNumberField: string, memberDetailsPreviousInsuranceStartDate: string, memberDetailsExternalIdField: string, memberDetailsGdrfaFileNumber: string, memberDetailsDhpoMemberIdField: string, memberDetailsEmailAddressField: string, memberDetailsMobileNBRField: string) {
        
        await this.page.waitForLoadState('networkidle');
        await this.addDependentPlusBtn.click();
        await this.memberDetailsDependencyDropdown.selectOption('Parent');
        await this.memberDetailsFirstName.fill(memberDetailsFirstName);
        await this.memberDetailsMiddleName.fill(memberDetailsMiddleName);
        await this.memberDetailsFamilyName.fill(memberDetailsFamilyName);
        await this.memberDetailsDoB.fill(memberDetailsDoB);
        await this.page.keyboard.press('Tab');
        await this.memberDetailsGenderDropdown.selectOption('Male');
        await this.memberDetailsMaritalStatusDropdown.selectOption('Married');
        await this.memberDetailsCountryOfOriginDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsIdTypeDropdown.selectOption('Identity Card');
        await this.memberDetailsIdNumberField.fill(memberDetailsIdNumberField);
        await this.memberDetailsIdExpiryDateField.fill(memberDetailsIdExpiryDateField);
        await this.memberDetailsProfessionDropdown.selectOption('Accountant');
        await this.memberDetailsNationalIdNumberField.fill(memberDetailsNationalIdNumberField);
        await this.memberDetailsUidNumberField.fill(memberDetailsUidNumberField);
        await this.memberDetailsPassportNumberField.fill(memberDetailsPassportNumberField);
        await this.memberDetailsSalaryDropdown.selectOption('greater than 12,000 AED per month');
        await this.memberDetailsPreviousInsuranceStartDate.fill(memberDetailsPreviousInsuranceStartDate);
        await this.memberDetailsExternalIdField.fill(memberDetailsExternalIdField);
        await this.memberDetailsResidenceVisaPlaceDropdown.selectOption('Dubai');
        await this.memberDetailsGdrfaFileNumber.fill(memberDetailsGdrfaFileNumber);
        await this.memberDetailsMemberTypeDropdown.selectOption('Expat Residency in Dubai');
        //await this.memberDetailsDhpoMemberIdField.fill(memberDetailsDhpoMemberIdField);
        await this.memberDetailsEmailAddressField.fill(memberDetailsEmailAddressField);
        await this.memberDetailsMobileNBRField.fill(memberDetailsMobileNBRField);
        await this.memberDetailsCountryDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsRegionDropdown.selectOption('Dubai');
        await this.memberDetailsSubRegionDropdown.selectOption('AL BARSHA FIRST');
        await this.memberDetailsApplyBtn.click();
        await this.memberDetailsMemberListCheckBox4.click();
        //await this.page.waitForTimeout(150000);
        await this.memberListProductCategoryDropdown4.selectOption('Silver Medical Coverage');
        await this.memberListSaveBtn.click();
        ///await this.memberListContinueBtn.click();
        //await this.page.waitForTimeout(30000);
       
    }


    async deletionEndorsement(newEndorsementEffectiveDateField: string, addDependentIdNumberField: string){
        
        await this.managedPolicyEditBtn.click();
        await this.newEndorsementBtn.click();
        await this.actionTypeDropdownField.selectOption('Deletion');
        await this.newEndorsementEffectiveDateField.fill(newEndorsementEffectiveDateField);
        await this.deletionReasonDropdown.selectOption('Absence of eligibility');
        await this.newEndorsementOkBtn.click();
        //await this.page.waitForTimeout(150000);
        await this.page.waitForTimeout(3000);        
        await this.addDependentIdNumberField.fill(addDependentIdNumberField);
        await this.page.waitForTimeout(1000);
        await this.searchBtn.click();
        //await this.page.waitForTimeout(2000);
        await this.childMemberMoveBtn.click();
        await this.childMemberDeleteBtn.click();
        await this.page.waitForTimeout(2000);
        await this.submitBtn.click();
        await this.page.waitForTimeout(3000);
        await this.okBtn.click();
        await this.page.waitForTimeout(3000);
        /*
        await this.deletionValidateLink.click();
        await this.page.waitForTimeout(3000);
        await this.validateConfirmationYesBtn.click();
        await this.page.waitForTimeout(3000);
        await this.okBtn.click();*/
        
        //below 4 lines of code not being executed as after 815 api is not being called
        //Need to discuss with Tanuja
/*        await this.page.waitForTimeout(5000);
        await this.deletionValidateLink.click();
        await this.validateConfirmationYesBtn.click();
        await this.okBtn.click(); */
        ///await this.page.waitForTimeout(180000);

    }


    async EbpDhaIndvidualProductSelection() {
        
        await this.page.waitForLoadState('networkidle');
        //await this.page.waitForTimeout(3000);
        await this.selectProgramPlanArrow.click();
        await this.ebpDhaIndvidualPlan.click();
        await this.page.waitForTimeout(3000);
        await this.addSelectedProductBtn.click();
        await this.saveAndContinueBtn.click();
        ///await this.page.waitForTimeout(2000);
    }

    //fill member details method for Individual DHA
    async fillMemberDetailsIndividualDha(memberDetailsFirstName: string, memberDetailsMiddleName: string, memberDetailsFamilyName: string, memberDetailsDoB: string, memberDetailsIdNumberField: string, memberDetailsIdExpiryDateField: string, memberDetailsNationalIdNumberField: string, memberDetailsUidNumberField: string, memberDetailsPassportNumberField: string, memberDetailsPreviousInsuranceStartDate: string, memberDetailsExternalIdField: string, memberDetailsGdrfaFileNumber: string, memberDetailsDhpoMemberIdField: string, memberDetailsEmailAddressField: string, memberDetailsMobileNBRField: string) {
        
        await this.page.waitForLoadState('networkidle');
        await this.memberDetailsDependencyDropdown.selectOption('Principal');
        await this.memberDetailsFirstName.fill(memberDetailsFirstName);
        await this.memberDetailsMiddleName.fill(memberDetailsMiddleName);
        await this.memberDetailsFamilyName.fill(memberDetailsFamilyName);
        await this.memberDetailsDoB.fill(memberDetailsDoB);
        await this.page.keyboard.press('Tab');
        await this.memberDetailsGenderDropdown.selectOption('Male');
        await this.memberDetailsMaritalStatusDropdown.selectOption('Married');
        await this.memberDetailsCountryOfOriginDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsIdTypeDropdown.selectOption('Identity Card');
        await this.memberDetailsIdNumberField.fill(memberDetailsIdNumberField);
        await this.memberDetailsIdExpiryDateField.fill(memberDetailsIdExpiryDateField);
        await this.memberDetailsProfessionDropdown.selectOption('Accountant');
        await this.memberDetailsNationalIdNumberField.fill(memberDetailsNationalIdNumberField);
        await this.memberDetailsUidNumberField.fill(memberDetailsUidNumberField);
        await this.memberDetailsPassportNumberField.fill(memberDetailsPassportNumberField);
        await this.memberDetailsSalaryDropdown.selectOption('greater than 12,000 AED per month');
        await this.memberDetailsPreviousInsuranceStartDate.fill(memberDetailsPreviousInsuranceStartDate);
        await this.memberDetailsExternalIdField.fill(memberDetailsExternalIdField);
        await this.memberDetailsResidenceVisaPlaceDropdown.selectOption('Dubai');
        await this.memberDetailsGdrfaFileNumber.fill(memberDetailsGdrfaFileNumber);
        await this.memberDetailsMemberTypeDropdown.selectOption('Expat Residency in Dubai');
        ///await this.memberDetailsDhpoMemberIdField.fill(memberDetailsDhpoMemberIdField);
        await this.memberDetailsEmailAddressField.fill(memberDetailsEmailAddressField);
        await this.memberDetailsMobileNBRField.fill(memberDetailsMobileNBRField);
        await this.memberDetailsCountryDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsRegionDropdown.selectOption('Dubai');
        await this.memberDetailsSubRegionDropdown.selectOption('AL BARSHA FIRST');
        await this.memberDetailsApplyBtn.click();
        //commenting line 829 for now as discussed with functional team
        ///await this.memberDetailsMemberListCheckBox.click();
        await this.memberListProductCategoryDropdown.selectOption('EBP DHA - DHA INDVIDUAL');
        await this.memberListSaveBtn.click();
        ///await this.memberListContinueBtn.click();
        //await this.page.waitForTimeout(1500000);
       
    }


    async addFirstDependentMemberDetailsIndividualDha(memberDetailsFirstName: string, memberDetailsMiddleName: string, memberDetailsFamilyName: string, memberDetailsDoB: string, memberDetailsIdNumberField: string, memberDetailsIdExpiryDateField: string, memberDetailsNationalIdNumberField: string, memberDetailsUidNumberField: string, memberDetailsPassportNumberField: string, memberDetailsPreviousInsuranceStartDate: string, memberDetailsExternalIdField: string, memberDetailsGdrfaFileNumber: string, memberDetailsDhpoMemberIdField: string, memberDetailsEmailAddressField: string, memberDetailsMobileNBRField: string) {
        
        await this.page.waitForLoadState('networkidle');
        await this.addDependentPlusBtn.click();
        await this.memberDetailsDependencyDropdown.selectOption('Spouse');
        await this.memberDetailsFirstName.fill(memberDetailsFirstName);
        await this.memberDetailsMiddleName.fill(memberDetailsMiddleName);
        await this.memberDetailsFamilyName.fill(memberDetailsFamilyName);
        await this.memberDetailsDoB.fill(memberDetailsDoB);
        await this.page.keyboard.press('Tab');
        await this.memberDetailsGenderDropdown.selectOption('Female');
        await this.memberDetailsMaritalStatusDropdown.selectOption('Married');
        await this.memberDetailsCountryOfOriginDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsIdTypeDropdown.selectOption('Identity Card');
        await this.memberDetailsIdNumberField.fill(memberDetailsIdNumberField);
        await this.memberDetailsIdExpiryDateField.fill(memberDetailsIdExpiryDateField);
        await this.memberDetailsProfessionDropdown.selectOption('Accountant');
        await this.memberDetailsNationalIdNumberField.fill(memberDetailsNationalIdNumberField);
        await this.memberDetailsUidNumberField.fill(memberDetailsUidNumberField);
        await this.memberDetailsPassportNumberField.fill(memberDetailsPassportNumberField);
        await this.memberDetailsSalaryDropdown.selectOption('greater than 12,000 AED per month');
        await this.memberDetailsPreviousInsuranceStartDate.fill(memberDetailsPreviousInsuranceStartDate);
        await this.memberDetailsExternalIdField.fill(memberDetailsExternalIdField);
        await this.memberDetailsResidenceVisaPlaceDropdown.selectOption('Dubai');
        await this.memberDetailsGdrfaFileNumber.fill(memberDetailsGdrfaFileNumber);
        await this.memberDetailsMemberTypeDropdown.selectOption('Expat Residency in Dubai');
        ///await this.memberDetailsDhpoMemberIdField.fill(memberDetailsDhpoMemberIdField);
        await this.memberDetailsEmailAddressField.fill(memberDetailsEmailAddressField);
        await this.memberDetailsMobileNBRField.fill(memberDetailsMobileNBRField);
        await this.memberDetailsCountryDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsRegionDropdown.selectOption('Dubai');
        await this.memberDetailsSubRegionDropdown.selectOption('AL BARSHA FIRST');
        await this.memberDetailsApplyBtn.click();
        //commenting line 872 for now as discussed with functional team
        ///await this.memberDetailsMemberListCheckBox2.click();
        //await this.page.waitForTimeout(150000);
        await this.memberListProductCategoryDropdown2.selectOption('EBP DHA - DHA INDVIDUAL');
        await this.memberListSaveBtn.click();
        ///await this.memberListContinueBtn.click();
        await this.page.waitForTimeout(3000);
       
    }


    async addSecondDependentMemberDetailsIndividualDha(memberDetailsFirstName: string, memberDetailsMiddleName: string, memberDetailsFamilyName: string, memberDetailsDoB: string, memberDetailsIdNumberField: string, memberDetailsIdExpiryDateField: string, memberDetailsNationalIdNumberField: string, memberDetailsUidNumberField: string, memberDetailsPassportNumberField: string, memberDetailsPreviousInsuranceStartDate: string, memberDetailsExternalIdField: string, memberDetailsGdrfaFileNumber: string, memberDetailsDhpoMemberIdField: string, memberDetailsEmailAddressField: string, memberDetailsMobileNBRField: string) {
        
        await this.page.waitForLoadState('networkidle');
        await this.addDependentPlusBtn.click();
        await this.memberDetailsDependencyDropdown.selectOption('Child');
        await this.memberDetailsFirstName.fill(memberDetailsFirstName);
        await this.memberDetailsMiddleName.fill(memberDetailsMiddleName);
        await this.memberDetailsFamilyName.fill(memberDetailsFamilyName);
        await this.memberDetailsDoB.fill(memberDetailsDoB);
        await this.page.keyboard.press('Tab');
        await this.memberDetailsGenderDropdown.selectOption('Male');
        await this.memberDetailsMaritalStatusDropdown.selectOption('Married');
        await this.memberDetailsCountryOfOriginDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsIdTypeDropdown.selectOption('Identity Card');
        await this.memberDetailsIdNumberField.fill(memberDetailsIdNumberField);
        await this.memberDetailsIdExpiryDateField.fill(memberDetailsIdExpiryDateField);
        await this.memberDetailsProfessionDropdown.selectOption('Accountant');
        await this.memberDetailsNationalIdNumberField.fill(memberDetailsNationalIdNumberField);
        await this.memberDetailsUidNumberField.fill(memberDetailsUidNumberField);
        await this.memberDetailsPassportNumberField.fill(memberDetailsPassportNumberField);
        await this.memberDetailsSalaryDropdown.selectOption('greater than 12,000 AED per month');
        await this.memberDetailsPreviousInsuranceStartDate.fill(memberDetailsPreviousInsuranceStartDate);
        await this.memberDetailsExternalIdField.fill(memberDetailsExternalIdField);
        await this.memberDetailsResidenceVisaPlaceDropdown.selectOption('Dubai');
        await this.memberDetailsGdrfaFileNumber.fill(memberDetailsGdrfaFileNumber);
        await this.memberDetailsMemberTypeDropdown.selectOption('Expat Residency in Dubai');
        ///await this.memberDetailsDhpoMemberIdField.fill(memberDetailsDhpoMemberIdField);
        await this.memberDetailsEmailAddressField.fill(memberDetailsEmailAddressField);
        await this.memberDetailsMobileNBRField.fill(memberDetailsMobileNBRField);
        await this.memberDetailsCountryDropdown.selectOption('United Arab Emirates');
        await this.memberDetailsRegionDropdown.selectOption('Dubai');
        await this.memberDetailsSubRegionDropdown.selectOption('AL BARSHA FIRST');
        await this.memberDetailsApplyBtn.click();
        //commenting line 916 for now as discussed with functional team
        ///await this.memberDetailsMemberListCheckBox3.click();
        //await this.page.waitForTimeout(150000);
        await this.memberListProductCategoryDropdown3.selectOption('EBP DHA - DHA INDVIDUAL');
        await this.memberListSaveBtn.click();
        ///await this.memberListContinueBtn.click();
        //await this.page.waitForTimeout(30000);
       
    }


    async errorCorrectionEndorsement(newEndorsementEffectiveDateField: string, addDependentIdNumberField: string, memberDetailsFirstName: string, memberDetailsEmailAddressField: string){
        
        await this.managedPolicyEditBtn.click();
        await this.newEndorsementBtn.click();
        await this.actionTypeDropdownField.selectOption('Error correction');
        await this.newEndorsementEffectiveDateField.fill(newEndorsementEffectiveDateField);
        //await this.deletionReasonDropdown.selectOption('Absence of eligibility');
        await this.newEndorsementOkBtn.click();
        //await this.page.waitForTimeout(150000);
        
        await this.addDependentIdNumberField.fill(addDependentIdNumberField);
        await this.searchBtn.click();
        //await this.page.waitForTimeout(2000);
        await this.childMemberMoveBtn.click();
        await this.childMemberEditBtn.click();

        await this.memberDetailsFirstName.fill(memberDetailsFirstName);
        await this.memberDetailsEmailAddressField.fill(memberDetailsEmailAddressField);
        await this.memberDetailsApplyBtn.click();
        
        await this.submitBtn.click();
        await this.okBtn.click();
        //below 4 lines of code not being executed as after 815 api is not being called
        //Need to discuss with Tanuja
/*        await this.page.waitForTimeout(5000);
        await this.deletionValidateLink.click();
        await this.validateConfirmationYesBtn.click();
        await this.okBtn.click(); */
        ///await this.page.waitForTimeout(180000);

    }

    async midTermDeletionEndorsement(newEndorsementEffectiveDateField: string, addDependentIdNumberField: string){
        
        await this.managedPolicyEditBtn.click();
        await this.newEndorsementBtn.click();
        await this.actionTypeDropdownField.selectOption('Deletion');
        await this.newEndorsementEffectiveDateField.fill(newEndorsementEffectiveDateField);
        await this.deletionReasonDropdown.selectOption('Absence of eligibility');
        await this.newEndorsementOkBtn.click();
        //await this.page.waitForTimeout(150000);
        
        await this.addDependentIdNumberField.fill(addDependentIdNumberField);
        await this.searchBtn.click();
        //await this.page.waitForTimeout(2000);
        await this.childMemberMoveBtn.click();
        await this.childMemberDeleteBtn.click();
        await this.submitBtn.click();
        await this.page.waitForTimeout(5000);
        await this.okBtn.click();
        await this.page.waitForTimeout(5000);
        //below 4 lines of code not being executed as after 815 api is not being called
        //Need to discuss with Tanuja
        await this.page.waitForTimeout(3000);
        await this.deletionValidateLink.click();
        await this.page.waitForTimeout(3000);
        await this.validateConfirmationYesBtn.click();
        await this.page.waitForTimeout(3000);
        await this.okBtn.click();
        ///await this.page.waitForTimeout(180000);

    }

    async inceptionAdditionEndorsement(newEndorsementEffectiveDateField: string, addDependentIdNumberField: string){
        await this.managedPolicyEditBtn.click();
        await this.newEndorsementBtn.click();
        await this.actionTypeDropdownField.selectOption('Addition');
        await this.newEndorsementEffectiveDateField.fill(newEndorsementEffectiveDateField);
        await this.newEndorsementOkBtn.click();
        await this.addDependentIdNumberField.fill(addDependentIdNumberField);
        await this.searchBtn.click();
        //await this.page.waitForTimeout(2000);
        await this.membersMoveBtn.click();
        await this.addDependentPlusBtn.click();
        ///await this.page.waitForTimeout(180000);

    }

    async cancellationOfContractFromInception(newEndorsementEffectiveDateField: string){
        await this.managedPolicyEditBtn.click();
        await this.newEndorsementBtn.click();
        await this.actionTypeDropdownField.selectOption('Cancel Contract');
        await this.cancelFromInceptionCheckBox.click();
        //await this.newEndorsementEffectiveDateField.fill(newEndorsementEffectiveDateField);
        await this.cancellationReasonDropdown.selectOption('Alternative Insurance');
        await this.newEndorsementOkBtn.click();
        await this.page.waitForTimeout(3000);
        await this.contractCancellationConfirmationBtn.click();
        await this.page.waitForTimeout(3000);
        await this.okBtn.click();
        await this.page.waitForTimeout(3000);
        await this.deletionValidateLink.click();
        await this.page.waitForTimeout(3000);
        await this.validateConfirmationYesBtn.click();
        await this.page.waitForTimeout(3000);
        await this.okBtn.click();
        
        //await this.contractCancellationOkBtn.click();
        
    }


    //Group policy methods from below line ***

    async clickOnGroupPolicyLink() {
        
        await this.page.waitForLoadState('networkidle');
        await this.groupPolicyLink.click();
        //await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(2000);
    }

    async fillGroupDetails(payerDropdownSearchField: string, distributorDropdownSearchField: string, policyHolderName: string, effectiveDate: string, countryDropdownSearchField: string, regionDropdownSearchField: string, healthAuthDropdownSearchField: string, programDropdownSearchField: string, producerDropdownSearchField: string, branchDropdownSearchField: string, currencyDropdownSearchField: string, issuanceSourceDropdownSearchField: string, paymentFreqDropdownSearchField: string, paymentMethodDropdownSearchField: string, numberOfBeneficiaries: string) {
        
        await this.payerDropdownField.click();
        await this.payerDropdownSearchField.click();
        await this.payerDropdownSearchField.fill(payerDropdownSearchField);
        await this.payerSelectValue.click();
        await this.distributorDropdownField.click();
        await this.distributorDropdownSearchField.click();
        await this.distributorDropdownSearchField.fill(distributorDropdownSearchField);
        await this.distributorSelectValue.click();
        await this.policyHolderName.fill(policyHolderName);
        await this.effectiveDate.fill(effectiveDate);
        await this.page.keyboard.press('Tab');
        await this.countryDropdownField.click();
        await this.countryDropdownSearchField.click();
        await this.countryDropdownSearchField.fill(countryDropdownSearchField);
        await this.countrySelectValue.click();
        
        await this.regionDropdownField.click();
        await this.regionDropdownSearchField.click();
        await this.regionDropdownSearchField.fill(regionDropdownSearchField);
        await this.regionSelectValue.click();
        await this.healthAuthDropdownField.click();
        await this.healthAuthDropdownSearchField.click();
        await this.healthAuthDropdownSearchField.fill(healthAuthDropdownSearchField);
        await this.healthAuthSelectValue.click();
        await this.programDropdownField.click();
        await this.programDropdownSearchField.click();
        await this.programDropdownSearchField.fill(programDropdownSearchField);
        await this.programSelectValue.click();
        await this.producerDropdownField.click();
        await this.producerDropdownSearchField.click();
        await this.producerDropdownSearchField.fill(producerDropdownSearchField);
        await this.producerSelectValue.click();
        await this.branchDropdownField.click();
        await this.branchDropdownSearchField.click();
        await this.branchDropdownSearchField.fill(branchDropdownSearchField);
        await this.branchSelectValue.click();
        await this.currencyDropdownField.click();
        await this.currencyDropdownSearchField.click();
        await this.currencyDropdownSearchField.fill(currencyDropdownSearchField);
        await this.currencySelectValue.click();
        await this.numberOfBeneficiaries.fill(numberOfBeneficiaries);
        await this.issuanceSourceDropdownField.click();
        await this.issuanceSourceDropdownSearchField.click();
        await this.issuanceSourceDropdownSearchField.fill(issuanceSourceDropdownSearchField);
        await this.issuanceSourceSelectValue.click();
        await this.paymentFreqDropdownField.click();
        await this.paymentFreqDropdownSearchField.click();
        await this.paymentFreqDropdownSearchField.fill(paymentFreqDropdownSearchField);
        await this.paymentFreqSelectValue.click();
        await this.paymentMethodDropdownField.click();
        await this.paymentMethodDropdownSearchField.click();
        await this.paymentMethodDropdownSearchField.fill(paymentMethodDropdownSearchField);
        await this.paymentMethodSelectValue.click();
        
        await this.saveAndContinueBtn.click();
        await this.page.waitForLoadState('networkidle');
        //await this.page.waitForTimeout(100000);


    }


    async grpUploadOneMemberDetailsFile() {
        
        await this.page.waitForLoadState('networkidle');
        //const fileWithPath = './abc.jpg';
        const fileWithPath = 'C:/Users/pankaj.e.patil/OneDrive - Accenture/Documents/2024/AzP/Playwright Automation/Syncro B2B Automation/UploadMembers/UploadOneMember.xlsx';
        const [fileChooser] = await Promise.all([
        this.page.waitForEvent('filechooser'),
        //this.page.getByRole('button', { name: 'Add a Photo' }).click(),
        //a[@class='btn btn_custom_pad upload_template_member_list ']
        await this.grpUploadMemberBtn.click(),
        ]);
        await fileChooser.setFiles([fileWithPath]);
        await this.page.waitForTimeout(10000);
        await this.memberListSaveBtn.click();
        await this.page.waitForTimeout(20000);
    }

    async grpUploadThreeMemberDetailsFile() {
        
        await this.page.waitForLoadState('networkidle');
        //const fileWithPath = './abc.jpg';
        const fileWithPath = 'C:/Users/pankaj.e.patil/OneDrive - Accenture/Documents/2024/AzP/Playwright Automation/Syncro B2B Automation/UploadMembers/UploadThreeMember.xlsx';
        const [fileChooser] = await Promise.all([
        this.page.waitForEvent('filechooser'),
        //this.page.getByRole('button', { name: 'Add a Photo' }).click(),
        //a[@class='btn btn_custom_pad upload_template_member_list ']
        await this.grpUploadMemberBtn.click(),
        ]);
        await fileChooser.setFiles([fileWithPath]);
        await this.page.waitForTimeout(10000);
        await this.memberListSaveBtn.click();
        await this.page.waitForTimeout(20000);
    }


    async fillGroupFullDetails(phfdEstablishmentCardNumber: string, phfdPolicyHolderEmail: string, phfdPolicyHolderMobileNumber: string, phfdRepresentativeName: string, phfdSubRegionDropdownSearch: string, phfdPoBoxNumber: string, phfdDetailedAddress: string) {
        
        //await this.page.waitForLoadState('networkidle');
        await this.memberListContinueBtn.click();
        await this.phfdEstablishmentCardNumber.fill(phfdEstablishmentCardNumber);
        await this.phfdPolicyHolderEmail.fill(phfdPolicyHolderEmail);
        await this.phfdPolicyHolderMobileNumber.fill(phfdPolicyHolderMobileNumber);
        await this.phfdRepresentativeName.fill(phfdRepresentativeName);
        await this.phfdSubRegionDropdown.click();
        await this.phfdSubRegionDropdownSearch.click();
        await this.phfdSubRegionDropdownSearch.fill(phfdSubRegionDropdownSearch);
        await this.phfdSubRegionDropdownSelectValue.click();
        await this.phfdPoBoxNumber.fill(phfdPoBoxNumber);
        await this.phfdDetailedAddress.fill(phfdDetailedAddress);
        await this.saveAndContinueBtn.click();
        //await this.page.waitForTimeout(1000000);
    
    }

    async grpCancellationOfContract(newEndorsementEffectiveDateField: string){
        await this.managedPolicyEditBtn.click();
        await this.newEndorsementBtn.click();
        await this.grpOnExistingContractLink.click();
        await this.actionTypeDropdownField.selectOption('Cancel Contract');
        await this.newEndorsementEffectiveDateField.fill(newEndorsementEffectiveDateField);
        await this.cancellationReasonDropdown.selectOption('Alternative Insurance');
        await this.newEndorsementOkBtn.click();
        await this.contractCancellationConfirmationBtn.click();
        //await this.contractCancellationOkBtn.click();
        
    }












































































}