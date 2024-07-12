import CommonPage from "./commonPage.js";

 class LoginPage extends CommonPage {
    constructor(){
        super();
        this.$header=()=>$('//label[text()="Email Address"]')
        this.$email=()=>$('#email');
        this.$passWord=()=>$('#password');
        this.$login=()=>$('//button[text()="Login"]');
    }
    async enterCredentials(){
        await this.$email().setValue("playground@tm.com");
        await this.$passWord().setValue("123456");
        await this.$login().click();
    } 
       
    }
    export default new LoginPage();