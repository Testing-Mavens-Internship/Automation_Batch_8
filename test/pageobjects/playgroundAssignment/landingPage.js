import Common from "./common.js";

export class Land extends Common{
    constructor(){
        super();
        this.$landHeader=() => $('//div[text()="PlayGround"]');
        this.$userIcon=() => $('//*[local-name()="svg"][@viewBox="0 0 320 512"]');
        this.$userLogin=()=>$('//a/li[text()="Login"]');
    }
    async clickUserIcon(){
        await this.$userIcon().click();
    }

    async clickUserLogin(){
       await this.$userLogin().click();
    }
}
export default new Land();