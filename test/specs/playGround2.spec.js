import loginPage1 from "../pageobjects/PlayGroundTask2/loginPage1.js"
import landingPage from "../pageobjects/PlayGroundTask2/landingPage.js"
import loginPage2 from "../pageobjects/PlayGroundTask2/loginPage2.js"
import homePage from "../pageobjects/PlayGroundTask2/homePage.js"
import componentsPage from "../pageobjects/PlayGroundTask2/componentsPage.js"

describe('To verify workflow of PlayGround website', () => {

    it('Launch URL in browser', async () => {
        await loginPage1.loadUrl()
        expect(await loginPage1.$pgHeader().isDisplayed())
        .withContext('Expect PLAYGROUND header to be displayed')
        .toBeTrue()
    })

    it('Validate the first Login', async () => {
        await loginPage1.loginValidation1()
        expect(await loginPage1.$header()
        .isDisplayed()).withContext('Expect header to be displayed in the Landing Page')
        .toBeTrue()
    })

    it('Click on dropdown from Landing page', async () => {
        await landingPage.dropdownClick()
        expect(await loginPage2.$loginHeader()
        .isDisplayed()).withContext('Expect header to be displayed in the Login Page')
        .toBeTrue()
    })

    it('Validate the second Login', async () => {
        await loginPage2.loginValidation2()
        await loginPage1.$header().waitForDisplayed({ timeout: 5000 })
        expect(await loginPage1.$header()
        .isDisplayed()).withContext('Expect header to be displayed in the Home Page')
        .toBeTrue()
    })

    it('Check user is successfully loggedin', async () => {
        await homePage.loggedInValidation()
        await homePage.$logout().waitForDisplayed({ timeout: 5000 })
        expect(await homePage.$logout()
        .isDisplayed()).withContext('Expect Logout option to be displayed')
        .toBeTrue()
    })

    it('Click on Components tab', async () => {
        await homePage.clickComponents()
        expect(await componentsPage.$compHeader()
        .isDisplayed()).withContext('Expect Component header to be displayed')
        .toBeTrue()
    })

    it('Click on Pop Window Component', async () => {
        await componentsPage.popWindowComponent()
        expect(await componentsPage.$popWinMsg()
        .isDisplayed()).withContext('Expect message to be displayed')
        .toBeTrue()
    })

    it('Click on Table Component', async () => {
        await componentsPage.tableComponent()
        expect(await componentsPage.$header()
        .isDisplayed()).withContext('Expect header to be displayed')
        .toBeTrue()
    })

    it('Click on Loading Animation Component', async () => {
        await componentsPage.loadingAnimationComponent()
        expect(await componentsPage.$loadAnimMsg()
        .isDisplayed()).withContext('Expect message to be displayed')
        .toBeTrue()
    })

    it('Click on Tooltip Component', async () => {
        await componentsPage.tooltipComponent()
        expect(await componentsPage.$hoverMsg()
        .isDisplayed()).withContext('Expect message to be displayed')
        .toBeTrue()
    })

    it('Click on Slider Component', async () => {
        await componentsPage.sliderComponent()
        await componentsPage.slideToZero()
        expect(await componentsPage.$value0()
        .isDisplayed()).withContext('Expect Value:0 to be displayed')
        .toBeTrue()
        await componentsPage.slideToFull()
        expect(await componentsPage.$value100()
        .isDisplayed()).withContext('Expect Value:100 to be displayed')
        .toBeTrue()
    })

    it('Click on Upload Component', async () => {
        await componentsPage.uploadComponent()
        expect(await componentsPage.$filename()
        .isDisplayed()).withContext('Expect selected file to be displayed')
        .toBeTrue()

    })

})