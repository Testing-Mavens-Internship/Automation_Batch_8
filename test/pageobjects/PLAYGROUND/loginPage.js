import CommonPage from "./commonPage.js"

export class LoginPage extends CommonPage{
    constructor(){
        super();
        this.$header=()=>$(`//p[text()="Login to your account"]`)
        this.$email=()=>$(`//input[@id="email"]`);
        this.$password=()=>$(`//input[@id="password"]`);
        this.$submit=()=>$(`//button[@type="submit"]`);
    }
    async login(){
        await this.$email().setValue("krishnakk052001@gmail.com");
        await this.$password().setValue("2224519@kpgm");
        await this.$submit().waitForClickable({timeout:1000,timeoutMsg:"Still not clicked."})
        await this.$submit().click();
    }

}
export default new LoginPage();