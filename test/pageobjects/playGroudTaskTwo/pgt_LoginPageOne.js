import CommonPage from "./pgt_CommonPage.js";

 class LoginPageOne extends CommonPage {
    constructor()
    {
        super();
        this.$pgLogolocator = () =>$('//span[@class="bg-[#f84525] text-white px-2 rounded-md"]');
        this.$usernameInput = () =>$('//input[@name="username"]');
        this.$passwordInput = () =>$('//input[@name="password"]');
        this.$loginButton =() => $('//button[@type="submit"][text()="Sign In"]');    
    }

    async enterCredentials()

    {
        await this.$usernameInput().setValue('playground');
        await this.$passwordInput().setValue('playground@TM');
        await this.$loginButton().click();
    
    }
}

export default new LoginPageOne();
