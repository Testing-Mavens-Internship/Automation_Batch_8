import CommonPage from "./commonPage.js";
import landPage from "../../pageobjects/playground_01/landingPage.js";

export class LoginPage extends CommonPage{
    constructor(){
        super();
        this.$userName=()=>$(`//input[@name="username"]`);
        this.$password=()=>$(`//input[@id="password"]`);
        this.$signInButton=()=>$(`//div/button[@type="submit"]`)

    }
    async signIn(){
        await this.$userName().setValue("playground");
        await this.$password().setValue("playground@TM");
        await this.$signInButton().waitForClickable({timeout:1000,timeoutMsg:"Still not clicked"})
        await this.$signInButton().click();
        await landPage.$playgroundHeader().waitForDisplayed({timeout:6000,timeoutMsg: "waiting for header to be displayed"});
    }
}

export default new LoginPage();
