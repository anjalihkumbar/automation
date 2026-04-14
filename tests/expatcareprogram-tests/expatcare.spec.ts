import { expect, test } from '@playwright/test';
import { ExpatcarePage } from '../../page-objects/expatcare-pages/first-page.ts';
import { SyncroLoginPage } from '../../page-objects/login-page/login-page.ts';
const firsttabData = require(`../../testdata/${process.env.ENV || 'data_test_eu'}/expatcare.json`) as Record<string, any>;
const loginbData = require(`../../testdata/${process.env.ENV || 'data_test_eu'}/login.json`) as Record<string, any>;
export const syncData = require(`../../testdata/${process.env.ENV || 'data_test_eu'}/syncroeu.json`) as Record<string, any>;

import { SyncroEUPage } from '../../page-objects/syncroEU-pages/first-page.ts';
//import { syncData } from '../student-tests/student.spec.ts';
import '../../page-objects/utilities-pages/global-setup.ts';

//1

test('NXGS-TC-5327: TC_001_Expatcare_1_Validate UI fields displays when Expatcare policy selected', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
 await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-001"].url);
    
  })

   await test.step("Verified first tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-001"].expectedPageTitle);
  })

  await test.step("Verified text on first tab as 'Application for MAWISTA Expatcare'", async () => {
    await expatcarePage.verifyAplicationFirstTabText(firsttabData["expatcare-001"].applicationText);

  })

  await test.step("Verified  text on first tab as ' Policyholder's details '", async () => {
    await expatcarePage.verifyPolicbyholderdetailsFirstTaext(firsttabData["expatcare-001"].policyholderText);

  })
  
  await test.step("Verified text on first tab as ' Policyholder's address in Germany '", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-001"].policyholderaddressText);

  })

  await test.step("Verified text on first tab as '  Are you the insured person? '", async () => {
    await expatcarePage.verifyAreyouinsuredpersonFirstText(firsttabData["expatcare-001"].areyouinsuredpersonText);

  })

  await test.step("Verified text on first tab as '   Enter your date of birth and gender  '", async () => {
    await expatcarePage.verifyEnteryourdateofbirthFirstText(firsttabData["expatcare-001"].enterdateofbirthText);

  })

  await test.step("Verified Next button visible and clickable on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-001"].secondtabNextButton);

  })

page.close();
});

//2

test('NXGS-TC-5328: TC_002_Expatcare_1_Validate for Expatcare program, saving valid details in policy holder details, policy holder address in Germany, Are you insured details with insured person details', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-002"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-002"].firstNameInput, firsttabData["expatcare-002"].lastNameInput,firsttabData["expatcare-002"].passportInput,firsttabData["expatcare-002"].mobileNumbercodeInput,firsttabData["expatcare-002"].mobileNumberInput,firsttabData["expatcare-002"].emailInput,firsttabData["expatcare-002"].streetNameInput,firsttabData["expatcare-002"].streetNumberInput,firsttabData["expatcare-002"].postalCodeInput,firsttabData["expatcare-002"].additionalAddressInput,firsttabData["expatcare-002"].cityInput,firsttabData["expatcare-002"].dayInput,firsttabData["expatcare-002"].monthInput,firsttabData["expatcare-002"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-002"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-002"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-002"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-002"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-002"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-002"].secondtabPreviousButton);

  })
page.close();
});

//3
test('NXGS-TC-5329: TC_003_Expatcare_1_Validate in policy holder details field, able to give valid passport number in passport field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-003"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-003"].firstNameInput, firsttabData["expatcare-003"].lastNameInput,firsttabData["expatcare-003"].passportInput,firsttabData["expatcare-003"].mobileNumbercodeInput,firsttabData["expatcare-003"].mobileNumberInput,firsttabData["expatcare-003"].emailInput,firsttabData["expatcare-003"].streetNameInput,firsttabData["expatcare-003"].streetNumberInput,firsttabData["expatcare-003"].postalCodeInput,firsttabData["expatcare-003"].additionalAddressInput,firsttabData["expatcare-003"].cityInput,firsttabData["expatcare-003"].dayInput,firsttabData["expatcare-003"].monthInput,firsttabData["expatcare-003"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-003"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-003"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-003"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-003"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-003"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-003"].secondtabPreviousButton);

  })
page.close();
});

//4
test('NXGS-TC-5330: TC_004_Expatcare_1_Validate in policy holder details field, able to select any country name from home country field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-004"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender ", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-004"].firstNameInput, firsttabData["expatcare-004"].lastNameInput,firsttabData["expatcare-004"].passportInput,firsttabData["expatcare-004"].mobileNumbercodeInput,firsttabData["expatcare-004"].mobileNumberInput,firsttabData["expatcare-004"].emailInput,firsttabData["expatcare-004"].streetNameInput,firsttabData["expatcare-004"].streetNumberInput,firsttabData["expatcare-004"].postalCodeInput,firsttabData["expatcare-004"].additionalAddressInput,firsttabData["expatcare-004"].cityInput,firsttabData["expatcare-004"].dayInput,firsttabData["expatcare-004"].monthInput,firsttabData["expatcare-004"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-004"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-004"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-004"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-004"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-004"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-004"].secondtabPreviousButton);

  })
page.close();
});

//5
test('NXGS-TC-5331: TC_005_Expatcare_1_Validate in policy holder details field, able to give valid mobile number in mobile number field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-005"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-005"].firstNameInput, firsttabData["expatcare-005"].lastNameInput,firsttabData["expatcare-005"].passportInput,firsttabData["expatcare-005"].mobileNumbercodeInput,firsttabData["expatcare-005"].mobileNumberInput,firsttabData["expatcare-005"].emailInput,firsttabData["expatcare-005"].streetNameInput,firsttabData["expatcare-005"].streetNumberInput,firsttabData["expatcare-005"].postalCodeInput,firsttabData["expatcare-005"].additionalAddressInput,firsttabData["expatcare-005"].cityInput,firsttabData["expatcare-005"].dayInput,firsttabData["expatcare-005"].monthInput,firsttabData["expatcare-005"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-005"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-005"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-005"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-005"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-005"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-005"].secondtabPreviousButton);

  })
page.close();
});

//6
test('NXGS-TC-5332: TC_006_Expatcare_1_Validate in policy holder details field, able to give valid email in email field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-006"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-006"].firstNameInput, firsttabData["expatcare-006"].lastNameInput,firsttabData["expatcare-006"].passportInput,firsttabData["expatcare-006"].mobileNumbercodeInput,firsttabData["expatcare-006"].mobileNumberInput,firsttabData["expatcare-006"].emailInput,firsttabData["expatcare-006"].streetNameInput,firsttabData["expatcare-006"].streetNumberInput,firsttabData["expatcare-006"].postalCodeInput,firsttabData["expatcare-006"].additionalAddressInput,firsttabData["expatcare-006"].cityInput,firsttabData["expatcare-006"].dayInput,firsttabData["expatcare-006"].monthInput,firsttabData["expatcare-006"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-006"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-006"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-006"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-006"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-006"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-006"].secondtabPreviousButton);

  })
page.close();
});

//7
test('NXGS-TC-5333: TC_007_Expatcare_1_Validate saving with only mandatory fields details in policy holder details, policy holder address in Germany, Are you insured details with insured person details', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-007"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-007"].firstNameInput, firsttabData["expatcare-007"].lastNameInput,firsttabData["expatcare-007"].passportInput,firsttabData["expatcare-007"].mobileNumbercodeInput,firsttabData["expatcare-007"].mobileNumberInput,firsttabData["expatcare-007"].emailInput,firsttabData["expatcare-007"].streetNameInput,firsttabData["expatcare-007"].streetNumberInput,firsttabData["expatcare-007"].postalCodeInput,firsttabData["expatcare-007"].additionalAddressInput,firsttabData["expatcare-007"].cityInput,firsttabData["expatcare-007"].dayInput,firsttabData["expatcare-007"].monthInput,firsttabData["expatcare-007"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-007"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-007"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-007"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-007"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-007"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-007"].secondtabPreviousButton);

  })
page.close();
});

//8
test('NXGS-TC-5334: TC_008_Expatcare_1_Validate able to give valid postal code in "Policyholder address in Germany" section', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-008"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-008"].firstNameInput, firsttabData["expatcare-008"].lastNameInput,firsttabData["expatcare-008"].passportInput,firsttabData["expatcare-008"].mobileNumbercodeInput,firsttabData["expatcare-008"].mobileNumberInput,firsttabData["expatcare-008"].emailInput,firsttabData["expatcare-008"].streetNameInput,firsttabData["expatcare-008"].streetNumberInput,firsttabData["expatcare-008"].postalCodeInput,firsttabData["expatcare-008"].additionalAddressInput,firsttabData["expatcare-008"].cityInput,firsttabData["expatcare-008"].dayInput,firsttabData["expatcare-008"].monthInput,firsttabData["expatcare-008"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-008"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-008"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-008"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-008"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-008"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-008"].secondtabPreviousButton);

  })
page.close();
});

//9
test('NXGS-TC-5335: TC_009_Expatcare_1_Validate as per germany selected, postal code is validated in "policy address in Germany" section', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-009"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-009"].firstNameInput, firsttabData["expatcare-009"].lastNameInput,firsttabData["expatcare-009"].passportInput,firsttabData["expatcare-009"].mobileNumbercodeInput,firsttabData["expatcare-009"].mobileNumberInput,firsttabData["expatcare-009"].emailInput,firsttabData["expatcare-009"].streetNameInput,firsttabData["expatcare-009"].streetNumberInput,firsttabData["expatcare-009"].postalCodeInput,firsttabData["expatcare-009"].additionalAddressInput,firsttabData["expatcare-009"].cityInput,firsttabData["expatcare-009"].dayInput,firsttabData["expatcare-009"].monthInput,firsttabData["expatcare-009"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-009"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-009"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-009"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-009"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-009"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-009"].secondtabPreviousButton);

  })
page.close();
});

//10
test('NXGS-TC-5336: TC_010_Expatcare_1_Validate in policy holder details field, user is able to give alphabetic character text in first name field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-010"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-010"].firstNameInput, firsttabData["expatcare-010"].lastNameInput,firsttabData["expatcare-010"].passportInput,firsttabData["expatcare-010"].mobileNumbercodeInput,firsttabData["expatcare-010"].mobileNumberInput,firsttabData["expatcare-010"].emailInput,firsttabData["expatcare-010"].streetNameInput,firsttabData["expatcare-010"].streetNumberInput,firsttabData["expatcare-010"].postalCodeInput,firsttabData["expatcare-010"].additionalAddressInput,firsttabData["expatcare-010"].cityInput,firsttabData["expatcare-010"].dayInput,firsttabData["expatcare-010"].monthInput,firsttabData["expatcare-010"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-010"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-010"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-010"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-010"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-010"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-010"].secondtabPreviousButton);

  })
page.close();
});

//12
test('NXGS-TC-5337: TC_012_Expatcare_1_Validate in insured person details field, user is able to give alphabetic character text in first name field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-010"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-010"].firstNameInput, firsttabData["expatcare-010"].lastNameInput,firsttabData["expatcare-010"].passportInput,firsttabData["expatcare-010"].mobileNumbercodeInput,firsttabData["expatcare-010"].mobileNumberInput,firsttabData["expatcare-010"].emailInput,firsttabData["expatcare-010"].streetNameInput,firsttabData["expatcare-010"].streetNumberInput,firsttabData["expatcare-010"].postalCodeInput,firsttabData["expatcare-010"].additionalAddressInput,firsttabData["expatcare-010"].cityInput,firsttabData["expatcare-010"].dayInput,firsttabData["expatcare-010"].monthInput,firsttabData["expatcare-010"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await expatcarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["expatcare-010"].firstNameInput, firsttabData["expatcare-010"].lastNameInput,firsttabData["expatcare-010"].passportInput,firsttabData["expatcare-010"].mobileNumbercodeInput,firsttabData["expatcare-010"].mobileNumberInput,firsttabData["expatcare-010"].emailInput,firsttabData["expatcare-010"].streetNameInput,firsttabData["expatcare-010"].streetNumberInput,firsttabData["expatcare-010"].postalCodeInput,firsttabData["expatcare-010"].additionalAddressInput,firsttabData["expatcare-010"].cityInput,firsttabData["expatcare-010"].dayInput,firsttabData["expatcare-010"].monthInput,firsttabData["expatcare-010"].yearInput);
  })


  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-010"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-010"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-010"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-010"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-010"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-010"].secondtabPreviousButton);

  })
page.close();
});

//13
test('NXGS-TC-5338: TC_013_Expatcare_1_Validate in insured person details field, able to give alphabetic text in last name field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-013"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-013"].firstNameInput, firsttabData["expatcare-013"].lastNameInput,firsttabData["expatcare-013"].passportInput,firsttabData["expatcare-013"].mobileNumbercodeInput,firsttabData["expatcare-013"].mobileNumberInput,firsttabData["expatcare-013"].emailInput,firsttabData["expatcare-013"].streetNameInput,firsttabData["expatcare-013"].streetNumberInput,firsttabData["expatcare-013"].postalCodeInput,firsttabData["expatcare-013"].additionalAddressInput,firsttabData["expatcare-013"].cityInput,firsttabData["expatcare-013"].dayInput,firsttabData["expatcare-013"].monthInput,firsttabData["expatcare-013"].yearInput);
  })

  await test.step("Enter insured person details  ", async () => {
    await expatcarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["expatcare-013"].firstNameInput, firsttabData["expatcare-013"].lastNameInput,firsttabData["expatcare-013"].passportInput,firsttabData["expatcare-013"].mobileNumbercodeInput,firsttabData["expatcare-013"].mobileNumberInput,firsttabData["expatcare-013"].emailInput,firsttabData["expatcare-013"].streetNameInput,firsttabData["expatcare-013"].streetNumberInput,firsttabData["expatcare-013"].postalCodeInput,firsttabData["expatcare-013"].additionalAddressInput,firsttabData["expatcare-013"].cityInput,firsttabData["expatcare-013"].dayInput,firsttabData["expatcare-013"].monthInput,firsttabData["expatcare-010"].yearInput);
  })


  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-013"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-013"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-013"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-013"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-013"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-013"].secondtabPreviousButton);

  })
page.close();
});

//14
test('NXGS-TC-5339: TC_014_Expatcare_1_Validate in policy holder details field, user is able to give 3 minimum length of alphabetic character text in first name field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-014"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-014"].firstNameInput, firsttabData["expatcare-014"].lastNameInput,firsttabData["expatcare-014"].passportInput,firsttabData["expatcare-014"].mobileNumbercodeInput,firsttabData["expatcare-014"].mobileNumberInput,firsttabData["expatcare-014"].emailInput,firsttabData["expatcare-014"].streetNameInput,firsttabData["expatcare-014"].streetNumberInput,firsttabData["expatcare-014"].postalCodeInput,firsttabData["expatcare-014"].additionalAddressInput,firsttabData["expatcare-014"].cityInput,firsttabData["expatcare-014"].dayInput,firsttabData["expatcare-014"].monthInput,firsttabData["expatcare-014"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-014"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-014"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-014"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-014"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-014"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-014"].secondtabPreviousButton);

  })
page.close();
});

//16
test('NXGS-TC-5340: TC_016_Expatcare_1_Validate in insured person details field, user is able to give minimum 3 alphabetic character text in first name field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-016"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-016"].firstNameInput, firsttabData["expatcare-016"].lastNameInput,firsttabData["expatcare-016"].passportInput,firsttabData["expatcare-016"].mobileNumbercodeInput,firsttabData["expatcare-016"].mobileNumberInput,firsttabData["expatcare-016"].emailInput,firsttabData["expatcare-016"].streetNameInput,firsttabData["expatcare-016"].streetNumberInput,firsttabData["expatcare-016"].postalCodeInput,firsttabData["expatcare-016"].additionalAddressInput,firsttabData["expatcare-016"].cityInput,firsttabData["expatcare-016"].dayInput,firsttabData["expatcare-016"].monthInput,firsttabData["expatcare-016"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await expatcarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["expatcare-016"].firstNameInput, firsttabData["expatcare-016"].lastNameInput,firsttabData["expatcare-016"].passportInput,firsttabData["expatcare-016"].mobileNumbercodeInput,firsttabData["expatcare-016"].mobileNumberInput,firsttabData["expatcare-016"].emailInput,firsttabData["expatcare-016"].streetNameInput,firsttabData["expatcare-016"].streetNumberInput,firsttabData["expatcare-016"].postalCodeInput,firsttabData["expatcare-016"].additionalAddressInput,firsttabData["expatcare-016"].cityInput,firsttabData["expatcare-016"].dayInput,firsttabData["expatcare-016"].monthInput,firsttabData["expatcare-016"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-016"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-016"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-016"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-016"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-016"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-016"].secondtabPreviousButton);

  })
page.close();
});

//17
test('NXGS-TC-5341: TC_017_Expatcare_1_Validate in insured person details field, able to give minimum 3 alphabetic text in last name field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-017"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-017"].firstNameInput, firsttabData["expatcare-017"].lastNameInput,firsttabData["expatcare-017"].passportInput,firsttabData["expatcare-017"].mobileNumbercodeInput,firsttabData["expatcare-017"].mobileNumberInput,firsttabData["expatcare-017"].emailInput,firsttabData["expatcare-017"].streetNameInput,firsttabData["expatcare-017"].streetNumberInput,firsttabData["expatcare-017"].postalCodeInput,firsttabData["expatcare-017"].additionalAddressInput,firsttabData["expatcare-017"].cityInput,firsttabData["expatcare-017"].dayInput,firsttabData["expatcare-017"].monthInput,firsttabData["expatcare-017"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await expatcarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["expatcare-017"].firstNameInput, firsttabData["expatcare-017"].lastNameInput,firsttabData["expatcare-017"].passportInput,firsttabData["expatcare-017"].mobileNumbercodeInput,firsttabData["expatcare-017"].mobileNumberInput,firsttabData["expatcare-017"].emailInput,firsttabData["expatcare-017"].streetNameInput,firsttabData["expatcare-017"].streetNumberInput,firsttabData["expatcare-017"].postalCodeInput,firsttabData["expatcare-017"].additionalAddressInput,firsttabData["expatcare-017"].cityInput,firsttabData["expatcare-017"].dayInput,firsttabData["expatcare-017"].monthInput,firsttabData["expatcare-017"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-017"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-017"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-017"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-017"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-017"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-017"].secondtabPreviousButton);

  })
page.close();
});

//18
test('NXGS-TC-5342: TC_018_Expatcare_1_Validate in policy holder details field, user is able to give 60 maximum length of alphabetic character text in first name field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-018"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-018"].firstNameInput, firsttabData["expatcare-018"].lastNameInput,firsttabData["expatcare-018"].passportInput,firsttabData["expatcare-018"].mobileNumbercodeInput,firsttabData["expatcare-018"].mobileNumberInput,firsttabData["expatcare-018"].emailInput,firsttabData["expatcare-018"].streetNameInput,firsttabData["expatcare-018"].streetNumberInput,firsttabData["expatcare-018"].postalCodeInput,firsttabData["expatcare-018"].additionalAddressInput,firsttabData["expatcare-018"].cityInput,firsttabData["expatcare-018"].dayInput,firsttabData["expatcare-018"].monthInput,firsttabData["expatcare-018"].yearInput);
  })


  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await expatcarePage.verifyFirstnameonfirsttabfillederrorText(firsttabData["expatcare-038"].firstnameErrormsg);
  })
page.close();
});

//19
test('NXGS-TC-5343: TC_019_Expatcare_1_Validate in policy holder details field, able to give 60 maximum length of alphabetic character text in last name field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-019"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-019"].firstNameInput, firsttabData["expatcare-019"].lastNameInput,firsttabData["expatcare-019"].passportInput,firsttabData["expatcare-019"].mobileNumbercodeInput,firsttabData["expatcare-019"].mobileNumberInput,firsttabData["expatcare-019"].emailInput,firsttabData["expatcare-019"].streetNameInput,firsttabData["expatcare-019"].streetNumberInput,firsttabData["expatcare-019"].postalCodeInput,firsttabData["expatcare-019"].additionalAddressInput,firsttabData["expatcare-019"].cityInput,firsttabData["expatcare-019"].dayInput,firsttabData["expatcare-019"].monthInput,firsttabData["expatcare-019"].yearInput);
  })


  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await expatcarePage.verifylastnameonfirsttabfillederrorText(firsttabData["expatcare-039"].lastnameErrormsg);
  })  
page.close();
});

//20
test('NXGS-TC-5344: TC_020_Expatcare_1_Validate in insured person details field, user is able to give maximum 60 alphabetic character text in first name field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-020"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-020"].firstNameInput, firsttabData["expatcare-020"].lastNameInput,firsttabData["expatcare-020"].passportInput,firsttabData["expatcare-020"].mobileNumbercodeInput,firsttabData["expatcare-020"].mobileNumberInput,firsttabData["expatcare-020"].emailInput,firsttabData["expatcare-020"].streetNameInput,firsttabData["expatcare-020"].streetNumberInput,firsttabData["expatcare-020"].postalCodeInput,firsttabData["expatcare-020"].additionalAddressInput,firsttabData["expatcare-020"].cityInput,firsttabData["expatcare-020"].dayInput,firsttabData["expatcare-020"].monthInput,firsttabData["expatcare-020"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await expatcarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["expatcare-020"].firstNameInput, firsttabData["expatcare-020"].lastNameInput,firsttabData["expatcare-020"].passportInput,firsttabData["expatcare-020"].mobileNumbercodeInput,firsttabData["expatcare-020"].mobileNumberInput,firsttabData["expatcare-020"].emailInput,firsttabData["expatcare-020"].streetNameInput,firsttabData["expatcare-020"].streetNumberInput,firsttabData["expatcare-020"].postalCodeInput,firsttabData["expatcare-020"].additionalAddressInput,firsttabData["expatcare-020"].cityInput,firsttabData["expatcare-020"].dayInput,firsttabData["expatcare-020"].monthInput,firsttabData["expatcare-020"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await expatcarePage.verifyFirstnameonfirsttabfillederrorText(firsttabData["expatcare-038"].firstnameErrormsg);
  })
page.close();
});

//21
test('NXGS-TC-5345: TC_021_Expatcare_1_Validate in insured person details field, able to give maximum 60 alphabetic text in last name field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-021"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-021"].firstNameInput, firsttabData["expatcare-021"].lastNameInput,firsttabData["expatcare-021"].passportInput,firsttabData["expatcare-021"].mobileNumbercodeInput,firsttabData["expatcare-021"].mobileNumberInput,firsttabData["expatcare-021"].emailInput,firsttabData["expatcare-021"].streetNameInput,firsttabData["expatcare-021"].streetNumberInput,firsttabData["expatcare-021"].postalCodeInput,firsttabData["expatcare-021"].additionalAddressInput,firsttabData["expatcare-021"].cityInput,firsttabData["expatcare-021"].dayInput,firsttabData["expatcare-021"].monthInput,firsttabData["expatcare-021"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await expatcarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["expatcare-021"].firstNameInput, firsttabData["expatcare-021"].lastNameInput,firsttabData["expatcare-021"].passportInput,firsttabData["expatcare-021"].mobileNumbercodeInput,firsttabData["expatcare-021"].mobileNumberInput,firsttabData["expatcare-021"].emailInput,firsttabData["expatcare-021"].streetNameInput,firsttabData["expatcare-021"].streetNumberInput,firsttabData["expatcare-021"].postalCodeInput,firsttabData["expatcare-021"].additionalAddressInput,firsttabData["expatcare-021"].cityInput,firsttabData["expatcare-021"].dayInput,firsttabData["expatcare-021"].monthInput,firsttabData["expatcare-021"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await expatcarePage.verifylastnameonfirsttabfillederrorText(firsttabData["expatcare-039"].lastnameErrormsg);
  })  
page.close();
});

//22
test('NXGS-TC-5346: TC_022_Expatcare_1_Validate saving valid details in policy holder details', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-022"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-022"].firstNameInput, firsttabData["expatcare-022"].lastNameInput,firsttabData["expatcare-022"].passportInput,firsttabData["expatcare-022"].mobileNumbercodeInput,firsttabData["expatcare-022"].mobileNumberInput,firsttabData["expatcare-022"].emailInput,firsttabData["expatcare-022"].streetNameInput,firsttabData["expatcare-022"].streetNumberInput,firsttabData["expatcare-022"].postalCodeInput,firsttabData["expatcare-022"].additionalAddressInput,firsttabData["expatcare-022"].cityInput,firsttabData["expatcare-022"].dayInput,firsttabData["expatcare-022"].monthInput,firsttabData["expatcare-022"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-022"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-022"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-022"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-022"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-022"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-022"].secondtabPreviousButton);

  })
page.close();
});

//23
test('NXGS-TC-5347: TC_023_Expatcare_1_Validate saving valid details in policy holder address in Germany section', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-023"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-023"].firstNameInput, firsttabData["expatcare-023"].lastNameInput,firsttabData["expatcare-023"].passportInput,firsttabData["expatcare-023"].mobileNumbercodeInput,firsttabData["expatcare-023"].mobileNumberInput,firsttabData["expatcare-023"].emailInput,firsttabData["expatcare-023"].streetNameInput,firsttabData["expatcare-023"].streetNumberInput,firsttabData["expatcare-023"].postalCodeInput,firsttabData["expatcare-023"].additionalAddressInput,firsttabData["expatcare-023"].cityInput,firsttabData["expatcare-023"].dayInput,firsttabData["expatcare-023"].monthInput,firsttabData["expatcare-023"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-023"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-023"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-023"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-023"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-023"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-023"].secondtabPreviousButton);

  })
page.close();
});

//24
test('NXGS-TC-5348: TC_024_Expatcare_1_Validate saving details with insured person details', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-024"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-024"].firstNameInput, firsttabData["expatcare-024"].lastNameInput,firsttabData["expatcare-024"].passportInput,firsttabData["expatcare-024"].mobileNumbercodeInput,firsttabData["expatcare-024"].mobileNumberInput,firsttabData["expatcare-024"].emailInput,firsttabData["expatcare-024"].streetNameInput,firsttabData["expatcare-024"].streetNumberInput,firsttabData["expatcare-024"].postalCodeInput,firsttabData["expatcare-024"].additionalAddressInput,firsttabData["expatcare-024"].cityInput,firsttabData["expatcare-024"].dayInput,firsttabData["expatcare-024"].monthInput,firsttabData["expatcare-024"].yearInput);
  })

  await test.step("Enter the insured person details", async () => {
    await expatcarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["expatcare-024"].firstNameInput, firsttabData["expatcare-024"].lastNameInput,firsttabData["expatcare-024"].passportInput,firsttabData["expatcare-024"].mobileNumbercodeInput,firsttabData["expatcare-024"].mobileNumberInput,firsttabData["expatcare-024"].emailInput,firsttabData["expatcare-024"].streetNameInput,firsttabData["expatcare-024"].streetNumberInput,firsttabData["expatcare-024"].postalCodeInput,firsttabData["expatcare-024"].additionalAddressInput,firsttabData["expatcare-024"].cityInput,firsttabData["expatcare-024"].dayInput,firsttabData["expatcare-024"].monthInput,firsttabData["expatcare-024"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-024"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-024"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-024"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-024"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-024"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-024"].secondtabPreviousButton);

  })
page.close();
});

//25
test('NXGS-TC-5349: TC_025_Expatcare_1_Validate able to give any alphanumeric character length text in street name field of "Policyholder address in Germany" section', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-025"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-025"].firstNameInput, firsttabData["expatcare-025"].lastNameInput,firsttabData["expatcare-025"].passportInput,firsttabData["expatcare-025"].mobileNumbercodeInput,firsttabData["expatcare-025"].mobileNumberInput,firsttabData["expatcare-025"].emailInput,firsttabData["expatcare-025"].streetNameInput,firsttabData["expatcare-025"].streetNumberInput,firsttabData["expatcare-025"].postalCodeInput,firsttabData["expatcare-025"].additionalAddressInput,firsttabData["expatcare-025"].cityInput,firsttabData["expatcare-025"].dayInput,firsttabData["expatcare-025"].monthInput,firsttabData["expatcare-025"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text under first name'", async () => {
    await expatcarePage.verifystreetnameerrortextFirstTabText(firsttabData["expatcare-025"].streetnameerrortext);
  })

  
page.close();
});

//26
test('NXGS-TC-5350: TC_026_Expatcare_1_Validate able to give any alphanumeric character length text in street number field of "Policyholder address in Germany" section', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-026"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-026"].firstNameInput, firsttabData["expatcare-026"].lastNameInput,firsttabData["expatcare-026"].passportInput,firsttabData["expatcare-026"].mobileNumbercodeInput,firsttabData["expatcare-026"].mobileNumberInput,firsttabData["expatcare-026"].emailInput,firsttabData["expatcare-026"].streetNameInput,firsttabData["expatcare-026"].streetNumberInput,firsttabData["expatcare-026"].postalCodeInput,firsttabData["expatcare-026"].additionalAddressInput,firsttabData["expatcare-026"].cityInput,firsttabData["expatcare-026"].dayInput,firsttabData["expatcare-026"].monthInput,firsttabData["expatcare-026"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-026"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-026"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-026"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-026"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-026"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-026"].secondtabPreviousButton);

  })
page.close();
});

//27
test('NXGS-TC-5351: TC_027_Expatcare_1_Validate able to give any city name in city text field of policy holder address in Germany section', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-027"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-027"].firstNameInput, firsttabData["expatcare-027"].lastNameInput,firsttabData["expatcare-027"].passportInput,firsttabData["expatcare-027"].mobileNumbercodeInput,firsttabData["expatcare-027"].mobileNumberInput,firsttabData["expatcare-027"].emailInput,firsttabData["expatcare-027"].streetNameInput,firsttabData["expatcare-027"].streetNumberInput,firsttabData["expatcare-027"].postalCodeInput,firsttabData["expatcare-027"].additionalAddressInput,firsttabData["expatcare-027"].cityInput,firsttabData["expatcare-027"].dayInput,firsttabData["expatcare-027"].monthInput,firsttabData["expatcare-027"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-027"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-027"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-027"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-027"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-027"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-027"].secondtabPreviousButton);

  })
page.close();
});

//28
test('NXGS-TC-5352: TC_028_Expatcare_1_Validate Germany displays in country field of Policy holder address in Germany section', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-028"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-028"].firstNameInput, firsttabData["expatcare-028"].lastNameInput,firsttabData["expatcare-028"].passportInput,firsttabData["expatcare-028"].mobileNumbercodeInput,firsttabData["expatcare-028"].mobileNumberInput,firsttabData["expatcare-028"].emailInput,firsttabData["expatcare-028"].streetNameInput,firsttabData["expatcare-028"].streetNumberInput,firsttabData["expatcare-028"].postalCodeInput,firsttabData["expatcare-028"].additionalAddressInput,firsttabData["expatcare-028"].cityInput,firsttabData["expatcare-028"].dayInput,firsttabData["expatcare-028"].monthInput,firsttabData["expatcare-028"].yearInput);
  })
 
  await test.step("Verified  Germany displays in country field of Policy holder address in Germany section'", async () => {
    await expatcarePage.verifyGermanyText(firsttabData["expatcare-028"].germanyText);

  })

  
page.close();
});

//29
test('NXGS-TC-5353: TC_029_Expatcare_1_Validate able to give any date in date of birth field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-029"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-029"].firstNameInput, firsttabData["expatcare-029"].lastNameInput,firsttabData["expatcare-029"].passportInput,firsttabData["expatcare-029"].mobileNumbercodeInput,firsttabData["expatcare-029"].mobileNumberInput,firsttabData["expatcare-029"].emailInput,firsttabData["expatcare-029"].streetNameInput,firsttabData["expatcare-029"].streetNumberInput,firsttabData["expatcare-029"].postalCodeInput,firsttabData["expatcare-029"].additionalAddressInput,firsttabData["expatcare-029"].cityInput,firsttabData["expatcare-029"].dayInput,firsttabData["expatcare-029"].monthInput,firsttabData["expatcare-029"].yearInput);
  })
 
  
  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-029"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-029"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-029"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-029"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-029"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-029"].secondtabPreviousButton);

  })
page.close();
});


//30
test('NXGS-TC-5354: TC_030_Expatcare_1_Validate able to create Expatcare policy with policy holder details with insured member details', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-030"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-030"].firstNameInput, firsttabData["expatcare-030"].lastNameInput,firsttabData["expatcare-030"].passportInput,firsttabData["expatcare-030"].mobileNumbercodeInput,firsttabData["expatcare-030"].mobileNumberInput,firsttabData["expatcare-030"].emailInput,firsttabData["expatcare-030"].streetNameInput,firsttabData["expatcare-030"].streetNumberInput,firsttabData["expatcare-030"].postalCodeInput,firsttabData["expatcare-030"].additionalAddressInput,firsttabData["expatcare-030"].cityInput,firsttabData["expatcare-030"].dayInput,firsttabData["expatcare-030"].monthInput,firsttabData["expatcare-030"].yearInput);
  })
 
  await test.step("Enter the insured person details", async () => {
    await expatcarePage.expatcareinsuredpersonsdetailsFirstTab(firsttabData["expatcare-030"].firstNameInput, firsttabData["expatcare-030"].lastNameInput,firsttabData["expatcare-030"].passportInput,firsttabData["expatcare-030"].mobileNumbercodeInput,firsttabData["expatcare-030"].mobileNumberInput,firsttabData["expatcare-030"].emailInput,firsttabData["expatcare-030"].streetNameInput,firsttabData["expatcare-030"].streetNumberInput,firsttabData["expatcare-030"].postalCodeInput,firsttabData["expatcare-030"].additionalAddressInput,firsttabData["expatcare-030"].cityInput,firsttabData["expatcare-030"].dayInput,firsttabData["expatcare-030"].monthInput,firsttabData["expatcare-030"].yearInput);
  })
  
  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-030"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-030"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-030"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-030"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-030"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-030"].secondtabPreviousButton);

  })
page.close();
});

//31
test('NXGS-TC-5355: TC_031_Expatcare_1_Validate in policy holder details field, user is not able to give alphanumeric text in first name field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-031"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-031"].firstNameInput, firsttabData["expatcare-031"].lastNameInput,firsttabData["expatcare-031"].passportInput,firsttabData["expatcare-031"].mobileNumbercodeInput,firsttabData["expatcare-031"].mobileNumberInput,firsttabData["expatcare-031"].emailInput,firsttabData["expatcare-031"].streetNameInput,firsttabData["expatcare-031"].streetNumberInput,firsttabData["expatcare-031"].postalCodeInput,firsttabData["expatcare-031"].additionalAddressInput,firsttabData["expatcare-031"].cityInput,firsttabData["expatcare-031"].dayInput,firsttabData["expatcare-031"].monthInput,firsttabData["expatcare-031"].yearInput);
  })
 
  
  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-031"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-031"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-031"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-031"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-031"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-031"].secondtabPreviousButton);

  })
page.close();
});


//32
test('NXGS-TC-5356: TC_032_Expatcare_1_Validate in policy holder details field, user is not able to give alphanumeric text in last name field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-032"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-032"].firstNameInput, firsttabData["expatcare-032"].lastNameInput,firsttabData["expatcare-032"].passportInput,firsttabData["expatcare-032"].mobileNumbercodeInput,firsttabData["expatcare-032"].mobileNumberInput,firsttabData["expatcare-032"].emailInput,firsttabData["expatcare-032"].streetNameInput,firsttabData["expatcare-032"].streetNumberInput,firsttabData["expatcare-032"].postalCodeInput,firsttabData["expatcare-032"].additionalAddressInput,firsttabData["expatcare-032"].cityInput,firsttabData["expatcare-032"].dayInput,firsttabData["expatcare-032"].monthInput,firsttabData["expatcare-032"].yearInput);
  })
 
  
  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await expatcarePage.verifylastnameonfirsttabfillederrorText(firsttabData["expatcare-039"].lastnameErrormsg);
  })   
page.close();
});

//33
test('NXGS-TC-5357: TC_033_Expatcare_1_Validate blank in  policy holder details, policy holder address in Germany, Are you insured details with insured person details, click on next button', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-033"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-033"].firstNameInput, firsttabData["expatcare-033"].lastNameInput,firsttabData["expatcare-033"].passportInput,firsttabData["expatcare-033"].mobileNumbercodeInput,firsttabData["expatcare-033"].mobileNumberInput,firsttabData["expatcare-033"].emailInput,firsttabData["expatcare-033"].streetNameInput,firsttabData["expatcare-033"].streetNumberInput,firsttabData["expatcare-033"].postalCodeInput,firsttabData["expatcare-033"].additionalAddressInput,firsttabData["expatcare-033"].cityInput,firsttabData["expatcare-033"].dayInput,firsttabData["expatcare-033"].monthInput,firsttabData["expatcare-033"].yearInput);
  })
 
  
  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified error text as 'Invalid or missing information,please check your information and try again'", async () => {
    await expatcarePage.verifyNoanydetailsfillederrorText(firsttabData["expatcare-033"].errormsg);
  })

page.close();
});

//34
test('NXGS-TC-5358:  TC_034_Expatcare_1_Validate giving blank spaces in policy holder details, policy holder address in germany, insured person details, date of birth section', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-034"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-034"].firstNameInput, firsttabData["expatcare-034"].lastNameInput,firsttabData["expatcare-034"].passportInput,firsttabData["expatcare-034"].mobileNumbercodeInput,firsttabData["expatcare-034"].mobileNumberInput,firsttabData["expatcare-034"].emailInput,firsttabData["expatcare-034"].streetNameInput,firsttabData["expatcare-034"].streetNumberInput,firsttabData["expatcare-034"].postalCodeInput,firsttabData["expatcare-034"].additionalAddressInput,firsttabData["expatcare-034"].cityInput,firsttabData["expatcare-034"].dayInput,firsttabData["expatcare-034"].monthInput,firsttabData["expatcare-034"].yearInput);
  })
 
  
  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Verified error text as 'Invalid or missing information,please check your information and try again'", async () => {
    await expatcarePage.verifyNoanydetailsfillederrorText(firsttabData["expatcare-034"].lastnameErrormsg);
  })

page.close();
});

//35
test('NXGS-TC-5359:  TC_035_Expatcare_1_Validate giving invalid postal code as per country selection', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-035"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-035"].firstNameInput, firsttabData["expatcare-035"].lastNameInput,firsttabData["expatcare-035"].passportInput,firsttabData["expatcare-035"].mobileNumbercodeInput,firsttabData["expatcare-035"].mobileNumberInput,firsttabData["expatcare-035"].emailInput,firsttabData["expatcare-035"].streetNameInput,firsttabData["expatcare-035"].streetNumberInput,firsttabData["expatcare-035"].postalCodeInput,firsttabData["expatcare-035"].additionalAddressInput,firsttabData["expatcare-035"].cityInput,firsttabData["expatcare-035"].dayInput,firsttabData["expatcare-035"].monthInput,firsttabData["expatcare-035"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
     
  await test.step("Verified invalid postal code error text as 'Invalid Postal Code'", async () => {
    await expatcarePage.verifyinvalidpostalcodeerrorText(firsttabData["expatcare-035"].invalidpostalcodeErrormsg);
  }) 

page.close();
});

//36
 test('NXGS-TC-5360:  TC_036_Expatcare_1_Validate giving less than 3 characters in first name field of policy holder and insured member details', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-036"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-036"].firstNameInput, firsttabData["expatcare-036"].lastNameInput,firsttabData["expatcare-036"].passportInput,firsttabData["expatcare-036"].mobileNumbercodeInput,firsttabData["expatcare-036"].mobileNumberInput,firsttabData["expatcare-036"].emailInput,firsttabData["expatcare-036"].streetNameInput,firsttabData["expatcare-036"].streetNumberInput,firsttabData["expatcare-036"].postalCodeInput,firsttabData["expatcare-036"].additionalAddressInput,firsttabData["expatcare-036"].cityInput,firsttabData["expatcare-036"].dayInput,firsttabData["expatcare-036"].monthInput,firsttabData["expatcare-036"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-032"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-032"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-032"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-032"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-032"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-032"].secondtabPreviousButton);

  })   
  
page.close();
});

//37
test('NXGS-TC-5361:  TC_037_Expatcare_1_Validate giving less than 3 characters in last name field of policy holder and insured member details', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-037"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-037"].firstNameInput, firsttabData["expatcare-037"].lastNameInput,firsttabData["expatcare-037"].passportInput,firsttabData["expatcare-037"].mobileNumbercodeInput,firsttabData["expatcare-037"].mobileNumberInput,firsttabData["expatcare-037"].emailInput,firsttabData["expatcare-037"].streetNameInput,firsttabData["expatcare-037"].streetNumberInput,firsttabData["expatcare-037"].postalCodeInput,firsttabData["expatcare-037"].additionalAddressInput,firsttabData["expatcare-037"].cityInput,firsttabData["expatcare-037"].dayInput,firsttabData["expatcare-037"].monthInput,firsttabData["expatcare-037"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-032"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-032"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-032"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-032"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-032"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-032"].secondtabPreviousButton);

  })  
  
page.close();
});

//38
test('NXGS-TC-5362:  TC_038_Expatcare_1_Validate giving more than 60 characters in first name field of policy holder and insured member details', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-038"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-038"].firstNameInput, firsttabData["expatcare-038"].lastNameInput,firsttabData["expatcare-038"].passportInput,firsttabData["expatcare-038"].mobileNumbercodeInput,firsttabData["expatcare-038"].mobileNumberInput,firsttabData["expatcare-038"].emailInput,firsttabData["expatcare-038"].streetNameInput,firsttabData["expatcare-038"].streetNumberInput,firsttabData["expatcare-038"].postalCodeInput,firsttabData["expatcare-038"].additionalAddressInput,firsttabData["expatcare-038"].cityInput,firsttabData["expatcare-038"].dayInput,firsttabData["expatcare-038"].monthInput,firsttabData["expatcare-038"].yearInput);
  })
 
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await expatcarePage.verifyFirstnameonfirsttabfillederrorText(firsttabData["expatcare-038"].firstnameErrormsg);
  })    
  
page.close();
});

//39
test('NXGS-TC-5363:  TC_039_Expatcare_1_Validate giving more than 60 characters in last name field of policy holder and insured member details', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-039"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-039"].firstNameInput, firsttabData["expatcare-039"].lastNameInput,firsttabData["expatcare-039"].passportInput,firsttabData["expatcare-039"].mobileNumbercodeInput,firsttabData["expatcare-039"].mobileNumberInput,firsttabData["expatcare-039"].emailInput,firsttabData["expatcare-039"].streetNameInput,firsttabData["expatcare-039"].streetNumberInput,firsttabData["expatcare-039"].postalCodeInput,firsttabData["expatcare-039"].additionalAddressInput,firsttabData["expatcare-039"].cityInput,firsttabData["expatcare-039"].dayInput,firsttabData["expatcare-039"].monthInput,firsttabData["expatcare-039"].yearInput);
  })
 
  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await expatcarePage.verifylastnameonfirsttabfillederrorText(firsttabData["expatcare-039"].lastnameErrormsg);
  })  
  
page.close();
});

//40
test('NXGS-TC-5364:  TC_040_Expatcare_1_Validate able to give invalid  values  in policy holder date of birth field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-040"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-040"].firstNameInput, firsttabData["expatcare-040"].lastNameInput,firsttabData["expatcare-040"].passportInput,firsttabData["expatcare-040"].mobileNumbercodeInput,firsttabData["expatcare-040"].mobileNumberInput,firsttabData["expatcare-040"].emailInput,firsttabData["expatcare-040"].streetNameInput,firsttabData["expatcare-040"].streetNumberInput,firsttabData["expatcare-040"].postalCodeInput,firsttabData["expatcare-040"].additionalAddressInput,firsttabData["expatcare-040"].cityInput,firsttabData["expatcare-040"].dayInput,firsttabData["expatcare-040"].monthInput,firsttabData["expatcare-040"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Verified error text as ' Min date should be: 12/03/1964 '", async () => {
    await expatcarePage.verifyinvalidDateofbirtherrorText(firsttabData["expatcare-040"].invaliddateofbirthErrormsg);
  })  
  
page.close();
});

//43
test('NXGS-TC-5365:  TC_43_Expatcare_1_Validate error message disappears when only valid mobile number given', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-043"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-043"].firstNameInput, firsttabData["expatcare-043"].lastNameInput,firsttabData["expatcare-043"].passportInput,firsttabData["expatcare-043"].mobileNumbercodeInput,firsttabData["expatcare-043"].mobileNumberInput,firsttabData["expatcare-043"].emailInput,firsttabData["expatcare-043"].streetNameInput,firsttabData["expatcare-043"].streetNumberInput,firsttabData["expatcare-043"].postalCodeInput,firsttabData["expatcare-043"].additionalAddressInput,firsttabData["expatcare-043"].cityInput,firsttabData["expatcare-043"].dayInput,firsttabData["expatcare-043"].monthInput,firsttabData["expatcare-043"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Verified error text as ' Invalid Phone '", async () => {
    await expatcarePage.verifyinvalidMobilenumbererrorText(firsttabData["expatcare-043"].invalimobilenumberErrormsg);
  })  
  
page.close();
});

//44
test('NXGS-TC-5366:  TC_44_Expatcare_1_Validate error message disappears when only valid postal code given', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-044"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-044"].firstNameInput, firsttabData["expatcare-044"].lastNameInput,firsttabData["expatcare-044"].passportInput,firsttabData["expatcare-044"].mobileNumbercodeInput,firsttabData["expatcare-044"].mobileNumberInput,firsttabData["expatcare-044"].emailInput,firsttabData["expatcare-044"].streetNameInput,firsttabData["expatcare-044"].streetNumberInput,firsttabData["expatcare-044"].postalCodeInput,firsttabData["expatcare-044"].additionalAddressInput,firsttabData["expatcare-044"].cityInput,firsttabData["expatcare-044"].dayInput,firsttabData["expatcare-044"].monthInput,firsttabData["expatcare-044"].yearInput);
  })
 
  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Verified invalid postal code error text as 'Invalid Postal Code'", async () => {
    await expatcarePage.verifyinvalidpostalcodeerrorText(firsttabData["expatcare-044"].invalidpostalcodeErrormsg);
  })   
  
page.close();
});

//45
test('NXGS-TC-5367:  TC_45_Expatcare_1_Validate gender field displays in insured person details', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-045"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-045"].firstNameInput, firsttabData["expatcare-045"].lastNameInput,firsttabData["expatcare-045"].passportInput,firsttabData["expatcare-045"].mobileNumbercodeInput,firsttabData["expatcare-045"].mobileNumberInput,firsttabData["expatcare-045"].emailInput,firsttabData["expatcare-045"].streetNameInput,firsttabData["expatcare-045"].streetNumberInput,firsttabData["expatcare-045"].postalCodeInput,firsttabData["expatcare-045"].additionalAddressInput,firsttabData["expatcare-045"].cityInput,firsttabData["expatcare-045"].dayInput,firsttabData["expatcare-045"].monthInput,firsttabData["expatcare-045"].yearInput);
  })
 
  await test.step("Verified gender field text as ' Female'", async () => {
    await expatcarePage.verifyfemalegenderText(firsttabData["expatcare-045"].femalegendertext);
  })   
  
page.close();
});

//46
test('NXGS-TC-5368:  TC_46_Expatcare_1_Validate gender field displays in "Enter your date of birth and gender" section', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-046"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-046"].firstNameInput, firsttabData["expatcare-046"].lastNameInput,firsttabData["expatcare-046"].passportInput,firsttabData["expatcare-046"].mobileNumbercodeInput,firsttabData["expatcare-046"].mobileNumberInput,firsttabData["expatcare-046"].emailInput,firsttabData["expatcare-046"].streetNameInput,firsttabData["expatcare-046"].streetNumberInput,firsttabData["expatcare-046"].postalCodeInput,firsttabData["expatcare-046"].additionalAddressInput,firsttabData["expatcare-046"].cityInput,firsttabData["expatcare-046"].dayInput,firsttabData["expatcare-046"].monthInput,firsttabData["expatcare-046"].yearInput);
  })

    await test.step("Verified gender field text as ' Female'", async () => {
    await expatcarePage.verifyfemalegenderText(firsttabData["expatcare-046"].femalegendertext);
  })   
  
page.close();
});

//47
test('NXGS-TC-5369:  TC_047_Expatcare_2_Validate Ui fields displays in additional insured information section', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-047"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-047"].firstNameInput, firsttabData["expatcare-047"].lastNameInput,firsttabData["expatcare-047"].passportInput,firsttabData["expatcare-047"].mobileNumbercodeInput,firsttabData["expatcare-047"].mobileNumberInput,firsttabData["expatcare-047"].emailInput,firsttabData["expatcare-047"].streetNameInput,firsttabData["expatcare-047"].streetNumberInput,firsttabData["expatcare-047"].postalCodeInput,firsttabData["expatcare-047"].additionalAddressInput,firsttabData["expatcare-047"].cityInput,firsttabData["expatcare-047"].dayInput,firsttabData["expatcare-047"].monthInput,firsttabData["expatcare-047"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-047"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-047"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-047"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-047"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-047"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-047"].secondtabPreviousButton);

  })
page.close();
});

//48
test('NXGS-TC-5370:  TC_048_Expatcare_2_Validate Ui fields displays in additional insured information section', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-048"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-048"].firstNameInput, firsttabData["expatcare-048"].lastNameInput,firsttabData["expatcare-048"].passportInput,firsttabData["expatcare-048"].mobileNumbercodeInput,firsttabData["expatcare-048"].mobileNumberInput,firsttabData["expatcare-048"].emailInput,firsttabData["expatcare-048"].streetNameInput,firsttabData["expatcare-048"].streetNumberInput,firsttabData["expatcare-048"].postalCodeInput,firsttabData["expatcare-048"].additionalAddressInput,firsttabData["expatcare-048"].cityInput,firsttabData["expatcare-048"].dayInput,firsttabData["expatcare-048"].monthInput,firsttabData["expatcare-048"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
    
  await test.step("Verified second tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-048"].expectedPageTitle);
  })

  await test.step("Verified text on second tab 'Additional insured person'", async () => {
    await expatcarePage.verifyadditionalinsuredPersonText(firsttabData["expatcare-048"].additionalinsuredPersonText);

  })

  await test.step("Verified fieldset-note text on second tab ' If your family members are coming with you, you can also get health insurance cover for them on your policy. '", async () => {
    await expatcarePage.verifynoteText(firsttabData["expatcare-048"].noteText);

  })
  
  await test.step("Verified Add another insured person button visible on second tab", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-048"].addadditionalinsuredpersonText);

  })

  await test.step("Verified Next button visible on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-048"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on second tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-048"].secondtabPreviousButton);

  })
page.close();
});

//49
test('NXGS-TC-5371:  TC_049_Expatcare_2_Validate user able to move to plan details (3rd tab) with only 1 insured member information', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].mobileNumbercodeInput,firsttabData["expatcare-049"].mobileNumberInput,firsttabData["expatcare-049"].emailInput,firsttabData["expatcare-049"].streetNameInput,firsttabData["expatcare-049"].streetNumberInput,firsttabData["expatcare-049"].postalCodeInput,firsttabData["expatcare-049"].additionalAddressInput,firsttabData["expatcare-049"].cityInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })

  ////page.pause();

  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-049"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await expatcarePage.verifyPlandetailsText(firsttabData["expatcare-049"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await expatcarePage.verifyPeriodofinsuranceText(firsttabData["expatcare-049"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await expatcarePage.verifyPreferredplanText(firsttabData["expatcare-049"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await expatcarePage.verifyPaymentsummaryText(firsttabData["expatcare-049"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await expatcarePage.verifyAdditionnaloptionText(firsttabData["expatcare-049"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await expatcarePage.verifyIncludecoverageText(firsttabData["expatcare-049"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await expatcarePage.verifyTotalpaymentText(firsttabData["expatcare-049"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-049"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-049"].secondtabPreviousButton);

  })
page.close();
});

//50
test('NXGS-TC-5372:  TC_050_Expatcare_2_Validate user able to move to plan details (3rd tab) with 9 insured member information', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].mobileNumbercodeInput,firsttabData["expatcare-049"].mobileNumberInput,firsttabData["expatcare-049"].emailInput,firsttabData["expatcare-049"].streetNameInput,firsttabData["expatcare-049"].streetNumberInput,firsttabData["expatcare-049"].postalCodeInput,firsttabData["expatcare-049"].additionalAddressInput,firsttabData["expatcare-049"].cityInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter second Additional insured person information", async () => {
   // await expatcarePage.expatcaresecondpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Third Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })
  
  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fourt Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fifth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Sixth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Seventh Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Eigth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Nineth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
   // await expatcarePage.clickOnsecondtabNextButton();
  })
    
  ////page.pause();
 await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    //await expatcarePage.verifyPageTitle(firsttabData["expatcare-049"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    //await expatcarePage.verifyPlandetailsText(firsttabData["expatcare-049"].planneddetailsText);

  })

 await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    //await expatcarePage.verifyPeriodofinsuranceText(firsttabData["expatcare-049"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    //await expatcarePage.verifyPreferredplanText(firsttabData["expatcare-049"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
   // await expatcarePage.verifyPaymentsummaryText(firsttabData["expatcare-049"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    //await expatcarePage.verifyAdditionnaloptionText(firsttabData["expatcare-049"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    //await expatcarePage.verifyIncludecoverageText(firsttabData["expatcare-049"].includecoverageText);

  })

page.close();
});

//51

test('NXGS-TC-5373:  TC_051_Expatcare_2_Validate user able to move to plan details (3rd tab) with alll 10 insured member information', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].mobileNumbercodeInput,firsttabData["expatcare-049"].mobileNumberInput,firsttabData["expatcare-049"].emailInput,firsttabData["expatcare-049"].streetNameInput,firsttabData["expatcare-049"].streetNumberInput,firsttabData["expatcare-049"].postalCodeInput,firsttabData["expatcare-049"].additionalAddressInput,firsttabData["expatcare-049"].cityInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter second Additional insured person information", async () => {
   // await expatcarePage.expatcaresecondpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Third Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })
  
  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fourt Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fifth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Sixth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Seventh Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Eigth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Nineth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    //await expatcarePage.clickOnsecondtabNextButton();
  })

 await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    //await expatcarePage.verifyPageTitle(firsttabData["expatcare-049"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    //await expatcarePage.verifyPlandetailsText(firsttabData["expatcare-049"].planneddetailsText);

  })

 await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    //await expatcarePage.verifyPeriodofinsuranceText(firsttabData["expatcare-049"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    //await expatcarePage.verifyPreferredplanText(firsttabData["expatcare-049"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    //await expatcarePage.verifyPaymentsummaryText(firsttabData["expatcare-049"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    //await expatcarePage.verifyAdditionnaloptionText(firsttabData["expatcare-049"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    //await expatcarePage.verifyIncludecoverageText(firsttabData["expatcare-049"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    //await expatcarePage.verifyTotalpaymentText(firsttabData["expatcare-049"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    //await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-049"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    //await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-049"].secondtabPreviousButton);

  })

  
page.close();
});

//52
test('NXGS-TC-5374:  TC_052_Expatcare_2_Validate Add another insured person button get disable when all total 9 members added', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].mobileNumbercodeInput,firsttabData["expatcare-049"].mobileNumberInput,firsttabData["expatcare-049"].emailInput,firsttabData["expatcare-049"].streetNameInput,firsttabData["expatcare-049"].streetNumberInput,firsttabData["expatcare-049"].postalCodeInput,firsttabData["expatcare-049"].additionalAddressInput,firsttabData["expatcare-049"].cityInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter second Additional insured person information", async () => {
   // await expatcarePage.expatcaresecondpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Third Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })
  
  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fourt Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fifth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Sixth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Seventh Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Eigth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Nineth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })

 await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-049"].expectedPageTitle);
  })

 await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await expatcarePage.verifyPlandetailsText(firsttabData["expatcare-049"].planneddetailsText);

  })

 await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await expatcarePage.verifyPeriodofinsuranceText(firsttabData["expatcare-049"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await expatcarePage.verifyPreferredplanText(firsttabData["expatcare-049"].prefeeredplanText);

  })

  
page.close();
});

//53
test('NXGS-TC-5375:  TC_053_Expatcare_2_Validate same passport number given in all insured member details', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].mobileNumbercodeInput,firsttabData["expatcare-049"].mobileNumberInput,firsttabData["expatcare-049"].emailInput,firsttabData["expatcare-049"].streetNameInput,firsttabData["expatcare-049"].streetNumberInput,firsttabData["expatcare-049"].postalCodeInput,firsttabData["expatcare-049"].additionalAddressInput,firsttabData["expatcare-049"].cityInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter second Additional insured person information", async () => {
   // await expatcarePage.expatcaresecondpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Third Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })
  
  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fourt Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fifth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Sixth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Seventh Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Eigth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Nineth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })

 await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-049"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await expatcarePage.verifyPlandetailsText(firsttabData["expatcare-049"].planneddetailsText);

  })

 await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await expatcarePage.verifyPeriodofinsuranceText(firsttabData["expatcare-049"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await expatcarePage.verifyPreferredplanText(firsttabData["expatcare-049"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await expatcarePage.verifyPaymentsummaryText(firsttabData["expatcare-049"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await expatcarePage.verifyAdditionnaloptionText(firsttabData["expatcare-049"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await expatcarePage.verifyIncludecoverageText(firsttabData["expatcare-049"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await expatcarePage.verifyTotalpaymentText(firsttabData["expatcare-049"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-049"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-049"].secondtabPreviousButton);

  })
page.close();
});

//54
test('NXGS-TC-5376:  TC_054_Expatcare_2_Validate able to delete the added insured person using Remove button', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-049"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].mobileNumbercodeInput,firsttabData["expatcare-049"].mobileNumberInput,firsttabData["expatcare-049"].emailInput,firsttabData["expatcare-049"].streetNameInput,firsttabData["expatcare-049"].streetNumberInput,firsttabData["expatcare-049"].postalCodeInput,firsttabData["expatcare-049"].additionalAddressInput,firsttabData["expatcare-049"].cityInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter second Additional insured person information", async () => {
   // await expatcarePage.expatcaresecondpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
   // await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Third Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })
  
  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fourt Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Fifth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Sixth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Seventh Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Eigth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Add another insured person Button ", async () => {
    //await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter Nineth Additional insured person information", async () => {
    //await expatcarePage.expatcareThiradpersoninfosecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })

 await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-049"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await expatcarePage.verifyPlandetailsText(firsttabData["expatcare-049"].planneddetailsText);

  })

 await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await expatcarePage.verifyPeriodofinsuranceText(firsttabData["expatcare-049"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await expatcarePage.verifyPreferredplanText(firsttabData["expatcare-049"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await expatcarePage.verifyPaymentsummaryText(firsttabData["expatcare-049"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await expatcarePage.verifyAdditionnaloptionText(firsttabData["expatcare-049"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await expatcarePage.verifyIncludecoverageText(firsttabData["expatcare-049"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await expatcarePage.verifyTotalpaymentText(firsttabData["expatcare-049"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-049"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-049"].secondtabPreviousButton);

  })
page.close();
});

//55
test('NXGS-TC-5377:  TC_055_Expatcare_2_Validate without insured member added able to redirect to plan details (3rd tab)', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-055"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-055"].firstNameInput, firsttabData["expatcare-055"].lastNameInput,firsttabData["expatcare-055"].passportInput,firsttabData["expatcare-055"].mobileNumbercodeInput,firsttabData["expatcare-055"].mobileNumberInput,firsttabData["expatcare-055"].emailInput,firsttabData["expatcare-055"].streetNameInput,firsttabData["expatcare-055"].streetNumberInput,firsttabData["expatcare-055"].postalCodeInput,firsttabData["expatcare-055"].additionalAddressInput,firsttabData["expatcare-055"].cityInput,firsttabData["expatcare-055"].dayInput,firsttabData["expatcare-055"].monthInput,firsttabData["expatcare-055"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  
  await test.step("Click on Second Tab Next Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-055"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await expatcarePage.verifyPlandetailsText(firsttabData["expatcare-055"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await expatcarePage.verifyPeriodofinsuranceText(firsttabData["expatcare-055"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await expatcarePage.verifyPreferredplanText(firsttabData["expatcare-055"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await expatcarePage.verifyPaymentsummaryText(firsttabData["expatcare-055"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await expatcarePage.verifyAdditionnaloptionText(firsttabData["expatcare-055"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await expatcarePage.verifyIncludecoverageText(firsttabData["expatcare-055"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await expatcarePage.verifyTotalpaymentText(firsttabData["expatcare-055"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-055"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-055"].secondtabPreviousButton);

  })

page.close();
});

//56
test('NXGS-TC-5378:  TC_056_Expatcare_2_Validate no details given in added insured member information, able to redirect to plan details (3rd tab)', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-056"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-056"].firstNameInput, firsttabData["expatcare-056"].lastNameInput,firsttabData["expatcare-056"].passportInput,firsttabData["expatcare-056"].mobileNumbercodeInput,firsttabData["expatcare-056"].mobileNumberInput,firsttabData["expatcare-056"].emailInput,firsttabData["expatcare-056"].streetNameInput,firsttabData["expatcare-056"].streetNumberInput,firsttabData["expatcare-056"].postalCodeInput,firsttabData["expatcare-056"].additionalAddressInput,firsttabData["expatcare-056"].cityInput,firsttabData["expatcare-056"].dayInput,firsttabData["expatcare-056"].monthInput,firsttabData["expatcare-056"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-056"].FirstnameInput, firsttabData["expatcare-056"].LastnameInput,firsttabData["expatcare-056"].PassportInput,firsttabData["expatcare-056"].DayInput,firsttabData["expatcare-056"].MonthInput,firsttabData["expatcare-056"].YearInput);
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified text on Second tab as ' Field is required '", async () => {
    await expatcarePage.verifyfirstnamesecondtaberrorText(firsttabData["expatcare-056"].Firstnameinputfielderrormsg);

  })

page.close();
});

//57
test('NXGS-TC-5379: TC_057_Expatcare_2_Validate previous button functionality present in additional insured information (2nd tab)', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-057"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-057"].firstNameInput, firsttabData["expatcare-057"].lastNameInput,firsttabData["expatcare-057"].passportInput,firsttabData["expatcare-057"].mobileNumbercodeInput,firsttabData["expatcare-057"].mobileNumberInput,firsttabData["expatcare-057"].emailInput,firsttabData["expatcare-057"].streetNameInput,firsttabData["expatcare-057"].streetNumberInput,firsttabData["expatcare-057"].postalCodeInput,firsttabData["expatcare-057"].additionalAddressInput,firsttabData["expatcare-057"].cityInput,firsttabData["expatcare-057"].dayInput,firsttabData["expatcare-057"].monthInput,firsttabData["expatcare-057"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab Previous Button ", async () => {
    await expatcarePage.clickOnsecondtabPreviousButton();
  })
  
  await test.step("Verified text on First tab as ' Application for MAWISTA Expatcare '", async () => {
    await expatcarePage.veriffirsttabyexpectcareText(firsttabData["expatcare-057"].expatcaretext);

  })

page.close();
});

//58
test('NXGS-TC-5380: TC_058_Expatcare_2_Validate Next button functionality present in additional insured information (2nd tab)', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-058"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-058"].firstNameInput, firsttabData["expatcare-058"].lastNameInput,firsttabData["expatcare-058"].passportInput,firsttabData["expatcare-058"].mobileNumbercodeInput,firsttabData["expatcare-058"].mobileNumberInput,firsttabData["expatcare-058"].emailInput,firsttabData["expatcare-058"].streetNameInput,firsttabData["expatcare-058"].streetNumberInput,firsttabData["expatcare-058"].postalCodeInput,firsttabData["expatcare-058"].additionalAddressInput,firsttabData["expatcare-058"].cityInput,firsttabData["expatcare-058"].dayInput,firsttabData["expatcare-058"].monthInput,firsttabData["expatcare-058"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-058"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await expatcarePage.verifyPlandetailsText(firsttabData["expatcare-058"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await expatcarePage.verifyPeriodofinsuranceText(firsttabData["expatcare-058"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await expatcarePage.verifyPreferredplanText(firsttabData["expatcare-058"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await expatcarePage.verifyPaymentsummaryText(firsttabData["expatcare-058"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await expatcarePage.verifyAdditionnaloptionText(firsttabData["expatcare-058"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await expatcarePage.verifyIncludecoverageText(firsttabData["expatcare-058"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await expatcarePage.verifyTotalpaymentText(firsttabData["expatcare-058"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-058"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-058"].secondtabPreviousButton);

  })

page.close();
});

//59
test('NXGS-TC-5381: TC_059_Expatcare_2_Validate in dependent first name fields, able to give alphabetic text upto 60 characters', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-059"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-059"].firstNameInput, firsttabData["expatcare-059"].lastNameInput,firsttabData["expatcare-059"].passportInput,firsttabData["expatcare-059"].mobileNumbercodeInput,firsttabData["expatcare-059"].mobileNumberInput,firsttabData["expatcare-059"].emailInput,firsttabData["expatcare-059"].streetNameInput,firsttabData["expatcare-059"].streetNumberInput,firsttabData["expatcare-059"].postalCodeInput,firsttabData["expatcare-059"].additionalAddressInput,firsttabData["expatcare-059"].cityInput,firsttabData["expatcare-059"].dayInput,firsttabData["expatcare-059"].monthInput,firsttabData["expatcare-059"].yearInput);
  })

  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await expatcarePage.verifyFirstnameonfirsttabfillederrorText(firsttabData["expatcare-038"].firstnameErrormsg);
  })  
 
page.close();
});


//60
test('NXGS-TC-5382: TC_060_Expatcare_2_Validate in dependent last name fields, able to give alphabetic text upto 60 characters', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-060"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-060"].firstNameInput, firsttabData["expatcare-060"].lastNameInput,firsttabData["expatcare-060"].passportInput,firsttabData["expatcare-060"].mobileNumbercodeInput,firsttabData["expatcare-060"].mobileNumberInput,firsttabData["expatcare-060"].emailInput,firsttabData["expatcare-060"].streetNameInput,firsttabData["expatcare-060"].streetNumberInput,firsttabData["expatcare-060"].postalCodeInput,firsttabData["expatcare-060"].additionalAddressInput,firsttabData["expatcare-060"].cityInput,firsttabData["expatcare-060"].dayInput,firsttabData["expatcare-060"].monthInput,firsttabData["expatcare-060"].yearInput);
  })

  await test.step("Verified error text as 'Field format is invalid'", async () => {
    await expatcarePage.verifylastnameonfirsttabfillederrorText(firsttabData["expatcare-039"].lastnameErrormsg);
  })

page.close();
});

//61
test('NXGS-TC-5383: TC_061_Expatcare_2_Validate able to select gender drop down value in added insured member', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-061"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-061"].firstNameInput, firsttabData["expatcare-061"].lastNameInput,firsttabData["expatcare-061"].passportInput,firsttabData["expatcare-061"].mobileNumbercodeInput,firsttabData["expatcare-061"].mobileNumberInput,firsttabData["expatcare-061"].emailInput,firsttabData["expatcare-061"].streetNameInput,firsttabData["expatcare-061"].streetNumberInput,firsttabData["expatcare-061"].postalCodeInput,firsttabData["expatcare-061"].additionalAddressInput,firsttabData["expatcare-061"].cityInput,firsttabData["expatcare-061"].dayInput,firsttabData["expatcare-061"].monthInput,firsttabData["expatcare-061"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-061"].firstNameInput, firsttabData["expatcare-061"].lastNameInput,firsttabData["expatcare-061"].passportInput,firsttabData["expatcare-061"].dayInput,firsttabData["expatcare-061"].monthInput,firsttabData["expatcare-061"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-061"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await expatcarePage.verifyPlandetailsText(firsttabData["expatcare-061"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await expatcarePage.verifyPeriodofinsuranceText(firsttabData["expatcare-061"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await expatcarePage.verifyPreferredplanText(firsttabData["expatcare-061"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await expatcarePage.verifyPaymentsummaryText(firsttabData["expatcare-061"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await expatcarePage.verifyAdditionnaloptionText(firsttabData["expatcare-061"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await expatcarePage.verifyIncludecoverageText(firsttabData["expatcare-061"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await expatcarePage.verifyTotalpaymentText(firsttabData["expatcare-061"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-061"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-061"].secondtabPreviousButton);

  })

page.close();
});

//62
test('NXGS-TC-5384: TC_062_Expatcare_2_Validate able to give any date of birth in dependent date of birth field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-062"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-062"].firstNameInput, firsttabData["expatcare-062"].lastNameInput,firsttabData["expatcare-062"].passportInput,firsttabData["expatcare-062"].mobileNumbercodeInput,firsttabData["expatcare-062"].mobileNumberInput,firsttabData["expatcare-062"].emailInput,firsttabData["expatcare-062"].streetNameInput,firsttabData["expatcare-062"].streetNumberInput,firsttabData["expatcare-062"].postalCodeInput,firsttabData["expatcare-062"].additionalAddressInput,firsttabData["expatcare-062"].cityInput,firsttabData["expatcare-062"].dayInput,firsttabData["expatcare-062"].monthInput,firsttabData["expatcare-062"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-061"].firstNameInput, firsttabData["expatcare-061"].lastNameInput,firsttabData["expatcare-061"].passportInput,firsttabData["expatcare-061"].dayInput,firsttabData["expatcare-061"].monthInput,firsttabData["expatcare-061"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-062"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await expatcarePage.verifyPlandetailsText(firsttabData["expatcare-062"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await expatcarePage.verifyPeriodofinsuranceText(firsttabData["expatcare-062"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await expatcarePage.verifyPreferredplanText(firsttabData["expatcare-062"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await expatcarePage.verifyPaymentsummaryText(firsttabData["expatcare-062"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await expatcarePage.verifyAdditionnaloptionText(firsttabData["expatcare-062"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await expatcarePage.verifyIncludecoverageText(firsttabData["expatcare-062"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await expatcarePage.verifyTotalpaymentText(firsttabData["expatcare-062"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-062"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-062"].secondtabPreviousButton);

  })

page.close();
});

//63
test('NXGS-TC-5385: TC_063_Expatcare_2_Validate dependency field is hidden in insured member details', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-063"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-063"].firstNameInput, firsttabData["expatcare-063"].lastNameInput,firsttabData["expatcare-063"].passportInput,firsttabData["expatcare-063"].mobileNumbercodeInput,firsttabData["expatcare-063"].mobileNumberInput,firsttabData["expatcare-063"].emailInput,firsttabData["expatcare-063"].streetNameInput,firsttabData["expatcare-063"].streetNumberInput,firsttabData["expatcare-063"].postalCodeInput,firsttabData["expatcare-063"].additionalAddressInput,firsttabData["expatcare-063"].cityInput,firsttabData["expatcare-063"].dayInput,firsttabData["expatcare-063"].monthInput,firsttabData["expatcare-063"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-061"].firstNameInput, firsttabData["expatcare-061"].lastNameInput,firsttabData["expatcare-061"].passportInput,firsttabData["expatcare-061"].dayInput,firsttabData["expatcare-061"].monthInput,firsttabData["expatcare-061"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-063"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await expatcarePage.verifyPlandetailsText(firsttabData["expatcare-063"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await expatcarePage.verifyPeriodofinsuranceText(firsttabData["expatcare-063"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await expatcarePage.verifyPreferredplanText(firsttabData["expatcare-063"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await expatcarePage.verifyPaymentsummaryText(firsttabData["expatcare-063"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await expatcarePage.verifyAdditionnaloptionText(firsttabData["expatcare-063"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await expatcarePage.verifyIncludecoverageText(firsttabData["expatcare-063"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await expatcarePage.verifyTotalpaymentText(firsttabData["expatcare-063"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-063"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-063"].secondtabPreviousButton);

  })

page.close();
});

//64
test('NXGS-TC-5386: TC_064_Expatcare_2_Validate able to give minimum 3 length of characters in dependent first name field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-064"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-064"].firstNameInput, firsttabData["expatcare-064"].lastNameInput,firsttabData["expatcare-064"].passportInput,firsttabData["expatcare-064"].mobileNumbercodeInput,firsttabData["expatcare-064"].mobileNumberInput,firsttabData["expatcare-064"].emailInput,firsttabData["expatcare-064"].streetNameInput,firsttabData["expatcare-064"].streetNumberInput,firsttabData["expatcare-064"].postalCodeInput,firsttabData["expatcare-064"].additionalAddressInput,firsttabData["expatcare-064"].cityInput,firsttabData["expatcare-064"].dayInput,firsttabData["expatcare-064"].monthInput,firsttabData["expatcare-064"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-064"].firstNameInput, firsttabData["expatcare-064"].lastNameInput,firsttabData["expatcare-064"].passportInput,firsttabData["expatcare-064"].dayInput,firsttabData["expatcare-064"].monthInput,firsttabData["expatcare-064"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-064"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await expatcarePage.verifyPlandetailsText(firsttabData["expatcare-064"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await expatcarePage.verifyPeriodofinsuranceText(firsttabData["expatcare-064"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await expatcarePage.verifyPreferredplanText(firsttabData["expatcare-064"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await expatcarePage.verifyPaymentsummaryText(firsttabData["expatcare-064"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await expatcarePage.verifyAdditionnaloptionText(firsttabData["expatcare-064"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await expatcarePage.verifyIncludecoverageText(firsttabData["expatcare-064"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await expatcarePage.verifyTotalpaymentText(firsttabData["expatcare-064"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-064"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-064"].secondtabPreviousButton);

  })

page.close();
});

//65
test('NXGS-TC-5387: TC_065_Expatcare_2_Validate able to give minimum 3 length of characters in dependent last name field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-065"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-065"].firstNameInput, firsttabData["expatcare-065"].lastNameInput,firsttabData["expatcare-065"].passportInput,firsttabData["expatcare-065"].mobileNumbercodeInput,firsttabData["expatcare-065"].mobileNumberInput,firsttabData["expatcare-065"].emailInput,firsttabData["expatcare-065"].streetNameInput,firsttabData["expatcare-065"].streetNumberInput,firsttabData["expatcare-065"].postalCodeInput,firsttabData["expatcare-065"].additionalAddressInput,firsttabData["expatcare-065"].cityInput,firsttabData["expatcare-065"].dayInput,firsttabData["expatcare-065"].monthInput,firsttabData["expatcare-065"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })


  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-065"].firstNameInput, firsttabData["expatcare-065"].lastNameInput,firsttabData["expatcare-065"].passportInput,firsttabData["expatcare-065"].dayInput,firsttabData["expatcare-065"].monthInput,firsttabData["expatcare-065"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-065"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await expatcarePage.verifyPlandetailsText(firsttabData["expatcare-065"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await expatcarePage.verifyPeriodofinsuranceText(firsttabData["expatcare-065"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await expatcarePage.verifyPreferredplanText(firsttabData["expatcare-065"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await expatcarePage.verifyPaymentsummaryText(firsttabData["expatcare-065"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await expatcarePage.verifyAdditionnaloptionText(firsttabData["expatcare-065"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await expatcarePage.verifyIncludecoverageText(firsttabData["expatcare-065"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await expatcarePage.verifyTotalpaymentText(firsttabData["expatcare-065"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-065"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-065"].secondtabPreviousButton);

  })

page.close();
});

//66
test('NXGS-TC-5388: TC_066_Expatcare_2_Validate in additional insured member, user is not able to give alphanumeric text in first name field of added dependent', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-065"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-066"].firstNameInput, firsttabData["expatcare-066"].lastNameInput,firsttabData["expatcare-066"].passportInput,firsttabData["expatcare-066"].mobileNumbercodeInput,firsttabData["expatcare-066"].mobileNumberInput,firsttabData["expatcare-066"].emailInput,firsttabData["expatcare-066"].streetNameInput,firsttabData["expatcare-066"].streetNumberInput,firsttabData["expatcare-066"].postalCodeInput,firsttabData["expatcare-066"].additionalAddressInput,firsttabData["expatcare-066"].cityInput,firsttabData["expatcare-066"].dayInput,firsttabData["expatcare-066"].monthInput,firsttabData["expatcare-066"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-066"].firstnameInput, firsttabData["expatcare-066"].lastNameInput,firsttabData["expatcare-066"].passportInput,firsttabData["expatcare-066"].dayInput,firsttabData["expatcare-066"].monthInput,firsttabData["expatcare-066"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Second Tab First name error text as '  Field format is invalid  '", async () => {
    await expatcarePage.verifsecondtabinsuredfirstnameText(firsttabData["expatcare-066"].additinalfirstnameinsurederrormsg);
  })

page.close();
});

//67
test('NXGS-TC-5389: TC_067_Expatcare_2_Validate in additional insured field, user is not able to give alphanumeric text in last name field of added dependent', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-067"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-067"].firstNameInput, firsttabData["expatcare-067"].lastNameInput,firsttabData["expatcare-067"].passportInput,firsttabData["expatcare-067"].mobileNumbercodeInput,firsttabData["expatcare-067"].mobileNumberInput,firsttabData["expatcare-067"].emailInput,firsttabData["expatcare-067"].streetNameInput,firsttabData["expatcare-067"].streetNumberInput,firsttabData["expatcare-067"].postalCodeInput,firsttabData["expatcare-067"].additionalAddressInput,firsttabData["expatcare-067"].cityInput,firsttabData["expatcare-067"].dayInput,firsttabData["expatcare-067"].monthInput,firsttabData["expatcare-067"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-067"].firstNameInput, firsttabData["expatcare-067"].lastnameInput,firsttabData["expatcare-067"].passportInput,firsttabData["expatcare-067"].dayInput,firsttabData["expatcare-067"].monthInput,firsttabData["expatcare-067"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Second Tab Last name error text as '  Field format is invalid  '", async () => {
    await expatcarePage.verifsecondtabinsuredlastnameText(firsttabData["expatcare-067"].additinallastnameinsurederrormsg);
  })

page.close();
});

//68
test('NXGS-TC-5390: TC_068_Expatcare_2_Validate able to give invalid values in insured member date of birth field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-068"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-068"].firstNameInput, firsttabData["expatcare-068"].lastNameInput,firsttabData["expatcare-068"].passportInput,firsttabData["expatcare-068"].mobileNumbercodeInput,firsttabData["expatcare-068"].mobileNumberInput,firsttabData["expatcare-068"].emailInput,firsttabData["expatcare-068"].streetNameInput,firsttabData["expatcare-068"].streetNumberInput,firsttabData["expatcare-068"].postalCodeInput,firsttabData["expatcare-068"].additionalAddressInput,firsttabData["expatcare-068"].cityInput,firsttabData["expatcare-068"].dayInput,firsttabData["expatcare-068"].monthInput,firsttabData["expatcare-068"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })


  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-068"].firstnameInput, firsttabData["expatcare-068"].lastNameInput,firsttabData["expatcare-068"].passportInput,firsttabData["expatcare-068"].dAy,firsttabData["expatcare-068"].mOnth,firsttabData["expatcare-068"].yEar);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Second Tab First name error text as '  Field format is invalid  '", async () => {
    await expatcarePage.verifyinvalidDateofbirtherrorText(firsttabData["expatcare-068"].additinaldateofbirthinsurederrormsg);
  })

page.close();
});

//69
test('NXGS-TC-5391: TC_069_Expatcare_2_Validate giving invalid passport number in additional insured and dependent insured information field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-068"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-068"].firstNameInput, firsttabData["expatcare-068"].lastNameInput,firsttabData["expatcare-068"].passportInput,firsttabData["expatcare-068"].mobileNumbercodeInput,firsttabData["expatcare-068"].mobileNumberInput,firsttabData["expatcare-068"].emailInput,firsttabData["expatcare-068"].streetNameInput,firsttabData["expatcare-068"].streetNumberInput,firsttabData["expatcare-068"].postalCodeInput,firsttabData["expatcare-068"].additionalAddressInput,firsttabData["expatcare-068"].cityInput,firsttabData["expatcare-068"].dayInput,firsttabData["expatcare-068"].monthInput,firsttabData["expatcare-068"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })


  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-068"].firstnameInput, firsttabData["expatcare-068"].lastNameInput,firsttabData["expatcare-068"].passportInput,firsttabData["expatcare-068"].dAy,firsttabData["expatcare-068"].mOnth,firsttabData["expatcare-068"].yEar);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Second Tab First name error text as '  Field format is invalid  '", async () => {
    await expatcarePage.verifyinvalidDateofbirtherrorText(firsttabData["expatcare-068"].additinaldateofbirthinsurederrormsg);
  })

page.close();
});

//70
test('NXGS-TC-5392: TC_070_Expatcare_3_Validate UI fields present in plan details (3rd tab)', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-070"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-070"].firstNameInput, firsttabData["expatcare-070"].lastNameInput,firsttabData["expatcare-070"].passportInput,firsttabData["expatcare-070"].mobileNumbercodeInput,firsttabData["expatcare-070"].mobileNumberInput,firsttabData["expatcare-070"].emailInput,firsttabData["expatcare-070"].streetNameInput,firsttabData["expatcare-070"].streetNumberInput,firsttabData["expatcare-070"].postalCodeInput,firsttabData["expatcare-070"].additionalAddressInput,firsttabData["expatcare-070"].cityInput,firsttabData["expatcare-070"].dayInput,firsttabData["expatcare-070"].monthInput,firsttabData["expatcare-070"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-070"].firstNameInput, firsttabData["expatcare-070"].lastNameInput,firsttabData["expatcare-070"].passportInput,firsttabData["expatcare-070"].dayInput,firsttabData["expatcare-070"].monthInput,firsttabData["expatcare-070"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
  
  await test.step("Verified Third tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-070"].expectedPageTitle);
  })

  await test.step("Verified text on Third tab as 'Plan details'", async () => {
    await expatcarePage.verifyPlandetailsText(firsttabData["expatcare-070"].planneddetailsText);

  })

  await test.step("Verified text on Third tab as 'Period of insurance'", async () => {
    await expatcarePage.verifyPeriodofinsuranceText(firsttabData["expatcare-070"].periodofinsuranceText);

  })

  await test.step("Verified text on Third tab as 'Choose your preferred plan'", async () => {
    await expatcarePage.verifyPreferredplanText(firsttabData["expatcare-065"].prefeeredplanText);

  })

  await test.step("Verified text on Third tab as 'Payment summary'", async () => {
    await expatcarePage.verifyPaymentsummaryText(firsttabData["expatcare-065"].paymentsummaryText);

  })

  await test.step("Verified text on Third tab as 'Additional optioni'", async () => {
    await expatcarePage.verifyAdditionnaloptionText(firsttabData["expatcare-065"].additionaloptionText);

  })
  
  await test.step("Verified text on Third tab as 'Include coverage for USA & Canada", async () => {
    await expatcarePage.verifyIncludecoverageText(firsttabData["expatcare-065"].includecoverageText);

  })

  await test.step("Verified text on Third tab as 'Total payment per month'", async () => {
    await expatcarePage.verifyTotalpaymentText(firsttabData["expatcare-065"].totalpaymentText);

  })

  await test.step("Verified Next button visible on third tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-065"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on third tab", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-065"].secondtabPreviousButton);

  })

page.close();
});

//71
test('NXGS-TC-5393: TC_071_Expatcare_3_Validate widget/tiles content when Mawista Expatcare Classic plan selected', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-071"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-071"].firstNameInput, firsttabData["expatcare-071"].lastNameInput,firsttabData["expatcare-071"].passportInput,firsttabData["expatcare-071"].mobileNumbercodeInput,firsttabData["expatcare-071"].mobileNumberInput,firsttabData["expatcare-071"].emailInput,firsttabData["expatcare-071"].streetNameInput,firsttabData["expatcare-071"].streetNumberInput,firsttabData["expatcare-071"].postalCodeInput,firsttabData["expatcare-071"].additionalAddressInput,firsttabData["expatcare-071"].cityInput,firsttabData["expatcare-071"].dayInput,firsttabData["expatcare-071"].monthInput,firsttabData["expatcare-071"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })

  await test.step("Click on Classic Radio button ", async () => {
    await expatcarePage.clickOnClassictileofThirdTab();
  })
  
  await test.step("Verified text on Classic button as 'Free choice of doctors,Attractive cost-benefit ratio,Accident-related aids'", async () => {
    await expatcarePage.verifyClassicTileText(firsttabData["expatcare-071"].classicfcontenttext,firsttabData["expatcare-071"].classicscontenttext,firsttabData["expatcare-071"].classictdcontenttext);

  })
  
page.close();
});

//72
test('NXGS-TC-5394: TC_072_Expatcare_3_Validate widget content when Mawista Expatcare Comfort plan selected', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-072"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-072"].firstNameInput, firsttabData["expatcare-072"].lastNameInput,firsttabData["expatcare-072"].passportInput,firsttabData["expatcare-072"].mobileNumbercodeInput,firsttabData["expatcare-072"].mobileNumberInput,firsttabData["expatcare-072"].emailInput,firsttabData["expatcare-072"].streetNameInput,firsttabData["expatcare-072"].streetNumberInput,firsttabData["expatcare-072"].postalCodeInput,firsttabData["expatcare-072"].additionalAddressInput,firsttabData["expatcare-072"].cityInput,firsttabData["expatcare-072"].dayInput,firsttabData["expatcare-072"].monthInput,firsttabData["expatcare-072"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })

  await test.step("Click on Classic Radio button ", async () => {
    await expatcarePage.clickOnComforttileofThirdTab();
  })
  
  await test.step("Verified text on Comfort button as 'Free choice of doctors,Attractive cost-benefit ratio,Accident-related aids'", async () => {
    await expatcarePage.verifyCofortTileText(firsttabData["expatcare-072"].classicfcontenttext,firsttabData["expatcare-072"].classicscontenttext,firsttabData["expatcare-072"].classictcontenttext);

  })
  
page.close();
});

//73
test('NXGS-TC-5395: TC_073_Expatcare_3_Validate widget content when Mawista Expatcare Premium plan selected', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-073"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-073"].firstNameInput, firsttabData["expatcare-073"].lastNameInput,firsttabData["expatcare-073"].passportInput,firsttabData["expatcare-073"].mobileNumbercodeInput,firsttabData["expatcare-073"].mobileNumberInput,firsttabData["expatcare-073"].emailInput,firsttabData["expatcare-073"].streetNameInput,firsttabData["expatcare-073"].streetNumberInput,firsttabData["expatcare-073"].postalCodeInput,firsttabData["expatcare-073"].additionalAddressInput,firsttabData["expatcare-073"].cityInput,firsttabData["expatcare-073"].dayInput,firsttabData["expatcare-073"].monthInput,firsttabData["expatcare-073"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })

  await test.step("Click on Classic Radio button ", async () => {
    await expatcarePage.clickOnPremiumtileofThirdTab();
  })
  
  await test.step("Verified text on Premium button as 'Free choice of doctors,Attractive cost-benefit ratio,Accident-related aids'", async () => {
    await expatcarePage.verifyPremiumTileText(firsttabData["expatcare-073"].classicfcontenttext,firsttabData["expatcare-073"].classicscontenttext,firsttabData["expatcare-073"].classictcontenttext);

  })
  
page.close();
});

//74
test('NXGS-TC-5396: TC_074_Expatcare_3_Validate able to select any month from previous year in start date field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-074"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-074"].firstNameInput, firsttabData["expatcare-074"].lastNameInput,firsttabData["expatcare-074"].passportInput,firsttabData["expatcare-074"].mobileNumbercodeInput,firsttabData["expatcare-074"].mobileNumberInput,firsttabData["expatcare-074"].emailInput,firsttabData["expatcare-074"].streetNameInput,firsttabData["expatcare-074"].streetNumberInput,firsttabData["expatcare-074"].postalCodeInput,firsttabData["expatcare-074"].additionalAddressInput,firsttabData["expatcare-074"].cityInput,firsttabData["expatcare-074"].dayInput,firsttabData["expatcare-074"].monthInput,firsttabData["expatcare-074"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date on Third Tab ", async () => {
    await expatcarePage.expatcaresStartdateonThirdtTab(firsttabData["expatcare-074"].StartdateInput);
  })
   
  
page.close();
});

//75
test('NXGS-TC-5397: TC_075_Expatcare_3_Validate able to select any month in current year in start date field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-075"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-075"].firstNameInput, firsttabData["expatcare-075"].lastNameInput,firsttabData["expatcare-075"].passportInput,firsttabData["expatcare-075"].mobileNumbercodeInput,firsttabData["expatcare-075"].mobileNumberInput,firsttabData["expatcare-075"].emailInput,firsttabData["expatcare-075"].streetNameInput,firsttabData["expatcare-075"].streetNumberInput,firsttabData["expatcare-075"].postalCodeInput,firsttabData["expatcare-075"].additionalAddressInput,firsttabData["expatcare-075"].cityInput,firsttabData["expatcare-075"].dayInput,firsttabData["expatcare-074"].monthInput,firsttabData["expatcare-074"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date on Third Tab ", async () => {
    await expatcarePage.expatcaresStartdateonThirdtTab(firsttabData["expatcare-075"].StartdateInput);
  })
    
page.close();
});

//76
test('NXGS-TC-5398: TC_076_Expatcare_3_Validate able to select any month in future year in start date field', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-076"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-076"].firstNameInput, firsttabData["expatcare-076"].lastNameInput,firsttabData["expatcare-076"].passportInput,firsttabData["expatcare-076"].mobileNumbercodeInput,firsttabData["expatcare-076"].mobileNumberInput,firsttabData["expatcare-076"].emailInput,firsttabData["expatcare-076"].streetNameInput,firsttabData["expatcare-076"].streetNumberInput,firsttabData["expatcare-076"].postalCodeInput,firsttabData["expatcare-076"].additionalAddressInput,firsttabData["expatcare-076"].cityInput,firsttabData["expatcare-076"].dayInput,firsttabData["expatcare-076"].monthInput,firsttabData["expatcare-076"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date on Third Tab ", async () => {
    await expatcarePage.expatcaresStartdateonThirdtTab(firsttabData["expatcare-076"].StartdateInput);
  })
    
page.close();
});

//77
test('NXGS-TC-6509: TC_077_Expatcare_3_Validate able to select duration of upto 40 months in Expatcare policy', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-077"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-077"].firstNameInput, firsttabData["expatcare-077"].lastNameInput,firsttabData["expatcare-077"].passportInput,firsttabData["expatcare-077"].mobileNumbercodeInput,firsttabData["expatcare-077"].mobileNumberInput,firsttabData["expatcare-077"].emailInput,firsttabData["expatcare-077"].streetNameInput,firsttabData["expatcare-077"].streetNumberInput,firsttabData["expatcare-077"].postalCodeInput,firsttabData["expatcare-077"].additionalAddressInput,firsttabData["expatcare-077"].cityInput,firsttabData["expatcare-077"].dayInput,firsttabData["expatcare-077"].monthInput,firsttabData["expatcare-077"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date upto 40 months on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-077"].StartdateInput,firsttabData["expatcare-077"].EnddateInput);
  })

 await test.step("Verified Premium value for 'Expatcare Excluding USA/Canada for Classic , Comfort and Premium '", async () => {
    await expatcarePage.verifyPremiumvaluesforExpatcareExcludinguptofourtyyrs(firsttabData["expatcare-077"].classicefourtyyrstext,firsttabData["expatcare-077"].comfortefourtyyrsttext,firsttabData["expatcare-077"].premiumefourtyyrstext);

  })

  await test.step("Click on  'Include coverage for USA & Canada' checkbox ", async () => {
    await expatcarePage.ClickonincludeciverageforUSAandCandaThirdtTab();
  })

  await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic , Comfort and Premium '", async () => {
    await expatcarePage.verifyPremiumvaluesforExpatcareIncludinguptofourtyyrs(firsttabData["expatcare-077"].classicefourtyyrsintext,firsttabData["expatcare-077"].comfortefourtyyrsintext,firsttabData["expatcare-077"].premiumefourtyyrsintext);

  })
   
page.close();
});

//78
test('NXGS-TC-6510: TC_078_Expatcare_3_Validate able to select duration of 41-55 months in Expatcare policy', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-078"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-078"].firstNameInput, firsttabData["expatcare-078"].lastNameInput,firsttabData["expatcare-078"].passportInput,firsttabData["expatcare-078"].mobileNumbercodeInput,firsttabData["expatcare-078"].mobileNumberInput,firsttabData["expatcare-078"].emailInput,firsttabData["expatcare-078"].streetNameInput,firsttabData["expatcare-078"].streetNumberInput,firsttabData["expatcare-078"].postalCodeInput,firsttabData["expatcare-078"].additionalAddressInput,firsttabData["expatcare-078"].cityInput,firsttabData["expatcare-078"].dayInput,firsttabData["expatcare-078"].monthInput,firsttabData["expatcare-078"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date upto 40 months on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-078"].StartdateInput,firsttabData["expatcare-078"].EnddateInput);
  })

 await test.step("Verified Premium value for 'Expatcare Excluding USA/Canada for Classic , Comfort and Premium '", async () => {
    await expatcarePage.verifyPremiumvaluesforExpatcareExcludinguptofourtytofiftyfiveyrs(firsttabData["expatcare-078"].classicefourtyyrstext,firsttabData["expatcare-078"].comfortefourtyyrsttext,firsttabData["expatcare-078"].premiumefourtyyrstext);

  })

  await test.step("Click on  'Include coverage for USA & Canada' checkbox ", async () => {
    await expatcarePage.ClickonincludeciverageforUSAandCandaThirdtTab();
  })

  await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic , Comfort and Premium '", async () => {
    await expatcarePage.verifyPremiumvaluesforExpatcareIncludinguptofourtytofiftyfiveyrs(firsttabData["expatcare-078"].classicefourtyyrsintext,firsttabData["expatcare-078"].comfortefourtyyrsintext,firsttabData["expatcare-078"].premiumefourtyyrsintext);

  })
   
page.close();
});

//79
test('NXGS-TC-6511: TC_079_Expatcare_3_Validate able to select duration of 56-60 months in Expatcare policy', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-079"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-079"].firstNameInput, firsttabData["expatcare-079"].lastNameInput,firsttabData["expatcare-079"].passportInput,firsttabData["expatcare-079"].mobileNumbercodeInput,firsttabData["expatcare-079"].mobileNumberInput,firsttabData["expatcare-079"].emailInput,firsttabData["expatcare-079"].streetNameInput,firsttabData["expatcare-079"].streetNumberInput,firsttabData["expatcare-079"].postalCodeInput,firsttabData["expatcare-079"].additionalAddressInput,firsttabData["expatcare-079"].cityInput,firsttabData["expatcare-079"].dayInput,firsttabData["expatcare-079"].monthInput,firsttabData["expatcare-079"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date upto 40 months on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-079"].StartdateInput,firsttabData["expatcare-079"].EnddateInput);
  })

  await test.step("Verified Premium value for 'Expatcare Excluding USA/Canada for Classic , Comfort and Premium '", async () => {
    await expatcarePage.verifyPremiumvaluesforExpatcareExcludinguptofiftysixtosixtyyrs(firsttabData["expatcare-079"].classicefourtyyrstext,firsttabData["expatcare-079"].comfortefourtyyrsttext,firsttabData["expatcare-079"].premiumefourtyyrstext);

  })

  await test.step("Click on  'Include coverage for USA & Canada' checkbox ", async () => {
    await expatcarePage.ClickonincludeciverageforUSAandCandaThirdtTab();
  })

  await test.step("Verified Premium value for 'Include coverage for USA & Canada for Classic , Comfort and Premium '", async () => {
    await expatcarePage.verifyPremiumvaluesforExpatcareIncludinguptofiftysixtosixtyyrs(firsttabData["expatcare-079"].classicefourtyyrsintext,firsttabData["expatcare-079"].comfortefourtyyrsintext,firsttabData["expatcare-079"].premiumefourtyyrsintext);

  })
   
page.close();
});

//80
test('NXGS-TC-5402: TC_080_Expatcare_3_Validate last day of month displays in end date field when any month selected', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-080"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-080"].firstNameInput, firsttabData["expatcare-080"].lastNameInput,firsttabData["expatcare-080"].passportInput,firsttabData["expatcare-080"].mobileNumbercodeInput,firsttabData["expatcare-080"].mobileNumberInput,firsttabData["expatcare-080"].emailInput,firsttabData["expatcare-080"].streetNameInput,firsttabData["expatcare-080"].streetNumberInput,firsttabData["expatcare-080"].postalCodeInput,firsttabData["expatcare-080"].additionalAddressInput,firsttabData["expatcare-080"].cityInput,firsttabData["expatcare-080"].dayInput,firsttabData["expatcare-080"].monthInput,firsttabData["expatcare-080"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-080"].StartdateInput,firsttabData["expatcare-080"].EnddateInput);
  })

  await test.step("Verified last day of month displays in end date field", async () => {
    await expatcarePage.verifysecondtabPreviousButton(firsttabData["expatcare-080"].enddatetext);

  })
   
page.close();
});

//81
test('NXGS-TC-5403: TC_081_Expatcare_3_Validate correct premium displays when Expatcare Classic plan selected', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-081"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-081"].firstNameInput, firsttabData["expatcare-081"].lastNameInput,firsttabData["expatcare-081"].passportInput,firsttabData["expatcare-081"].mobileNumbercodeInput,firsttabData["expatcare-081"].mobileNumberInput,firsttabData["expatcare-081"].emailInput,firsttabData["expatcare-081"].streetNameInput,firsttabData["expatcare-081"].streetNumberInput,firsttabData["expatcare-081"].postalCodeInput,firsttabData["expatcare-080"].additionalAddressInput,firsttabData["expatcare-081"].cityInput,firsttabData["expatcare-081"].dayInput,firsttabData["expatcare-081"].monthInput,firsttabData["expatcare-081"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-081"].StartdateInput,firsttabData["expatcare-081"].EnddateInput);
  })

  await test.step("Click on  'Include coverage for USA & Canada' checkbox ", async () => {
    await expatcarePage.ClickonincludeciverageforUSAandCandaThirdtTab();
  })

  await test.step("Verified last day of month displays in end date field", async () => {
    await expatcarePage.verifyPremiumvaluesforExpatcareclassic(firsttabData["expatcare-081"].classicefourtyyrsintext);

  })
   
page.close();
});

//82
test('NXGS-TC-5404: TC_082_Expatcare_3_Validate correct premium displays when Expatcare Comfort selected', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-082"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-082"].firstNameInput, firsttabData["expatcare-082"].lastNameInput,firsttabData["expatcare-082"].passportInput,firsttabData["expatcare-082"].mobileNumbercodeInput,firsttabData["expatcare-082"].mobileNumberInput,firsttabData["expatcare-082"].emailInput,firsttabData["expatcare-082"].streetNameInput,firsttabData["expatcare-082"].streetNumberInput,firsttabData["expatcare-082"].postalCodeInput,firsttabData["expatcare-082"].additionalAddressInput,firsttabData["expatcare-082"].cityInput,firsttabData["expatcare-082"].dayInput,firsttabData["expatcare-082"].monthInput,firsttabData["expatcare-082"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-082"].StartdateInput,firsttabData["expatcare-082"].EnddateInput);
  })

  await test.step("Verified last day of month displays in end date field", async () => {
    await expatcarePage.verifyPremiumvaluesforExpatcarecomfort(firsttabData["expatcare-082"].classicefourtyyrsintext);

  })
   
page.close();
});

//83
test('NXGS-TC-5405: TC_083_Expatcare_3_Validate correct premium displays when Expatcare Premium plan selected', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-083"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-083"].firstNameInput, firsttabData["expatcare-083"].lastNameInput,firsttabData["expatcare-083"].passportInput,firsttabData["expatcare-083"].mobileNumbercodeInput,firsttabData["expatcare-083"].mobileNumberInput,firsttabData["expatcare-083"].emailInput,firsttabData["expatcare-083"].streetNameInput,firsttabData["expatcare-083"].streetNumberInput,firsttabData["expatcare-083"].postalCodeInput,firsttabData["expatcare-083"].additionalAddressInput,firsttabData["expatcare-083"].cityInput,firsttabData["expatcare-083"].dayInput,firsttabData["expatcare-083"].monthInput,firsttabData["expatcare-083"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-083"].StartdateInput,firsttabData["expatcare-083"].EnddateInput);
  })

  await test.step("Verified last day of month displays in end date field", async () => {
    await expatcarePage.verifyPremiumvaluesforExpatcareprepium(firsttabData["expatcare-083"].classicefourtyyrsintext);

  })
   
page.close();
});

//84
test('NXGS-TC-5406: TC_084_Expatcare_3_Validate premium get changed when date of birth changed for selected product plan', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-084"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-084"].firstNameInput, firsttabData["expatcare-084"].lastNameInput,firsttabData["expatcare-084"].passportInput,firsttabData["expatcare-084"].mobileNumbercodeInput,firsttabData["expatcare-084"].mobileNumberInput,firsttabData["expatcare-084"].emailInput,firsttabData["expatcare-084"].streetNameInput,firsttabData["expatcare-084"].streetNumberInput,firsttabData["expatcare-084"].postalCodeInput,firsttabData["expatcare-084"].additionalAddressInput,firsttabData["expatcare-084"].cityInput,firsttabData["expatcare-084"].dayInput,firsttabData["expatcare-084"].monthInput,firsttabData["expatcare-084"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-084"].StartdateInput,firsttabData["expatcare-084"].EnddateInput);
  })

  await test.step("Verified last day of month displays in end date field", async () => {
    await expatcarePage.verifyMalegenderpremiumforExpatcare(firsttabData["expatcare-084"].classicetext);

  })
   
page.close();
});

//85
test('NXGS-TC-5407: TC_085_Expatcare_3_Validate montly premium displays when period of insurance more than 1 month', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-085"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-085"].firstNameInput, firsttabData["expatcare-085"].lastNameInput,firsttabData["expatcare-085"].passportInput,firsttabData["expatcare-085"].mobileNumbercodeInput,firsttabData["expatcare-085"].mobileNumberInput,firsttabData["expatcare-085"].emailInput,firsttabData["expatcare-085"].streetNameInput,firsttabData["expatcare-085"].streetNumberInput,firsttabData["expatcare-085"].postalCodeInput,firsttabData["expatcare-085"].additionalAddressInput,firsttabData["expatcare-085"].cityInput,firsttabData["expatcare-085"].dayInput,firsttabData["expatcare-085"].monthInput,firsttabData["expatcare-085"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-085"].StartdateInput,firsttabData["expatcare-085"].EnddateInput);
  })

  await test.step("Verified last day of month displays in end date field", async () => {
    await expatcarePage.verifyMalegenderpremiumforExpatcare(firsttabData["expatcare-085"].classicetext);

  })
   
page.close();
});

//86
test('NXGS-TC-5408: TC_086_Expatcare_3_Validate premium get changed when dependent added for selected product plan', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-086"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-086"].firstNameInput, firsttabData["expatcare-086"].lastNameInput,firsttabData["expatcare-086"].passportInput,firsttabData["expatcare-086"].mobileNumbercodeInput,firsttabData["expatcare-086"].mobileNumberInput,firsttabData["expatcare-086"].emailInput,firsttabData["expatcare-086"].streetNameInput,firsttabData["expatcare-086"].streetNumberInput,firsttabData["expatcare-086"].postalCodeInput,firsttabData["expatcare-086"].additionalAddressInput,firsttabData["expatcare-086"].cityInput,firsttabData["expatcare-086"].dayInput,firsttabData["expatcare-086"].monthInput,firsttabData["expatcare-086"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonaddinginsuredThirdtTab(firsttabData["expatcare-086"].StartdateInput,firsttabData["expatcare-086"].EnddateInput);
  })

  await test.step("Verified last day of month displays in end date field", async () => {
    await expatcarePage.verifyclasaluesforExpatcareprepium(firsttabData["expatcare-086"].classicetext);

  })
   
page.close();
});

//87
test('NXGS-TC-5409: TC_087_Expatcare_3_Validate premium get affected when product plan selection changed', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-087"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-087"].firstNameInput, firsttabData["expatcare-087"].lastNameInput,firsttabData["expatcare-087"].passportInput,firsttabData["expatcare-087"].mobileNumbercodeInput,firsttabData["expatcare-087"].mobileNumberInput,firsttabData["expatcare-087"].emailInput,firsttabData["expatcare-087"].streetNameInput,firsttabData["expatcare-087"].streetNumberInput,firsttabData["expatcare-087"].postalCodeInput,firsttabData["expatcare-087"].additionalAddressInput,firsttabData["expatcare-087"].cityInput,firsttabData["expatcare-087"].dayInput,firsttabData["expatcare-087"].monthInput,firsttabData["expatcare-087"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaresecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonaddinginsuredThirdtTab(firsttabData["expatcare-087"].StartdateInput,firsttabData["expatcare-087"].EnddateInput);
  })

  await test.step("Verified Premium displays when product plan get changed", async () => {
    await expatcarePage.verifyclasaluesforExpatcareprepium(firsttabData["expatcare-087"].classicetext);

  })
   
page.close();
});

//88
test('NXGS-TC-5410: TC_088_Expatcare_3_Validate premium get changed when gender changed in insured member information for selected product plan', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-088"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcaregenderchangeFirstTab(firsttabData["expatcare-088"].firstNameInput, firsttabData["expatcare-088"].lastNameInput,firsttabData["expatcare-088"].passportInput,firsttabData["expatcare-088"].mobileNumbercodeInput,firsttabData["expatcare-088"].mobileNumberInput,firsttabData["expatcare-088"].emailInput,firsttabData["expatcare-088"].streetNameInput,firsttabData["expatcare-088"].streetNumberInput,firsttabData["expatcare-088"].postalCodeInput,firsttabData["expatcare-088"].additionalAddressInput,firsttabData["expatcare-088"].cityInput,firsttabData["expatcare-088"].dayInput,firsttabData["expatcare-088"].monthInput,firsttabData["expatcare-088"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-088"].StartdateInput,firsttabData["expatcare-088"].EnddateInput);
  })

  await test.step("Verified Premium displays when product plan get changed", async () => {
    await expatcarePage.verifyMalegenderpremiumforExpatcare(firsttabData["expatcare-088"].classicetext);

  })
   
page.close();
});

//89
test('NXGS-TC-5411: TC_089_Expatcare_3_Validate premium get changed when gender changed in dependent information for selected product plan', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-089"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcaregenderchangeFirstTab(firsttabData["expatcare-089"].firstNameInput, firsttabData["expatcare-089"].lastNameInput,firsttabData["expatcare-089"].passportInput,firsttabData["expatcare-089"].mobileNumbercodeInput,firsttabData["expatcare-089"].mobileNumberInput,firsttabData["expatcare-089"].emailInput,firsttabData["expatcare-089"].streetNameInput,firsttabData["expatcare-089"].streetNumberInput,firsttabData["expatcare-089"].postalCodeInput,firsttabData["expatcare-089"].additionalAddressInput,firsttabData["expatcare-089"].cityInput,firsttabData["expatcare-089"].dayInput,firsttabData["expatcare-089"].monthInput,firsttabData["expatcare-089"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Add another insured person Button ", async () => {
    await expatcarePage.clickOnAddanotherinsuredpersonButton();
  })

  await test.step("Enter First Additional insured person information", async () => {
    await expatcarePage.expatcaregendersecondtTab(firsttabData["expatcare-049"].firstNameInput, firsttabData["expatcare-049"].lastNameInput,firsttabData["expatcare-049"].passportInput,firsttabData["expatcare-049"].dayInput,firsttabData["expatcare-049"].monthInput,firsttabData["expatcare-049"].yearInput);
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonaddinginsuredThirdtTab(firsttabData["expatcare-089"].StartdateInput,firsttabData["expatcare-089"].EnddateInput);
  })

  await test.step("Verified Premium displays when product plan get changed", async () => {
    await expatcarePage.verifyclasaluesforExpatcareprepium(firsttabData["expatcare-089"].classicetext);

  })
   
page.close();
});

//90
test('NXGS-TC-5412: TC_090_Expatcare_3_Validate giving start date of insurance is greater than end date of insurance', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-090"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcaregenderchangeFirstTab(firsttabData["expatcare-090"].firstNameInput, firsttabData["expatcare-090"].lastNameInput,firsttabData["expatcare-090"].passportInput,firsttabData["expatcare-090"].mobileNumbercodeInput,firsttabData["expatcare-090"].mobileNumberInput,firsttabData["expatcare-090"].emailInput,firsttabData["expatcare-090"].streetNameInput,firsttabData["expatcare-090"].streetNumberInput,firsttabData["expatcare-090"].postalCodeInput,firsttabData["expatcare-090"].additionalAddressInput,firsttabData["expatcare-090"].cityInput,firsttabData["expatcare-090"].dayInput,firsttabData["expatcare-090"].monthInput,firsttabData["expatcare-090"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-090"].StartdateInput,firsttabData["expatcare-090"].EnddateInput);
  })

  await test.step("Verified Premium displays when product plan get changed", async () => {
    await expatcarePage.verifyMalegenderpremiumforExpatcare(firsttabData["expatcare-090"].classicetext);

  })
   
page.close();
});

//91
test('NXGS-TC-5413: TC_091_Expatcare_3_Validate correct payment summary details displays when only policy holder added in policy', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-091"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcaregenderchangeFirstTab(firsttabData["expatcare-091"].firstNameInput, firsttabData["expatcare-091"].lastNameInput,firsttabData["expatcare-091"].passportInput,firsttabData["expatcare-091"].mobileNumbercodeInput,firsttabData["expatcare-091"].mobileNumberInput,firsttabData["expatcare-091"].emailInput,firsttabData["expatcare-091"].streetNameInput,firsttabData["expatcare-091"].streetNumberInput,firsttabData["expatcare-091"].postalCodeInput,firsttabData["expatcare-091"].additionalAddressInput,firsttabData["expatcare-091"].cityInput,firsttabData["expatcare-091"].dayInput,firsttabData["expatcare-091"].monthInput,firsttabData["expatcare-091"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-091"].StartdateInput,firsttabData["expatcare-091"].EnddateInput);
  })

  await test.step("Verified Premium displays when product plan get changed", async () => {
    await expatcarePage.verifyMalegenderpremiumforExpatcare(firsttabData["expatcare-091"].classicetext);

  })
   
page.close();
});

//92
test('NXGS-TC-5414: TC_092_Expatcare_3_Validate correct payment summary details displays when insured member added in policy', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-092"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcaregenderchangeFirstTab(firsttabData["expatcare-092"].firstNameInput, firsttabData["expatcare-092"].lastNameInput,firsttabData["expatcare-092"].passportInput,firsttabData["expatcare-092"].mobileNumbercodeInput,firsttabData["expatcare-092"].mobileNumberInput,firsttabData["expatcare-092"].emailInput,firsttabData["expatcare-092"].streetNameInput,firsttabData["expatcare-092"].streetNumberInput,firsttabData["expatcare-092"].postalCodeInput,firsttabData["expatcare-092"].additionalAddressInput,firsttabData["expatcare-092"].cityInput,firsttabData["expatcare-092"].dayInput,firsttabData["expatcare-092"].monthInput,firsttabData["expatcare-092"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-092"].StartdateInput,firsttabData["expatcare-092"].EnddateInput);
  })

  await test.step("Verified Premium displays when product plan get changed", async () => {
    await expatcarePage.verifyMalegenderpremiumforExpatcare(firsttabData["expatcare-092"].classicetext);

  })
   
page.close();
});

//93
test('NXGS-TC-5415: TC_093_Expatcare_3_Validate correct payment summary details displays when upto 9 insured member added in policy', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-092"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcaregenderchangeFirstTab(firsttabData["expatcare-092"].firstNameInput, firsttabData["expatcare-092"].lastNameInput,firsttabData["expatcare-092"].passportInput,firsttabData["expatcare-092"].mobileNumbercodeInput,firsttabData["expatcare-092"].mobileNumberInput,firsttabData["expatcare-092"].emailInput,firsttabData["expatcare-092"].streetNameInput,firsttabData["expatcare-092"].streetNumberInput,firsttabData["expatcare-092"].postalCodeInput,firsttabData["expatcare-092"].additionalAddressInput,firsttabData["expatcare-092"].cityInput,firsttabData["expatcare-092"].dayInput,firsttabData["expatcare-092"].monthInput,firsttabData["expatcare-092"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-092"].StartdateInput,firsttabData["expatcare-092"].EnddateInput);
  })

  await test.step("Verified Premium displays when product plan get changed", async () => {
    await expatcarePage.verifyMalegenderpremiumforExpatcare(firsttabData["expatcare-092"].classicetext);

  })
   
page.close();
});

//94
test('NXGS-TC-5416: TC_094_Expatcare_3_Validate with all details given in plan details (3rd tab), able to redirect to 4th', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-094"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcaregenderchangeFirstTab(firsttabData["expatcare-094"].firstNameInput, firsttabData["expatcare-094"].lastNameInput,firsttabData["expatcare-094"].passportInput,firsttabData["expatcare-094"].mobileNumbercodeInput,firsttabData["expatcare-094"].mobileNumberInput,firsttabData["expatcare-094"].emailInput,firsttabData["expatcare-094"].streetNameInput,firsttabData["expatcare-094"].streetNumberInput,firsttabData["expatcare-094"].postalCodeInput,firsttabData["expatcare-094"].additionalAddressInput,firsttabData["expatcare-094"].cityInput,firsttabData["expatcare-094"].dayInput,firsttabData["expatcare-094"].monthInput,firsttabData["expatcare-094"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-094"].StartdateInput,firsttabData["expatcare-094"].EnddateInput);
  })

  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
  })


   await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })
  
  await test.step("Verified text on Third tab as ' Payment method and checkout '", async () => {
    await expatcarePage.verifpaymentmethodandcheckouttextonthirstab(firsttabData["expatcare-094"].paymentmethodtext);

  })
   
page.close();
});

//95
test('NXGS-TC-5417: TC_095_Expatcare_3_Validate premium value is displays only after coverage duration selected', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-095"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcaregenderchangeFirstTab(firsttabData["expatcare-095"].firstNameInput, firsttabData["expatcare-095"].lastNameInput,firsttabData["expatcare-095"].passportInput,firsttabData["expatcare-095"].mobileNumbercodeInput,firsttabData["expatcare-095"].mobileNumberInput,firsttabData["expatcare-095"].emailInput,firsttabData["expatcare-095"].streetNameInput,firsttabData["expatcare-095"].streetNumberInput,firsttabData["expatcare-095"].postalCodeInput,firsttabData["expatcare-095"].additionalAddressInput,firsttabData["expatcare-095"].cityInput,firsttabData["expatcare-095"].dayInput,firsttabData["expatcare-095"].monthInput,firsttabData["expatcare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-095"].StartdateInput,firsttabData["expatcare-095"].EnddateInput);
  })

  await test.step("Click on  'Include coverage for USA & Canada' checkbox ", async () => {
    await expatcarePage.ClickonincludeciverageforUSAandCandaThirdtTab();
  })

  await test.step("Verified Premium value for 'Expatcare Excluding USA/Canada for Classic , Comfort and Premium '", async () => {
    await expatcarePage.verifyPremiumvaluesforExpatcareIncludinguptofourtytofiftyfiveyrs(firsttabData["expatcare-095"].classicefourtyyrstext,firsttabData["expatcare-095"].comfortefourtyyrsttext,firsttabData["expatcare-095"].premiumefourtyyrstext);

  })
page.close();
});

//96
test('NXGS-TC-5418: TC_096_Expatcare_3_Validate premium value not displays without coverage selection', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-095"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcaregenderchangeFirstTab(firsttabData["expatcare-095"].firstNameInput, firsttabData["expatcare-095"].lastNameInput,firsttabData["expatcare-095"].passportInput,firsttabData["expatcare-095"].mobileNumbercodeInput,firsttabData["expatcare-095"].mobileNumberInput,firsttabData["expatcare-095"].emailInput,firsttabData["expatcare-095"].streetNameInput,firsttabData["expatcare-095"].streetNumberInput,firsttabData["expatcare-095"].postalCodeInput,firsttabData["expatcare-095"].additionalAddressInput,firsttabData["expatcare-095"].cityInput,firsttabData["expatcare-095"].dayInput,firsttabData["expatcare-095"].monthInput,firsttabData["expatcare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-095"].StartdateInput,firsttabData["expatcare-095"].EnddateInput);
  })
    ////page.pause();
   
page.close();
});

//97
test('NXGS-TC-5419: TC_097_Expatcare_3_Validate without any details start date and end date fields in plan details (3rd tab), able to redirect to Payment method and checkout (4th tab)', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-095"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcaregenderchangeFirstTab(firsttabData["expatcare-095"].firstNameInput, firsttabData["expatcare-095"].lastNameInput,firsttabData["expatcare-095"].passportInput,firsttabData["expatcare-095"].mobileNumbercodeInput,firsttabData["expatcare-095"].mobileNumberInput,firsttabData["expatcare-095"].emailInput,firsttabData["expatcare-095"].streetNameInput,firsttabData["expatcare-095"].streetNumberInput,firsttabData["expatcare-095"].postalCodeInput,firsttabData["expatcare-095"].additionalAddressInput,firsttabData["expatcare-095"].cityInput,firsttabData["expatcare-095"].dayInput,firsttabData["expatcare-095"].monthInput,firsttabData["expatcare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Verified validation text on third tab", async () => {
    await expatcarePage.verifystartdateerrortext(firsttabData["expatcare-097"].errortext);
  })
   
page.close();
});

//98
test('NXGS-TC-5420: TC_098_Expatcare_3_Validate without any plan selection in plan details (3rd tab), able to redirect to Payment method and checkout (4th tab)', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-095"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcaregenderchangeFirstTab(firsttabData["expatcare-095"].firstNameInput, firsttabData["expatcare-095"].lastNameInput,firsttabData["expatcare-095"].passportInput,firsttabData["expatcare-095"].mobileNumbercodeInput,firsttabData["expatcare-095"].mobileNumberInput,firsttabData["expatcare-095"].emailInput,firsttabData["expatcare-095"].streetNameInput,firsttabData["expatcare-095"].streetNumberInput,firsttabData["expatcare-095"].postalCodeInput,firsttabData["expatcare-095"].additionalAddressInput,firsttabData["expatcare-095"].cityInput,firsttabData["expatcare-095"].dayInput,firsttabData["expatcare-095"].monthInput,firsttabData["expatcare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })

  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-095"].StartdateInput,firsttabData["expatcare-095"].EnddateInput);
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Verified error text as 'Invalid or missing information,please check your information and try again'", async () => {
    await expatcarePage.verifyNoanydetailsfillederrorText(firsttabData["expatcare-098"].lastnameErrormsg);
  })
   
page.close();
});

//99
test('NXGS-TC-5421: TC_099_Expatcare_3_Validate giving more than 5 years duration', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-095"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcaregenderchangeFirstTab(firsttabData["expatcare-095"].firstNameInput, firsttabData["expatcare-095"].lastNameInput,firsttabData["expatcare-095"].passportInput,firsttabData["expatcare-095"].mobileNumbercodeInput,firsttabData["expatcare-095"].mobileNumberInput,firsttabData["expatcare-095"].emailInput,firsttabData["expatcare-095"].streetNameInput,firsttabData["expatcare-095"].streetNumberInput,firsttabData["expatcare-095"].postalCodeInput,firsttabData["expatcare-095"].additionalAddressInput,firsttabData["expatcare-095"].cityInput,firsttabData["expatcare-095"].dayInput,firsttabData["expatcare-095"].monthInput,firsttabData["expatcare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })

  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-095"].StartdateInput,firsttabData["expatcare-095"].EnddateInput);
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Verified error text as 'Invalid or missing information,please check your information and try again'", async () => {
    await expatcarePage.verifyNoanydetailsfillederrorText(firsttabData["expatcare-098"].lastnameErrormsg);
  })
   
page.close();
});

//100
test('NXGS-TC-5422: TC_100_Expatcare_3_Validate in payment summary, additional member sorted with oldest DOB first displays in row', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-095"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcaregenderchangeFirstTab(firsttabData["expatcare-095"].firstNameInput, firsttabData["expatcare-095"].lastNameInput,firsttabData["expatcare-095"].passportInput,firsttabData["expatcare-095"].mobileNumbercodeInput,firsttabData["expatcare-095"].mobileNumberInput,firsttabData["expatcare-095"].emailInput,firsttabData["expatcare-095"].streetNameInput,firsttabData["expatcare-095"].streetNumberInput,firsttabData["expatcare-095"].postalCodeInput,firsttabData["expatcare-095"].additionalAddressInput,firsttabData["expatcare-095"].cityInput,firsttabData["expatcare-095"].dayInput,firsttabData["expatcare-095"].monthInput,firsttabData["expatcare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })

  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-095"].StartdateInput,firsttabData["expatcare-095"].EnddateInput);
  })
 
  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Verified error text as 'Invalid or missing information,please check your information and try again'", async () => {
    await expatcarePage.verifyNoanydetailsfillederrorText(firsttabData["expatcare-098"].lastnameErrormsg);
  })
   
page.close();
});

//101
test('NXGS-TC-5427: TC_101_Expatcare_4_Validate UI fields displays in payment details and checkout tab', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-101"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcaregenderchangeFirstTab(firsttabData["expatcare-101"].firstNameInput, firsttabData["expatcare-101"].lastNameInput,firsttabData["expatcare-095"].passportInput,firsttabData["expatcare-095"].mobileNumbercodeInput,firsttabData["expatcare-095"].mobileNumberInput,firsttabData["expatcare-095"].emailInput,firsttabData["expatcare-095"].streetNameInput,firsttabData["expatcare-095"].streetNumberInput,firsttabData["expatcare-095"].postalCodeInput,firsttabData["expatcare-095"].additionalAddressInput,firsttabData["expatcare-095"].cityInput,firsttabData["expatcare-095"].dayInput,firsttabData["expatcare-095"].monthInput,firsttabData["expatcare-095"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab Next Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })

  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-101"].StartdateInput,firsttabData["expatcare-101"].EnddateInput);
  })

  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
  })

   await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Verified text on fourth tab as ' Payment method and checkout '", async () => {
    await expatcarePage.verifpaymentmethodandcheckouttextonthirstab(firsttabData["expatcare-101"].paymentmethodtext);

  })

  await test.step("Verified text on Fourth tab as ' Select your payment option '", async () => {
    await expatcarePage.verifpaymentPaymentoptionfourthtab(firsttabData["expatcare-101"].paymentoptiontext);

  })

  await test.step("Verified text on Fourth tab as ' Credit Card '", async () => {
    await expatcarePage.verifycreditcardtextfourthtab(firsttabData["expatcare-101"].creditcardText);

  })

 
 await test.step("Verified text on Fourth tab as '  Important information  '", async () => {
    await expatcarePage.verifyimpinfotextfourthtab(firsttabData["expatcare-101"].impinfoText);

  })

 await test.step("Verified text on Fourth tab as '  Important information Discription  '", async () => {
    await expatcarePage.verifyimpinfodistextfourthtab(firsttabData["expatcare-101"].impinfodesText);

  })

  await test.step("Verified text on Fourth tab as ' I have read and hereby accept the   '", async () => {
    await expatcarePage.verifyCheckboconefourthtab(firsttabData["expatcare-101"].checkboxoneText);

  })

  await test.step("Verified text on Fourth tab as ' I consent to MAWISTA GmbH sending me information a   '", async () => {
    await expatcarePage.verifyCheckboxtwofourthtab(firsttabData["expatcare-101"].checkboxtwoText);

  })

  await test.step("Verified text on Fourth tab as ' Yes, I sufficiently informed myself about the product and I would like to continue without further consultation.   '", async () => {
    await expatcarePage.verifyCheckboxthirdfourthtab(firsttabData["expatcare-101"].checkboxthirdText);

  })
 
  await test.step("Verified Apply & Pay button visible on second tab", async () => {
    await expatcarePage.verifyfourthtabNextButton(firsttabData["expatcare-101"].secondtabNextButton);

  })

  await test.step("Verified Previous button visible on fourth tab", async () => {
    await expatcarePage.verifyfourthtabPreviousButton(firsttabData["expatcare-101"].secondtabPreviousButton);

  })  
 
page.close();
});

//102
test('NXGS-TC-5428: TC_102_Expatcare_4_Validate UI fields displays when SEPA direct debit option selected in payment method', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-102"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-102"].firstNameInput, firsttabData["expatcare-102"].lastNameInput,firsttabData["expatcare-102"].passportInput,firsttabData["expatcare-102"].mobileNumbercodeInput,firsttabData["expatcare-102"].mobileNumberInput,firsttabData["expatcare-102"].emailInput,firsttabData["expatcare-102"].streetNameInput,firsttabData["expatcare-102"].streetNumberInput,firsttabData["expatcare-102"].postalCodeInput,firsttabData["expatcare-102"].additionalAddressInput,firsttabData["expatcare-102"].cityInput,firsttabData["expatcare-102"].dayInput,firsttabData["expatcare-102"].monthInput,firsttabData["expatcare-102"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-102"].StartdateInput,firsttabData["expatcare-102"].EnddateInput);
  })

  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
  })


  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await expatcarePage.expatcarefilldebitcarddetailstTab(firsttabData["expatcare-102"].iban);
  })

  await test.step("Verified the visiblity of Name of Account holder and IBAN", async () => {
    await expatcarePage.verifydebitcarddettailstab();
  })
   
page.close();
});

//103
test('NXGS-TC-5429: TC_103_Expatcare_4_Validate UI fields displays when credit card option selected in payment method', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-103"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-103"].firstNameInput, firsttabData["expatcare-103"].lastNameInput,firsttabData["expatcare-103"].passportInput,firsttabData["expatcare-103"].mobileNumbercodeInput,firsttabData["expatcare-103"].mobileNumberInput,firsttabData["expatcare-103"].emailInput,firsttabData["expatcare-103"].streetNameInput,firsttabData["expatcare-103"].streetNumberInput,firsttabData["expatcare-103"].postalCodeInput,firsttabData["expatcare-103"].additionalAddressInput,firsttabData["expatcare-103"].cityInput,firsttabData["expatcare-103"].dayInput,firsttabData["expatcare-103"].monthInput,firsttabData["expatcare-103"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-103"].StartdateInput,firsttabData["expatcare-103"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })

  await test.step("Verified the visiblity of Name of Policy holder", async () => {
    await expatcarePage.verifcreditcardformtextfoonurthtab();
  })
   
  
page.close();
});

//104

test('NXGS-TC-5430: TC_104_Expatcare_4_Validate user able to purchase the Expatcare policy with all required details using sepa direct debit option in payment details with valid iban and checkout tab', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })
  ////page.pause();
  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await expatcarePage.expatcarefilldebitcarddetailstTab(firsttabData["expatcare-104"].iban);
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.expatcareclickonibanchkboxTab();
  })
  
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })

  await test.step("Vaerified all details on Thank you page ", async () => {
   await expatcarePage.verifyThankyoupageText(
    firsttabData["expatcare-104"].thankyouText);
    // firsttabData["expatcare-104"].requestText,
    // firsttabData["expatcare-104"].questionText,
    // firsttabData["expatcare-104"].infoText);
  })

page.close();
});

//105
test('NXGS-TC-5431: TC_105_Expatcare_4_Validate user able to purchase the Expatcare policy with all required details using credit card option in payment details and checkout tab', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-103"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-103"].firstNameInput, firsttabData["expatcare-103"].lastNameInput,firsttabData["expatcare-103"].passportInput,firsttabData["expatcare-103"].mobileNumbercodeInput,firsttabData["expatcare-103"].mobileNumberInput,firsttabData["expatcare-103"].emailInput,firsttabData["expatcare-103"].streetNameInput,firsttabData["expatcare-103"].streetNumberInput,firsttabData["expatcare-103"].postalCodeInput,firsttabData["expatcare-103"].additionalAddressInput,firsttabData["expatcare-103"].cityInput,firsttabData["expatcare-103"].dayInput,firsttabData["expatcare-103"].monthInput,firsttabData["expatcare-103"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-103"].StartdateInput,firsttabData["expatcare-103"].EnddateInput);
  })

  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
  })
  
  //page.pause();
  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })
   
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  //page.pause();
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })

  
  await test.step("Enter all details of credit card ", async () => {
    await expatcarePage.expatcareFilldetailsoncreditcardTab();
  })

  await test.step("Vaerified all details on Thank you page ", async () => {
    await expatcarePage.verifyThankyoupageText(
      firsttabData["expatcare-105"].thankyouText);
      // firsttabData["expatcare-105"].requestText,
      // firsttabData["expatcare-105"].questionText,
      // firsttabData["expatcare-105"].infoText);
  })

   
page.close();
});

//106
test('NXGS-TC-5432: TC_106_Expatcare_4_Validate when Expatcare policy created then policy status is shown under “Quotation Manual Review“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-103"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-103"].firstNameInput, firsttabData["expatcare-103"].lastNameInput,firsttabData["expatcare-103"].passportInput,firsttabData["expatcare-103"].mobileNumbercodeInput,firsttabData["expatcare-103"].mobileNumberInput,firsttabData["expatcare-103"].emailInput,firsttabData["expatcare-103"].streetNameInput,firsttabData["expatcare-103"].streetNumberInput,firsttabData["expatcare-103"].postalCodeInput,firsttabData["expatcare-103"].additionalAddressInput,firsttabData["expatcare-103"].cityInput,firsttabData["expatcare-103"].dayInput,firsttabData["expatcare-103"].monthInput,firsttabData["expatcare-103"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-103"].StartdateInput,firsttabData["expatcare-103"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })

  await test.step("Verified the visiblity of Name of Policy holder", async () => {
    await expatcarePage.verifcreditcardformtextfoonurthtab();
  })
   
page.close();
});

//107

test('NXGS-TC-5433: TC_107_Expatcare_4_Validate previous button functionality in payment details page“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await expatcarePage.expatcarefilldebitcarddetailstTab(firsttabData["expatcare-104"].iban);
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.expatcareclickonibanchkboxTab();
  })
  //page.pause();
  await test.step("Click on  Previous button of  fourth tab", async () => {
    await expatcarePage.clickOnsecondtabPreviousButton();
  })
  
  await test.step("Verified text on Third tab as ' Payment Details '", async () => {
    await expatcarePage.verifyPlandetailsText(firsttabData["expatcare-094"].plandetailstext);

  })
   
page.close();
});

//108
test('NXGS-TC-5434: TC_108_Expatcare_4_Validate after purchasing Expatcare policy, success page is generated“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxconseterrorText(firsttabData["expatcare-110"].errorconsentText);
    })
  
page.close();
});

//109
test('NXGS-TC-5435: TC_109_Expatcare_4_Validate when payment method not selected while purchasing Expatcare policy“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxconseterrorText(firsttabData["expatcare-110"].errorconsentText);
    })
 
page.close();
});

//110
test('NXGS-TC-5436: TC_110_Expatcare_4_Validate without mandatory consent check box checked, able to purchase Expatcare policy“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })
  //page.pause();
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxconseterrorText(firsttabData["expatcare-110"].errorconsentText);
    })
page.close();
});

//111
test('NXGS-TC-5437: TC_111_Expatcare_4_Validate giving invalid iban number given for SEPA direct debit option“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })
 
  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await expatcarePage.expatcarefilldebitcarddetailstTab(firsttabData["expatcare-111"].iban);
    await page.locator("//div[@class='hr-top hr-bottom']//h2[@class='mat-h2 mb-md ng-star-inserted']").click();
  })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyIbanerrorText(firsttabData["expatcare-111"].errorconsentText);
    })
 
page.close();
});

//112
test('NXGS-TC-5438: TC_112_Expatcare_4_Validate BIC field displays only when valid IBAN number given for SEPA direct debit option“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await expatcarePage.expatcarefilldebitcarddetailstTab(firsttabData["expatcare-104"].iban);
    await page.locator("//div[@class='hr-top hr-bottom']//h2[@class='mat-h2 mb-md ng-star-inserted']").click();
  })

  
  await test.step("Vaerified  BIC filed' ", async () => {
  await expatcarePage.verifyBICFiledText(firsttabData["expatcare-112"].bicfieldText);
  })
 
page.close();
});

//113
test('NXGS-TC-5439: TC_113_Expatcare_4_Validate when Expatcare policy is accepted then customer receives an email for policy acceptance“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxconseterrorText(firsttabData["expatcare-110"].errorconsentText);
    })
 
page.close();
});

//114
test('NXGS-TC-5440: TC_114_Expatcare_4_Validate when Expatcare policy is rejected then customer receives an email for policy rejection“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxconseterrorText(firsttabData["expatcare-110"].errorconsentText);
    })
page.close();
});

//115
test('NXGS-TC-5441: TC_115_Expatcare_4_Validate when SEPA direct debit selected then Direct Payment” pay way reflects on contract“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-115"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Comfort Plan ", async () => {
    await expatcarePage.clickOnComforttileofeightynineThirdTab();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await expatcarePage.expatcarefilldebitcarddetailstTab(firsttabData["expatcare-104"].iban);
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.expatcareclickonibanchkboxTab();
  })
  
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   // await page.waitForTimeout(10000);
  })

  await test.step("Vaerified all details on Thank you page ", async () => {
  await expatcarePage.verifyThankyoupageText(
    firsttabData["expatcare-104"].thankyouText);
    // firsttabData["expatcare-104"].requestText,
    // firsttabData["expatcare-104"].questionText,
    // firsttabData["expatcare-104"].infoText);
  })
 
page.close();
});

//116
test('NXGS-TC-5442: TC_116_Expatcare_4_Validate when credit card selected then credit card” pay way reflects on contract“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Comfort Plan ", async () => {
    await expatcarePage.clickOnComforttileofeightynineThirdTab();
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  //page.pause();
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })

  await test.step("Enter all details of credit card ", async () => {
    await expatcarePage.expatcareFilldetailsoncreditcardTab();
  })
  await test.step("Vaerified all details on Thank you page ", async () => {
  await expatcarePage.verifyThankyoupageText(
    firsttabData["expatcare-104"].thankyouText);
    // firsttabData["expatcare-104"].requestText,
    // firsttabData["expatcare-104"].questionText,
    // firsttabData["expatcare-104"].infoText);
  })
 
page.close();
});

//117
test('NXGS-TC-5443: TC_117_Expatcare_4_Validate when credit card option selected then in credit card pop-up scree, default credit card button is selected“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);   
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Comfort Plan ", async () => {
    await expatcarePage.clickOnComforttileofeightynineThirdTab();
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })
  //page.pause();
  await test.step("Varified  details on Credit Card Popop ", async () => {
    await expatcarePage.verifyCreditcardpopuptext(firsttabData["expatcare-117"].creditcardText);
    })
page.close();
});

//118
test('NXGS-TC-5444: TC_118_Expatcare_4_Validate when credit card option selected then in credit card pop-up scree, default card holder name displays“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Comfort Plan ", async () => {
    await expatcarePage.clickOnComforttileofeightynineThirdTab();
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })
  //page.pause();
  await test.step("Vaerified  details on Credit Card Popop ", async () => {
    await expatcarePage.verifyCreditcardholderNametext(firsttabData["expatcare-118"].creditcardNameText);
    })
page.close();
});

//119
test('NXGS-TC-5445: TC_119_Expatcare_4_Validate when credit card option selected then in credit card pop-up scree, default given email address displays“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-119"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-119"].firstNameInput, firsttabData["expatcare-119"].lastNameInput,firsttabData["expatcare-119"].passportInput,firsttabData["expatcare-119"].mobileNumbercodeInput,firsttabData["expatcare-119"].mobileNumberInput,firsttabData["expatcare-119"].emailInput,firsttabData["expatcare-119"].streetNameInput,firsttabData["expatcare-119"].streetNumberInput,firsttabData["expatcare-119"].postalCodeInput,firsttabData["expatcare-119"].additionalAddressInput,firsttabData["expatcare-119"].cityInput,firsttabData["expatcare-119"].dayInput,firsttabData["expatcare-119"].monthInput,firsttabData["expatcare-119"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-119"].StartdateInput,firsttabData["expatcare-119"].EnddateInput);
  })
  
  await test.step("Click on Comfort Plan ", async () => {
    await expatcarePage.clickOnComforttileofeightynineThirdTab();
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })
  //page.pause();
  await test.step("Vaerified  details on Credit Card Popop ", async () => {
    await expatcarePage.verifyCreditcardholderEmailtext(firsttabData["expatcare-119"].creditcardNameText);
    })
page.close();
});

//120
test('NXGS-TC-5446: TC_120_Expatcare_4_Validate when credit card option selected then in credit card pop-up scree, place holder text displays in Expiration date field“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-119"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-119"].firstNameInput, firsttabData["expatcare-119"].lastNameInput,firsttabData["expatcare-119"].passportInput,firsttabData["expatcare-119"].mobileNumbercodeInput,firsttabData["expatcare-119"].mobileNumberInput,firsttabData["expatcare-119"].emailInput,firsttabData["expatcare-119"].streetNameInput,firsttabData["expatcare-119"].streetNumberInput,firsttabData["expatcare-119"].postalCodeInput,firsttabData["expatcare-119"].additionalAddressInput,firsttabData["expatcare-119"].cityInput,firsttabData["expatcare-119"].dayInput,firsttabData["expatcare-119"].monthInput,firsttabData["expatcare-119"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-119"].StartdateInput,firsttabData["expatcare-119"].EnddateInput);
  })
  
  await test.step("Click on Comfort Plan ", async () => {
    await expatcarePage.clickOnComforttileofeightynineThirdTab();
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })
  //page.pause();
  await test.step("Vaerified  details on Credit Card Popop ", async () => {
    await expatcarePage.verifyCreditcardholderEmailtext(firsttabData["expatcare-119"].creditcardNameText);
    })
 
page.close();
});

//121
test('NXGS-TC-5447: TC_121_Expatcare_4_Validate user able to give credit card number using copy button functionality“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-103"].url);
     })
  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-103"].firstNameInput, firsttabData["expatcare-103"].lastNameInput,firsttabData["expatcare-103"].passportInput,firsttabData["expatcare-103"].mobileNumbercodeInput,firsttabData["expatcare-103"].mobileNumberInput,firsttabData["expatcare-103"].emailInput,firsttabData["expatcare-103"].streetNameInput,firsttabData["expatcare-103"].streetNumberInput,firsttabData["expatcare-103"].postalCodeInput,firsttabData["expatcare-103"].additionalAddressInput,firsttabData["expatcare-103"].cityInput,firsttabData["expatcare-103"].dayInput,firsttabData["expatcare-103"].monthInput,firsttabData["expatcare-103"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-103"].StartdateInput,firsttabData["expatcare-103"].EnddateInput);
  })

  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
  })
  //page.pause();
  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })
   
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  //page.pause();
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  }) 
  await test.step("Enter all details of credit card ", async () => {
    await expatcarePage.expatcareFilldetailsoncreditcardNumber();
  })
  //page.pause();
  await test.step("Vaerified  details on Credit Card Popop ", async () => {
    await expatcarePage.verifyCreditcardholderEmailtext(firsttabData["expatcare-119"].creditcardNameText);
    })

page.close();
});

//122
test('NXGS-TC-5448: TC_122_Expatcare_4_Validate user able to copy credit card number from right click option“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxconseterrorText(firsttabData["expatcare-110"].errorconsentText);
    })

page.close();
});

//123
test('NXGS-TC-5449: TC_123_Expatcare_4_Validate for security code field, able to verify security code as per given credit card details“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxconseterrorText(firsttabData["expatcare-110"].errorconsentText);
    })
page.close();
});

//124
test('NXGS-TC-5450: TC_124_Expatcare_4_Validate when credit card option selected then in credit card pop-up screen, user able to create Expatcare Policy with valid credit card number details“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-103"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-103"].firstNameInput, firsttabData["expatcare-103"].lastNameInput,firsttabData["expatcare-103"].passportInput,firsttabData["expatcare-103"].mobileNumbercodeInput,firsttabData["expatcare-103"].mobileNumberInput,firsttabData["expatcare-103"].emailInput,firsttabData["expatcare-103"].streetNameInput,firsttabData["expatcare-103"].streetNumberInput,firsttabData["expatcare-103"].postalCodeInput,firsttabData["expatcare-103"].additionalAddressInput,firsttabData["expatcare-103"].cityInput,firsttabData["expatcare-103"].dayInput,firsttabData["expatcare-103"].monthInput,firsttabData["expatcare-103"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-103"].StartdateInput,firsttabData["expatcare-103"].EnddateInput);
  })

  await test.step("Click on Premium Plan ", async () => {
    await expatcarePage.clickOnPremiumTile();
  })
   
  //page.pause();
  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })
   
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  //page.pause();
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })
  await test.step("Enter all details of credit card ", async () => {
    await expatcarePage.expatcareFilldetailsoncreditcardTab();
  })

  await test.step("Vaerified all details on Thank you page ", async () => {
    await expatcarePage.verifyThankyoupageText(
      firsttabData["expatcare-105"].thankyouText);
      // firsttabData["expatcare-105"].requestText,
      // firsttabData["expatcare-105"].questionText,
      // firsttabData["expatcare-105"].infoText);
  })

page.close();
});

//125
test('NXGS-TC-5451: TC_125_Expatcare_4_Validate in credit card number field, only valid credit card number accepts“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-103"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-103"].firstNameInput, firsttabData["expatcare-103"].lastNameInput,firsttabData["expatcare-103"].passportInput,firsttabData["expatcare-103"].mobileNumbercodeInput,firsttabData["expatcare-103"].mobileNumberInput,firsttabData["expatcare-103"].emailInput,firsttabData["expatcare-103"].streetNameInput,firsttabData["expatcare-103"].streetNumberInput,firsttabData["expatcare-103"].postalCodeInput,firsttabData["expatcare-103"].additionalAddressInput,firsttabData["expatcare-103"].cityInput,firsttabData["expatcare-103"].dayInput,firsttabData["expatcare-103"].monthInput,firsttabData["expatcare-103"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-103"].StartdateInput,firsttabData["expatcare-103"].EnddateInput);
  })

  await test.step("Click on Premium Plan ", async () => {
    await expatcarePage.clickOnPremiumTile();
  })
   
  //page.pause();
  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })
   
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  //page.pause();
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })
  await test.step("Enter all details of credit card ", async () => {
    await expatcarePage.expatcareFilldetailsoncreditcardTab();
  })

  await test.step("Vaerified all details on Thank you page ", async () => {
    await expatcarePage.verifyThankyoupageText(
      firsttabData["expatcare-105"].thankyouText);
  //     firsttabData["expatcare-105"].requestText,
  //     firsttabData["expatcare-105"].questionText,
  //     firsttabData["expatcare-105"].infoText);
  // })
    })
page.close();
});

//126
test('NXGS-TC-5452: TC_126_Expatcare_4_Validate in credit card number field, invalid credit card number not accepts“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-126"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-103"].firstNameInput, firsttabData["expatcare-103"].lastNameInput,firsttabData["expatcare-103"].passportInput,firsttabData["expatcare-103"].mobileNumbercodeInput,firsttabData["expatcare-103"].mobileNumberInput,firsttabData["expatcare-103"].emailInput,firsttabData["expatcare-103"].streetNameInput,firsttabData["expatcare-103"].streetNumberInput,firsttabData["expatcare-103"].postalCodeInput,firsttabData["expatcare-103"].additionalAddressInput,firsttabData["expatcare-103"].cityInput,firsttabData["expatcare-103"].dayInput,firsttabData["expatcare-103"].monthInput,firsttabData["expatcare-103"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-103"].StartdateInput,firsttabData["expatcare-103"].EnddateInput);
  })

  await test.step("Click on Premium Plan ", async () => {
    await expatcarePage.clickOnPremiumTile();
  })
   
  //page.pause();
  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })
   
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })
  await test.step("Enter all details of credit card ", async () => {
    await expatcarePage.expatcareFilldetailsoncreditcardoneTab();
  })
//page.pause();
  await test.step("Vaerified error message on Credit card form ", async () => {
    await expatcarePage.verifycreditcardnumbererrorText(firsttabData["expatcare-126"].errorText);
  })
page.close();
});

//127
test('NXGS-TC-5453: TC_127_Expatcare_4_Validate user is not able to create Expatcare Policy with invalid credit card number details“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxconseterrorText(firsttabData["expatcare-110"].errorconsentText);
    })
page.close();
});

//128
test('NXGS-TC-5454: TC_128_Expatcare_4_Validate user is unable to create Expatcare Policy with invalid value in month field of expiration date“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxconseterrorText(firsttabData["expatcare-110"].errorconsentText);
    })
  
page.close();
});

//129
test('NXGS-TC-5455: TC_129_Expatcare_4_Validate user is unable to create Expatcare Policy with invalid value in year field of expiration date“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-126"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-103"].firstNameInput, firsttabData["expatcare-103"].lastNameInput,firsttabData["expatcare-103"].passportInput,firsttabData["expatcare-103"].mobileNumbercodeInput,firsttabData["expatcare-103"].mobileNumberInput,firsttabData["expatcare-103"].emailInput,firsttabData["expatcare-103"].streetNameInput,firsttabData["expatcare-103"].streetNumberInput,firsttabData["expatcare-103"].postalCodeInput,firsttabData["expatcare-103"].additionalAddressInput,firsttabData["expatcare-103"].cityInput,firsttabData["expatcare-103"].dayInput,firsttabData["expatcare-103"].monthInput,firsttabData["expatcare-103"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-103"].StartdateInput,firsttabData["expatcare-103"].EnddateInput);
  })

  await test.step("Click on Premium Plan ", async () => {
    await expatcarePage.clickOnPremiumTile();
  })
   
  //page.pause();
  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })
   
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })
  await test.step("Enter all details of credit card ", async () => {
    await expatcarePage.expatcareFilldetailsoncreditcarddateTab();
  })
//page.pause();
  await test.step("Vaerified error message on Credit card form ", async () => {
    await expatcarePage.verifycreditcardexpirtdateerrorText(firsttabData["expatcare-126"].errorText);
  })
page.close();
});

//130
test('NXGS-TC-5456: TC_130_Expatcare_4_Validate user able to create Expatcare Policy with invalid value in security code field“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-126"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-103"].firstNameInput, firsttabData["expatcare-103"].lastNameInput,firsttabData["expatcare-103"].passportInput,firsttabData["expatcare-103"].mobileNumbercodeInput,firsttabData["expatcare-103"].mobileNumberInput,firsttabData["expatcare-103"].emailInput,firsttabData["expatcare-103"].streetNameInput,firsttabData["expatcare-103"].streetNumberInput,firsttabData["expatcare-103"].postalCodeInput,firsttabData["expatcare-103"].additionalAddressInput,firsttabData["expatcare-103"].cityInput,firsttabData["expatcare-103"].dayInput,firsttabData["expatcare-103"].monthInput,firsttabData["expatcare-103"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-103"].StartdateInput,firsttabData["expatcare-103"].EnddateInput);
  })

  await test.step("Click on Premium Plan ", async () => {
    await expatcarePage.clickOnPremiumTile();
  })
   
  //page.pause();
  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })
   
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })
  await test.step("Enter all details of credit card ", async () => {
    await expatcarePage.expatcareFilldetailsoncreditcarddateTab();
  })
//page.pause();
  await test.step("Vaerified error message on Credit card form ", async () => {
    await expatcarePage.verifysecuirtyerrorText(firsttabData["expatcare-126"].errorText);
  })
page.close();
});

//131
test('NXGS-TC-5457: TC_131_Expatcare_4_Validate user able to create Expatcare Policy with invalid value in postal code field“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxconseterrorText(firsttabData["expatcare-110"].errorconsentText);
    })
  
 
page.close();
});

//132
test('NXGS-TC-5458: TC_132_Expatcare_4_Validate user able to create Expatcare Policy with invalid email address field“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxconseterrorText(firsttabData["expatcare-110"].errorconsentText);
    })
  
page.close();
});

//133
test('NXGS-TC-5459: TC_133_Expatcare_4_Validate user able to create Expatcare Policy without any details in credit card pop-up screen“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxconseterrorText(firsttabData["expatcare-110"].errorconsentText);
    })
  
page.close();
});

//134
test('NXGS-TC-5460: TC_134_Expatcare_4_Validate user able to create Expatcare Policy with valid credit card details after session expired“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxconseterrorText(firsttabData["expatcare-110"].errorconsentText);
    })
  
page.close();
});

//135 Expatcare policy with valid CC details
test('NXGS-TC-5461: TC_135_Expatcare_4_Validate user able to create Expatcare Policy with valid credit card details within active session“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Fill Iban Details", async ()=>{
    await expatcarePage.expatcarefilldebitcarddetailstTab(firsttabData["expatcare-104"].iban);
})

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxconseterrorText(firsttabData["expatcare-110"].errorconsentText);
    })

page.close();
});

//136
test('NXGS-TC-5462: TC_136_Expatcare_4_Validate user able to create Expatcare Policy when click on cancel button present in credit card pop-up screen“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-103"].url);
   })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-103"].firstNameInput, firsttabData["expatcare-103"].lastNameInput,firsttabData["expatcare-103"].passportInput,firsttabData["expatcare-103"].mobileNumbercodeInput,firsttabData["expatcare-103"].mobileNumberInput,firsttabData["expatcare-103"].emailInput,firsttabData["expatcare-103"].streetNameInput,firsttabData["expatcare-103"].streetNumberInput,firsttabData["expatcare-103"].postalCodeInput,firsttabData["expatcare-103"].additionalAddressInput,firsttabData["expatcare-103"].cityInput,firsttabData["expatcare-103"].dayInput,firsttabData["expatcare-103"].monthInput,firsttabData["expatcare-103"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-103"].StartdateInput,firsttabData["expatcare-103"].EnddateInput);
  })

  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnPremiumTile();
  })
  
  //page.pause();
  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })
   
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  //page.pause();
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })
  await test.step("Click on Cancel button ", async () => {
    await expatcarePage.clickOnCancelbuttononCreditcard();
  })
  await test.step("Verified text on Third tab as ' Payment method and checkout '", async () => {
    await expatcarePage.verifpaymentmethodandcheckouttextonthirstab(firsttabData["expatcare-094"].paymentmethodtext);
  })

page.close();
});

//137
test('NXGS-TC-5463: TC_137_Expatcare_4_Validate without payment details and consent details, able to purchase policy“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-103"].url);
   })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-103"].firstNameInput, firsttabData["expatcare-103"].lastNameInput,firsttabData["expatcare-103"].passportInput,firsttabData["expatcare-103"].mobileNumbercodeInput,firsttabData["expatcare-103"].mobileNumberInput,firsttabData["expatcare-103"].emailInput,firsttabData["expatcare-103"].streetNameInput,firsttabData["expatcare-103"].streetNumberInput,firsttabData["expatcare-103"].postalCodeInput,firsttabData["expatcare-103"].additionalAddressInput,firsttabData["expatcare-103"].cityInput,firsttabData["expatcare-103"].dayInput,firsttabData["expatcare-103"].monthInput,firsttabData["expatcare-103"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-103"].StartdateInput,firsttabData["expatcare-103"].EnddateInput);
  })

  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnPremiumTile();
  })
  
  //page.pause();
  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })
   
  //page.pause();
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })
  await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxerrorText(firsttabData["expatcare-110"].errorconsentText);
    })
page.close();
});

//138
test('NXGS-TC-5464: TC_138_Expatcare_4_Validate tab button functionality in every page“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxconseterrorText(firsttabData["expatcare-110"].errorconsentText);
    })
page.close();
});

//139
test('NXGS-TC-5465: TC_139_Expatcare_4_Validate using EN language option , all field label,content is correctly displaying in every tab“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-001"].url);
    
  })

   await test.step("Verified first tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-001"].expectedPageTitle);
  })

  await test.step("Verified text on first tab as 'Application for MAWISTA Expatcare'", async () => {
    await expatcarePage.verifyAplicationFirstTabText(firsttabData["expatcare-001"].applicationText);

  })

  await test.step("Verified  text on first tab as ' Policyholder's details '", async () => {
    await expatcarePage.verifyPolicbyholderdetailsFirstTaext(firsttabData["expatcare-001"].policyholderText);

  })
  
  await test.step("Verified text on first tab as ' Policyholder's address in Germany '", async () => {
    await expatcarePage.verifyaddanotherinsuredPersonButton(firsttabData["expatcare-001"].policyholderaddressText);

  })

  await test.step("Verified text on first tab as '  Are you the insured person? '", async () => {
    await expatcarePage.verifyAreyouinsuredpersonFirstText(firsttabData["expatcare-001"].areyouinsuredpersonText);

  })

  await test.step("Verified text on first tab as '   Enter your date of birth and gender  '", async () => {
    await expatcarePage.verifyEnteryourdateofbirthFirstText(firsttabData["expatcare-001"].enterdateofbirthText);

  })

  await test.step("Verified Next button visible and clickable on second tab", async () => {
    await expatcarePage.verifysecondtabNextButton(firsttabData["expatcare-001"].secondtabNextButton);

  })
page.close();
});

//140
test('NXGS-TC-5466: TC_140_Expatcare_4_Validate using DE language option , all field label,content is correctly displaying in every tab“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-139"].url);
    
  })

  await test.step("Click on language Button ", async () => {
    await expatcarePage.clickOnLanguagechnageButton();
  })

  await test.step("Click on Expatcare program", async () => {
    await expatcarePage.clickOnExpectcareprogram();
  })
 
   await test.step("Verified first tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-139"].expectedPageTitle);
  })

  
page.close();
});

//141
test('NXGS-TC-5467: TC_141_Expatcare_4_Validate menu option present at right top corner“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-139"].url);
    
  })

  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnLanguagechnageButton();
  })

  await test.step("Click on Expatcare program", async () => {
    await expatcarePage.clickOnExpectcareprogram();
  })
 
   await test.step("Verified first tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-139"].expectedPageTitle);
  })
page.close();
});

//142
test('NXGS-TC-5468: TC_142_Expatcare_4_Validate able to create Expatcare policy with DE language', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-103"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-103"].firstNameInput, firsttabData["expatcare-103"].lastNameInput,firsttabData["expatcare-103"].passportInput,firsttabData["expatcare-103"].mobileNumbercodeInput,firsttabData["expatcare-103"].mobileNumberInput,firsttabData["expatcare-103"].emailInput,firsttabData["expatcare-103"].streetNameInput,firsttabData["expatcare-103"].streetNumberInput,firsttabData["expatcare-103"].postalCodeInput,firsttabData["expatcare-103"].additionalAddressInput,firsttabData["expatcare-103"].cityInput,firsttabData["expatcare-103"].dayInput,firsttabData["expatcare-103"].monthInput,firsttabData["expatcare-103"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
 
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-103"].StartdateInput,firsttabData["expatcare-103"].EnddateInput);
  })

  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
  })
  
  
  //page.pause();
  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })
   
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCreditcardradioButton();
  })

  await test.step("Select checkboxes on  fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  //page.pause();
  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })

  
  await test.step("Enter all details of credit card ", async () => {
    await expatcarePage.expatcareFilldetailsoncreditcardTab();
  })

  await test.step("Vaerified all details on Thank you page ", async () => {
    await expatcarePage.verifyThankyoupageText(
      firsttabData["expatcare-105"].thankyouText);
      // firsttabData["expatcare-105"].requestText,
      // firsttabData["expatcare-105"].questionText,
      // firsttabData["expatcare-105"].infoText);
  })

   
page.close();
});

//143
test('NXGS-TC-5469: TC_143_Expatcare_4_Validate chinese language displays from language menu“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-139"].url);
  })
  await test.step("Click on  Credit card radio Button on fourth tab", async () => {
    await expatcarePage.clickOnLanguagechnageButton();
  })

   await test.step("Verified first tab page title text as 'Online application Expatcare - MAWISTA'", async () => {
    await expatcarePage.verifyPageTitle(firsttabData["expatcare-139"].expectedPageTitle);
  })

  await test.step("Vaerified  chinese language displays from language menu", async () => {
    await expatcarePage.verifyChineslanguageText(firsttabData["expatcare-143"].chinesText);
  })

page.close();
});

//144
test('NXGS-TC-5470: TC_144_Expatcare_4_Validate BIC field displays only when valid IBAN number given for SEPA direct debit option“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await expatcarePage.expatcarefilldebitcarddetailstTab(firsttabData["expatcare-104"].iban);
    await page.locator("//div[@class='hr-top hr-bottom']//h2[@class='mat-h2 mb-md ng-star-inserted']").click();
  })

  
  await test.step("Vaerified  BIC filed' ", async () => {
  await expatcarePage.verifyBICFiledText(firsttabData["expatcare-112"].bicfieldText);
  })
 
page.close();
});

//145
test('NXGS-TC-5471: TC_145_Expatcare_4_Validate giving invalid iban number given for SEPA direct debit option“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })
 
  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await expatcarePage.expatcarefilldebitcarddetailstTab(firsttabData["expatcare-111"].iban);
    await page.locator("//div[@class='hr-top hr-bottom']//h2[@class='mat-h2 mb-md ng-star-inserted']").click();
  })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyIbanerrorText(firsttabData["expatcare-111"].errorconsentText);
    })
 
page.close();
});

//146
test('NXGS-TC-5472: TC_146_Expatcare_4_Validate giving invalid and not SEPA iban number given for SEPA direct debit option for DE language selection“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })
 
  await test.step("Enter ame of Account holder and IBAN ", async () => {
    await expatcarePage.expatcarefilldebitcarddetailstTab(firsttabData["expatcare-111"].iban);
    await page.locator("//div[@class='hr-top hr-bottom']//h2[@class='mat-h2 mb-md ng-star-inserted']").click();
  })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyIbanerrorText(firsttabData["expatcare-111"].errorconsentText);
    })
 
page.close();
});

//147
test('NXGS-TC-5473: TC_147_Expatcare_4_Validate default policy holder name displays in  Account holder name field“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  
  await test.step("Varified Account holder name filed' ", async () => {
  await expatcarePage.verifyAccountholdernameText(firsttabData["expatcare-147"].accountholdeText);
  })
 
page.close();
});

//148
test('NXGS-TC-5474: C_148_Expatcare_4_Validate when SEPA direct debit  selected then payment information get saved in policy details“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  
  await test.step("Vaerified account holder name filed' ", async () => {
  await expatcarePage.verifyAccountholdernameText(firsttabData["expatcare-147"].accountholdeText);
  })
 
page.close();
});

//149
test('NXGS-TC-5475: TC_149_Expatcare_4_Validate when credit card selected then credit card” as payment information get saved in policy details“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxconseterrorText(firsttabData["expatcare-110"].errorconsentText);
    })
 
page.close();
});

//150
test('NXGS-TC-5476: TC_150_Expatcare_4_Validate initial payment is not deducted when Expatcare policy purchase by credit card“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
    
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassiccTile();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
   })

   await test.step("Vaerified error text as 'Please confirm your acceptance ' ", async () => {
    await expatcarePage.verifyCheckboxconseterrorText(firsttabData["expatcare-110"].errorconsentText);
    })
 
page.close();
});

//152
test('NXGS-TC-5478: TC_152_Syncro_Manage policies_Validate as per given details in B2C portal  same policy details shown in edit page“', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
 const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await expatcarePage.enterpolicydetails(firsttabData["expatcare-152"].policyIdText);
  })

  await test.step("Verified policy details on Syncro portal ", async () => {
   // await expatcarePage.verifyPolicyholderdetailstext(firsttabData["expatcare-152"].policyholdernameText,firsttabData["expatcare-152"].countrytext);
    await expatcarePage.verifyPolicyholderdetailstext(firsttabData["expatcare-152"].policyholdernameText,firsttabData["expatcare-152"].citytext,firsttabData["expatcare-152"].policyholderemailtext,firsttabData["expatcare-152"].policyholderphonetext,firsttabData["expatcare-152"].effectivedate,firsttabData["expatcare-152"].edenddate);
    })

  page.close();
});

//153
test('NXGS-TC-5479: TC_153_Syncro_Manage policies_Validate as per given details in B2C portal  same policy details shown in edit page“', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
 const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await expatcarePage.enterpolicydetails(firsttabData["expatcare-152"].policyIdText);
  })

  await test.step("Verified policy details on Syncro portal ", async () => {
   // await expatcarePage.verifyPolicyholderdetailstext(firsttabData["expatcare-152"].policyholdernameText,firsttabData["expatcare-152"].countrytext);
    await expatcarePage.verifyPolicyholderdetailstext(firsttabData["expatcare-152"].policyholdernameText,firsttabData["expatcare-152"].citytext,firsttabData["expatcare-152"].policyholderemailtext,firsttabData["expatcare-152"].policyholderphonetext,firsttabData["expatcare-152"].effectivedate,firsttabData["expatcare-152"].edenddate);
    })

  page.close();
});

//154
test('NXGS-TC-5480: TC_154_Syncro_Manage policies_Validate Expatcare policy status when policy  is  accepted“', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
 const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await expatcarePage.enterpolicydetail(firsttabData["expatcare-154"].policyIdText);
  })

  await test.step("verify  policy status on Syncro portal ", async () => {
   
      await expatcarePage.verifyNewPolicystatusrejecttext(firsttabData["expatcare-154"].policyIdText,firsttabData["expatcare-154"].policystatusText);
    
  })

  page.close();
});

//155
test('NXGS-TC-5481: TC_155_Syncro_Manage policies_Validate Expatcare policy status when policy  is  rejected“', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
 const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await expatcarePage.enterpolicydetail(firsttabData["expatcare-155"].policyIdText);
  })

  await test.step("Verified policy status on Syncro portal ", async () => {
    await expatcarePage.verifyPolicystatusrejecttext(firsttabData["expatcare-155"].policystatusText);
    })

  page.close();
});

//156
test('NXGS-TC-5482: TC_156_Syncro_Manage policies_Validate correct premium displays in syncro for Expatcare Classic plan purchase “', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
 const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await expatcarePage.enterpolicydetail(firsttabData["expatcare-156"].policyIdText);
  })

  await test.step("Verified policy status on Syncro portal ", async () => {
    await expatcarePage.verifyPolicyprmiumclassictext(firsttabData["expatcare-156"].policypremiumText);
    })

  page.close();
});

//157
test('NXGS-TC-5483: TC_157_Syncro_Manage policies_Validate correct premium displays in syncro for Expatcare Premium plan purchase from B2C “', async ({ page }) => {
const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
 const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await expatcarePage.enterpolicydetail(firsttabData["expatcare-157"].policyIdText);
  })

  await test.step("Verified policy status on Syncro portal ", async () => {
    await expatcarePage.verifyPolicyprmiumprmiumtext(firsttabData["expatcare-157"].policypremiumText);
    })

  page.close();
});

//158
test('NXGS-TC-5484: TC_158_Syncro_Manage policies_Validate correct premium displays in syncro for Expatcare Comfort and laibility plan purchase “', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
 const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await expatcarePage.enterpolicydetail(firsttabData["expatcare-158"].policyIdText);
  })

  await test.step("Verified policy status on Syncro portal ", async () => {
    await expatcarePage.verifyPolicyprmiumcomforttext(firsttabData["expatcare-158"].policypremiumText);
    })

  page.close();
});

//159
test('NXGS-TC-5485: TC_159_Expatcare_1_Validate creatingExpatcare policy using bank transfer “', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
 const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await expatcarePage.enterpolicydetail(firsttabData["expatcare-158"].policyIdText);
  })

  await test.step("Verified policy status on Syncro portal ", async () => {
    await expatcarePage.verifyPolicyprmiumcomforttext(firsttabData["expatcare-158"].policypremiumText);
    })

  page.close();
});

//160
test('NXGS-TC-5486: TC_160_Expactcare_4_Validate UI fileds on Thank you page “', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
 const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await expatcarePage.enterpolicydetail(firsttabData["expatcare-158"].policyIdText);
  })

  await test.step("Verified policy status on Syncro portal ", async () => {
    await expatcarePage.verifyPolicyprmiumcomforttext(firsttabData["expatcare-158"].policypremiumText);
    })

  page.close();
});

//161
test('NXGS-TC-5648: TC_161_Syncro_Manage policies_Validate as per given details in B2C portal  same policy details shown in edit page“', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
 const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await expatcarePage.enterpolicydetails(firsttabData["expatcare-152"].policyIdText);
  })

  await test.step("Verified policy details on Syncro portal ", async () => {
   // await expatcarePage.verifyPolicyholderdetailstext(firsttabData["expatcare-152"].policyholdernameText,firsttabData["expatcare-152"].countrytext);
    await expatcarePage.verifyPolicyholderdetailstext(firsttabData["expatcare-152"].policyholdernameText,firsttabData["expatcare-152"].citytext,firsttabData["expatcare-152"].policyholderemailtext,firsttabData["expatcare-152"].policyholderphonetext,firsttabData["expatcare-152"].effectivedate,firsttabData["expatcare-152"].edenddate);
    })

  page.close();
});

//162
test('NXGS-TC-5649: TC_162_Syncro_Manage policies_Validate as per given details in B2C portal  same policy details shown in edit page“', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
 const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await expatcarePage.enterpolicydetails(firsttabData["expatcare-152"].policyIdText);
  })

  await test.step("Verified policy details on Syncro portal ", async () => {
   // await expatcarePage.verifyPolicyholderdetailstext(firsttabData["expatcare-152"].policyholdernameText,firsttabData["expatcare-152"].countrytext);
    await expatcarePage.verifyPolicyholderdetailstext(firsttabData["expatcare-152"].policyholdernameText,firsttabData["expatcare-152"].citytext,firsttabData["expatcare-152"].policyholderemailtext,firsttabData["expatcare-152"].policyholderphonetext,firsttabData["expatcare-152"].effectivedate,firsttabData["expatcare-152"].edenddate);
    })

  page.close();
});

//163
test('NXGS-TC-5650: TC_163_Syncro_Manage policies_Validate Expatcare policy status when policy  is  accepted“', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
 const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await expatcarePage.enterpolicydetail(firsttabData["expatcare-154"].policyIdText);
  })

  await test.step("verify  policy status on Syncro portal ", async () => {
    await expatcarePage.verifyNewPolicystatusrejecttext(firsttabData["expatcare-154"].policyIdText,firsttabData["expatcare-154"].policystatusText);
  
})

  page.close();
});

//165
test('NXGS-TC-5651: TC_165_Syncro_Manage policies_Validate Expatcare policy status when policy  is  rejected“', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
 const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await expatcarePage.enterpolicydetail(firsttabData["expatcare-155"].policyIdText);
  })

  await test.step("Verified policy status on Syncro portal ", async () => {
    await expatcarePage.verifyPolicystatusrejecttext(firsttabData["expatcare-155"].policystatusText);
    })

  page.close();
});

//166
test('NXGS-TC-5652: TC_166_Syncro_Manage policies_Validate correct premium displays in syncro for Expatcare Classic plan purchase “', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
 const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await expatcarePage.enterpolicydetail(firsttabData["expatcare-156"].policyIdText);
  })

  await test.step("Verified policy status on Syncro portal ", async () => {
    await expatcarePage.verifyPolicyprmiumclassictext(firsttabData["expatcare-156"].policypremiumText);
    })

  page.close();
});

//167
test('NXGS-TC-5653: TC_167_Syncro_Manage policies_Validate correct premium displays in syncro for Expatcare Premium plan purchase from B2C “', async ({ page }) => {
  const syncrologinPage: SyncroLoginPage = new SyncroLoginPage(page);
 const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  await test.step("Load the URL in Browser", async () => {
    await syncrologinPage.gotoHomePage(loginbData["Login-Access-001"].url);
    
  })

  await test.step("Enter Username and Password", async () => {
    await syncrologinPage.filllogindetails(loginbData["Login-Access-001"].userNameInput, loginbData["Login-Access-001"].passwordInput);
  })

  await test.step("Enter Policy number and click on search", async () => {
    await expatcarePage.enterpolicydetail(firsttabData["expatcare-157"].policyIdText);
  })

  await test.step("Verified policy status on Syncro portal ", async () => {
    await expatcarePage.verifyPolicyprmiumprmiumtext(firsttabData["expatcare-157"].policypremiumText);
    })

  page.close();
});

//Ashwini
//151 - Policy via DD payment method
test('NXGS-TC-5477: C_151_Expatcare_4_Validate the email template and document sent in customer mail when Expatcare policy purchase“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  const syncroEUPage: SyncroEUPage = new SyncroEUPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url2);
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(
      firsttabData["expatcare-104"].firstNameInput,
      firsttabData["expatcare-104"].lastNameInput,
      firsttabData["expatcare-104"].passportInput,
      firsttabData["expatcare-104"].mobileNumbercodeInput,
      firsttabData["expatcare-104"].mobileNumberInput,
      firsttabData["expatcare-104"].emailInput,
      firsttabData["expatcare-104"].streetNameInput,
      firsttabData["expatcare-104"].streetNumberInput,
      firsttabData["expatcare-104"].postalCodeInput,
      firsttabData["expatcare-104"].additionalAddressInput,
      firsttabData["expatcare-104"].cityInput,
      firsttabData["expatcare-104"].dayInput,
      firsttabData["expatcare-104"].monthInput,
      firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })


  //  //Add one additional member
  //   await test.step("Click on Add another insured person Button ", async () => {
  //     await expatcarePage.clickOnAddanotherinsuredpersonButton();
  //   })
   
  //   await test.step("Enter Additional insured person information", async () => {
  //     await expatcarePage.expatcaresecondtTabOneMemberDetail(
  //       firsttabData["expatcare-105"].firstNameInput,
  //        firsttabData["expatcare-105"].lastNameInput,
  //        firsttabData["expatcare-105"].passportInput,
  //        firsttabData["expatcare-105"].dayInput,
  //        firsttabData["expatcare-105"].monthInput,
  //        firsttabData["expatcare-105"].yearInput);
  //   })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })

   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(
      firsttabData["expatcare-104"].StartdateInput,
      firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassictileofThirdTab();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnDirectdebittButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.expatcarefilldebitcarddetailstTab(firsttabData["expatcare-104"].iban);
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.expatcareclickonibanchkboxTab();
  })
  
  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })

  await test.step("Vaerified all details on Thank you page ", async () => {
    await expatcarePage.verifyThankyoupageText(
      firsttabData["expatcare-104"].thankyouText);
      // firsttabData["expatcare-104"].requestText,
      // firsttabData["expatcare-104"].questionText,
      // firsttabData["expatcare-104"].infoText);
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


// 168 working Expatcare Policy via CC payment method
test('NXGS-TC-5430: TC_168_Expatcare_4_Validate user able to purchase the Expatcare policy with all required details using sepa direct debit option in payment details with valid iban and checkout tab', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  const syncroEUPage: SyncroEUPage = new SyncroEUPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url2);
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTab(
      firsttabData["expatcare-104"].firstNameInput, 
      firsttabData["expatcare-104"].lastNameInput,
      firsttabData["expatcare-104"].passportInput,
      firsttabData["expatcare-104"].mobileNumbercodeInput,
      firsttabData["expatcare-104"].mobileNumberInput,
      firsttabData["expatcare-104"].emailInput,
      firsttabData["expatcare-104"].streetNameInput,
      firsttabData["expatcare-104"].streetNumberInput,
      firsttabData["expatcare-104"].postalCodeInput,
      firsttabData["expatcare-104"].additionalAddressInput,
      firsttabData["expatcare-104"].cityInput,
      firsttabData["expatcare-104"].dayInput,
      firsttabData["expatcare-104"].monthInput,
      firsttabData["expatcare-104"].yearInput);
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButton();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(
      firsttabData["expatcare-104"].StartdateInput,
      firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnComforttileofThirdTab();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButton();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCreditcardradioButton();
  })
  
  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnCheckboxesonfourthtab();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyandPayButton();
  })

  await test.step("Click on  Credit card details", async () => {
    await expatcarePage.expatcareFilldetailsoncreditcardTab();
  })

  await test.step("Vaerified all details on Thank you page ", async () => {
    await expatcarePage.verifyThankyoupageText(
      firsttabData["expatcare-104"].thankyouText);
  //     firsttabData["expatcare-104"].requestText,
  //     firsttabData["expatcare-104"].questionText,
  //     firsttabData["expatcare-104"].infoText);
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

//BT Payement *working*
test('NXGS-TC-001: C_151_Expatcare_4_Validate the email template and document sent in customer mail when Expatcare policy purchase“', async ({ page }) => {
  const expatcarePage: ExpatcarePage = new ExpatcarePage(page);
  const syncroEUPage: SyncroEUPage = new SyncroEUPage(page);
  
  await test.step("Load the URL in Browser", async () => {
    await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url1);
  })

  await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
    await expatcarePage.expatcareFirstTabBTPolicy(
    firsttabData["expatcare-104"].firstNameInput,
     firsttabData["expatcare-104"].lastNameInput,
     firsttabData["expatcare-104"].passportInput,
     firsttabData["expatcare-104"].mobileNumbercodeInput,
     firsttabData["expatcare-104"].mobileNumberInput,
     firsttabData["expatcare-104"].emailInput,
     firsttabData["expatcare-104"].streetNameInput,
     firsttabData["expatcare-104"].streetNumberInput,
     firsttabData["expatcare-104"].postalCodeInput,
     firsttabData["expatcare-104"].additionalAddressInput,
     firsttabData["expatcare-104"].cityInput,
     firsttabData["expatcare-104"].dayInput,
     firsttabData["expatcare-104"].monthInput,
     firsttabData["expatcare-104"].yearInput
    );
  })

  await test.step("Click on First Tab Next Button ", async () => {
    await expatcarePage.clickOnFirstTabNextButton();
  })

  await test.step("Click on Second Tab  Button ", async () => {
    await expatcarePage.clickOnsecondtabNextButtonBTPolicy();
  })
   // //page.pause();
  await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
    await expatcarePage.expatcaresStartandEnddateonThirdtTab(
      firsttabData["expatcare-104"].StartdateInput,
      firsttabData["expatcare-104"].EnddateInput);
  })
  
  await test.step("Click on Classic Plan ", async () => {
    await expatcarePage.clickOnClassictileofThirdTab();
   // await page.waitForTimeout(10000);
  })

  await test.step("Click on Third Tab Next Button ", async () => {
    await expatcarePage.clickOnThirdTabNextButtonBTPolicy();
  })

  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnBankTransferradioButton();
  })

  // await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
  //   await expatcarePage.expatcarefilldebitcarddetailstTab(firsttabData["expatcare-104"].iban);
  // })

  // await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
  //   await expatcarePage.expatcareclickonibanchkboxTab();
  // })
  
  await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
    await expatcarePage.clickOnBTPolicyDeclarationCheckboxes();
  })

  await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
    await expatcarePage.clickOnApplyAndPayForBTPolicy();
  })

  await test.step("Vaerified all details on Thank you page ", async () => {
    await expatcarePage.checkThankYouPageTextForBTPolicy(firsttabData["expatcare-104"].thankyouText);
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