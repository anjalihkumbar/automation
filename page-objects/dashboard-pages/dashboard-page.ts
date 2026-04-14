import { Keyboard, Locator, Page, expect } from "@playwright/test";

export class DashboardPage {
    readonly page: Page;
    readonly dashboardTitle: Locator;
    readonly pendingClaimsButton: Locator;
    readonly searchBox: Locator;
    readonly cardNumber: Locator;
    readonly menuIcon: Locator;
    readonly pageNum: Locator;
    readonly ClaimsDashboardTitle: Locator;
    readonly homeIcon: Locator;
    readonly autoAuthorizedClaims: Locator;
    readonly pendingClaims: Locator;
    readonly preCertifiedClaims: Locator;
    readonly expiringSoonClaims: Locator;
    readonly claims: Locator;
    readonly dateSlider: Locator;
    readonly exportToExcel: Locator;
    readonly pagination: Locator;
    readonly lastUpdatedDate: Locator;
    readonly serviceDate: Locator;
    readonly reference: Locator;
    readonly card: Locator;
    readonly regularMemberID: Locator;
    readonly fob: Locator;
    readonly member: Locator;
    readonly policy: Locator;
    readonly estimatedCost: Locator;
    readonly status: Locator;
    readonly paginationCount: Locator;
    readonly pendingReason: Locator;
    readonly invoice: Locator;
    readonly netClaimed: Locator;
    readonly noDataHasBeenFound: Locator;
    readonly nextPage: Locator;
    readonly claimsRecords: Locator;
    readonly previousPage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardTitle = page.locator('h1[title="Claims Dashboard"]');
        this.pendingClaimsButton = page.locator('iris-claim-status-card:nth-child(2) > iris-card-action > iris-action-base > button');
        this.searchBox = page.locator('input[title="Search"]');
        this.cardNumber = page.locator('//mat-cell//iris-base-label[@class="ng-star-inserted"]').nth(5);
        this.menuIcon = page.locator('div > div:nth-child(1) > iris-icon-action > iris-action-base > button > mat-icon > svg');
        this.pageNum = page.locator('//span[contains(text(),"250")]');
        this.ClaimsDashboardTitle = page.locator('h1[title="Claims Dashboard"]');
        this.homeIcon = page.locator("mat-icon[data-mat-icon-name='icon-home']");
        this.autoAuthorizedClaims = page.locator("p[title='Auto-Authorized Claims']");
        this.pendingClaims = page.locator("p[title='Pending Claims']");
        this.preCertifiedClaims = page.locator("p[title='Pre-certified Claims']");
        this.expiringSoonClaims = page.locator("p[title='Expiring soon']");
        this.claims = page.locator("h3[title='Claims']");
        this.dateSlider = page.locator("span[title='Selected Period']");
        this.exportToExcel = page.locator("//button[@title='Export to excel']");
        this.pagination = page.locator("mat-paginator[aria-label='Select a page']");
        this.lastUpdatedDate = page.locator("small[title='Last Update Date']");
        this.serviceDate = page.locator("small[title='Service Date']");
        this.reference = page.locator("//small[@title='Reference #']");
        this.card = page.locator("small[title='Card #']");
        this.regularMemberID = page.locator("small[title='Regulator Member ID']");
        this.fob = page.locator("small[title='FOB (class)']");
        this.member = page.locator("small[title='Member']");
        this.policy = page.locator("small[title='Policy #']");
        this.estimatedCost = page.locator("small[title='Estimated Cost']");
        this.status = page.locator("small[title='Status']");
        this.pendingReason = page.locator("small[title='Pending Reason']");
        this.invoice = page.locator("small[title='Invoice #']");
        this.netClaimed = page.locator("small[title='Net Claimed']");
        this.noDataHasBeenFound = page.locator("small[title='No Data has been found']");
        this.nextPage = page.locator("//button[@aria-label='Next page']");
        this.claimsRecords = page.locator("(//mat-table[@id='dashboardGrid']//mat-row)[1]");
        this.previousPage = page.locator("//button[@aria-label='Previous page']");
    }


    /**
     * 
     * @param expectedPageTitle This function is used to very current page title
     */
    async verifyPageTitle(expectedPageTitle: string) {
        await this.page.waitForLoadState('networkidle');
        const actualPageTitle = await this.page.title();
        expect(actualPageTitle).toBe(expectedPageTitle);
    }

    /**
      * This function is used to click on Pending Claims Buttom
      */
    async clickOnPendingClaimsButton() {
        await this.pendingClaimsButton.click();
        await this.page.waitForTimeout(5000);
    }

    async clickOnPreCertifiedClaimsButton() {
        await this.preCertifiedClaims.click();
        await this.page.waitForTimeout(5000);
    }

    async clickOnExpiringSoonClaimsButton() {
        await this.expiringSoonClaims.click();
        await this.page.waitForTimeout(5000);
    }

    /**
     * This function is used to search existing data to get search result
     * @param data - claims details
     */
    async enterSearchData(data: string) {
        await this.page.waitForLoadState('networkidle');
        await this.searchBox.fill(" ");
        await this.searchBox.fill(data);
        await this.searchBox.press('Enter');
        await this.page.waitForTimeout(15000);
    }

    /**
     * This function is used to verify the search result
     * @param expectedData - claims details used for search
     */
    async verifySearchResult(expectedData: string) {
        // await this.cardNumber.waitFor();
        await this.page.waitForLoadState('networkidle');
        const actualData = await this.cardNumber.textContent();
        console.log('name ' + actualData);
        expect(actualData).toBe(expectedData);
    }

    /**
      * This function is used to click on Menu Icon Buttom
      */
    async clickOnMenuIconButton() {
        await this.menuIcon.click();
    }

    /**
      * This function is used to click and select page option
      */
    async clickandSelectPageNum(data: string) {
        this.page.locator('//div[contains(@class,"mat-mdc-select-value")]').click();
        const pageOption = this.page.locator('//span[contains(text(),"' + data + '")]');
        pageOption.click();
    }

    /**
     * This function is used to verify the search result reasons
     * @param pendingReason - claims details used for search
     */
    public async verifySearchResultPendingReason(pendingReason: string) {

        const pendingReasonLocator = this.page.locator('small[title="' + pendingReason + '"]');

        for (let index = 0; index < await pendingReasonLocator.count(); index++) {
            expect(await pendingReasonLocator.nth(index).innerText()).toBe(pendingReason);
        }
    }

    /**
      * This function is used to verify Page number text
      */
    async verifyPageNumberValue(data: string) {
        await expect(this.pageNum).toHaveText(data);
    }

    async verifyClaimsDashboardPageTitle(expectedClaimsDashboard: string) {
        await this.page.waitForLoadState('networkidle');
        const actualClaimsDashboard = await this.ClaimsDashboardTitle.textContent();
        expect(actualClaimsDashboard).toBe(expectedClaimsDashboard);
    }

    async verifyUIComponents1(expectedClaimsDashboard: string, expectedAutoAuthorizedClaims: String, expectedPendingClaims: String, expectedPrecertifiedClaims: String, expectedExpiringSoonClaims: String) {
        await this.page.waitForLoadState('networkidle');
        //Claims Dashboard Title
        const actualClaimsDashboard = await this.ClaimsDashboardTitle.textContent();
        expect(actualClaimsDashboard).toBe(expectedClaimsDashboard);

        //Home Icon
        const isHomeIcomVisible = await this.homeIcon.isVisible();
        expect(isHomeIcomVisible).toBeTruthy();

        //AutoAuthorized Claims
        const actualAutoAuthorizedClaims = await this.autoAuthorizedClaims.textContent();
        expect(actualAutoAuthorizedClaims).toBe(expectedAutoAuthorizedClaims);

        //Pending Claims
        const actualPendingClaims = await this.pendingClaims.textContent();
        expect(actualPendingClaims).toBe(expectedPendingClaims);

        //Precertified Claims
        const actualPrecertifiedClaims = await this.preCertifiedClaims.textContent();
        expect(actualPrecertifiedClaims).toBe(expectedPrecertifiedClaims);

        //Expiring Soon
        const actualExpiringSoonClaims = await this.expiringSoonClaims.textContent();
        expect(actualExpiringSoonClaims).toBe(expectedExpiringSoonClaims);
    }

    async verifyUIComponents2(expectedClaims: string, expectedDateSlider: String) {
        await this.page.waitForLoadState('networkidle');

        //Claims Title
        const actualClaims = await this.claims.textContent();
        expect(actualClaims).toBe(expectedClaims);

        //Selected Date
        const actualDateSlider = await this.dateSlider.textContent();
        expect(actualDateSlider).toBe(expectedDateSlider);

        //Search Box
        const isSearchBoxVisible = await this.searchBox.isVisible();
        expect(isSearchBoxVisible).toBeTruthy();

        //Export to Excel
        const isExportToExcelVisible = await this.exportToExcel.isVisible();
        expect(isExportToExcelVisible).toBeTruthy();

        //Export to Excel
        const isPaginationVisible = await this.pagination.isVisible();
        expect(isPaginationVisible).toBeTruthy();
    }

    async verifyResultGridComponents1(expectedLastUpdatedDate: string, expectedServiceDate: String, expectedReference: String, expectedCard: String, expectedRegularMemberID: String) {
        await this.page.waitForLoadState('networkidle');

        //LastUpdatedDate
        const actualLastUpdatedDate = await this.lastUpdatedDate.textContent();
        expect(actualLastUpdatedDate).toBe(expectedLastUpdatedDate);

        //Service Date
        const actualServiceDate = await this.serviceDate.textContent();
        expect(actualServiceDate).toBe(expectedServiceDate);

        //LastUpdatedDate
        const actualReference = await this.reference.textContent();
        expect(actualReference).toBe(expectedReference);

        //Card
        const actualCard = await this.card.textContent();
        expect(actualCard).toBe(expectedCard);

        //RegularMemberID
        const actualRegularMemberID = await this.regularMemberID.textContent();
        expect(actualRegularMemberID).toBe(expectedRegularMemberID);
    }

    async verifyResultGridComponents2(expectedfob: string, expectedMember: String, expectedPolicy: String, expectedEstimatedCost: String, expectedStatus: String) {
        await this.page.waitForLoadState('networkidle');

        //fob
        const actualLfob = await this.fob.textContent();
        expect(actualLfob).toBe(expectedfob);

        //Member
        const actualMember = await this.member.textContent();
        expect(actualMember).toBe(expectedMember);

        //Policy
        const actualPolicy = await this.policy.textContent();
        expect(actualPolicy).toBe(expectedPolicy);

        //EstimatedCost
        const actualEstimatedCost = await this.estimatedCost.textContent();
        expect(actualEstimatedCost).toBe(expectedEstimatedCost);

        //Status
        const actualStatus = await this.status.textContent();
        expect(actualStatus).toBe(expectedStatus);
    }

    async verifyPreCertifiedClaimsTitle(expectedPreCertifiedClaims: string) {
        await this.page.waitForLoadState('networkidle');
        const actualPreCertifiedClaims = await this.preCertifiedClaims.textContent();
        expect(actualPreCertifiedClaims).toBe(expectedPreCertifiedClaims);
    }

    async verifyPendingClaimsTitle(expectedPendingClaims: string) {
        await this.page.waitForLoadState('networkidle');
        const actualPendingClaims = await this.pendingClaims.textContent();
        expect(actualPendingClaims).toBe(expectedPendingClaims);
    }

    async verifyExpiringSoonClaimsTitle(expectedExpiringSoonClaims: string) {
        await this.page.waitForLoadState('networkidle');
        const actualExpiringSoonClaims = await this.expiringSoonClaims.textContent();
        expect(actualExpiringSoonClaims).toBe(expectedExpiringSoonClaims);
    }

    async verifyResultGridComponentsPendingClaims(expectedfob: string, expectedMember: String, expectedPolicy: String, expectedEstimatedCost: String, expectedPendingReason: String) {
        await this.page.waitForLoadState('networkidle');

        //fob
        const actualLfob = await this.fob.textContent();
        expect(actualLfob).toBe(expectedfob);

        //Member
        const actualMember = await this.member.textContent();
        expect(actualMember).toBe(expectedMember);

        //Policy
        const actualPolicy = await this.policy.textContent();
        expect(actualPolicy).toBe(expectedPolicy);

        //EstimatedCost
        const actualEstimatedCost = await this.estimatedCost.textContent();
        expect(actualEstimatedCost).toBe(expectedEstimatedCost);

        //Status
        const actualPendingReason = await this.pendingReason.textContent();
        expect(actualPendingReason).toBe(expectedPendingReason);
    }

    async verifyResultGridComponentsExpiringSoon(expectedServiceDate: string, expectedReference: String, expectedInvoice: String, expectedMember: String, expectedPolicy: String, expectedNetClaimed:String, expectedStatus: String) {
        await this.page.waitForLoadState('networkidle');

        //Service Date
        const actualServiceDate = await this.serviceDate.textContent();
        expect(actualServiceDate).toBe(expectedServiceDate);

        //reference
        const actualReference = await this.reference.textContent();
        expect(actualReference).toBe(expectedReference);

        //Invoice
        const actualInvoice = await this.invoice.textContent();
        expect(actualInvoice).toBe(expectedInvoice);

        //Member
        const actualMember = await this.member.textContent();
        expect(actualMember).toBe(expectedMember);

        //Policy
        const actualPolicy = await this.policy.textContent();
        expect(actualPolicy).toBe(expectedPolicy);

        //NetClaimed
        const actualNetClaimed = await this.netClaimed.textContent();
        expect(actualNetClaimed).toBe(expectedNetClaimed);

        //Status
        const actualStatus = await this.status.textContent();
        expect(actualStatus).toBe(expectedStatus);
    }

    async verifySearchNoDataHasBeenFOund(expectedData: string) {
        // await this.cardNumber.waitFor();
        await this.page.waitForLoadState('networkidle');
        const actualData = await this.noDataHasBeenFound.textContent();
        console.log('name ' + actualData);
        expect(actualData).toBe(expectedData);
    }

    async clickOnExportToExcelButton() {
        await this.exportToExcel.click();
        await this.page.waitForTimeout(5000);
    }

    async clickOnNextPageButton() {
        await this.nextPage.click();
        await this.page.waitForTimeout(3000);
    }

    async verifyClaimsAvailability() {
        await this.page.waitForLoadState('networkidle');
        const isClaimsVisible = await this.claimsRecords.isVisible();
        expect(isClaimsVisible).toBeTruthy();
    }

    async verifyNextPageButtonDisabled() {
        await this.page.waitForLoadState('networkidle');
        const isNextPageButtonDisabled = await this.nextPage.isDisabled();
        expect(isNextPageButtonDisabled).toBeTruthy();
    }

    async clickOnPreviousPageButton() {
        await this.previousPage.click();
        await this.page.waitForTimeout(3000);
    }

    async scrollToHorizontal() {
        await this.status.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(2000);
    }

    async scrollToHorizontal1() {
        await this.pendingReason.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(2000);
    }

}