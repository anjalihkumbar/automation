import { expect, test } from '@playwright/test';
import { SyncroUaePage } from '../../page-objects/syncroUAE-pages/first-page.ts';
//import { SyncroLoginPage } from '../../page-objects/login-page/login-page.ts';
const firsttabData = require(`../../testdata/${process.env.ENV || 'data_test_uae'}/syncrouae.json`) as Record<string, any>;
//const loginbData = require(`../../testdata/${process.env.ENV || 'data_test_eu'}/login.json`) as Record<string, any>;
//const onePayData = require(`../../testdata/${process.env.ENV || 'data_test_eu'}/onePay.json`) as Record<string, any>;
import '../../page-objects/utilities-pages/global-setup.ts';


//1
/*
test('SYNC-TC-4409: TC_001_Login with TPA user', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })


});

//2

test('SYNC-TC-4410: TC_002_Create a Individual Policy creation with 1 Dependent', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentMethodDropdownSearchField);
  })


page.close();
});


//3
test('SYNC-TC-4416: TC_001. Select the Plan from Product Selction Page', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentMethodDropdownSearchField);
  })


  await test.step("select program or plan", async () => {
    await syncroUaePage.silverProductSelection();
  })


page.close();
});


//4
test('SYNC-TC-4422: TC_001.Enter the required details in the member Details page', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentMethodDropdownSearchField);
  })


  await test.step("select program or plan", async () => {
    await syncroUaePage.silverProductSelection();
  })


  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })


page.close();
});


//5
test('SYNC-TC-4428: TC_001_TPA_Individual Policy creation with 1 Dependent', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentMethodDropdownSearchField);
  })


  await test.step("select program or plan", async () => {
    await syncroUaePage.silverProductSelection();
  })


  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })


  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillPolicyHolderFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })


page.close();
});


//6
test('SYNC-TC-4434: TC_001_TPA_Individual Policy creation with 1 Dependent', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentMethodDropdownSearchField);
  })


  await test.step("select program or plan", async () => {
    await syncroUaePage.silverProductSelection();
  })


  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })


  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillPolicyHolderFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })


  await test.step("submission page validate policy", async () => {
    await syncroUaePage.submissionPageValidatePolicy();
  })

  await test.step("Endorsement details tab text validation", async () => {
    await syncroUaePage.verifyEndorsementDetailsTabText(firsttabData["EndorsementDetails-005"].endorsementDetailsTabText);
  })


page.close();
});


//7
test('SYNC-TC-4407: TC_001_Mid term Addition Endorsement of 1 dependent', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentMethodDropdownSearchField);
  })


  await test.step("select program or plan", async () => {
    await syncroUaePage.silverProductSelection();
  })


  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })


  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillPolicyHolderFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })


  await test.step("submission page validate policy", async () => {
    await syncroUaePage.submissionPageValidatePolicy();
  })

  await test.step("Endorsement details tab text validation", async () => {
    await syncroUaePage.verifyEndorsementDetailsTabText(firsttabData["EndorsementDetails-005"].endorsementDetailsTabText);
  })


  await test.step("get policy number text and search policy number under managed policy", async () => {
    const policyNumberText = await syncroUaePage.getPolicyNumberText();
    await syncroUaePage.managedPolicySearch(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, policyNumberText);
  })


  await test.step("addition of endorsement", async () => {
    await syncroUaePage.additionEndorsement(firsttabData["EndorsementDetails-005"].newEndorsementEffectiveDateField, firsttabData["EndorsementDetails-005"].addDependentIdNumberField);
  })


  await test.step("Fill the values in member details page to add dependent", async () => {
    await syncroUaePage.addDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["EndorsementDetails-005"].addDependentMemberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["EndorsementDetails-005"].memberDetailsNationalIdNumberField, firsttabData["EndorsementDetails-005"].memberDetailsUidNumberField, firsttabData["EndorsementDetails-005"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

page.close();
});


//8 Individual policy with 1 dependent Addition endorsement and Cancel Contract E2E TPA user

test('SYNC-TC-4440: TC_001_ Mid term Cancel Contract', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetails(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentMethodDropdownSearchField);
  })


  await test.step("select program or plan", async () => {
    await syncroUaePage.silverProductSelection();
  })


  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })


  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillPolicyHolderFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })


  await test.step("submission page validate policy", async () => {
    await syncroUaePage.submissionPageValidatePolicy();
  })

  await test.step("Endorsement details tab text validation", async () => {
    await syncroUaePage.verifyEndorsementDetailsTabText(firsttabData["EndorsementDetails-005"].endorsementDetailsTabText);
  })


  await test.step("get policy number text and search policy number under managed policy", async () => {
    const policyNumberText = await syncroUaePage.getPolicyNumberText();
    await syncroUaePage.managedPolicySearch(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, policyNumberText);
  })


  await test.step("addition of endorsement", async () => {
    await syncroUaePage.additionEndorsement(firsttabData["EndorsementDetails-005"].newEndorsementEffectiveDateField, firsttabData["EndorsementDetails-005"].addDependentIdNumberField);
  })


  await test.step("Fill the values in member details page to add dependent", async () => {
    await syncroUaePage.addDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["EndorsementDetails-005"].addDependentMemberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["EndorsementDetails-005"].memberDetailsNationalIdNumberField, firsttabData["EndorsementDetails-005"].memberDetailsUidNumberField, firsttabData["EndorsementDetails-005"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("get policy number text and search policy number under managed policy", async () => {
    const policyNumberText = await syncroUaePage.getPolicyNumberText();
    await syncroUaePage.managedPolicySearch(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, policyNumberText);
  })

  await test.step("cancellation of contract", async () => {
    await syncroUaePage.cancellationOfContract(firsttabData["EndorsementDetails-005"].newEndorsementEffectiveDateField);
  })

page.close();
});


//8 Individual policy with 1 dependent Addition endorsement and Cancel Contract E2E Broker user
test('SYNC-TC-4440: TC_001_ Mid term Cancel Contract', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].brokerUserNameInput, firsttabData["Login-Access-001"].brokerPasswordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsBroker(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentMethodDropdownSearchField);
  })


  await test.step("select program or plan", async () => {
    await syncroUaePage.silverProductSelectionBroker();
  })


  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetailsBroker(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })


  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillPolicyHolderFullDetailsBroker(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderPhoneNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })


  await test.step("submission page validate policy", async () => {
    await syncroUaePage.submissionPageSubmitPolicyBroker();
  })

  await test.step("Endorsement details tab text validation", async () => {
    await syncroUaePage.verifyEndorsementDetailsTabText(firsttabData["EndorsementDetails-005"].endorsementDetailsTabText);
  })


  await test.step("get policy number text and search policy number under managed policy", async () => {
    const policyNumberText = await syncroUaePage.getPolicyNumberText();
    await syncroUaePage.managedPolicySearch(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, policyNumberText);
  })


  await test.step("addition of endorsement", async () => {
    await syncroUaePage.additionEndorsement(firsttabData["EndorsementDetails-005"].newEndorsementEffectiveDateField, firsttabData["EndorsementDetails-005"].addDependentIdNumberField);
  })


  await test.step("Fill the values in member details page to add dependent", async () => {
    await syncroUaePage.addDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["EndorsementDetails-005"].addDependentMemberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["EndorsementDetails-005"].memberDetailsNationalIdNumberField, firsttabData["EndorsementDetails-005"].memberDetailsUidNumberField, firsttabData["EndorsementDetails-005"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("get policy number text and search policy number under managed policy", async () => {
    const policyNumberText = await syncroUaePage.getPolicyNumberText();
    await syncroUaePage.managedPolicySearch(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, policyNumberText);
  })

  await test.step("cancellation of contract", async () => {
    await syncroUaePage.cancellationOfContract(firsttabData["EndorsementDetails-005"].newEndorsementEffectiveDateField);
  })

page.close();
});


//9 Individual Policy with three dependents

test('SYNC-TC-4411: TC_003_Individual Policy creation with 3 Dependents', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-006"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-006"].paymentMethodDropdownSearchField);
  })

  page.close();
});


//10 Individual Policy with three dependents

test('SYNC-TC-4417: TC_002_TPA_Individual Policy creation with 3 Dependents', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-006"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-006"].paymentMethodDropdownSearchField);
  })
  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.silverAndBronzeProductsSelection();
  })

  page.close();
});


//11 Individual Policy with three dependents

test('SYNC-TC-4423: TC_002_TPA_Individual Policy creation with 3 Dependents', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-006"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-006"].paymentMethodDropdownSearchField);
  })
  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.silverAndBronzeProductsSelection();
  })

  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })


  await test.step("Add first dependent and fill the values in member details page", async () => {
    await syncroUaePage.addFirstDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("Add second dependent and fill the values in member details page", async () => {
    await syncroUaePage.addSecondDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("Add third dependent and fill the values in member details page", async () => {
    await syncroUaePage.addThirdDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

 
  page.close();
}); 


//12 Individual Policy with three dependents
test('SYNC-TC-4429: TC_002_TPA_Individual Policy creation with 3 Dependents.', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-006"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-006"].paymentMethodDropdownSearchField);
  })
  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.silverAndBronzeProductsSelection();
  })

  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })


  await test.step("Add first dependent and fill the values in member details page", async () => {
    await syncroUaePage.addFirstDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("Add second dependent and fill the values in member details page", async () => {
    await syncroUaePage.addSecondDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("Add third dependent and fill the values in member details page", async () => {
    await syncroUaePage.addThirdDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillPolicyHolderFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })

 
  page.close();
});


//13 Individual Policy with three dependents

test('SYNC-TC-4435: TC_002_TPA_Individual Policy creation with 3 Dependents', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-006"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-006"].paymentMethodDropdownSearchField);
  })
  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.silverAndBronzeProductsSelection();
  })

  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })


  await test.step("Add first dependent and fill the values in member details page", async () => {
    await syncroUaePage.addFirstDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("Add second dependent and fill the values in member details page", async () => {
    await syncroUaePage.addSecondDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("Add third dependent and fill the values in member details page", async () => {
    await syncroUaePage.addThirdDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillPolicyHolderFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })

  await test.step("submission page validate policy", async () => {
    await syncroUaePage.submissionPageValidatePolicy();
  })
  
  await test.step("Endorsement details tab text validation", async () => {
    await syncroUaePage.verifyEndorsementDetailsTabText(firsttabData["EndorsementDetails-005"].endorsementDetailsTabText);
  })

  page.close();
});


//14 Individual Policy with three dependents

test('SYNC-TC-4442: TC_001_Deletion Endorsement ', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-006"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-006"].paymentMethodDropdownSearchField);
  })
  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.silverAndBronzeProductsSelection();
  })

  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })


  await test.step("Add first dependent and fill the values in member details page", async () => {
    await syncroUaePage.addFirstDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("Add second dependent and fill the values in member details page", async () => {
    await syncroUaePage.addSecondDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("Add third dependent and fill the values in member details page", async () => {
    await syncroUaePage.addThirdDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillPolicyHolderFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })

  await test.step("submission page validate policy", async () => {
    await syncroUaePage.submissionPageValidatePolicy();
  })

  await test.step("Endorsement details tab text validation", async () => {
    await syncroUaePage.verifyEndorsementDetailsTabText(firsttabData["EndorsementDetails-005"].endorsementDetailsTabText);
  })


  await test.step("get policy number text and search policy number under managed policy", async () => {
    const policyNumberText = await syncroUaePage.getPolicyNumberText();
    await syncroUaePage.managedPolicySearch(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, policyNumberText);
  })

  await test.step("deletion endorsement", async () => {
    await syncroUaePage.deletionEndorsement(firsttabData["EndorsementDetails-005"].newEndorsementEffectiveDateField, firsttabData["EndorsementDetails-005"].addDependentIdNumberField);
  })

  page.close();
});


//15 Individual Policy with two dependents

test('SYNC-TC-4412: TC_004_TPA_Individual Policy creation with 2 Dependents', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentMethodDropdownSearchField);
  })


  page.close();
});


//16 Individual Policy with two dependents

test('SYNC-TC-4418: TC_004_TPA_Individual Policy creation with 2 Dependents', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentMethodDropdownSearchField);
  })

  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.EbpDhaIndvidualProductSelection();
  })


  page.close();
});


//17 Individual Policy with two dependents
test('SYNC-TC-4424: TC_004_TPA_Individual Policy creation with 2 Dependents', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentMethodDropdownSearchField);
  })

  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.EbpDhaIndvidualProductSelection();
  })

  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetailsIndividualDha(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })


  await test.step("Add first dependent and fill the values in member details page", async () => {
    await syncroUaePage.addFirstDependentMemberDetailsIndividualDha(firsttabData["MemberDetails-008"].memberDetailsFirstName, firsttabData["MemberDetails-008"].memberDetailsMiddleName, firsttabData["MemberDetails-008"].memberDetailsFamilyName, firsttabData["MemberDetails-008"].memberDetailsDoB, firsttabData["MemberDetails-008"].memberDetailsIdNumberField, firsttabData["MemberDetails-008"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-008"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-008"].memberDetailsUidNumberField, firsttabData["MemberDetails-008"].memberDetailsPassportNumberField, firsttabData["MemberDetails-008"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-008"].memberDetailsExternalIdField, firsttabData["MemberDetails-008"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-008"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-008"].memberDetailsEmailAddressField, firsttabData["MemberDetails-008"].memberDetailsMobileNBRField);
  })

  await test.step("Add second dependent and fill the values in member details page", async () => {
    await syncroUaePage.addSecondDependentMemberDetailsIndividualDha(firsttabData["MemberDetails-009"].memberDetailsFirstName, firsttabData["MemberDetails-009"].memberDetailsMiddleName, firsttabData["MemberDetails-009"].memberDetailsFamilyName, firsttabData["MemberDetails-009"].memberDetailsDoB, firsttabData["MemberDetails-009"].memberDetailsIdNumberField, firsttabData["MemberDetails-009"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-009"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-009"].memberDetailsUidNumberField, firsttabData["MemberDetails-009"].memberDetailsPassportNumberField, firsttabData["MemberDetails-009"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-009"].memberDetailsExternalIdField, firsttabData["MemberDetails-009"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-009"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-009"].memberDetailsEmailAddressField, firsttabData["MemberDetails-009"].memberDetailsMobileNBRField);
  })

  page.close();
});


//18 Individual Policy with two dependents

test('SYNC-TC-4430: TC_004_TPA_Individual Policy creation with 2 Dependents', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentMethodDropdownSearchField);
  })

  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.EbpDhaIndvidualProductSelection();
  })

  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetailsIndividualDha(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })


  await test.step("Add first dependent and fill the values in member details page", async () => {
    await syncroUaePage.addFirstDependentMemberDetailsIndividualDha(firsttabData["MemberDetails-008"].memberDetailsFirstName, firsttabData["MemberDetails-008"].memberDetailsMiddleName, firsttabData["MemberDetails-008"].memberDetailsFamilyName, firsttabData["MemberDetails-008"].memberDetailsDoB, firsttabData["MemberDetails-008"].memberDetailsIdNumberField, firsttabData["MemberDetails-008"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-008"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-008"].memberDetailsUidNumberField, firsttabData["MemberDetails-008"].memberDetailsPassportNumberField, firsttabData["MemberDetails-008"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-008"].memberDetailsExternalIdField, firsttabData["MemberDetails-008"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-008"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-008"].memberDetailsEmailAddressField, firsttabData["MemberDetails-008"].memberDetailsMobileNBRField);
  })

  await test.step("Add second dependent and fill the values in member details page", async () => {
    await syncroUaePage.addSecondDependentMemberDetailsIndividualDha(firsttabData["MemberDetails-009"].memberDetailsFirstName, firsttabData["MemberDetails-009"].memberDetailsMiddleName, firsttabData["MemberDetails-009"].memberDetailsFamilyName, firsttabData["MemberDetails-009"].memberDetailsDoB, firsttabData["MemberDetails-009"].memberDetailsIdNumberField, firsttabData["MemberDetails-009"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-009"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-009"].memberDetailsUidNumberField, firsttabData["MemberDetails-009"].memberDetailsPassportNumberField, firsttabData["MemberDetails-009"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-009"].memberDetailsExternalIdField, firsttabData["MemberDetails-009"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-009"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-009"].memberDetailsEmailAddressField, firsttabData["MemberDetails-009"].memberDetailsMobileNBRField);
  })


  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillPolicyHolderFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })

  page.close();
});


//19 Individual Policy with two dependents

test('SYNC-TC-4436: TC_004_TPA_Individual Policy creation with 2 Dependents', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentMethodDropdownSearchField);
  })

  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.EbpDhaIndvidualProductSelection();
  })

  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetailsIndividualDha(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })


  await test.step("Add first dependent and fill the values in member details page", async () => {
    await syncroUaePage.addFirstDependentMemberDetailsIndividualDha(firsttabData["MemberDetails-008"].memberDetailsFirstName, firsttabData["MemberDetails-008"].memberDetailsMiddleName, firsttabData["MemberDetails-008"].memberDetailsFamilyName, firsttabData["MemberDetails-008"].memberDetailsDoB, firsttabData["MemberDetails-008"].memberDetailsIdNumberField, firsttabData["MemberDetails-008"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-008"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-008"].memberDetailsUidNumberField, firsttabData["MemberDetails-008"].memberDetailsPassportNumberField, firsttabData["MemberDetails-008"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-008"].memberDetailsExternalIdField, firsttabData["MemberDetails-008"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-008"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-008"].memberDetailsEmailAddressField, firsttabData["MemberDetails-008"].memberDetailsMobileNBRField);
  })

  await test.step("Add second dependent and fill the values in member details page", async () => {
    await syncroUaePage.addSecondDependentMemberDetailsIndividualDha(firsttabData["MemberDetails-009"].memberDetailsFirstName, firsttabData["MemberDetails-009"].memberDetailsMiddleName, firsttabData["MemberDetails-009"].memberDetailsFamilyName, firsttabData["MemberDetails-009"].memberDetailsDoB, firsttabData["MemberDetails-009"].memberDetailsIdNumberField, firsttabData["MemberDetails-009"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-009"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-009"].memberDetailsUidNumberField, firsttabData["MemberDetails-009"].memberDetailsPassportNumberField, firsttabData["MemberDetails-009"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-009"].memberDetailsExternalIdField, firsttabData["MemberDetails-009"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-009"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-009"].memberDetailsEmailAddressField, firsttabData["MemberDetails-009"].memberDetailsMobileNBRField);
  })


  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillPolicyHolderFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })

  await test.step("submission page validate policy", async () => {
    await syncroUaePage.submissionPageValidatePolicy();
  })

  await test.step("Endorsement details tab text validation", async () => {
    await syncroUaePage.verifyEndorsementDetailsTabText(firsttabData["EndorsementDetails-005"].endorsementDetailsTabText);
  })


  page.close();
});


//20 Individual Policy with two dependents
test('SYNC-TC-4444: TC_001_ Error Correction Endorsement', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentMethodDropdownSearchField);
  })

  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.EbpDhaIndvidualProductSelection();
  })

  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetailsIndividualDha(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })


  await test.step("Add first dependent and fill the values in member details page", async () => {
    await syncroUaePage.addFirstDependentMemberDetailsIndividualDha(firsttabData["MemberDetails-008"].memberDetailsFirstName, firsttabData["MemberDetails-008"].memberDetailsMiddleName, firsttabData["MemberDetails-008"].memberDetailsFamilyName, firsttabData["MemberDetails-008"].memberDetailsDoB, firsttabData["MemberDetails-008"].memberDetailsIdNumberField, firsttabData["MemberDetails-008"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-008"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-008"].memberDetailsUidNumberField, firsttabData["MemberDetails-008"].memberDetailsPassportNumberField, firsttabData["MemberDetails-008"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-008"].memberDetailsExternalIdField, firsttabData["MemberDetails-008"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-008"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-008"].memberDetailsEmailAddressField, firsttabData["MemberDetails-008"].memberDetailsMobileNBRField);
  })

  await test.step("Add second dependent and fill the values in member details page", async () => {
    await syncroUaePage.addSecondDependentMemberDetailsIndividualDha(firsttabData["MemberDetails-009"].memberDetailsFirstName, firsttabData["MemberDetails-009"].memberDetailsMiddleName, firsttabData["MemberDetails-009"].memberDetailsFamilyName, firsttabData["MemberDetails-009"].memberDetailsDoB, firsttabData["MemberDetails-009"].memberDetailsIdNumberField, firsttabData["MemberDetails-009"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-009"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-009"].memberDetailsUidNumberField, firsttabData["MemberDetails-009"].memberDetailsPassportNumberField, firsttabData["MemberDetails-009"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-009"].memberDetailsExternalIdField, firsttabData["MemberDetails-009"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-009"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-009"].memberDetailsEmailAddressField, firsttabData["MemberDetails-009"].memberDetailsMobileNBRField);
  })


  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillPolicyHolderFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })

  await test.step("submission page validate policy", async () => {
    await syncroUaePage.submissionPageValidatePolicy();
  })

  await test.step("Endorsement details tab text validation", async () => {
    await syncroUaePage.verifyEndorsementDetailsTabText(firsttabData["EndorsementDetails-005"].endorsementDetailsTabText);
  })


  await test.step("get policy number text and search policy number under managed policy", async () => {
    const policyNumberText = await syncroUaePage.getPolicyNumberText();
    await syncroUaePage.managedPolicySearch(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, policyNumberText);
  }) 

  await test.step("deletion endorsement", async () => {
    await syncroUaePage.errorCorrectionEndorsement(firsttabData["EndorsementDetails-005"].newEndorsementEffectiveDateField, firsttabData["EndorsementDetails-005"].addDependentIdNumberField, firsttabData["EndorsementDetails-005"].memberDetailsFirstName, firsttabData["EndorsementDetails-005"].memberDetailsEmailAddressField);
  })

  page.close();
});


//21 Individual Policy with monthly
test('SYNC-TC-4413: TC_005_TPA_Individual Policy creation(select multiple products)', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-011"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentMethodDropdownSearchField);
  })

  page.close();
});


//22 Individual Policy with monthly
test('SYNC-TC-4419: TC_005_TPA_Individual Policy creation(select multiple products)', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-011"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentMethodDropdownSearchField);
  })

  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.EbpDhaIndvidualProductSelection();
  })

  page.close();
});


//23 Individual Policy with monthly
test('SYNC-TC-4425: TC_005_TPA_Individual Policy creation(select multiple products)', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-011"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentMethodDropdownSearchField);
  })

  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.EbpDhaIndvidualProductSelection();
  })

  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetailsIndividualDha(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  page.close();
});


//24 Individual Policy with monthly
test('SYNC-TC-4431: TC_005_TPA_Individual Policy creation(select multiple products)', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-011"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentMethodDropdownSearchField);
  })

  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.EbpDhaIndvidualProductSelection();
  })

  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetailsIndividualDha(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillPolicyHolderFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })

  page.close();
});


//25 Individual Policy with monthly
test('SYNC-TC-4437: TC_005_TPA_Individual Policy creation(select multiple products)', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-011"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentMethodDropdownSearchField);
  })

  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.EbpDhaIndvidualProductSelection();
  })

  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetailsIndividualDha(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })


  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillPolicyHolderFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })

  await test.step("submission page validate policy", async () => {
    await syncroUaePage.submissionPageValidatePolicy();
  })

  await test.step("Endorsement details tab text validation", async () => {
    await syncroUaePage.verifyEndorsementDetailsTabText(firsttabData["EndorsementDetails-005"].endorsementDetailsTabText);
  })

  page.close();
});


//26 Individual Policy with monthly
test('SYNC-TC-4408: TC_002_ Inception Addition Endorsement', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-011"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentMethodDropdownSearchField);
  })
  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.EbpDhaIndvidualProductSelection();
  })

  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetailsIndividualDha(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillPolicyHolderFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })

  await test.step("submission page validate policy", async () => {
    await syncroUaePage.submissionPageValidatePolicy();
  })

  await test.step("Endorsement details tab text validation", async () => {
    await syncroUaePage.verifyEndorsementDetailsTabText(firsttabData["EndorsementDetails-005"].endorsementDetailsTabText);
  })

  await test.step("get policy number text and search policy number under managed policy", async () => {
    const policyNumberText = await syncroUaePage.getPolicyNumberText();
    await syncroUaePage.managedPolicySearch(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, policyNumberText);
  }) 

  await test.step("addition of endorsement", async () => {
    await syncroUaePage.inceptionAdditionEndorsement(firsttabData["EndorsementDetails-005"].newEndorsementEffectiveDateField, firsttabData["EndorsementDetails-005"].addDependentIdNumberField);
  })

  await test.step("Fill the values in member details page to add dependent", async () => {
    await syncroUaePage.addDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["EndorsementDetails-005"].addDependentMemberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["EndorsementDetails-005"].memberDetailsNationalIdNumberField, firsttabData["EndorsementDetails-005"].memberDetailsUidNumberField, firsttabData["EndorsementDetails-005"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  page.close();
});


//27 Individual Policy with monthly
test('SYNC-TC-4443: TC_002_Mid Deletion Endorsement of dependent added', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-011"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentMethodDropdownSearchField);
  })
  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.EbpDhaIndvidualProductSelection();
  })

  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetailsIndividualDha(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillPolicyHolderFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })

  await test.step("submission page validate policy", async () => {
    await syncroUaePage.submissionPageValidatePolicy();
  })

  await test.step("Endorsement details tab text validation", async () => {
    await syncroUaePage.verifyEndorsementDetailsTabText(firsttabData["EndorsementDetails-005"].endorsementDetailsTabText);
  })

  await test.step("get policy number text and search policy number under managed policy", async () => {
    const policyNumberText = await syncroUaePage.getPolicyNumberText();
    await syncroUaePage.managedPolicySearch(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, policyNumberText);
  }) 

  await test.step("addition of endorsement", async () => {
    await syncroUaePage.inceptionAdditionEndorsement(firsttabData["EndorsementDetails-005"].newEndorsementEffectiveDateField, firsttabData["EndorsementDetails-005"].addDependentIdNumberField);
  })

  await test.step("Fill the values in member details page to add dependent", async () => {
    await syncroUaePage.addDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["EndorsementDetails-005"].addDependentMemberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["EndorsementDetails-005"].memberDetailsNationalIdNumberField, firsttabData["EndorsementDetails-005"].memberDetailsUidNumberField, firsttabData["EndorsementDetails-005"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("get policy number text and search policy number under managed policy", async () => {
    const policyNumberText = await syncroUaePage.getPolicyNumberText();
    await syncroUaePage.managedPolicySearch(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, policyNumberText);
  }) 

  await test.step("mid term deletion endorsement", async () => {
    await syncroUaePage.midTermDeletionEndorsement(firsttabData["EndorsementDetails-012"].newEndorsementEffectiveDateField, firsttabData["EndorsementDetails-005"].addDependentIdNumberField);
  })

  page.close();
});


//28 Individual Policy with monthly
test('SYNC-TC-4441: TC_002_Cancel from Inception', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Individual Policy Link", async () => {
    await syncroUaePage.clickOnIndividualPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillPolicyHolderBasicDetailsTPA(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-011"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-007"].paymentMethodDropdownSearchField);
  })
  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.EbpDhaIndvidualProductSelection();
  })

  await test.step("Fill the values in member details page", async () => {
    await syncroUaePage.fillMemberDetailsIndividualDha(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["MemberDetails-003"].memberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["MemberDetails-003"].memberDetailsNationalIdNumberField, firsttabData["MemberDetails-003"].memberDetailsUidNumberField, firsttabData["MemberDetails-003"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillPolicyHolderFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })

  await test.step("submission page validate policy", async () => {
    await syncroUaePage.submissionPageValidatePolicy();
  })

  await test.step("Endorsement details tab text validation", async () => {
    await syncroUaePage.verifyEndorsementDetailsTabText(firsttabData["EndorsementDetails-005"].endorsementDetailsTabText);
  })

  await test.step("get policy number text and search policy number under managed policy", async () => {
    const policyNumberText = await syncroUaePage.getPolicyNumberText();
    await syncroUaePage.managedPolicySearch(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, policyNumberText);
  }) 

  await test.step("addition of endorsement", async () => {
    await syncroUaePage.inceptionAdditionEndorsement(firsttabData["EndorsementDetails-005"].newEndorsementEffectiveDateField, firsttabData["EndorsementDetails-005"].addDependentIdNumberField);
  })

  await test.step("Fill the values in member details page to add dependent", async () => {
    await syncroUaePage.addDependentMemberDetails(firsttabData["MemberDetails-003"].memberDetailsFirstName, firsttabData["MemberDetails-003"].memberDetailsMiddleName, firsttabData["MemberDetails-003"].memberDetailsFamilyName, firsttabData["EndorsementDetails-005"].addDependentMemberDetailsDoB, firsttabData["MemberDetails-003"].memberDetailsIdNumberField, firsttabData["MemberDetails-003"].memberDetailsIdExpiryDateField, firsttabData["EndorsementDetails-005"].memberDetailsNationalIdNumberField, firsttabData["EndorsementDetails-005"].memberDetailsUidNumberField, firsttabData["EndorsementDetails-005"].memberDetailsPassportNumberField, firsttabData["MemberDetails-003"].memberDetailsPreviousInsuranceStartDate, firsttabData["MemberDetails-003"].memberDetailsExternalIdField, firsttabData["MemberDetails-003"].memberDetailsGdrfaFileNumber, firsttabData["MemberDetails-003"].memberDetailsDhpoMemberIdField, firsttabData["MemberDetails-003"].memberDetailsEmailAddressField, firsttabData["MemberDetails-003"].memberDetailsMobileNBRField);
  })

  await test.step("get policy number text and search policy number under managed policy", async () => {
    const policyNumberText = await syncroUaePage.getPolicyNumberText();
    await syncroUaePage.managedPolicySearch(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, policyNumberText);
  }) 

  await test.step("mid term deletion endorsement", async () => {
    await syncroUaePage.midTermDeletionEndorsement(firsttabData["EndorsementDetails-012"].newEndorsementEffectiveDateField, firsttabData["EndorsementDetails-005"].addDependentIdNumberField);
  })

  await test.step("get policy number text and search policy number under managed policy", async () => {
    const policyNumberText = await syncroUaePage.getPolicyNumberText();
    await syncroUaePage.managedPolicySearch(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, policyNumberText);
  })

  await test.step("cancellation of contract", async () => {
    await syncroUaePage.cancellationOfContractFromInception(firsttabData["EndorsementDetails-005"].newEndorsementEffectiveDateField);
  })

  page.close();
});


//Group policy TCs from below line *****

//29 Group Policy with no subgroup having one dependent

test('SYNC-TC-4470: TC_001_TPA _Group Policy with No Subgroups (One Contract Group Policy)', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Group Policy Link", async () => {
    await syncroUaePage.clickOnGroupPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillGroupDetails(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentMethodDropdownSearchField, firsttabData["GroupDetails-013"].numberOfBeneficiaries);
  })

page.close();
});


//30 Group Policy with no subgroup having one dependent

test('SYNC-TC-4475: TC_001_TPA _Group Policy with No Subgroups (One Contract Group Policy)', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Group Policy Link", async () => {
    await syncroUaePage.clickOnGroupPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillGroupDetails(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentMethodDropdownSearchField, firsttabData["GroupDetails-013"].numberOfBeneficiaries);
  })

  await test.step("select two programs or plans", async () => {
    await syncroUaePage.silverAndGoldProductsSelection();
  })

page.close();
});


//31 Group Policy with no subgroup having one dependent

test('SYNC-TC-4485: TC_001_TPA _Group Policy with No Subgroups (One Contract Group Policy)', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Group Policy Link", async () => {
    await syncroUaePage.clickOnGroupPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillGroupDetails(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentMethodDropdownSearchField, firsttabData["GroupDetails-013"].numberOfBeneficiaries);
  })

  await test.step("select two programs or plans", async () => {
    await syncroUaePage.silverAndGoldProductsSelection();
  })

  await test.step("upload member details file", async () => {
    await syncroUaePage.grpUploadOneMemberDetailsFile();
  })

page.close();
});


//32 Group Policy with no subgroup having one dependent

test('SYNC-TC-4480: TC_001_TPA _Group Policy with No Subgroups (One Contract Group Policy)', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Group Policy Link", async () => {
    await syncroUaePage.clickOnGroupPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillGroupDetails(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentMethodDropdownSearchField, firsttabData["GroupDetails-013"].numberOfBeneficiaries);
  })

  await test.step("select two programs or plans", async () => {
    await syncroUaePage.silverAndGoldProductsSelection();
  })

  await test.step("upload member details file", async () => {
    await syncroUaePage.grpUploadOneMemberDetailsFile();
  })

  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillGroupFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })

page.close();
});


//33 Group Policy with no subgroup having one dependent

test('SYNC-TC-4490: TC_001_TPA _Group Policy with No Subgroups (One Contract Group Policy)', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Group Policy Link", async () => {
    await syncroUaePage.clickOnGroupPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillGroupDetails(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentMethodDropdownSearchField, firsttabData["GroupDetails-013"].numberOfBeneficiaries);
  })

  await test.step("select two programs or plans", async () => {
    await syncroUaePage.silverAndGoldProductsSelection();
  })

  await test.step("upload member details file", async () => {
    await syncroUaePage.grpUploadOneMemberDetailsFile();
  })

  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillGroupFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })

  await test.step("submission page validate policy", async () => {
    await syncroUaePage.submissionPageValidatePolicy();
  })

  await test.step("Endorsement details tab text validation", async () => {
    await syncroUaePage.verifyEndorsementDetailsTabText(firsttabData["EndorsementDetails-005"].endorsementDetailsTabText);
  })

page.close();
});


//34 Group Policy with no subgroup having one dependent

test('SYNC-TC-4502: TC_003_TPA _Group Policy with No Subgroups (One Contract Group Policy)', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Group Policy Link", async () => {
    await syncroUaePage.clickOnGroupPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillGroupDetails(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].paymentMethodDropdownSearchField, firsttabData["GroupDetails-013"].numberOfBeneficiaries);
  })

  await test.step("select two programs or plans", async () => {
    await syncroUaePage.silverAndGoldProductsSelection();
  })

  await test.step("upload member details file", async () => {
    await syncroUaePage.grpUploadOneMemberDetailsFile();
  })

  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillGroupFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })

  await test.step("submission page validate policy", async () => {
    await syncroUaePage.submissionPageValidatePolicy();
  })

  await test.step("Endorsement details tab text validation", async () => {
    await syncroUaePage.verifyEndorsementDetailsTabText(firsttabData["EndorsementDetails-005"].endorsementDetailsTabText);
  })


  await test.step("get policy number text and search policy number under managed policy", async () => {
    const policyNumberText = await syncroUaePage.getPolicyNumberText();
    await syncroUaePage.managedPolicySearch(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, policyNumberText);
  })


  await test.step("cancellation of contract", async () => {
    await syncroUaePage.grpCancellationOfContract(firsttabData["EndorsementDetails-005"].newEndorsementEffectiveDateField);
  })


page.close();
});


//35 Group Policy with no subgroup having three dependent

test('SYNC-TC-4471: TC_002_TPA_Group Policy Creation with 3 Dependents (Program Fixed Products with Payment Method Credit Card and Payment Frequency Bi-Annually)', async ({ page }) => {
  const syncroUaePage: SyncroUaePage = new SyncroUaePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await syncroUaePage.gotoLoginPage(firsttabData["Login-Access-001"].url); 
    
  })

   await test.step("Login to Syncro UAE application", async () => {
    await syncroUaePage.loginToApplication(firsttabData["Login-Access-001"].userNameInput, firsttabData["Login-Access-001"].passwordInput);
  })

  await test.step("Click on New Policy Icon", async () => {
    await syncroUaePage.clickOnNewPolicyIcon();
  })

  await test.step("Click on Group Policy Link", async () => {
    await syncroUaePage.clickOnGroupPolicyLink();
  })

  await test.step("Fill policy holder basic details", async () => {
    await syncroUaePage.fillGroupDetails(firsttabData["PolicyHolderBasicDetails-002"].payerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].distributorDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].policyHolderName, firsttabData["PolicyHolderBasicDetails-002"].effectiveDate, firsttabData["PolicyHolderBasicDetails-002"].countryDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].regionDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].healthAuthDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].programDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].producerDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].branchDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].currencyDropdownSearchField, firsttabData["PolicyHolderBasicDetails-002"].issuanceSourceDropdownSearchField, firsttabData["PolicyHolderBasicDetails-006"].paymentFreqDropdownSearchField, firsttabData["PolicyHolderBasicDetails-006"].paymentMethodDropdownSearchField, firsttabData["GroupDetails-014"].numberOfBeneficiaries);
  })

  
  await test.step("select two programs or plans", async () => {
    await syncroUaePage.silverAndGoldProductsSelection();
  })

  await test.step("upload member details file", async () => {
    await syncroUaePage.grpUploadThreeMemberDetailsFile();
  })

  await test.step("Fill the values in policy holder full details page", async () => {
    await syncroUaePage.fillGroupFullDetails(firsttabData["PolicyHolderFullDetails-004"].phfdEstablishmentCardNumber, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderEmail, firsttabData["PolicyHolderFullDetails-004"].phfdPolicyHolderMobileNumber, firsttabData["PolicyHolderFullDetails-004"].phfdRepresentativeName, firsttabData["PolicyHolderFullDetails-004"].phfdSubRegionDropdownSearch, firsttabData["PolicyHolderFullDetails-004"].phfdPoBoxNumber, firsttabData["PolicyHolderFullDetails-004"].phfdDetailedAddress);
  })

  await test.step("submission page validate policy", async () => {
    await syncroUaePage.submissionPageValidatePolicy();
  })

  await test.step("Endorsement details tab text validation", async () => {
    await syncroUaePage.verifyEndorsementDetailsTabText(firsttabData["EndorsementDetails-005"].endorsementDetailsTabText);
  })


page.close();
});

*/