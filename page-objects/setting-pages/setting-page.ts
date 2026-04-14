import { Keyboard, Locator, Page, expect } from "@playwright/test";

export class SettingPage {

  readonly page: Page;
  readonly pulseProviderMenu: Locator;
  readonly changePassword: Locator;
  readonly changePasswordTitle: Locator;
  readonly createNewPassword: Locator;
  readonly oldPassword: Locator;
  readonly newPassword: Locator;
  readonly confirmNewPassword: Locator;
  readonly updatePassword: Locator;
  readonly homeIcon: Locator;
  readonly fieldIsRequired: Locator;
  readonly oldPasswordWrongError: Locator;
  readonly passwordMismatchError: Locator;
  readonly passwordlengh: Locator;
  readonly providerMenuOptions: Locator;
  readonly manageUser: Locator;
  readonly inbox: Locator;
  readonly profile: Locator;
  readonly postOffice: Locator;
  readonly help: Locator;
  readonly logout: Locator;
  readonly manageUserTitle: Locator;
  readonly listOfUsers: Locator;
  readonly searchBox: Locator;
  readonly recordsPerPage: Locator;
  readonly searchDataUsername: Locator;
  readonly noDataHasBeenFound: Locator;
  readonly edit: Locator;
  readonly popup: Locator;
  readonly active: Locator;
  readonly update: Locator;
  readonly add: Locator;
  readonly addPopup: Locator;
  readonly emailTextFeild: Locator;
  readonly emailMessage: Locator;
  readonly jobPositionTextFeild: Locator;
  readonly requiredMessage: Locator;
  readonly roles: Locator;
  readonly jobPosition: Locator;
  readonly saveButton: Locator;
  readonly fullName: Locator;
  readonly randomString: string;
  readonly expectedfullName: string;
  readonly expectedEmail: string;
  resetPassword: Locator;
  resetPasswordPopUp: Locator;
  resetPasswordSuccessMessage: Locator;
  confirmButton: Locator;
  cancleButton: Locator;
  closeIcon: Locator;

  // readonly pulseProviderMenu: Locator;
  readonly manageusersButton: Locator;
  readonly verifymanageuserspage: Locator;
  readonly addUsersIcon: Locator;
  readonly verifyNewUserpageLocator: Locator;
  readonly CloseIcon: Locator;
  readonly FullName: Locator;
  readonly setJobPositionLocator: Locator;
  readonly validationMessage: Locator;
  readonly setEmailLocator: Locator;
  readonly verifyRolesfield: Locator;
  readonly SelectRoles: Locator;
  readonly verifyrolelistboxLocator: Locator;
  readonly selectRolesValue: Locator;
  readonly verifyRolesFieldselectedoption: Locator;
  readonly clearAllButton: Locator;
  // readonly randomString: string;
  // readonly expectedEmail: string;
  // readonly expectedfullName: string;
  readonly FullnameemptyField: Locator;
  readonly emailemptyField: Locator;
  readonly jobPositionemptyField: Locator;
  readonly RolesemptyField: Locator;
  readonly SaveButton: Locator;
  readonly searchName: Locator;
  readonly Searchicon: Locator;
  readonly fullnameonuserlist: Locator;
  readonly existingemailerror: Locator;
  readonly nextPageIcon: Locator;
  readonly previousPageIcon: Locator;
  readonly username: Locator;
  readonly rolesManageUSer: Locator;
  readonly phone: Locator;

  // readonly resetPassword: Locator;
  // readonly confirmButton: Locator;
  // readonly resetPasswordSuccessMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pulseProviderMenu = page.locator('.mat-mdc-menu-trigger.ng-star-inserted');
    this.changePassword = page.locator("iris-base-label[class='ng-star-inserted'] span[title='Change Password']");
    this.changePasswordTitle = page.locator('h1[title="Change Password"]');
    this.createNewPassword = page.locator("h2[title='Create New Password']");
    this.oldPassword = page.locator("//input[@title='Old Password']");
    this.newPassword = page.locator("//input[@title='New Password']");
    this.confirmNewPassword = page.locator("//input[@title='Confirm New Password']");
    this.updatePassword = page.locator("button[title='Update Password']");
    this.homeIcon = page.locator("//mat-icon[@data-mat-icon-name='icon-home']");
    this.fieldIsRequired = page.locator("mat-label[title='Field is required']");
    this.oldPasswordWrongError = page.locator("//span[@class='mat-mdc-list-item-title mdc-list-item__primary-text']");
    this.passwordMismatchError = page.locator("mat-label[title='Passwords do not match']");
    this.passwordlengh = page.locator("//div[@ng-reflect-ng-switch='hint']//mat-label");
    this.providerMenuOptions = page.locator("(//div[@class='cdk-overlay-pane'])[2]");
    this.manageUser = page.locator("//span[@title='Manage Users']");
    this.inbox = page.locator("//span[@title='Inbox']");
    this.postOffice = page.locator("//span[@title='Post Office']");
    this.profile = page.locator("//span[@title='Profile']");
    this.help = page.locator("//span[@title='Help']");
    this.logout = page.locator("//span[@title='Logout']");
    this.manageUserTitle = page.locator("//h1[normalize-space()='Manage Users']");
    this.listOfUsers = page.locator("h3[title='List of Users']");
    this.searchBox = page.locator("//input[@title='Search']");
    this.recordsPerPage = page.locator("(//div[@class='mat-mdc-paginator-page-size ng-star-inserted']//div)[1]");
    this.searchDataUsername = page.locator("(//mat-table[@id='users-table']//mat-cell)[1]");
    this.noDataHasBeenFound = page.locator("small[title='No Data has been found']");
    this.edit = page.locator("(//mat-icon[@data-mat-icon-name='icon-edit'])[1]");
    this.popup = page.locator("//div[@class='cdk-overlay-pane']");
    this.active = page.locator("//span[.='Active']");
    this.update = page.locator('[title="Update"]').last();
    this.add = page.locator('[data-mat-icon-name="icon-add-plus"]');
    this.addPopup = page.locator('[class="cdk-overlay-pane"]');
    this.emailTextFeild = page.locator('//input[@title="Email" and @type="email"]');
    this.emailMessage = page.locator('[title="Must be an email address"]');
    this.jobPositionTextFeild = page.locator('//input[@title="Job Position" and@type="text"]');
    this.requiredMessage = page.locator('[title="Field is required"]');
    this.jobPosition = page.locator('.cdk-overlay-container > div:nth-child(3)');
    this.roles = page.locator('//input[@aria-haspopup="listbox"]');
    this.saveButton = page.locator('//button[@title="Save"]');
    this.fullName = page.locator('//input[@title="Full Name"]');
    this.resetPassword = page.locator('[data-mat-icon-name="icon-reset-password"]');
    this.resetPasswordPopUp = page.locator('[class="cdk-overlay-pane"]');
    this.confirmButton = page.locator('//button[@title="Confirm"]');
    this.cancleButton = page.locator('//button[@title="Cancel"]');
    this.closeIcon = page.locator('[class="button-wrapper ng-star-inserted"]').last();
    this.resetPasswordSuccessMessage = page.locator("//span[contains(.,'If your email is correct,')]");
    this.rolesManageUSer = page.locator('//span[@title="Roles"]');

    this.pulseProviderMenu = page.locator('(//button[@aria-haspopup="menu"])[2]');
    this.manageusersButton = page.locator('(//span[@title="Manage Users"])[1]');
    this.verifymanageuserspage = page.locator('//h1[@title="Manage Users"]');
    this.addUsersIcon = page.locator('[id="actionColumn"]');
    this.verifyNewUserpageLocator = page.locator('[title="Add New User"]');
    this.CloseIcon = page.locator('[class="close-icon"]');
    this.FullName = page.locator('//input[@title="Full Name"]');
    this.setJobPositionLocator = page.locator('//input[@title="Job Position"]');
    this.validationMessage = page.locator('[title="Field is required"]');
    this.setEmailLocator = page.locator('//input[@title="Email"]');
    this.verifyRolesfield = page.locator('[class="withSecondaryIcon ng-star-inserted ng-untouched ng-pristine ng-invalid"]');
    this.SelectRoles = page.locator('//mat-select[@role="combobox" and @aria-disabled="false"]//span').last();
    this.verifyrolelistboxLocator = page.locator('[role="listbox"]');
    this.selectRolesValue = page.locator('//mat-label[@title="Healthcare Provider Administrator"]');
    this.verifyRolesFieldselectedoption = page.locator("(//span[.='Healthcare Provider Administrator'])[1]");
    this.clearAllButton = page.locator('(//button[@title="Clear all"])');
    this.FullnameemptyField = page.locator('(//input[@title="Full Name"])');
    this.emailemptyField = page.locator('(//input[@title="Email"])');
    this.jobPositionemptyField = page.locator('(//input[@title="Job Position"])');
    this.RolesemptyField = page.locator('(//mat-select[@role="combobox"])[3]');
    this.SaveButton = page.locator('//button[@title="Save"]');
    this.searchName = page.locator('//input[@title="Search"]');
    this.Searchicon = page.locator('(//button[@class="button-wrapper ng-star-inserted"])[6]');
    this.fullnameonuserlist = page.locator('(//small[@class="ng-star-inserted"])[1]');
    this.existingemailerror = page.locator('(//div[@class="card-content"])[2]');
    this.nextPageIcon = page.locator('//button[@aria-label="Next page"]');
    this.previousPageIcon = page.locator('//button[@aria-label="Previous page"]');
    this.resetPassword = page.locator('(//mat-icon[@data-mat-icon-name="icon-reset-password"])[1]');
    this.confirmButton = page.locator('//span[@title="Confirm"]');
    this.resetPasswordSuccessMessage = page.locator("//span[contains(.,'If your email is correct,')]");
    this.phone = page.locator('//input[@title="Phone" and@type="text"]');
    this.randomString = `${Math.random().toString().slice(2, 5)}`;
    this.expectedfullName = `${'vtest'}${this.randomString}`;
    this.expectedEmail = `${'vtest'}${this.randomString}${'@mailinator.com'}`;
    this.username = page.locator("//input[@title='UserName']");

  }


  async verifySearchNoDataHasBeenFOund(expectedData: string) {
    await this.page.waitForLoadState('networkidle');
    const actualData = await this.noDataHasBeenFound.textContent();
    expect(actualData).toBe(expectedData);
  }

  async clickOnPulseProviderMenu() {
    await this.page.waitForLoadState('networkidle');
    await this.pulseProviderMenu.click();
    await this.page.waitForTimeout(5000);
  }

  async clickOnManageUserMenu() {
    await this.page.waitForLoadState('networkidle');
    await this.manageUser.click();
    await this.page.waitForTimeout(5000);
  }

  async verifPulseProviderMenuEnabled() {
    await this.page.waitForLoadState('networkidle');
    const isPulseProviderMenuEnabled = await this.pulseProviderMenu.isEnabled();
    expect(isPulseProviderMenuEnabled).toBeTruthy();
  }

  async verifPulseProviderMenuDropdownOptionsVisibility() {
    await this.page.waitForLoadState('networkidle');
    const providerMenuOptions = await this.providerMenuOptions.isVisible();
    expect(providerMenuOptions).toBeTruthy();
  }

  async clickOnHomeIcon() {
    await this.page.waitForLoadState('networkidle');
    await this.homeIcon.click();
  }

  async clickOnChangePasswordMenu() {
    await this.page.waitForLoadState('networkidle');
    await this.changePassword.click();
  }


  async verifyPageTitle(expectedPageTitle: string) {
    await this.page.waitForTimeout(10000);
    await this.page.waitForLoadState('networkidle');
    const actualPageTitle = await this.page.title();
    expect(actualPageTitle).toBe(expectedPageTitle);
  }

  async verifyUIComponentsOnChangePasswordScreen(expectedChangePasswordTitle: string, expectedCreateNewPasswordTitle: string) {
    await this.page.waitForTimeout(10000);
    await this.page.waitForLoadState('networkidle');
    const actualChangePasswordTitle = await this.changePasswordTitle.textContent();
    expect(actualChangePasswordTitle).toBe(expectedChangePasswordTitle);

    const actualCreateNewPasswordTitle = await this.createNewPassword.textContent();
    expect(actualCreateNewPasswordTitle).toBe(expectedCreateNewPasswordTitle);

    const isOldPasswordVisible = await this.oldPassword.isVisible();
    expect(isOldPasswordVisible).toBeTruthy();

    const isNewPasswordVisible = await this.newPassword.isVisible();
    expect(isNewPasswordVisible).toBeTruthy();

    const isConfirmNewPasswordVisible = await this.confirmNewPassword.isVisible();
    expect(isConfirmNewPasswordVisible).toBeTruthy();

    const isUpdatePasswordVisible = await this.updatePassword.isVisible();
    expect(isUpdatePasswordVisible).toBeTruthy();
  }

  async enterOldPassword(expectedOldPassword: string) {
    await this.page.waitForLoadState('networkidle');
    await this.oldPassword.fill(expectedOldPassword);
  }

  async enterNewPassword(expectedNewPassword: string) {
    await this.page.waitForLoadState('networkidle');
    await this.newPassword.fill(expectedNewPassword);
  }

  async enterConfirmNewPassword(expectedConfirmNewPassword: string) {
    await this.page.waitForLoadState('networkidle');
    await this.confirmNewPassword.fill(expectedConfirmNewPassword);
  }

  async verifyValidationErrorMessage(expectedErrorMessage: string) {
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(2000);
    const actualErrorMessage = await this.fieldIsRequired.textContent();
    expect(actualErrorMessage).toBe(expectedErrorMessage);
  }

  async verifyValidationErrorAllThreeMessage(expectedErrorMessage: string, index: number) {
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(2000);

    if (index == 0) {
      const actualErrorMessage = await this.fieldIsRequired.nth(index).textContent();
      expect(actualErrorMessage).toBe(expectedErrorMessage);
    } else if (index == 1) {
      const actualErrorMessage = await this.fieldIsRequired.nth(index).textContent();
      expect(actualErrorMessage).toBe(expectedErrorMessage);
    } else if (index == 2) {
      const actualErrorMessage = await this.fieldIsRequired.nth(index).textContent();
      expect(actualErrorMessage).toBe(expectedErrorMessage);
    }
  }

  async verifyOldPasswordWrongValidationErrorMessage(expectedErrorMessage: string) {
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(2000);
    const actualErrorMessage = await this.oldPasswordWrongError.textContent();
    expect(actualErrorMessage).toBe(expectedErrorMessage);
  }

  async clickOnUpdatePassword() {
    await this.updatePassword.click();
  }

  async verifyPasswordNotMatchValidationErrorMessage(expectedErrorMessage: string) {
    await this.page.waitForTimeout(2000);
    const actualErrorMessage = await this.passwordMismatchError.textContent();
    expect(actualErrorMessage).toBe(expectedErrorMessage);
  }

  async verifyPasswordLenghtValidationErrorMessage(expectedErrorMessage: string) {
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(2000);
    const actualErrorMessage = await this.passwordlengh.textContent();
    expect(actualErrorMessage).toBe(expectedErrorMessage);
  }

  async verifyProviderMenuDropdownList(expectedChangePassword: string, expectedManageUser: String, expectedInbox: String, expectedPostOffice: String, expectedProfile: String, expectedHelp: String, expectedLogout: String) {
    await this.page.waitForLoadState('networkidle');

    //ChangePassword
    const actualChangePassword = await this.changePassword.textContent();
    expect(actualChangePassword).toBe(expectedChangePassword);

    //ManageUser
    const actualManageUser = await this.manageUser.textContent();
    expect(actualManageUser).toBe(expectedManageUser);

    //Inbox
    const actualInbox = await this.inbox.textContent();
    expect(actualInbox).toBe(expectedInbox);

    //postOffice
    const actualPostOffice = await this.postOffice.textContent();
    expect(actualPostOffice).toBe(expectedPostOffice);

    //Profile
    const actualProfile = await this.profile.textContent();
    expect(actualProfile).toBe(expectedProfile);

    //Help
    const actualHelp = await this.help.textContent();
    expect(actualHelp).toBe(expectedHelp);

    //Logout
    const actualLogout = await this.logout.textContent();
    expect(actualLogout).toBe(expectedLogout);
  }

  async verifyManageUserTitle(expectedManageUsers: string) {
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(2000);
    const actualManageUsers = await this.manageUser.textContent();
    expect(actualManageUsers).toBe(expectedManageUsers);
  }

  async verifyUIComponentsOfManageUserPage(expectedManageUsers: string, expectedListOfUsers: String, expectedManageUserTitle: String, expectedRecordsPerPage: String) {
    await this.page.waitForLoadState('networkidle');

    //manageUser
    const actualManageUsers = await this.manageUser.textContent();
    expect(actualManageUsers).toBe(expectedManageUsers);

    //listOfUsers
    const actualListOfUsers = await this.listOfUsers.textContent();
    expect(actualListOfUsers).toBe(expectedListOfUsers);

    //manageUserTitle
    const actualManageUserTitle = await this.manageUserTitle.textContent();
    expect(actualManageUserTitle).toBe(expectedManageUserTitle);

    //searchBox
    const actualProfile = await this.searchBox.isVisible;
    expect(actualProfile).toBeTruthy();;

    //RecordsPerPage
    const actualRecordsPerPage = await this.recordsPerPage.textContent();
    expect(actualRecordsPerPage?.trim()).toBe(expectedRecordsPerPage);
  }

  async enterSearchData(data: string) {;
    await this.page.waitForTimeout(20000);
    await this.page.reload();
    await this.page.waitForLoadState('networkidle');
    await this.searchBox.fill(" ");
    await this.searchBox.fill(this.expectedEmail);
    await this.searchBox.press('Enter');
    await this.page.waitForTimeout(5000);
  }

  async verifySearchData(expectedESearchData: string) {
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(2000);
    const actualSearchData = await this.searchDataUsername.textContent();
    expect(actualSearchData).toBe(expectedESearchData);
  }

  async clickOnEditIcon() {
    await this.page.pause();
    await this.page.waitForLoadState('networkidle');
    await this.edit.click();
    await this.page.waitForTimeout(5000);
  }

  async clickOnActiveIcon() {
    await this.page.waitForLoadState('networkidle');
    await this.active.click();
   // await this.page.waitForTimeout(1000);
  }

  async clickOnUpdateIcon() {
    await this.page.waitForLoadState('networkidle');
    await this.update.click();
  }

  async verifyPopupAfterClickedOnEdit() {
    await this.page.waitForLoadState('networkidle');
    const isPopupVisible = await this.popup.isVisible();
    expect(isPopupVisible).toBeTruthy();
  }

  /**
        * This function is used to click on Active toggle
        */
  async clickOnActiveToggle() {
    await this.page.waitForLoadState('networkidle');
    await this.active.click();
  }

  /**
      * This function is used to verify able to click on update
      */
  async clickOnUpdate() {
    await this.page.waitForLoadState('networkidle');
    await this.update.click();

  }

  /**
      * This function is used to verify active button is allows
      */
  async verifyActiveButtonIsallowed() {
    await expect(this.active).toBeTruthy();
  }

  /**
      * This function is used to verify popup after click on add button
      */
  async verifyPopupAfterClickedOnAdd() {
    await this.page.waitForLoadState('networkidle');
    const isPopupVisible = await this.addPopup.isVisible();
    expect(isPopupVisible).toBeTruthy();
  }

  /**
      * This function is used to verify able to click on add button
      */
  async verifyAbleToClickOnAdd() {
    expect(this.add).toBeTruthy();
    await this.add.click();
  }

  /**
      * This function is used to enter the email
      */
  async enterEmail(email: string) {
    await this.emailTextFeild.fill(email);
  }

  /**
      * This function is used to verify information message when enter invalid email
      */
  async verifyInformationMessageInEmail(actualMessage: string) {
    await this.page.waitForLoadState('networkidle');
    const expectMessage = await this.emailMessage.textContent();
    expect(actualMessage).toBe(expectMessage);
  }

  /**
    * This function is used to enter the job position
    */
  async enterJobPosition() {
    await this.jobPositionTextFeild.click();
  }

  /**
    * This function is used to select roles
    */
  async clickOnRoles() {
    await this.roles.click();
  }

  /**
     * This function is used to click on job position
     */
  async clickOnJobPosition() {
    await this.jobPosition.click()
  }

  /**
      * This function is used to verify validation Message 
      */
  async verifyValidationMessage() {
    await this.page.waitForLoadState('networkidle');
    const isMessageVisible = await this.requiredMessage.isVisible();
    expect(isMessageVisible).toBeTruthy();

  }

  /**
   * this function is used to click on the 'Save button' on Add New Users Screen
   */
  async clickOnSaveButton() {
    await this.saveButton.click();
    await this.page.waitForTimeout(10000);
  }

  /**
   * this function is used to click on the 'full name field' on Add New Users Screen
   */
  async setFullNameField(fullname: string) {
    await this.fullName.fill(this.expectedfullName);
  }

  /**
    * This function is used to enter the job position
    */
  async setEmail(email: string) {
    await this.emailTextFeild.fill(this.expectedEmail);
  }


  /**
    * This function is used to enter the job position
    */
  async setJobPosition(jobPosition: string) {
    await this.jobPositionTextFeild.fill(jobPosition);
  }


  /**
     * this function is used to Set on the Roles field' on Add New Users Screen
     */
  async selectRolesOption(roles: string) {
    await this.page.waitForLoadState('networkidle');
    await this.roles.click();
    await this.page.locator('//mat-label[@title="' + roles + '"]').click();

  }

  async verifyUserCreationFields() {
    await this.page.waitForLoadState('networkidle');
    //email field
    expect(this.emailTextFeild).toBeEnabled();
    //fullName field
    expect(this.fullName).toBeEnabled();
    //jobPosition field
    expect(this.jobPositionTextFeild).toBeEnabled();
    //Roles
    expect(this.roles).toBeTruthy();
    //save
    expect(this.saveButton).toBeEnabled();
  }

  /**
   * this function is used to click on the Reset password
   */
  async clickOnResetPassword() {
    await this.resetPassword.click();
  }

  /**
      * This function is used to verify popup after click on reset password button
        */
  async verifyPopupAfterClickedOnResetPassword() {
    await this.page.waitForLoadState('networkidle');
    const isPopupVisible = await this.resetPasswordPopUp.isVisible();
    expect(isPopupVisible).toBeTruthy();
  }

  /**
    * This function is used to verify cancle and close button in popup after click on reset password button
      */
  async verifyCancleAndCloseButtonInResetPasswordPopup() {
    await this.page.waitForLoadState('networkidle');
    //cancle button 
    const isCancleVisible = await this.cancleButton.isVisible();
    expect(isCancleVisible).toBeTruthy();
    //close button
    const isCloseVisible = await this.closeIcon.isVisible();
    expect(isCloseVisible).toBeTruthy();
  }

  /**
  * this function is used to click on the confirm button in  Reset password
  */
  async clickOnConfirmButtonInResetPassword() {
    await this.confirmButton.click();
  }

  /**
       * This function is used to verify success Message with valid email id after click on reset password button
         */
  async verifySuccessMessageWhenResetPasswordWithValidEmail(expectedSuccessMessage: string) {
    await this.page.waitForLoadState('networkidle');
    const actualSuccessMessage = await this.resetPasswordSuccessMessage.textContent();
    expect(actualSuccessMessage).toBe(expectedSuccessMessage);
  }



  /**
   * this function is used to click on the profile menu icon on the dashboard page
   */
  async clickOnProfileMenuIcon() {
    await this.pulseProviderMenu.click();
    await expect(this.pulseProviderMenu).toBeVisible();
  }

  /**
   * this function is used to click on the 'manage users' Button on the profile menu bar
   */
  async clickOnManageUsersButton() {
    await this.manageusersButton.click();
  }

  /**
   * this function is used to verify page  when user click on manage users manage users page displays
   */
  async verifyManageUserPage() {
    await this.page.waitForLoadState('load');
    await expect(this.verifymanageuserspage).toBeVisible();
  }

  /**
  * this function is used to click on the 'add users icon' Button on the manage users page
  */
  async clickOnAddUserIcon() {
    await this.addUsersIcon.click();
  }

  /**
  * this function is used to verify page  when user click on manage users manage users page displays
  */
  async verifyNewUserPage() {
    await expect(this.verifyNewUserpageLocator).toBeTruthy();
  }

  /**
  * this function is used to click on the 'close icon' Button on the add new users page
  */
  async clickOnCloseIcon() {
    await this.CloseIcon.click();
  }

  /**
  * this function is used to verify page  when user click on manage users manage users page displays
  */
  async verifyNewUserPageAfterCloseAction() {
    await expect(this.verifymanageuserspage).toBeVisible();
  }

  //02

  /**
   * this function is used to click on the 'full name field' on Add New Users Screen
   */
  async SetFullName() {
    await this.FullName.click();
  }

  /**
   * this function is used to click on the 'full name field' on Add New Users Screen
   */
  async SetFullNameField(fullname: string) {
    await this.FullName.fill(this.expectedfullName);
  }
  /**
   * this function is used to Set on the 'Jon position field' on Add New Users Screen
   */
  async SetJobPosition(jobposition: string) {
    await this.setJobPositionLocator.fill(jobposition);
  }

  /**
   * this function is used to Set on the 'Email field' on Add New Users Screen
   */
  async SetEmail() {
    await this.setEmailLocator.click();
  }

  /**
  * this function is used to Set on the 'Email field' on Add New Users Screen
  */
  async SetEmailadress(email: string) {
    await this.setEmailLocator.fill(this.expectedEmail);
  }
  /**
   * this function is used to validation message displayed of the full name ' on Add New Users Screen
   */
  async verifyFullNameValidationMessage(expectederrormessage: string) {
    await expect(this.validationMessage).toHaveText(expectederrormessage);
    const expextedValue = await this.validationMessage.textContent();
    console.log(expextedValue);

  }

  /**
  * this function is used to validation message displayed of the email Field ' on Add New Users Screen
  */
  async verifyemailValidationMessage(expectederrormessage: string) {
    await expect(this.validationMessage).toHaveText(expectederrormessage);
    const expextedValue = await this.validationMessage.textContent();
    console.log(expextedValue);

  }
  //04
  /**
   * this function is used to verify the roles field displayed  ' on Add New Users Screen.
   */
  async verifyRolesField() {
    await expect(this.RolesemptyField).toBeTruthy();

  }

  /**
   * this function is used to Click on the Roles field' on Add New Users Screen
   */
  async ClickOnRolesfield() {
    await this.SelectRoles.click();
  }
  //04
  /**
   * this function is used to verify the roles List box displayed  ' on Add New Users Screen.
   */
  async verifyRoleListBox() {
    await expect(this.verifyrolelistboxLocator).toBeVisible();

  }
  /**
  * this function is used to Set on the Roles field' on Add New Users Screen
  */
  //  async selectRolesOption() {
  //   await this.SelectRoles.click();
  //   await this.selectRolesValue.click();
  // }

  /**
 * this function is used to verify Selectedoption displayed of the Roles Field ' on Add New Users Screen
 */
  async verifyRolesFieldSelectedOption(expectedRolesoption: string) {
    await expect(this.verifyRolesFieldselectedoption).toHaveText(expectedRolesoption);
    const expextedValue = await this.verifyRolesFieldselectedoption.textContent();
    console.log(expextedValue);
  }
  //06

  /**
* this function is used to verify the clear all button displayed  ' on Add New Users Screen.
*/
  async verifyClearAllButton() {
    await expect(this.clearAllButton).toBeVisible();

  }
  /**
* this function is used to click on the 'full name field' on Add New Users Screen
*/
  async clickOnClearAllButton() {
    await this.clearAllButton.click();
  }

  /**
 * this function is used to verify empty fields displayed' on Add New Users Screen
 */
  async verifyEmptyFields() {
    await expect(this.FullnameemptyField).toBeEmpty();
    await expect(this.emailemptyField).toBeEmpty();
    await expect(this.RolesemptyField).toBeEmpty();
    await expect(this.jobPositionemptyField).toBeEmpty();
  }
  /**
* this function is used to click on the 'Save button' on Add New Users Screen
*/
  //  async clickOnSaveButton() {
  //   await this.SaveButton.click();
  // }
  /**
* this function is used to search Full name in search bar' on the a manage users page
*/
  async SearchFullNameOnUserList(fullname: string) {
    await this.searchName.fill(this.expectedfullName);
    await this.Searchicon.click();
  }

  /**
* this function is used to search Full name in search bar' on the a manage users page
*/
  async SearchFullName(fullname: string) {
    await this.searchName.fill(fullname);
    await this.Searchicon.click();
  }

  /**
   * this function is used to verify the 'full name' displayed on the User Grid
   */
  async verifyfullnameOnUserList(fullname: string) {
    await expect(this.fullnameonuserlist).toHaveText(this.expectedfullName);
    const expextedValue = await this.fullnameonuserlist.textContent();
    console.log(this.expectedfullName);

  }

  /**
  * this function is used to verify the existing email error when add new user again' on Add New Users Screen
  */
  async verifyExistingEmailError(expectedexistingemailerror: string) {
    await expect(this.existingemailerror).toBeTruthy();
    await expect(this.existingemailerror).toHaveText(expectedexistingemailerror);
    const expextedValue = await this.existingemailerror.textContent();
    console.log(expextedValue);
  }

  /**
   * this function is used to 'ClickNextPageIcon' on the a manage users page
  */
  async ClickOnNextPageIcon() {
    await this.nextPageIcon.click();
  }
  /**
   * this function is used to verify the 'Previous page icon' displayed on the User List
   */
  async verifyPreviousPageIcon() {
    await expect(this.previousPageIcon).toBeVisible();
  }
  /**
   * this function is used to verify the 'next page icon' displayed on the User List
   */
  async verifyNextPageIcon() {
    await expect(this.nextPageIcon).toBeVisible();
  }

  /**
   * this function is used to 'Click on recetpassword' on the a manage users page
  */
  async ClickOnResetPassword() {
    await this.resetPassword.click();
  }

  /**
    * this function is used to 'Click on confirm Button' on the a manage users page
   */
  async ClickOnConfirmButtom() {
    await this.confirmButton.click();
  }

  /**
  * this function is used to verify the reset password with no valid email id' on Add New Users Screen
  */
  async verifypasswordResetsuccessmessage(expectedmessage: string) {
    await expect(this.resetPasswordSuccessMessage).toHaveText(expectedmessage);
    const expextedValue = await this.resetPasswordSuccessMessage.textContent();
    console.log(expextedValue);
  }

  async verifyEditPopUpComponents() {
    await this.page.waitForLoadState('networkidle');
    const isFullNameFieldVisible = await this.fullName.isVisible();
    expect(isFullNameFieldVisible).toBeTruthy();

    const isUsernameVisible = await this.username.isVisible();
    expect(isUsernameVisible).toBeTruthy();

    const isRoleVisible = await this.rolesManageUSer.isVisible();
    expect(isRoleVisible).toBeTruthy();

    const isJobPositionVisible = await this.jobPositionTextFeild.isVisible();
    expect(isJobPositionVisible).toBeTruthy();

    const isPhoneVisible = await this.phone.isVisible();
    expect(isPhoneVisible).toBeTruthy();

    const isEmailVisible = await this.emailTextFeild.isVisible();
    expect(isEmailVisible).toBeTruthy();

    const isActiveVisible = await this.active.isVisible();
    expect(isActiveVisible).toBeTruthy();

    const isUpdateVisible = await this.update.isVisible();
    expect(isUpdateVisible).toBeTruthy();
  }


}