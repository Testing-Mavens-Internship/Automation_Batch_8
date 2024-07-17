import Commonakbartravels from "./akbarTravelsCommon.js";

class Foodakbartravels extends Commonakbartravels
{
    constructor()
    {
        super()
        this.$akbarrecommendchkbox=()=>$('//label[@for="webcheckbox_139"]')
        this.$familywithkidschkbox=()=>$('//label[@for="webcheckbox_140"]')
        this.$viewbutton=(city)=>$(`//h3[text()='${city}']/parent::div/following-sibling::div//button[@class="book"]`)
        this.$initialbutton=()=>$('(//button[@class="book"])[1]')
        this.$citynamedisplayedbefore=()=>$('//h3[text()="Classic Vietnam"]')
        this.$citynamedisplayedafter=()=>$('//div[@class="headings"]/h2[text()="Classic Vietnam"]')
        
        
    }
    /**
     * To click on checkboxes
     */
    async clickcheckbox()
    {
        await this.$akbarrecommendchkbox().scrollIntoView();
        await this.$akbarrecommendchkbox().click();
        await this.$familywithkidschkbox().scrollIntoView();
        await this.$familywithkidschkbox().waitForClickable({timeout:5000})
        await this.$familywithkidschkbox().click()
    }

    /**
     * To click on first item 
     */
    async clickfirstitem(city)
    {
        // const beforeText=await this.$citynamedisplayedbefore().getText();
        await this.$initialbutton().scrollIntoView();
        await this.$viewbutton(city).waitForClickable({timeout:10000})
        await this.$viewbutton(city).click();
        // const afterText=await this.$citynamedisplayedafter().getText()
        
    }

}
export default new Foodakbartravels()