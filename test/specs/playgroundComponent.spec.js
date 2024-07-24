import loginPage from "../pageobjects/playgroundComponents/loginPage.js";
import landingPage from "../pageobjects/playgroundComponents/landingPage.js";
import componentPage from "../pageobjects/playgroundComponents/componentPage.js";
describe("Componnents in PlayGrounnd", () => {
    

    it("Lad the page successfully", async () => {
        await landingPage.loadUrl()
        expect(await landingPage.$header().isDisplayed())
    })

    it("Login", async () => {
        await loginPage.login()
        expect(await landingPage.$header().isDisplayed())
    })

    it("Click on the component", async () => {
        await landingPage.clickComponate()
        expect(await componentPage.$header().isDisplayed())
    })

    it()


})