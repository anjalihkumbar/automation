import { Expect,test } from "@playwright/test";

import { StudentPage } from "../../page-objects/Student-pages/first-page";
import { SyncroEUPage } from "../../page-objects/syncroEU-pages/first-page";

const firsttabData = require(`../../testdata/${process.env.ENV || 'data_test_eu'}/student.json`) as Record<string, any>;
export const syncData = require(`../../testdata/${process.env.ENV || 'data_test_eu'}/syncroeu.json`) as Record<string, any>;

//1

test('NXGS-TC-4083: TC_001_Student_1_Validate UI fields displays when Student policy selected in 1st page', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    await test.step("Verfied page title", async() =>{
    await studentPage.varifyPageTitle(firsttabData["student-001"].expectedPageTitle);
    })

    await test.step("Verfied application text", async() =>{
    await studentPage.varifyapplicationText(firsttabData["student-001"].applicationText);
    })

   
    await test.step("Verfied policyholder text", async() =>{
        await studentPage.varifypolicyholderText(firsttabData["student-001"].policyholderText);
    })

    await test.step("Verfied policyholder addreess text", async() =>{
        await studentPage.varifypolicyholderaddressText(firsttabData["student-001"].policyholderaddressText);
    })

    await test.step("Verfied areyouinsuredperson text", async() =>{
        await studentPage.varifyareyouinsuredpersonText(firsttabData["student-001"].areyouinsuredpersonText);
    })
    
    await test.step("Verfied enterdateofbirthText text", async() =>{
        await studentPage.varifyenterdateofbirthText(firsttabData["student-001"].enterdateofbirthText);
    })

    await test.step("Verfied studydetails text", async() =>{
        await studentPage.varifystudydetailsText(firsttabData["student-001"].studydetailsText);
    })

    await test.step("Verfied coursedetails text", async() =>{
        await studentPage.varifycoursedetailsText(firsttabData["student-001"].coursedetailsText);
    })

    await test.step("Verfied medicalinformation text", async() =>{
        await studentPage.varifymedicalinformationText(firsttabData["student-001"].medicalinformationText);
    })

    await test.step("Verfied medicalinformationone text", async() =>{
        await studentPage.varifymedicalinformationoneText(firsttabData["student-001"].medicalinformationoneText);
    })

    await test.step("Verfied medicalinformationtwo text", async() =>{
        await studentPage.varifymedicalinformationtwoText(firsttabData["student-001"].medicalinformationtwoText);
    })

   
    await test.step("Verfied additionalinformationone text", async() =>{
        await studentPage.varifyadditionalinformationoneText(firsttabData["student-001"].additionalinformationoneText);
    })

    await test.step("Verfied additionalinformationtwo text", async() =>{
        await studentPage.varifyadditionalinformationtwoText(firsttabData["student-001"].additionalinformationtwoText);
    })


});
//2

test('NXGS-TC-4084: TC_002_Student_1_Validate for student program, saving valid details in policy holder details, policy holder address in Germany, Are you insured details with insured person details, study details, medical information and study and medical information', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    page.close();
})

//3
test('NXGS-TC-4085: TC_003_Student_1_Validate in policy holder details field, able to give valid passport number in passport field', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    page.close();
})

//4
test('NXGS-TC-4086: TC_004_Student_1_Validate in policy holder details field, able to select any country name from home country field', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    page.close();
})

//5
test('NXGS-TC-4087: TC_005_Student_1_Validate in policy holder details field, able to give valid mobile number in mobile number  field', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    page.close();
})

//6
test('NXGS-TC-4088: TC_006_Student_1_Validate in policy holder details field, able to give valid email in email field', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    page.close();
})

//7
test('NXGS-TC-4090: TC_008_Student_1_Validate able to give valid  postal code of Germany in  "Policyholder address in Germany" section', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    page.close();
})

//8
test('NXGS-TC-4092: TC_010_Student_1_Validate in policy holder details field, user is able to give alphabetic character  text in first name field', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    page.close();
})

//9
test('NXGS-TC-4093: TC_11_Student_1_Validate in policy holder details field, able to give alphabetic  text in last name field', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    page.close();
})

//10
test('NXGS-TC-4100: TC_018_Student_1_Validate in policy holder details field, user is able to give 60 maximum length of alphabetic character  text in first name field', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    page.close();
})

//11
test('NXGS-TC-4101: TC_019_Student_1_Validate in policy holder details field, able to give 60 maximum length of  alphabetic character   text in last name field', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    page.close();
})


//12
test('NXGS-TC-4102: TC_020_Student_1_Validate in insured person details, user is able to give maximum 60  alphabetic character  text in first name field', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    page.close();
})


//13
test('NXGS-TC-4103: TC_021_Student_1_Validate in insured person details,able to give maximum 60 alphabetic  text in last name field', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    page.close();
})

//14
test('NXGS-TC-4107: TC_025_Student_1_Validate able to give any alphanumeric character length text in street name field of "Policyholder address in Germany" section', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    page.close();
})

//15
test('NXGS-TC-4108: TC_026_Student_1_Validate able to give any alphanumeric character length text in street number field of "Policyholder address in Germany" section, NXGS-TC-4109: TC_027_Student_1_Validate able to give any city name in city text field of policy holder address in Germany section, NXGS-TC-4110: TC_028_Student_1_Validate Germany displays in country field of Policy holder address in Germany section', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    page.close();
})

//16
test('NXGS-TC-4111: TC_029_Student_1_Validate able to give any date in date of birth field, NXGS-TC-4109: TC_027_Student_1_Validate able to give any city name in city text field of policy holder address in Germany section, NXGS-TC-4112: TC_030_Student_1_VValidate able to create student policy with policy holder details with insured member details, NXGS-TC-4128: TC_45_Student_1_Validate gender field displays in "Enter your date of birth and gender" section', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    page.close();
})

//17
test('NXGS-TC-4115: TC_033_Student_1_Validate blank in policy holder details, policy holder address in Germany, Are you insured details with insured person details, study details, medical information, click on next button', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Click Next button with blank details", async() =>{
    await studentPage.VerifyNextButtonClickWithBlankDetails(firsttabData["student-001"].expectedMissingInformationText);
    })

   
  
    page.close();
})

//18
test('NXGS-TC-4116: TC_034_Student_1_Validate giving blank spaces in policy holder details, policy holder address in germany, insured person details, study details,  date of birth section', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-003"].firstname,firsttabData["student-003"].lastname,firsttabData["student-003"].passport,firsttabData["student-003"].mobilenumbercode,firsttabData["student-003"].mobilenumberInput,firsttabData["student-003"].email,firsttabData["student-003"].streetname,firsttabData["student-003"].streetnumber,firsttabData["student-003"].postalcode,firsttabData["student-003"].city,firsttabData["student-003"].day,firsttabData["student-003"].month,firsttabData["student-003"].year,firsttabData["student-003"].nameofinstitute,firsttabData["student-003"].startofstudy,firsttabData["student-003"].endofstudy);
    })

    
    await test.step("Click Next button with entering space details", async() =>{
        await studentPage.VerifyNextButtonClickWithSpaceDetails(firsttabData["student-001"].expectedMissingInformationText);
        })
    

    page.close();
})


//19
test('NXGS-TC-4204: TC_063_Student_2_Validate able to delete the added insured person using Remove button', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    await test.step("Verify Remove button functionality", async() =>{
        await studentPage.verifyRemoveButtonFunctionality(firsttabData["student-002"].additionalInsuredPersonInformationText);
    })



    page.close();
})


//20
test('NXGS-TC-4206: TC_065_Student_2_Validate no details given in added insured member information, able to redirect to plan details (3rd tab)', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    await test.step("Click Next button with blank details on second tab", async() =>{
        await studentPage.VerifyNextButtonClickWithBlankDetailsOnSecondTab(firsttabData["student-001"].expectedMissingInformationText);
        })


    page.close();
})


//21
test('NXGS-TC-4207: TC_066_Student_2_Validate previous button functionality present in additional insured information (2nd tab)', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    await test.step("Click previous button with blank details on second tab", async() =>{
        await studentPage.VerifyPreviousButtonClickWithBlankDetailsOnSecondTab(firsttabData["student-001"].applicationText);
        })


    page.close();
})


//22
test('NXGS-TC-4199: TC_058_Student_2_Validate user able to move to plan details (3rd tab) with only 1 insured member information', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    await test.step("Fill all details on the second tab", async() =>{
        await studentPage.fillSecondTabDetails(firsttabData["student-004"].additionalInsuredFirstName,firsttabData["student-004"].additionalInsuredLastName,firsttabData["student-004"].additionalInsuredDayOfBirth,firsttabData["student-004"].additionalInsuredMonthOfBirth,firsttabData["student-004"].additionalInsuredYearOfBirth,firsttabData["student-004"].additionalInsuredPassport,firsttabData["student-004"].additionalInsuredEmail, firsttabData["student-004"].thirdTabPlanDetailsText);
        })
    

    page.close();
})


//23
test('NXGS-TC-4218: TC_077_Student_2_Validate able to give invalid  values  in insured member date of birth field, NXGS-TC-4219: TC_78_Student_2_Validate giving invalid passport number in additional insured and dependent insured information field', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-002"].day,firsttabData["student-002"].month,firsttabData["student-002"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    await test.step("Fill invalid DOB and passport details on the second tab", async() =>{
        await studentPage.fillInvalidSecondTabDetails(firsttabData["student-005"].additionalInsuredFirstName,firsttabData["student-005"].additionalInsuredLastName,firsttabData["student-005"].additionalInsuredDayOfBirth,firsttabData["student-005"].additionalInsuredMonthOfBirth,firsttabData["student-005"].additionalInsuredYearOfBirth,firsttabData["student-005"].additionalInsuredPassport,firsttabData["student-005"].DOBErrorText,firsttabData["student-005"].passportErrorText);
        })
    

    page.close();
})



//24 - scenario 0-4 years
test('NXGS-TC-4220: TC_49_Student_3_Validate premium value get changed  based on 0-4,5-17,18-29,30-39 age at the start date of the policy and plan selection', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-006"].day,firsttabData["student-006"].month,firsttabData["student-006"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    await test.step("Fill all details on the second tab", async() =>{
        await studentPage.verifyThirdTabDetails(firsttabData["student-004"].thirdTabPlanDetailsText, firsttabData["student-006"].startDateThirdTab, firsttabData["student-006"].endDateThirdTab, firsttabData["student-006"].classicPlanPremium, firsttabData["student-006"].classicPlusPremium, firsttabData["student-006"].comfortPlanPremium, firsttabData["student-010"].periodOfInsuranceText, firsttabData["student-010"].chooseYourPreferredPlanText, firsttabData["student-010"].paymentSummaryText);
        })
    

    page.close();
})


//25 - scenario 5-17 years
test('NXGS-TC-4221: TC_51_Student_3_Validate tiles content display correct monthly premium based on selected product and with policy holder only', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-007"].day,firsttabData["student-007"].month,firsttabData["student-007"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })
    
    await test.step("Verfied policyinsuredholder text", async() =>{
    await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })


    await test.step("Fill all details on the second tab", async() =>{
        await studentPage.verifyThirdTabDetails(firsttabData["student-004"].thirdTabPlanDetailsText, firsttabData["student-006"].startDateThirdTab, firsttabData["student-006"].endDateThirdTab, firsttabData["student-007"].classicPlanPremium, firsttabData["student-007"].classicPlusPremium, firsttabData["student-007"].comfortPlanPremium, firsttabData["student-010"].periodOfInsuranceText, firsttabData["student-010"].chooseYourPreferredPlanText, firsttabData["student-010"].paymentSummaryText);
        })
    

    page.close();
})

//26 - scenario 18-29 years
test('NXGS-TC-4222: TC_52_Student_3_Validate tiles content display correct monthly premium based on selected product and the number of members', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-008"].day,firsttabData["student-008"].month,firsttabData["student-008"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    await test.step("Fill all details on the second tab", async() =>{
        await studentPage.verifyThirdTabDetails(firsttabData["student-004"].thirdTabPlanDetailsText, firsttabData["student-006"].startDateThirdTab, firsttabData["student-006"].endDateThirdTab, firsttabData["student-008"].classicPlanPremium, firsttabData["student-008"].classicPlusPremium, firsttabData["student-008"].comfortPlanPremium, firsttabData["student-010"].periodOfInsuranceText, firsttabData["student-010"].chooseYourPreferredPlanText, firsttabData["student-010"].paymentSummaryText);
        })
    

    page.close();
})


//27 - scenario 30-39 years
test('NXGS-TC-4223: TC_53_Student_3_Validate Payment summary displays with the correct name and premium for each member in plan details page', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-009"].day,firsttabData["student-009"].month,firsttabData["student-009"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    await test.step("Fill all details on the third tab", async() =>{
        await studentPage.verifyThirdTabDetails(firsttabData["student-004"].thirdTabPlanDetailsText, firsttabData["student-006"].startDateThirdTab, firsttabData["student-006"].endDateThirdTab, firsttabData["student-009"].classicPlanPremium, firsttabData["student-009"].classicPlusPremium, firsttabData["student-009"].comfortPlanPremium, firsttabData["student-010"].periodOfInsuranceText, firsttabData["student-010"].chooseYourPreferredPlanText, firsttabData["student-010"].paymentSummaryText);
        })


        await test.step("verify third tab payment summary details", async() =>{
            await studentPage.verifyPaymentSummaryDetails(firsttabData["student-009"].expectedPaymentSummaryNameText, firsttabData["student-009"].expectedTotalMonthlyPremium);
            })



    page.close();
})


//28 - scenario 30-39 years for one month scenario and third tab UI fields validation
test('NXGS-TC-4224: TC_55_Student_3_Validate monthly premium displays in tiles and payment summary for duration of 1-60 months, NXGS-TC-4225: TC_079_Student_3_Validate UI fields present in plan details (3rd tab), NXGS-TC-4226: TC_080_Student_3_Validate widget/tiles  content when Mawista Student Classic plan selected, NXGS-TC-4227: TC_081_Student_3_Validate widget  content when Mawista Student classic plus plan selected, NXGS-TC-4228: TC_082_Student_3_Validate widget content when Mawista Student comfort plan selected', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-010"].day,firsttabData["student-010"].month,firsttabData["student-010"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    await test.step("Fill all details on the third tab", async() =>{
        await studentPage.verifyThirdTabDetails(firsttabData["student-004"].thirdTabPlanDetailsText, firsttabData["student-010"].startDateThirdTab, firsttabData["student-010"].endDateThirdTab, firsttabData["student-010"].classicPlanPremium, firsttabData["student-010"].classicPlusPremium, firsttabData["student-010"].comfortPlanPremium, firsttabData["student-010"].periodOfInsuranceText, firsttabData["student-010"].chooseYourPreferredPlanText, firsttabData["student-010"].paymentSummaryText);
        })


        await test.step("verify third tab payment summary details", async() =>{
            await studentPage.verifyPaymentSummaryDetails(firsttabData["student-010"].expectedPaymentSummaryNameText, firsttabData["student-010"].expectedTotalMonthlyPremium);
            })



    page.close();
})


//29
test('NXGS-TC-4230: TC_084_Student_3_Validate able to select and create policy with any month in current year in start date field, NXGS-TC-4231: TC_085_Student_3_Validate able to select and create policy with any month in future year in start date field, NXGS-TC-4232: TC_086_Student_3_Validate able to select and create policy with  duration of 60 months in Student policy, , NXGS-TC-4256: TC_50_Student_4_Validate student policy is purchased for whole month, NXGS-TC-4239: TC_093_Student_3_Validate premium get changed when date of birth changed for selected product plan, NXGS-TC-4240: TC_094_Student_3_Validate montly premium displays when period of insurance more than 1 month, NXGS-TC-4241: TC_095_Student_3_Validate premium get increase when dependent added for selected product plan, NXGS-TC-4243: TC_097_Student_3_Validate premium get changed when gender changed in insured member information for selected product plan, NXGS-TC-4249: TC_103_Student_3_Validate with all details given in plan details (3rd tab), able to redirect to 4th, NXGS-TC-4250: TC_104_Student_3_Validate premium value is displays only after coverage duration selected, NXGS-TC-4251: TC_105_Student_3_Validate premium value not displays without coverage selection', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-010"].day,firsttabData["student-010"].month,firsttabData["student-010"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    
    await test.step("Fill all details on the third tab", async() =>{
        await studentPage.verifyThirdTabDetails(firsttabData["student-004"].thirdTabPlanDetailsText, firsttabData["student-010"].startDateThirdTab, firsttabData["student-010"].endDateThirdTab, firsttabData["student-010"].classicPlanPremium, firsttabData["student-010"].classicPlusPremium, firsttabData["student-010"].comfortPlanPremium, firsttabData["student-010"].periodOfInsuranceText, firsttabData["student-010"].chooseYourPreferredPlanText, firsttabData["student-010"].paymentSummaryText);
        })


        await test.step("verify third tab payment summary details", async() =>{
            await studentPage.verifyPaymentSummaryDetails(firsttabData["student-010"].expectedPaymentSummaryNameText, firsttabData["student-010"].expectedTotalMonthlyPremium);
            })


            await test.step("fill fourth tab details", async() =>{
                await studentPage.fillFourthTabDetailsCreditCard(firsttabData["student-011"].expectedFourthTabPaymentMethodText);
                })

        
    page.close();
})


//30
test('NXGS-TC-4233: TC_087_Student_3_Validate first date of month displays ins tart date field calendar when any month selected from any year, NXGS-TC-4234: TC_088_Student_3_validate able to select any month from calendar in end date selection, NXGS-TC-4235: TC_089_Student_3_Validate last day of month displays in end date field when any month selected, NXGS-TC-4252: TC_106_Student_3_Validate without any details start date and end date fields in plan details (3rd tab), able to redirect to Payment method and checkout (4th tab), NXGS-TC-4253: TC_107_Student_3_Validate without any plan selection in plan details (3rd tab), able to redirect to Payment method and checkout (4th tab), NXGS-TC-4254: TC_108_Student_3_Validate user is not able to give more than 5 years duration, NXGS-TC-4255: TC_109_Student_3_Validate in payment summary, additional member sorted with oldest DOB first displays in row', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-010"].day,firsttabData["student-010"].month,firsttabData["student-010"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    await test.step("Verfied policyinsuredholder text", async() =>{
        await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    })

    await test.step("Fill all details on the third tab", async() =>{
        await studentPage.verifyThirdTabDateDetails(firsttabData["student-004"].thirdTabPlanDetailsText, firsttabData["student-010"].expectedThirdTabStartDateValue, firsttabData["student-010"].expectedThirdTabEndDateValue);
        })        
    page.close();
})

test.describe('b2csanityEU', ()=> {
//Create a Student SEPA DD policy - CLASSIC
test('NXGS-TC-4292: TC_113_Student_4_Validate user able to purchase the Student Classic policy with all required details using sepa direct debit option in payment details with valid iban and checkout tab', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    const syncroEUPage: SyncroEUPage = new SyncroEUPage(page);
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url2);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(
        firsttabData["student-002"].firstname,
        firsttabData["student-002"].lastname,
        firsttabData["student-002"].passport,
        firsttabData["student-002"].mobilenumbercode,
        firsttabData["student-002"].mobilenumberInput,
        firsttabData["student-002"].email,
        firsttabData["student-002"].streetname,
        firsttabData["student-002"].streetnumber,
        firsttabData["student-002"].postalcode,
        firsttabData["student-002"].city,
        firsttabData["student-008"].day,
        firsttabData["student-008"].month,
        firsttabData["student-008"].year,
        firsttabData["student-002"].nameofinstitute,
        firsttabData["student-002"].startofstudy,
        firsttabData["student-002"].endofstudy);
    })

   
    // await test.step("Verfied policyinsuredholder text", async() =>{
    //     await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    // })

    await test.step("Click on Second Tab Next Button ", async () => {
       await studentPage.clickOnsecondtabNextButton();
    })


    await test.step("Fill all details on the third tab", async() =>{
        await studentPage.enterThirdTabDetails(
        //firsttabData["student-008"].thirdTabPlanDetailsText, 
        firsttabData["student-008"].startDateThirdTab, 
        firsttabData["student-008"].endDateThirdTab);
        })
    
    await test.step("Select Classic Plan", async() =>{
        await studentPage.selectClassic();
    })

    // await test.step("Fill all details on the third tab", async() =>{
    //        await studentPage.verifyThirdTabDetails(firsttabData["student-008"].thirdTabPlanDetailsText, firsttabData["student-008"].startDateThirdTab, firsttabData["student-008"].endDateThirdTab,firsttabData["student-008"].expectedClassicPlanPremium, firsttabData["student-008"].expectedClassicPlusPremium, firsttabData["student-008"].expectedComfortPlanPremium, firsttabData["student-008"].periodOfInsuranceText, firsttabData["student-008"].chooseYourPreferredPlanText, firsttabData["student-008"].paymentSummaryText);
    //        })

    await test.step("Click on Third Tab Next Button ", async () => {
      await studentPage.clickOnThirdTabNextButton();
  })

    await test.step("Payment method and checkout", async() =>{
      await studentPage.fillFourthTabDetailsDebitCard(firsttabData["student-011"].expectedFourthTabPaymentMethodText, firsttabData["student-011"].ibannumber);
            })

    await test.step("Thank you page with Policy number", async() =>{
      await studentPage.checkThankyoupageText(firsttabData["student-011"].thankyouText)
    })

    await test.step("Load the URL in Browser", async () => {
        await syncroEUPage.gotoLoginPage(syncData["Login-Access-001"].url); 
          
    })
      
   await test.step("Login to Syncro UAE application", async () => {
    await syncroEUPage.loginToApplication(syncData["Login-Access-001"].brokerUserNameInput, syncData["Login-Access-001"].brokerPasswordInput);
   })

    await test.step("Search the policy number", async () => {
        await syncroEUPage.searchPolicy();
    })
        
    await test.step("Validate the policy", async () => {
      await syncroEUPage.validatePolicy();
        })
           
    page.close();
})



//Create a Student SEPA DD policy - CLASSIC PLUS
test('NXGS-TC-4293: TC_114_Student_4_Validate user able to purchase the Student Classic Plus policy with all required details using sepa direct debit option in payment details with valid iban and checkout tab', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    const syncroEUPage: SyncroEUPage = new SyncroEUPage(page);
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url2);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-009"].day,firsttabData["student-009"].month,firsttabData["student-009"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    // await test.step("Verfied policyinsuredholder text", async() =>{
    //     await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    // })

    await test.step("Click on Second Tab Next Button ", async () => {
       await studentPage.clickOnsecondtabNextButton();
    })

    await test.step("Fill all details on the third tab", async() =>{
        await studentPage.enterThirdTabDetails(
         //firsttabData["student-008"].thirdTabPlanDetailsText, 
         firsttabData["student-008"].startDateThirdTab,
         firsttabData["student-008"].endDateThirdTab);
    })
    
    await test.step("Select Classic Plus Plan", async() =>{
        await studentPage.selectClassicplus();
    })

    await test.step("Click on Third Tab Next Button ", async () => {
    await studentPage.clickOnThirdTabNextButton();
  })
  
    await test.step("Payment method and checkout", async() =>{
        await studentPage.fillFourthTabDetailsDebitCard(firsttabData["student-011"].expectedFourthTabPaymentMethodText, firsttabData["student-011"].ibannumber);
    })

    await test.step("Thank you page with Policy number", async() =>{
        await studentPage.checkThankyoupageText(firsttabData["student-011"].thankyouText)
    })

       
    await test.step("Load the URL in Browser", async () => {
        await syncroEUPage.gotoLoginPage(syncData["Login-Access-001"].url); 
        
      })
    
       await test.step("Login to Syncro UAE application", async () => {
        await syncroEUPage.loginToApplication(syncData["Login-Access-001"].brokerUserNameInput, syncData["Login-Access-001"].brokerPasswordInput);
      })

      await test.step("Search the policy number", async () => {
          await syncroEUPage.searchPolicy();
      
      })
      
        await test.step("Validate the policy", async () => {
          await syncroEUPage.validatePolicy();
      
        })


        
    page.close();
})

//Create a Student SEPA DD policy - COMFORT
test('NXGS-TC-4294: TC_115_Student_4_Validate user able to purchase the Student Comfort policy with all required details using sepa direct debit option in payment details with valid iban and checkout tab', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    const syncroEUPage: SyncroEUPage = new SyncroEUPage(page);
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url2);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-010"].day,firsttabData["student-010"].month,firsttabData["student-010"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    // await test.step("Verfied policyinsuredholder text", async() =>{
    //     await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    // })


      await test.step("Click on Second Tab Next Button ", async () => {
       await studentPage.clickOnsecondtabNextButton();
    })

    await test.step("Fill all details on the third tab", async() =>{
        await studentPage.enterThirdTabDetails(
            //firsttabData["student-008"].thirdTabPlanDetailsText, 
            firsttabData["student-008"].startDateThirdTab, 
            firsttabData["student-008"].endDateThirdTab);
        })
    
    await test.step("Select Comfort Plan", async() =>{
            await studentPage.selectComfort();
    })

     await test.step("Click on Third Tab Next Button ", async () => {
    await studentPage.clickOnThirdTabNextButton();
  })


    await test.step("Payment method and checkout", async() =>{
            await studentPage.fillFourthTabDetailsDebitCard(firsttabData["student-011"].expectedFourthTabPaymentMethodText, firsttabData["student-011"].ibannumber);
            })

    await test.step("Thank you page with Policy number", async() =>{
        await studentPage.checkThankyoupageText(firsttabData["student-011"].thankyouText)
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
})


//Anjali
//Create a Student SEPA CC policy - CLASSIC
test('NXGS-TC-4293: TC_113_Student_4_Validate user able to purchase the Student Classic policy with all required details using sepa direct debit option in payment details with valid iban and checkout tab', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    const syncroEUPage: SyncroEUPage = new SyncroEUPage(page);
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url2);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-008"].day,firsttabData["student-008"].month,firsttabData["student-008"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })

   
    // await test.step("Verfied policyinsuredholder text", async() =>{
    //     await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    // })

     await test.step("Click on Second Tab Next Button ", async () => {
       await studentPage.clickOnsecondtabNextButton();
    })

    await test.step("Fill all details on the third tab", async() =>{
        await studentPage.enterThirdTabDetails(
            //firsttabData["student-008"].thirdTabPlanDetailsText, 
            firsttabData["student-008"].startDateThirdTab,
            firsttabData["student-008"].endDateThirdTab);
        })
    
    await test.step("Select Classic Plan", async() =>{
        await studentPage.selectClassic();
    })
    
    await test.step("Click on Third Tab Next Button ", async () => {
    await studentPage.clickOnThirdTabNextButton();
  })


    await test.step("Payment method and checkout", async() =>{
        await studentPage.fillFourthTabDetailsCreditCard(firsttabData["student-011"].expectedFourthTabPaymentMethodText);
    })

    await test.step("Credit card details", async() =>{
        await studentPage.enterCreditCardDetails();
    })

    await test.step("Thank you page with Policy number", async() =>{
        await studentPage.checkThankyoupageText(firsttabData["student-011"].thankyouText)
    })

        
        
       await test.step("Load the URL in Browser", async () => {
          await syncroEUPage.gotoLoginPage(syncData["Login-Access-001"].url); 
          
        })
      
         await test.step("Login to Syncro UAE application", async () => {
          await syncroEUPage.loginToApplication(syncData["Login-Access-001"].brokerUserNameInput, syncData["Login-Access-001"].brokerPasswordInput);
        })

        await test.step("Search the policy number", async () => {
            await syncroEUPage.searchPolicy();
        
        })
        
          await test.step("Validate the policy", async () => {
            await syncroEUPage.validatePolicy();
        
          })   
           
    page.close();
})

//Anjali
//Create a Student SEPA CC policy - CLASSIC PLUS
test('NXGS-TC-4295: TC_114_Student_4_Validate user able to purchase the Student Classic Plus policy with all required details using sepa direct debit option in payment details with valid iban and checkout tab', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    const syncroEUPage: SyncroEUPage = new SyncroEUPage(page);
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url2);
    })

    
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(
        firsttabData["student-002"].firstname,
        firsttabData["student-002"].lastname,
        firsttabData["student-002"].passport,
        firsttabData["student-002"].mobilenumbercode,
        firsttabData["student-002"].mobilenumberInput,
        firsttabData["student-002"].email,
        firsttabData["student-002"].streetname,
        firsttabData["student-002"].streetnumber,
        firsttabData["student-002"].postalcode,
        firsttabData["student-002"].city,
        firsttabData["student-009"].day,
        firsttabData["student-009"].month,
        firsttabData["student-009"].year,
        firsttabData["student-002"].nameofinstitute,
        firsttabData["student-002"].startofstudy,
        firsttabData["student-002"].endofstudy);
    })

   
    // await test.step("Verfied policyinsuredholder text", async() =>{
    //     await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    // })

     await test.step("Click on Second Tab Next Button ", async () => {
       await studentPage.clickOnsecondtabNextButton();
    })

    await test.step("Fill all details on the third tab", async() =>{
        await studentPage.enterThirdTabDetails(
            //firsttabData["student-008"].thirdTabPlanDetailsText, 
            firsttabData["student-008"].startDateThirdTab, 
            firsttabData["student-008"].endDateThirdTab);
    })
    
    await test.step("Select Classic Plus Plan", async() =>{
        await studentPage.selectClassicplus();
    })

     await test.step("Click on Third Tab Next Button ", async () => {
    await studentPage.clickOnThirdTabNextButton();
  })


  
     await test.step("Payment method and checkout", async() =>{
        await studentPage.fillFourthTabDetailsCreditCard(firsttabData["student-011"].expectedFourthTabPaymentMethodText);
    })

    await test.step("Credit card details", async() =>{
        await studentPage.enterCreditCardDetails();
    })

    await test.step("Thank you page with Policy number", async() =>{
        await studentPage.checkThankyoupageText(firsttabData["student-011"].thankyouText)
    })

       
    await test.step("Load the URL in Browser", async () => {
        await syncroEUPage.gotoLoginPage(syncData["Login-Access-001"].url); 
        
      })
    
       await test.step("Login to Syncro UAE application", async () => {
        await syncroEUPage.loginToApplication(syncData["Login-Access-001"].brokerUserNameInput, syncData["Login-Access-001"].brokerPasswordInput);
      })

      await test.step("Search the policy number", async () => {
          await syncroEUPage.searchPolicy();
      
      })
      
        await test.step("Validate the policy", async () => {
          await syncroEUPage.validatePolicy();
      
        })


        
    page.close();
})

//Create a Student CC Comfort policy 
test('NXGS-TC-4292: TC_144_Student_4_Validate user able to create Student Policy with valid credit card details within active session', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    const syncroEUPage: SyncroEUPage = new SyncroEUPage(page);
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url2);
    })
    await test.step("Fill all details on the first tab", async() =>{
        await studentPage.fillfirsttabdetails(firsttabData["student-002"].firstname,firsttabData["student-002"].lastname,firsttabData["student-002"].passport,firsttabData["student-002"].mobilenumbercode,firsttabData["student-002"].mobilenumberInput,firsttabData["student-002"].email,firsttabData["student-002"].streetname,firsttabData["student-002"].streetnumber,firsttabData["student-002"].postalcode,firsttabData["student-002"].city,firsttabData["student-010"].day,firsttabData["student-010"].month,firsttabData["student-010"].year,firsttabData["student-002"].nameofinstitute,firsttabData["student-002"].startofstudy,firsttabData["student-002"].endofstudy);
    })
    
       
    // await test.step("Verfied policyinsuredholder text", async() =>{
    //     await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    // })
    
    await test.step("Click on Second Tab Next Button ", async () => {
       await studentPage.clickOnsecondtabNextButton();
    })

    
    await test.step("Fill all details on the third tab", async() =>{
        await studentPage.enterThirdTabDetails(
            //firsttabData["student-008"].thirdTabPlanDetailsText, 
            firsttabData["student-008"].startDateThirdTab, 
            firsttabData["student-008"].endDateThirdTab);
    })
        
    await test.step("Select Comfort Plan", async() =>{
        await studentPage.selectComfort();
    })

    await test.step("Click on Third Tab Next Button ", async () => {
    await studentPage.clickOnThirdTabNextButton();
  })

    
    await test.step("Payment method and checkout", async() =>{
        await studentPage.fillFourthTabDetailsCreditCard(firsttabData["student-011"].expectedFourthTabPaymentMethodText);
    })

//      await test.step("clickOnDeclarationCheckboxes", async () => {
//     await studentPage.clickOnBTPolicyDeclarationCheckboxes();
//   })

    await test.step("Credit card details", async() =>{
        await studentPage.enterCreditCardDetails();
    })
    
    await test.step("Thank you page with Policy number", async() =>{
        await studentPage.checkThankyoupageText(firsttabData["student-011"].thankyouText)
    })
    
    await test.step("Load the URL in Browser", async () => {
        await syncroEUPage.gotoLoginPage(syncData["Login-Access-001"].url); 
        
      })
    
       await test.step("Login to Syncro UAE application", async () => {
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


//Anjali
// Create a Student BT (Bank Transfer) policy - CLASSIC
test('NXGS-TC-4295: TC_113_Student_4_Validate user able to purchase the Student Classic policy with all required details using sepa direct debit option in payment details with valid iban and checkout tab', async({page})=>{

    const studentPage: StudentPage = new StudentPage(page);
    const syncroEUPage: SyncroEUPage = new SyncroEUPage(page);
    await test.step("Load the URL in Browser",async()=>{
    await studentPage.gotoHomePage(firsttabData["student-001"].url1);
    })
    await test.step("Fill all details on the first tab", async() =>{
    await studentPage.fillfirsttabdetails(
        firsttabData["student-002"].firstname,
        firsttabData["student-002"].lastname,
        firsttabData["student-002"].passport,
        firsttabData["student-002"].mobilenumbercode,
        firsttabData["student-002"].mobilenumberInput,
        firsttabData["student-002"].email,
        firsttabData["student-002"].streetname,
        firsttabData["student-002"].streetnumber,
        firsttabData["student-002"].postalcode,
        firsttabData["student-002"].city,
        firsttabData["student-008"].day,
        firsttabData["student-008"].month,
        firsttabData["student-008"].year,
        firsttabData["student-002"].nameofinstitute,
        firsttabData["student-002"].startofstudy,
        firsttabData["student-002"].endofstudy);
    })

   
    // await test.step("Verfied policyinsuredholder text", async() =>{
    //     await studentPage.verifysecondtabText(firsttabData["student-002"].additionalinsuredpersonText);
    // })
    await test.step("Click on Second Tab Next Button ", async () => {
   await studentPage.clickOnsecondtabNextButton();
 })

    await test.step("Fill all details on the third tab", async() =>{
        await studentPage.enterThirdTabDetails(
            //firsttabData["student-008"].thirdTabPlanDetailsText, 
            firsttabData["student-008"].startDateThirdTab, 
            firsttabData["student-008"].endDateThirdTab);
        })
    
    await test.step("Select Classic Plan", async() =>{
        await studentPage.selectClassic();
    })
    //await test.step("Fill all details on the third tab", async() =>{
    //        await studentPage.verifyThirdTabDetails(firsttabData["student-008"].thirdTabPlanDetailsText, firsttabData["student-008"].startDateThirdTab, firsttabData["student-008"].endDateThirdTab,firsttabData["student-008"].expectedClassicPlanPremium, firsttabData["student-008"].expectedClassicPlusPremium, firsttabData["student-008"].expectedComfortPlanPremium, firsttabData["student-008"].periodOfInsuranceText, firsttabData["student-008"].chooseYourPreferredPlanText, firsttabData["student-008"].paymentSummaryText);
    //        })

    await test.step("Click on Third Tab Next Button ", async () => {
    await studentPage.clickOnThirdTabNextButton();
  })



  await test.step("Click on Bank Transfer radio button", async () => {
    await studentPage.clickOnBankTransferRadioButton();
  })

  await test.step("clickOnDeclarationCheckboxes", async () => {
    await studentPage.clickOnBTPolicyDeclarationCheckboxes();
  })

  await test.step("clickOnApplyAndPay", async () => {
    await studentPage.clickOnApplyAndPayForBTPolicy();
  })
    await test.step("Thank you page with Policy number", async() =>{
        await studentPage.checkThankyoupageText(firsttabData["student-011"].thankyouText)
    })
   
    await test.step("Load the URL in Browser", async () => {
        await syncroEUPage.gotoLoginPage(syncData["Login-Access-001"].url); 
          
    })
    
    await test.step("Login to Syncro UAE application", async () => {
         await syncroEUPage.loginToApplication(syncData["Login-Access-001"].brokerUserNameInput, syncData["Login-Access-001"].brokerPasswordInput);
    })

    await test.step("Search the policy number", async () => {
        await syncroEUPage.searchPolicy();
        
     })
        
    await test.step("Validate the policy", async () => {
        await syncroEUPage.validatePolicy();
        
          })

    page.close();
})


});