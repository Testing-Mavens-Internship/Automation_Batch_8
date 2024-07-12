import CommonPage from "./pg_commonPage.js";
class LoginPage extends CommonPage{
    constructor(){
        super();
        this.$email=()=>$(`//input[@id="email"]`)
        this.$password=()=>$(`//input[@id="password"]`)
        this.$loginButton=()=>$(`//button[text()="Login"]`)
    }
    enterCredentials(){

    }
    clickLoginbutton(){
        
    }
}
export default new LoginPage();