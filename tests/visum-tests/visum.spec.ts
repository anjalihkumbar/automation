import { expect, test } from '@playwright/test';
import { VisumPage } from '../../page-objects/visum-pages/first-page.ts';
import { SyncroLoginPage } from '../../page-objects/login-page/login-page.ts';
const firsttabData = require(`../../testdata/${process.env.ENV || 'data_test_eu'}/visum.json`) as Record<string, any>;
const loginbData = require(`../../testdata/${process.env.ENV || 'data_test_eu'}/login.json`) as Record<string, any>;
import '../../page-objects/utilities-pages/global-setup.ts';

//1

test('NXGS-TC-4345: TC_001_Visum_1_Validate UI fields displays when Visum policy selected', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-001"].url);
    
  })

   await test.step("Verified first tab page title text as 'Online application Visum - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-001"].expectedPageTitle);
  })

  await test.step("Verified text on first tab as 'Application for MAWISTA Visum'", async () => {
    await visumPage.verifyAplicationFirstTabText(firsttabData["visum-001"].applicationText);

  })

  await test.step("Verified  text on first tab as ' Policyholder's details '", async () => {
    await visumPage.verifyPolicbyholderdetailsFirstTaext(firsttabData["visum-001"].policyholderText);

  })
  
  await test.step("Verified text on first tab as ' Policyholder's address in Germany '", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-001"].policyholderaddressText);

  })

  await test.step("Verified text on first tab as '  Are you the insured person? '", async () => {
    await visumPage.verifyAreyouinsuredpersonFirstText(firsttabData["visum-001"].areyouinsuredpersonText);

  })

  await test.step("Verified text on first tab as '   Enter your date of birth and gender  '", async () => {
    await visumPage.verifyEnteryourdateofbirthFirstText(firsttabData["visum-001"].enterdateofbirthText);

  })

  await test.step("Verified Next button visible and clickable on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-001"].secondtabNextButton);

  })

page.close();
});

//2

test('NXGS-TC-4346: TC_002_Visum_1_Validate for Visum program, saving valid details in policy holder details, policy holder address in Germany, Are you insured details with insured person details', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-002"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-002"].firstNameInput, firsttabData["visum-002"].lastNameInput,firsttabData["visum-002"].passportInput,firsttabData["visum-002"].mobileNumbercodeInput,firsttabData["visum-002"].mobileNumberInput,firsttabData["visum-002"].emailInput,firsttabData["visum-002"].streetNameInput,firsttabData["visum-002"].streetNumberInput,firsttabData["visum-002"].postalCodeInput,firsttabData["visum-002"].additionalAddressInput,firsttabData["visum-002"].cityInput,firsttabData["visum-002"].dayInput,firsttabData["visum-002"].monthInput,firsttabData["visum-002"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

    
  await test.step("Verified second tab page title text as 'Online application Visum - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-002"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-002"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-002"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-002"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-002"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-002"].secondtabPreviousButton);

  })
page.close();
});

//3
test('NXGS-TC-4347: TC_003_Visum_1_Validate in policy holder details field, able to give valid passport number in passport field', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-003"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-003"].firstNameInput, firsttabData["visum-003"].lastNameInput,firsttabData["visum-003"].passportInput,firsttabData["visum-003"].mobileNumbercodeInput,firsttabData["visum-003"].mobileNumberInput,firsttabData["visum-003"].emailInput,firsttabData["visum-003"].streetNameInput,firsttabData["visum-003"].streetNumberInput,firsttabData["visum-003"].postalCodeInput,firsttabData["visum-003"].additionalAddressInput,firsttabData["visum-003"].cityInput,firsttabData["visum-003"].dayInput,firsttabData["visum-003"].monthInput,firsttabData["visum-003"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-003"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-003"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-003"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-003"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-003"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-003"].secondtabPreviousButton);

  })
page.close();
});

//4
test('NXGS-TC-4348: TC_004_Visum_1_Validate in policy holder details field, able to select any country name from home country field', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-004"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender ", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-004"].firstNameInput, firsttabData["visum-004"].lastNameInput,firsttabData["visum-004"].passportInput,firsttabData["visum-004"].mobileNumbercodeInput,firsttabData["visum-004"].mobileNumberInput,firsttabData["visum-004"].emailInput,firsttabData["visum-004"].streetNameInput,firsttabData["visum-004"].streetNumberInput,firsttabData["visum-004"].postalCodeInput,firsttabData["visum-004"].additionalAddressInput,firsttabData["visum-004"].cityInput,firsttabData["visum-004"].dayInput,firsttabData["visum-004"].monthInput,firsttabData["visum-004"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-004"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-004"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-004"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-004"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-004"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-004"].secondtabPreviousButton);

  })
page.close();
});

//5
test('NXGS-TC-4349: TC_005_Visum_1_Validate in policy holder details field, able to give valid mobile number in mobile number  field', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-005"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-005"].firstNameInput, firsttabData["visum-005"].lastNameInput,firsttabData["visum-005"].passportInput,firsttabData["visum-005"].mobileNumbercodeInput,firsttabData["visum-005"].mobileNumberInput,firsttabData["visum-005"].emailInput,firsttabData["visum-005"].streetNameInput,firsttabData["visum-005"].streetNumberInput,firsttabData["visum-005"].postalCodeInput,firsttabData["visum-005"].additionalAddressInput,firsttabData["visum-005"].cityInput,firsttabData["visum-005"].dayInput,firsttabData["visum-005"].monthInput,firsttabData["visum-005"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-005"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-005"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-005"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-005"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-005"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-005"].secondtabPreviousButton);

  })
page.close();
});

//6
test('NXGS-TC-5350: TC_006_Visum_1_Validate in policy holder details field, able to give valid email in email  field', async ({ page }) => {
  const  visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-006"].firstNameInput, firsttabData["visum-006"].lastNameInput,firsttabData["visum-006"].passportInput,firsttabData["visum-006"].mobileNumbercodeInput,firsttabData["visum-006"].mobileNumberInput,firsttabData["visum-006"].emailInput,firsttabData["visum-006"].streetNameInput,firsttabData["visum-006"].streetNumberInput,firsttabData["visum-006"].postalCodeInput,firsttabData["visum-006"].additionalAddressInput,firsttabData["visum-006"].cityInput,firsttabData["visum-006"].dayInput,firsttabData["visum-006"].monthInput,firsttabData["visum-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-006"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-006"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-006"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-006"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-006"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-006"].secondtabPreviousButton);

  })
page.close();
});

//7
test('NXGS-TC-4351: TC_007_Visum_1_Validate saving with only mandatory fields details in policy holder details, policy holder address in Germany, Are you insured details with insured person det', async ({ page }) => {
  const  visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-007"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-007"].firstNameInput, firsttabData["visum-007"].lastNameInput,firsttabData["visum-007"].passportInput,firsttabData["visum-007"].mobileNumbercodeInput,firsttabData["visum-007"].mobileNumberInput,firsttabData["visum-007"].emailInput,firsttabData["visum-007"].streetNameInput,firsttabData["visum-007"].streetNumberInput,firsttabData["visum-007"].postalCodeInput,firsttabData["visum-007"].additionalAddressInput,firsttabData["visum-007"].cityInput,firsttabData["visum-007"].dayInput,firsttabData["visum-007"].monthInput,firsttabData["visum-007"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-007"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-007"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-007"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-007"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-007"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-007"].secondtabPreviousButton);

  })
page.close();
});

//8
test('NXGS-TC-4352: TC_008_Visum_1_Validate able to give valid  postal code in  "Policyholder address in Germany" section', async ({ page }) => {
  const  visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-008"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-008"].firstNameInput, firsttabData["visum-008"].lastNameInput,firsttabData["visum-008"].passportInput,firsttabData["visum-008"].mobileNumbercodeInput,firsttabData["visum-008"].mobileNumberInput,firsttabData["visum-008"].emailInput,firsttabData["visum-008"].streetNameInput,firsttabData["visum-008"].streetNumberInput,firsttabData["visum-008"].postalCodeInput,firsttabData["visum-008"].additionalAddressInput,firsttabData["visum-008"].cityInput,firsttabData["visum-008"].dayInput,firsttabData["visum-008"].monthInput,firsttabData["visum-008"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-008"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-008"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-008"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-008"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-008"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-008"].secondtabPreviousButton);

  })
page.close();
});

//9
test('NXGS-TC-4353: TC_009_Visum_1_Validate as per germany  selected, postal code is validated in "policy address in Germany" section', async ({ page }) => {
  const  visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-009"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-009"].firstNameInput, firsttabData["visum-009"].lastNameInput,firsttabData["visum-009"].passportInput,firsttabData["visum-009"].mobileNumbercodeInput,firsttabData["visum-009"].mobileNumberInput,firsttabData["visum-009"].emailInput,firsttabData["visum-009"].streetNameInput,firsttabData["visum-009"].streetNumberInput,firsttabData["visum-009"].postalCodeInput,firsttabData["visum-009"].additionalAddressInput,firsttabData["visum-009"].cityInput,firsttabData["visum-009"].dayInput,firsttabData["visum-009"].monthInput,firsttabData["visum-009"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-009"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-009"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-009"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-009"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-009"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-009"].secondtabPreviousButton);

  })
page.close();
});

//10
test('NXGS-TC-4354: TC_010_Visum_1_Validate in policy holder details field, user is able to give alphabetic character  text in first name field', async ({ page }) => {
  const  visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-010"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-010"].firstNameInput, firsttabData["visum-010"].lastNameInput,firsttabData["visum-010"].passportInput,firsttabData["visum-010"].mobileNumbercodeInput,firsttabData["visum-010"].mobileNumberInput,firsttabData["visum-010"].emailInput,firsttabData["visum-010"].streetNameInput,firsttabData["visum-010"].streetNumberInput,firsttabData["visum-010"].postalCodeInput,firsttabData["visum-010"].additionalAddressInput,firsttabData["visum-010"].cityInput,firsttabData["visum-010"].dayInput,firsttabData["visum-010"].monthInput,firsttabData["visum-010"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-010"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-010"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-010"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-010"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-010"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-010"].secondtabPreviousButton);

  })
page.close();
});

//11
test('NXGS-TC-4355: TC_11_Visum_1_Validate in policy holder details field, able to give alphabetic  text in first name field', async ({ page }) => {
  const  visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-010"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-010"].firstNameInput, firsttabData["visum-010"].lastNameInput,firsttabData["visum-010"].passportInput,firsttabData["visum-010"].mobileNumbercodeInput,firsttabData["visum-010"].mobileNumberInput,firsttabData["visum-010"].emailInput,firsttabData["visum-010"].streetNameInput,firsttabData["visum-010"].streetNumberInput,firsttabData["visum-010"].postalCodeInput,firsttabData["visum-010"].additionalAddressInput,firsttabData["visum-010"].cityInput,firsttabData["visum-010"].dayInput,firsttabData["visum-010"].monthInput,firsttabData["visum-010"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await visumPage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["visum-010"].firstNameInput, firsttabData["visum-010"].lastNameInput,firsttabData["visum-010"].passportInput,firsttabData["visum-010"].mobileNumbercodeInput,firsttabData["visum-010"].mobileNumberInput,firsttabData["visum-010"].emailInput,firsttabData["visum-010"].streetNameInput,firsttabData["visum-010"].streetNumberInput,firsttabData["visum-010"].postalCodeInput,firsttabData["visum-010"].additionalAddressInput,firsttabData["visum-010"].cityInput,firsttabData["visum-010"].dayInput,firsttabData["visum-010"].monthInput,firsttabData["visum-010"].yearInput);
  })


  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-010"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-010"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-010"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-010"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-010"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-010"].secondtabPreviousButton);

  })
page.close();
});

//12
test('NXGS-TC-4356: TC_012_Visum_1_Validate in insured person details field, user is able to give alphabetic character  text in first name field', async ({ page }) => {
  const  visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-012"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-012"].firstNameInput, firsttabData["visum-012"].lastNameInput,firsttabData["visum-012"].passportInput,firsttabData["visum-012"].mobileNumbercodeInput,firsttabData["visum-012"].mobileNumberInput,firsttabData["visum-012"].emailInput,firsttabData["visum-012"].streetNameInput,firsttabData["visum-012"].streetNumberInput,firsttabData["visum-012"].postalCodeInput,firsttabData["visum-012"].additionalAddressInput,firsttabData["visum-012"].cityInput,firsttabData["visum-012"].dayInput,firsttabData["visum-012"].monthInput,firsttabData["visum-012"].yearInput);
  })

  await test.step("Enter insured person details  ", async () => {
    await visumPage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["visum-012"].firstNameInput, firsttabData["visum-012"].lastNameInput,firsttabData["visum-012"].passportInput,firsttabData["visum-012"].mobileNumbercodeInput,firsttabData["visum-012"].mobileNumberInput,firsttabData["visum-012"].emailInput,firsttabData["visum-012"].streetNameInput,firsttabData["visum-012"].streetNumberInput,firsttabData["visum-012"].postalCodeInput,firsttabData["visum-012"].additionalAddressInput,firsttabData["visum-012"].cityInput,firsttabData["visum-012"].dayInput,firsttabData["visum-012"].monthInput,firsttabData["visum-010"].yearInput);
  })


  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-012"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-012"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-012"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-012"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-012"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-012"].secondtabPreviousButton);

  })
page.close();
});

//13
test('NXGS-TC-4357: TC_13_Visum_1_Validate in policy holder details field, able to give alphabetic  text in last name field', async ({ page }) => {
  const  visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-010"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-010"].firstNameInput, firsttabData["visum-010"].lastNameInput,firsttabData["visum-010"].passportInput,firsttabData["visum-010"].mobileNumbercodeInput,firsttabData["visum-010"].mobileNumberInput,firsttabData["visum-010"].emailInput,firsttabData["visum-010"].streetNameInput,firsttabData["visum-010"].streetNumberInput,firsttabData["visum-010"].postalCodeInput,firsttabData["visum-010"].additionalAddressInput,firsttabData["visum-010"].cityInput,firsttabData["visum-010"].dayInput,firsttabData["visum-010"].monthInput,firsttabData["visum-010"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await visumPage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["visum-010"].firstNameInput, firsttabData["visum-010"].lastNameInput,firsttabData["visum-010"].passportInput,firsttabData["visum-010"].mobileNumbercodeInput,firsttabData["visum-010"].mobileNumberInput,firsttabData["visum-010"].emailInput,firsttabData["visum-010"].streetNameInput,firsttabData["visum-010"].streetNumberInput,firsttabData["visum-010"].postalCodeInput,firsttabData["visum-010"].additionalAddressInput,firsttabData["visum-010"].cityInput,firsttabData["visum-010"].dayInput,firsttabData["visum-010"].monthInput,firsttabData["visum-010"].yearInput);
  })


  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-010"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-010"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-010"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-010"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-010"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-010"].secondtabPreviousButton);

  })
page.close();
});

//14
test('NXGS-TC-4358: TC_014_Visum_1_Validate in policy holder details field, user is able to give 3 minimum length of alphabetic character  text in first name field', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-014"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-014"].firstNameInput, firsttabData["visum-014"].lastNameInput,firsttabData["visum-014"].passportInput,firsttabData["visum-014"].mobileNumbercodeInput,firsttabData["visum-014"].mobileNumberInput,firsttabData["visum-014"].emailInput,firsttabData["visum-014"].streetNameInput,firsttabData["visum-014"].streetNumberInput,firsttabData["visum-014"].postalCodeInput,firsttabData["visum-014"].additionalAddressInput,firsttabData["visum-014"].cityInput,firsttabData["visum-014"].dayInput,firsttabData["visum-014"].monthInput,firsttabData["visum-014"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-014"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-014"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-014"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-014"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-014"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-014"].secondtabPreviousButton);

  })
page.close();
});

//15
test('NXGS-TC-4359: TC_015_Visum_1_Validate in policy holder details field, able to give 3 minimum length of  alphabetic character   text in last name field', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-014"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-014"].firstNameInput, firsttabData["visum-014"].lastNameInput,firsttabData["visum-014"].passportInput,firsttabData["visum-014"].mobileNumbercodeInput,firsttabData["visum-014"].mobileNumberInput,firsttabData["visum-014"].emailInput,firsttabData["visum-014"].streetNameInput,firsttabData["visum-014"].streetNumberInput,firsttabData["visum-014"].postalCodeInput,firsttabData["visum-014"].additionalAddressInput,firsttabData["visum-014"].cityInput,firsttabData["visum-014"].dayInput,firsttabData["visum-014"].monthInput,firsttabData["visum-014"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-014"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-014"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-014"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-014"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-014"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-014"].secondtabPreviousButton);

  })
page.close();
});


//16
test('NXGS-TC-4360: TC_016_Visum_1_Validate in insured person details field, user is able to give minimum 3 alphabetic character  text in first name field', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-016"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-016"].firstNameInput, firsttabData["visum-016"].lastNameInput,firsttabData["visum-016"].passportInput,firsttabData["visum-016"].mobileNumbercodeInput,firsttabData["visum-016"].mobileNumberInput,firsttabData["visum-016"].emailInput,firsttabData["visum-016"].streetNameInput,firsttabData["visum-016"].streetNumberInput,firsttabData["visum-016"].postalCodeInput,firsttabData["visum-016"].additionalAddressInput,firsttabData["visum-016"].cityInput,firsttabData["visum-016"].dayInput,firsttabData["visum-016"].monthInput,firsttabData["visum-016"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await visumPage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["visum-016"].firstNameInput, firsttabData["visum-016"].lastNameInput,firsttabData["visum-016"].passportInput,firsttabData["visum-016"].mobileNumbercodeInput,firsttabData["visum-016"].mobileNumberInput,firsttabData["visum-016"].emailInput,firsttabData["visum-016"].streetNameInput,firsttabData["visum-016"].streetNumberInput,firsttabData["visum-016"].postalCodeInput,firsttabData["visum-016"].additionalAddressInput,firsttabData["visum-016"].cityInput,firsttabData["visum-016"].dayInput,firsttabData["visum-016"].monthInput,firsttabData["visum-016"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-016"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-016"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-016"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-016"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-016"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-016"].secondtabPreviousButton);

  })
page.close();
});

//17
test('NXGS-TC-4361: TC_017_Visum_1_Validate in insured person details field, able to give minimum 3 alphabetic  text in last name field', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-017"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-017"].firstNameInput, firsttabData["visum-017"].lastNameInput,firsttabData["visum-017"].passportInput,firsttabData["visum-017"].mobileNumbercodeInput,firsttabData["visum-017"].mobileNumberInput,firsttabData["visum-017"].emailInput,firsttabData["visum-017"].streetNameInput,firsttabData["visum-017"].streetNumberInput,firsttabData["visum-017"].postalCodeInput,firsttabData["visum-017"].additionalAddressInput,firsttabData["visum-017"].cityInput,firsttabData["visum-017"].dayInput,firsttabData["visum-017"].monthInput,firsttabData["visum-017"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await visumPage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["visum-017"].firstNameInput, firsttabData["visum-017"].lastNameInput,firsttabData["visum-017"].passportInput,firsttabData["visum-017"].mobileNumbercodeInput,firsttabData["visum-017"].mobileNumberInput,firsttabData["visum-017"].emailInput,firsttabData["visum-017"].streetNameInput,firsttabData["visum-017"].streetNumberInput,firsttabData["visum-017"].postalCodeInput,firsttabData["visum-017"].additionalAddressInput,firsttabData["visum-017"].cityInput,firsttabData["visum-017"].dayInput,firsttabData["visum-017"].monthInput,firsttabData["visum-017"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-017"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-017"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-017"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-017"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-017"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-017"].secondtabPreviousButton);

  })
page.close();
});

//18
test('NXGS-TC-5342: TC_018_Expatcare_1_Validate in policy holder details field, user is able to give 60 maximum length of alphabetic character text in first name field', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-018"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-018"].firstNameInput, firsttabData["visum-018"].lastNameInput,firsttabData["visum-018"].passportInput,firsttabData["visum-018"].mobileNumbercodeInput,firsttabData["visum-018"].mobileNumberInput,firsttabData["visum-018"].emailInput,firsttabData["visum-018"].streetNameInput,firsttabData["visum-018"].streetNumberInput,firsttabData["visum-018"].postalCodeInput,firsttabData["visum-018"].additionalAddressInput,firsttabData["visum-018"].cityInput,firsttabData["visum-018"].dayInput,firsttabData["visum-018"].monthInput,firsttabData["visum-018"].yearInput);
  })


  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await visumPage.verifyFirstnameonfirsttabfillederrorText(firsttabData["visum-038"].firstnameErrormsg);
  })
page.close();
});

//19
test('NXGS-TC-5343: TC_019_Expatcare_1_Validate in policy holder details field, able to give 60 maximum length of alphabetic character text in last name field', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-019"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-019"].firstNameInput, firsttabData["visum-019"].lastNameInput,firsttabData["visum-019"].passportInput,firsttabData["visum-019"].mobileNumbercodeInput,firsttabData["visum-019"].mobileNumberInput,firsttabData["visum-019"].emailInput,firsttabData["visum-019"].streetNameInput,firsttabData["visum-019"].streetNumberInput,firsttabData["visum-019"].postalCodeInput,firsttabData["visum-019"].additionalAddressInput,firsttabData["visum-019"].cityInput,firsttabData["visum-019"].dayInput,firsttabData["visum-019"].monthInput,firsttabData["visum-019"].yearInput);
  })


  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await visumPage.verifylastnameonfirsttabfillederrorText(firsttabData["visum-039"].lastnameErrormsg);
  })  
page.close();
});

//20
test('NXGS-TC-5344: TC_020_Expatcare_1_Validate in insured person details field, user is able to give maximum 60 alphabetic character text in first name field', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-020"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-020"].firstNameInput, firsttabData["visum-020"].lastNameInput,firsttabData["visum-020"].passportInput,firsttabData["visum-020"].mobileNumbercodeInput,firsttabData["visum-020"].mobileNumberInput,firsttabData["visum-020"].emailInput,firsttabData["visum-020"].streetNameInput,firsttabData["visum-020"].streetNumberInput,firsttabData["visum-020"].postalCodeInput,firsttabData["visum-020"].additionalAddressInput,firsttabData["visum-020"].cityInput,firsttabData["visum-020"].dayInput,firsttabData["visum-020"].monthInput,firsttabData["visum-020"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await visumPage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["visum-020"].firstNameInput, firsttabData["visum-020"].lastNameInput,firsttabData["visum-020"].passportInput,firsttabData["visum-020"].mobileNumbercodeInput,firsttabData["visum-020"].mobileNumberInput,firsttabData["visum-020"].emailInput,firsttabData["visum-020"].streetNameInput,firsttabData["visum-020"].streetNumberInput,firsttabData["visum-020"].postalCodeInput,firsttabData["visum-020"].additionalAddressInput,firsttabData["visum-020"].cityInput,firsttabData["visum-020"].dayInput,firsttabData["visum-020"].monthInput,firsttabData["visum-020"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await visumPage.verifyFirstnameonfirsttabfillederrorText(firsttabData["visum-038"].firstnameErrormsg);
  })
page.close();
});

//21
test('NXGS-TC-4365: TC_021_Visum_1_Validate in insured person details field, able to give maximum 60 alphabetic  text in last name field', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-021"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-021"].firstNameInput, firsttabData["visum-021"].lastNameInput,firsttabData["visum-021"].passportInput,firsttabData["visum-021"].mobileNumbercodeInput,firsttabData["visum-021"].mobileNumberInput,firsttabData["visum-021"].emailInput,firsttabData["visum-021"].streetNameInput,firsttabData["visum-021"].streetNumberInput,firsttabData["visum-021"].postalCodeInput,firsttabData["visum-021"].additionalAddressInput,firsttabData["visum-021"].cityInput,firsttabData["visum-021"].dayInput,firsttabData["visum-021"].monthInput,firsttabData["visum-021"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await visumPage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["visum-021"].firstNameInput, firsttabData["visum-021"].lastNameInput,firsttabData["visum-021"].passportInput,firsttabData["visum-021"].mobileNumbercodeInput,firsttabData["visum-021"].mobileNumberInput,firsttabData["visum-021"].emailInput,firsttabData["visum-021"].streetNameInput,firsttabData["visum-021"].streetNumberInput,firsttabData["visum-021"].postalCodeInput,firsttabData["visum-021"].additionalAddressInput,firsttabData["visum-021"].cityInput,firsttabData["visum-021"].dayInput,firsttabData["visum-021"].monthInput,firsttabData["visum-021"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await visumPage.verifylastnameonfirsttabfillederrorText(firsttabData["visum-039"].lastnameErrormsg);
  })  
page.close();
});

//22
test('NXGS-TC-4366: TC_022_Visum_1_Validate saving valid details in policy holder details', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-022"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-022"].firstNameInput, firsttabData["visum-022"].lastNameInput,firsttabData["visum-022"].passportInput,firsttabData["visum-022"].mobileNumbercodeInput,firsttabData["visum-022"].mobileNumberInput,firsttabData["visum-022"].emailInput,firsttabData["visum-022"].streetNameInput,firsttabData["visum-022"].streetNumberInput,firsttabData["visum-022"].postalCodeInput,firsttabData["visum-022"].additionalAddressInput,firsttabData["visum-022"].cityInput,firsttabData["visum-022"].dayInput,firsttabData["visum-022"].monthInput,firsttabData["visum-022"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-022"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-022"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-022"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-022"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-022"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-022"].secondtabPreviousButton);

  })
page.close();
});

//23
test('NXGS-TC-4367: C_023_Visum_1_Validate saving valid details in policy holder address in Germany sectio', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-023"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-023"].firstNameInput, firsttabData["visum-023"].lastNameInput,firsttabData["visum-023"].passportInput,firsttabData["visum-023"].mobileNumbercodeInput,firsttabData["visum-023"].mobileNumberInput,firsttabData["visum-023"].emailInput,firsttabData["visum-023"].streetNameInput,firsttabData["visum-023"].streetNumberInput,firsttabData["visum-023"].postalCodeInput,firsttabData["visum-023"].additionalAddressInput,firsttabData["visum-023"].cityInput,firsttabData["visum-023"].dayInput,firsttabData["visum-023"].monthInput,firsttabData["visum-023"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-023"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-023"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-023"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-023"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-023"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-023"].secondtabPreviousButton);

  })
page.close();
});

//24
test('NXGS-TC-4368: TC_024_Visum_1_Validate saving details with insured person details', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-024"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-024"].firstNameInput, firsttabData["visum-024"].lastNameInput,firsttabData["visum-024"].passportInput,firsttabData["visum-024"].mobileNumbercodeInput,firsttabData["visum-024"].mobileNumberInput,firsttabData["visum-024"].emailInput,firsttabData["visum-024"].streetNameInput,firsttabData["visum-024"].streetNumberInput,firsttabData["visum-024"].postalCodeInput,firsttabData["visum-024"].additionalAddressInput,firsttabData["visum-024"].cityInput,firsttabData["visum-024"].dayInput,firsttabData["visum-024"].monthInput,firsttabData["visum-024"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await visumPage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["visum-024"].firstNameInput, firsttabData["visum-024"].lastNameInput,firsttabData["visum-024"].passportInput,firsttabData["visum-024"].mobileNumbercodeInput,firsttabData["visum-024"].mobileNumberInput,firsttabData["visum-024"].emailInput,firsttabData["visum-024"].streetNameInput,firsttabData["visum-024"].streetNumberInput,firsttabData["visum-024"].postalCodeInput,firsttabData["visum-024"].additionalAddressInput,firsttabData["visum-024"].cityInput,firsttabData["visum-024"].dayInput,firsttabData["visum-024"].monthInput,firsttabData["visum-024"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-024"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-024"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-024"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-024"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-024"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-024"].secondtabPreviousButton);

  })
page.close();
});

//25
test('NXGS-TC-4369: C_025_Visum_1_Validate able to give any alphanumeric character length text in street name field of "Policyholder address in Germany" section', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-025"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-025"].firstNameInput, firsttabData["visum-025"].lastNameInput,firsttabData["visum-025"].passportInput,firsttabData["visum-025"].mobileNumbercodeInput,firsttabData["visum-025"].mobileNumberInput,firsttabData["visum-025"].emailInput,firsttabData["visum-025"].streetNameInput,firsttabData["visum-025"].streetNumberInput,firsttabData["visum-025"].postalCodeInput,firsttabData["visum-025"].additionalAddressInput,firsttabData["visum-025"].cityInput,firsttabData["visum-025"].dayInput,firsttabData["visum-025"].monthInput,firsttabData["visum-025"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-025"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-025"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-025"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-025"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-025"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-025"].secondtabPreviousButton);

  })
page.close();
});

//26
test('NXGS-TC-4370: TC_026_Visum_1_Validate able to give any alphanumeric character length text in street number field of "Policyholder address in Germany" section', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-026"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-026"].firstNameInput, firsttabData["visum-026"].lastNameInput,firsttabData["visum-026"].passportInput,firsttabData["visum-026"].mobileNumbercodeInput,firsttabData["visum-026"].mobileNumberInput,firsttabData["visum-026"].emailInput,firsttabData["visum-026"].streetNameInput,firsttabData["visum-026"].streetNumberInput,firsttabData["visum-026"].postalCodeInput,firsttabData["visum-026"].additionalAddressInput,firsttabData["visum-026"].cityInput,firsttabData["visum-026"].dayInput,firsttabData["visum-026"].monthInput,firsttabData["visum-026"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-026"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-026"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-026"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-026"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-026"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-026"].secondtabPreviousButton);

  })
page.close();
});

//27
test('NXGS-TC-4371: TC_027_Visum_1_Validate able to give any city name in city text field of policy holder address in Germany section', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-027"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-027"].firstNameInput, firsttabData["visum-027"].lastNameInput,firsttabData["visum-027"].passportInput,firsttabData["visum-027"].mobileNumbercodeInput,firsttabData["visum-027"].mobileNumberInput,firsttabData["visum-027"].emailInput,firsttabData["visum-027"].streetNameInput,firsttabData["visum-027"].streetNumberInput,firsttabData["visum-027"].postalCodeInput,firsttabData["visum-027"].additionalAddressInput,firsttabData["visum-027"].cityInput,firsttabData["visum-027"].dayInput,firsttabData["visum-027"].monthInput,firsttabData["visum-027"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-027"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-027"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-027"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-027"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-027"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-027"].secondtabPreviousButton);

  })
page.close();
});

//28
test('NXGS-TC-4372: TC_028_Visum_1_Validate Germany displays in country field of Policy holder address in Germany section', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-028"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-028"].firstNameInput, firsttabData["visum-028"].lastNameInput,firsttabData["visum-028"].passportInput,firsttabData["visum-028"].mobileNumbercodeInput,firsttabData["visum-028"].mobileNumberInput,firsttabData["visum-028"].emailInput,firsttabData["visum-028"].streetNameInput,firsttabData["visum-028"].streetNumberInput,firsttabData["visum-028"].postalCodeInput,firsttabData["visum-028"].additionalAddressInput,firsttabData["visum-028"].cityInput,firsttabData["visum-028"].dayInput,firsttabData["visum-028"].monthInput,firsttabData["visum-028"].yearInput);
  })
 
  await test.step("Verified  Germany displays in country field of Policy holder address in Germany section'", async () => {
    await visumPage.verifyGermanyText(firsttabData["visum-028"].germanyText);

  })

  
page.close();
});

//29
test('NXGS-TC-4373: TC_029_Visum_1_Validate able to give any date in date of birth field', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-029"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-029"].firstNameInput, firsttabData["visum-029"].lastNameInput,firsttabData["visum-029"].passportInput,firsttabData["visum-029"].mobileNumbercodeInput,firsttabData["visum-029"].mobileNumberInput,firsttabData["visum-029"].emailInput,firsttabData["visum-029"].streetNameInput,firsttabData["visum-029"].streetNumberInput,firsttabData["visum-029"].postalCodeInput,firsttabData["visum-029"].additionalAddressInput,firsttabData["visum-029"].cityInput,firsttabData["visum-029"].dayInput,firsttabData["visum-029"].monthInput,firsttabData["visum-029"].yearInput);
  })
 
  
  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-029"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-029"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-029"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-029"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-029"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-029"].secondtabPreviousButton);

  })
page.close();
});


//30
test('NXGS-TC-4374: TC_030_Visum_1_Validate able to create Visum policy with policy holder details with insured member details', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-030"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-030"].firstNameInput, firsttabData["visum-030"].lastNameInput,firsttabData["visum-030"].passportInput,firsttabData["visum-030"].mobileNumbercodeInput,firsttabData["visum-030"].mobileNumberInput,firsttabData["visum-030"].emailInput,firsttabData["visum-030"].streetNameInput,firsttabData["visum-030"].streetNumberInput,firsttabData["visum-030"].postalCodeInput,firsttabData["visum-030"].additionalAddressInput,firsttabData["visum-030"].cityInput,firsttabData["visum-030"].dayInput,firsttabData["visum-030"].monthInput,firsttabData["visum-030"].yearInput);
  })
 
  await test.step("Enter the insured person details", async () => {
    await visumPage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["visum-030"].firstNameInput, firsttabData["visum-030"].lastNameInput,firsttabData["visum-030"].passportInput,firsttabData["visum-030"].mobileNumbercodeInput,firsttabData["visum-030"].mobileNumberInput,firsttabData["visum-030"].emailInput,firsttabData["visum-030"].streetNameInput,firsttabData["visum-030"].streetNumberInput,firsttabData["visum-030"].postalCodeInput,firsttabData["visum-030"].additionalAddressInput,firsttabData["visum-030"].cityInput,firsttabData["visum-030"].dayInput,firsttabData["visum-030"].monthInput,firsttabData["visum-030"].yearInput);
  })
  
  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-030"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-030"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-030"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-030"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-030"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-030"].secondtabPreviousButton);

  })
page.close();
});

//31
test('NXGS-TC-4375: TC_031_Visum_1_Validate in policy holder details field, user is not able to give alphanumeric text in first name field', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-031"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-031"].firstNameInput, firsttabData["visum-031"].lastNameInput,firsttabData["visum-031"].passportInput,firsttabData["visum-031"].mobileNumbercodeInput,firsttabData["visum-031"].mobileNumberInput,firsttabData["visum-031"].emailInput,firsttabData["visum-031"].streetNameInput,firsttabData["visum-031"].streetNumberInput,firsttabData["visum-031"].postalCodeInput,firsttabData["visum-031"].additionalAddressInput,firsttabData["visum-031"].cityInput,firsttabData["visum-031"].dayInput,firsttabData["visum-031"].monthInput,firsttabData["visum-031"].yearInput);
  })
 
  
  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-031"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-031"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-031"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-031"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-031"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-031"].secondtabPreviousButton);

  })
page.close();
});


//32
test('NXGS-TC-4376: TC_032_Visum_1_Validate in policy holder details field, user is not able to give alphanumeric text in last name field', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-032"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-032"].firstNameInput, firsttabData["visum-032"].lastNameInput,firsttabData["visum-032"].passportInput,firsttabData["visum-032"].mobileNumbercodeInput,firsttabData["visum-032"].mobileNumberInput,firsttabData["visum-032"].emailInput,firsttabData["visum-032"].streetNameInput,firsttabData["visum-032"].streetNumberInput,firsttabData["visum-032"].postalCodeInput,firsttabData["visum-032"].additionalAddressInput,firsttabData["visum-032"].cityInput,firsttabData["visum-032"].dayInput,firsttabData["visum-032"].monthInput,firsttabData["visum-032"].yearInput);
  })
 
  
  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await visumPage.verifylastnameonfirsttabfillederrorText(firsttabData["visum-039"].lastnameErrormsg);
  })   
page.close();
});

//33
test('NXGS-TC-4377: TC_033_Visum_1_Validate blank in  policy holder details, policy holder address in Germany, Are you insured details with insured person details, click on next button', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-033"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-033"].firstNameInput, firsttabData["visum-033"].lastNameInput,firsttabData["visum-033"].passportInput,firsttabData["visum-033"].mobileNumbercodeInput,firsttabData["visum-033"].mobileNumberInput,firsttabData["visum-033"].emailInput,firsttabData["visum-033"].streetNameInput,firsttabData["visum-033"].streetNumberInput,firsttabData["visum-033"].postalCodeInput,firsttabData["visum-033"].additionalAddressInput,firsttabData["visum-033"].cityInput,firsttabData["visum-033"].dayInput,firsttabData["visum-033"].monthInput,firsttabData["visum-033"].yearInput);
  })
 
  
  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Invalid or missing information,please check your information and try again'", async () => {
    await visumPage.verifyNoanydetailsfillederrorText(firsttabData["visum-033"].errormsg);
  })

page.close();
});

//34
test('NXGS-TC-4378:  TC_034_Visum_1_Validate giving blank spaces in policy holder details, policy holder address in germany, insured person details, date of birth section', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-034"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-034"].firstNameInput, firsttabData["visum-034"].lastNameInput,firsttabData["visum-034"].passportInput,firsttabData["visum-034"].mobileNumbercodeInput,firsttabData["visum-034"].mobileNumberInput,firsttabData["visum-034"].emailInput,firsttabData["visum-034"].streetNameInput,firsttabData["visum-034"].streetNumberInput,firsttabData["visum-034"].postalCodeInput,firsttabData["visum-034"].additionalAddressInput,firsttabData["visum-034"].cityInput,firsttabData["visum-034"].dayInput,firsttabData["visum-034"].monthInput,firsttabData["visum-034"].yearInput);
  })
 
  
  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Verified error text as 'Invalid or missing information,please check your information and try again'", async () => {
    await visumPage.verifyNoanydetailsfillederrorText(firsttabData["visum-034"].lastnameErrormsg);
  })

page.close();
});

//35
test('NXGS-TC-4379:  TC_035_Visum_1_Validate giving invalid postal code as per country selection', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-035"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-035"].firstNameInput, firsttabData["visum-035"].lastNameInput,firsttabData["visum-035"].passportInput,firsttabData["visum-035"].mobileNumbercodeInput,firsttabData["visum-035"].mobileNumberInput,firsttabData["visum-035"].emailInput,firsttabData["visum-035"].streetNameInput,firsttabData["visum-035"].streetNumberInput,firsttabData["visum-035"].postalCodeInput,firsttabData["visum-035"].additionalAddressInput,firsttabData["visum-035"].cityInput,firsttabData["visum-035"].dayInput,firsttabData["visum-035"].monthInput,firsttabData["visum-035"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
     
  await test.step("Verified invalid postal code error text as 'Invalid Postal Code'", async () => {
    await visumPage.verifyinvalidpostalcodeerrorText(firsttabData["visum-035"].invalidpostalcodeErrormsg);
  }) 

page.close();
});

//36
 test('NXGS-TC-4380:  TC_036_Visum_1_Validate giving less than 3 characters in first name field of policy holder and insured member details', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-036"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-036"].firstNameInput, firsttabData["visum-036"].lastNameInput,firsttabData["visum-036"].passportInput,firsttabData["visum-036"].mobileNumbercodeInput,firsttabData["visum-036"].mobileNumberInput,firsttabData["visum-036"].emailInput,firsttabData["visum-036"].streetNameInput,firsttabData["visum-036"].streetNumberInput,firsttabData["visum-036"].postalCodeInput,firsttabData["visum-036"].additionalAddressInput,firsttabData["visum-036"].cityInput,firsttabData["visum-036"].dayInput,firsttabData["visum-036"].monthInput,firsttabData["visum-036"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-032"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-032"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-032"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-032"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-032"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-032"].secondtabPreviousButton);

  })   
  
page.close();
});

//37
test('NXGS-TC-4381:  TC_037_Visum_1_Validate giving less than 3 characters in last name field of policy holder and insured member details', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-037"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-037"].firstNameInput, firsttabData["visum-037"].lastNameInput,firsttabData["visum-037"].passportInput,firsttabData["visum-037"].mobileNumbercodeInput,firsttabData["visum-037"].mobileNumberInput,firsttabData["visum-037"].emailInput,firsttabData["visum-037"].streetNameInput,firsttabData["visum-037"].streetNumberInput,firsttabData["visum-037"].postalCodeInput,firsttabData["visum-037"].additionalAddressInput,firsttabData["visum-037"].cityInput,firsttabData["visum-037"].dayInput,firsttabData["visum-037"].monthInput,firsttabData["visum-037"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-032"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-032"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-032"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-032"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-032"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-032"].secondtabPreviousButton);

  })  
  
page.close();
});

//38
test('NXGS-TC-4382:  TC_038_Visum_1_Validate giving more than 60 characters in first name field of policy holder and insured member details', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-038"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-038"].firstNameInput, firsttabData["visum-038"].lastNameInput,firsttabData["visum-038"].passportInput,firsttabData["visum-038"].mobileNumbercodeInput,firsttabData["visum-038"].mobileNumberInput,firsttabData["visum-038"].emailInput,firsttabData["visum-038"].streetNameInput,firsttabData["visum-038"].streetNumberInput,firsttabData["visum-038"].postalCodeInput,firsttabData["visum-038"].additionalAddressInput,firsttabData["visum-038"].cityInput,firsttabData["visum-038"].dayInput,firsttabData["visum-038"].monthInput,firsttabData["visum-038"].yearInput);
  })
 
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await visumPage.verifyFirstnameonfirsttabfillederrorText(firsttabData["visum-038"].firstnameErrormsg);
  })    
  
page.close();
});

//39
test('NXGS-TC-4383:  TC_039_Visum_1_Validate giving more than 60 characters in last name field of policy holder and insured member details', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-039"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-039"].firstNameInput, firsttabData["visum-039"].lastNameInput,firsttabData["visum-039"].passportInput,firsttabData["visum-039"].mobileNumbercodeInput,firsttabData["visum-039"].mobileNumberInput,firsttabData["visum-039"].emailInput,firsttabData["visum-039"].streetNameInput,firsttabData["visum-039"].streetNumberInput,firsttabData["visum-039"].postalCodeInput,firsttabData["visum-039"].additionalAddressInput,firsttabData["visum-039"].cityInput,firsttabData["visum-039"].dayInput,firsttabData["visum-039"].monthInput,firsttabData["visum-039"].yearInput);
  })
 
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await visumPage.verifylastnameonfirsttabfillederrorText(firsttabData["visum-039"].lastnameErrormsg);
  })  
  
page.close();
});

//40
test('NXGS-TC-4384:  TC_040_Visum_1_Validate able to give invalid  values  in policy holder date of birth field', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-040"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-040"].firstNameInput, firsttabData["visum-040"].lastNameInput,firsttabData["visum-040"].passportInput,firsttabData["visum-040"].mobileNumbercodeInput,firsttabData["visum-040"].mobileNumberInput,firsttabData["visum-040"].emailInput,firsttabData["visum-040"].streetNameInput,firsttabData["visum-040"].streetNumberInput,firsttabData["visum-040"].postalCodeInput,firsttabData["visum-040"].additionalAddressInput,firsttabData["visum-040"].cityInput,firsttabData["visum-040"].dayInput,firsttabData["visum-040"].monthInput,firsttabData["visum-040"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Verified error text as ' Min date should be: 12/03/1964 '", async () => {
    await visumPage.verifyinvalidDateofbirtherrorText(firsttabData["visum-040"].invaliddateofbirthErrormsg);
  })  
  
page.close();
});

//41
test('NXGS-TC-4385: TC_041_Visum_1_Validate giving invalid passport number in policy holder details', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-018"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-041"].firstNameInput, firsttabData["visum-018"].lastNameInput,firsttabData["visum-041"].passportInput,firsttabData["visum-018"].mobileNumbercodeInput,firsttabData["visum-018"].mobileNumberInput,firsttabData["visum-018"].emailInput,firsttabData["visum-018"].streetNameInput,firsttabData["visum-018"].streetNumberInput,firsttabData["visum-018"].postalCodeInput,firsttabData["visum-018"].additionalAddressInput,firsttabData["visum-018"].cityInput,firsttabData["visum-018"].dayInput,firsttabData["visum-018"].monthInput,firsttabData["visum-018"].yearInput);
  })


  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await visumPage.verifyinavlidpassporterrorText(firsttabData["visum-041"].passporterrortext);
  })
page.close();
});

//42
test('NXGS-TC-4386:  TC_042_Visum_1_Validate error message disappears when only valid email address given', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-047"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-047"].firstNameInput, firsttabData["visum-047"].lastNameInput,firsttabData["visum-047"].passportInput,firsttabData["visum-047"].mobileNumbercodeInput,firsttabData["visum-047"].mobileNumberInput,firsttabData["visum-047"].emailInput,firsttabData["visum-047"].streetNameInput,firsttabData["visum-047"].streetNumberInput,firsttabData["visum-047"].postalCodeInput,firsttabData["visum-047"].additionalAddressInput,firsttabData["visum-047"].cityInput,firsttabData["visum-047"].dayInput,firsttabData["visum-047"].monthInput,firsttabData["visum-047"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-047"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-047"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-047"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-047"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-047"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-047"].secondtabPreviousButton);

  })
page.close();
});


//43
test('NXGS-TC-4387:  TC_043_Visum_1_Validate error message disappears when only valid mobile number given', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-043"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-047"].firstNameInput, firsttabData["visum-047"].lastNameInput,firsttabData["visum-047"].passportInput,firsttabData["visum-043"].mobileNumbercodeInput,firsttabData["visum-043"].mobileNumberInput,firsttabData["visum-047"].emailInput,firsttabData["visum-047"].streetNameInput,firsttabData["visum-047"].streetNumberInput,firsttabData["visum-047"].postalCodeInput,firsttabData["visum-047"].additionalAddressInput,firsttabData["visum-047"].cityInput,firsttabData["visum-047"].dayInput,firsttabData["visum-047"].monthInput,firsttabData["visum-047"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Verified error text as ' Invalid Phone '", async () => {
    await visumPage.verifyinvalidMobilenumbererrorText(firsttabData["visum-043"].phonenumbererrortext);
  })  
  
page.close();
});

//44
test('NXGS-TC-4388:  TC_044_Visum_1_Validate error message disappears when only valid postal code given', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-044"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-044"].firstNameInput, firsttabData["visum-044"].lastNameInput,firsttabData["visum-044"].passportInput,firsttabData["visum-044"].mobileNumbercodeInput,firsttabData["visum-044"].mobileNumberInput,firsttabData["visum-044"].emailInput,firsttabData["visum-044"].streetNameInput,firsttabData["visum-044"].streetNumberInput,firsttabData["visum-044"].postalCodeInput,firsttabData["visum-044"].additionalAddressInput,firsttabData["visum-044"].cityInput,firsttabData["visum-044"].dayInput,firsttabData["visum-044"].monthInput,firsttabData["visum-044"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Verified invalid postal code error text as 'Invalid Postal Code'", async () => {
    await visumPage.verifyinvalidpostalcodeerrorText(firsttabData["visum-044"].invalidpostalcodeErrormsg);
  })   
  
page.close();
});

//45
test('NXGS-TC-4389:  TC_045_Visum_1_Validate gender field displays in insured person details', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-045"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-045"].firstNameInput, firsttabData["visum-045"].lastNameInput,firsttabData["visum-045"].passportInput,firsttabData["visum-045"].mobileNumbercodeInput,firsttabData["visum-045"].mobileNumberInput,firsttabData["visum-045"].emailInput,firsttabData["visum-045"].streetNameInput,firsttabData["visum-045"].streetNumberInput,firsttabData["visum-045"].postalCodeInput,firsttabData["visum-045"].additionalAddressInput,firsttabData["visum-045"].cityInput,firsttabData["visum-045"].dayInput,firsttabData["visum-045"].monthInput,firsttabData["visum-045"].yearInput);
  })
 
  
  await test.step("Verified gender field text as ' Female'", async () => {
    await visumPage.verifyfemalegenderText(firsttabData["visum-045"].femalegendertext);
  })   
  
page.close();
});

//46
test('NXGS-TC-4390:  TC_046_Visum_1_Validate gender field displays in "Enter your date of birth and gender" section', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-046"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-046"].firstNameInput, firsttabData["visum-046"].lastNameInput,firsttabData["visum-046"].passportInput,firsttabData["visum-046"].mobileNumbercodeInput,firsttabData["visum-046"].mobileNumberInput,firsttabData["visum-046"].emailInput,firsttabData["visum-046"].streetNameInput,firsttabData["visum-046"].streetNumberInput,firsttabData["visum-046"].postalCodeInput,firsttabData["visum-046"].additionalAddressInput,firsttabData["visum-046"].cityInput,firsttabData["visum-046"].dayInput,firsttabData["visum-046"].monthInput,firsttabData["visum-046"].yearInput);
  })

    await test.step("Verified gender field text as ' Female'", async () => {
    await visumPage.verifyfemalegenderText(firsttabData["visum-046"].femalegendertext);
  })   
  
page.close();
});

//47
test('NXGS-TC-4391:  TC_047_Visum_2_Validate Ui fields displays in additional insured information section', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-047"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-047"].firstNameInput, firsttabData["visum-047"].lastNameInput,firsttabData["visum-047"].passportInput,firsttabData["visum-047"].mobileNumbercodeInput,firsttabData["visum-047"].mobileNumberInput,firsttabData["visum-047"].emailInput,firsttabData["visum-047"].streetNameInput,firsttabData["visum-047"].streetNumberInput,firsttabData["visum-047"].postalCodeInput,firsttabData["visum-047"].additionalAddressInput,firsttabData["visum-047"].cityInput,firsttabData["visum-047"].dayInput,firsttabData["visum-047"].monthInput,firsttabData["visum-047"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-047"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-047"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-047"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-047"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-047"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-047"].secondtabPreviousButton);

  })
page.close();
});

//48
test('NXGS-TC-4392:  TC_048_Visum_2_Validate Ui fields displays in additional insured information section', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-048"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-048"].firstNameInput, firsttabData["visum-048"].lastNameInput,firsttabData["visum-048"].passportInput,firsttabData["visum-048"].mobileNumbercodeInput,firsttabData["visum-048"].mobileNumberInput,firsttabData["visum-048"].emailInput,firsttabData["visum-048"].streetNameInput,firsttabData["visum-048"].streetNumberInput,firsttabData["visum-048"].postalCodeInput,firsttabData["visum-048"].additionalAddressInput,firsttabData["visum-048"].cityInput,firsttabData["visum-048"].dayInput,firsttabData["visum-048"].monthInput,firsttabData["visum-048"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-048"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await visumPage.verifyadditionalinsuredPersonText(firsttabData["visum-048"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await visumPage.verifynoteText(firsttabData["visum-048"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await visumPage.verifyaddanotherinsuredPersonButton(firsttabData["visum-048"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-048"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-048"].secondtabPreviousButton);

  })
page.close();
});

//49
test('NXGS-TC-4393:  TC_049_Visum_2_Validate user able to move to plan details (3rd tab) with only 1 insured member informatio', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].mobileNumbercodeInput,firsttabData["visum-049"].mobileNumberInput,firsttabData["visum-049"].emailInput,firsttabData["visum-049"].streetNameInput,firsttabData["visum-049"].streetNumberInput,firsttabData["visum-049"].postalCodeInput,firsttabData["visum-049"].additionalAddressInput,firsttabData["visum-049"].cityInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })

  ////page.pause();

  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-049"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await visumPage.verifyPlandetailsText(firsttabData["visum-049"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await visumPage.verifyPeriodofinsuranceText(firsttabData["visum-049"].periodofinsuranceText);

  })

 
  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await visumPage.verifyTotalpaymentText(firsttabData["visum-049"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-049"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-049"].secondtabPreviousButton);

  })
page.close();
});

//50
test('NXGS-TC-4394: TC_050_Visum_2_Validate user able to move to plan details (3rd tab) with 9 insured member information', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].mobileNumbercodeInput,firsttabData["visum-049"].mobileNumberInput,firsttabData["visum-049"].emailInput,firsttabData["visum-049"].streetNameInput,firsttabData["visum-049"].streetNumberInput,firsttabData["visum-049"].postalCodeInput,firsttabData["visum-049"].additionalAddressInput,firsttabData["visum-049"].cityInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter second Additional insured person information", async () => {
   // await visumPage.expatcaresecondpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Third Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })
  
  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fourt Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fifth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Sixth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Seventh Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Eigth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Nineth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
   // await visumPage.clickOnsecondtabNextButton();
  })
    
  ////page.pause();
 await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    //await visumPage.verifyPageTitle(firsttabData["visum-049"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    //await visumPage.verifyPlandetailsText(firsttabData["visum-049"].planneddetailsText);

  })

 await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    //await visumPage.verifyPeriodofinsuranceText(firsttabData["visum-049"].periodofinsuranceText);

  })

 
page.close();
});

//51
test('NXGS-TC-4395:  TC_051_Visum_2_Validate user able to move to plan details (3rd tab) with alll 10  insured member informationn', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].mobileNumbercodeInput,firsttabData["visum-049"].mobileNumberInput,firsttabData["visum-049"].emailInput,firsttabData["visum-049"].streetNameInput,firsttabData["visum-049"].streetNumberInput,firsttabData["visum-049"].postalCodeInput,firsttabData["visum-049"].additionalAddressInput,firsttabData["visum-049"].cityInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter second Additional insured person information", async () => {
   // await visumPage.expatcaresecondpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Third Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })
  
  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fourt Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fifth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Sixth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Seventh Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Eigth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Nineth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    //await visumPage.clickOnsecondtabNextButton();
  })

 await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    //await visumPage.verifyPageTitle(firsttabData["visum-049"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    //await visumPage.verifyPlandetailsText(firsttabData["visum-049"].planneddetailsText);

  })

 await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    //await visumPage.verifyPeriodofinsuranceText(firsttabData["visum-049"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    //await visumPage.verifyPreferredplanText(firsttabData["visum-049"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    //await visumPage.verifyPaymentsummaryText(firsttabData["visum-049"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    //await visumPage.verifyAdditionnaloptionText(firsttabData["visum-049"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    //await visumPage.verifyIncludecoverageText(firsttabData["visum-049"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    //await visumPage.verifyTotalpaymentText(firsttabData["visum-049"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    //await visumPage.verifysecondtabNextButton(firsttabData["visum-049"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    //await visumPage.verifysecondtabPreviousButton(firsttabData["visum-049"].secondtabPreviousButton);

  })

  
page.close();
});



//52
test('NXGS-TC-4396:  TC_052_Visum_2_Validate Add another insured person button get disable when all total 9 members added', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].mobileNumbercodeInput,firsttabData["visum-049"].mobileNumberInput,firsttabData["visum-049"].emailInput,firsttabData["visum-049"].streetNameInput,firsttabData["visum-049"].streetNumberInput,firsttabData["visum-049"].postalCodeInput,firsttabData["visum-049"].additionalAddressInput,firsttabData["visum-049"].cityInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter second Additional insured person information", async () => {
   // await visumPage.expatcaresecondpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Third Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })
  
  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fourt Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fifth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Sixth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Seventh Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Eigth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Nineth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })

 await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-049"].expectedPageTitle);
  })

 await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await visumPage.verifyPlandetailsText(firsttabData["visum-049"].planneddetailsText);

  })

 await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await visumPage.verifyPeriodofinsuranceText(firsttabData["visum-049"].periodofinsuranceText);

  })

  
page.close();
});

//53
test('NXGS-TC-4397:  TC_053_Visum_2_Validate same passport number given in all insured member details', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].mobileNumbercodeInput,firsttabData["visum-049"].mobileNumberInput,firsttabData["visum-049"].emailInput,firsttabData["visum-049"].streetNameInput,firsttabData["visum-049"].streetNumberInput,firsttabData["visum-049"].postalCodeInput,firsttabData["visum-049"].additionalAddressInput,firsttabData["visum-049"].cityInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter second Additional insured person information", async () => {
   // await visumPage.expatcaresecondpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Third Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })
  
  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fourt Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fifth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Sixth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Seventh Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Eigth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Nineth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })

 await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-049"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await visumPage.verifyPlandetailsText(firsttabData["visum-049"].planneddetailsText);

  })

 await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await visumPage.verifyPeriodofinsuranceText(firsttabData["visum-049"].periodofinsuranceText);

  })

 
  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await visumPage.verifyPaymentsummaryText(firsttabData["visum-049"].paymentsummaryText);

  })

  
  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await visumPage.verifyTotalpaymentText(firsttabData["visum-049"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-049"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-049"].secondtabPreviousButton);

  })
page.close();
});

//54
test('NXGS-TC-4398:  TC_054_Visum_2_Validate able to delete the added insured person using Remove button', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].mobileNumbercodeInput,firsttabData["visum-049"].mobileNumberInput,firsttabData["visum-049"].emailInput,firsttabData["visum-049"].streetNameInput,firsttabData["visum-049"].streetNumberInput,firsttabData["visum-049"].postalCodeInput,firsttabData["visum-049"].additionalAddressInput,firsttabData["visum-049"].cityInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter second Additional insured person information", async () => {
   // await visumPage.expatcaresecondpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Third Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })
  
  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fourt Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fifth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Sixth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Seventh Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Eigth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Nineth Additional insured person information", async () => {
    //await visumPage.expatcareThiradpersoninfosecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })

 await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-049"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await visumPage.verifyPlandetailsText(firsttabData["visum-049"].planneddetailsText);

  })

 await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await visumPage.verifyPeriodofinsuranceText(firsttabData["visum-049"].periodofinsuranceText);

  })

 

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await visumPage.verifyPaymentsummaryText(firsttabData["visum-049"].paymentsummaryText);

  })

 
  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await visumPage.verifyTotalpaymentText(firsttabData["visum-049"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-049"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-049"].secondtabPreviousButton);

  })
page.close();
});

//55
test('NXGS-TC-4399:  TC_055_Visum_2_Validate without insured member added able to redirect to plan details (3rd tab)', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-055"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-055"].firstNameInput, firsttabData["visum-055"].lastNameInput,firsttabData["visum-055"].passportInput,firsttabData["visum-055"].mobileNumbercodeInput,firsttabData["visum-055"].mobileNumberInput,firsttabData["visum-055"].emailInput,firsttabData["visum-055"].streetNameInput,firsttabData["visum-055"].streetNumberInput,firsttabData["visum-055"].postalCodeInput,firsttabData["visum-055"].additionalAddressInput,firsttabData["visum-055"].cityInput,firsttabData["visum-055"].dayInput,firsttabData["visum-055"].monthInput,firsttabData["visum-055"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  
  await test.step("Click on Second Tab Next Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-055"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await visumPage.verifyPlandetailsText(firsttabData["visum-055"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await visumPage.verifyPeriodofinsuranceText(firsttabData["visum-055"].periodofinsuranceText);

  })

 
  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await visumPage.verifyPaymentsummaryText(firsttabData["visum-055"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await visumPage.verifyTotalpaymentText(firsttabData["visum-055"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-055"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-055"].secondtabPreviousButton);

  })

page.close();
});

//56
test('NXGS-TC-4400:  TC_056_Visum_2_Validate no details given in added insured member information, able to redirect to plan details (3rd tab)', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-056"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-056"].firstNameInput, firsttabData["visum-056"].lastNameInput,firsttabData["visum-056"].passportInput,firsttabData["visum-056"].mobileNumbercodeInput,firsttabData["visum-056"].mobileNumberInput,firsttabData["visum-056"].emailInput,firsttabData["visum-056"].streetNameInput,firsttabData["visum-056"].streetNumberInput,firsttabData["visum-056"].postalCodeInput,firsttabData["visum-056"].additionalAddressInput,firsttabData["visum-056"].cityInput,firsttabData["visum-056"].dayInput,firsttabData["visum-056"].monthInput,firsttabData["visum-056"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-056"].FirstnameInput, firsttabData["visum-056"].LastnameInput,firsttabData["visum-056"].PassportInput,firsttabData["visum-056"].DayInput,firsttabData["visum-056"].MonthInput,firsttabData["visum-056"].YearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified text on Second tab as ' Field is required '", async () => {
    await visumPage.verifyfirstnamesecondtaberrorText(firsttabData["visum-056"].Firstnameinputfielderrormsg);

  })

page.close();
});

//57
test('NXGS-TC-4401:TC_057_Visum_2_Validate previous button functionality present in additional insured information (2nd tab)', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-057"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-057"].firstNameInput, firsttabData["visum-057"].lastNameInput,firsttabData["visum-057"].passportInput,firsttabData["visum-057"].mobileNumbercodeInput,firsttabData["visum-057"].mobileNumberInput,firsttabData["visum-057"].emailInput,firsttabData["visum-057"].streetNameInput,firsttabData["visum-057"].streetNumberInput,firsttabData["visum-057"].postalCodeInput,firsttabData["visum-057"].additionalAddressInput,firsttabData["visum-057"].cityInput,firsttabData["visum-057"].dayInput,firsttabData["visum-057"].monthInput,firsttabData["visum-057"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab Previous Button ", async () => {
    await visumPage.clickOnsecondtabPreviousButton();
  })
  
  await test.step("Verified text on First tab as ' Application for MAWISTA Expatcare '", async () => {
    await visumPage.veriffirsttabyexpectcareText(firsttabData["visum-057"].expatcaretext);

  })

page.close();
});

//58
test('NXGS-TC-4402: TC_058_Visum_2_Validate Next button functionality present in additional insured information (2nd tab)', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-058"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-058"].firstNameInput, firsttabData["visum-058"].lastNameInput,firsttabData["visum-058"].passportInput,firsttabData["visum-058"].mobileNumbercodeInput,firsttabData["visum-058"].mobileNumberInput,firsttabData["visum-058"].emailInput,firsttabData["visum-058"].streetNameInput,firsttabData["visum-058"].streetNumberInput,firsttabData["visum-058"].postalCodeInput,firsttabData["visum-058"].additionalAddressInput,firsttabData["visum-058"].cityInput,firsttabData["visum-058"].dayInput,firsttabData["visum-058"].monthInput,firsttabData["visum-058"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-058"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await visumPage.verifyPlandetailsText(firsttabData["visum-058"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await visumPage.verifyPeriodofinsuranceText(firsttabData["visum-058"].periodofinsuranceText);

  })


  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await visumPage.verifyPaymentsummaryText(firsttabData["visum-058"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await visumPage.verifyTotalpaymentText(firsttabData["visum-058"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-058"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-058"].secondtabPreviousButton);

  })

page.close();
});

//59
test('NXGS-TC-4403: TC_059_Visum_2_Validate in dependent first name fields, able to give alphabetic text upto 60 characters', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-059"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-059"].firstNameInput, firsttabData["visum-059"].lastNameInput,firsttabData["visum-059"].passportInput,firsttabData["visum-059"].mobileNumbercodeInput,firsttabData["visum-059"].mobileNumberInput,firsttabData["visum-059"].emailInput,firsttabData["visum-059"].streetNameInput,firsttabData["visum-059"].streetNumberInput,firsttabData["visum-059"].postalCodeInput,firsttabData["visum-059"].additionalAddressInput,firsttabData["visum-059"].cityInput,firsttabData["visum-059"].dayInput,firsttabData["visum-059"].monthInput,firsttabData["visum-059"].yearInput);
  })

  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await visumPage.verifyFirstnameonfirsttabfillederrorText(firsttabData["visum-038"].firstnameErrormsg);
  })  
 
page.close();
});


//60
test('NXGS-TC-4404: TC_060_Visum_2_Validate in dependent last  name fields, able to give alphabetic text upto 60 characters', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-060"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-060"].firstNameInput, firsttabData["visum-060"].lastNameInput,firsttabData["visum-060"].passportInput,firsttabData["visum-060"].mobileNumbercodeInput,firsttabData["visum-060"].mobileNumberInput,firsttabData["visum-060"].emailInput,firsttabData["visum-060"].streetNameInput,firsttabData["visum-060"].streetNumberInput,firsttabData["visum-060"].postalCodeInput,firsttabData["visum-060"].additionalAddressInput,firsttabData["visum-060"].cityInput,firsttabData["visum-060"].dayInput,firsttabData["visum-060"].monthInput,firsttabData["visum-060"].yearInput);
  })

  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await visumPage.verifylastnameonfirsttabfillederrorText(firsttabData["visum-039"].lastnameErrormsg);
  })

page.close();
});

//61
test('NXGS-TC-4405: TC_061_Visum_2_Validate able to select gender drop down value in added insured member', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-061"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-061"].firstNameInput, firsttabData["visum-061"].lastNameInput,firsttabData["visum-061"].passportInput,firsttabData["visum-061"].mobileNumbercodeInput,firsttabData["visum-061"].mobileNumberInput,firsttabData["visum-061"].emailInput,firsttabData["visum-061"].streetNameInput,firsttabData["visum-061"].streetNumberInput,firsttabData["visum-061"].postalCodeInput,firsttabData["visum-061"].additionalAddressInput,firsttabData["visum-061"].cityInput,firsttabData["visum-061"].dayInput,firsttabData["visum-061"].monthInput,firsttabData["visum-061"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-061"].firstNameInput, firsttabData["visum-061"].lastNameInput,firsttabData["visum-061"].passportInput,firsttabData["visum-061"].dayInput,firsttabData["visum-061"].monthInput,firsttabData["visum-061"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-061"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await visumPage.verifyPlandetailsText(firsttabData["visum-061"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await visumPage.verifyPeriodofinsuranceText(firsttabData["visum-061"].periodofinsuranceText);

  })


  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await visumPage.verifyPaymentsummaryText(firsttabData["visum-061"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await visumPage.verifyTotalpaymentText(firsttabData["visum-061"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-061"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-061"].secondtabPreviousButton);

  })

page.close();
});

//62
test('NXGS-TC-4406: TC_062_Visum_2_Validate able to give any date of birth in dependent date of birth field', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-062"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-062"].firstNameInput, firsttabData["visum-062"].lastNameInput,firsttabData["visum-062"].passportInput,firsttabData["visum-062"].mobileNumbercodeInput,firsttabData["visum-062"].mobileNumberInput,firsttabData["visum-062"].emailInput,firsttabData["visum-062"].streetNameInput,firsttabData["visum-062"].streetNumberInput,firsttabData["visum-062"].postalCodeInput,firsttabData["visum-062"].additionalAddressInput,firsttabData["visum-062"].cityInput,firsttabData["visum-062"].dayInput,firsttabData["visum-062"].monthInput,firsttabData["visum-062"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-061"].firstNameInput, firsttabData["visum-061"].lastNameInput,firsttabData["visum-061"].passportInput,firsttabData["visum-061"].dayInput,firsttabData["visum-061"].monthInput,firsttabData["visum-061"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-062"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await visumPage.verifyPlandetailsText(firsttabData["visum-062"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await visumPage.verifyPeriodofinsuranceText(firsttabData["visum-062"].periodofinsuranceText);

  })


  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await visumPage.verifyPaymentsummaryText(firsttabData["visum-062"].paymentsummaryText);

  })


  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await visumPage.verifyTotalpaymentText(firsttabData["visum-062"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-062"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-062"].secondtabPreviousButton);

  })

page.close();
});

//63
test('NXGS-TC-4407: C_063_Visum_2_Validate dependency field is hidden in insured member details', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-063"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-063"].firstNameInput, firsttabData["visum-063"].lastNameInput,firsttabData["visum-063"].passportInput,firsttabData["visum-063"].mobileNumbercodeInput,firsttabData["visum-063"].mobileNumberInput,firsttabData["visum-063"].emailInput,firsttabData["visum-063"].streetNameInput,firsttabData["visum-063"].streetNumberInput,firsttabData["visum-063"].postalCodeInput,firsttabData["visum-063"].additionalAddressInput,firsttabData["visum-063"].cityInput,firsttabData["visum-063"].dayInput,firsttabData["visum-063"].monthInput,firsttabData["visum-063"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-061"].firstNameInput, firsttabData["visum-061"].lastNameInput,firsttabData["visum-061"].passportInput,firsttabData["visum-061"].dayInput,firsttabData["visum-061"].monthInput,firsttabData["visum-061"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-063"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await visumPage.verifyPlandetailsText(firsttabData["visum-063"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await visumPage.verifyPeriodofinsuranceText(firsttabData["visum-063"].periodofinsuranceText);

  })


  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await visumPage.verifyPaymentsummaryText(firsttabData["visum-063"].paymentsummaryText);

  })


  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await visumPage.verifyTotalpaymentText(firsttabData["visum-063"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-063"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-063"].secondtabPreviousButton);

  })

page.close();
});

//64
test('NXGS-TC-4408: TC_064_Visum_2_Validate able to give minimum 3 length of characters in dependent first name field', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-064"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-064"].firstNameInput, firsttabData["visum-064"].lastNameInput,firsttabData["visum-064"].passportInput,firsttabData["visum-064"].mobileNumbercodeInput,firsttabData["visum-064"].mobileNumberInput,firsttabData["visum-064"].emailInput,firsttabData["visum-064"].streetNameInput,firsttabData["visum-064"].streetNumberInput,firsttabData["visum-064"].postalCodeInput,firsttabData["visum-064"].additionalAddressInput,firsttabData["visum-064"].cityInput,firsttabData["visum-064"].dayInput,firsttabData["visum-064"].monthInput,firsttabData["visum-064"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-064"].firstNameInput, firsttabData["visum-064"].lastNameInput,firsttabData["visum-064"].passportInput,firsttabData["visum-064"].dayInput,firsttabData["visum-064"].monthInput,firsttabData["visum-064"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-064"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await visumPage.verifyPlandetailsText(firsttabData["visum-064"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await visumPage.verifyPeriodofinsuranceText(firsttabData["visum-064"].periodofinsuranceText);

  })

  
  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await visumPage.verifyPaymentsummaryText(firsttabData["visum-064"].paymentsummaryText);

  })


  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await visumPage.verifyTotalpaymentText(firsttabData["visum-064"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-064"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-064"].secondtabPreviousButton);

  })

page.close();
});

//65
test('NXGS-TC-4409: TC_065_Visum_2_Validate able to give minimum 3 length of characters in dependent last name field', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-065"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-065"].firstNameInput, firsttabData["visum-065"].lastNameInput,firsttabData["visum-065"].passportInput,firsttabData["visum-065"].mobileNumbercodeInput,firsttabData["visum-065"].mobileNumberInput,firsttabData["visum-065"].emailInput,firsttabData["visum-065"].streetNameInput,firsttabData["visum-065"].streetNumberInput,firsttabData["visum-065"].postalCodeInput,firsttabData["visum-065"].additionalAddressInput,firsttabData["visum-065"].cityInput,firsttabData["visum-065"].dayInput,firsttabData["visum-065"].monthInput,firsttabData["visum-065"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })


  await test.step("Enter First Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-065"].firstNameInput, firsttabData["visum-065"].lastNameInput,firsttabData["visum-065"].passportInput,firsttabData["visum-065"].dayInput,firsttabData["visum-065"].monthInput,firsttabData["visum-065"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-065"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await visumPage.verifyPlandetailsText(firsttabData["visum-065"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await visumPage.verifyPeriodofinsuranceText(firsttabData["visum-065"].periodofinsuranceText);

  })

 
  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await visumPage.verifyPaymentsummaryText(firsttabData["visum-065"].paymentsummaryText);

  })


  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await visumPage.verifyTotalpaymentText(firsttabData["visum-065"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-065"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-065"].secondtabPreviousButton);

  })

page.close();
});

//66
test('NXGS-TC-4410: TC_066_Visum_2_Validate in additional insured member, user is not able to give alphanumeric text in first name field of added dependent', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-065"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-066"].firstNameInput, firsttabData["visum-066"].lastNameInput,firsttabData["visum-066"].passportInput,firsttabData["visum-066"].mobileNumbercodeInput,firsttabData["visum-066"].mobileNumberInput,firsttabData["visum-066"].emailInput,firsttabData["visum-066"].streetNameInput,firsttabData["visum-066"].streetNumberInput,firsttabData["visum-066"].postalCodeInput,firsttabData["visum-066"].additionalAddressInput,firsttabData["visum-066"].cityInput,firsttabData["visum-066"].dayInput,firsttabData["visum-066"].monthInput,firsttabData["visum-066"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-066"].firstnameInput, firsttabData["visum-066"].lastNameInput,firsttabData["visum-066"].passportInput,firsttabData["visum-066"].dayInput,firsttabData["visum-066"].monthInput,firsttabData["visum-066"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Second Tab First name error text as '  Field format is invalid  '", async () => {
    await visumPage.verifsecondtabinsuredfirstnameText(firsttabData["visum-066"].additinalfirstnameinsurederrormsg);
  })

page.close();
});

//67
test('NXGS-TC-4411: TC_67_Visum_2_Validate in additional insured field, user is not able to give alphanumeric text in last name field of added dependen', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-067"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-067"].firstNameInput, firsttabData["visum-067"].lastNameInput,firsttabData["visum-067"].passportInput,firsttabData["visum-067"].mobileNumbercodeInput,firsttabData["visum-067"].mobileNumberInput,firsttabData["visum-067"].emailInput,firsttabData["visum-067"].streetNameInput,firsttabData["visum-067"].streetNumberInput,firsttabData["visum-067"].postalCodeInput,firsttabData["visum-067"].additionalAddressInput,firsttabData["visum-067"].cityInput,firsttabData["visum-067"].dayInput,firsttabData["visum-067"].monthInput,firsttabData["visum-067"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-067"].firstNameInput, firsttabData["visum-067"].lastnameInput,firsttabData["visum-067"].passportInput,firsttabData["visum-067"].dayInput,firsttabData["visum-067"].monthInput,firsttabData["visum-067"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Second Tab Last name error text as '  Field format is invalid  '", async () => {
    await visumPage.verifsecondtabinsuredlastnameText(firsttabData["visum-067"].additinallastnameinsurederrormsg);
  })

page.close();
});

//68
test('NXGS-TC-4412: TC_068_Visum_2_Validate able to give invalid  values  in insured member date of birth field', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-068"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-068"].firstNameInput, firsttabData["visum-068"].lastNameInput,firsttabData["visum-068"].passportInput,firsttabData["visum-068"].mobileNumbercodeInput,firsttabData["visum-068"].mobileNumberInput,firsttabData["visum-068"].emailInput,firsttabData["visum-068"].streetNameInput,firsttabData["visum-068"].streetNumberInput,firsttabData["visum-068"].postalCodeInput,firsttabData["visum-068"].additionalAddressInput,firsttabData["visum-068"].cityInput,firsttabData["visum-068"].dayInput,firsttabData["visum-068"].monthInput,firsttabData["visum-068"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })


  await test.step("Enter First Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-068"].firstnameInput, firsttabData["visum-068"].lastNameInput,firsttabData["visum-068"].passportInput,firsttabData["visum-068"].dAy,firsttabData["visum-068"].mOnth,firsttabData["visum-068"].yEar);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Second Tab First name error text as '  Field format is invalid  '", async () => {
    await visumPage.verifyinvalidDateofbirtherrorText(firsttabData["visum-068"].additinaldateofbirthinsurederrormsg);
  })

page.close();
});

//69
test('NXGS-TC-4413: TC_069_Visum_2_Validate giving invalid passport number in additional insured and dependent insured informat', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-068"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-068"].firstNameInput, firsttabData["visum-068"].lastNameInput,firsttabData["visum-068"].passportInput,firsttabData["visum-068"].mobileNumbercodeInput,firsttabData["visum-068"].mobileNumberInput,firsttabData["visum-068"].emailInput,firsttabData["visum-068"].streetNameInput,firsttabData["visum-068"].streetNumberInput,firsttabData["visum-068"].postalCodeInput,firsttabData["visum-068"].additionalAddressInput,firsttabData["visum-068"].cityInput,firsttabData["visum-068"].dayInput,firsttabData["visum-068"].monthInput,firsttabData["visum-068"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })


  await test.step("Enter First Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-068"].firstnameInput, firsttabData["visum-068"].lastNameInput,firsttabData["visum-068"].passportInput,firsttabData["visum-068"].dAy,firsttabData["visum-068"].mOnth,firsttabData["visum-068"].yEar);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Second Tab First name error text as '  Field format is invalid  '", async () => {
    await visumPage.verifyinvalidDateofbirtherrorText(firsttabData["visum-068"].additinaldateofbirthinsurederrormsg);
  })

page.close();
});

//70
test('NXGS-TC-4414: TC_070_Visum_3_Validate UI fields present in plan details (3rd tab)', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-070"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-070"].firstNameInput, firsttabData["visum-070"].lastNameInput,firsttabData["visum-070"].passportInput,firsttabData["visum-070"].mobileNumbercodeInput,firsttabData["visum-070"].mobileNumberInput,firsttabData["visum-070"].emailInput,firsttabData["visum-070"].streetNameInput,firsttabData["visum-070"].streetNumberInput,firsttabData["visum-070"].postalCodeInput,firsttabData["visum-070"].additionalAddressInput,firsttabData["visum-070"].cityInput,firsttabData["visum-070"].dayInput,firsttabData["visum-070"].monthInput,firsttabData["visum-070"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-070"].firstNameInput, firsttabData["visum-070"].lastNameInput,firsttabData["visum-070"].passportInput,firsttabData["visum-070"].dayInput,firsttabData["visum-070"].monthInput,firsttabData["visum-070"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-070"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await visumPage.verifyPlandetailsText(firsttabData["visum-070"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await visumPage.verifyPeriodofinsuranceText(firsttabData["visum-070"].periodofinsuranceText);

  })


  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await visumPage.verifyPaymentsummaryText(firsttabData["visum-065"].paymentsummaryText);

  })
  
  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await visumPage.verifyTotalpaymentText(firsttabData["visum-065"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await visumPage.verifysecondtabNextButton(firsttabData["visum-065"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await visumPage.verifysecondtabPreviousButton(firsttabData["visum-065"].secondtabPreviousButton);

  })

page.close();
});

//71
test('NXGS-TC-4415: TC_071_Visum_3_Validate widget/tiles  content when Mawista 8 days Duration selected', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-071"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-071"].firstNameInput, firsttabData["visum-071"].lastNameInput,firsttabData["visum-071"].passportInput,firsttabData["visum-071"].mobileNumbercodeInput,firsttabData["visum-071"].mobileNumberInput,firsttabData["visum-071"].emailInput,firsttabData["visum-071"].streetNameInput,firsttabData["visum-071"].streetNumberInput,firsttabData["visum-071"].postalCodeInput,firsttabData["visum-071"].additionalAddressInput,firsttabData["visum-071"].cityInput,firsttabData["visum-071"].dayInput,firsttabData["visum-071"].monthInput,firsttabData["visum-071"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })

  await test.step("Select start date and eight days duration ", async () => {
    await visumPage.selectstartdateandeightdaysduration();
  })
  
  await test.step("Verified widget/tiles  content when Mawista 8 days Duration selected'", async () => {
    await visumPage.verifyEightdaysdurationtilecontextText(firsttabData["visum-071"].eightdaystext,firsttabData["visum-071"].classicfcontenttext,firsttabData["visum-071"].classicscontenttext,firsttabData["visum-071"].classictdcontenttext);

  })
  
page.close();
});

//72
test('NXGS-TC-4416: C_072_Visum_3_Validate widget/tiles  content when Mawista 15 days Duration selected', async ({ page }) => {
 const visumPage: VisumPage = new VisumPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-072"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })

  await test.step("Click on Classic Radio button ", async () => {
    await visumPage.selectstartdateandfifteendaysduration();
  })
  
  await test.step("Verified text on Classic button as 'Free choice of doctors,Attractive cost-benefit ratio,Accident-related aids'", async () => {
    await visumPage.verifyFifteendaysdurationtilecontextText(firsttabData["visum-072"].eightdaystext,firsttabData["visum-072"].classicfcontenttext,firsttabData["visum-072"].classicscontenttext,firsttabData["visum-072"].classictdcontenttext);

  })
  
page.close();
});

//73
test('NXGS-TC-4417: TC_073_Visum_3_Validate widget/tiles  content when Mawista 31 days Duration selected', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Click on Classic Radio button ", async () => {
     await visumPage.selectstartdateandthirtyonedaysduration();
   })
   
   await test.step("Verified text on Classic button as 'Free choice of doctors,Attractive cost-benefit ratio,Accident-related aids'", async () => {
     await visumPage.verifyThirtyonedaysdurationtilecontextText(firsttabData["visum-073"].eightdaystext,firsttabData["visum-072"].classicfcontenttext,firsttabData["visum-072"].classicscontenttext,firsttabData["visum-072"].classictdcontenttext);
 
   })
   
 page.close();
 });

 //74
test('NXGS-TC-4418: TC_074_Visum_3_Validate widget/tiles  content when Mawista 45 days Duration selected', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Click on Classic Radio button ", async () => {
     await visumPage.selectstartdateandfourtyfiveduration();
   })
   
   await test.step("Verified text on Classic button as 'Free choice of doctors,Attractive cost-benefit ratio,Accident-related aids'", async () => {
     await visumPage.verifyFourtyfivedaysdurationtilecontextText(firsttabData["visum-074"].eightdaystext,firsttabData["visum-072"].classicfcontenttext,firsttabData["visum-072"].classicscontenttext,firsttabData["visum-072"].classictdcontenttext);
 
   })
   
 page.close();
 });

 //75
test('NXGS-TC-4419: TC_075_Visum_3_Validate widget/tiles  content when Mawista 62 days Duration selected', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Click on Classic Radio button ", async () => {
     await visumPage.selectstartdateandsixtytwoduration();
   })
   
   await test.step("Verified text on Classic button as 'Free choice of doctors,Attractive cost-benefit ratio,Accident-related aids'", async () => {
     await visumPage.verifySixtyTwodaysdurationtilecontextText(firsttabData["visum-075"].eightdaystext,firsttabData["visum-072"].classicfcontenttext,firsttabData["visum-072"].classicscontenttext,firsttabData["visum-072"].classictdcontenttext);
 
   })
   
 page.close();
 });

 //76
test('NXGS-TC-4420: TC_076_Visum_3_Validate widget/tiles  content when Mawista 92 days Duration selected', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Click on Classic Radio button ", async () => {
     await visumPage.selectstartdateandnintytwoduration();
   })
   
   await test.step("Verified text on Classic button as 'Free choice of doctors,Attractive cost-benefit ratio,Accident-related aids'", async () => {
     await visumPage.verifyNintyTwodaysdurationtilecontextText(firsttabData["visum-076"].eightdaystext,firsttabData["visum-072"].classicfcontenttext,firsttabData["visum-072"].classicscontenttext,firsttabData["visum-072"].classictdcontenttext);
 
   })
   
 page.close();
 });

 //77
 test('NXGS-TC-4421: TC_077_Visum_3_Validate widget/tiles  content when Mawista 183 days Duration selected', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Click on Classic Radio button ", async () => {
     await visumPage.selectstartdateandoneeightythreeduration();
   })
   
   await test.step("Verified text on Classic button as 'Free choice of doctors,Attractive cost-benefit ratio,Accident-related aids'", async () => {
     await visumPage.verifyOneeightythreedaysdurationtilecontextText(firsttabData["visum-077"].eightdaystext,firsttabData["visum-072"].classicfcontenttext,firsttabData["visum-072"].classicscontenttext,firsttabData["visum-072"].classictdcontenttext);
 
   })
   
 page.close();
 });

 //78
 test('NXGS-TC-4422: TC_078_Visum_3_Validate Any date from today onwards upto three years will be selected after selecting Start', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Click on Classic Radio button ", async () => {
     await visumPage.selectstartdateandoneeightythreeduration();
   })
   
   await test.step("Verified text on Classic button as 'Free choice of doctors,Attractive cost-benefit ratio,Accident-related aids'", async () => {
     await visumPage.verifyOneeightythreedaysdurationtilecontextText(firsttabData["visum-077"].eightdaystext,firsttabData["visum-072"].classicfcontenttext,firsttabData["visum-072"].classicscontenttext,firsttabData["visum-072"].classictdcontenttext);
 
   })
   
 page.close();
 });

 //79
test('NXGS-TC-4423: TC_079_Visum_3_validate  correct premium displays when 8 days duration is selected after selecting start date', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-071"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-071"].firstNameInput, firsttabData["visum-071"].lastNameInput,firsttabData["visum-071"].passportInput,firsttabData["visum-071"].mobileNumbercodeInput,firsttabData["visum-071"].mobileNumberInput,firsttabData["visum-071"].emailInput,firsttabData["visum-071"].streetNameInput,firsttabData["visum-071"].streetNumberInput,firsttabData["visum-071"].postalCodeInput,firsttabData["visum-071"].additionalAddressInput,firsttabData["visum-071"].cityInput,firsttabData["visum-071"].dayInput,firsttabData["visum-071"].monthInput,firsttabData["visum-071"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select start date and eight days duration ", async () => {
     await visumPage.selectstartdateandeightdaysduration();
   })
   
   await test.step("Verified  premium displays when 8 days duration is selected after selecting start date'", async () => {
     await visumPage.verifyEightdaysdurationprimumText(firsttabData["visum-079"].premiumtext);
 
   })
   
 page.close();
 });

 //80
test('NXGS-TC-4424: TC_080_Visum_3_validate  correct premium displays when 15 days duration is selected after selecting start', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select start date and fifteen days duration ", async () => {
     await visumPage.selectstartdateandfifteendaysduration();
   })
   
   await test.step("Verified  premium displays when 15 days duration is selected after selecting start date'", async () => {
    await visumPage.verifyFifteendaysdurationprimumText(firsttabData["visum-080"].premiumtext);

  })
  
 page.close();
 });


 //81
test('NXGS-TC-4425: TC_081_Visum_3_validate  correct premium displays when 31 days duration is selected after selecting start date', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select start date and thirty one days duration ", async () => {
     await visumPage.selectstartdateandthirtyonedaysduration();
   })
   
   await test.step("Verified  premium displays when 31 days duration is selected after selecting start date'", async () => {
    await visumPage.verifyThirtyonedaysdurationprimumText(firsttabData["visum-081"].premiumtext);

  })
 page.close();
 });
 
//82
test('NXGS-TC-4426: TC_082_Visum_3_validate  correct premium displays when 45 days duration is selected after selecting start date', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select start date and fourty five days duration ", async () => {
     await visumPage.selectstartdateandfourtyfiveduration();
   })
   
   await test.step("Verified  premium displays when 45 days duration is selected after selecting start date'", async () => {
    await visumPage.verifyFourtyfivedaysdurationprimumText(firsttabData["visum-082"].premiumtext);

  })
   
 page.close();
 });

//83
test('NXGS-TC-4427: TC_083_Visum_3_validate  correct premium displays when 62 days duration is selected after selecting start date', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select start date and sixty two days duration ", async () => {
     await visumPage.selectstartdateandsixtytwoduration();
   })
   
   await test.step("Verified  premium displays when 62 days duration is selected after selecting start date'", async () => {
    await visumPage.verifySixtytwodaysdurationprimumText(firsttabData["visum-083"].premiumtext);

  })
   
 page.close();
 });

 //84
test('NXGS-TC-4428: TC_084_Visum_3_validate  correct premium displays when 92 days duration is selected after selecting start date', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select start date and Ninty two days duration ", async () => {
     await visumPage.selectstartdateandnintytwoduration();
   })
   
   await test.step("Verified  premium displays when 92 days duration is selected after selecting start date'", async () => {
    await visumPage.verifyNintytwodaysdurationprimumText(firsttabData["visum-084"].premiumtext);

  })
   
 page.close();
 });

 //85
 test('NXGS-TC-4429: TC_085_Visum_3_validate  correct premium displays when 183 days duration is selected after selecting start date', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select start date and one eighty three days duration ", async () => {
     await visumPage.selectstartdateandoneeightythreeduration();
   })
   
   await test.step("Verified  premium displays when 183 days duration is selected after selecting start date'", async () => {
    await visumPage.verifyOneeightythreedaysdurationprimumText(firsttabData["visum-085"].premiumtext);

  })

   page.close();
 });

 //86
 test('NXGS-TC-4430: TC_086_Visum_3_Validate premium get changed when  dependent added for selected product plan', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select start date and one eighty three days duration ", async () => {
     await visumPage.selectstartdateandoneeightythreeduration();
   })
   
   await test.step("Verified  premium displays when 183 days duration is selected after selecting start date'", async () => {
    await visumPage.verifyOneeightythreedayswithoneinsuredpersondurationprimumText(firsttabData["visum-086"].premiumtext);

  })

   page.close();
 });

 //87
 test('NXGS-TC-4431: TC_087_Visum_3_Validate premium get affected when product plan selection changed', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select start date and Ninty two days duration ", async () => {
    await visumPage.selectstartdateandnintytwoduration();
  })
   
   await test.step("Verified  premium displays when 92 days duration is selected after selecting start date'", async () => {
    await visumPage.verifyNinetwodayswithoneinsuredpersondurationprimumText(firsttabData["visum-087"].premiumtext);

  })

   page.close();
 });

 //88
 test('NXGS-TC-4432: TC_088_Visum_3_Validate correct payment summary details displays when only policy holder added in policy', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select start date and sixty two days duration ", async () => {
    await visumPage.selectstartdateandsixtytwoduration();
  })
   
   await test.step("Verified  premium displays when 62 days duration is selected after selecting start date'", async () => {
    await visumPage.verifySixtytwodayswithoneinsuredpersondurationprimumText(firsttabData["visum-088"].premiumtext);

  })

   page.close();
 });

 //89
 test('NXGS-TC-4433: TC_089_Visum_3_Validate correct payment summary details displays when insured member added in policy', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select start date and fourty five days duration ", async () => {
    await visumPage.selectstartdateandfourtyfiveduration();
  })
   
   await test.step("Verified  premium displays when 45 days duration is selected after selecting start date'", async () => {
    await visumPage.verifyFourtyfivedayswithoneinsuredpersondurationprimumText(firsttabData["visum-089"].premiumtext);

  })

   page.close();
 });

 //90
 test('NXGS-TC-4434: TC_090_Visum_3_Validate correct payment summary details displays when upto 9 insured member added in policy', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
   await test.step("Verified  premium displays when 183 days duration is selected after selecting start date'", async () => {
    await visumPage.verifyThirtyonedayswithoneinsuredpersondurationprimumText(firsttabData["visum-090"].premiumtext);

  })

   page.close();
 });

 //91
 test('NXGS-TC-4435: TC_091_Visum_3_Validate with all details given in plan details (3rd tab), able to redirect to 4th', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })
  
  await test.step("Verified text on Third tab as ' Payment method and checkout '", async () => {
    await visumPage.verifpaymentmethodandcheckouttextonthirstab(firsttabData["visum-091"].paymentmethodtext);

  })
   

   page.close();
 });

 //92
 test('NXGS-TC-4436: TC_092_Visum_3_Validate without any details start date and duration fields in plan details (3rd tab), able to redirect to Payment method and checkout (4th', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })
  
  await test.step("Verified error text as 'Invalid or missing information,please check your information and try again'", async () => {
    await visumPage.verifyNoanydetailsfillederrorText(firsttabData["visum-092"].lastnameErrormsg);
  })
  
   page.close();
 });


 //93
 test('NXGS-TC-4437: TC_093_Visum_3_Validate without any plan selection in plan details (3rd tab), able to redirect to Payment method and checkout (4th tab)', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })
  
  await test.step("Verified error text as 'Invalid or missing information,please check your information and try again'", async () => {
    await visumPage.verifyNoanydetailsfillederrorText(firsttabData["visum-092"].lastnameErrormsg);
  })
  
   page.close();
 });

 //94
 test('NXGS-TC-4438: TC_094_Visum_3_Validate giving more than 2 years duration', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })
  
  await test.step("Verified error text as 'Invalid or missing information,please check your information and try again'", async () => {
    await visumPage.verifyNoanydetailsfillederrorText(firsttabData["visum-092"].lastnameErrormsg);
  })
  
   page.close();
 });

 //95
 test('NXGS-TC-4439: TC_095_Visum_3_Validate in payment summary, additional member sorted with oldest DOB first displays in row', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Add another insured person Button ", async () => {
    await visumPage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await visumPage.expatcaresecondtTab(firsttabData["visum-049"].firstNameInput, firsttabData["visum-049"].lastNameInput,firsttabData["visum-049"].passportInput,firsttabData["visum-049"].dayInput,firsttabData["visum-049"].monthInput,firsttabData["visum-049"].yearInput);
  })
 
   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })
  
  await test.step("Verified error text as 'Invalid or missing information,please check your information and try again'", async () => {
    await visumPage.verifyNoanydetailsfillederrorText(firsttabData["visum-092"].lastnameErrormsg);
  })
  
   page.close();
 });

 //96
 test('NXGS-TC-4440: TC_096_Visum_4_Validate UI fields displays in payment details and checkout tab', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })
  
  await test.step("Verified second tab page title text as 'Online application protect - MAWISTA'", async () => {
    await visumPage.verifyPageTitle(firsttabData["visum-008"].expectedPageTitle);
  })
  
   page.close();
 });


 //97
 test('NXGS-TC-4441: TC_097_Visum_4_Validate UI fields displays when SEPA direct debit option selected in payment method', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await visumPage.clickOnDirectdebittButton();
  })

  await test.step("Verified the visiblity of Name of Account holder and IBAN", async () => {
    await visumPage.verifydebitcarddettailstab();
  })
  
   page.close();
 });


 //98
 test('NXGS-TC-4442: TC_098_Visum_4_Validate UI fields displays when credit card option selected in payment method', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await visumPage.clickOnDirectdebittButton();
  })

  await test.step("Verified the visiblity of Name of Account holder and IBAN", async () => {
    await visumPage.verifydebitcarddettailstab();
  })
  
   page.close();
 });

 //99
 test('NXGS-TC-4443: TC_099_Visum_4_Validate user able to purchase the Visum policy with all required details using sepa direct debit option in payment details with valid iban a', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await visumPage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await visumPage.expatcarefilldebitcarddetailstTab(firsttabData["visum-099"].iban);
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await visumPage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await visumPage.expatcareclickonibanchkboxTab();
  })
 // page.pause();
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await visumPage.clickOnApplyandPayButton();
  })
 
  await test.step("Verified all details on Thank you page ", async () => {
   await visumPage.verifyThankyoupageText(firsttabData["visum-099"].thankyouText,firsttabData["visum-099"].requestText,firsttabData["visum-099"].questionText,firsttabData["visum-099"].infoText);
  })
  
   page.close();
 });

 //100
 test('NXGS-TC-4444: TC_100_Visum_4_Validate user able to purchase the Visum policy with all required details using credit card option in payment details and checkout', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await visumPage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await visumPage.clickOnCheckboxesonfourthtab();
  })

  //page.pause();
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await visumPage.clickOnApplyandPayButton();
  })

  
  await test.step("Enter all details of credit card ", async () => {
    await visumPage.expatcareFilldetailsoncreditcardTab();
  })

  
  await test.step("Vaerified all details on Thank you page ", async () => {
    await visumPage.verifyThankyoupageText(firsttabData["visum-099"].thankyouText,firsttabData["visum-099"].requestText,firsttabData["visum-099"].questionText,firsttabData["visum-099"].infoText);
  })

  page.close();
 });

//101
test('NXGS-TC-4445: TC_101_Visum_4_Validate when Visum policy created then policy status is shown under “Quotation Manual Re', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await visumPage.clickOnDirectdebittButton();
  })

  await test.step("Verified the visiblity of Name of Account holder and IBAN", async () => {
    await visumPage.verifydebitcarddettailstab();
  })
  
   page.close();
 });

 //102
test('NXGS-TC-4446: C_102_Visum_4_Validate previous button functionality in payment details page', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await visumPage.clickOnDirectdebittButton();
  })

  await test.step("Verified the visiblity of Name of Account holder and IBAN", async () => {
    await visumPage.verifydebitcarddettailstab();
  })
  
   page.close();
 });

 //103
test('NXGS-TC-4447: TC_103_Visum_4_Validate after purchasing Visum policy, success page is generated', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })
  
  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await visumPage.clickOnDirectdebittButton();
  })

  await test.step("Verified the visiblity of Name of Account holder and IBAN", async () => {
    await visumPage.verifydebitcarddettailstab();
  })
  
   page.close();
 });


 //104
test('NXGS-TC-4448: TC_104_Visum_4_Validate when payment method not selected while purchasing Visum policy', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await visumPage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await visumPage.verifyCheckboxconseterrorText(firsttabData["visum-099"].errorconsentText);
    })
  
 
   page.close();
 });

 //105
test('NXGS-TC-4449: TC_105_Visum_4_Validate without mandatory consent check box checked, able to purchase Visum policy', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await visumPage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await visumPage.verifyCheckboxconseterrorText(firsttabData["visum-099"].errorconsentText);
    })
  
 
   page.close();
 });

 //106
test('NXGS-TC-4450: TC_106_Visum_4_Validate giving invalid iban number given for SEPA direct debit option', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await visumPage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await visumPage.expatcarefilldebitcarddetailstTab(firsttabData["visum-106"].iban);
    await page.locator("//div[@class='step-4']").click();
  })

  
     await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await visumPage.verifyIbanerrorText(firsttabData["visum-106"].errorconsentText);
    })
  
 
   page.close();
 });

 //107
test('NXGS-TC-4451: TC_107_Visum_4_Validate BIC field displays only when valid IBAN number given for SEPA direct debit option', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await visumPage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await visumPage.expatcarefilldebitcarddetailstTab(firsttabData["visum-107"].iban);
    await page.locator("//div[@class='step-4']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
  await visumPage.verifyBICFiledText(firsttabData["visum-107"].bicfieldText);
  })
  
   page.close();
 });

  //108
test('NXGS-TC-4452: TC_108_Visum_4_Validate when Visum policy is accepted then customer receives an email for policy acc', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await visumPage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await visumPage.expatcarefilldebitcarddetailstTab(firsttabData["visum-107"].iban);
    await page.locator("//div[@class='step-4']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
  await visumPage.verifyBICFiledText(firsttabData["visum-107"].bicfieldText);
  })
  
  
   page.close();
 });

  //109
test('NXGS-TC-4453: TC_109_Visum_4_Validate when Visum policy is rejected then customer receives an email for policy rejection', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await visumPage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await visumPage.expatcarefilldebitcarddetailstTab(firsttabData["visum-107"].iban);
    await page.locator("//div[@class='step-4']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
  await visumPage.verifyBICFiledText(firsttabData["visum-107"].bicfieldText);
  })
  
   page.close();
 });

//110
test('NXGS-TC-4454: TC_110_Visum_4_Validate when SEPA direct debit selected then Direct Payment” pay way reflects on contract', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await visumPage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await visumPage.expatcarefilldebitcarddetailstTab(firsttabData["visum-107"].iban);
    await page.locator("//div[@class='step-4']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
  await visumPage.verifyBICFiledText(firsttabData["visum-107"].bicfieldText);
  })
  
   page.close();
 });

 //111
test('NXGS-TC-4455: TC_111_Visum_4_Validate when credit card selected then credit card” pay way reflects on contract', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await visumPage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await visumPage.expatcarefilldebitcarddetailstTab(firsttabData["visum-107"].iban);
    await page.locator("//div[@class='step-4']").click();
  })

  await test.step("Vaerified  BIC filed' ", async () => {
  await visumPage.verifyBICFiledText(firsttabData["visum-107"].bicfieldText);
  })
  
   page.close();
 });

 //112
test('NXGS-TC-4456: TC_112_Visum_4_Validate when credit card option selected then in credit card pop-up scree, default credit card button', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await visumPage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await visumPage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await visumPage.clickOnApplyandPayButton();
  })

  //page.pause();
  await test.step("Varified  details on Credit Card Popop ", async () => {
    await visumPage.verifyCreditcardpopuptext(firsttabData["visum-112"].creditcardText);
    })
  
   page.close();
 });

  //113
test('NXGS-TC-4457: TC_113_Visum_4_Validate when credit card option selected then in credit card pop-up scree, default card holder name display', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await visumPage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await visumPage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await visumPage.clickOnApplyandPayButton();
  })

  //page.pause();
  await test.step("Vaerified  details on Credit Card Popop ", async () => {
    await visumPage.verifyCreditcardholderNametext(firsttabData["visum-113"].creditcardNameText);
    })
  
   page.close();
 });

 //114
test('NXGS-TC-4458: TC_114_Visum_4_Validate when credit card option selected then in credit card pop-up scree, default given email address display', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await visumPage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await visumPage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await visumPage.clickOnApplyandPayButton();
  })

  //page.pause();
  await test.step("Vaerified  details on Credit Card Popop ", async () => {
    await visumPage.verifyCreditcardholderEmailtext(firsttabData["visum-114"].creditcardNameText);
    })
  
   page.close();
 });

 //115
test('NXGS-TC-4459: TC_115_Visum_4_Validate when credit card option selected then in credit card pop-up scree, place holder text displays in Expiration date field', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await visumPage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await visumPage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await visumPage.clickOnApplyandPayButton();
  })

  //page.pause();
  await test.step("Vaerified  details on Credit Card Popop ", async () => {
    await visumPage.verifyCreditcardholderEmailtext(firsttabData["visum-114"].creditcardNameText);
    })
  
   page.close();
 });

 //116
test('NXGS-TC-4460: TC_116_Visum_4_Validate user able to give credit card number using copy button functionality', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await visumPage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await visumPage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await visumPage.clickOnApplyandPayButton();
  })

  //page.pause();
  await test.step("Vaerified  details on Credit Card Popop ", async () => {
    await visumPage.verifyCreditcardholderEmailtext(firsttabData["visum-114"].creditcardNameText);
    })
  
   page.close();
 });

 //117
test('NXGS-TC-4461: TC_117_Visum_4_Validate user able to copy credit card number from right click option', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await visumPage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await visumPage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await visumPage.clickOnApplyandPayButton();
  })

  //page.pause();
  await test.step("Vaerified  details on Credit Card Popop ", async () => {
    await visumPage.verifyCreditcardholderEmailtext(firsttabData["visum-114"].creditcardNameText);
    })
  
   page.close();
 });

 //118
test('NXGS-TC-4462: TC_118_Visum_4_Validate for security code field, able to verify security code as per given credit card d', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await visumPage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await visumPage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await visumPage.clickOnApplyandPayButton();
  })

  //page.pause();
  await test.step("Vaerified  details on Credit Card Popop ", async () => {
    await visumPage.verifyCreditcardholderEmailtext(firsttabData["visum-114"].creditcardNameText);
    })
  
   page.close();
 });

 //119
test('NXGS-TC-4463: TC_119_Visum_4_Validate when credit card option selected then in credit card pop-up screen, user able to create Visum Policy with valid credit ', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await visumPage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await visumPage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await visumPage.clickOnApplyandPayButton();
  })

  //page.pause();
  await test.step("Vaerified  details on Credit Card Popop ", async () => {
    await visumPage.verifyCreditcardholderEmailtext(firsttabData["visum-114"].creditcardNameText);
    })
  
   page.close();
 });


  //120
  test('NXGS-TC-4464: TC_120_Visum_4_Validate in credit card number field, only valid credit card number accepts ', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
   await test.step("Load the URL in Browser", async () => {
     await visumPage.gotoHomePage(firsttabData["visum-072"].url);
     
   })
 
   await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
     await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
   })
 
   await test.step("Click on First Tab Next Button ", async () => {
     await visumPage.clickOnFirstTabNextButton();
   })

   await test.step("Click on Second Tab  Button ", async () => {
     await visumPage.clickOnsecondtabNextButton();
   })
 
   await test.step("Select date and duration ", async () => {
    await visumPage.selectstartdateandthirtyonedaysduration();
  })
  
  await test.step("Click on Third Tab Next Button ", async () => {
    await visumPage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await visumPage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await visumPage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await visumPage.clickOnApplyandPayButton();
  })

  //page.pause();
  await test.step("Vaerified  details on Credit Card Popop ", async () => {
    await visumPage.verifyCreditcardholderEmailtext(firsttabData["visum-114"].creditcardNameText);
    })
  
   page.close();
 });

  //121
  test('NXGS-TC-4465: TC_121_Visum_4_Validate in credit card number field, invalid credit card number not accepts ', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Select checkboxes on  fourth tab", async () => {
      await visumPage.clickOnCheckboxesonfourthtab();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
  
    await test.step("Enter all details of credit card ", async () => {
      await visumPage.expatcareFilldetailsoncreditcardoneTab();
    })
  //page.pause();
    await test.step("Vaerified error message on Credit card form ", async () => {
      await visumPage.verifycreditcardnumbererrorText(firsttabData["visum-121"].errorText);
    })
    
     page.close();
   });

   //122
  test('NXGS-TC-4466: TC_122_Visum_4_Validate user is not able to create Visum Policy with invalid credit card number details ', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Select checkboxes on  fourth tab", async () => {
      await visumPage.clickOnCheckboxesonfourthtab();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
  
    await test.step("Enter all details of credit card ", async () => {
      await visumPage.expatcareFilldetailsoncreditcardoneTab();
    })
  //page.pause();
    await test.step("Vaerified error message on Credit card form ", async () => {
      await visumPage.verifycreditcardnumbererrorText(firsttabData["visum-121"].errorText);
    })
    
     page.close();
   });


   //123
  test('NXGS-TC-4467: TC_123_Visum_4_Validate user able to create Visum Policy with invalid value in month field of expiration date ', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Select checkboxes on  fourth tab", async () => {
      await visumPage.clickOnCheckboxesonfourthtab();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
  
    await test.step("Enter all details of credit card ", async () => {
      await visumPage.expatcareFilldetailsoncreditcardoneTab();
    })
  //page.pause();
    await test.step("Vaerified error message on Credit card form ", async () => {
      await visumPage.verifycreditcardnumbererrorText(firsttabData["visum-121"].errorText);
    })
    
     page.close();
   });

   //124
  test('NXGS-TC-4468: TC_124_Visum_4_Validate user able to create Visum Policy with invalid value in year field of expiration date ', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Select checkboxes on  fourth tab", async () => {
      await visumPage.clickOnCheckboxesonfourthtab();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
  
    await test.step("Enter all details of credit card ", async () => {
      await visumPage.expatcareFilldetailsoncreditcardoneTab();
    })
  //page.pause();
    await test.step("Vaerified error message on Credit card form ", async () => {
      await visumPage.verifycreditcardnumbererrorText(firsttabData["visum-121"].errorText);
    })
    
     page.close();
   });


   //125
  test('NXGS-TC-4469: TC_125_Visum_4_Validate user able to create Visum Policy with invalid value in security code field ', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Select checkboxes on  fourth tab", async () => {
      await visumPage.clickOnCheckboxesonfourthtab();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
  
    await test.step("Enter all details of credit card ", async () => {
      await visumPage.expatcareFilldetailsoncreditcardoneTab();
    })
  //page.pause();
    await test.step("Vaerified error message on Credit card form ", async () => {
      await visumPage.verifycreditcardnumbererrorText(firsttabData["visum-121"].errorText);
    })
    
     page.close();
   });

    //126
  test('NXGS-TC-4470: TC_126_Visum_4_Validate user able to create Visum Policy with invalid value in postal  code field ', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Select checkboxes on  fourth tab", async () => {
      await visumPage.clickOnCheckboxesonfourthtab();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
  
    await test.step("Enter all details of credit card ", async () => {
      await visumPage.expatcareFilldetailsoncreditcardoneTab();
    })
  //page.pause();
    await test.step("Vaerified error message on Credit card form ", async () => {
      await visumPage.verifycreditcardnumbererrorText(firsttabData["visum-121"].errorText);
    })
    
     page.close();
   });

   //127
  test('NXGS-TC-4471: TC_127_Visum_4_Validate user able to create Visum Policy with invalid email address field ', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Select checkboxes on  fourth tab", async () => {
      await visumPage.clickOnCheckboxesonfourthtab();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
  
    await test.step("Enter all details of credit card ", async () => {
      await visumPage.expatcareFilldetailsoncreditcardoneTab();
    })
  //page.pause();
    await test.step("Vaerified error message on Credit card form ", async () => {
      await visumPage.verifycreditcardnumbererrorText(firsttabData["visum-121"].errorText);
    })
    
     page.close();
   });

   //128
  test('NXGS-TC-4472: TC_128_Visum_4_Validate user able to create Visum Policy without any details in credit card pop-up screen', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Select checkboxes on  fourth tab", async () => {
      await visumPage.clickOnCheckboxesonfourthtab();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
  
    await test.step("Enter all details of credit card ", async () => {
      await visumPage.expatcareFilldetailsoncreditcardoneTab();
    })
  
    await test.step("Vaerified error message on Credit card form ", async () => {
      await visumPage.verifycreditcardnumbererrorText(firsttabData["visum-121"].errorText);
    })
    
     page.close();
   });

   //129
  test('NXGS-TC-4473: TC_129_Visum_4_Validate user able to create Visum Policy with valid credit card details after session expired', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Select checkboxes on  fourth tab", async () => {
      await visumPage.clickOnCheckboxesonfourthtab();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
  
    await test.step("Enter all details of credit card ", async () => {
      await visumPage.expatcareFilldetailsoncreditcardoneTab();
    })
  
    await test.step("Vaerified error message on Credit card form ", async () => {
      await visumPage.verifycreditcardnumbererrorText(firsttabData["visum-121"].errorText);
    })
     page.close();
   });

   //130
  test('NXGS-TC-4474: TC_130_Visum_4_Validate user able to create Visum Policy with valid credit card details within active session', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Select checkboxes on  fourth tab", async () => {
      await visumPage.clickOnCheckboxesonfourthtab();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
  
    await test.step("Enter all details of credit card ", async () => {
      await visumPage.expatcareFilldetailsoncreditcardoneTab();
    })
  
    await test.step("Vaerified error message on Credit card form ", async () => {
      await visumPage.verifycreditcardnumbererrorText(firsttabData["visum-121"].errorText);
    })
     page.close();
   });

   //131
  test('NXGS-TC-4475: TC_131_Visum_4_Validate user able to create Visum Policy when click on cancel button present in credit card pop-up screen', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Select checkboxes on  fourth tab", async () => {
      await visumPage.clickOnCheckboxesonfourthtab();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
  
    await test.step("Enter all details of credit card ", async () => {
      await visumPage.expatcareFilldetailsoncreditcardoneTab();
    })
  
    await test.step("Vaerified error message on Credit card form ", async () => {
      await visumPage.verifycreditcardnumbererrorText(firsttabData["visum-121"].errorText);
    })
     page.close();
   });

   //132
  test('NXGS-TC-4476:TC_132_Visum_4_Validate without payment details and consent details, able to purchase policy', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
    await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
      await visumPage.verifyCheckboxerrorText(firsttabData["visum-132"].errorconsentText);
      })
     page.close();
   });

   //133
  test('NXGS-TC-4477:  TC_133_Visum_4_Validate tab button functionality in every page', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
    await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
      await visumPage.verifyCheckboxerrorText(firsttabData["visum-132"].errorconsentText);
      })
     page.close();
   });

   //134
  test('NXGS-TC-4478:  TC_134_Visum_4_Validate using EN language option , all field label,content is correctly displaying in every tab', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
    await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
      await visumPage.verifyCheckboxerrorText(firsttabData["visum-132"].errorconsentText);
      })
     page.close();
   });

   //135
  test('NXGS-TC-4479:  TC_135_Visum_4_Validate using DE language option , all field label,content is correctly displaying in every tab', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
    await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
      await visumPage.verifyCheckboxerrorText(firsttabData["visum-132"].errorconsentText);
      })
     page.close();
   });

    //136
  test('NXGS-TC-4480:  TC_136_Visum_4_Validate menu option present at right top corner', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
    await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
      await visumPage.verifyCheckboxerrorText(firsttabData["visum-132"].errorconsentText);
      })
     page.close();
   });

   //137
  test('NXGS-TC-4481:  TC_137_Visum_4_Validate able to create Visum policy with DE language', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
    await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
      await visumPage.verifyCheckboxerrorText(firsttabData["visum-132"].errorconsentText);
      })
     page.close();
   });

   //138
  test('NXGS-TC-4482:  TC_138_Visum_4_Validate chinese language not displays from language menu', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
     await test.step("Load the URL in Browser", async () => {
       await visumPage.gotoHomePage(firsttabData["visum-072"].url);
       
     })
   
     await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
       await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
     })
   
     await test.step("Click on First Tab Next Button ", async () => {
       await visumPage.clickOnFirstTabNextButton();
     })
  
     await test.step("Click on Second Tab  Button ", async () => {
       await visumPage.clickOnsecondtabNextButton();
     })
   
     await test.step("Select date and duration ", async () => {
      await visumPage.selectstartdateandthirtyonedaysduration();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
      await visumPage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
      await visumPage.clickOnCreditcardradioButton();
    })
  
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await visumPage.clickOnApplyandPayButton();
    })
    await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
      await visumPage.verifyCheckboxerrorText(firsttabData["visum-132"].errorconsentText);
      })
     page.close();
   });


   //139
  test('NXGS-TC-4483:  TC_139_Visum_4_Validate BIC field displays only when valid SEPA IBAN number given for SEPA direct debit option', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
    await test.step("Load the URL in Browser", async () => {
      await visumPage.gotoHomePage(firsttabData["visum-072"].url);
      
    })
  
    await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
      await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
    })
  
    await test.step("Click on First Tab Next Button ", async () => {
      await visumPage.clickOnFirstTabNextButton();
    })
 
    await test.step("Click on Second Tab  Button ", async () => {
      await visumPage.clickOnsecondtabNextButton();
    })
  
    await test.step("Select date and duration ", async () => {
     await visumPage.selectstartdateandthirtyonedaysduration();
   })
   
   await test.step("Click on Third Tab Next Button ", async () => {
     await visumPage.clickOnThirdTabNextButton();
   })
 
   await test.step("Select checkboxes on  fourth tab", async () => {
     await visumPage.expatcareclickonibanchkboxTa();
   })
 
   await test.step("Enter ame of Account holder and IBAN ", async () => {
     await visumPage.expatcarefilldebitcarddetailstTab(firsttabData["visum-107"].iban);
     await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
   })
 
   await test.step("Vaerified  BIC filed' ", async () => {
   await visumPage.verifyBICFiledText(firsttabData["visum-107"].bicfieldText);
   })
   
     page.close();
   });

   //140
  test('NXGS-TC-4484:  TC_140_Visum_4_Validate giving invalid and not SEPA iban number given for SEPA direct debit option', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
    await test.step("Load the URL in Browser", async () => {
      await visumPage.gotoHomePage(firsttabData["visum-072"].url);
      
    })
  
    await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
      await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
    })
  
    await test.step("Click on First Tab Next Button ", async () => {
      await visumPage.clickOnFirstTabNextButton();
    })
 
    await test.step("Click on Second Tab  Button ", async () => {
      await visumPage.clickOnsecondtabNextButton();
    })
  
    await test.step("Select date and duration ", async () => {
     await visumPage.selectstartdateandthirtyonedaysduration();
   })
   
   await test.step("Click on Third Tab Next Button ", async () => {
     await visumPage.clickOnThirdTabNextButton();
   })
 
   await test.step("Select checkboxes on  fourth tab", async () => {
     await visumPage.expatcareclickonibanchkboxTa();
   })
 
   await test.step("Enter ame of Account holder and IBAN ", async () => {
     await visumPage.expatcarefilldebitcarddetailstTab(firsttabData["visum-106"].iban);
     await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
   })
 
    await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
     await visumPage.verifyIbanerrorText(firsttabData["visum-106"].errorconsentText);
     })
    
     page.close();
   });

    //141
  test('NXGS-TC-4485:  TC_141_Visum_4_Validate giving invalid and not SEPA iban number given for SEPA direct debit option for DE language select', async ({ page }) => {
    const visumPage: VisumPage = new VisumPage(page);
     
    await test.step("Load the URL in Browser", async () => {
      await visumPage.gotoHomePage(firsttabData["visum-072"].url);
      
    })
  
    await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
      await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
    })
  
    await test.step("Click on First Tab Next Button ", async () => {
      await visumPage.clickOnFirstTabNextButton();
    })
 
    await test.step("Click on Second Tab  Button ", async () => {
      await visumPage.clickOnsecondtabNextButton();
    })
  
    await test.step("Select date and duration ", async () => {
     await visumPage.selectstartdateandthirtyonedaysduration();
   })
   
   await test.step("Click on Third Tab Next Button ", async () => {
     await visumPage.clickOnThirdTabNextButton();
   })
 
   await test.step("Select checkboxes on  fourth tab", async () => {
    await visumPage.expatcareclickonibanchkboxTa();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await visumPage.expatcarefilldebitcarddetailstTab(firsttabData["visum-106"].iban);
    await page.locator("//h1[normalize-space()='Payment method and checkout']").click();
  })

    await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
     await visumPage.verifyIbanerrorText(firsttabData["visum-106"].errorconsentText);
     })
    
     page.close();
   });

//142
test('NXGS-TC-4486:  TC_142_Visum_4_Validate default policy holder name displays in  Account holder name field', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-072"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })

  await test.step("Select date and duration ", async () => {
   await visumPage.selectstartdateandthirtyonedaysduration();
 })
 
 await test.step("Click on Third Tab Next Button ", async () => {
   await visumPage.clickOnThirdTabNextButton();
 })

 await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
  await visumPage.clickOnDirectdebittButton();
})

await test.step("Varified Account holder name filed' ", async () => {
await visumPage.verifyAccountholdernameText(firsttabData["visum-142"].accountholdeText);
})
  
page.close();
 });

 //143
test('NXGS-TC-4487:  TC_143_Visum_4_Validate when SEPA direct debit  selected then payment information get saved in policy details', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-072"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })

  await test.step("Select date and duration ", async () => {
   await visumPage.selectstartdateandthirtyonedaysduration();
 })
 
 await test.step("Click on Third Tab Next Button ", async () => {
   await visumPage.clickOnThirdTabNextButton();
 })

 await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
  await visumPage.clickOnDirectdebittButton();
})

await test.step("Varified Account holder name filed' ", async () => {
await visumPage.verifyAccountholdernameText(firsttabData["visum-142"].accountholdeText);
})
  
page.close();
 });

 //144
test('NXGS-TC-4488:  TC_144_Visum_4_Validate when credit card selected then credit card” as payment information get saved in policy details', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-072"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })

  await test.step("Select date and duration ", async () => {
   await visumPage.selectstartdateandthirtyonedaysduration();
 })
 
 await test.step("Click on Third Tab Next Button ", async () => {
   await visumPage.clickOnThirdTabNextButton();
 })

 await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
  await visumPage.clickOnDirectdebittButton();
})

await test.step("Varified Account holder name filed' ", async () => {
await visumPage.verifyAccountholdernameText(firsttabData["visum-142"].accountholdeText);
})
  
page.close();
 });

 //145
test('NXGS-TC-4489:  TC_145_Visum_4_Validate initial payment is not deducted when Visum policy purchase by credit card', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-072"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })

  await test.step("Select date and duration ", async () => {
   await visumPage.selectstartdateandthirtyonedaysduration();
 })
 
 await test.step("Click on Third Tab Next Button ", async () => {
   await visumPage.clickOnThirdTabNextButton();
 })

 await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
  await visumPage.clickOnDirectdebittButton();
})

await test.step("Varified Account holder name filed' ", async () => {
await visumPage.verifyAccountholdernameText(firsttabData["visum-142"].accountholdeText);
})
  
page.close();
 });

//146
test('NXGS-TC-4490:  TC_146_Visum_4_Validate the email template and document sent in customer mail when Visum policy purchase', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-072"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })

  await test.step("Select date and duration ", async () => {
   await visumPage.selectstartdateandthirtyonedaysduration();
 })
 
 await test.step("Click on Third Tab Next Button ", async () => {
   await visumPage.clickOnThirdTabNextButton();
 })

 await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
  await visumPage.clickOnDirectdebittButton();
})

await test.step("Varified Account holder name filed' ", async () => {
await visumPage.verifyAccountholdernameText(firsttabData["visum-142"].accountholdeText);
})
  
page.close();
 });

 //147
test('NXGS-TC-4491:  TC_147_Manage Policies_Syncro_Validate as per given details in B2C, same details is shown in Sycnro portal', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await visumPage.enterpolicydetails(firsttabData["visum-147"].policyIdText);
  })

  await test.step("Verified policy details on Syncro portal ", async () => {
   // await reiscarePage.verifyPolicyholderdetailstext(firsttabData["visum-147"].policyholdernameText,firsttabData["visum-147"].countrytext);
    await visumPage.verifyPolicyholderdetailstext(firsttabData["visum-147"].policyholdernameText,firsttabData["visum-147"].citytext,firsttabData["visum-147"].policyholderemailtext,firsttabData["visum-147"].policyholderphonetext,firsttabData["visum-147"].effectivedate);
    })
  
page.close();
 });

 //148
test('NXGS-TC-4492:  TC_148_Syncro_Manage policies_Validate as per given details in B2C portal  same policy details shown in edit page', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await visumPage.enterpolicydetails(firsttabData["visum-147"].policyIdText);
  })

  await test.step("Verified policy details on Syncro portal ", async () => {
   // await reiscarePage.verifyPolicyholderdetailstext(firsttabData["visum-147"].policyholdernameText,firsttabData["visum-147"].countrytext);
    await visumPage.verifyPolicyholderdetailstext(firsttabData["visum-147"].policyholdernameText,firsttabData["visum-147"].citytext,firsttabData["visum-147"].policyholderemailtext,firsttabData["visum-147"].policyholderphonetext,firsttabData["visum-147"].effectivedate);
    })
  
page.close();
 });

 //149
test('NXGS-TC-4493:  TC_149_Syncro_Manage policies_Validate Visum policy with validated policy status', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await visumPage.enterpolicyiddetails(firsttabData["visum-149"].policyIdText);
  })
  await test.step("verify  policy status on Syncro portal ", async () => {
   
    await visumPage.verifyNewPolicystatusrejecttext(firsttabData["visum-149"].policystatusText);
  
})
  
page.close();
 });

 //150
test('NXGS-TC-4494:  TC_150_Syncro_Manage policies_Validate Visum policy status when policy  is  rejected', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await visumPage.enterpolicyiddetails(firsttabData["visum-150"].policyIdText);
  })
  await test.step("verify  policy status on Syncro portal ", async () => {
   
    await visumPage.verifyNewPolicystatusrejtext(firsttabData["visum-150"].policystatusText);
  
})
  
page.close();
 });

//151
test('NXGS-TC-4495:  TC_151_Syncro_Manage policies_Validate correct premium displays in syncro for Visum 31 days plan purchase from B2C', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await visumPage.enterpolicyiddetails(firsttabData["visum-150"].policyIdText);
  })
  await test.step("verify  policy status on Syncro portal ", async () => {
   
    await visumPage.verifyNewPolicystatusrejtext(firsttabData["visum-150"].policystatusText);
  
})
  
page.close();
 });

 //152
test('NXGS-TC-4496:  TC_152_Syncro_Manage policies_Validate correct premium displays in syncro for Visum 15 days plan purchase from B2C', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await visumPage.enterpolicyiddetails(firsttabData["visum-150"].policyIdText);
  })
  await test.step("verify  policy status on Syncro portal ", async () => {
   
    await visumPage.verifyNewPolicystatusrejtext(firsttabData["visum-150"].policystatusText);
  
})
  
page.close();
 });

 //153
test('NXGS-TC-4497:  TC_153_Syncro_Manage policies_Validate correct premium displays in syncro for Visum 85 days plan purchase from B2C', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await visumPage.enterpolicyiddetails(firsttabData["visum-150"].policyIdText);
  })
  await test.step("verify  policy status on Syncro portal ", async () => {
   
    await visumPage.verifyNewPolicystatusrejtext(firsttabData["visum-150"].policystatusText);
  
})
  
page.close();
 });


 //154
test('NXGS-TC-4498: TC_154_Visum_1_Validate creating Visum policy using bank transfer', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await visumPage.enterpolicyiddetails(firsttabData["visum-150"].policyIdText);
  })
  await test.step("verify  policy status on Syncro portal ", async () => {
   
    await visumPage.verifyNewPolicystatusrejtext(firsttabData["visum-150"].policystatusText);
  
})
  
page.close();
 });

 //Ashwini
 //155 For Data creation Visum Excl US CAN Excl Liab with CC Payment**Working**
  test.describe('b2csanityEU', ()=> {
  test('NXGS-TC-001: TC_155_Visum_4_Validate UI fileds on Thank you page', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-072"].url2);
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })

  await test.step("Select date and duration ", async () => {
   await visumPage.selectstartdateandfifteendaysduration();
 })
 
 await test.step("Click on Third Tab Next Button ", async () => {
   await visumPage.clickOnThirdTabNextButton();
 })
 
 await test.step("Click on  Credit card radio Button on fourth tab", async () => {
   await visumPage.clickOnCreditcardradioButton();
 })

 await test.step("Select checkboxes on  fourth tab", async () => {
   await visumPage.clickOnCheckboxesonfourthtab();
 })

 await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
   await visumPage.clickOnApplyandPayButton();
 })

 await test.step("Enter all details of credit card ", async () => {
   await visumPage.expatcareFilldetailsoncreditcardTab();
 })

 await test.step("Vaerified all details on Thank you page ", async () => {
   await visumPage.verifyThankyoupageText(firsttabData["visum-099"].thankyouText,firsttabData["visum-099"].requestText,firsttabData["visum-099"].questionText,firsttabData["visum-099"].infoText);
 })
  
page.close();
 });

 //156 For Data creation Visum Excl US CAN Excl Liab with DD Payment**Working**
test('NXGS-TC-002: TC_155_Visum_4_Validate UI fileds on Thank you page', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-072"].url2);
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(firsttabData["visum-072"].firstNameInput, firsttabData["visum-072"].lastNameInput,firsttabData["visum-072"].passportInput,firsttabData["visum-072"].mobileNumbercodeInput,firsttabData["visum-072"].mobileNumberInput,firsttabData["visum-072"].emailInput,firsttabData["visum-072"].streetNameInput,firsttabData["visum-072"].streetNumberInput,firsttabData["visum-072"].postalCodeInput,firsttabData["visum-072"].additionalAddressInput,firsttabData["visum-072"].cityInput,firsttabData["visum-072"].dayInput,firsttabData["visum-072"].monthInput,firsttabData["visum-072"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })

  await test.step("Select date and duration ", async () => {
   await visumPage.selectstartdateandthirtyonedaysduration();
   })
 
  await test.step("Click on Third Tab Next Button ", async () => {
   await visumPage.clickOnThirdTabNextButton();
   })
 
  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await visumPage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await visumPage.expatcarefilldebitcarddetailstTab(firsttabData["visum-099"].iban);
  })

  
  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await visumPage.expatcareclickonibanchkboxTab();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
   await visumPage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
   await visumPage.clickOnApplyandPayButton();
   })
   
  await test.step("Vaerified all details on Thank you page ", async () => {
   await visumPage.verifyThankyoupageText(firsttabData["visum-099"].thankyouText,firsttabData["visum-099"].requestText,firsttabData["visum-099"].questionText,firsttabData["visum-099"].infoText);
   })
  
page.close();
 });


//Anjali
// BT Payment method Data creation Visum Excl US CAN Excl Liab **Working**
test('NXGS-TC-005: TC_155_Visum_4_Validate UI fileds on Thank you page', async ({ page }) => {
  const visumPage: VisumPage = new VisumPage(page);
   
  await test.step("Load the URL in Browser", async () => {
    await visumPage.gotoHomePage(firsttabData["visum-072"].url1);
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await visumPage.expatcareFirstTab(
      firsttabData["visum-072"].firstNameInput, 
      firsttabData["visum-072"].lastNameInput,
      firsttabData["visum-072"].passportInput,
      firsttabData["visum-072"].mobileNumbercodeInput,
      firsttabData["visum-072"].mobileNumberInput,
      firsttabData["visum-072"].emailInput,
      firsttabData["visum-072"].streetNameInput,
      firsttabData["visum-072"].streetNumberInput,
      firsttabData["visum-072"].postalCodeInput,
      firsttabData["visum-072"].additionalAddressInput,
      firsttabData["visum-072"].cityInput,
      firsttabData["visum-072"].dayInput,
      firsttabData["visum-072"].monthInput,
      firsttabData["visum-072"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await visumPage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await visumPage.clickOnsecondtabNextButton();
  })

  await test.step("Select date and duration ", async () => {
   await visumPage. selectstartdateandnintytwoduration();
   })
 
  await test.step("Click on Third Tab Next Button ", async () => {
   await visumPage.clickOnThirdTabNextButton();
   })
 
  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await visumPage.clickOnBankTransferRadioButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await visumPage.clickOnBTPolicyDeclarationCheckboxes();
  })



  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
   await visumPage.clickOnApplyandPayButton();
   })

  // await test.step("Enter all details of credit card ", async () => {
  //  await visumPage.expatcareFilldetailsoncreditcardTab();
  // })

  await test.step("Vaerified all details on Thank you page ", async () => {
   await visumPage.verifyThankyoupageText(firsttabData["visum-099"].thankyouText,firsttabData["visum-099"].requestText,firsttabData["visum-099"].questionText,firsttabData["visum-099"].infoText);
   })
  
page.close();
 }); 


});













































 





































































































































































































