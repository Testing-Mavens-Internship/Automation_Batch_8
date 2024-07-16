import Common from "../pg_commonpage.js";

class LoginPage extends Common{
    constructor(){
        super();
        this.$username =(x) =>$(`//input[@id='x']`)
        this.$password =(y) =>$(`//input[@id='y']`)
        this.$submit =() =>$(`//button[text()='Login']`)

    }
    async Login(){
       await this.$username().setValue("playground@tm.com");
       await this.$password().setValue("123456");
       await this.$submit().click();


    }
}
export default new LoginPage();