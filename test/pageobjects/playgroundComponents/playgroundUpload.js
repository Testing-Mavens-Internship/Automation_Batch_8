import Common from "./playgroundCommon.js";

class Upload extends Common
{
    constructor()
    {
        super()
        this.$uploadnavigator=()=>$('//a[@href="/components/upload"]')
        this.$uploadbutton=()=>$('//input[@type="file"]')
        this.$uploadval=()=>$('//p[text()="aa.png"]')
    }

    /**
     * Navigate to uploads
     */
    async gotoupload()
    {
        await this.$components().click()
        await this.$uploadnavigator().click()
        
    }

    /**
     * Upload file
     */
    async uploadfile()
    {
        let path="aa.png"
        let remote=await browser.uploadFile(path)
        await this.$uploadbutton().setValue(remote)
    }
}
export default new Upload()