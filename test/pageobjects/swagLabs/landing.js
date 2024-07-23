import CommonPage from "./common.js";

class LandingPage extends CommonPage{
    constructor(){
        super();
        this.$loginHeader=()=>$(`//div[text()="Swag Labs"]`);
        this.$enterUsername=()=>$(`//div[text()="standard_user"]`);
        this.$usernameInput=()=>$(`//input[@id="user-name"]`);
        this.$enterPassword=()=>$(`//div[text()="secret_sauce"]`);
        this.$passwordInput=()=>$(`//input[@id="password"]`);
        this.$submitButton=()=>$(`//input[@id="login-button"]`);
    }

    async enterDetails(){
        let loginUsername = await this.$enterUsername().getText();
        const usernames = loginUsername.split('\n');
        await this.$usernameInput().setValue(usernames[1]);
        let loginPassword = await this.$enterPassword().getText();
        const password = loginPassword.split('\n');
        await this.$passwordInput().setValue(password[1]);
        await this.$submitButton().click();
    }
}

export default new LandingPage();