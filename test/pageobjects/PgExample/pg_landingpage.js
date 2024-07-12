import Common from "../pg_commonpage.js";

class LandingPage extends Common{
    constructor(){
        super()
        this.$click =() =>$(`//*[name()='svg' and @viewBox="0 0 320 512"]`)
        this.$select = () =>$(`//li[text()='Login']`)


    }
    async Clickuser(){
await this.$click().click();

    }

    async ClickLogin(){
        (await this.$select()).click();
    }

}
export default new LandingPage();