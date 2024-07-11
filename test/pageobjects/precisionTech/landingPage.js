import commonpage from "./commonPages.js";

class landing extends commonpage
{
    constructor()
    {
        super()
        this.$header=()=>$('//img[@alt="PRECISIONTECH"]')
        this.$dpdwn=()=>$('//summary[@id="HeaderMenu-solutions"]/*[local-name()="svg" and @viewBox="0 0 10 6"]')
        this.$$dpdwnoptn=()=>$$('//ul[@id="HeaderMenu-MenuList-1"]//li//a')
        this.$selectoptn=()=>$('//ul[@id="HeaderMenu-MenuList-1"]//li//a[contains(text(),"Stock Profiling and Analysis Services")]');
    }
    async clkdropdown()
    {
        await this.$dpdwn().click();
    }
    async takeoptn()
    {
        let arr=[];
        for(let item of await this.$$dpdwnoptn())
        {
            await item.waitForDisplayed({timeout:3000,timeoutMsg:"Dislayed and fetched"})
            arr.push(((await item.getText()).trim()))
            // console.log(arr);
        }
        return arr;
    }
    async clkoptn()
    {
        await this.$selectoptn().click()
        
    }
}
export default new landing(); 