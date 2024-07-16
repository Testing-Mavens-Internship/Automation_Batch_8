import Page from "../pg_commonpage";

export class LoginPage extends Page{
    constructor(){
        super();
        this.$email=()=>$(`//input[@id="email"]`);
        this.$password=()=>$(`//input[@id="password"]`);
        this.$submit=()=>$(`//button[@type="submit"]`);

    }
    async enterCredentials(email,password){
        await this.$email().setValue(`${email}`);
        await this.$password().setValue(`${password}`);

    }
    async clickLoginButton(){
        await this.$submit().click(`${submit}`);

    }
}
export default new LoginPage();