import CommonPage from "./commonPage.js";
class LoginPage extends CommonPage {
    constructor() {
        super();
        this.$loginHeader=()=>$(`//span[text()="PLAYGROUND"]`);
        this.$userName=()=>$(`//input[@name="username"]`);
        this.$passWord=()=>$(`//input[@name="password"]`);
        this.$loginButton=()=>$(`//button[text()="Sign In"]`);
    }
    /**
     * Login to the website using valid credentials
     */
    async login(){
        await this.$userName().setValue("playground");
        await this.$passWord().setValue("playground@TM");
        await this.$loginButton().click();
  }
}
  export default new LoginPage();




// import CommonPage from "./commonPage.js";
// class LoginPage extends CommonPage {
//     constructor(){
//         super();
//         this.$header=()=>$('//span[text()="PLAYGROUND"]')
//         this.$username=()=>$('//input[@name="username"]');
//         this.$passWord=()=>$('//input[@name="password"]');
//         this.$login=()=>$('//button[text()="Sign In"]');
//     }
//     async validLogin(){
        
//         await this.$username().setValue("playground");
//         await this.$passWord().setValue("playground@TM");
//         await this.$login().click();

//     } 
       
//     }
//     export default new LoginPage();