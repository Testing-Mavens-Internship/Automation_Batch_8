import Common from "./common.js";

class PlayLogin extends Common {
    constructor(){
        super();
        this.$userName=()=> $(`//input[@id="email"]`);
        this.$password=()=> $(`//input[@id="password"]`);
    }
    async login(){
        await this.$usericon().click();
        await this.$selectLogin().click();
        await this.$userName().setValue("playground@tm.com");
        await this.$password().setValue("123456");
        await this.$submitButton().click();
    }
}
export default new PlayLogin();