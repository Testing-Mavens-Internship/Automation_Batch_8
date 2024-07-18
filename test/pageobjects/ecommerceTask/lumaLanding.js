import Common from "./lumaCommon.js";
class Landing extends Common
{
    constructor()
    {
        super()
        this.$landingpageheader=()=>$('//a[@class="logo"]')
        this.$menlabel=()=>$('//span[text()="Men"]')
        this.$topslabel=()=>$('//a[@id="ui-id-17"]')
        this.$producttypeselect=()=>$('//a[@id="ui-id-20"]')
        this.$actionlink=()=>$('//a[@class="action add"]')
       
     }

     /**
      * Select type of product
      */
     async producttype()
     {
        let navone=await this.$menlabel()
        let navtwo=await this.$topslabel()
        await navone.moveTo();
        await this.$topslabel().waitForDisplayed({timeout:5000})
        await navtwo.moveTo()
        await this.$producttypeselect().waitForDisplayed({timeout:5000})
        await this.$producttypeselect().click()
      //   await this.$actionlink().waitForDisplayed({timeout:10000})
        
     }
  
}
export default new Landing()