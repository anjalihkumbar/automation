import { expect, test } from '@playwright/test';
import { ProtectPage } from '../../page-objects/protect-pages/first-page.ts';
const firsttabData = require(`../../testdata/${process.env.ENV || 'data_test_eu'}/protect.json`) as Record<string, any>;

import '../../page-objects/utilities-pages/global-setup.ts';
// import { syncData } from '../student-tests/student.spec.ts';
import { SyncroEUPage } from '../../page-objects/syncroEU-pages/first-page.ts';

export const syncData = require(`../../testdata/${process.env.ENV || 'data_test_eu'}/syncroeu.json`) as Record<string, any>;

//1

test('NXGS-TC-5167: TC_001_Protect_1_Validate UI fields displays when Protect policy selected', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-001"].url);
    
  })

   await test.step("Verified first tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-001"].expectedPageTitle);
  })

  await test.step("Verified text on first tab as 'Application for MAWISTA Reisecare'", async () => {
    await protectPage.verifyAplicationFirstTabText(firsttabData["protect-001"].applicationText);

  })

  await test.step("Verified  text on first tab as ' Policyholder's details '", async () => {
    await protectPage.verifyPolicbyholderdetailsFirstTaext(firsttabData["protect-001"].policyholderText);

  })
  
  await test.step("Verified text on first tab as '  Are you the insured person? '", async () => {
    await protectPage.verifyAreyouinsuredpersonFirstText(firsttabData["protect-001"].areyouinsuredpersonText);

  })

  await test.step("Verified text on first tab as '   Enter your date of birth and gender  '", async () => {
    await protectPage.verifyEnteryourdateofbirthFirstText(firsttabData["protect-001"].enterdateofbirthText);

  })

  await test.step("Verified Next button visible and clickable on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-001"].secondtabNextButton);

  })

page.close();
});

//2

test('NXGS-TC-5168: TC_002_Protect_1_Validate for protect program, saving valid details in policy holder details, policy holder address in Germany, Are you insured details with insured person details', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-002"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-002"].firstNameInput, firsttabData["protect-002"].lastNameInput,firsttabData["protect-002"].passportInput,firsttabData["protect-002"].mobileNumbercodeInput,firsttabData["protect-002"].mobileNumberInput,firsttabData["protect-002"].emailInput,firsttabData["protect-002"].streetNameInput,firsttabData["protect-002"].streetNumberInput,firsttabData["protect-002"].postalCodeInput,firsttabData["protect-002"].additionalAddressInput,firsttabData["protect-002"].cityInput,firsttabData["protect-002"].dayInput,firsttabData["protect-002"].monthInput,firsttabData["protect-002"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })

    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-002"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-002"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-002"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-002"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-002"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-002"].secondtabPreviousButton);

  })
page.close();
});

//3
test('NXGS-TC-5169: TC_003_Protect_1_Validate in policy holder details field, able to give valid passport number in passport field', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-003"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-002"].firstNameInput, firsttabData["protect-002"].lastNameInput,firsttabData["protect-002"].passportInput,firsttabData["protect-002"].mobileNumbercodeInput,firsttabData["protect-002"].mobileNumberInput,firsttabData["protect-002"].emailInput,firsttabData["protect-002"].streetNameInput,firsttabData["protect-002"].streetNumberInput,firsttabData["protect-002"].postalCodeInput,firsttabData["protect-002"].additionalAddressInput,firsttabData["protect-002"].cityInput,firsttabData["protect-002"].dayInput,firsttabData["protect-002"].monthInput,firsttabData["protect-002"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-003"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-003"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-003"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-003"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-003"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-003"].secondtabPreviousButton);

  })
page.close();
});

//4
test('NXGS-TC-5170: TC_004_Protect_1_Validate in policy holder details field, able to select any country name from home country field', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-004"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-004"].firstNameInput, firsttabData["protect-004"].lastNameInput,firsttabData["protect-004"].passportInput,firsttabData["protect-004"].mobileNumbercodeInput,firsttabData["protect-004"].mobileNumberInput,firsttabData["protect-004"].emailInput,firsttabData["protect-004"].streetNameInput,firsttabData["protect-004"].streetNumberInput,firsttabData["protect-004"].postalCodeInput,firsttabData["protect-004"].additionalAddressInput,firsttabData["protect-004"].cityInput,firsttabData["protect-004"].dayInput,firsttabData["protect-004"].monthInput,firsttabData["protect-004"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-004"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-004"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-004"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-004"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-004"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-004"].secondtabPreviousButton);

  })
page.close();
});

//5
test('NXGS-TC-5171: TC_005_Protect_1_Validate in policy holder details field, able to give valid mobile number in mobile number field', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-005"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-005"].firstNameInput, firsttabData["protect-005"].lastNameInput,firsttabData["protect-005"].passportInput,firsttabData["protect-005"].mobileNumbercodeInput,firsttabData["protect-005"].mobileNumberInput,firsttabData["protect-005"].emailInput,firsttabData["protect-005"].streetNameInput,firsttabData["protect-005"].streetNumberInput,firsttabData["protect-005"].postalCodeInput,firsttabData["protect-005"].additionalAddressInput,firsttabData["protect-005"].cityInput,firsttabData["protect-005"].dayInput,firsttabData["protect-005"].monthInput,firsttabData["protect-005"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-005"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-005"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-005"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-005"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-005"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-005"].secondtabPreviousButton);

  })

page.close();
});

//6
test('NXGS-TC-5172: TC_006_Protect_1_Validate in policy holder details field, able to give valid email in email field', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-006"].firstNameInput, firsttabData["protect-006"].lastNameInput,firsttabData["protect-006"].passportInput,firsttabData["protect-006"].mobileNumbercodeInput,firsttabData["protect-006"].mobileNumberInput,firsttabData["protect-006"].emailInput,firsttabData["protect-006"].streetNameInput,firsttabData["protect-006"].streetNumberInput,firsttabData["protect-006"].postalCodeInput,firsttabData["protect-006"].additionalAddressInput,firsttabData["protect-006"].cityInput,firsttabData["protect-006"].dayInput,firsttabData["protect-006"].monthInput,firsttabData["protect-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-006"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-006"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-006"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-006"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-006"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-006"].secondtabPreviousButton);

  })
  
page.close();
});

//7
test('NXGS-TC-5173: TC_007_Protect_1_Validate saving with only mandatory fields details in policy holder details, policy holder address in Germany, Are you insured details with insured person details', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-007"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-007"].firstNameInput, firsttabData["protect-007"].lastNameInput,firsttabData["protect-007"].passportInput,firsttabData["protect-007"].mobileNumbercodeInput,firsttabData["protect-007"].mobileNumberInput,firsttabData["protect-007"].emailInput,firsttabData["protect-007"].streetNameInput,firsttabData["protect-007"].streetNumberInput,firsttabData["protect-007"].postalCodeInput,firsttabData["protect-007"].additionalAddressInput,firsttabData["protect-007"].cityInput,firsttabData["protect-007"].dayInput,firsttabData["protect-007"].monthInput,firsttabData["protect-007"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-007"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-007"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-007"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-007"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-007"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-007"].secondtabPreviousButton);

  })
page.close();
});

//8
test('NXGS-TC-5174: TC_008_Protect_1_Validate able to give valid postal code in "Policyholder address in Germany" section', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-008"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-008"].firstNameInput, firsttabData["protect-008"].lastNameInput,firsttabData["protect-008"].passportInput,firsttabData["protect-008"].mobileNumbercodeInput,firsttabData["protect-008"].mobileNumberInput,firsttabData["protect-008"].emailInput,firsttabData["protect-008"].streetNameInput,firsttabData["protect-008"].streetNumberInput,firsttabData["protect-008"].postalCodeInput,firsttabData["protect-008"].additionalAddressInput,firsttabData["protect-008"].cityInput,firsttabData["protect-008"].dayInput,firsttabData["protect-008"].monthInput,firsttabData["protect-008"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-008"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-008"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-008"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-008"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-008"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-008"].secondtabPreviousButton);

  })
page.close();
});

//9
test('NXGS-TC-5175: TC_009_Protect_1_Validate as per germany selected, postal code is validated in "policy address in Germany" section', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-009"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-009"].firstNameInput, firsttabData["protect-009"].lastNameInput,firsttabData["protect-009"].passportInput,firsttabData["protect-009"].mobileNumbercodeInput,firsttabData["protect-009"].mobileNumberInput,firsttabData["protect-009"].emailInput,firsttabData["protect-009"].streetNameInput,firsttabData["protect-009"].streetNumberInput,firsttabData["protect-009"].postalCodeInput,firsttabData["protect-009"].additionalAddressInput,firsttabData["protect-009"].cityInput,firsttabData["protect-009"].dayInput,firsttabData["protect-009"].monthInput,firsttabData["protect-009"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-009"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-009"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-009"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-009"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-009"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-009"].secondtabPreviousButton);

  })
page.close();
});

//10
test('NXGS-TC-5176: TC_010_Protect_1_Validate in policy holder details field, user is able to give alphabetic character text in first name field', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-010"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-010"].firstNameInput, firsttabData["protect-010"].lastNameInput,firsttabData["protect-010"].passportInput,firsttabData["protect-010"].mobileNumbercodeInput,firsttabData["protect-010"].mobileNumberInput,firsttabData["protect-010"].emailInput,firsttabData["protect-010"].streetNameInput,firsttabData["protect-010"].streetNumberInput,firsttabData["protect-010"].postalCodeInput,firsttabData["protect-010"].additionalAddressInput,firsttabData["protect-010"].cityInput,firsttabData["protect-010"].dayInput,firsttabData["protect-010"].monthInput,firsttabData["protect-010"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-010"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-010"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-010"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-010"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-010"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-010"].secondtabPreviousButton);

  })
page.close();
});

//11
test('NXGS-TC-5177: TC_11_Protect_1_Validate in policy holder details field, able to give alphabetic text in last name field', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
 
 await test.step("Load the URL in Browser", async () => {
   await protectPage.gotoHomePage(firsttabData["protect-010"].url);
   
 })

 await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
   await protectPage.protectFirstTab(firsttabData["protect-010"].firstNameInput, firsttabData["protect-010"].lastNameInput,firsttabData["protect-010"].passportInput,firsttabData["protect-010"].mobileNumbercodeInput,firsttabData["protect-010"].mobileNumberInput,firsttabData["protect-010"].emailInput,firsttabData["protect-010"].streetNameInput,firsttabData["protect-010"].streetNumberInput,firsttabData["protect-010"].postalCodeInput,firsttabData["protect-010"].additionalAddressInput,firsttabData["protect-010"].cityInput,firsttabData["protect-010"].dayInput,firsttabData["protect-010"].monthInput,firsttabData["protect-010"].yearInput);
 })

 await test.step("Click on First Tab Next Button ", async () => {
   await protectPage.clickOnFirstTabNextButton();
 })
   
 await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
   await protectPage.verifyPageTitle(firsttabData["protect-010"].expectedPageTitle);
 })

 await test.step("Verified text on second tab 'Additional insured person'", async () => {
   await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-010"].additionalinsuredPersonText);

 })

 await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
   await protectPage.verifynoteText(firsttabData["protect-010"].noteText);

 })
 
 await test.step("Verified Add another insured person button visible on second tab", async () => {
   await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-010"].addadditionalinsuredpersonText);

 })

 await test.step("Verified Next button visible on second tab", async () => {
   await protectPage.verifysecondtabNextButton(firsttabData["protect-010"].secondtabNextButton);

 })

 await test.step("Verified Previous button visible on second tab", async () => {
   await protectPage.verifysecondtabPreviousButton(firsttabData["protect-010"].secondtabPreviousButton);

 })
page.close();
});

//12
test('NXGS-TC-5178: TC_012_Protect_1_Validate in insured person details field, user is able to give alphabetic character text in first name field', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-010"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-010"].firstNameInput, firsttabData["protect-010"].lastNameInput,firsttabData["protect-010"].passportInput,firsttabData["protect-010"].mobileNumbercodeInput,firsttabData["protect-010"].mobileNumberInput,firsttabData["protect-010"].emailInput,firsttabData["protect-010"].streetNameInput,firsttabData["protect-010"].streetNumberInput,firsttabData["protect-010"].postalCodeInput,firsttabData["protect-010"].additionalAddressInput,firsttabData["protect-010"].cityInput,firsttabData["protect-010"].dayInput,firsttabData["protect-010"].monthInput,firsttabData["protect-010"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await protectPage.protectinsuredpersonsdetailsFirstTab(firsttabData["protect-010"].firstNameInput, firsttabData["protect-010"].lastNameInput,firsttabData["protect-010"].passportInput,firsttabData["protect-010"].mobileNumbercodeInput,firsttabData["protect-010"].mobileNumberInput,firsttabData["protect-010"].emailInput,firsttabData["protect-010"].streetNameInput,firsttabData["protect-010"].streetNumberInput,firsttabData["protect-010"].postalCodeInput,firsttabData["protect-010"].additionalAddressInput,firsttabData["protect-010"].cityInput,firsttabData["protect-010"].dayInput,firsttabData["protect-010"].monthInput,firsttabData["protect-010"].yearInput);
  })


  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-010"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-010"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-010"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-010"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-010"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-010"].secondtabPreviousButton);

  })
page.close();
});

//13
test('NXGS-TC-5179: TC_013_Protect_1_Validate in insured person details field, able to give alphabetic text in last name field', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-013"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-013"].firstNameInput, firsttabData["protect-013"].lastNameInput,firsttabData["protect-013"].passportInput,firsttabData["protect-013"].mobileNumbercodeInput,firsttabData["protect-013"].mobileNumberInput,firsttabData["protect-013"].emailInput,firsttabData["protect-013"].streetNameInput,firsttabData["protect-013"].streetNumberInput,firsttabData["protect-013"].postalCodeInput,firsttabData["protect-013"].additionalAddressInput,firsttabData["protect-013"].cityInput,firsttabData["protect-013"].dayInput,firsttabData["protect-013"].monthInput,firsttabData["protect-013"].yearInput);
  })

  await test.step("Enter insured person details  ", async () => {
    await protectPage.protectinsuredpersonsdetailsFirstTab(firsttabData["protect-013"].firstNameInput, firsttabData["protect-013"].lastNameInput,firsttabData["protect-013"].passportInput,firsttabData["protect-013"].mobileNumbercodeInput,firsttabData["protect-013"].mobileNumberInput,firsttabData["protect-013"].emailInput,firsttabData["protect-013"].streetNameInput,firsttabData["protect-013"].streetNumberInput,firsttabData["protect-013"].postalCodeInput,firsttabData["protect-013"].additionalAddressInput,firsttabData["protect-013"].cityInput,firsttabData["protect-013"].dayInput,firsttabData["protect-013"].monthInput,firsttabData["protect-010"].yearInput);
  })


  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-013"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-013"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-013"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-013"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-013"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-013"].secondtabPreviousButton);

  })
page.close();
});

//14
test('NXGS-TC-5180: TC_014_Protect_1_Validate in policy holder details field, user is able to give 3 minimum length of alphabetic character text in first name field', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-014"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-014"].firstNameInput, firsttabData["protect-014"].lastNameInput,firsttabData["protect-014"].passportInput,firsttabData["protect-014"].mobileNumbercodeInput,firsttabData["protect-014"].mobileNumberInput,firsttabData["protect-014"].emailInput,firsttabData["protect-014"].streetNameInput,firsttabData["protect-014"].streetNumberInput,firsttabData["protect-014"].postalCodeInput,firsttabData["protect-014"].additionalAddressInput,firsttabData["protect-014"].cityInput,firsttabData["protect-014"].dayInput,firsttabData["protect-014"].monthInput,firsttabData["protect-014"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-014"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-014"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-014"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-014"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-014"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-014"].secondtabPreviousButton);

  })
page.close();
});

//15
test('NXGS-TC-5181: TC_15_Protect_1_Validate in policy holder details field, able to give 3 minimum length of alphabetic character text in last name field', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
 
 await test.step("Load the URL in Browser", async () => {
   await protectPage.gotoHomePage(firsttabData["protect-014"].url);
   
 })

 await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
   await protectPage.protectFirstTab(firsttabData["protect-014"].firstNameInput, firsttabData["protect-014"].lastNameInput,firsttabData["protect-014"].passportInput,firsttabData["protect-014"].mobileNumbercodeInput,firsttabData["protect-014"].mobileNumberInput,firsttabData["protect-014"].emailInput,firsttabData["protect-014"].streetNameInput,firsttabData["protect-014"].streetNumberInput,firsttabData["protect-014"].postalCodeInput,firsttabData["protect-014"].additionalAddressInput,firsttabData["protect-014"].cityInput,firsttabData["protect-014"].dayInput,firsttabData["protect-014"].monthInput,firsttabData["protect-014"].yearInput);
 })

 await test.step("Click on First Tab Next Button ", async () => {
   await protectPage.clickOnFirstTabNextButton();
 })
   
 await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
   await protectPage.verifyPageTitle(firsttabData["protect-014"].expectedPageTitle);
 })

 await test.step("Verified text on second tab 'Additional insured person'", async () => {
   await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-014"].additionalinsuredPersonText);

 })

 await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
   await protectPage.verifynoteText(firsttabData["protect-014"].noteText);

 })
 
 await test.step("Verified Add another insured person button visible on second tab", async () => {
   await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-014"].addadditionalinsuredpersonText);

 })

 await test.step("Verified Next button visible on second tab", async () => {
   await protectPage.verifysecondtabNextButton(firsttabData["protect-014"].secondtabNextButton);

 })

 await test.step("Verified Previous button visible on second tab", async () => {
   await protectPage.verifysecondtabPreviousButton(firsttabData["protect-014"].secondtabPreviousButton);

 })
page.close();
});

//16
test('NXGS-TC-5182: TC_016_Protect_1_Validate in insured person details field, user is able to give minimum 3 alphabetic character text in first name field', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-016"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-016"].firstNameInput, firsttabData["protect-016"].lastNameInput,firsttabData["protect-016"].passportInput,firsttabData["protect-016"].mobileNumbercodeInput,firsttabData["protect-016"].mobileNumberInput,firsttabData["protect-016"].emailInput,firsttabData["protect-016"].streetNameInput,firsttabData["protect-016"].streetNumberInput,firsttabData["protect-016"].postalCodeInput,firsttabData["protect-016"].additionalAddressInput,firsttabData["protect-016"].cityInput,firsttabData["protect-016"].dayInput,firsttabData["protect-016"].monthInput,firsttabData["protect-016"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await protectPage.protectinsuredpersonsdetailsFirstTab(firsttabData["protect-016"].firstNameInput, firsttabData["protect-016"].lastNameInput,firsttabData["protect-016"].passportInput,firsttabData["protect-016"].mobileNumbercodeInput,firsttabData["protect-016"].mobileNumberInput,firsttabData["protect-016"].emailInput,firsttabData["protect-016"].streetNameInput,firsttabData["protect-016"].streetNumberInput,firsttabData["protect-016"].postalCodeInput,firsttabData["protect-016"].additionalAddressInput,firsttabData["protect-016"].cityInput,firsttabData["protect-016"].dayInput,firsttabData["protect-016"].monthInput,firsttabData["protect-016"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-016"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-016"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-016"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-016"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-016"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-016"].secondtabPreviousButton);

  })
page.close();
});

//17
test('NXGS-TC-5183: TC_017_Protect_1_Validate in insured person details field, able to give minimum 3 alphabetic text in last name field', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-017"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-017"].firstNameInput, firsttabData["protect-017"].lastNameInput,firsttabData["protect-017"].passportInput,firsttabData["protect-017"].mobileNumbercodeInput,firsttabData["protect-017"].mobileNumberInput,firsttabData["protect-017"].emailInput,firsttabData["protect-017"].streetNameInput,firsttabData["protect-017"].streetNumberInput,firsttabData["protect-017"].postalCodeInput,firsttabData["protect-017"].additionalAddressInput,firsttabData["protect-017"].cityInput,firsttabData["protect-017"].dayInput,firsttabData["protect-017"].monthInput,firsttabData["protect-017"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await protectPage.protectinsuredpersonsdetailsFirstTab(firsttabData["protect-017"].firstNameInput, firsttabData["protect-017"].lastNameInput,firsttabData["protect-017"].passportInput,firsttabData["protect-017"].mobileNumbercodeInput,firsttabData["protect-017"].mobileNumberInput,firsttabData["protect-017"].emailInput,firsttabData["protect-017"].streetNameInput,firsttabData["protect-017"].streetNumberInput,firsttabData["protect-017"].postalCodeInput,firsttabData["protect-017"].additionalAddressInput,firsttabData["protect-017"].cityInput,firsttabData["protect-017"].dayInput,firsttabData["protect-017"].monthInput,firsttabData["protect-017"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-017"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-017"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-017"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-017"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-017"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-017"].secondtabPreviousButton);

  })
page.close();
});

//18
test('NXGS-TC-5184: TC_018_Protect_1_Validate in policy holder details field, user is able to give 60 maximum length of alphabetic character text in first name field', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-018"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-018"].firstNameInput, firsttabData["protect-018"].lastNameInput,firsttabData["protect-018"].passportInput,firsttabData["protect-018"].mobileNumbercodeInput,firsttabData["protect-018"].mobileNumberInput,firsttabData["protect-018"].emailInput,firsttabData["protect-018"].streetNameInput,firsttabData["protect-018"].streetNumberInput,firsttabData["protect-018"].postalCodeInput,firsttabData["protect-018"].additionalAddressInput,firsttabData["protect-018"].cityInput,firsttabData["protect-018"].dayInput,firsttabData["protect-018"].monthInput,firsttabData["protect-018"].yearInput);
  })


  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await protectPage.verifyFirstnameonfirsttabfillederrorText(firsttabData["protect-020"].firstnameErrormsg);
  })
page.close();
});

//19
test('NXGS-TC-5185: TC_019_Protect_1_Validate in policy holder details field, able to give 60 maximum length of alphabetic character text in last name field', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-019"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-019"].firstNameInput, firsttabData["protect-019"].lastNameInput,firsttabData["protect-019"].passportInput,firsttabData["protect-019"].mobileNumbercodeInput,firsttabData["protect-019"].mobileNumberInput,firsttabData["protect-019"].emailInput,firsttabData["protect-019"].streetNameInput,firsttabData["protect-019"].streetNumberInput,firsttabData["protect-019"].postalCodeInput,firsttabData["protect-019"].additionalAddressInput,firsttabData["protect-019"].cityInput,firsttabData["protect-019"].dayInput,firsttabData["protect-019"].monthInput,firsttabData["protect-019"].yearInput);
  })


  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await protectPage.verifylastnameonfirsttabfillederrorText(firsttabData["protect-019"].lastnameErrormsg);
  })  
page.close();
});

//20
test('NXGS-TC-5186: TC_020_Protect_1_Validate in insured person details field, user is able to give maximum 60 alphabetic character text in first name field', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-020"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-020"].firstNameInput, firsttabData["protect-020"].lastNameInput,firsttabData["protect-020"].passportInput,firsttabData["protect-020"].mobileNumbercodeInput,firsttabData["protect-020"].mobileNumberInput,firsttabData["protect-020"].emailInput,firsttabData["protect-020"].streetNameInput,firsttabData["protect-020"].streetNumberInput,firsttabData["protect-020"].postalCodeInput,firsttabData["protect-020"].additionalAddressInput,firsttabData["protect-020"].cityInput,firsttabData["protect-020"].dayInput,firsttabData["protect-020"].monthInput,firsttabData["protect-020"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await protectPage.protectinsuredpersonsdetailsFirstTab(firsttabData["protect-020"].firstNameInput, firsttabData["protect-020"].lastNameInput,firsttabData["protect-020"].passportInput,firsttabData["protect-020"].mobileNumbercodeInput,firsttabData["protect-020"].mobileNumberInput,firsttabData["protect-020"].emailInput,firsttabData["protect-020"].streetNameInput,firsttabData["protect-020"].streetNumberInput,firsttabData["protect-020"].postalCodeInput,firsttabData["protect-020"].additionalAddressInput,firsttabData["protect-020"].cityInput,firsttabData["protect-020"].dayInput,firsttabData["protect-020"].monthInput,firsttabData["protect-020"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await protectPage.verifyFirstnameonfirsttabfillederrorText(firsttabData["protect-020"].firstnameErrormsg);
  })
page.close();
});

//21
test('NXGS-TC-5187: TC_021_Protect_1_Validate in insured person details field, able to give maximum 60 alphabetic text in last name field', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-021"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-021"].firstNameInput, firsttabData["protect-021"].lastNameInput,firsttabData["protect-021"].passportInput,firsttabData["protect-021"].mobileNumbercodeInput,firsttabData["protect-021"].mobileNumberInput,firsttabData["protect-021"].emailInput,firsttabData["protect-021"].streetNameInput,firsttabData["protect-021"].streetNumberInput,firsttabData["protect-021"].postalCodeInput,firsttabData["protect-021"].additionalAddressInput,firsttabData["protect-021"].cityInput,firsttabData["protect-021"].dayInput,firsttabData["protect-021"].monthInput,firsttabData["protect-021"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await protectPage.protectinsuredpersonsdetailsFirstTab(firsttabData["protect-021"].firstNameInput, firsttabData["protect-021"].lastNameInput,firsttabData["protect-021"].passportInput,firsttabData["protect-021"].mobileNumbercodeInput,firsttabData["protect-021"].mobileNumberInput,firsttabData["protect-021"].emailInput,firsttabData["protect-021"].streetNameInput,firsttabData["protect-021"].streetNumberInput,firsttabData["protect-021"].postalCodeInput,firsttabData["protect-021"].additionalAddressInput,firsttabData["protect-021"].cityInput,firsttabData["protect-021"].dayInput,firsttabData["protect-021"].monthInput,firsttabData["protect-021"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
  
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await protectPage.verifylastnameonfirsttabfillederrorText(firsttabData["protect-019"].lastnameErrormsg);
  })  
page.close();
});

//22
test('NXGS-TC-5188: TC_022_Protect_1_Validate saving valid details in policy holder details', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-022"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-022"].firstNameInput, firsttabData["protect-022"].lastNameInput,firsttabData["protect-022"].passportInput,firsttabData["protect-022"].mobileNumbercodeInput,firsttabData["protect-022"].mobileNumberInput,firsttabData["protect-022"].emailInput,firsttabData["protect-022"].streetNameInput,firsttabData["protect-022"].streetNumberInput,firsttabData["protect-022"].postalCodeInput,firsttabData["protect-022"].additionalAddressInput,firsttabData["protect-022"].cityInput,firsttabData["protect-022"].dayInput,firsttabData["protect-022"].monthInput,firsttabData["protect-022"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-022"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-022"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-022"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-022"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-022"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-022"].secondtabPreviousButton);

  })
page.close();
});

//23
test('NXGS-TC-5189: TC_023_Protect_1_Validate saving valid details in policy holder address in Germany section', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-023"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-023"].firstNameInput, firsttabData["protect-023"].lastNameInput,firsttabData["protect-023"].passportInput,firsttabData["protect-023"].mobileNumbercodeInput,firsttabData["protect-023"].mobileNumberInput,firsttabData["protect-023"].emailInput,firsttabData["protect-023"].streetNameInput,firsttabData["protect-023"].streetNumberInput,firsttabData["protect-023"].postalCodeInput,firsttabData["protect-023"].additionalAddressInput,firsttabData["protect-023"].cityInput,firsttabData["protect-023"].dayInput,firsttabData["protect-023"].monthInput,firsttabData["protect-023"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-023"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-023"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-023"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-023"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-023"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-023"].secondtabPreviousButton);

  })
page.close();
});

//24
test('NXGS-TC-5190: TC_024_Protect_1_Validate saving details with insured person details', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-024"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-024"].firstNameInput, firsttabData["protect-024"].lastNameInput,firsttabData["protect-024"].passportInput,firsttabData["protect-024"].mobileNumbercodeInput,firsttabData["protect-024"].mobileNumberInput,firsttabData["protect-024"].emailInput,firsttabData["protect-024"].streetNameInput,firsttabData["protect-024"].streetNumberInput,firsttabData["protect-024"].postalCodeInput,firsttabData["protect-024"].additionalAddressInput,firsttabData["protect-024"].cityInput,firsttabData["protect-024"].dayInput,firsttabData["protect-024"].monthInput,firsttabData["protect-024"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await protectPage.protectinsuredpersonsdetailsFirstTab(firsttabData["protect-024"].firstNameInput, firsttabData["protect-024"].lastNameInput,firsttabData["protect-024"].passportInput,firsttabData["protect-024"].mobileNumbercodeInput,firsttabData["protect-024"].mobileNumberInput,firsttabData["protect-024"].emailInput,firsttabData["protect-024"].streetNameInput,firsttabData["protect-024"].streetNumberInput,firsttabData["protect-024"].postalCodeInput,firsttabData["protect-024"].additionalAddressInput,firsttabData["protect-024"].cityInput,firsttabData["protect-024"].dayInput,firsttabData["protect-024"].monthInput,firsttabData["protect-024"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-024"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-024"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-024"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-024"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-024"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-024"].secondtabPreviousButton);

  })
page.close();
});

//25
test('NXGS-TC-5191: TC_025_Protect_1_Validate able to give any alphanumeric character length text in street name field of "Policyholder address in Germany" section', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-025"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-025"].firstNameInput, firsttabData["protect-025"].lastNameInput,firsttabData["protect-025"].passportInput,firsttabData["protect-025"].mobileNumbercodeInput,firsttabData["protect-025"].mobileNumberInput,firsttabData["protect-025"].emailInput,firsttabData["protect-025"].streetNameInput,firsttabData["protect-025"].streetNumberInput,firsttabData["protect-025"].postalCodeInput,firsttabData["protect-025"].additionalAddressInput,firsttabData["protect-025"].cityInput,firsttabData["protect-025"].dayInput,firsttabData["protect-025"].monthInput,firsttabData["protect-025"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-025"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-025"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-025"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-025"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-025"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-025"].secondtabPreviousButton);

  })
page.close();
});

//26
test('NXGS-TC-5192: TC_026_Protect_1_Validate able to give any alphanumeric character length text in street number field of "Policyholder address in Germany" section', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-026"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-026"].firstNameInput, firsttabData["protect-026"].lastNameInput,firsttabData["protect-026"].passportInput,firsttabData["protect-026"].mobileNumbercodeInput,firsttabData["protect-026"].mobileNumberInput,firsttabData["protect-026"].emailInput,firsttabData["protect-026"].streetNameInput,firsttabData["protect-026"].streetNumberInput,firsttabData["protect-026"].postalCodeInput,firsttabData["protect-026"].additionalAddressInput,firsttabData["protect-026"].cityInput,firsttabData["protect-026"].dayInput,firsttabData["protect-026"].monthInput,firsttabData["protect-026"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-026"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-026"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-026"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-026"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-026"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-026"].secondtabPreviousButton);

  })
page.close();
});

//27
test('NXGS-TC-5193: TC_027_Protect_1_Validate able to give any city name in city text field of policy holder address in Germany section', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-027"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-027"].firstNameInput, firsttabData["protect-027"].lastNameInput,firsttabData["protect-027"].passportInput,firsttabData["protect-027"].mobileNumbercodeInput,firsttabData["protect-027"].mobileNumberInput,firsttabData["protect-027"].emailInput,firsttabData["protect-027"].streetNameInput,firsttabData["protect-027"].streetNumberInput,firsttabData["protect-027"].postalCodeInput,firsttabData["protect-027"].additionalAddressInput,firsttabData["protect-027"].cityInput,firsttabData["protect-027"].dayInput,firsttabData["protect-027"].monthInput,firsttabData["protect-027"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-027"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-027"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-027"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-027"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-027"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-027"].secondtabPreviousButton);

  })
page.close();
});

//28
test('NXGS-TC-5194: TC_028_Protect_1_Validate Germany displays in country field of Policy holder address in Germany section', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-028"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-028"].firstNameInput, firsttabData["protect-028"].lastNameInput,firsttabData["protect-028"].passportInput,firsttabData["protect-028"].mobileNumbercodeInput,firsttabData["protect-028"].mobileNumberInput,firsttabData["protect-028"].emailInput,firsttabData["protect-028"].streetNameInput,firsttabData["protect-028"].streetNumberInput,firsttabData["protect-028"].postalCodeInput,firsttabData["protect-028"].additionalAddressInput,firsttabData["protect-028"].cityInput,firsttabData["protect-028"].dayInput,firsttabData["protect-028"].monthInput,firsttabData["protect-028"].yearInput);
  })
 
  await test.step("Verified  Germany displays in country field of Policy holder address in Germany section'", async () => {
    await protectPage.verifyGermanyText(firsttabData["protect-028"].germanyText);

  })

page.close();
});

//29
test('NXGS-TC-5195: TC_029_Protect_1_Validate able to give any date in date of birth field', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-029"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-029"].firstNameInput, firsttabData["protect-029"].lastNameInput,firsttabData["protect-029"].passportInput,firsttabData["protect-029"].mobileNumbercodeInput,firsttabData["protect-029"].mobileNumberInput,firsttabData["protect-029"].emailInput,firsttabData["protect-029"].streetNameInput,firsttabData["protect-029"].streetNumberInput,firsttabData["protect-029"].postalCodeInput,firsttabData["protect-029"].additionalAddressInput,firsttabData["protect-029"].cityInput,firsttabData["protect-029"].dayInput,firsttabData["protect-029"].monthInput,firsttabData["protect-029"].yearInput);
  })
 
  
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-029"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-029"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-029"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-029"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-029"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-029"].secondtabPreviousButton);

  })
page.close();
});


//30
test('NXGS-TC-5196: TC_030_Protect_1_Validate able to create protect policy with policy holder details with insured member details', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-030"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-030"].firstNameInput, firsttabData["protect-030"].lastNameInput,firsttabData["protect-030"].passportInput,firsttabData["protect-030"].mobileNumbercodeInput,firsttabData["protect-030"].mobileNumberInput,firsttabData["protect-030"].emailInput,firsttabData["protect-030"].streetNameInput,firsttabData["protect-030"].streetNumberInput,firsttabData["protect-030"].postalCodeInput,firsttabData["protect-030"].additionalAddressInput,firsttabData["protect-030"].cityInput,firsttabData["protect-030"].dayInput,firsttabData["protect-030"].monthInput,firsttabData["protect-030"].yearInput);
  })
 
  await test.step("Enter the insured person details", async () => {
    await protectPage.protectinsuredpersonsdetailsFirstTab(firsttabData["protect-030"].firstNameInput, firsttabData["protect-030"].lastNameInput,firsttabData["protect-030"].passportInput,firsttabData["protect-030"].mobileNumbercodeInput,firsttabData["protect-030"].mobileNumberInput,firsttabData["protect-030"].emailInput,firsttabData["protect-030"].streetNameInput,firsttabData["protect-030"].streetNumberInput,firsttabData["protect-030"].postalCodeInput,firsttabData["protect-030"].additionalAddressInput,firsttabData["protect-030"].cityInput,firsttabData["protect-030"].dayInput,firsttabData["protect-030"].monthInput,firsttabData["protect-030"].yearInput);
  })
  
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-030"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-030"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-030"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-030"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-030"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-030"].secondtabPreviousButton);

  })
page.close();
});

//31
test('NXGS-TC-5197: TC_031_Protect_1_Validate in policy holder details field, user is not able to give alphanumeric text in first name field', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-031"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-031"].firstNameInput, firsttabData["protect-031"].lastNameInput,firsttabData["protect-031"].passportInput,firsttabData["protect-031"].mobileNumbercodeInput,firsttabData["protect-031"].mobileNumberInput,firsttabData["protect-031"].emailInput,firsttabData["protect-031"].streetNameInput,firsttabData["protect-031"].streetNumberInput,firsttabData["protect-031"].postalCodeInput,firsttabData["protect-031"].additionalAddressInput,firsttabData["protect-031"].cityInput,firsttabData["protect-031"].dayInput,firsttabData["protect-031"].monthInput,firsttabData["protect-031"].yearInput);
  })
 
  
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-031"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-031"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-031"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-031"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-031"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-031"].secondtabPreviousButton);

  })
page.close();
});


//32
test('NXGS-TC-5198: TC_032_Protect_1_Validate in policy holder details field, user is not able to give alphanumeric text in last name field', async ({ page }) => {
   const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-032"].url);
   
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-032"].firstNameInput, firsttabData["protect-032"].lastNameInput,firsttabData["protect-032"].passportInput,firsttabData["protect-032"].mobileNumbercodeInput,firsttabData["protect-032"].mobileNumberInput,firsttabData["protect-032"].emailInput,firsttabData["protect-032"].streetNameInput,firsttabData["protect-032"].streetNumberInput,firsttabData["protect-032"].postalCodeInput,firsttabData["protect-032"].additionalAddressInput,firsttabData["protect-032"].cityInput,firsttabData["protect-032"].dayInput,firsttabData["protect-032"].monthInput,firsttabData["protect-032"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-032"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-032"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-032"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-032"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-032"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-032"].secondtabPreviousButton);

  })
page.close();
});

//33
test('NXGS-TC-5199: TC_033_Protect_1_Validate blank in  policy holder details, policy holder address in Germany, Are you insured details with insured person details, click on next button', async ({ page }) => {
 const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-033"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-033"].firstNameInput, firsttabData["protect-033"].lastNameInput,firsttabData["protect-033"].passportInput,firsttabData["protect-033"].mobileNumbercodeInput,firsttabData["protect-033"].mobileNumberInput,firsttabData["protect-033"].emailInput,firsttabData["protect-033"].streetNameInput,firsttabData["protect-033"].streetNumberInput,firsttabData["protect-033"].postalCodeInput,firsttabData["protect-033"].additionalAddressInput,firsttabData["protect-033"].cityInput,firsttabData["protect-033"].dayInput,firsttabData["protect-033"].monthInput,firsttabData["protect-033"].yearInput);
  })
 
  
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Invalid or missing information,please check your information and try again'", async () => {
    await protectPage.verifyNoanydetailsfillederrorText(firsttabData["protect-033"].errormsg);
  })

page.close();
});

//34
test('NXGS-TC-5200:  TC_034_Protect_1_Validate giving blank spaces in policy holder details, policy holder address in germany, insured person details, date of birth section', async ({ page }) => {
 const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-034"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-034"].firstNameInput, firsttabData["protect-034"].lastNameInput,firsttabData["protect-034"].passportInput,firsttabData["protect-034"].mobileNumbercodeInput,firsttabData["protect-034"].mobileNumberInput,firsttabData["protect-034"].emailInput,firsttabData["protect-034"].streetNameInput,firsttabData["protect-034"].streetNumberInput,firsttabData["protect-034"].postalCodeInput,firsttabData["protect-034"].additionalAddressInput,firsttabData["protect-034"].cityInput,firsttabData["protect-034"].dayInput,firsttabData["protect-034"].monthInput,firsttabData["protect-034"].yearInput);
  })
 
  
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })

  await test.step("Verified error text as 'Invalid or missing information,please check your information and try again'", async () => {
    await protectPage.verifyNoanydetailsfillederrorText(firsttabData["protect-034"].lastnameErrormsg);
  })

page.close();
});

//35
test('NXGS-TC-5201:  TC_035_Protect_1_Validate giving invalid postal code as per country selection', async ({ page }) => {
 const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-035"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-035"].firstNameInput, firsttabData["protect-035"].lastNameInput,firsttabData["protect-035"].passportInput,firsttabData["protect-035"].mobileNumbercodeInput,firsttabData["protect-035"].mobileNumberInput,firsttabData["protect-035"].emailInput,firsttabData["protect-035"].streetNameInput,firsttabData["protect-035"].streetNumberInput,firsttabData["protect-035"].postalCodeInput,firsttabData["protect-035"].additionalAddressInput,firsttabData["protect-035"].cityInput,firsttabData["protect-035"].dayInput,firsttabData["protect-035"].monthInput,firsttabData["protect-035"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
     
  await test.step("Verified invalid postal code error text as 'Invalid Postal Code'", async () => {
    await protectPage.verifyinvalidpostalcodeerrorText(firsttabData["protect-035"].invalidpostalcodeErrormsg);
  }) 

page.close();
});

//36
 test('NXGS-TC-5202:  TC_036_Protect_1_Validate giving less than 3 characters in first name field of policy holder and insured member details', async ({ page }) => {
 const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-036"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-036"].firstNameInput, firsttabData["protect-036"].lastNameInput,firsttabData["protect-036"].passportInput,firsttabData["protect-036"].mobileNumbercodeInput,firsttabData["protect-036"].mobileNumberInput,firsttabData["protect-036"].emailInput,firsttabData["protect-036"].streetNameInput,firsttabData["protect-036"].streetNumberInput,firsttabData["protect-036"].postalCodeInput,firsttabData["protect-036"].additionalAddressInput,firsttabData["protect-036"].cityInput,firsttabData["protect-036"].dayInput,firsttabData["protect-036"].monthInput,firsttabData["protect-036"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })

  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-032"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-032"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-032"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-032"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-032"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-032"].secondtabPreviousButton);

  })   
  
page.close();
});

//37
test('NXGS-TC-5203:  TC_037_Protect_1_Validate giving less than 3 characters in last name field of policy holder and insured member details', async ({ page }) => {
 const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-037"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-037"].firstNameInput, firsttabData["protect-037"].lastNameInput,firsttabData["protect-037"].passportInput,firsttabData["protect-037"].mobileNumbercodeInput,firsttabData["protect-037"].mobileNumberInput,firsttabData["protect-037"].emailInput,firsttabData["protect-037"].streetNameInput,firsttabData["protect-037"].streetNumberInput,firsttabData["protect-037"].postalCodeInput,firsttabData["protect-037"].additionalAddressInput,firsttabData["protect-037"].cityInput,firsttabData["protect-037"].dayInput,firsttabData["protect-037"].monthInput,firsttabData["protect-037"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })

  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-032"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-032"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-032"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-032"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-032"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-032"].secondtabPreviousButton);

  })  
  
page.close();
});

//38
test('NXGS-TC-5204:  TC_038_Protect_1_Validate giving more than 60 characters in first name field of policy holder and insured member details', async ({ page }) => {
 const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-038"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-038"].firstNameInput, firsttabData["protect-038"].lastNameInput,firsttabData["protect-038"].passportInput,firsttabData["protect-038"].mobileNumbercodeInput,firsttabData["protect-038"].mobileNumberInput,firsttabData["protect-038"].emailInput,firsttabData["protect-038"].streetNameInput,firsttabData["protect-038"].streetNumberInput,firsttabData["protect-038"].postalCodeInput,firsttabData["protect-038"].additionalAddressInput,firsttabData["protect-038"].cityInput,firsttabData["protect-038"].dayInput,firsttabData["protect-038"].monthInput,firsttabData["protect-038"].yearInput);
  })
 
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await protectPage.verifyFirstnameonfirsttabfillederrorText(firsttabData["protect-038"].firstnameErrormsg);
  })    
  
page.close();
});

//39
test('NXGS-TC-5205:  TC_039_Protect_1_Validate giving more than 60 characters in last name field of policy holder and insured member details', async ({ page }) => {
 const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-039"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-039"].firstNameInput, firsttabData["protect-039"].lastNameInput,firsttabData["protect-039"].passportInput,firsttabData["protect-039"].mobileNumbercodeInput,firsttabData["protect-039"].mobileNumberInput,firsttabData["protect-039"].emailInput,firsttabData["protect-039"].streetNameInput,firsttabData["protect-039"].streetNumberInput,firsttabData["protect-039"].postalCodeInput,firsttabData["protect-039"].additionalAddressInput,firsttabData["protect-039"].cityInput,firsttabData["protect-039"].dayInput,firsttabData["protect-039"].monthInput,firsttabData["protect-039"].yearInput);
  })
 
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await protectPage.verifylastnameonfirsttabfillederrorText(firsttabData["protect-039"].lastnameErrormsg);
  })  
  
page.close();
});

//76
test('NXGS-TC-5206:  TC_076_Protect_1_Validate able to give invalid  values  in policy holder date of birth field', async ({ page }) => {
 const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-040"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-040"].firstNameInput, firsttabData["protect-040"].lastNameInput,firsttabData["protect-040"].passportInput,firsttabData["protect-040"].mobileNumbercodeInput,firsttabData["protect-040"].mobileNumberInput,firsttabData["protect-040"].emailInput,firsttabData["protect-040"].streetNameInput,firsttabData["protect-040"].streetNumberInput,firsttabData["protect-040"].postalCodeInput,firsttabData["protect-040"].additionalAddressInput,firsttabData["protect-040"].cityInput,firsttabData["protect-040"].dayInput,firsttabData["protect-040"].monthInput,firsttabData["protect-040"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })

  await test.step("Verified error text as ' Min date should be: 12/03/1964 '", async () => {
    await protectPage.verifyinvalidDateofbirtherrorText(firsttabData["protect-040"].invaliddateofbirthErrormsg);
  })  
  
page.close();
});

//135
test('NXGS-TC-5209:  TC_135_Protect_1_Validate error message disappears when only valid mobile number given', async ({ page }) => {
 const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-135"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-135"].firstNameInput, firsttabData["protect-135"].lastNameInput,firsttabData["protect-135"].passportInput,firsttabData["protect-135"].mobileNumbercodeInput,firsttabData["protect-135"].mobileNumberInput,firsttabData["protect-135"].emailInput,firsttabData["protect-135"].streetNameInput,firsttabData["protect-135"].streetNumberInput,firsttabData["protect-135"].postalCodeInput,firsttabData["protect-135"].additionalAddressInput,firsttabData["protect-135"].cityInput,firsttabData["protect-135"].dayInput,firsttabData["protect-135"].monthInput,firsttabData["protect-135"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })

  await test.step("Verified error text as ' Invalid Phone '", async () => {
    await protectPage.verifyinvalidMobilenumbererrorText(firsttabData["protect-135"].invalimobilenumberErrormsg);
  })  
  
page.close();
});

//136
test('NXGS-TC-5210:  TC_136_Protect_1_Validate error message disappears when only valid postal code given', async ({ page }) => {
 const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-136"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-136"].firstNameInput, firsttabData["protect-136"].lastNameInput,firsttabData["protect-136"].passportInput,firsttabData["protect-136"].mobileNumbercodeInput,firsttabData["protect-136"].mobileNumberInput,firsttabData["protect-136"].emailInput,firsttabData["protect-136"].streetNameInput,firsttabData["protect-136"].streetNumberInput,firsttabData["protect-136"].postalCodeInput,firsttabData["protect-136"].additionalAddressInput,firsttabData["protect-136"].cityInput,firsttabData["protect-136"].dayInput,firsttabData["protect-136"].monthInput,firsttabData["protect-136"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })

  await test.step("Verified invalid postal code error text as 'Invalid Postal Code'", async () => {
    await protectPage.verifyinvalidpostalcodeerrorText(firsttabData["protect-136"].invalidpostalcodeErrormsg);
  })   
  
page.close();
});

//157
test('NXGS-TC-5211:  TC_157_Protect_1_Validate gender field displays in insured person details', async ({ page }) => {
 const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-157"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-157"].firstNameInput, firsttabData["protect-157"].lastNameInput,firsttabData["protect-157"].passportInput,firsttabData["protect-157"].mobileNumbercodeInput,firsttabData["protect-157"].mobileNumberInput,firsttabData["protect-157"].emailInput,firsttabData["protect-157"].streetNameInput,firsttabData["protect-157"].streetNumberInput,firsttabData["protect-157"].postalCodeInput,firsttabData["protect-157"].additionalAddressInput,firsttabData["protect-157"].cityInput,firsttabData["protect-157"].dayInput,firsttabData["protect-157"].monthInput,firsttabData["protect-157"].yearInput);
  })
 
  
  await test.step("Verified gender field text as ' Female'", async () => {
    await protectPage.verifyfemalegenderText(firsttabData["protect-157"].femalegendertext);
  })   
  
page.close();
});

//158
test('NXGS-TC-5212:  TC_158_Protect_1_Validate gender field displays in "Enter your date of birth and gender" section', async ({ page }) => {
 const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-158"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-158"].firstNameInput, firsttabData["protect-158"].lastNameInput,firsttabData["protect-158"].passportInput,firsttabData["protect-158"].mobileNumbercodeInput,firsttabData["protect-158"].mobileNumberInput,firsttabData["protect-158"].emailInput,firsttabData["protect-158"].streetNameInput,firsttabData["protect-158"].streetNumberInput,firsttabData["protect-158"].postalCodeInput,firsttabData["protect-158"].additionalAddressInput,firsttabData["protect-158"].cityInput,firsttabData["protect-158"].dayInput,firsttabData["protect-158"].monthInput,firsttabData["protect-158"].yearInput);
  })

    await test.step("Verified gender field text as ' Female'", async () => {
    await protectPage.verifyfemalegenderText(firsttabData["protect-158"].femalegendertext);
  })   
  
page.close();
});

//40
test('NXGS-TC-5213:  TC_040_Protect_2_Validate Ui fields displays in additional insured information section', async ({ page }) => {
 const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-047"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-047"].firstNameInput, firsttabData["protect-047"].lastNameInput,firsttabData["protect-047"].passportInput,firsttabData["protect-047"].mobileNumbercodeInput,firsttabData["protect-047"].mobileNumberInput,firsttabData["protect-047"].emailInput,firsttabData["protect-047"].streetNameInput,firsttabData["protect-047"].streetNumberInput,firsttabData["protect-047"].postalCodeInput,firsttabData["protect-047"].additionalAddressInput,firsttabData["protect-047"].cityInput,firsttabData["protect-047"].dayInput,firsttabData["protect-047"].monthInput,firsttabData["protect-047"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-047"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-047"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-047"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-047"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-047"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-047"].secondtabPreviousButton);

  })
page.close();
});

//41
test('NXGS-TC-5214:  TC_041_Protect_2_Validate Ui fields displays in additional insured information section', async ({ page }) => {
 const protectPage: ProtectPage = new ProtectPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-041"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-041"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-041"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-041"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-041"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-041"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-041"].secondtabPreviousButton);

  })
page.close();
});

//77
test('NXGS-TC-5207:  TC_77_Protect_1_Validate giving invalid passport number in policy holder details', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-157"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-157"].firstNameInput, firsttabData["protect-157"].lastNameInput,firsttabData["protect-077"].passportInput,firsttabData["protect-157"].mobileNumbercodeInput,firsttabData["protect-157"].mobileNumberInput,firsttabData["protect-157"].emailInput,firsttabData["protect-157"].streetNameInput,firsttabData["protect-157"].streetNumberInput,firsttabData["protect-157"].postalCodeInput,firsttabData["protect-157"].additionalAddressInput,firsttabData["protect-157"].cityInput,firsttabData["protect-157"].dayInput,firsttabData["protect-157"].monthInput,firsttabData["protect-157"].yearInput);
   })
  
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
   })
   
   await test.step("Verified invalid passport number", async () => {
     await protectPage.verifyNoanydetailsfillederrorText(firsttabData["protect-077"].invalidpassporttext);
   })   
   
 page.close();
 });

 //134
test('NXGS-TC-5208:  TC_134_Protect_1_Validate error message disappears when only valid email address given', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-002"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-002"].firstNameInput, firsttabData["protect-002"].lastNameInput,firsttabData["protect-002"].passportInput,firsttabData["protect-002"].mobileNumbercodeInput,firsttabData["protect-002"].mobileNumberInput,firsttabData["protect-002"].emailInput,firsttabData["protect-002"].streetNameInput,firsttabData["protect-002"].streetNumberInput,firsttabData["protect-002"].postalCodeInput,firsttabData["protect-002"].additionalAddressInput,firsttabData["protect-002"].cityInput,firsttabData["protect-002"].dayInput,firsttabData["protect-002"].monthInput,firsttabData["protect-002"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })

    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-002"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await protectPage.verifyadditionalinsuredPersonText(firsttabData["protect-002"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await protectPage.verifynoteText(firsttabData["protect-002"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await protectPage.verifyaddanotherinsuredPersonButton(firsttabData["protect-002"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-002"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-002"].secondtabPreviousButton);

  })
 page.close();
 });
 
 //42
test('NXGS-TC-5215:  TC_042_Protect_2_Validate user able to move to 3rd tab with only 1 insured member information', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await protectPage.clickOnAddanotherinsuredpersonButton();
  })
     
   await test.step("Enter Additional insured person information", async () => {
    await protectPage.expatcaresecondtTab(firsttabData["protect-042"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })

  ////page.pause();

  await test.step("Verified Third tab page title text as 'Online application Protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-042"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await protectPage.verifyPlandetailsText(firsttabData["protect-042"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await protectPage.verifyPeriodofinsuranceText(firsttabData["protect-042"].periodofinsuranceText);

  })

 

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await protectPage.verifyTotalpaymentText(firsttabData["protect-042"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-042"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-042"].secondtabPreviousButton);

  })
 page.close();
 });

 //43
test('NXGS-TC-5216:  TC_043_Protect_2_Validate user able to move to 3rd tab with 9 insured member information', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await protectPage.clickOnAddanotherinsuredpersonButton();
  })
     
   await test.step("Enter Additional insured person information", async () => {
    await protectPage.expatcaresecondtTab(firsttabData["protect-042"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })

  ////page.pause();

  await test.step("Verified Third tab page title text as 'Online application Protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-042"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await protectPage.verifyPlandetailsText(firsttabData["protect-042"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await protectPage.verifyPeriodofinsuranceText(firsttabData["protect-042"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await protectPage.verifyTotalpaymentText(firsttabData["protect-042"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-042"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-042"].secondtabPreviousButton);

  })
 page.close();
 });

 //44
test('NXGS-TC-5217:  TC_044_Protect_2_Validate user able to move to 3rd tab with alll 10 insured member information', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await protectPage.clickOnAddanotherinsuredpersonButton();
  })
     
   await test.step("Enter Additional insured person information", async () => {
    await protectPage.expatcaresecondtTab(firsttabData["protect-042"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })

  ////page.pause();

  await test.step("Verified Third tab page title text as 'Online application Protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-042"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await protectPage.verifyPlandetailsText(firsttabData["protect-042"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await protectPage.verifyPeriodofinsuranceText(firsttabData["protect-042"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await protectPage.verifyTotalpaymentText(firsttabData["protect-042"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-042"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-042"].secondtabPreviousButton);

  })
 page.close();
 });

 //45
test('NXGS-TC-5218:  TC_045_Protect_2_Validate Add another insured person button get disable when all total 9 members added', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await protectPage.clickOnAddanotherinsuredpersonButton();
  })
     
   await test.step("Enter Additional insured person information", async () => {
    await protectPage.expatcaresecondtTab(firsttabData["protect-042"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })

  ////page.pause();

  await test.step("Verified Third tab page title text as 'Online application Protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-042"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await protectPage.verifyPlandetailsText(firsttabData["protect-042"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await protectPage.verifyPeriodofinsuranceText(firsttabData["protect-042"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await protectPage.verifyTotalpaymentText(firsttabData["protect-042"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-042"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-042"].secondtabPreviousButton);

  })
 page.close();
 });

 //46
test('NXGS-TC-5219:  TC_046_Protect_2_Validate same passport number given in all insured member details', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await protectPage.clickOnAddanotherinsuredpersonButton();
  })
     
   await test.step("Enter Additional insured person information", async () => {
    await protectPage.expatcaresecondtTab(firsttabData["protect-042"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })

  ////page.pause();

  await test.step("Verified Third tab page title text as 'Online application Protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-042"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await protectPage.verifyPlandetailsText(firsttabData["protect-042"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await protectPage.verifyPeriodofinsuranceText(firsttabData["protect-042"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await protectPage.verifyTotalpaymentText(firsttabData["protect-042"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-042"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-042"].secondtabPreviousButton);

  })
 page.close();
 });

 //47
test('NXGS-TC-5220:  TC_047_Protect_2_Validate able to delete the added insured person using Remove button', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await protectPage.clickOnAddanotherinsuredpersonButton();
  })
     
   await test.step("Enter Additional insured person information", async () => {
    await protectPage.expatcaresecondtTab(firsttabData["protect-042"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })

  ////page.pause();

  await test.step("Verified Third tab page title text as 'Online application Protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-042"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await protectPage.verifyPlandetailsText(firsttabData["protect-042"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await protectPage.verifyPeriodofinsuranceText(firsttabData["protect-042"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await protectPage.verifyTotalpaymentText(firsttabData["protect-042"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-042"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-042"].secondtabPreviousButton);

  })
 page.close();
 });

 //48
test('NXGS-TC-5221:  TC_048_Protect_2_Validate without insured member added able to redirect to 3rd tab', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
   })

  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })

  ////page.pause();

  await test.step("Verified Third tab page title text as 'Online application Protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-042"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await protectPage.verifyPlandetailsText(firsttabData["protect-042"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await protectPage.verifyPeriodofinsuranceText(firsttabData["protect-042"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await protectPage.verifyTotalpaymentText(firsttabData["protect-042"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-042"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-042"].secondtabPreviousButton);

  })
 page.close();
 });

 //49
test('NXGS-TC-5222:  TC_049_Protect_2_Validate no details given in added insured member information, able to redirect to 3rd tab', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
   })

  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })

  ////page.pause();

  await test.step("Verified Third tab page title text as 'Online application Protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-042"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await protectPage.verifyPlandetailsText(firsttabData["protect-042"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await protectPage.verifyPeriodofinsuranceText(firsttabData["protect-042"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await protectPage.verifyTotalpaymentText(firsttabData["protect-042"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-042"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-042"].secondtabPreviousButton);

  })
 page.close();
 });

 //50
test('NXGS-TC-5223:  TC_050_Protect_2_Validate previous button functionality present in 2nd tab', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab Previous Button ", async () => {
    await protectPage.clickOnsecondtabPreviousButton();
  })

  ////page.pause();

  await test.step("Verified first tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-001"].expectedPageTitle);
  })

  await test.step("Verified text on first tab as 'Application for MAWISTA Reisecare'", async () => {
    await protectPage.verifyAplicationFirstTabText(firsttabData["protect-001"].applicationText);

  })

  await test.step("Verified  text on first tab as ' Policyholder's details '", async () => {
    await protectPage.verifyPolicbyholderdetailsFirstTaext(firsttabData["protect-001"].policyholderText);

  })
  
  await test.step("Verified text on first tab as '  Are you the insured person? '", async () => {
    await protectPage.verifyAreyouinsuredpersonFirstText(firsttabData["protect-001"].areyouinsuredpersonText);

  })

  await test.step("Verified text on first tab as '   Enter your date of birth and gender  '", async () => {
    await protectPage.verifyEnteryourdateofbirthFirstText(firsttabData["protect-001"].enterdateofbirthText);

  })

  await test.step("Verified Next button visible and clickable on second tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-001"].secondtabNextButton);

  })
 page.close();
 });

 //51
test('NXGS-TC-5224:  TC_051_Protect_2_Validate Next button functionality present in 2nd tab', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
   })

  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })

  ////page.pause();

  await test.step("Verified Third tab page title text as 'Online application Protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-042"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await protectPage.verifyPlandetailsText(firsttabData["protect-042"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await protectPage.verifyPeriodofinsuranceText(firsttabData["protect-042"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await protectPage.verifyTotalpaymentText(firsttabData["protect-042"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-042"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-042"].secondtabPreviousButton);

  })
 page.close();
 });

 //56
test('NXGS-TC-5225:  TC_056_Protect_2_Validate in dependent first name fields, able to give alphabetic text upto 60 characters', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await protectPage.clickOnAddanotherinsuredpersonButton();
  })
     
   await test.step("Enter Additional insured person information", async () => {
    await protectPage.expatcaresecondtTab(firsttabData["protect-056"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })

  ////page.pause();

  await test.step("Verified Third tab page title text as 'Online application Protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-042"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await protectPage.verifyPlandetailsText(firsttabData["protect-042"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await protectPage.verifyPeriodofinsuranceText(firsttabData["protect-042"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await protectPage.verifyTotalpaymentText(firsttabData["protect-042"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-042"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-042"].secondtabPreviousButton);

  })
 page.close();
 });

 //59
test('NXGS-TC-5228:  TC_059_Protect_2_Validate able to give any date of birth in dependent date of birth field', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await protectPage.clickOnAddanotherinsuredpersonButton();
  })
     
   await test.step("Enter Additional insured person information", async () => {
    await protectPage.expatcaresecondtTab(firsttabData["protect-056"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })

  ////page.pause();

  await test.step("Verified Third tab page title text as 'Online application Protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-042"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await protectPage.verifyPlandetailsText(firsttabData["protect-042"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await protectPage.verifyPeriodofinsuranceText(firsttabData["protect-042"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await protectPage.verifyTotalpaymentText(firsttabData["protect-042"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-042"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-042"].secondtabPreviousButton);

  })
 page.close();
 });

 //78
test('NXGS-TC-5229: TC_078_Protect_2_Validate dependency field is hidden in insured member details', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
   })

  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })

  ////page.pause();

  await test.step("Verified Third tab page title text as 'Online application Protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-042"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await protectPage.verifyPlandetailsText(firsttabData["protect-042"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await protectPage.verifyPeriodofinsuranceText(firsttabData["protect-042"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await protectPage.verifyTotalpaymentText(firsttabData["protect-042"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-042"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-042"].secondtabPreviousButton);

  })
 page.close();
 });

 //79
test('NXGS-TC-5230: TC_079_Protect_2_Validate able to give minimum 3 length of characters in dependent first name field', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await protectPage.clickOnAddanotherinsuredpersonButton();
  })
     
   await test.step("Enter Additional insured person information", async () => {
    await protectPage.expatcaresecondtTab(firsttabData["protect-079"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })

  ////page.pause();

  await test.step("Verified Third tab page title text as 'Online application Protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-042"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await protectPage.verifyPlandetailsText(firsttabData["protect-042"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await protectPage.verifyPeriodofinsuranceText(firsttabData["protect-042"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await protectPage.verifyTotalpaymentText(firsttabData["protect-042"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-042"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-042"].secondtabPreviousButton);

  })
 page.close();
 });

 //80
test('NXGS-TC-5231: TC_080_Protect_2_Validate able to give minimum 3 length of characters in dependent last name field', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await protectPage.clickOnAddanotherinsuredpersonButton();
  })
     
   await test.step("Enter Additional insured person information", async () => {
    await protectPage.expatcaresecondtTab(firsttabData["protect-079"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })

  ////page.pause();

  await test.step("Verified Third tab page title text as 'Online application Protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-042"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await protectPage.verifyPlandetailsText(firsttabData["protect-042"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await protectPage.verifyPeriodofinsuranceText(firsttabData["protect-042"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await protectPage.verifyTotalpaymentText(firsttabData["protect-042"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await protectPage.verifysecondtabNextButton(firsttabData["protect-042"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await protectPage.verifysecondtabPreviousButton(firsttabData["protect-042"].secondtabPreviousButton);

  })
 page.close();
 });

 //81
test('NXGS-TC-5232: TC_081_Protect_2_Validate in additional insured member, user is not able to give alphanumeric text in first name field of added dependent', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await protectPage.clickOnAddanotherinsuredpersonButton();
  })
     
   await test.step("Enter Additional insured person information", async () => {
    await protectPage.expatcaresecondtTab(firsttabData["protect-081"].firstnameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })

  ////page.pause();
  await test.step("Verified Second Tab First name error text as '  Field format is invalid  '", async () => {
    await protectPage.verifsecondtabinsuredfirstnameText(firsttabData["protect-081"].additinalfirstnameinsurederrormsg);
  })
 
 page.close();
 });

 //82
test('NXGS-TC-5233: TC_82_Protect_2_Validate in additional insured field, user is not able to give alphanumeric text in last name field of added dependent', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await protectPage.clickOnAddanotherinsuredpersonButton();
  })
     
   await test.step("Enter Additional insured person information", async () => {
    await protectPage.expatcaresecondtTab(firsttabData["protect-081"].firstnameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })

  ////page.pause();
  await test.step("Verified Second Tab First name error text as '  Field format is invalid  '", async () => {
    await protectPage.verifsecondtabinsuredfirstnameText(firsttabData["protect-081"].additinalfirstnameinsurederrormsg);
  })
 
 page.close();
 });

 //83
test('NXGS-TC-5234: TC_083_Protect_2_Validate able to give invalid  values  in insured member date of birth field', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await protectPage.clickOnAddanotherinsuredpersonButton();
  })
     
   await test.step("Enter Additional insured person information", async () => {
    await protectPage.expatcaresecondtTab(firsttabData["protect-081"].firstnameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-083"].dAy,firsttabData["protect-083"].mOnth,firsttabData["protect-083"].yEar);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Second Tab First name error text as '  Field format is invalid  '", async () => {
    await protectPage.verifyNoanydetailsfillederrorText(firsttabData["protect-077"].invalidpassporttext);
  })
 
 page.close();
 });

 //84
test('NXGS-TC-5235: TC_84_Protect_2_Validate giving invalid passport number in additional insured and dependent insured information field', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await protectPage.gotoHomePage(firsttabData["protect-042"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await protectPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await protectPage.clickOnAddanotherinsuredpersonButton();
  })
     
   await test.step("Enter Additional insured person information", async () => {
    await protectPage.expatcaresecondtTab(firsttabData["protect-081"].firstnameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-083"].dAy,firsttabData["protect-083"].mOnth,firsttabData["protect-083"].yEar);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Second Tab First name error text as '  Field format is invalid  '", async () => {
    await protectPage.verifyNoanydetailsfillederrorText(firsttabData["protect-077"].invalidpassporttext);
  })
 
 page.close();
 });

 //52
test('NXGS-TC-5236: TC_052_Protect_3_Validate UI fields present in 3rd tab', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Add another insured person Button ", async () => {
   await protectPage.clickOnAddanotherinsuredpersonButton();
 })
    
  await test.step("Enter Additional insured person information", async () => {
   await protectPage.expatcaresecondtTab(firsttabData["protect-079"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 ////page.pause();

 await test.step("Verified Third tab page title text as 'Online application Protect - MAWISTA'", async () => {
   await protectPage.verifyPageTitle(firsttabData["protect-042"].expectedPageTitle);
 })

 await test.step("Verified text on Third tab as 'Plan details'", async () => {
   await protectPage.verifyPlandetailsText(firsttabData["protect-042"].planneddetailsText);

 })

 await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
   await protectPage.verifyPeriodofinsuranceText(firsttabData["protect-042"].periodofinsuranceText);

 })

 await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
   await protectPage.verifyTotalpaymentText(firsttabData["protect-042"].totalpaymentText);

 })

 await test.step("Verified Next button visible on third tab", async () => {
   await protectPage.verifysecondtabNextButton(firsttabData["protect-042"].secondtabNextButton);

 })

 await test.step("Verified Previous button visible on third tab", async () => {
   await protectPage.verifysecondtabPreviousButton(firsttabData["protect-042"].secondtabPreviousButton);

 })
 page.close();
 });

 //53
test('NXGS-TC-5237: TC_053_Protect_3_Validate widget/tiles content when Mawista Protect Accident & Liability plan selected', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Verified text on Mawaitsa Protect liblity  plan'", async () => {
  await protectPage.verifyProtectlibiltyTileText(firsttabData["protect-053"].premiumtext,firsttabData["protect-053"].protectlibilty1text,firsttabData["protect-053"].protectlibilty2text,firsttabData["protect-053"].protectlibilty3text);

})
 
 page.close();
 });

 //54
test('NXGS-TC-5238: TC_054_Protect_3_Validate widget  content when Mawista Protect Accident plan selected', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Verified text on Mawaitsa Protect accident plan'", async () => {
  await protectPage.verifyProtectaccidentTileText(firsttabData["protect-054"].premiumtext,firsttabData["protect-054"].protectacceident1text,firsttabData["protect-054"].protectacceident2text,firsttabData["protect-054"].protectacceident3text);

})
 
 page.close();
 });

 //55
test('NXGS-TC-5239: TC_055_Protect_3_Validate widget  content when Mawista Protect liability plan selected', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Verified text on Mawaitsa Protect liblity and accident plan '", async () => {
   await protectPage.verifyProtectaccidentandlibiltyTileText(firsttabData["protect-055"].premiumtext,firsttabData["protect-055"].protectacceident1text,firsttabData["protect-055"].protectacceident2text,firsttabData["protect-055"].protectacceident3text);

})
 
 page.close();
 });

 //60
test('NXGS-TC-5240: TC_060_Protect_3_Validate able to select any month from previous year in start date field', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Verified text on Mawaitsa Protect liblity and accident plan '", async () => {
   await protectPage.verifyProtectaccidentandlibiltyTileText(firsttabData["protect-055"].premiumtext,firsttabData["protect-055"].protectacceident1text,firsttabData["protect-055"].protectacceident2text,firsttabData["protect-055"].protectacceident3text);

})
 
 page.close();
 });

 //61
test('NXGS-TC-5241: TC_061_Protect_3_Validate able to select any month in current year in start date field', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Verified text on Mawaitsa Protect liblity and accident plan '", async () => {
   await protectPage.verifyProtectaccidentandlibiltyTileText(firsttabData["protect-055"].premiumtext,firsttabData["protect-055"].protectacceident1text,firsttabData["protect-055"].protectacceident2text,firsttabData["protect-055"].protectacceident3text);

})
 
 page.close();
 });

 //62
test('NXGS-TC-5242: TC_062_Protect_3_Validate able to select any month in future year in start date field', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Verified text on Mawaitsa Protect liblity and accident plan '", async () => {
   await protectPage.verifyProtectaccidentandlibiltyTileText(firsttabData["protect-055"].premiumtext,firsttabData["protect-055"].protectacceident1text,firsttabData["protect-055"].protectacceident2text,firsttabData["protect-055"].protectacceident3text);

})
 
 page.close();
 });

 //63
test('NXGS-TC-5243: TC_063_Protect_3_Validate able to select duration of 60 months in protect policy', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.ProtectStartdateandEnddate(firsttabData["protect-063"].startdate,firsttabData["protect-063"].enddate);
})

await test.step("Verified text on Mawaitsa Protect liblity and accident plan '", async () => {
   await protectPage.verifyProtectaccidentandlibiltyTileText(firsttabData["protect-055"].premiumtext,firsttabData["protect-055"].protectacceident1text,firsttabData["protect-055"].protectacceident2text,firsttabData["protect-055"].protectacceident3text);

})
 
 page.close();
 });

 //64
test('NXGS-TC-5244: TC_064_Protect_3_Validate first date of month displays ins start date field calendar when any month selected from any year', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.ProtectStartdateandEnddate(firsttabData["protect-063"].startdate,firsttabData["protect-063"].enddate);
})

await test.step("Verified text on Mawaitsa Protect liblity and accident plan '", async () => {
   await protectPage.verifyProtectaccidentandlibiltyTileText(firsttabData["protect-055"].premiumtext,firsttabData["protect-055"].protectacceident1text,firsttabData["protect-055"].protectacceident2text,firsttabData["protect-055"].protectacceident3text);

})
 
 page.close();
 });

 //65
test('NXGS-TC-5245: TC_065_Protect_3_validate able to select any month from calendar in end date selection', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.ProtectStartdateandEnddate(firsttabData["protect-063"].startdate,firsttabData["protect-063"].enddate);
})

await test.step("Verified text on Mawaitsa Protect liblity and accident plan '", async () => {
   await protectPage.verifyProtectaccidentandlibiltyTileText(firsttabData["protect-055"].premiumtext,firsttabData["protect-055"].protectacceident1text,firsttabData["protect-055"].protectacceident2text,firsttabData["protect-055"].protectacceident3text);

})
 
 page.close();
 });

 //66
test('NXGS-TC-5246: TC_066_Protect_3_Validate last day of month displays in end date field when any month selected', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.ProtectStartdateandEnddate(firsttabData["protect-063"].startdate,firsttabData["protect-063"].enddate);
})

await test.step("Verified last day of month displays in end date field when any month selected", async () => {
   await protectPage.verifyProtectaccidentandlibiltyTileText(firsttabData["protect-055"].premiumtext,firsttabData["protect-055"].protectacceident1text,firsttabData["protect-055"].protectacceident2text,firsttabData["protect-055"].protectacceident3text);

})
 
 page.close();
 });

 //67
test('NXGS-TC-5247: TC_067_Protect_3_Validate correct premium displays when Protect Accident and liability plan selected', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.ProtectStartdateandEnddate(firsttabData["protect-063"].startdate,firsttabData["protect-063"].enddate);
})

await test.step("Verified correct premium displays when Protect Accident and liability plan selected", async () => {
  await protectPage.verifyProtectaccidentandlibiltyTileText(firsttabData["protect-055"].premiumtext,firsttabData["protect-055"].protectacceident1text,firsttabData["protect-055"].protectacceident2text,firsttabData["protect-055"].protectacceident3text);

})
 
 page.close();
 });

 //68
test('NXGS-TC-5248: TC_068_Protect_3_Validate correct premium displays when Protect Accident  selected', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Verified correct premium displays when Protect Accident  selected'", async () => {
  await protectPage.verifyProtectaccidentTileText(firsttabData["protect-054"].premiumtext,firsttabData["protect-054"].protectacceident1text,firsttabData["protect-054"].protectacceident2text,firsttabData["protect-054"].protectacceident3text);

})
 
 
 page.close();
 });

 //69
test('NXGS-TC-5249: TC_069_Protect_3_Validate correct premium displays when Protect liability plan selected', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})
await test.step("Verified correct premium displays when Protect Accident  selected'", async () => {
  await protectPage.verifyProtectlibiltyTileText(firsttabData["protect-053"].premiumtext,firsttabData["protect-053"].protectlibilty1text,firsttabData["protect-053"].protectlibilty2text,firsttabData["protect-053"].protectlibilty3text);

})
 
 
 page.close();
 });

 //70
test('NXGS-TC-5250: TC_070_Protect_3_Validate premium get changed when date of birth changed for selected product plan', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Verified correct premium displays when Protect Accident  selected'", async () => {
  await protectPage.verifyProtectlibiltyTileText(firsttabData["protect-053"].premiumtext,firsttabData["protect-053"].protectlibilty1text,firsttabData["protect-053"].protectlibilty2text,firsttabData["protect-053"].protectlibilty3text);

})
 
 page.close();
 });

 //71
test('NXGS-TC-5251: TC_071_Protect_3_Validate montly premium displays when period of insurance more than 1 month', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Verified correct premium displays when Protect Accident  selected'", async () => {
  await protectPage.verifyProtectlibiltyTileText(firsttabData["protect-053"].premiumtext,firsttabData["protect-053"].protectlibilty1text,firsttabData["protect-053"].protectlibilty2text,firsttabData["protect-053"].protectlibilty3text);

})
 
 page.close();
 });

 
 //72
test('NXGS-TC-5252: TC_072_Protect_3_Validate premium get changed when  dependent added for selected product plan', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Add another insured person Button ", async () => {
  await protectPage.clickOnAddanotherinsuredpersonButton();
})
   
 await test.step("Enter Additional insured person information", async () => {
  await protectPage.expatcaresecondtTab(firsttabData["protect-079"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
})


 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Verified correct premium displays when Protect Accident  selected'", async () => {
  await protectPage.verifyProtectlibiltyTileText(firsttabData["protect-055"].premiumtext,firsttabData["protect-053"].protectlibilty1text,firsttabData["protect-053"].protectlibilty2text,firsttabData["protect-053"].protectlibilty3text);

})
 
 page.close();
 });

 //73
test('NXGS-TC-5253: TC_073_Protect_3_Validate premium get affected when product plan selection changed', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Add another insured person Button ", async () => {
  await protectPage.clickOnAddanotherinsuredpersonButton();
})
   
 await test.step("Enter Additional insured person information", async () => {
  await protectPage.expatcaresecondtTab(firsttabData["protect-079"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
})


 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Verified correct premium displays when Protect Accident  selected'", async () => {
  await protectPage.verifyProtectlibiltyTileText(firsttabData["protect-055"].premiumtext,firsttabData["protect-053"].protectlibilty1text,firsttabData["protect-053"].protectlibilty2text,firsttabData["protect-053"].protectlibilty3text);

})
 
 page.close();
 });

 //74
test('NXGS-TC-5254: TC_074_Protect_3_Validate premium get changed when gender changed in insured member information for selected product plan', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Add another insured person Button ", async () => {
  await protectPage.clickOnAddanotherinsuredpersonButton();
})
   
 await test.step("Enter Additional insured person information", async () => {
  await protectPage.expatcaresecondtTab(firsttabData["protect-079"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
})


 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Verified correct premium displays when Protect Accident  selected'", async () => {
  await protectPage.verifyProtectlibiltyTileText(firsttabData["protect-055"].premiumtext,firsttabData["protect-053"].protectlibilty1text,firsttabData["protect-053"].protectlibilty2text,firsttabData["protect-053"].protectlibilty3text);

})
 
 page.close();
 });

 //75
test('NXGS-TC-5255: TC_075_Protect_3_Validate premium get changed when gender changed in dependent information for selected product plan', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Add another insured person Button ", async () => {
  await protectPage.clickOnAddanotherinsuredpersonButton();
})
   
 await test.step("Enter Additional insured person information", async () => {
  await protectPage.expatcaresecondtTab(firsttabData["protect-079"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
})


 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Verified correct premium displays when Protect Accident  selected'", async () => {
  await protectPage.verifyProtectlibiltyTileText(firsttabData["protect-055"].premiumtext,firsttabData["protect-053"].protectlibilty1text,firsttabData["protect-053"].protectlibilty2text,firsttabData["protect-053"].protectlibilty3text);

})
 
 page.close();
 });

 //85
test('NXGS-TC-5256: TC_85_Protect_3_Validate giving start date of insurance  is greater than end date of insurance', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Add another insured person Button ", async () => {
  await protectPage.clickOnAddanotherinsuredpersonButton();
})
   
 await test.step("Enter Additional insured person information", async () => {
  await protectPage.expatcaresecondtTab(firsttabData["protect-079"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
})


 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Verified correct premium displays when Protect Accident  selected'", async () => {
  await protectPage.verifyProtectlibiltyTileText(firsttabData["protect-055"].premiumtext,firsttabData["protect-053"].protectlibilty1text,firsttabData["protect-053"].protectlibilty2text,firsttabData["protect-053"].protectlibilty3text);

})
 
 page.close();
 });

 //86
test('NXGS-TC-5257: TC_86_Protect_3_Validate correct payment summary details displays when only policy holder added in policy', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Click on Second Tab Next Button ", async () => {
  await protectPage.clickOnaccidentButton();
})

await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
  await protectPage.verifyPremiumvaluesforProtectaccidentwithoutinsureperson(firsttabData["protect-053"].premiumtext);

})
 
 page.close();
 });

 //87
test('NXGS-TC-5258: TC_87_Protect_3_Validate correct payment summary details displays when insured member added in policy', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Click on Second Tab Next Button ", async () => {
  await protectPage.clickOnaccidentButton();
})

await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
  await protectPage.verifyPremiumvaluesforProtectaccidentwithoutinsureperson(firsttabData["protect-053"].premiumtext);

})
 
 page.close();
 });


 //88
test('NXGS-TC-5259: TC_88_Protect_3_Validate correct payment summary details displays when upto 9 insured member added in policy', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
  await protectPage.verifyPremiumvaluesforProtectaccidentwithoutinsureperson(firsttabData["protect-053"].premiumtext);

})
 
 
 page.close();
 });

 //89
test('NXGS-TC-5260: TC_89_Protect_3_Validate with all details given in plan details (3rd tab), able to redirect to 4th', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Click on Second Tab Next Button ", async () => {
  await protectPage.clickOnaccidentButton();
})

await test.step("Click on Third Tab Next Button ", async () => {
  await protectPage.clickOnThirdTabNextButton();
})

await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
  await protectPage.verifyPageTitle(firsttabData["protect-003"].expectedPageTitle);
})


page.close();
 });

//90
test('NXGS-TC-5261: TC_90_Protect_3_Validate premium value is displays only after coverage duration selected', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Click on Second Tab Next Button ", async () => {
  await protectPage.clickOnaccidentButton();
})

await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
  await protectPage.verifyPremiumvaluesforProtectaccidentwithoutinsureperson(firsttabData["protect-053"].premiumtext);

})
 
 
  
 page.close();
 });

 //91
test('NXGS-TC-5262: TC_91_Protect_3_Validate premium value not displays without coverage selection', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})

await test.step("Click on Second Tab Next Button ", async () => {
  await protectPage.clickOnaccidentButton();
})

await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
  await protectPage.verifyPremiumvaluesforProtectaccidentwithoutinsureperson(firsttabData["protect-053"].premiumtext);

})
 
 
  
 page.close();
 });

 //92
test('NXGS-TC-5263: TC_92_Protect_3_Validate without any details start date and end date fields in plan details (3rd tab), able to redirect to Payment method and checkout (4th tab)', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })

 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })

 await test.step("Click on Third Tab Next Button ", async () => {
  await protectPage.clickOnThirdTabNextButton();
})

await test.step("Verified error text as 'Invalid or missing information,please check your information and try again'", async () => {
  await protectPage.verifyNoanydetailsfillederrorText(firsttabData["protect-033"].errormsg);
})
  
 page.close();
 }); 

test.describe('b2csanityEU', ()=> {
//Accident plan with DD Payement *working*
 test('NXGS-TC-5270: TC_97_Protect_4_Validate user able to purchase the protect policy with all required details using sepa direct debit option with valid iban number in payment details and checkout tab', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
  const syncroEUPage: SyncroEUPage = new SyncroEUPage(page);
  await test.step("Load the URL in Browser", async () => {
    //for new version is firsttabData["protect-042"].url2); old is url only
    await protectPage.gotoHomePage(firsttabData["protect-042"].url2);
   
  })
 
  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(
      firsttabData["protect-041"].firstNameInput,
      firsttabData["protect-041"].lastNameInput,
      firsttabData["protect-041"].passportInput,
      firsttabData["protect-041"].mobileNumbercodeInput,
      firsttabData["protect-041"].mobileNumberInput,
      firsttabData["protect-041"].emailInput,
      firsttabData["protect-041"].streetNameInput,
      firsttabData["protect-041"].streetNumberInput,
      firsttabData["protect-041"].postalCodeInput,
      firsttabData["protect-041"].additionalAddressInput,
      firsttabData["protect-041"].cityInput,
      firsttabData["protect-041"].dayInput,
      firsttabData["protect-041"].monthInput,
      firsttabData["protect-041"].yearInput
    );
  }
)
 
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })
 
 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })
 
 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(
    firsttabData["protect-003"].startDateThirdTab,
    firsttabData["protect-003"].endDateThirdTab);
})
await test.step("Click on pay plan ", async () => {
  await protectPage.clickOnaccidentButton();
})
 
await test.step("Click on Third Tab Next Button ", async () => {
  await protectPage.clickOnThirdTabNextButton();
})
 
await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
  await protectPage.verifyPageTitle(firsttabData["protect-003"].expectedPageTitle);
})
 
await test.step("Click on debit card radio button ", async () => {
  await protectPage.clickOnDebitCardRadioButton();
})
 
await test.step("Enter name of Account holder and IBAN ", async () => {
  await protectPage.accountHolderName(firsttabData["protect-003"].accountholdername,firsttabData["protect-003"].iban );
 
})
 
await test.step("Click on Issue mandate Checkbox", async () => {
  await protectPage.clickMandateCheckbox();
})
 
await test.step("clickOnDeclarationCheckboxes", async () => {
  await protectPage.clickOnDeclarationCheckboxes();
})
await test.step("clickOnApplyAndPay", async () => {
  await protectPage.clickOnApplyAndPay();
})
 
await test.step("Verified all details on Thank you page ", async () => {
await protectPage.checkThankyoupageText(firsttabData["protect-003"].thankyouText);
 
 })
 
await test.step("Load the URL in Browser", async () => {
        await syncroEUPage.gotoLoginPage(syncData["Login-Access-001"].url);
       
      })
   
 await test.step("Login to Syncro EU application", async () => {
 await syncroEUPage.loginToApplication(syncData["Login-Access-001"].brokerUserNameInput, syncData["Login-Access-001"].brokerPasswordInput);
      })
 
      await test.step("Search the policy number", async () => {
          await syncroEUPage.searchPolicy();
     
      })
     
        await test.step("Validate the policy", async () => {
          await syncroEUPage.validatePolicy();
     
        })
 
page.close();
 }
 );
 
 
 //Liability plan with CC payment *working*
 test('NXGS-TC-5270: TC_098_Protect_4_Validate user able to purchase the protect policy with all required details using credit card option in payment details and checkout tab', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
  const syncroEUPage: SyncroEUPage = new SyncroEUPage(page);
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url2);
   
  })
 
  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(
      firsttabData["protect-041"].firstNameInput, 
      firsttabData["protect-041"].lastNameInput,
      firsttabData["protect-041"].passportInput,
      firsttabData["protect-041"].mobileNumbercodeInput,
      firsttabData["protect-041"].mobileNumberInput,
      firsttabData["protect-041"].emailInput,
      firsttabData["protect-041"].streetNameInput,
      firsttabData["protect-041"].streetNumberInput,
      firsttabData["protect-041"].postalCodeInput,
      firsttabData["protect-041"].additionalAddressInput,
      firsttabData["protect-041"].cityInput,
      firsttabData["protect-041"].dayInput,
      firsttabData["protect-041"].monthInput,
      firsttabData["protect-041"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })
 
 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })
 
 await test.step("Fill all details on the third tab", async() =>{
    await protectPage.enterThirdTabDetails(
      firsttabData["protect-063"].startDateThirdTab, 
      firsttabData["protect-063"].endDateThirdTab);
     })
 
 /*await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab();
})*/
 
await test.step("Click on pay plan ", async () => {
  await protectPage.clickOnliabilityButton();
})
 

await test.step("Click on Third Tab Next Button ", async () => {
  await protectPage.clickOnThirdTabNextButton();
})

//for CC
 
await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
  await protectPage.verifyPageTitle(firsttabData["protect-003"].expectedPageTitle);
})
 
await test.step("Click on Credit card radio button ", async () => {
  await protectPage.clickOnCreditCardRadioButton();
})
 
await test.step("clickOnDeclarationCheckboxes", async () => {
  await protectPage.clickOnDeclarationCheckboxes();
})
await test.step("clickOnApplyAndPay", async () => {
  await protectPage.clickOnApplyAndPay();
})
 
await test.step("Click on  Credit card details", async () => {
  await protectPage.enterCreditCardDetails();
})

// //for DD
// await test.step("Click on debit card radio button ", async () => {
//   await protectPage.clickOnDebitCardRadioButton();
// })
 
// await test.step("Enter name of Account holder and IBAN ", async () => {
//   await protectPage.accountHolderName(firsttabData["protect-003"].accountholdername,firsttabData["protect-003"].iban );
 
// })
 
// await test.step("Click on Issue mandate Checkbox", async () => {
//   await protectPage.clickMandateCheckbox();
// })
 
// await test.step("clickOnDeclarationCheckboxes", async () => {
//   await protectPage.clickOnDeclarationCheckboxes();
// })
// await test.step("clickOnApplyAndPay", async () => {
//   await protectPage.clickOnApplyAndPay();
// })
 
 
await test.step("Verified all details on Thank you page ", async () => {
  await protectPage.checkThankyoupageText(firsttabData["protect-003"].thankyouText);
   
   })
   await test.step("Load the URL in Browser", async () => {
    await syncroEUPage.gotoLoginPage(syncData["Login-Access-001"].url);
   
  })
 
   await test.step("Login to Syncro EU application", async () => {
    await syncroEUPage.loginToApplication(syncData["Login-Access-001"].brokerUserNameInput, syncData["Login-Access-001"].brokerPasswordInput);
  })
 
  await test.step("Search the policy number", async () => {
      await syncroEUPage.searchPolicy();
 
  })
 
    await test.step("Validate the policy", async () => {
      await syncroEUPage.validatePolicy();
 
    })
 
page.close();
 });
 
 
 //Accident and Liability plan with DD Payment *WORKING*
 test('NXGS-TC-5270: TC_99_Protect_4_Validate user able to purchase the protect policy with all required details using sepa direct debit option with valid iban number in payment details and checkout tab', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
  const syncroEUPage: SyncroEUPage = new SyncroEUPage(page);
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url2);
   
  })
 
  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
 })
 
 await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButton();
 })
 
 await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab(firsttabData["protect-003"].startDateThirdTab,firsttabData["protect-003"].endDateThirdTab);
})
 
await test.step("Click on pay plan ", async () => {
  await protectPage.clickOnaccidentandliabilityButton();
})
 
await test.step("Click on Third Tab Next Button ", async () => {
  await protectPage.clickOnThirdTabNextButton();
})
 
await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
  await protectPage.verifyPageTitle(firsttabData["protect-003"].expectedPageTitle);
})
 
await test.step("Click on debit card radio button ", async () => {
  await protectPage.clickOnDebitCardRadioButton();
})
 
await test.step("Enter name of Account holder and IBAN ", async () => {
  await protectPage.accountHolderName(firsttabData["protect-003"].accountholdername,firsttabData["protect-003"].iban );
 
})
 
await test.step("Click on Issue mandate Checkbox", async () => {
  await protectPage.clickMandateCheckbox();
})
 
await test.step("clickOnDeclarationCheckboxes", async () => {
  await protectPage.clickOnDeclarationCheckboxes();
})
await test.step("clickOnApplyAndPay", async () => {
  await protectPage.clickOnApplyAndPay();
})
 
await test.step("Verified all details on Thank you page ", async () => {
await protectPage.checkThankyoupageText(firsttabData["protect-003"].thankyouText);
 
 })
 
 await test.step("Load the URL in Browser", async () => {
        await syncroEUPage.gotoLoginPage(syncData["Login-Access-001"].url);
       
      })
   
       await test.step("Login to Syncro EU application", async () => {
        await syncroEUPage.loginToApplication(syncData["Login-Access-001"].brokerUserNameInput, syncData["Login-Access-001"].brokerPasswordInput);
      })
 
      await test.step("Search the policy number", async () => {
          await syncroEUPage.searchPolicy();
     
      })
     
        await test.step("Validate the policy", async () => {
          await syncroEUPage.validatePolicy();
     
        })
 
 
page.close();
 });
}
);

//Ashwini 
//Accident plan with DD Payement with two additional members *working*
 test('NXGS-TC-001: TC_97_Protect_4_Validate user able to purchase the protect policy with all required details using sepa direct debit option with valid iban number in payment details and checkout tab', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
  const syncroEUPage: SyncroEUPage = new SyncroEUPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url2);
   
  })
 
  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(firsttabData["protect-041"].firstNameInput, firsttabData["protect-041"].lastNameInput,firsttabData["protect-041"].passportInput,firsttabData["protect-041"].mobileNumbercodeInput,firsttabData["protect-041"].mobileNumberInput,firsttabData["protect-041"].emailInput,firsttabData["protect-041"].streetNameInput,firsttabData["protect-041"].streetNumberInput,firsttabData["protect-041"].postalCodeInput,firsttabData["protect-041"].additionalAddressInput,firsttabData["protect-041"].cityInput,firsttabData["protect-041"].dayInput,firsttabData["protect-041"].monthInput,firsttabData["protect-041"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
 
  await test.step("Click on Add another insured person Button ", async () => {
    await protectPage.clickOnAddanotherinsuredpersonButton();
  })
 
  await test.step("Enter Additional insured person information", async () => {
    await protectPage.expatcaresecondtTabOneMemberDetail(firsttabData["protect-042"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
  })
 
  await test.step("Click on Add another insured person Button ", async () => {
    await protectPage.clickOnAddanotherinsuredpersonButton();
  })
 
  await test.step("Enter Additional insured person information", async () => {
      await protectPage.expatcaresecondtTabSecondMemberDetail(firsttabData["protect-042"].firstNameInput, firsttabData["protect-042"].lastNameInput,firsttabData["protect-042"].passportInput,firsttabData["protect-042"].dayInput,firsttabData["protect-042"].monthInput,firsttabData["protect-042"].yearInput);
  })
 
  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })
 
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await protectPage.protectStartandenddateonThirdtTabForAnotherInsuredPerson(
      firsttabData["protect-003"].startDateThirdTabTwoMemberDetail,
      firsttabData["protect-003"].endDateThirdTabTwoMemberDetail);
  })
 
  await test.step("Click on pay plan ", async () => {
    await protectPage.clickOnaccidentButton();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await protectPage.clickOnThirdTabNextButton();
  })
 
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-003"].expectedPageTitle);
  })
 
  await test.step("Click on debit card radio button ", async () => {
    await protectPage.clickOnDebitCardRadioButton();
  })
 
  await test.step("Enter name of Account holder and IBAN ", async () => {
    await protectPage.accountHolderName(
      firsttabData["protect-003"].accountholdername,
      firsttabData["protect-003"].iban );
  })

 
  await test.step("Click on Issue mandate Checkbox", async () => {
    await protectPage.clickMandateCheckbox();
  })
 
  await test.step("clickOnDeclarationCheckboxes", async () => {
    await protectPage.clickOnDeclarationCheckboxes();
  })
 
  await test.step("clickOnApplyAndPay", async () => {
    await protectPage.clickOnApplyAndPay();
  })
 
  await test.step("Verified all details on Thank you page ", async () => {
  await protectPage.checkThankyoupageText(firsttabData["protect-003"].thankyouText);
  })
 
  await test.step("Load the URL in Browser", async () => {
  await syncroEUPage.gotoLoginPage(syncData["Login-Access-001"].url);
  })
   
  await test.step("Login to Syncro EU application", async () => {
  await syncroEUPage.loginToApplication(
    syncData["Login-Access-001"].brokerUserNameInput,
    syncData["Login-Access-001"].brokerPasswordInput);
  })
 
  await test.step("Search the policy number", async () => {
  await syncroEUPage.searchPolicy();
  })
     
  await test.step("Validate the policy", async () => {
  await syncroEUPage.validatePolicy();
})
 
page.close();
});
 
 
 
   //Liability plan with CC payment with one additional members  *working*
 test('NXGS-TC-002: TC_098_Protect_4_Validate user able to purchase the protect policy with all required details using credit card option in payment details and checkout tab', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
  const syncroEUPage: SyncroEUPage = new SyncroEUPage(page);
  
    await test.step("Load the URL in Browser", async () => {
      await protectPage.gotoHomePage(firsttabData["protect-042"].url2);
    
    })
  
    await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
      await protectPage.protectFirstTab(
        firsttabData["protect-041"].firstNameInput, 
        firsttabData["protect-041"].lastNameInput,
        firsttabData["protect-041"].passportInput,
        firsttabData["protect-041"].mobileNumbercodeInput,
        firsttabData["protect-041"].mobileNumberInput,
        firsttabData["protect-041"].emailInput,
        firsttabData["protect-041"].streetNameInput,
        firsttabData["protect-041"].streetNumberInput,
        firsttabData["protect-041"].postalCodeInput,
        firsttabData["protect-041"].additionalAddressInput,
        firsttabData["protect-041"].cityInput,
        firsttabData["protect-041"].dayInput,
        firsttabData["protect-041"].monthInput,
        firsttabData["protect-041"].yearInput);
    })
  
    await test.step("Click on First Tab Next Button ", async () => {
      await protectPage.clickOnFirstTabNextButton();
    })
  
  //  await test.step("Click on Second Tab Next Button ", async () => {
  //    await protectPage.clickOnsecondtabNextButton();
  //  })
  
    await test.step("Click on Add another insured person Button ", async () => {
      await protectPage.clickOnAddanotherinsuredpersonButton();
    })
  
    await test.step("Enter Additional insured person information", async () => {
      await protectPage.expatcaresecondtTabOneMemberDetail(
        firsttabData["protect-042"].firstNameInput, 
        firsttabData["protect-042"].lastNameInput,
        firsttabData["protect-042"].passportInput,
        firsttabData["protect-042"].dayInput,
        firsttabData["protect-042"].monthInput,
        firsttabData["protect-042"].yearInput);
    })

    await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
    })
  
    await test.step("Fill all details on the third tab", async() =>{
      await protectPage.protectStartandenddateonThirdtTabForAnotherInsuredPerson(
        firsttabData["protect-063"].startDateThirdTab, 
        firsttabData["protect-063"].endDateThirdTab);
      })
 
 /*await test.step("Select Start and End Date on Third Tab ", async () => {
  await protectPage.protectStartandenddateonThirdtTab();
})*/
 
    await test.step("Click on pay plan ", async () => {
      await protectPage.clickOnliabilityButton();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await protectPage.clickOnThirdTabNextButton();
    })
    
    await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
      await protectPage.verifyPageTitle(firsttabData["protect-003"].expectedPageTitle);
    })
    
    await test.step("Click on Credit card radio button ", async () => {
      await protectPage.clickOnCreditCardRadioButton();
    })
    
    await test.step("clickOnDeclarationCheckboxes", async () => {
      await protectPage.clickOnDeclarationCheckboxes();
    })
    await test.step("clickOnApplyAndPay", async () => {
      await protectPage.clickOnApplyAndPay();
    })
    
    await test.step("Click on  Credit card details", async () => {
      await protectPage.enterCreditCardDetails();
    })
    
    await test.step("Verified all details on Thank you page ", async () => {
      await protectPage.checkThankyoupageText(firsttabData["protect-003"].thankyouText);
   
    })
    await test.step("Load the URL in Browser", async () => {
      await syncroEUPage.gotoLoginPage(syncData["Login-Access-001"].url);
    
    })
  
    await test.step("Login to Syncro EU application", async () => {
      await syncroEUPage.loginToApplication(
        syncData["Login-Access-001"].brokerUserNameInput, 
        syncData["Login-Access-001"].brokerPasswordInput);
    })
  
    await test.step("Search the policy number", async () => {
        await syncroEUPage.searchPolicy();
  
    })
  
      await test.step("Validate the policy", async () => {
        await syncroEUPage.validatePolicy();
  
      })
 
page.close();
 });
 

//Accident plan with DD Payement with 1 principle and 1 additional member *working*
//test('NXGS-TC-001: TC_97_Protect_4_Validate user able to purchase the protect policy with all required details using sepa direct debit option with valid iban number in payment details and checkout tab', async ({ page }) => {
test('NXGS-TC-003: TC_97_Protect_4_Validate_2Members_AugDec', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
  const syncroEUPage: SyncroEUPage = new SyncroEUPage(page);
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url2);
   
  })
  
 // Enter Principle details
  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTab(
      firsttabData["protect-041"].firstNameInput,
      firsttabData["protect-041"].lastNameInput,
      firsttabData["protect-041"].passportInput,
      firsttabData["protect-041"].mobileNumbercodeInput,
      firsttabData["protect-041"].mobileNumberInput,
      firsttabData["protect-041"].emailInput,
      firsttabData["protect-041"].streetNameInput,
      firsttabData["protect-041"].streetNumberInput,
      firsttabData["protect-041"].postalCodeInput,
      firsttabData["protect-041"].additionalAddressInput,
      firsttabData["protect-041"].cityInput,
      firsttabData["protect-041"].dayInput,
      firsttabData["protect-041"].monthInput,
      firsttabData["protect-041"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
 
  //Add one additional member
  await test.step("Click on Add another insured person Button ", async () => {
    await protectPage.clickOnAddanotherinsuredpersonButton();
  })
 
  await test.step("Enter Additional insured person information", async () => {
    await protectPage.expatcaresecondtTabOneMemberDetail(
      firsttabData["protect-042"].firstNameInput,
       firsttabData["protect-042"].lastNameInput,
       firsttabData["protect-042"].passportInput,
       firsttabData["protect-042"].dayInput,
       firsttabData["protect-042"].monthInput,
       firsttabData["protect-042"].yearInput
      );
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await protectPage.clickOnsecondtabNextButton();
  })
 
  await test.step("Select Start and End Date on Third Tab ", async () => {
   await protectPage.protectStartandenddateonThirdtTabForAnotherInsuredPerson(
      firsttabData["protect-003"].startDateThirdTabTwoMemberDetail,
      firsttabData["protect-003"].endDateThirdTabTwoMemberDetail);
  })
 
  await test.step("Click on pay plan ", async () => {
    await protectPage.clickOnaccidentButton();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await protectPage.clickOnThirdTabNextButton();
  })
 
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-003"].expectedPageTitle);
  })
 
  await test.step("Click on debit card radio button ", async () => {
    await protectPage.clickOnDebitCardRadioButton();
  })
 
  await test.step("Enter name of Account holder and IBAN ", async () => {
    await protectPage.accountHolderName(
      firsttabData["protect-003"].accountholdername,
      firsttabData["protect-003"].iban );
  })
 
  await test.step("Click on Issue mandate Checkbox", async () => {
    await protectPage.clickMandateCheckbox();
  })
 
  await test.step("clickOnDeclarationCheckboxes", async () => {
    await protectPage.clickOnDeclarationCheckboxes();
  })
 
  await test.step("clickOnApplyAndPay", async () => {
    await protectPage.clickOnApplyAndPay();
  })
 
  await test.step("Verified all details on Thank you page ", async () => {
  await protectPage.checkThankyoupageText(firsttabData["protect-003"].thankyouText);
  })
 
  await test.step("Load the URL in Browser", async () => {
  await syncroEUPage.gotoLoginPage(syncData["Login-Access-001"].url);
  })
   
  await test.step("Login to Syncro EU application", async () => {
  await syncroEUPage.loginToApplication(
    syncData["Login-Access-001"].brokerUserNameInput, 
    syncData["Login-Access-001"].brokerPasswordInput);
  })
 
  await test.step("Search the policy number", async () => {
  await syncroEUPage.searchPolicy();
  })
     
  await test.step("Validate the policy", async () => {
  await syncroEUPage.validatePolicy();
})
page.close();
});

//Accident plan with BT Payement *working*
 test('NXGS-TC-004: TC_97_Protect_4_Validate user able to purchase the protect policy with all required details using sepa direct debit option with valid iban number in payment details and checkout tab', async ({ page }) => {
  const protectPage: ProtectPage = new ProtectPage(page);
  const syncroEUPage: SyncroEUPage = new SyncroEUPage(page);
  await test.step("Load the URL in Browser", async () => {
    await protectPage.gotoHomePage(firsttabData["protect-042"].url1);
  })
 
  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await protectPage.protectFirstTabForBTPolicy(
    firsttabData["protect-041"].firstNameInput, 
    firsttabData["protect-041"].lastNameInput,
    firsttabData["protect-041"].passportInput,
    firsttabData["protect-041"].mobileNumbercodeInput,
    firsttabData["protect-041"].mobileNumberInput,
    firsttabData["protect-041"].emailInput,
    firsttabData["protect-041"].streetNameInput, 
    firsttabData["protect-041"].streetNumberInput,
    firsttabData["protect-041"].postalCodeInput,
    firsttabData["protect-041"].additionalAddressInput,
    firsttabData["protect-041"].cityInput,
    firsttabData["protect-041"].dayInput,
    firsttabData["protect-041"].monthInput,
    firsttabData["protect-041"].yearInput );
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await protectPage.clickOnFirstTabNextButton();
  })
 
  await test.step("Click on Second Tab Next Button ", async () => {
   await protectPage.clickOnsecondtabNextButtonBTPolicy();
  })
 
  await test.step("Select Start and End Date on Third Tab ", async () => {
   await protectPage.protectStartandenddateonThirdtTab(
    firsttabData["protect-003"].startDateThirdTab,
    firsttabData["protect-003"].endDateThirdTab);
  })

  await test.step("Click on pay plan ", async () => {
    await protectPage.clickOnMawistaProtectUnfallversicherungButton();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await protectPage.clickOnThirdTabNextButtonBTPolicy();
  })
  
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await protectPage.verifyPageTitle(firsttabData["protect-003"].expectedPageTitle);
  })
  
  await test.step("Click on Bank Transfer radio button", async () => {
    await protectPage.clickOnBankTransferRadioButton();
  })
  
  
  await test.step("clickOnDeclarationCheckboxes", async () => {
    await protectPage.clickOnBTPolicyDeclarationCheckboxes();
  })

  await test.step("clickOnApplyAndPay", async () => {
    await protectPage.clickOnApplyAndPayForBTPolicy();
  })
  
  await test.step("Verified all details on Thank you page ", async () => {
    await protectPage.checkThankYouPageTextForBTPolicy(firsttabData["protect-003"].thankyouText);
  })
 
  await test.step("Load the URL in Browser", async () => {
    await syncroEUPage.gotoLoginPage(syncData["Login-Access-001"].url);
  })

  await test.step("Login to Syncro EU application", async () => {
    await syncroEUPage.loginToApplication(
      syncData["Login-Access-001"].brokerUserNameInput, 
      syncData["Login-Access-001"].brokerPasswordInput);
  })
 
  await test.step("Search the policy number", async () => {
    await syncroEUPage.searchPolicy();
  })
     
  await test.step("Validate the policy", async () => {
    await syncroEUPage.validatePolicy();
  })
 
page.close();
 });
 
 