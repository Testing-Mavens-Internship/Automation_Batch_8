import Common from "./common.js";
import array from "../../testData/nameList.json" assert { type: "json" };

class RedirectChain extends Common{
    constructor(){
        super();
        this.$locator=(name)=>$(`//p[contains(text(),"${name}")]`);
        this.$lastLocator=()=>$(`//p[contains(text(),"Last")]`);
        this.$startbtn=()=>$(`//a[@id="redirect"]`);
    }
    async chaining(){
       await this.$startbtn().click();
    //    for(let item of array.ArrayUrl){
    //     await this.$locator(item).waitForDisplayed({timeout:10000,reverse:true});
    // }
       array.ArrayUrl.forEach(async (item) => {
        await this.$locator(item).waitForDisplayed({timeout: 10000, reverse: true});
    });
    
    await this.$lastLocator().waitForDisplayed({timeout:5000})
}
}
export default new RedirectChain();