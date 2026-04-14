import { expect, test } from '@playwright/test';
import { ReiscarePage } from '../../page-objects/reiscare-pages/first-page.ts';
import { SyncroLoginPage } from '../../page-objects/login-page/login-page.ts';
const firsttabData = require(`../../testdata/${process.env.ENV || 'data_test_eu'}/reiscare.json`) as Record<string, any>;
const loginbData = require(`../../testdata/${process.env.ENV || 'data_test_eu'}/login.json`) as Record<string, any>;
const onePayData = require(`../../testdata/${process.env.ENV || 'data_test_eu'}/onePay.json`) as Record<string, any>;
import '../../page-objects/utilities-pages/global-setup.ts';

//1

test('NXGS-TC-5487: TC_001_Reisecare_1_Validate UI fields displays when Reisecare policy selected in 1st page', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-001"].url); 
    
  })

   await test.step("Verified first tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-001"].expectedPageTitle);
  })

  await test.step("Verified text on first tab as 'Application for MAWISTA Reisecare'", async () => {
    await reiscarePage.verifyAplicationFirstTabText(firsttabData["reiscare-001"].applicationText);

  })

  await test.step("Verified  text on first tab as ' Policyholder's details '", async () => {
    await reiscarePage.verifyPolicbyholderdetailsFirstTaext(firsttabData["reiscare-001"].policyholderText);

  })
  
  await test.step("Verified text on first tab as '  Are you the insured person? '", async () => {
    await reiscarePage.verifyAreyouinsuredpersonFirstText(firsttabData["reiscare-001"].areyouinsuredpersonText);

  })

  await test.step("Verified text on first tab as '   Enter your date of birth and gender  '", async () => {
    await reiscarePage.verifyEnteryourdateofbirthFirstText(firsttabData["reiscare-001"].enterdateofbirthText);

  })

  await test.step("Verified Next button visible and clickable on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-001"].secondtabNextButton);

  })

});

//2

test('NXGS-TC-5488: TC_002_Reisecare_1_Validate for Reisecare program, saving valid details in policy holder details, policy holder address in Germany, Are you insured details with insured person details', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-002"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-002"].firstNameInput, firsttabData["reiscare-002"].lastNameInput,firsttabData["reiscare-002"].passportInput,firsttabData["reiscare-002"].mobileNumbercodeInput,firsttabData["reiscare-002"].mobileNumberInput,firsttabData["reiscare-002"].emailInput,firsttabData["reiscare-002"].streetNameInput,firsttabData["reiscare-002"].streetNumberInput,firsttabData["reiscare-002"].postalCodeInput,firsttabData["reiscare-002"].additionalAddressInput,firsttabData["reiscare-002"].cityInput,firsttabData["reiscare-002"].dayInput,firsttabData["reiscare-002"].monthInput,firsttabData["reiscare-002"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-002"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-002"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-002"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-002"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-002"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-002"].secondtabPreviousButton);

  })
page.close();
});

//3
test('NXGS-TC-5489: TC_003_Reisecare_1_Validate able to give valid passport number in passport field of policy holder and insured member field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-003"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-002"].firstNameInput, firsttabData["reiscare-002"].lastNameInput,firsttabData["reiscare-002"].passportInput,firsttabData["reiscare-002"].mobileNumbercodeInput,firsttabData["reiscare-002"].mobileNumberInput,firsttabData["reiscare-002"].emailInput,firsttabData["reiscare-002"].streetNameInput,firsttabData["reiscare-002"].streetNumberInput,firsttabData["reiscare-002"].postalCodeInput,firsttabData["reiscare-002"].additionalAddressInput,firsttabData["reiscare-002"].cityInput,firsttabData["reiscare-002"].dayInput,firsttabData["reiscare-002"].monthInput,firsttabData["reiscare-002"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-003"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-003"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-003"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-003"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-003"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-003"].secondtabPreviousButton);

  })
page.close();
});

//4
test('NXGS-TC-5490: TC_004_Reisecare_1_Validate able to select any country name from home country field of policy holder and insured member field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-004"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-004"].firstNameInput, firsttabData["reiscare-004"].lastNameInput,firsttabData["reiscare-004"].passportInput,firsttabData["reiscare-004"].mobileNumbercodeInput,firsttabData["reiscare-004"].mobileNumberInput,firsttabData["reiscare-004"].emailInput,firsttabData["reiscare-004"].streetNameInput,firsttabData["reiscare-004"].streetNumberInput,firsttabData["reiscare-004"].postalCodeInput,firsttabData["reiscare-004"].additionalAddressInput,firsttabData["reiscare-004"].cityInput,firsttabData["reiscare-004"].dayInput,firsttabData["reiscare-004"].monthInput,firsttabData["reiscare-004"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-004"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-004"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-004"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-004"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-004"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-004"].secondtabPreviousButton);

  })
page.close();
});

//5
test('NXGS-TC-5491: TC_005_Reisecare_1_Validate able to give valid mobile number in mobile number field of policy holder and insured member field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-005"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-005"].firstNameInput, firsttabData["reiscare-005"].lastNameInput,firsttabData["reiscare-005"].passportInput,firsttabData["reiscare-005"].mobileNumbercodeInput,firsttabData["reiscare-005"].mobileNumberInput,firsttabData["reiscare-005"].emailInput,firsttabData["reiscare-005"].streetNameInput,firsttabData["reiscare-005"].streetNumberInput,firsttabData["reiscare-005"].postalCodeInput,firsttabData["reiscare-005"].additionalAddressInput,firsttabData["reiscare-005"].cityInput,firsttabData["reiscare-005"].dayInput,firsttabData["reiscare-005"].monthInput,firsttabData["reiscare-005"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-005"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-005"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-005"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-005"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-005"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-005"].secondtabPreviousButton);

  })
page.close();
});

//6
test('NXGS-TC-5492: TC_006_Reisecare_1_Validate able to give valid email in email field of policy holder and insured member field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-006"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-006"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-006"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-006"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-006"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-006"].secondtabPreviousButton);

  })
page.close();
});

//7
test('NXGS-TC-5493: TC_007_Reisecare_1_Validate saving with only mandatory fields details in policy holder details, policy holder address in Germany, Are you insured details with insured person details', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-007"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-007"].firstNameInput, firsttabData["reiscare-007"].lastNameInput,firsttabData["reiscare-007"].passportInput,firsttabData["reiscare-007"].mobileNumbercodeInput,firsttabData["reiscare-007"].mobileNumberInput,firsttabData["reiscare-007"].emailInput,firsttabData["reiscare-007"].streetNameInput,firsttabData["reiscare-007"].streetNumberInput,firsttabData["reiscare-007"].postalCodeInput,firsttabData["reiscare-007"].additionalAddressInput,firsttabData["reiscare-007"].cityInput,firsttabData["reiscare-007"].dayInput,firsttabData["reiscare-007"].monthInput,firsttabData["reiscare-007"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-007"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-007"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-007"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-007"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-007"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-007"].secondtabPreviousButton);

  })
page.close();
});

//8
test('NXGS-TC-5494: TC_008_Reisecare_1_Validate able to give valid postal code of Germany in "Policyholder address in Germany" section', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-008"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-008"].firstNameInput, firsttabData["reiscare-008"].lastNameInput,firsttabData["reiscare-008"].passportInput,firsttabData["reiscare-008"].mobileNumbercodeInput,firsttabData["reiscare-008"].mobileNumberInput,firsttabData["reiscare-008"].emailInput,firsttabData["reiscare-008"].streetNameInput,firsttabData["reiscare-008"].streetNumberInput,firsttabData["reiscare-008"].postalCodeInput,firsttabData["reiscare-008"].additionalAddressInput,firsttabData["reiscare-008"].cityInput,firsttabData["reiscare-008"].dayInput,firsttabData["reiscare-008"].monthInput,firsttabData["reiscare-008"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-008"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-008"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-008"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-008"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-008"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-008"].secondtabPreviousButton);

  })
page.close();
});

//9
test('NXGS-TC-5495: TC_009_Reisecare_1_Validate as per country selected, postal code is validated in "policy holder address " section', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-009"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-009"].firstNameInput, firsttabData["reiscare-009"].lastNameInput,firsttabData["reiscare-009"].passportInput,firsttabData["reiscare-009"].mobileNumbercodeInput,firsttabData["reiscare-009"].mobileNumberInput,firsttabData["reiscare-009"].emailInput,firsttabData["reiscare-009"].streetNameInput,firsttabData["reiscare-009"].streetNumberInput,firsttabData["reiscare-009"].postalCodeInput,firsttabData["reiscare-009"].additionalAddressInput,firsttabData["reiscare-009"].cityInput,firsttabData["reiscare-009"].dayInput,firsttabData["reiscare-009"].monthInput,firsttabData["reiscare-009"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-009"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-009"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-009"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-009"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-009"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-009"].secondtabPreviousButton);

  })
page.close();
});

//10
test('NXGS-TC-5496: TC_010_Reisecare_1_Validate in policy holder details field, user is able to give alphabetic character text in first name field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-010"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-010"].firstNameInput, firsttabData["reiscare-010"].lastNameInput,firsttabData["reiscare-010"].passportInput,firsttabData["reiscare-010"].mobileNumbercodeInput,firsttabData["reiscare-010"].mobileNumberInput,firsttabData["reiscare-010"].emailInput,firsttabData["reiscare-010"].streetNameInput,firsttabData["reiscare-010"].streetNumberInput,firsttabData["reiscare-010"].postalCodeInput,firsttabData["reiscare-010"].additionalAddressInput,firsttabData["reiscare-010"].cityInput,firsttabData["reiscare-010"].dayInput,firsttabData["reiscare-010"].monthInput,firsttabData["reiscare-010"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-010"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-010"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-010"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-010"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-010"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-010"].secondtabPreviousButton);

  })
page.close();
});

//11
test('NXGS-TC-5497: TC_11_Reisecare_1_Validate in policy holder details field, able to give alphabetic text in last name field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-011"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-011"].firstNameInput, firsttabData["reiscare-011"].lastNameInput,firsttabData["reiscare-011"].passportInput,firsttabData["reiscare-011"].mobileNumbercodeInput,firsttabData["reiscare-011"].mobileNumberInput,firsttabData["reiscare-011"].emailInput,firsttabData["reiscare-011"].streetNameInput,firsttabData["reiscare-011"].streetNumberInput,firsttabData["reiscare-011"].postalCodeInput,firsttabData["reiscare-011"].additionalAddressInput,firsttabData["reiscare-011"].cityInput,firsttabData["reiscare-011"].dayInput,firsttabData["reiscare-011"].monthInput,firsttabData["reiscare-011"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-011"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-011"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-011"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-011"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-011"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-011"].secondtabPreviousButton);

  })
page.close();
});

//12
test('NXGS-TC-5498: TC_012_Reisecare_1_Validate in insured person details, user is able to give alphabetic character text in first name field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-012"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-012"].firstNameInput, firsttabData["reiscare-012"].lastNameInput,firsttabData["reiscare-012"].passportInput,firsttabData["reiscare-012"].mobileNumbercodeInput,firsttabData["reiscare-012"].mobileNumberInput,firsttabData["reiscare-012"].emailInput,firsttabData["reiscare-012"].streetNameInput,firsttabData["reiscare-012"].streetNumberInput,firsttabData["reiscare-012"].postalCodeInput,firsttabData["reiscare-012"].additionalAddressInput,firsttabData["reiscare-012"].cityInput,firsttabData["reiscare-012"].dayInput,firsttabData["reiscare-012"].monthInput,firsttabData["reiscare-012"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await reiscarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["reiscare-012"].firstNameInput, firsttabData["reiscare-012"].lastNameInput,firsttabData["reiscare-012"].passportInput,firsttabData["reiscare-012"].mobileNumbercodeInput,firsttabData["reiscare-012"].mobileNumberInput,firsttabData["reiscare-012"].emailInput,firsttabData["reiscare-012"].streetNameInput,firsttabData["reiscare-012"].streetNumberInput,firsttabData["reiscare-012"].postalCodeInput,firsttabData["reiscare-012"].additionalAddressInput,firsttabData["reiscare-012"].cityInput,firsttabData["reiscare-012"].dayInput,firsttabData["reiscare-012"].monthInput,firsttabData["reiscare-012"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-012"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-012"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-012"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-012"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-012"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-012"].secondtabPreviousButton);

  })
page.close();
});

//13
test('NXGS-TC-5499: TC_013_Reisecare_1_Validate in insured person details field, able to give alphabetic  text in last name field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-013"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-013"].firstNameInput, firsttabData["reiscare-013"].lastNameInput,firsttabData["reiscare-013"].passportInput,firsttabData["reiscare-013"].mobileNumbercodeInput,firsttabData["reiscare-013"].mobileNumberInput,firsttabData["reiscare-013"].emailInput,firsttabData["reiscare-013"].streetNameInput,firsttabData["reiscare-013"].streetNumberInput,firsttabData["reiscare-013"].postalCodeInput,firsttabData["reiscare-013"].additionalAddressInput,firsttabData["reiscare-013"].cityInput,firsttabData["reiscare-013"].dayInput,firsttabData["reiscare-013"].monthInput,firsttabData["reiscare-013"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await reiscarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["reiscare-013"].firstNameInput, firsttabData["reiscare-013"].lastNameInput,firsttabData["reiscare-013"].passportInput,firsttabData["reiscare-013"].mobileNumbercodeInput,firsttabData["reiscare-013"].mobileNumberInput,firsttabData["reiscare-013"].emailInput,firsttabData["reiscare-013"].streetNameInput,firsttabData["reiscare-013"].streetNumberInput,firsttabData["reiscare-013"].postalCodeInput,firsttabData["reiscare-013"].additionalAddressInput,firsttabData["reiscare-013"].cityInput,firsttabData["reiscare-013"].dayInput,firsttabData["reiscare-013"].monthInput,firsttabData["reiscare-013"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-013"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-012"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-013"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-013"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-013"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-013"].secondtabPreviousButton);

  })
page.close();
});

//14
test('NXGS-TC-5500: TC_014_Reisecare_1_Validate in policy holder details field, user is able to give 3 minimum length of alphabetic character  text in first name field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-014"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-014"].firstNameInput, firsttabData["reiscare-014"].lastNameInput,firsttabData["reiscare-014"].passportInput,firsttabData["reiscare-014"].mobileNumbercodeInput,firsttabData["reiscare-014"].mobileNumberInput,firsttabData["reiscare-014"].emailInput,firsttabData["reiscare-014"].streetNameInput,firsttabData["reiscare-014"].streetNumberInput,firsttabData["reiscare-014"].postalCodeInput,firsttabData["reiscare-014"].additionalAddressInput,firsttabData["reiscare-014"].cityInput,firsttabData["reiscare-014"].dayInput,firsttabData["reiscare-014"].monthInput,firsttabData["reiscare-014"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-014"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-014"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-014"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-014"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-014"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-014"].secondtabPreviousButton);

  })
page.close();
});

//15
test('NXGS-TC-5501: TC_15_Reisecare_1_Validate in policy holder details field, able to give 3 minimum length of  alphabetic character   text in last name field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-015"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-015"].firstNameInput, firsttabData["reiscare-015"].lastNameInput,firsttabData["reiscare-015"].passportInput,firsttabData["reiscare-015"].mobileNumbercodeInput,firsttabData["reiscare-015"].mobileNumberInput,firsttabData["reiscare-015"].emailInput,firsttabData["reiscare-015"].streetNameInput,firsttabData["reiscare-015"].streetNumberInput,firsttabData["reiscare-015"].postalCodeInput,firsttabData["reiscare-015"].additionalAddressInput,firsttabData["reiscare-015"].cityInput,firsttabData["reiscare-015"].dayInput,firsttabData["reiscare-014"].monthInput,firsttabData["reiscare-014"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-015"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-015"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-015"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-015"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-015"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-015"].secondtabPreviousButton);

  })
page.close();
});

//16
test('NXGS-TC-5502: TC_016_Reisecare_1_Validate in insured person details,user is able to give minimum 3 alphabetic character  text in first name field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-016"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-016"].firstNameInput, firsttabData["reiscare-016"].lastNameInput,firsttabData["reiscare-016"].passportInput,firsttabData["reiscare-016"].mobileNumbercodeInput,firsttabData["reiscare-016"].mobileNumberInput,firsttabData["reiscare-015"].emailInput,firsttabData["reiscare-015"].streetNameInput,firsttabData["reiscare-015"].streetNumberInput,firsttabData["reiscare-015"].postalCodeInput,firsttabData["reiscare-015"].additionalAddressInput,firsttabData["reiscare-015"].cityInput,firsttabData["reiscare-015"].dayInput,firsttabData["reiscare-014"].monthInput,firsttabData["reiscare-014"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await reiscarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["reiscare-016"].firstNameInput, firsttabData["reiscare-016"].lastNameInput,firsttabData["reiscare-016"].passportInput,firsttabData["reiscare-013"].mobileNumbercodeInput,firsttabData["reiscare-013"].mobileNumberInput,firsttabData["reiscare-013"].emailInput,firsttabData["reiscare-013"].streetNameInput,firsttabData["reiscare-013"].streetNumberInput,firsttabData["reiscare-013"].postalCodeInput,firsttabData["reiscare-013"].additionalAddressInput,firsttabData["reiscare-013"].cityInput,firsttabData["reiscare-013"].dayInput,firsttabData["reiscare-013"].monthInput,firsttabData["reiscare-013"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-016"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-016"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-016"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-016"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-016"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-016"].secondtabPreviousButton);

  })
page.close();
});

//17
test('NXGS-TC-5503: TC_017_Reisecare_1_Validate in insured person details able to give minimum 3 alphabetic  text in last name field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-016"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-016"].firstNameInput, firsttabData["reiscare-016"].lastNameInput,firsttabData["reiscare-016"].passportInput,firsttabData["reiscare-016"].mobileNumbercodeInput,firsttabData["reiscare-016"].mobileNumberInput,firsttabData["reiscare-015"].emailInput,firsttabData["reiscare-015"].streetNameInput,firsttabData["reiscare-015"].streetNumberInput,firsttabData["reiscare-015"].postalCodeInput,firsttabData["reiscare-015"].additionalAddressInput,firsttabData["reiscare-015"].cityInput,firsttabData["reiscare-015"].dayInput,firsttabData["reiscare-014"].monthInput,firsttabData["reiscare-014"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await reiscarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["reiscare-016"].firstNameInput, firsttabData["reiscare-016"].lastNameInput,firsttabData["reiscare-016"].passportInput,firsttabData["reiscare-013"].mobileNumbercodeInput,firsttabData["reiscare-013"].mobileNumberInput,firsttabData["reiscare-013"].emailInput,firsttabData["reiscare-013"].streetNameInput,firsttabData["reiscare-013"].streetNumberInput,firsttabData["reiscare-013"].postalCodeInput,firsttabData["reiscare-013"].additionalAddressInput,firsttabData["reiscare-013"].cityInput,firsttabData["reiscare-013"].dayInput,firsttabData["reiscare-013"].monthInput,firsttabData["reiscare-013"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-016"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-016"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-016"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-016"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-016"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-016"].secondtabPreviousButton);

  })
page.close();
});

//18
test('NXGS-TC-5504: TC_018_Reisecare_1_Validate in policy holder details field, user is able to give 60 maximum length of alphabetic character  text in first name field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-018"].url);
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-018"].firstNameInput, firsttabData["reiscare-018"].lastNameInput,firsttabData["reiscare-018"].passportInput,firsttabData["reiscare-018"].mobileNumbercodeInput,firsttabData["reiscare-018"].mobileNumberInput,firsttabData["reiscare-018"].emailInput,firsttabData["reiscare-018"].streetNameInput,firsttabData["reiscare-018"].streetNumberInput,firsttabData["reiscare-018"].postalCodeInput,firsttabData["reiscare-018"].additionalAddressInput,firsttabData["reiscare-018"].cityInput,firsttabData["reiscare-018"].dayInput,firsttabData["reiscare-018"].monthInput,firsttabData["reiscare-018"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await reiscarePage.verifyFirstnameonfirsttabfillederrorText(firsttabData["reiscare-038"].firstnameErrormsg);
  }) 
page.close();
});

//19
test('NXGS-TC-5505: TC_019_Reisecare_1_Validate in policy holder details field, able to give 60 maximum length of  alphabetic character   text in last name field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-019"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-019"].firstNameInput, firsttabData["reiscare-019"].lastNameInput,firsttabData["reiscare-019"].passportInput,firsttabData["reiscare-019"].mobileNumbercodeInput,firsttabData["reiscare-019"].mobileNumberInput,firsttabData["reiscare-019"].emailInput,firsttabData["reiscare-019"].streetNameInput,firsttabData["reiscare-019"].streetNumberInput,firsttabData["reiscare-019"].postalCodeInput,firsttabData["reiscare-018"].additionalAddressInput,firsttabData["reiscare-018"].cityInput,firsttabData["reiscare-018"].dayInput,firsttabData["reiscare-018"].monthInput,firsttabData["reiscare-018"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
    
  })
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await reiscarePage.verifylastnameonfirsttabfillederrorText(firsttabData["reiscare-039"].lastnameErrormsg);
  }) 
page.close();
});

//20
test('NXGS-TC-5506: TC_020_Reisecare_1_Validate in insured person details, user is able to give maximum 60  alphabetic character  text in first name field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-020"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-020"].firstNameInput, firsttabData["reiscare-020"].lastNameInput,firsttabData["reiscare-020"].passportInput,firsttabData["reiscare-020"].mobileNumbercodeInput,firsttabData["reiscare-020"].mobileNumberInput,firsttabData["reiscare-020"].emailInput,firsttabData["reiscare-020"].streetNameInput,firsttabData["reiscare-020"].streetNumberInput,firsttabData["reiscare-020"].postalCodeInput,firsttabData["reiscare-020"].additionalAddressInput,firsttabData["reiscare-020"].cityInput,firsttabData["reiscare-018"].dayInput,firsttabData["reiscare-018"].monthInput,firsttabData["reiscare-018"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await reiscarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["reiscare-020"].firstNameInput, firsttabData["reiscare-020"].lastNameInput,firsttabData["reiscare-020"].passportInput,firsttabData["reiscare-020"].mobileNumbercodeInput,firsttabData["reiscare-020"].mobileNumberInput,firsttabData["reiscare-020"].emailInput,firsttabData["reiscare-020"].streetNameInput,firsttabData["reiscare-020"].streetNumberInput,firsttabData["reiscare-020"].postalCodeInput,firsttabData["reiscare-020"].additionalAddressInput,firsttabData["reiscare-020"].cityInput,firsttabData["reiscare-020"].dayInput,firsttabData["reiscare-020"].monthInput,firsttabData["reiscare-013"].yearInput);
  })
  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
   
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await reiscarePage.verifyFirstnameonfirsttabfillederrorText(firsttabData["reiscare-038"].firstnameErrormsg);
  }) 
  
page.close();
});

//21
test('NXGS-TC-5507: TC_021_Reisecare_1_Validate in insured person details,able to give maximum 60 alphabetic  text in last name field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-021"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-021"].firstNameInput, firsttabData["reiscare-021"].lastNameInput,firsttabData["reiscare-021"].passportInput,firsttabData["reiscare-021"].mobileNumbercodeInput,firsttabData["reiscare-021"].mobileNumberInput,firsttabData["reiscare-021"].emailInput,firsttabData["reiscare-021"].streetNameInput,firsttabData["reiscare-021"].streetNumberInput,firsttabData["reiscare-021"].postalCodeInput,firsttabData["reiscare-021"].additionalAddressInput,firsttabData["reiscare-021"].cityInput,firsttabData["reiscare-021"].dayInput,firsttabData["reiscare-021"].monthInput,firsttabData["reiscare-021"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await reiscarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["reiscare-021"].firstNameInput, firsttabData["reiscare-021"].lastNameInput,firsttabData["reiscare-021"].passportInput,firsttabData["reiscare-021"].mobileNumbercodeInput,firsttabData["reiscare-021"].mobileNumberInput,firsttabData["reiscare-021"].emailInput,firsttabData["reiscare-021"].streetNameInput,firsttabData["reiscare-021"].streetNumberInput,firsttabData["reiscare-021"].postalCodeInput,firsttabData["reiscare-021"].additionalAddressInput,firsttabData["reiscare-021"].cityInput,firsttabData["reiscare-020"].dayInput,firsttabData["reiscare-020"].monthInput,firsttabData["reiscare-013"].yearInput);
  })
  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await reiscarePage.verifylastnameonfirsttabfillederrorText(firsttabData["reiscare-039"].lastnameErrormsg);
  }) 
page.close();
});

//22
test('NXGS-TC-5508: TC_022_Reisecare_1_Validate saving valid details in policy holder details', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-022"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-022"].firstNameInput, firsttabData["reiscare-022"].lastNameInput,firsttabData["reiscare-022"].passportInput,firsttabData["reiscare-022"].mobileNumbercodeInput,firsttabData["reiscare-022"].mobileNumberInput,firsttabData["reiscare-022"].emailInput,firsttabData["reiscare-022"].streetNameInput,firsttabData["reiscare-022"].streetNumberInput,firsttabData["reiscare-022"].postalCodeInput,firsttabData["reiscare-021"].additionalAddressInput,firsttabData["reiscare-021"].cityInput,firsttabData["reiscare-021"].dayInput,firsttabData["reiscare-021"].monthInput,firsttabData["reiscare-021"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-022"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-022"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-022"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-022"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-022"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-022"].secondtabPreviousButton);

  })
page.close();
});

//23
test('NXGS-TC-5509: TC_023_Reisecare_1_Validate saving valid details in policy holder address in Germany section', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-022"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-022"].firstNameInput, firsttabData["reiscare-022"].lastNameInput,firsttabData["reiscare-022"].passportInput,firsttabData["reiscare-022"].mobileNumbercodeInput,firsttabData["reiscare-022"].mobileNumberInput,firsttabData["reiscare-022"].emailInput,firsttabData["reiscare-022"].streetNameInput,firsttabData["reiscare-022"].streetNumberInput,firsttabData["reiscare-022"].postalCodeInput,firsttabData["reiscare-021"].additionalAddressInput,firsttabData["reiscare-021"].cityInput,firsttabData["reiscare-021"].dayInput,firsttabData["reiscare-021"].monthInput,firsttabData["reiscare-021"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-022"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-022"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-022"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-022"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-022"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-022"].secondtabPreviousButton);

  })
page.close();
});

//24
test('NXGS-TC-5510: TC_024_Reisecare_1_Validate saving details with insured person details', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-024"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-024"].firstNameInput, firsttabData["reiscare-024"].lastNameInput,firsttabData["reiscare-024"].passportInput,firsttabData["reiscare-024"].mobileNumbercodeInput,firsttabData["reiscare-024"].mobileNumberInput,firsttabData["reiscare-024"].emailInput,firsttabData["reiscare-022"].streetNameInput,firsttabData["reiscare-022"].streetNumberInput,firsttabData["reiscare-022"].postalCodeInput,firsttabData["reiscare-021"].additionalAddressInput,firsttabData["reiscare-021"].cityInput,firsttabData["reiscare-021"].dayInput,firsttabData["reiscare-021"].monthInput,firsttabData["reiscare-021"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await reiscarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["reiscare-024"].firstNameInput, firsttabData["reiscare-024"].lastNameInput,firsttabData["reiscare-024"].passportInput,firsttabData["reiscare-024"].mobileNumbercodeInput,firsttabData["reiscare-024"].mobileNumberInput,firsttabData["reiscare-020"].emailInput,firsttabData["reiscare-020"].streetNameInput,firsttabData["reiscare-020"].streetNumberInput,firsttabData["reiscare-020"].postalCodeInput,firsttabData["reiscare-020"].additionalAddressInput,firsttabData["reiscare-020"].cityInput,firsttabData["reiscare-020"].dayInput,firsttabData["reiscare-020"].monthInput,firsttabData["reiscare-013"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-024"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-024"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-024"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-024"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-024"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-024"].secondtabPreviousButton);

  })
page.close();
});

//25
test('NXGS-TC-5511: TC_025_Reisecare_1_Validate able to give any alphanumeric character length text in street name field of "Policyholder address in Germany" section', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-025"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-025"].firstNameInput, firsttabData["reiscare-025"].lastNameInput,firsttabData["reiscare-025"].passportInput,firsttabData["reiscare-025"].mobileNumbercodeInput,firsttabData["reiscare-025"].mobileNumberInput,firsttabData["reiscare-025"].emailInput,firsttabData["reiscare-025"].streetNameInput,firsttabData["reiscare-025"].streetNumberInput,firsttabData["reiscare-025"].postalCodeInput,firsttabData["reiscare-025"].additionalAddressInput,firsttabData["reiscare-025"].cityInput,firsttabData["reiscare-025"].dayInput,firsttabData["reiscare-025"].monthInput,firsttabData["reiscare-025"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-025"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-025"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-025"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-025"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-025"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-025"].secondtabPreviousButton);

  })
page.close();
});

//26
test('NXGS-TC-5512: C_026_Reisecare_1_Validate able to give any alphanumeric character length text in street number field of "Policyholder address in Germany" section', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-026"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-026"].firstNameInput, firsttabData["reiscare-026"].lastNameInput,firsttabData["reiscare-026"].passportInput,firsttabData["reiscare-026"].mobileNumbercodeInput,firsttabData["reiscare-026"].mobileNumberInput,firsttabData["reiscare-026"].emailInput,firsttabData["reiscare-026"].streetNameInput,firsttabData["reiscare-026"].streetNumberInput,firsttabData["reiscare-026"].postalCodeInput,firsttabData["reiscare-026"].additionalAddressInput,firsttabData["reiscare-026"].cityInput,firsttabData["reiscare-026"].dayInput,firsttabData["reiscare-026"].monthInput,firsttabData["reiscare-026"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-026"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-026"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-026"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-026"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-026"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-026"].secondtabPreviousButton);

  })
page.close();
});

//27
test('NXGS-TC-5513: TC_027_Reisecare_1_Validate able to give any city name in city text field of policy holder address in Germany sectio', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-026"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-026"].firstNameInput, firsttabData["reiscare-026"].lastNameInput,firsttabData["reiscare-026"].passportInput,firsttabData["reiscare-026"].mobileNumbercodeInput,firsttabData["reiscare-026"].mobileNumberInput,firsttabData["reiscare-026"].emailInput,firsttabData["reiscare-026"].streetNameInput,firsttabData["reiscare-026"].streetNumberInput,firsttabData["reiscare-026"].postalCodeInput,firsttabData["reiscare-026"].additionalAddressInput,firsttabData["reiscare-026"].cityInput,firsttabData["reiscare-026"].dayInput,firsttabData["reiscare-026"].monthInput,firsttabData["reiscare-026"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-026"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-026"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-026"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-026"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-026"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-026"].secondtabPreviousButton);

  })
page.close();
});

//28
test('NXGS-TC-5514: TC_028_Reisecare_1_Validate Germany displays in country field of Policy holder address in Germany section', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-026"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-026"].firstNameInput, firsttabData["reiscare-026"].lastNameInput,firsttabData["reiscare-026"].passportInput,firsttabData["reiscare-026"].mobileNumbercodeInput,firsttabData["reiscare-026"].mobileNumberInput,firsttabData["reiscare-026"].emailInput,firsttabData["reiscare-026"].streetNameInput,firsttabData["reiscare-026"].streetNumberInput,firsttabData["reiscare-026"].postalCodeInput,firsttabData["reiscare-026"].additionalAddressInput,firsttabData["reiscare-026"].cityInput,firsttabData["reiscare-026"].dayInput,firsttabData["reiscare-026"].monthInput,firsttabData["reiscare-026"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-026"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-026"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-026"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-026"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-026"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-026"].secondtabPreviousButton);

  })
page.close();
});

//29
test('NXGS-TC-5515: TC_029_Reisecare_1_Validate able to give any date in date of birth field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-026"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-026"].firstNameInput, firsttabData["reiscare-026"].lastNameInput,firsttabData["reiscare-026"].passportInput,firsttabData["reiscare-026"].mobileNumbercodeInput,firsttabData["reiscare-026"].mobileNumberInput,firsttabData["reiscare-026"].emailInput,firsttabData["reiscare-026"].streetNameInput,firsttabData["reiscare-026"].streetNumberInput,firsttabData["reiscare-026"].postalCodeInput,firsttabData["reiscare-026"].additionalAddressInput,firsttabData["reiscare-026"].cityInput,firsttabData["reiscare-026"].dayInput,firsttabData["reiscare-026"].monthInput,firsttabData["reiscare-026"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-026"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-026"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-026"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-026"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-026"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-026"].secondtabPreviousButton);

  })
page.close();
});

//30
test('NXGS-TC-5516: TC_030_Reisecare_1_Validate able to create Reisecare policy with policy holder details with insured member details', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-026"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-026"].firstNameInput, firsttabData["reiscare-026"].lastNameInput,firsttabData["reiscare-026"].passportInput,firsttabData["reiscare-026"].mobileNumbercodeInput,firsttabData["reiscare-026"].mobileNumberInput,firsttabData["reiscare-026"].emailInput,firsttabData["reiscare-026"].streetNameInput,firsttabData["reiscare-026"].streetNumberInput,firsttabData["reiscare-026"].postalCodeInput,firsttabData["reiscare-026"].additionalAddressInput,firsttabData["reiscare-026"].cityInput,firsttabData["reiscare-026"].dayInput,firsttabData["reiscare-026"].monthInput,firsttabData["reiscare-026"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await reiscarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["reiscare-024"].firstNameInput, firsttabData["reiscare-024"].lastNameInput,firsttabData["reiscare-024"].passportInput,firsttabData["reiscare-024"].mobileNumbercodeInput,firsttabData["reiscare-024"].mobileNumberInput,firsttabData["reiscare-020"].emailInput,firsttabData["reiscare-020"].streetNameInput,firsttabData["reiscare-020"].streetNumberInput,firsttabData["reiscare-020"].postalCodeInput,firsttabData["reiscare-020"].additionalAddressInput,firsttabData["reiscare-020"].cityInput,firsttabData["reiscare-020"].dayInput,firsttabData["reiscare-020"].monthInput,firsttabData["reiscare-013"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-026"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-026"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-026"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-026"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-026"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-026"].secondtabPreviousButton);

  })
page.close();
});

//31
test('NXGS-TC-5517: TC_031_Reisecare_1_Validate in policy holder details field, user is not able to give alphanumeric text in first name field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-031"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-031"].firstNameInput, firsttabData["reiscare-031"].lastNameInput,firsttabData["reiscare-031"].passportInput,firsttabData["reiscare-026"].mobileNumbercodeInput,firsttabData["reiscare-026"].mobileNumberInput,firsttabData["reiscare-026"].emailInput,firsttabData["reiscare-026"].streetNameInput,firsttabData["reiscare-026"].streetNumberInput,firsttabData["reiscare-026"].postalCodeInput,firsttabData["reiscare-026"].additionalAddressInput,firsttabData["reiscare-026"].cityInput,firsttabData["reiscare-026"].dayInput,firsttabData["reiscare-026"].monthInput,firsttabData["reiscare-026"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-031"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-031"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-031"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-031"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-031"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-031"].secondtabPreviousButton);

  })
page.close();
});

//32
test('NXGS-TC-5518: TC_032_Reisecare_1_Validate in policy holder details field, user is not able to give alphanumeric text in last name field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-032"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-032"].firstNameInput, firsttabData["reiscare-032"].lastNameInput,firsttabData["reiscare-032"].passportInput,firsttabData["reiscare-032"].mobileNumbercodeInput,firsttabData["reiscare-032"].mobileNumberInput,firsttabData["reiscare-032"].emailInput,firsttabData["reiscare-032"].streetNameInput,firsttabData["reiscare-032"].streetNumberInput,firsttabData["reiscare-032"].postalCodeInput,firsttabData["reiscare-032"].additionalAddressInput,firsttabData["reiscare-032"].cityInput,firsttabData["reiscare-026"].dayInput,firsttabData["reiscare-026"].monthInput,firsttabData["reiscare-026"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-032"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-032"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-032"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-032"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-032"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-032"].secondtabPreviousButton);

  })
page.close();
});

//33
test('NXGS-TC-5519: TC_033_Reisecare_1_Validate blank in  policy holder details, policy holder address in Germany, Are you insured details with insured person details, ', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-033"].url);
    
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
   
  await test.step("Verified error text as 'Invalid or missing information,please check your information and try again'", async () => {
    await reiscarePage.verifyNoanydetailsfillederrorText(firsttabData["reiscare-033"].errormsg);
  })
  
page.close();
});

//34
test('NXGS-TC-5520: TC_034_Reisecare_1_Validate giving blank spaces in policy holder details, policy holder address in germany, insured person details,date of birth ', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-034"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-034"].firstNameInput, firsttabData["reiscare-034"].lastNameInput,firsttabData["reiscare-034"].passportInput,firsttabData["reiscare-034"].mobileNumbercodeInput,firsttabData["reiscare-034"].mobileNumberInput,firsttabData["reiscare-034"].emailInput,firsttabData["reiscare-034"].streetNameInput,firsttabData["reiscare-034"].streetNumberInput,firsttabData["reiscare-034"].postalCodeInput,firsttabData["reiscare-034"].additionalAddressInput,firsttabData["reiscare-034"].cityInput,firsttabData["reiscare-034"].dayInput,firsttabData["reiscare-034"].monthInput,firsttabData["reiscare-034"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
   
  await test.step("Verified error text as 'Invalid or missing information,please check your information and try again'", async () => {
    await reiscarePage.verifyNoanydetailsfillederrorText(firsttabData["reiscare-034"].lastnameErrormsg);
  })
  
page.close();
});

//35
test('NXGS-TC-5521: TC_035_Reisecare_1_Validate giving invalid postal code as per country selection', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-035"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-035"].firstNameInput, firsttabData["reiscare-035"].lastNameInput,firsttabData["reiscare-035"].passportInput,firsttabData["reiscare-035"].mobileNumbercodeInput,firsttabData["reiscare-035"].mobileNumberInput,firsttabData["reiscare-035"].emailInput,firsttabData["reiscare-035"].streetNameInput,firsttabData["reiscare-035"].streetNumberInput,firsttabData["reiscare-035"].postalCodeInput,firsttabData["reiscare-035"].additionalAddressInput,firsttabData["reiscare-035"].cityInput,firsttabData["reiscare-035"].dayInput,firsttabData["reiscare-035"].monthInput,firsttabData["reiscare-035"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified invalid postal code error text as 'Invalid Postal Code'", async () => {
    await reiscarePage.verifyinvalidpostalcodeerrorText(firsttabData["reiscare-035"].invalidpostalcodeErrormsg);
  }) 
page.close();
});

//36
test('NXGS-TC-5522: TC_036_Reisecare_1_Validate giving less than 3 characters in first name field of policy holder and insured member details', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-036"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-036"].firstNameInput, firsttabData["reiscare-036"].lastNameInput,firsttabData["reiscare-002"].passportInput,firsttabData["reiscare-002"].mobileNumbercodeInput,firsttabData["reiscare-002"].mobileNumberInput,firsttabData["reiscare-002"].emailInput,firsttabData["reiscare-002"].streetNameInput,firsttabData["reiscare-002"].streetNumberInput,firsttabData["reiscare-002"].postalCodeInput,firsttabData["reiscare-002"].additionalAddressInput,firsttabData["reiscare-002"].cityInput,firsttabData["reiscare-002"].dayInput,firsttabData["reiscare-002"].monthInput,firsttabData["reiscare-002"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-002"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-036"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-036"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-036"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-036"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-036"].secondtabPreviousButton);

  })
page.close();
});

//37
test('NXGS-TC-5523: TC_037_Reisecare_1_Validate giving less than 3 characters in last name field of policy holder and insured member details', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-037"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-037"].firstNameInput, firsttabData["reiscare-037"].lastNameInput,firsttabData["reiscare-002"].passportInput,firsttabData["reiscare-002"].mobileNumbercodeInput,firsttabData["reiscare-002"].mobileNumberInput,firsttabData["reiscare-002"].emailInput,firsttabData["reiscare-002"].streetNameInput,firsttabData["reiscare-002"].streetNumberInput,firsttabData["reiscare-002"].postalCodeInput,firsttabData["reiscare-002"].additionalAddressInput,firsttabData["reiscare-002"].cityInput,firsttabData["reiscare-002"].dayInput,firsttabData["reiscare-002"].monthInput,firsttabData["reiscare-002"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-002"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-037"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-037"].noteText);

  })
  
 await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-037"].addadditionalinsuredpersonText);

 })

  
  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-037"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-037"].secondtabPreviousButton);

  })
page.close();
});

//38
test('NXGS-TC-5524: TC_038_Reisecare_1_Validate giving more than 60 characters in first name field of policy holder and insured member details', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-038"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-038"].firstNameInput, firsttabData["reiscare-038"].lastNameInput,firsttabData["reiscare-026"].passportInput,firsttabData["reiscare-026"].mobileNumbercodeInput,firsttabData["reiscare-026"].mobileNumberInput,firsttabData["reiscare-026"].emailInput,firsttabData["reiscare-026"].streetNameInput,firsttabData["reiscare-026"].streetNumberInput,firsttabData["reiscare-026"].postalCodeInput,firsttabData["reiscare-026"].additionalAddressInput,firsttabData["reiscare-026"].cityInput,firsttabData["reiscare-026"].dayInput,firsttabData["reiscare-026"].monthInput,firsttabData["reiscare-026"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await reiscarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["reiscare-038"].firstNameInput, firsttabData["reiscare-038"].lastNameInput,firsttabData["reiscare-024"].passportInput,firsttabData["reiscare-024"].mobileNumbercodeInput,firsttabData["reiscare-024"].mobileNumberInput,firsttabData["reiscare-020"].emailInput,firsttabData["reiscare-020"].streetNameInput,firsttabData["reiscare-020"].streetNumberInput,firsttabData["reiscare-020"].postalCodeInput,firsttabData["reiscare-020"].additionalAddressInput,firsttabData["reiscare-020"].cityInput,firsttabData["reiscare-020"].dayInput,firsttabData["reiscare-020"].monthInput,firsttabData["reiscare-013"].yearInput);
  })

  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await reiscarePage.verifyFirstnameonfirsttabfillederrorText(firsttabData["reiscare-038"].firstnameErrormsg);
  }) 
page.close();
});

//39
test('NXGS-TC-5525: TC_039_Reisecare_1_Validate giving more than 60 characters in last name field of policy holder and insured member details', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-039"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-039"].firstNameInput, firsttabData["reiscare-039"].lastNameInput,firsttabData["reiscare-039"].passportInput,firsttabData["reiscare-039"].mobileNumbercodeInput,firsttabData["reiscare-039"].mobileNumberInput,firsttabData["reiscare-039"].emailInput,firsttabData["reiscare-039"].streetNameInput,firsttabData["reiscare-039"].streetNumberInput,firsttabData["reiscare-039"].postalCodeInput,firsttabData["reiscare-039"].additionalAddressInput,firsttabData["reiscare-039"].cityInput,firsttabData["reiscare-039"].dayInput,firsttabData["reiscare-039"].monthInput,firsttabData["reiscare-039"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await reiscarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["reiscare-039"].firstNameInput, firsttabData["reiscare-039"].lastNameInput,firsttabData["reiscare-024"].passportInput,firsttabData["reiscare-024"].mobileNumbercodeInput,firsttabData["reiscare-024"].mobileNumberInput,firsttabData["reiscare-020"].emailInput,firsttabData["reiscare-020"].streetNameInput,firsttabData["reiscare-020"].streetNumberInput,firsttabData["reiscare-020"].postalCodeInput,firsttabData["reiscare-020"].additionalAddressInput,firsttabData["reiscare-020"].cityInput,firsttabData["reiscare-020"].dayInput,firsttabData["reiscare-020"].monthInput,firsttabData["reiscare-013"].yearInput);
  })

  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await reiscarePage.verifylastnameonfirsttabfillederrorText(firsttabData["reiscare-039"].lastnameErrormsg);
  }) 
 
page.close();
});

//40
test('NXGS-TC-5526: TC_040_Reisecare_1_Validate able to give invalid  values  in policy holder date of birth field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-040"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-040"].firstNameInput, firsttabData["reiscare-040"].lastNameInput,firsttabData["reiscare-040"].passportInput,firsttabData["reiscare-040"].mobileNumbercodeInput,firsttabData["reiscare-040"].mobileNumberInput,firsttabData["reiscare-040"].emailInput,firsttabData["reiscare-040"].streetNameInput,firsttabData["reiscare-040"].streetNumberInput,firsttabData["reiscare-040"].postalCodeInput,firsttabData["reiscare-040"].additionalAddressInput,firsttabData["reiscare-040"].cityInput,firsttabData["reiscare-040"].dayInput,firsttabData["reiscare-040"].monthInput,firsttabData["reiscare-040"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Verified error text as ' Min date should be: 12/03/1964 '", async () => {
    await reiscarePage.verifyinvalidDateofbirtherrorText(firsttabData["reiscare-040"].invaliddateofbirthErrormsg);
  })  
  
page.close();
});

//41
test('NXGS-TC-5527: TC_41_Reisecare_1_Validate giving invalid passport number in policy holder details', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-041"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-041"].firstNameInput, firsttabData["reiscare-041"].lastNameInput,firsttabData["reiscare-041"].passportInput,firsttabData["reiscare-041"].mobileNumbercodeInput,firsttabData["reiscare-041"].mobileNumberInput,firsttabData["reiscare-041"].emailInput,firsttabData["reiscare-041"].streetNameInput,firsttabData["reiscare-041"].streetNumberInput,firsttabData["reiscare-041"].postalCodeInput,firsttabData["reiscare-041"].additionalAddressInput,firsttabData["reiscare-041"].cityInput,firsttabData["reiscare-041"].dayInput,firsttabData["reiscare-041"].monthInput,firsttabData["reiscare-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Verified error text as ' Min date should be: 12/03/1964 '", async () => {
    await reiscarePage.verifyinvalidPassportnumberrrorText(firsttabData["reiscare-041"].invalidpassportnumberrrormsg);
  })  
  
page.close();
});

//42
test('NXGS-TC-5528: TC_42_Reisecare_1_Validate error message disappears when only valid email address given', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-042"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-042"].firstNameInput, firsttabData["reiscare-042"].lastNameInput,firsttabData["reiscare-042"].passportInput,firsttabData["reiscare-042"].mobileNumbercodeInput,firsttabData["reiscare-042"].mobileNumberInput,firsttabData["reiscare-042"].emailInput,firsttabData["reiscare-042"].streetNameInput,firsttabData["reiscare-042"].streetNumberInput,firsttabData["reiscare-042"].postalCodeInput,firsttabData["reiscare-041"].additionalAddressInput,firsttabData["reiscare-041"].cityInput,firsttabData["reiscare-041"].dayInput,firsttabData["reiscare-041"].monthInput,firsttabData["reiscare-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-026"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-026"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-026"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-026"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-026"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-026"].secondtabPreviousButton);

  })
  
page.close();
});

//43
test('NXGS-TC-5529: TC_43_Reisecare_1_Validate error message disappears when only valid mobile number given', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-043"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-043"].firstNameInput, firsttabData["reiscare-043"].lastNameInput,firsttabData["reiscare-043"].passportInput,firsttabData["reiscare-043"].mobileNumbercodeInput,firsttabData["reiscare-043"].mobileNumberInput,firsttabData["reiscare-043"].emailInput,firsttabData["reiscare-043"].streetNameInput,firsttabData["reiscare-043"].streetNumberInput,firsttabData["reiscare-043"].postalCodeInput,firsttabData["reiscare-043"].additionalAddressInput,firsttabData["reiscare-043"].cityInput,firsttabData["reiscare-041"].dayInput,firsttabData["reiscare-041"].monthInput,firsttabData["reiscare-041"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-043"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-043"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-043"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-043"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-043"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-043"].secondtabPreviousButton);

  })
  
page.close();
});

//44
test('NXGS-TC-5530: TC_44_Reisecare_1_Validate error message disappears when only valid postal code given', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-044"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-044"].firstNameInput, firsttabData["reiscare-044"].lastNameInput,firsttabData["reiscare-044"].passportInput,firsttabData["reiscare-044"].mobileNumbercodeInput,firsttabData["reiscare-044"].mobileNumberInput,firsttabData["reiscare-044"].emailInput,firsttabData["reiscare-044"].streetNameInput,firsttabData["reiscare-044"].streetNumberInput,firsttabData["reiscare-044"].postalCodeInput,firsttabData["reiscare-044"].additionalAddressInput,firsttabData["reiscare-044"].cityInput,firsttabData["reiscare-044"].dayInput,firsttabData["reiscare-044"].monthInput,firsttabData["reiscare-044"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Verified second tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-044"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-044"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-044"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-044"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-044"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-044"].secondtabPreviousButton);

  })
  
page.close();
});

//45
test('NXGS-TC-5531: TC_45_Reisecare_1_Validate gender field displays in insured person details', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-045"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-045"].firstNameInput, firsttabData["reiscare-045"].lastNameInput,firsttabData["reiscare-045"].passportInput,firsttabData["reiscare-045"].mobileNumbercodeInput,firsttabData["reiscare-045"].mobileNumberInput,firsttabData["reiscare-045"].emailInput,firsttabData["reiscare-045"].streetNameInput,firsttabData["reiscare-045"].streetNumberInput,firsttabData["reiscare-045"].postalCodeInput,firsttabData["reiscare-045"].additionalAddressInput,firsttabData["reiscare-044"].cityInput,firsttabData["reiscare-044"].dayInput,firsttabData["reiscare-044"].monthInput,firsttabData["reiscare-044"].yearInput);
  })

  await test.step("Verified gender field text as ' Female'", async () => {
    await reiscarePage.verifyfemalegenderText(firsttabData["reiscare-045"].femalegendertext);
  }) 
  
page.close();
});

//46
test('NXGS-TC-5532: TC_46_Reisecare_1_Validate gender field displays in "Enter your date of birth and gender" section', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-046"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.expatcareFirstTab(firsttabData["reiscare-045"].firstNameInput, firsttabData["reiscare-045"].lastNameInput,firsttabData["reiscare-045"].passportInput,firsttabData["reiscare-045"].mobileNumbercodeInput,firsttabData["reiscare-045"].mobileNumberInput,firsttabData["reiscare-045"].emailInput,firsttabData["reiscare-045"].streetNameInput,firsttabData["reiscare-045"].streetNumberInput,firsttabData["reiscare-045"].postalCodeInput,firsttabData["reiscare-045"].additionalAddressInput,firsttabData["reiscare-044"].cityInput,firsttabData["reiscare-044"].dayInput,firsttabData["reiscare-044"].monthInput,firsttabData["reiscare-044"].yearInput);
  })

  await test.step("Verified gender field text as ' Female'", async () => {
    await reiscarePage.verifyfemalegenderText(firsttabData["reiscare-046"].femalegendertext);
  }) 
  
page.close();
});

//47
test('NXGS-TC-5533: TC_47_Reisecare_1_Validate 1,2,3,4 tab content is displaying correctly in En language', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-047"].url);
    
  })

   await test.step("Verified first tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-001"].expectedPageTitle);
  })

  await test.step("Verified text on first tab as 'Application for MAWISTA Reisecare'", async () => {
    await reiscarePage.verifyAplicationFirstTabText(firsttabData["reiscare-047"].applicationText);

  })

  await test.step("Verified  text on first tab as ' Policyholder's details '", async () => {
    await reiscarePage.verifyPolicbyholderdetailsFirstTaext(firsttabData["reiscare-047"].policyholderText);

  })
  
  await test.step("Verified text on first tab as '  Are you the insured person? '", async () => {
    await reiscarePage.verifyAreyouinsuredpersonFirstText(firsttabData["reiscare-047"].areyouinsuredpersonText);

  })

  await test.step("Verified text on first tab as '   Enter your date of birth and gender  '", async () => {
    await reiscarePage.verifyEnteryourdateofbirthFirstText(firsttabData["reiscare-047"].enterdateofbirthText);

  })

  await test.step("Verified Next button visible and clickable on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-047"].secondtabNextButton);

  })

page.close();
});

//48
test('NXGS-TC-5534: TC_48_Reisecare_1_Validate 1,2,3,4 tab content is displaying correctly in DE language', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-048"].url);
    
  })

  await test.step("Click on language Button ", async () => {
    await reiscarePage.clickOnLanguagechnageButton();
  })

  await test.step("Click on Reiscare program", async () => {
    await reiscarePage.clickOnRaisecarecareprogram();
  })

   await test.step("Verified first tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-048"].expectedPageTitle);
  })

  
page.close();
});

//49
test('NXGS-TC-5535: TC_49_Reisecare_1_Validate premium value get changed  based on  0-64, 65-80  age at the start date of the policy and plan selection', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
  
  await test.step("Verified Premium value for 'Exclude coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicareexcludeclassiczerotosixtyfiveageband(firsttabData["reiscare-049"].excludeclassictext);

  })

 page.close();
});

//51
test('NXGS-TC-5536: TC_051_Reisecare_1_Validate tiles content display correct full term contract premium based on selected product and with policy holder only', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
  
  await test.step("Verified text on Classic button as 'Free choice of doctors,Attractive cost-benefit ratio,Accident-related aids'", async () => {
    await reiscarePage.verifyClassicTileText(firsttabData["reiscare-051"].classicfcontenttext,firsttabData["reiscare-051"].classicscontenttext,firsttabData["reiscare-051"].classictdcontenttext);

  })
  

page.close();
});

//52
test('NXGS-TC-5537: C_52_Reisecare_1_Validate tiles content display correct full term contract premium based on selected product and the 9 number of members ', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
  
  await test.step("Verified text on Classic button as 'Free choice of doctors,Attractive cost-benefit ratio,Accident-related aids'", async () => {
    await reiscarePage.verifyClassicTileText(firsttabData["reiscare-051"].classicfcontenttext,firsttabData["reiscare-051"].classicscontenttext,firsttabData["reiscare-051"].classictdcontenttext);

  })
  
page.close();
});

//53
test('NXGS-TC-5538: TC_53_Reisecare_1_Validate Payment summary displays with the correct name and premium for each member in plan details page', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
  
  await test.step("Verified Name and premium for each member on payment summary page'", async () => {
    await reiscarePage.verifyNameandPremiumonpaymentsummarypageText(firsttabData["reiscare-053"].nametext,firsttabData["reiscare-053"].premiumtext);

  })
  
page.close();
});

//54 *****Working for Reisecare
test('NXGS-TC-5539: TC_54_Reisecare_1_Validate creating Reisecare policy using Derict debit', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })

  await test.step("Click on Classic Plan ", async () => {
    await reiscarePage.clickOnClassiccTile();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-054"].iban);

  })
   await test.step("Mandate IBAN checkbox", async () => {
    await reiscarePage.expatcareclickonibanchkboxTab();

  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.clickOnCheckboxesonfourtthtab();
  })

   
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })
  ////////page.pause();
  await test.step("Vaerified all details on Thank you page ", async () => {
   await reiscarePage.verifyThankyoupageText(firsttabData["reiscare-054"].thankyouText,firsttabData["reiscare-054"].requestText,firsttabData["reiscare-054"].questionText,firsttabData["reiscare-054"].infoText);
  })

page.close();
});

//56
test('NXGS-TC-5559: TC_056_Reisecare_2_Validate Ui fields displays in additional insured information section', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-006"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-006"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-006"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-006"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-006"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-006"].secondtabPreviousButton);

  })
page.close();
});

//57
test('NXGS-TC-5560: TC_057_Reisecare_2_Validate Ui fields displays in additional insured information section', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-006"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await reiscarePage.verifyadditionalinsuredPersonText(firsttabData["reiscare-006"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await reiscarePage.verifynoteText(firsttabData["reiscare-006"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await reiscarePage.verifyaddanotherinsuredPersonButton(firsttabData["reiscare-006"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-006"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-006"].secondtabPreviousButton);

  })
page.close();
});

//58
test('NXGS-TC-5561: TC_058_Reisecare_2_Validate user able to move to plan details (3rd tab) with only 1 insured member information', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  ////////page.pause();

  await test.step("Verified Third tab page title text as 'Online Application Reisecare - MAWISTA',", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-058"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await reiscarePage.verifyPlandetailsText(firsttabData["reiscare-058"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await reiscarePage.verifyPeriodofinsuranceText(firsttabData["reiscare-058"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await reiscarePage.verifyPreferredplanText(firsttabData["reiscare-058"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await reiscarePage.verifyAdditionnaloptionText(firsttabData["reiscare-058"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await reiscarePage.verifyIncludecoverageText(firsttabData["reiscare-058"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-058"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-058"].secondtabPreviousButton);

  })  
  
page.close();
});

//59
test('NXGS-TC-5562: TC_059_Reisecare_2_Validate user able to move to plan details (3rd tab) with 9 insured member information', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    // await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter second Additional insured person information", async () => {
    // await expatcarePage.expatcaresecondpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
    // await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Third Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
   
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Fourt Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Fifth Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Sixth Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Seventh Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Eigth Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Nineth Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })

  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  ////////page.pause();

  await test.step("Verified Third tab page title text as 'Online Application Reisecare - MAWISTA',", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-058"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await reiscarePage.verifyPlandetailsText(firsttabData["reiscare-058"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await reiscarePage.verifyPeriodofinsuranceText(firsttabData["reiscare-058"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await reiscarePage.verifyPreferredplanText(firsttabData["reiscare-058"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await reiscarePage.verifyAdditionnaloptionText(firsttabData["reiscare-058"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await reiscarePage.verifyIncludecoverageText(firsttabData["reiscare-058"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-058"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-058"].secondtabPreviousButton);

  })  
  
page.close();
});

//60
test('NXGS-TC-5563: TC_060_Reisecare_2_Validate user able to move to plan details (3rd tab) with alll 10  member information', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    // await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter second Additional insured person information", async () => {
    // await expatcarePage.expatcaresecondpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
    // await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Third Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
   
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Fourt Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Fifth Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Sixth Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Seventh Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Eigth Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Nineth Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })

  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  ////////page.pause();

  await test.step("Verified Third tab page title text as 'Online Application Reisecare - MAWISTA',", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-058"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await reiscarePage.verifyPlandetailsText(firsttabData["reiscare-058"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await reiscarePage.verifyPeriodofinsuranceText(firsttabData["reiscare-058"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await reiscarePage.verifyPreferredplanText(firsttabData["reiscare-058"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await reiscarePage.verifyAdditionnaloptionText(firsttabData["reiscare-058"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await reiscarePage.verifyIncludecoverageText(firsttabData["reiscare-058"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-058"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-058"].secondtabPreviousButton);

  })  
  
page.close();
});

//61
test('NXGS-TC-5564: TC_061_Reisecare_2_Validate Add another insured person button get disable when all total 9 members added', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    // await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter second Additional insured person information", async () => {
    // await expatcarePage.expatcaresecondpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
    // await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Third Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
   
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Fourt Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Fifth Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Sixth Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Seventh Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Eigth Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Nineth Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })

  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  ////////page.pause();

  await test.step("Verified Third tab page title text as 'Online Application Reisecare - MAWISTA',", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-058"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await reiscarePage.verifyPlandetailsText(firsttabData["reiscare-058"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await reiscarePage.verifyPeriodofinsuranceText(firsttabData["reiscare-058"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await reiscarePage.verifyPreferredplanText(firsttabData["reiscare-058"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await reiscarePage.verifyAdditionnaloptionText(firsttabData["reiscare-058"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await reiscarePage.verifyIncludecoverageText(firsttabData["reiscare-058"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-058"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-058"].secondtabPreviousButton);

  })  
  
page.close();
});

//62
test('NXGS-TC-5565: TC_062_Reisecare_2_Validate same passport number given in all insured member details', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    // await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter second Additional insured person information", async () => {
    // await expatcarePage.expatcaresecondpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
    // await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Third Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
   
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Fourt Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Fifth Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Sixth Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Seventh Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Eigth Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })
 
   await test.step("Click on Add another insured person Button ", async () => {
     //await expatcarePage.clickOnAddanotherinsuredpersonButton();
   })
 
   await test.step("Enter Nineth Additional insured person information", async () => {
     //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
   })

  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  ////////page.pause();

  await test.step("Verified Third tab page title text as 'Online Application Reisecare - MAWISTA',", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-058"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await reiscarePage.verifyPlandetailsText(firsttabData["reiscare-058"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await reiscarePage.verifyPeriodofinsuranceText(firsttabData["reiscare-058"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await reiscarePage.verifyPreferredplanText(firsttabData["reiscare-058"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await reiscarePage.verifyAdditionnaloptionText(firsttabData["reiscare-058"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await reiscarePage.verifyIncludecoverageText(firsttabData["reiscare-058"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-058"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-058"].secondtabPreviousButton);

  })  
  
page.close();
});

//63
test('NXGS-TC-5566: TC_063_Reisecare_2_Validate able to delete the added insured person using Remove button', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Second Tab Remove Button ", async () => {
    await reiscarePage.clickOnsecondtabRemoveButton();
  })

  await test.step("Verified Third tab page title text as 'Online Application Reisecare - MAWISTA',", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-058"].expectedPageTitle);
  })

page.close();
});

//64
test('NXGS-TC-5567: TC_064_Reisecare_2_Validate without insured member added able to redirect to plan details (3rd tab)', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  
  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  ////////page.pause();

  await test.step("Verified Third tab page title text as 'Online Application Reisecare - MAWISTA',", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-058"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await reiscarePage.verifyPlandetailsText(firsttabData["reiscare-058"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await reiscarePage.verifyPeriodofinsuranceText(firsttabData["reiscare-058"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await reiscarePage.verifyPreferredplanText(firsttabData["reiscare-058"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await reiscarePage.verifyAdditionnaloptionText(firsttabData["reiscare-058"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await reiscarePage.verifyIncludecoverageText(firsttabData["reiscare-058"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-058"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-058"].secondtabPreviousButton);

  })  
page.close();
});

//65
test('NXGS-TC-5568: TC_065_Reisecare_2_Validate no details given in added insured member information, able to redirect to plan details (3rd tab)', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  
  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-065"].FirstnameInput, firsttabData["reiscare-065"].LastnameInput,firsttabData["reiscare-065"].PassportInput,firsttabData["reiscare-065"].DayInput,firsttabData["reiscare-065"].MonthInput,firsttabData["reiscare-065"].YearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified text on Second tab as ' Field is required '", async () => {
    await reiscarePage.verifyfirstnamesecondtaberrorText(firsttabData["reiscare-065"].Firstnameinputfielderrormsg);

  })
page.close();
});

//66
test('NXGS-TC-5569: TC_066_Reisecare_2_Validate previous button functionality present in additional insured information (2nd tab)', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabPreviousButton();
  })

  await test.step("Verified text on first tab as 'Application for MAWISTA Reisecare'", async () => {
    await reiscarePage.verifyAplicationFirstTabText(firsttabData["reiscare-001"].applicationText);

  })

  await test.step("Verified  text on first tab as ' Policyholder's details '", async () => {
    await reiscarePage.verifyPolicbyholderdetailsFirstTaext(firsttabData["reiscare-001"].policyholderText);

  })
  
page.close();
});

//67
test('NXGS-TC-5570: TC_067_Reisecare_2_Validate Next button functionality present in additional insured information (2nd tab)', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
 
  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  ////////page.pause();

  await test.step("Verified Third tab page title text as 'Online Application Reisecare - MAWISTA',", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-058"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await reiscarePage.verifyPlandetailsText(firsttabData["reiscare-058"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await reiscarePage.verifyPeriodofinsuranceText(firsttabData["reiscare-058"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await reiscarePage.verifyPreferredplanText(firsttabData["reiscare-058"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await reiscarePage.verifyAdditionnaloptionText(firsttabData["reiscare-058"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await reiscarePage.verifyIncludecoverageText(firsttabData["reiscare-058"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-058"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-058"].secondtabPreviousButton);

  })  
  
page.close();
});

//68
test('NXGS-TC-5571: TC_068_Reisecare_2_Validate in dependent first name fields, able to give alphabetic text upto 60 characters', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-068"].FirstnameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })
 
  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await reiscarePage.verifyFirstnameoninsuredfirsttabfillederrorText(firsttabData["reiscare-068"].firstnameErrormsg);
  })  
page.close();
});

//69
test('NXGS-TC-5572: TC_069_Reisecare_2_Validate in dependent last  name fields, able to give alphabetic text upto 60 characters', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-068"].FirstnameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })
 
  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await reiscarePage.verifyFirstnameoninsuredfirsttabfillederrorText(firsttabData["reiscare-069"].lastnameErrormsg);
  })  
page.close();
});

//70
test('NXGS-TC-5573: TC_070_Reisecare_2_Validate able to select gender drop down value in added insured member', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  ////////page.pause();

  await test.step("Verified Third tab page title text as 'Online Application Reisecare - MAWISTA',", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-058"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await reiscarePage.verifyPlandetailsText(firsttabData["reiscare-058"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await reiscarePage.verifyPeriodofinsuranceText(firsttabData["reiscare-058"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await reiscarePage.verifyPreferredplanText(firsttabData["reiscare-058"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await reiscarePage.verifyAdditionnaloptionText(firsttabData["reiscare-058"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await reiscarePage.verifyIncludecoverageText(firsttabData["reiscare-058"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-058"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-058"].secondtabPreviousButton);

  })  
  
page.close();
});

//71
test('NXGS-TC-5574: TC_071_Reisecare_2_Validate able to give any date of birth in dependent date of birth field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  ////////page.pause();

  await test.step("Verified Third tab page title text as 'Online Application Reisecare - MAWISTA',", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-058"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await reiscarePage.verifyPlandetailsText(firsttabData["reiscare-058"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await reiscarePage.verifyPeriodofinsuranceText(firsttabData["reiscare-058"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await reiscarePage.verifyPreferredplanText(firsttabData["reiscare-058"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await reiscarePage.verifyAdditionnaloptionText(firsttabData["reiscare-058"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await reiscarePage.verifyIncludecoverageText(firsttabData["reiscare-058"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-058"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-058"].secondtabPreviousButton);

  })  
  
page.close();
});

//72
test('NXGS-TC-5575: TC_072_Reisecare_2_Validate dependency field is hidden in insured member details', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  ////////page.pause();

  await test.step("Verified Third tab page title text as 'Online Application Reisecare - MAWISTA',", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-058"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await reiscarePage.verifyPlandetailsText(firsttabData["reiscare-058"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await reiscarePage.verifyPeriodofinsuranceText(firsttabData["reiscare-058"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await reiscarePage.verifyPreferredplanText(firsttabData["reiscare-058"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await reiscarePage.verifyAdditionnaloptionText(firsttabData["reiscare-058"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await reiscarePage.verifyIncludecoverageText(firsttabData["reiscare-058"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-058"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-058"].secondtabPreviousButton);

  })  
  
page.close();
});

//73
test('NXGS-TC-5576: TC_073_Reisecare_2_Validate able to give minimum 1 length of characters in dependent first name field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-073"].FirstnameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  ////////page.pause();

  await test.step("Verified Third tab page title text as 'Online Application Reisecare - MAWISTA',", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-058"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await reiscarePage.verifyPlandetailsText(firsttabData["reiscare-058"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await reiscarePage.verifyPeriodofinsuranceText(firsttabData["reiscare-058"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await reiscarePage.verifyPreferredplanText(firsttabData["reiscare-058"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await reiscarePage.verifyAdditionnaloptionText(firsttabData["reiscare-058"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await reiscarePage.verifyIncludecoverageText(firsttabData["reiscare-058"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-058"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-058"].secondtabPreviousButton);

  })  
  
page.close();
});

//74
test('NXGS-TC-5577: TC_074_Reisecare_2_Validate able to give minimum 1 length of characters in dependent last name field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-074"].lastnameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  ////////page.pause();

  await test.step("Verified Third tab page title text as 'Online Application Reisecare - MAWISTA',", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-058"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await reiscarePage.verifyPlandetailsText(firsttabData["reiscare-058"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await reiscarePage.verifyPeriodofinsuranceText(firsttabData["reiscare-058"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await reiscarePage.verifyPreferredplanText(firsttabData["reiscare-058"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await reiscarePage.verifyAdditionnaloptionText(firsttabData["reiscare-058"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await reiscarePage.verifyIncludecoverageText(firsttabData["reiscare-058"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-058"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-058"].secondtabPreviousButton);

  })  
  
page.close();
});

//75
test('NXGS-TC-5578: TC_075_Reisecare_2_Validate in additional insured member, user is not able to give alphanumeric text in first name field of added de', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-075"].FirstNameInput, firsttabData["reiscare-074"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await reiscarePage.verifyFirstnameoninsuredfirsttabfillederrorText(firsttabData["reiscare-075"].firstnameErrormsg);
  }) 
page.close();
});

//76
test('NXGS-TC-5579: TC_76_Reisecare_2_Validate in additional insured field, user is not able to give alphanumeric text in last name field of added dependen', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-076"].lastnameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await reiscarePage.verifyFirstnameoninsuredfirsttabfillederrorText(firsttabData["reiscare-069"].lastnameErrormsg);
  })  
page.close();
});

//55
test('NXGS-TC-5540: TC_055_Reisecare_3_Validate full term contract premium displays in tiles and payment summary for duration of 65-80 days', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-049"].YearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
  
  await test.step("Verified Premium value for 'Exclude coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicareexcludeclassicsixtyfivetoeightyageband(firsttabData["reiscare-049"].excludeclassicsecondtext);

  })
 
page.close();
});

//79
test('NXGS-TC-5541: TC_079_Reisecare_3_Validate UI fields present in plan details (3rd tab)', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-006"].lastNameInput,firsttabData["reiscare-006"].passportInput,firsttabData["reiscare-006"].mobileNumbercodeInput,firsttabData["reiscare-006"].mobileNumberInput,firsttabData["reiscare-006"].emailInput,firsttabData["reiscare-006"].streetNameInput,firsttabData["reiscare-006"].streetNumberInput,firsttabData["reiscare-006"].postalCodeInput,firsttabData["reiscare-006"].additionalAddressInput,firsttabData["reiscare-006"].cityInput,firsttabData["reiscare-006"].dayInput,firsttabData["reiscare-006"].monthInput,firsttabData["reiscare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })
  
  await test.step("Click on Second Tab Next Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Verified Third tab page title text as 'Online Application Reisecare - MAWISTA',", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-058"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await reiscarePage.verifyPlandetailsText(firsttabData["reiscare-058"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await reiscarePage.verifyPeriodofinsuranceText(firsttabData["reiscare-058"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await reiscarePage.verifyPreferredplanText(firsttabData["reiscare-058"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await reiscarePage.verifyAdditionnaloptionText(firsttabData["reiscare-058"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await reiscarePage.verifyIncludecoverageText(firsttabData["reiscare-058"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await reiscarePage.verifyPaymentsummaryText(firsttabData["reiscare-058"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-058"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await reiscarePage.verifysecondtabPreviousButton(firsttabData["reiscare-058"].secondtabPreviousButton);

  })  
  
page.close();
});

//80
test('NXGS-TC-5544: C_080_Reisecare_3_Validate widget/tiles  content when Mawista Reisecare Excluding USA & Canada plan selected', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
  
  await test.step("Verified text on Classic button as 'Free choice of doctors,Attractive cost-benefit ratio,Accident-related aids'", async () => {
    await reiscarePage.verifyClassicTileText(firsttabData["reiscare-051"].classicfcontenttext,firsttabData["reiscare-051"].classicscontenttext,firsttabData["reiscare-051"].classictdcontenttext);

  })
  
page.close();
});

//81
test('NXGS-TC-5545: TC_081_Reisecare_3_Validate widget  content when Mawista Reisecare Excluding USA & Canada plan with Include coverage for accident and liability ', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
  
  await test.step("Verified text on Classic button as 'Free choice of doctors,Attractive cost-benefit ratio,Accident-related aids'", async () => {
    await reiscarePage.verifyClassicTileText(firsttabData["reiscare-051"].classicfcontenttext,firsttabData["reiscare-051"].classicscontenttext,firsttabData["reiscare-051"].classictdcontenttext);

  })
  
page.close();
});

//77
test('NXGS-TC-5580: TC_077_Reisecare_2_Validate able to give invalid  values  in insured member date of birth field ', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-077"].DayInput,firsttabData["reiscare-077"].MonthInput,firsttabData["reiscare-077"].YearInput);
  })
  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Verified Second Tab First name error text as '  Field format is invalid  '", async () => {
    await reiscarePage.verifyinvalidDateofbirtherrorText(firsttabData["reiscare-077"].additinaldateofbirthinsurederrormsg);
  })
 
  page.close();
});

//78
test('NXGS-TC-5581: TC_78_Reisecare_2_Validate giving invalid passport number in additional insured and dependent insured information field ', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-078"].PassportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })
  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Verified Second Tab First name error text as '  Field format is invalid  '", async () => {
    await reiscarePage.verifyinvalidPassprterrorText(firsttabData["reiscare-078"].invalidpasswordinsurederrormsg);
  })
 
  page.close();
});

//84
test('NXGS-TC-5546: TC_084_Reisecare_3_Validate able to select and create Reisecare policy from current month in current year in start date field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })

  await test.step("Click on Classic Plan ", async () => {
    await reiscarePage.clickOnClassiccTile();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-054"].iban);
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.clickOnCheckboxesonfourtthtab();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcareclickonibanchkboxTab();
  })
  
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })
  ////page.pause();
  await test.step("Vaerified all details on Thank you page ", async () => {
   await reiscarePage.verifyThankyoupageText(firsttabData["reiscare-054"].thankyouText,firsttabData["reiscare-054"].requestText,firsttabData["reiscare-054"].questionText,firsttabData["reiscare-054"].infoText);
  })

  page.close();
});

//85
test('NXGS-TC-5547: C_085_Reisecare_3_Validate able to select and create Reisecare policy with any month in future year in start date field', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select future Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareselectfutureStartandenddateonThirdtTab();
  })

  await test.step("Click on Classic Plan ", async () => {
    await reiscarePage.clickOnClassiccTile();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-054"].iban);
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.clickOnCheckboxesonfourtthtab();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcareclickonibanchkboxTab();
  })
  
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })
  ////////page.pause();
  await test.step("Vaerified all details on Thank you page ", async () => {
   await reiscarePage.verifyThankyoupageText(firsttabData["reiscare-054"].thankyouText,firsttabData["reiscare-054"].requestText,firsttabData["reiscare-054"].questionText,firsttabData["reiscare-054"].infoText);
  })

  page.close();
});

//86
test('NXGS-TC-5548:TC_086_Reisecare_3_Validate able to select and create Reisecare policies with  duration of 60-80 days', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-049"].YearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
  
  await test.step("Verified Premium value for 'Exclude coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicareexcludeclassicsixtyfivetoeightyageband(firsttabData["reiscare-049"].excludeclassicsecondtext);

  })
 
  page.close();
});

//88
test('NXGS-TC-5549: TC_088_Reisecare_3_validate able to select any month from calendar upto 1 year duration from start date  in end date selection', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-049"].YearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareselectoneyearStartandenddateonThirdtTab();
  })

  await test.step("Select Plan ", async () => {
    await reiscarePage.selectreiscareplanonThirdtTab();
  })
  
  await test.step("Verified Premium value for 'Exclude coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicareexcludeclassicsixtyfivetoeightageband(firsttabData["reiscare-088"].excludeclassicsecondtext);

  })
 
  page.close();
});


//90
test('NXGS-TC-5550: TC_090_Reisecare_3_Validate correct premium displays Mawista Reisecare Excluding USA & Canada and exclude accident and liability plan s', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
  
  await test.step("Verified text on Classic button as 'Free choice of doctors,Attractive cost-benefit ratio,Accident-related aids'", async () => {
    await reiscarePage.verifyClassicTileText(firsttabData["reiscare-051"].classicfcontenttext,firsttabData["reiscare-051"].classicscontenttext,firsttabData["reiscare-051"].classictdcontenttext);

  })
page.close();
});

//91
test('NXGS-TC-5551: TC_091_Reisecare_3_Validate correct premium displays Mawista Reisecare Excluding USA & Canada plan with Include coverage for accident and liability', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
  
  await test.step("Verified text on Classic button as 'Free choice of doctors,Attractive cost-benefit ratio,Accident-related aids'", async () => {
    await reiscarePage.verifyClassicTileText(firsttabData["reiscare-051"].classicfcontenttext,firsttabData["reiscare-051"].classicscontenttext,firsttabData["reiscare-051"].classictdcontenttext);

  })
page.close();
});

//93
test('NXGS-TC-5552: TC_093_Reisecare_3_Validate premium get changed when date of birth changed for selected product plan', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
  
  await test.step("Verified text on Classic button as 'Free choice of doctors,Attractive cost-benefit ratio,Accident-related aids'", async () => {
    await reiscarePage.verifyClassicTileText(firsttabData["reiscare-051"].classicfcontenttext,firsttabData["reiscare-051"].classicscontenttext,firsttabData["reiscare-051"].classictdcontenttext);

  })
page.close();
});

//94
test('NXGS-TC-5553: TC_094_Reisecare_3_Validate full term contract premium displays when insurance duration of 10 to 365 days', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-049"].YearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
  
  await test.step("Verified Premium value for 'Exclude coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicareexcludeclassicsixtyfivetoeightyageband(firsttabData["reiscare-049"].excludeclassicsecondtext);

  })
 
  page.close();
});

//95
test('NXGS-TC-5554: TC_095_Reisecare_3_Validate premium get increase when  dependent added for selected product plan', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-074"].lastnameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
  
  await test.step("Verified Premium value for 'Exclude coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicareexcludewithoneinsuredpersoneband(firsttabData["reiscare-095"].excludeclassicsecondtext);

  })
 
  page.close();
});

//96
test('NXGS-TC-5555: TC_096_Reisecare_3_Validate premium get changed when product plan selection changed', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-074"].lastnameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })


  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })

  
  await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  
 await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicareincludewithoneinsuredpersoneband(firsttabData["reiscare-096"].includeclassicsecondtext);

  })
 
  page.close();
});

//98
test('NXGS-TC-5556: TC_098_Reisecare_3_Validate premium get changed when gender changed in dependent information for selected product plan', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-074"].lastnameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })


  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })

  
  await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  
 await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicareincludewithoneinsuredpersoneband(firsttabData["reiscare-096"].includeclassicsecondtext);

  })
 
  page.close();
});

//99
test('NXGS-TC-5557: TC_99_Reisecare_3_Validate giving start date of insurance  is greater than end date of insurance', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-006"].firstNameInput, firsttabData["reiscare-074"].lastnameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })


  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })

  
  await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  
 await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicareincludewithoneinsuredpersoneband(firsttabData["reiscare-096"].includeclassicsecondtext);

  })
 
  page.close();
});

//100
test('NXGS-TC-5558: TC_100_Reisecare_3_Validate correct payment summary details displays when only policy holder added in policy', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })


  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  
 await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicarewithoutinsureperson(firsttabData["reiscare-100"].includeclassicsecondtext);

  })
 
  page.close();
});

//50
test('NXGS-TC-5582: TC_050_Reisecare_3_Validate Reisecare policy is not purchased backdated', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  
 await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicarewithoutinsureperson(firsttabData["reiscare-100"].includeclassicsecondtext);

  })
 
  page.close();
});

//87
test('NXGS-TC-5583: TC_087_Reisecare_3_Validate user able to select any dates from curent date onwards in start date field from calendar', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  
 await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicarewithoutinsureperson(firsttabData["reiscare-100"].includeclassicsecondtext);

  })
 
  page.close();
});

//89
test('NXGS-TC-5584: TC_089_Reisecare_3_Validate user able to give date of birth more than 80 yrs from start date of policy ', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  
 await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicarewithoutinsureperson(firsttabData["reiscare-100"].includeclassicsecondtext);

  })
 
  page.close();
});

//92
test('NXGS-TC-5585: TC_092_Reisecare_3_Validate correct premium displays when Mawista Reisecare including USA & Canada plan with Include coverage for accident and liability insurance plan selected', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  
 await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicarewithoutinsureperson(firsttabData["reiscare-100"].includeclassicsecondtext);

  })
 
  page.close();
});

//97
test('NXGS-TC-5586: TC_097_Reisecare_3_Validate premium get changed when gender changed in insured member information for selected product plan', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  
 await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicarewithoutinsureperson(firsttabData["reiscare-100"].includeclassicsecondtext);

  })
 
  page.close();
});

//101
test('NXGS-TC-5587: TC_101_Reisecare_3_Validate correct payment summary details displays when 1 insured member added in policy', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  
 await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicarewithoutinsureperson(firsttabData["reiscare-100"].includeclassicsecondtext);

  })
 
  page.close();
});

//102
test('NXGS-TC-5588: TC_102_Reisecare_3_Validate correct payment summary details displays when upto 9 insured member added in policy', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  
 await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicarewithoutinsureperson(firsttabData["reiscare-100"].includeclassicsecondtext);

  })
 
  page.close();
});

//103
test('NXGS-TC-5589: TC_103_Reisecare_3_Validate with all details given in plan details (3rd tab), able to redirect to 4th', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Verified text on fourth tab as ' Payment method and checkout '", async () => {
    await reiscarePage.verifpaymentmethodandcheckouttextonthirstab(firsttabData["reiscare-101"].paymentmethodtext);

  })

  await test.step("Verified text on Fourth tab as ' Select your payment option '", async () => {
    await reiscarePage.verifpaymentPaymentoptionfourthtab(firsttabData["reiscare-101"].paymentoptiontext);

  })

  await test.step("Verified text on Fourth tab as ' Credit Card '", async () => {
    await reiscarePage.verifycreditcardtextfourthtab(firsttabData["reiscare-101"].creditcardText);

  })

 

  await test.step("Verified text on Fourth tab as ' I have read and hereby accept the   '", async () => {
    await reiscarePage.verifyCheckboconefourthtab(firsttabData["reiscare-101"].checkboxoneText);

  })

  await test.step("Verified text on Fourth tab as ' I consent to MAWISTA GmbH sending me information a   '", async () => {
    await reiscarePage.verifyCheckboxtwofourthtab(firsttabData["reiscare-101"].checkboxtwoText);

  })

  await test.step("Verified text on Fourth tab as ' Yes, I sufficiently informed myself about the product and I would like to continue without further consultation.   '", async () => {
    await reiscarePage.verifyCheckboxthirdfourthtab(firsttabData["reiscare-101"].checkboxthirdText);

  })
 
  await test.step("Verified Apply & Pay button visible on second tab", async () => {
    await reiscarePage.verifyfourthtabNextButton(firsttabData["reiscare-101"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on fourth tab", async () => {
    await reiscarePage.verifyfourthtabPreviousButton(firsttabData["reiscare-101"].secondtabPreviousButton);

  })  
 
  page.close();
});

//104
test('NXGS-TC-5590: TC_104_Reisecare_3_Validate premium value is displays only after coverage duration selected', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  
 await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicarewithoutinsureperson(firsttabData["reiscare-100"].includeclassicsecondtext);

  })
 
  page.close();
});

//105
test('NXGS-TC-5591: TC_105_Reisecare_3_Validate premium value  not displays without coverage selection', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  
 await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicarewithoutinsureperson(firsttabData["reiscare-100"].includeclassicsecondtext);

  })
 
  page.close();
});

//106
test('NXGS-TC-5592: TC_106_Reisecare_3_Validate without any details start date and end date fields in plan details (3rd tab), able to redirect to Payment method and checkout (4th tab)', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Verified validation text on third tab", async () => {
    await reiscarePage.verifystartdateerrortext(firsttabData["reiscare-106"].errortext);
  })
 
  page.close();
});

//107
test('NXGS-TC-5593: TC_107_Reisecare_3_Validate without any plan selection in plan details (3rd tab), able to redirect to Payment method and check', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Verified text on fourth tab as ' Payment method and checkout '", async () => {
    await reiscarePage.verifpaymentmethodandcheckouttextonthirstab(firsttabData["reiscare-101"].paymentmethodtext);

  })

  await test.step("Verified text on Fourth tab as ' Select your payment option '", async () => {
    await reiscarePage.verifpaymentPaymentoptionfourthtab(firsttabData["reiscare-101"].paymentoptiontext);

  })

  await test.step("Verified text on Fourth tab as ' Credit Card '", async () => {
    await reiscarePage.verifycreditcardtextfourthtab(firsttabData["reiscare-101"].creditcardText);

  })

  await test.step("Verified text on Fourth tab as ' I have read and hereby accept the   '", async () => {
    await reiscarePage.verifyCheckboconefourthtab(firsttabData["reiscare-101"].checkboxoneText);

  })

  await test.step("Verified text on Fourth tab as ' I consent to MAWISTA GmbH sending me information a   '", async () => {
    await reiscarePage.verifyCheckboxtwofourthtab(firsttabData["reiscare-101"].checkboxtwoText);

  })

  await test.step("Verified text on Fourth tab as ' Yes, I sufficiently informed myself about the product and I would like to continue without further consultation.   '", async () => {
    await reiscarePage.verifyCheckboxthirdfourthtab(firsttabData["reiscare-101"].checkboxthirdText);

  })
 
  await test.step("Verified Apply & Pay button visible on second tab", async () => {
    await reiscarePage.verifyfourthtabNextButton(firsttabData["reiscare-101"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on fourth tab", async () => {
    await reiscarePage.verifyfourthtabPreviousButton(firsttabData["reiscare-101"].secondtabPreviousButton);

  })  
 
  page.close();
});

//108
test('NXGS-TC-5594: TC_108_Reisecare_3_Validate user is not able to give duration less than 10 and  more than 365 days', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  
 await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicarewithoutinsureperson(firsttabData["reiscare-100"].includeclassicsecondtext);

  })
 
  page.close();
});

//109
test('NXGS-TC-5595: TC_109_Reisecare_3_Validate in payment summary, additional member sorted with oldest DOB first displays in row', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  
 await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicarewithoutinsureperson(firsttabData["reiscare-100"].includeclassicsecondtext);

  })
 
  page.close();
});

//150
test('NXGS-TC-5596: TC_150_Reisecare_3_Validate Premium is displayed as a per trip amount not monthly amount', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  
 await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicarewithoutinsureperson(firsttabData["reiscare-100"].includeclassicsecondtext);

  })
 
  page.close();
});

//164
test('NXGS-TC-5597: TC_164_Reisecare_3_Validate Customer is able to add optional liability cover for an additional daily charge (flat rate for all ages)', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  
 await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic'", async () => {
    await reiscarePage.verifyPremiumvaluesforResicarewithoutinsureperson(firsttabData["reiscare-100"].includeclassicsecondtext);

  })
 
  page.close();
});

//110
test('NXGS-TC-5598: TC_110_Reisecare_4_Validate UI fields displays in payment details and checkout tab', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Verified text on fourth tab as ' Payment method and checkout '", async () => {
    await reiscarePage.verifpaymentmethodandcheckouttextonthirstab(firsttabData["reiscare-101"].paymentmethodtext);

  })

  await test.step("Verified text on Fourth tab as ' Select your payment option '", async () => {
    await reiscarePage.verifpaymentPaymentoptionfourthtab(firsttabData["reiscare-101"].paymentoptiontext);

  })

  await test.step("Verified text on Fourth tab as ' Credit Card '", async () => {
    await reiscarePage.verifycreditcardtextfourthtab(firsttabData["reiscare-101"].creditcardText);

  })

  await test.step("Verified text on Fourth tab as ' I have read and hereby accept the   '", async () => {
    await reiscarePage.verifyCheckboconefourthtab(firsttabData["reiscare-101"].checkboxoneText);

  })

  await test.step("Verified text on Fourth tab as ' I consent to MAWISTA GmbH sending me information a   '", async () => {
    await reiscarePage.verifyCheckboxtwofourthtab(firsttabData["reiscare-101"].checkboxtwoText);

  })

  await test.step("Verified text on Fourth tab as ' Yes, I sufficiently informed myself about the product and I would like to continue without further consultation.   '", async () => {
    await reiscarePage.verifyCheckboxthirdfourthtab(firsttabData["reiscare-101"].checkboxthirdText);

  })
 
  await test.step("Verified Apply & Pay button visible on second tab", async () => {
    await reiscarePage.verifyfourthtabNextButton(firsttabData["reiscare-101"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on fourth tab", async () => {
    await reiscarePage.verifyfourthtabPreviousButton(firsttabData["reiscare-101"].secondtabPreviousButton);

  })  
 
  page.close();
});

//111
test('NXGS-TC-5599: TC_111_Reisecare_4_Validate UI fields displays when SEPA direct debit option selected in payment method', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  
  await test.step("Verified the visiblity of Name of Account holder and IBAN", async () => {
    await reiscarePage.verifydebitcarddettailstab();
  })
  page.close();
});

//112
test('NXGS-TC-5600: TC_112_Reisecare_4_Validate UI fields displays when credit card option selected in payment method', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.clickOnCheckboxesonfourtthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })

  await test.step("Verified the visiblity of Name of Policy holder", async () => {
    await reiscarePage.verifcreditcardformtextfoonurthtab();
  })
   
  page.close();
});

//113
test('NXGS-TC-5601: TC_113_Reisecare_4_Validate user able to purchase the Reisecare policy with all required details using sepa direct debit option in payment details with valid iban and checkout tab', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-054"].iban);
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.clickOnCheckboxesonfourtthtab();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcareclickonibanchkboxTab();
  })
  
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })
  ////////page.pause();
  await test.step("Vaerified all details on Thank you page ", async () => {
   await reiscarePage.verifyThankyoupageText(firsttabData["reiscare-054"].thankyouText,firsttabData["reiscare-054"].requestText,firsttabData["reiscare-054"].questionText,firsttabData["reiscare-054"].infoText);
  })
  page.close();
});

//114
test('NXGS-TC-5602: TC_114_Reisecare_4_Validate user able to purchase the Reisecare policy with all required details using credit card option in payment details and checkout tab', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.clickOnCheckboxesonfourtthtab();
  })

  //page.pause();
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })

  
  await test.step("Enter all details of credit card ", async () => {
    await reiscarePage.reiscareFilldetailsoncreditcardTab();
  })
   //page.pause();
  await test.step("Verified all details on Thank you page ", async () => {
    await reiscarePage.verifyThankyoupageText(firsttabData["reiscare-054"].thankyouText,firsttabData["reiscare-054"].requestText,firsttabData["reiscare-054"].questionText,firsttabData["reiscare-054"].infoText);
   })

  page.close();
});

//115
test('NXGS-TC-5603: TC_115_Reisecare_4_Validate when Reisecare policy created then policy status is shown under “Validated“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Previous button of  fourth tab", async () => {
    await reiscarePage.clickOnsecondtabPreviousButton();
  })
  
  await test.step("Verified text on Third tab as ' Payment Details '", async () => {
    await reiscarePage.verifyPlandetailsText(firsttabData["reiscare-101"].plandetailstext);

  })

  page.close();
});

//116
test('NXGS-TC-5604: TC_116_Reisecare_4_Validate previous button functionality in payment details page“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Previous button of  fourth tab", async () => {
    await reiscarePage.clickOnsecondtabPreviousButton();
  })
  
  await test.step("Verified text on Third tab as ' Payment Details '", async () => {
    await reiscarePage.verifyPlandetailsText(firsttabData["reiscare-058"].planneddetailsText);

  })

  page.close();
});

//117
test('NXGS-TC-5605: TC_117_Reisecare_4_Validate after purchasing Reisecare policy, success page is generated“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-054"].iban);
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.clickOnCheckboxesonfourtthtab();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcareclickonibanchkboxTab();
  })
  //page.pause();
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })
  //page.pause();
  await test.step("Vaerified all details on Thank you page ", async () => {
   await reiscarePage.verifyThankyoupageText(firsttabData["reiscare-054"].thankyouText,firsttabData["reiscare-054"].requestText,firsttabData["reiscare-054"].questionText,firsttabData["reiscare-054"].infoText);
  })

  page.close();
});

//118
test('NXGS-TC-5606: TC_118_Reisecare_4_Validate when payment method not selected while purchasing Reisecare policy“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
  ////////page.pause();
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })
  
  await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await reiscarePage.verifyCheckboxconseterrorText(firsttabData["reiscare-118"].errorconsentText);
    })
 

  page.close();
});

//119
test('NXGS-TC-5607: TC_119_Reisecare_4_Validate without mandatory consent check box checked, able to purchase Reisecare policy“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })
  
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })
  
  await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await reiscarePage.verifyCheckboxconseterrorText(firsttabData["reiscare-118"].errorconsentText);
    })
 
  page.close();
});

//120
test('NXGS-TC-5608: TC_120_Reisecare_4_Validate giving invalid iban number given for SEPA direct debit option“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })
 
  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-111"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await reiscarePage.verifyIbanerrorText(firsttabData["reiscare-111"].errorconsentText);
    })
 
  page.close();
});

//121
test('NXGS-TC-5609: TC_121_Reisecare_4_Validate BIC field displays only when valid IBAN number given for SEPA direct debit option“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })
 
  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })
 
  page.close();
});

//122
test('NXGS-TC-5610: TC_122_Reisecare_4_Validate when Reisecare policy is purchase then customer receives an email for policy validated“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })
 
  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })
 
  page.close();
});

//123
test('NXGS-TC-5611: TC_123_Reisecare_4_Validate user able to reject resiecare policy“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })
 
  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })
 
  page.close();
});

//124
test('NXGS-TC-5612: TC_124_Reisecare_4_Validate when SEPA direct debit selected then Direct Payment” pay way reflects on contract“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })
 
  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })
 
  page.close();
});

//125
test('NXGS-TC-5613: TC_125_Reisecare_4_Validate when credit card selected then credit card” pay way reflects on contract“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })
 
  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })
 
  page.close();
});

//126
test('NXGS-TC-5614: TC_126_Reisecare_4_Validate when credit card option selected then in credit card pop-up scree, default credit card button is selected“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  page.close();
});

//127
test('NXGS-TC-5615: TC_127_Reisecare_4_Validate when credit card option selected then in credit card pop-up scree, default card holder name displays“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })
    
  page.close();
});

//128
test('NXGS-TC-5616: TC_128_Reisecare_4_Validate when credit card option selected then in credit card pop-up scree, default given email address displays“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })
 
  page.close();
});

//129
test('NXGS-TC-5617: TC_129_Reisecare_4_Validate when credit card option selected then in credit card pop-up scree, place holder text displays in Expiration date field“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })
 
  page.close();
});

//130
test('NXGS-TC-5618: TC_130_Reisecare_4_Validate user able to give credit card number using copy button functionality“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  page.close();
});

//131
test('NXGS-TC-5619: TC_131_Reisecare_4_Validate user able to copy credit card number from right click option“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  page.close();
});

//132
test('NXGS-TC-5620: TC_132_Reisecare_4_Validate for security code field, able to verify security code as per given credit card details“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  page.close();
});

//133
test('NXGS-TC-5621: TC_133_Reisecare_4_Validate when credit card option selected then in credit card pop-up screen, user able to create Reisecare Policy with valid credit card number details“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.clickOnCheckboxesonfourtthtab();
  })

  //page.pause();
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })

  //page.pause();
  await test.step("Enter all details of credit card ", async () => {
    await reiscarePage.reiscareFilldetailsoncreditcardTab();
  })
  //page.pause();
  await test.step("Verified all details on Thank you page ", async () => {
    await reiscarePage.verifyThankyoupageText(firsttabData["reiscare-054"].thankyouText,firsttabData["reiscare-054"].requestText,firsttabData["reiscare-054"].questionText,firsttabData["reiscare-054"].infoText);
   })

  page.close();
});

//134
test('NXGS-TC-5622: TC_134_Reisecare_4_Validate in credit card number field, only valid credit card number accepts“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await reiscarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await reiscarePage.expatcaresecondtTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  
  page.close();
});

//135
test('NXGS-TC-5623: TC_135_Reisecare_4_Validate in credit card number field, invalid credit card number not accepts“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })
 
  

  page.close();
});

//136
test('NXGS-TC-5624: TC_136_Reisecare_4_Validate user is not able to create Reisecare Policy with invalid credit card number details“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  page.close();
});

//137
test('NXGS-TC-5625: TC_137_Reisecare_4_Validate user able to create Reisecare Policy with invalid value in month field of expiration date“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  page.close();
});

//138
test('NXGS-TC-5626: TC_138_Reisecare_4_Validate user able to create Reisecare Policy with invalid value in year field of expiration date“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  page.close();
});


//139
test('NXGS-TC-5627: TC_139_Reisecare_4_Validate user able to create Reisecare Policy with invalid value in security code field“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  page.close();
});

//140
test('NXGS-TC-5628: TC_140_Reisecare_4_Validate user able to create Reisecare Policy with invalid value in postal  code field“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  page.close();
});

//141
test('NXGS-TC-5629: TC_141_Reisecare_4_Validate user able to create Reisecare Policy with invalid email address field“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  page.close();
});

//142
test('NXGS-TC-5630: TC_142_Reisecare_4_Validate user able to create Reisecare Policy without any details in credit card pop-up screen“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  page.close();
});

//143
test('NXGS-TC-5631: TC_143_Reisecare_4_Validate user able to create Reisecare Policy with valid credit card details after session expired“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  page.close();
});

//144
test('NXGS-TC-5632: TC_144_Reisecare_4_Validate user able to create Reisecare Policy with valid credit card details within active session“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  page.close();
});

//145
test('NXGS-TC-5633: TC_145_Reisecare_4_Validate user able to create Reisecare Policy when click on cancel button present in credit card pop-up screen“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  page.close();
});

//146
test('NXGS-TC-5634: TC_146_Reisecare_4_Validate without payment details and consent details, able to purchase policy“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnCreditcardradioButton();
  })

 
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })

 
  //page.pause();
  await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await reiscarePage.verifyCheckboxconseterrorText(firsttabData["reiscare-118"].errorconsentText);
    })

  page.close();
});

//147
test('NXGS-TC-5635: TC_147_Reisecare_4_Validate tab button functionality in every page“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnCreditcardradioButton();
  })

  
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })


  await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await reiscarePage.verifyCheckboxconseterrorText(firsttabData["reiscare-118"].errorconsentText);
    })

  page.close();
});

//148
test('NXGS-TC-5636: TC_148_Reisecare_4_Validate using EN language option , all field label,content is correctly displaying in every tab“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-001"].url);
    
  })

   await test.step("Verified first tab page title text as 'Online Application Reisecare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-001"].expectedPageTitle);
  })

  await test.step("Verified text on first tab as 'Application for MAWISTA Reisecare'", async () => {
    await reiscarePage.verifyAplicationFirstTabText(firsttabData["reiscare-001"].applicationText);

  })

  await test.step("Verified  text on first tab as ' Policyholder's details '", async () => {
    await reiscarePage.verifyPolicbyholderdetailsFirstTaext(firsttabData["reiscare-001"].policyholderText);

  })
  
  await test.step("Verified text on first tab as '  Are you the insured person? '", async () => {
    await reiscarePage.verifyAreyouinsuredpersonFirstText(firsttabData["reiscare-001"].areyouinsuredpersonText);

  })

  await test.step("Verified text on first tab as '   Enter your date of birth and gender  '", async () => {
    await reiscarePage.verifyEnteryourdateofbirthFirstText(firsttabData["reiscare-001"].enterdateofbirthText);

  })

  await test.step("Verified Next button visible and clickable on second tab", async () => {
    await reiscarePage.verifysecondtabNextButton(firsttabData["reiscare-001"].secondtabNextButton);

  })
  page.close();
});

//149
test('NXGS-TC-5637: TC_149_Reisecare_4_Validate using DE language option , all field label,content is correctly displaying in every tab“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-149"].url);
    
  })

  await test.step("Click on language Button ", async () => {
    await reiscarePage.clickOnLanguagechnageButton();
  })

  
   await test.step("Verified first tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-149"].expectedPageTitle);
  })
  page.close();
});

//151
test('NXGS-TC-5638: TC_151_Reisecare_4_Validate able to create Reisecare policy with DE language“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-001"].url);
    
  })


  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })

  await test.step("Click on Classic Plan ", async () => {
    await reiscarePage.clickOnClassiccTile();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

});

//152
test('NXGS-TC-5639: TC_152_Reisecare_4_Validate chinese language label displays from language menu“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-149"].url);
    
  })

  await test.step("Click on language Button ", async () => {
    await reiscarePage.clickOnLanguagechnageButton();
  })

   await test.step("Verified first tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await reiscarePage.verifyPageTitle(firsttabData["reiscare-149"].expectedPageTitle);
  })
  page.close();
});

//153
test('NXGS-TC-5640: TC_153_Reisecare_4_Validate BIC field displays only when valid SEPA IBAN number given for SEPA direct debit option“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })
 
  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })
  page.close();
});

//154
test('NXGS-TC-5641: TC_154_Reisecare_4_Validate giving invalid and not SEPA iban number given for SEPA direct debit option“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })
 
  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-111"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await reiscarePage.verifyIbanerrorText(firsttabData["reiscare-111"].errorconsentText);
    })
  page.close();
});

//155
test('NXGS-TC-5642: TC_155_Reisecare_4_Validate giving invalid and not SEPA iban number given for SEPA direct debit option for DE language selection“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })
 
  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-111"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await reiscarePage.verifyIbanerrorText(firsttabData["reiscare-111"].errorconsentText);
    })
  page.close();
});

//156
test('NXGS-TC-5643: TC_156_Reisecare_4_Validate default policy holder name displays in  Account  name field of credit card pop-up screen and SEPA field“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  page.close();
});

//157
test('NXGS-TC-5644: TC_157_Reisecare_4_Validate when SEPA direct debit  selected then payment information get saved in policy details“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })
  page.close();
});

//158
test('NXGS-TC-5645: TC_158_Reisecare_4_Validate when credit card selected then credit card” as payment information get saved in policy details“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.clickOnCheckboxesonfourtthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })
  //page.pause();
  await test.step("Vaerified  details on Credit Card Popop ", async () => {
    await reiscarePage.verifyCreditcardholderEmailtext(firsttabData["reiscare-128"].creditcardNameText);
    })
  page.close();
});

//159
test('NXGS-TC-5646: TC_159_Reisecare_4_Validate initial payment get deducted when Reisecare policy purchase by credit card“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  page.close();
});

//160
test('NXGS-TC-5647: TC_160_Reisecare_4_Validate the email template and document sent in customer mail when Reisecare policy purchase“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })

  page.close();
});

//161
test('NXGS-TC-5648: TC_161_Manage Policies_Syncro_Validate as per given details in B2C, same details is shown in Sycnro portal“', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].DayInput,firsttabData["reiscare-049"].MonthInput,firsttabData["reiscare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })
  await test.step("Select Start and End Date on Third Tab ", async () => {
    await reiscarePage.reiscareStartandenddateonThirdtTab();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-121"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
    await reiscarePage.verifyBICFiledText(firsttabData["reiscare-121"].bicfieldText);
    })
  page.close();
});

//162
test('NXGS-TC-5649: TC_162_Syncro_Manage policies_Validate as per given details in B2C portal  same policy details shown in edit page“', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await reiscarePage.enterpolicydetails(firsttabData["reiscare-162"].policyIdText);
  })

  await test.step("Verified policy details on Syncro portal ", async () => {
   // await reiscarePage.verifyPolicyholderdetailstext(firsttabData["reiscare-162"].policyholdernameText,firsttabData["reiscare-162"].countrytext);
    await reiscarePage.verifyPolicyholderdetailstext(firsttabData["reiscare-162"].policyholdernameText,firsttabData["reiscare-162"].citytext,firsttabData["reiscare-162"].policyholderemailtext,firsttabData["reiscare-162"].policyholderphonetext,firsttabData["reiscare-162"].effectivedate,firsttabData["reiscare-162"].edenddate);
    })

  page.close();
});

//163
test('NXGS-TC-5650: TC_163_Syncro_Manage policies_Validate created Reisecare policy with validated policy status“', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await reiscarePage.enterpolicydetail(firsttabData["reiscare-163"].policyIdText);
  })

  await test.step("verify  policy status on Syncro portal ", async () => {
   
    await reiscarePage.verifyNewPolicystatusrejecttext(firsttabData["reiscare-163"].policystatusText);
  
})


  page.close();
});

//165
test('NXGS-TC-5651: TC_165_Syncro_Manage policies_Validate correct premium displays in syncro for Reisecare  for exclude USA & Canada  and exclude coverage for accident and liability insurance plan purchase  from B2C“', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await reiscarePage.enterpolicydetail(firsttabData["reiscare-165"].policyIdText);
  })

  await test.step("Verified policy status on Syncro portal ", async () => {
    await reiscarePage.verifyPolicyprmiumexcludetext(firsttabData["reiscare-165"].policypremiumText);
    })

  page.close();
});

//166
test('NXGS-TC-5652: TC_166_Syncro_Manage policies_Validate correct premium displays in syncro for Reisecare  for exclue USA & Canada  and include coverage for accident and liability insurance plan purchase  from B2C“', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await reiscarePage.enterpolicydetail(firsttabData["reiscare-166"].policyIdText);
  })

  await test.step("Verified policy status on Syncro portal ", async () => {
    await reiscarePage.verifyPolicyprmiumexcludetext(firsttabData["reiscare-166"].policypremiumText);
    })

  page.close();
});

//167
test('NXGS-TC-5653:TC_167_Syncro_Manage policies_Validate correct premium displays in syncro for Reisecare  for inclue USA & Canada  and exclude coverage for accident and liability insurance plan purchase  from B2C“', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await reiscarePage.enterpolicydetail(firsttabData["reiscare-165"].policyIdText);
  })

  await test.step("Verified policy status on Syncro portal ", async () => {
    await reiscarePage.verifyPolicyprmiumexcludetext(firsttabData["reiscare-165"].policypremiumText);
    })

  page.close();
});

//168
test('NXGS-TC-5654: TC_168_Syncro_Manage policies_Validate correct premium displays in syncro for Reisecare  for include USA & Canada  and include coverage for accident and liability insurance plan purchase  from B2“', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await reiscarePage.enterpolicydetail(firsttabData["reiscare-166"].policyIdText);
  })

  await test.step("Verified policy status on Syncro portal ", async () => {
    await reiscarePage.verifyPolicyprmiumexcludetext(firsttabData["reiscare-165"].policypremiumText);
    })

  page.close();
});


test('NXGF-TC-3928: TC_005_long term_Verify that the user is able to view the saved card details in Syncro "financial info page" after validating the policy', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);

  await test.step("Load the URL in Browser", async () => {
      await reiscarePage.gotoHomePage(onePayData["TC_005_long_term"].url);
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
      await reiscarePage.reiscareFirstTab(onePayData["TC_005_long_term"].firstNameInput, onePayData["TC_005_long_term"].lastNameInput, onePayData["TC_005_long_term"].passportInput, onePayData["TC_005_long_term"].mobileNumbercodeInput, onePayData["TC_005_long_term"].mobileNumberInput, onePayData["TC_005_long_term"].emailInput, onePayData["TC_005_long_term"].streetNameInput, onePayData["TC_005_long_term"].streetNumberInput, onePayData["TC_005_long_term"].postalCodeInput, onePayData["TC_005_long_term"].additionalAddressInput, onePayData["TC_005_long_term"].cityInput, onePayData["TC_005_long_term"].DayInput, onePayData["TC_005_long_term"].MonthInput, onePayData["TC_005_long_term"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
      await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
      await reiscarePage.clickOnsecondtabNextButton();
  })          
  await test.step("Select Start and End Date on Third Tab ", async () => {
  await reiscarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["reiscare-049"].startdate, firsttabData["reiscare-049"].enddate);
  })
  //Commenting this code temporarily as below 4 methods are not available in page object
  /*
  await test.step("Click on Third Tab Next Button ", async () => {
      await reiscarePage.clickOnThirdTabNextBbutton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await reiscarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
      await reiscarePage.clickOnCheckboxesonfourtthtab();
  })
  //page.pause();
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await reiscarePage.clickOnApplyandPpayButton();
  })

  await test.step("Enter all details of credit card ", async () => {
      await reiscarePage.reiscareFilldetailsoncredittcardTab();
      await page.waitForLoadState('networkidle');
  })

  await test.step("Verified all details on Thank you page ", async () => {
      await page.waitForLoadState('networkidle');
      await reiscarePage.getPolicyNumber(onePayData["TC_005_long_term"].username, onePayData["TC_005_long_term"].password);
  })
*/
  page.close();
});

test.describe('b2cReisecareEU',()=>{
// TC-170 For Data creation Reisecare Excl US CAN Excl Liab **Working**
test('NXGS-TC-5539: TC_54_Reisecare_1_Validate creating Reisecare policy using Direct debit', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url2);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })


  await test.step("Select Start and End Date on Third Tab ", async () => {
  await reiscarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["reiscare-049"].startdate, firsttabData["reiscare-049"].enddate);
  })

  await test.step("Click on Classic Plan ", async () => {
    await reiscarePage.clickOnClassiccTile();
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-054"].iban);

  })
   await test.step("Mandate IBAN checkbox", async () => {
    await reiscarePage.expatcareclickonibanchkboxTab();

  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.clickOnCheckboxesonfourtthtab();
  })

   
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })
  ////////page.pause();
  await test.step("Verified all details on Thank you page ", async () => {
  await reiscarePage.checkThankyoupageText(firsttabData["reiscare-054"].thankyouText);
    
   })

page.close();
});

// TC-171 For Data creation Reisecare Inc US CAN Inc Lia**Working**
test('NXGS-TC-5540: TC_55_Reisecare_1_Validate creating Reisecare policy Inc US CAN Inc Liability using Direct debit', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url2);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
  await reiscarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["reiscare-049"].startdate, firsttabData["reiscare-049"].enddate);
  })
  await test.step("Click on Classic Plan ", async () => {
    await reiscarePage.clickOnClassiccTile();
  })

    await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await reiscarePage.clickOnIncludeliabilitycheckbox();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-054"].iban);

  })
   await test.step("Mandate IBAN checkbox", async () => {
    await reiscarePage.expatcareclickonibanchkboxTab();

  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.clickOnCheckboxesonfourtthtab();
  })

   
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })
  ////////page.pause();
  /*await test.step("Vaerified all details on Thank you page ", async () => {
   await reiscarePage.verifyThankyoupageText(firsttabData["reiscare-054"].thankyouText,firsttabData["reiscare-054"].requestText,firsttabData["reiscare-054"].questionText,firsttabData["reiscare-054"].infoText);
  })*/
  await test.step("Verified all details on Thank you page ", async () => {
  await reiscarePage.checkThankyoupageText(firsttabData["reiscare-054"].thankyouText);
    
   })

page.close();
});

// TC-172 For Data creation Reisecare Inc US CAN Excl Lia**Working**
test('NXGS-TC-5541: TC_56_Reisecare_1_Validate creating Reisecare policy Inc US CAN Excl Liab using Direct debit', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url2);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  // await test.step("Select Start and End Date on Third Tab ", async () => {
  //   await reiscarePage.reiscareStartandenddateonThirdtTab();
  // })

  await test.step("Select Start and End Date on Third Tab ", async () => {
  await reiscarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["reiscare-049"].startdate, firsttabData["reiscare-049"].enddate);
  })

  await test.step("Click on Classic Plan ", async () => {
    await reiscarePage.clickOnClassiccTile();
  })

    await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
    
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-054"].iban);

  })
   await test.step("Mandate IBAN checkbox", async () => {
    await reiscarePage.expatcareclickonibanchkboxTab();

  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.clickOnCheckboxesonfourtthtab();
  })

   
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })
  ////////page.pause();
  /*await test.step("Vaerified all details on Thank you page ", async () => {
   await reiscarePage.verifyThankyoupageText(firsttabData["reiscare-054"].thankyouText,firsttabData["reiscare-054"].requestText,firsttabData["reiscare-054"].questionText,firsttabData["reiscare-054"].infoText);
  })
   */

  await test.step("Verified all details on Thank you page ", async () => {
  await reiscarePage.checkThankyoupageText(firsttabData["reiscare-054"].thankyouText);
    
   })

page.close();
});


// DD  and CC also there uncomment what u want for Excl US CAN, Inc Liability 
test('NXGS-TC-5541: TC_56_Reisecare_1_Validate creating Reisecare policy Excl US CAN Inc Liability using Direct debit', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url2);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(
      firsttabData["reiscare-049"].firstNameInput, 
      firsttabData["reiscare-049"].lastNameInput,
      firsttabData["reiscare-049"].passportInput,
      firsttabData["reiscare-049"].mobileNumbercodeInput,
      firsttabData["reiscare-049"].mobileNumberInput,
      firsttabData["reiscare-049"].emailInput,
      firsttabData["reiscare-049"].streetNameInput,
      firsttabData["reiscare-049"].streetNumberInput,
      firsttabData["reiscare-049"].postalCodeInput,
      firsttabData["reiscare-049"].additionalAddressInput,
      firsttabData["reiscare-049"].cityInput,
      firsttabData["reiscare-049"].dayInput,
      firsttabData["reiscare-049"].monthInput,
      firsttabData["reiscare-049"].yearInput
    );
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  

  //  //Add one additional member
  //   await test.step("Click on Add another insured person Button ", async () => {
  //     await reiscarePage.clickOnAddanotherinsuredpersonButton();
  //   })
   
  //   await test.step("Enter Additional insured person information", async () => {
  //     await reiscarePage.reisecaresecondtTabOneMemberDetail(
  //       firsttabData["reiscare-051"].firstNameInput,
  //        firsttabData["reiscare-051"].lastNameInput,
  //        firsttabData["reiscare-051"].passportInput,
  //        firsttabData["reiscare-051"].dayInput,
  //        firsttabData["reiscare-051"].monthInput,
  //        firsttabData["reiscare-051"].yearInput
  //       );
  //   })

    await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
  await reiscarePage.expatcaresStartandEnddateonThirdtTab(
    firsttabData["reiscare-049"].startdate, 
    firsttabData["reiscare-049"].enddate);
  })

  await test.step("Click on Classic Plan ", async () => {
    await reiscarePage.clickOnClassiccTile();
  })

  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await reiscarePage.clickOnIncludeliabilitycheckbox();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  //For DD
  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnDirectdebittButton();
  })


  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-054"].iban);

  })

   await test.step("Mandate IBAN checkbox", async () => {
    await reiscarePage.expatcareclickonibanchkboxTab();

  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.clickOnCheckboxesonfourtthtab();
  })


  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();

  })


  // //For CC
  // await test.step("Click on credit card radio Button on fourth tab", async () => {
  //   await reiscarePage.clickOnCreditcardradioButton();
  // })

  // await test.step("Select checkboxes on  fourth tab", async () => {
  //   await reiscarePage.clickOnCheckboxesonfourtthtab();
  // })

   
  // await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
  //   await reiscarePage.clickOnApplyandPayButton();

  // })

  // await test.step("Fill all credit card details", async () => {
  //   await reiscarePage.expatcareFilldetailsoncreditcarddateTab();
  // })

   

  // ////////page.pause();
  // /*await test.step("Vaerified all details on Thank you page ", async () => {
  //  await reiscarePage.verifyThankyoupageText(firsttabData["reiscare-054"].thankyouText,firsttabData["reiscare-054"].requestText,firsttabData["reiscare-054"].questionText,firsttabData["reiscare-054"].infoText);
  // })*/
  // await test.step("Verified all details on Thank you page ", async () => {
  // await reiscarePage.checkThankyoupageText(firsttabData["reiscare-054"].thankyouText);
    
  //  })

page.close();
});


//Ashwini
// TC-170 For Data creation Reisecare Excl US CAN Excl Liab with CC Payment**Working**
test('NXGS-TC-001: TC_54_Reisecare_1_Validate creating Reisecare policy using Direct debit', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url2);
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(firsttabData["reiscare-049"].firstNameInput, firsttabData["reiscare-049"].lastNameInput,firsttabData["reiscare-049"].passportInput,firsttabData["reiscare-049"].mobileNumbercodeInput,firsttabData["reiscare-049"].mobileNumberInput,firsttabData["reiscare-049"].emailInput,firsttabData["reiscare-049"].streetNameInput,firsttabData["reiscare-049"].streetNumberInput,firsttabData["reiscare-049"].postalCodeInput,firsttabData["reiscare-049"].additionalAddressInput,firsttabData["reiscare-049"].cityInput,firsttabData["reiscare-049"].dayInput,firsttabData["reiscare-049"].monthInput,firsttabData["reiscare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
  await reiscarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["reiscare-049"].startdate, firsttabData["reiscare-049"].enddate);
  })

  await test.step("Click on Classic Plan ", async () => {
    await reiscarePage.clickOnClassiccTile();
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on credit card radio Button on fourth tab", async () => {
    await reiscarePage.clickOnCreditcardradioButton();
  })

  // await test.step("Enter ame of Account holder and IBAN ", async () => {
  //   await reiscarePage.expatcarefilldebitcarddetailstTab(firsttabData["reiscare-054"].iban);

  // })
  //  await test.step("Mandate IBAN checkbox", async () => {
  //   await reiscarePage.expatcareclickonibanchkboxTab();

  // })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await reiscarePage.clickOnCheckboxesonfourtthtab();
  })

   
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })

  await test.step("Fill all credit card details", async () => {
    await reiscarePage.expatcareFilldetailsoncreditcarddateTab();
  })
  
  ////////page.pause();
  await test.step("Verified all details on Thank you page ", async () => {
  await reiscarePage.checkThankyoupageText(firsttabData["reiscare-054"].thankyouText);
    
   })

page.close();
});


//Anjali
// BT Policy creation Reisecare Inc US CAN Excl Lia**Working**
test('NXGS-TC-5545: TC_56_Reisecare_1_Validate creating Reisecare policy Inc US CAN Excl Liab using Direct debit', async ({ page }) => {
  const reiscarePage: ReiscarePage = new ReiscarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await reiscarePage.gotoHomePage(firsttabData["reiscare-049"].url1);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await reiscarePage.reiscareFirstTab(
      firsttabData["reiscare-049"].firstNameInput,
      firsttabData["reiscare-049"].lastNameInput,
      firsttabData["reiscare-049"].passportInput,
      firsttabData["reiscare-049"].mobileNumbercodeInput,
      firsttabData["reiscare-049"].mobileNumberInput,
      firsttabData["reiscare-049"].emailInput,
      firsttabData["reiscare-049"].streetNameInput,
      firsttabData["reiscare-049"].streetNumberInput,
      firsttabData["reiscare-049"].postalCodeInput,
      firsttabData["reiscare-049"].additionalAddressInput,
      firsttabData["reiscare-049"].cityInput,
      firsttabData["reiscare-049"].dayInput,
      firsttabData["reiscare-049"].monthInput,
      firsttabData["reiscare-049"].yearInput );
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await reiscarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await reiscarePage.clickOnsecondtabNextButton();
  })

  await test.step("Select Start and End Date on Third Tab ", async () => {
  await reiscarePage.expatcaresStartandEnddateonThirdtTab(
    firsttabData["reiscare-049"].startdate, 
    firsttabData["reiscare-049"].enddate);
  })

  await test.step("Click on Classic Plan ", async () => {
    await reiscarePage.clickOnClassiccTile();
  })

    await test.step("Click on Checkbox of 'Include coverage for USA & Canada for Classic' ", async () => {
    await reiscarePage.clickOnIncludecoveragecheckbox();
  })
    
  await test.step("Click on Third Tab Next Button ", async () => {
    await reiscarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await reiscarePage.clickOnBankTransferRadioButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await reiscarePage.clickOnBTPolicyDeclarationCheckboxes();
  })

   
   
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await reiscarePage.clickOnApplyandPayButton();
  })
 

  await test.step("Verified all details on Thank you page ", async () => {
  await reiscarePage.checkThankyoupageText(firsttabData["reiscare-054"].thankyouText);
    
   })

page.close();
});


})









































































































































