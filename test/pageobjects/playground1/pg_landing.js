import Page from "./page";
export class LandingPage extends Page{
    constructor(){
        this.$userIcon=()=>$(`//*[local-name()='svg' and @viewBox="0 0 320 512"]`);
        this.$login=()=>$(`//li[text()="Login"]`);


    }
    async clickUsericon(){
        await this.$userIcon().click(`${userIcon}`);
    }
    async clickLogin(){
        await this.$login().click(`${login}`);
    }
}
export default new LandingPage();