import Common from "./playgroundCommon.js";

class Upload extends Common
{
    constructor()
    {
        super()
        this.$uploadnavigator=()=>$('//a[@href="/components/upload"]')
        this.$uploadheader=()=>$('//input[@type="file"]')
        this.$uploadbutton=()=>$('//input[@class="mb-4"]')
        this.$uploadval=()=>$('//p[text()="lockscreen.jpg"]')
    }

    /**
     * Navigate to uploads
     */
    async uploadfile()
        {
            await this.$components().click()
            await this.$uploadnavigator().click()
            let path="lockscreen.jpg"
            let remote=await browser.uploadFile(path)
            await this.$uploadbutton().setValue(remote)
        }
     
}
export default new Upload();