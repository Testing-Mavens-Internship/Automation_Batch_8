import Common from "./playgroundCommon.js";

class Upload extends Common
{
    constructor()
    {
        super()
        this.$uploadnavigator=()=>$('//a[@href="/components/upload"]')
        this.$uploadheader=()=>$('//input[@type="file"]')
    }

    /**
     * Navigate to uploads
     */
    async gotoupload()
    {
        await this.$uploadnavigator().click()
        
    }
}