import Common from '../playground/common.js';

export class Login extends Common{
    constructor(){
        super();
        this.$loginHeader=()=>$(`//span[text()="PLAYGROUND"]`);
        this.$UserName=()=>$(`//input[@name="username"]`);
        this.$Password=()=>$(`//input[@name="password"]`);
        this.$submitButton=()=>$(`//button[@type="submit"]`);
    }
    async userLogin(){
        await this.$UserName().setValue("playground");
        await this.$Password().setValue("playground@TM");
        await this.$submitButton().click();
       
    }
}

export default new Login();