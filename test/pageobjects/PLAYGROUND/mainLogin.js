import CommonPage from "./commonPage.js";

export class MainLoginPage extends CommonPage{
    constructor(){
        super();
        this.$userName=()=>$(`//input[@name="username"]`);
        this.$password=()=>$(`//input[@id="password"]`);
        this.$sign_In=()=>$(`//div/button[@type="submit"]`)

    }
    async signIn(){
        await this.$userName().setValue("playground");
        await this.$password().setValue("playground@TM");
        await this.$sign_In().waitForClickable({timeout:1000,timeoutMsg:"Still not clicked"})
        await this.$sign_In().click();
    }
}

export default new MainLoginPage();
