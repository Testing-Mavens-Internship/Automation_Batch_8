import CommonPage from "./commonPage.js";
class LoginPage extends CommonPage {
    constructor(){
        super();
        this.$header=()=>$('//span[text()="PLAYGROUND"]')
        this.$username=()=>$('//input[@name="username"]');
        this.$passWord=()=>$('//input[@name="password"]');
        this.$login=()=>$('//button[@type="submit"]');
    }
    async validLogin(){
        
        await this.$username().setValue("playground");
        await this.$passWord().setValue("playground@TM");
        await this.$login().click();

    } 
       
    }
    export default new LoginPage();