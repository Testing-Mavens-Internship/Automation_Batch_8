import Common from "../playground/common.js";
 
class Upload extends Common
{
    constructor()
    {
        super()
        this.$uploadNavigator=()=>$('//a[@href="/components/upload"]')
        this.$uploadHeader=()=>$('//input[@type="file"]')
        this.$uploadButton=()=>$('//input[@class="mb-4"]')
        this.$uploadVal=()=>$('//p[text()="lockscreen.jpg"]')
    }
 
    /**
     * Navigate to uploads
     */
    async uploadFile()
        {
            await this.$components().click()
            await this.$uploadNavigator().click()
            let path="photo.jpg"
            let remote=await browser.uploadFile(path)
            await this.$uploadButton().setValue(remote)
        }
     
}
export default new Upload();