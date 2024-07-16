import CommonPage from "./at_commonPage.js";

export class IndexPage extends CommonPage{
    constructor(){
        super();
        this.$emailId=()=>$(`//input[@id="email"]`)
        this.$submit=()=>$(`//img[@id="enterimg"]`)
    
    }
    async enterEmail(){  
    const a = Math.floor(Math.random()*1000)  
    await this.$emailId().setValue(`username${a}@gmail.com`); 
    await this.$submit().click();
    }
}
export default new IndexPage();