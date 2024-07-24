import commonPage from "../petStore/commonPage.js";
import

class landingPage extends commonPage {
    constructor() {
        super();
        this.$header=()=>$(`//div[@id="Header"]`)
        this.$signInButton=()=>$(`//a[text()="Sign In"]`)
        this.$registerNow=()=>$(`//a[text()="Register Now!"]`)
        this.$signInHeader=()=>$(`//p[contains(text(),"your")]`)

    }
/**
 * This function is for load the URL
 */
    async loadUrl() {
        await browser.url('https://petstore.octoperf.com/actions/Catalog.action')
        await browser.maximizeWindow()
        await this.$header().waitForDisplayed({ timeout: 10000, timeoutMsg: "Header is not visible" })
    }
/**
 * Click on sign in button to go the login Page
 */
    async clickSignIn() {
        await this.$signInButton().click()
        await this.$signInHeader().waitForDisplayed({ timeout: 10000, timeoutMsg: "Header is not visible" })
    }
/**
 * Click on the register now button to register new user
 */
    async clickRegisterNow() {
        await this.$registerNow().click()


    }



}
export default new landingPage()