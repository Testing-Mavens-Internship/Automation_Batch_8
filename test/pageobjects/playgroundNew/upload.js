import Common from "./common.js"
import components from "./components.js"

class Upload extends Common
{
    constructor()
    {
        super()
        this.$learnmore=()=>$(`//h2[text()='Upload Component']/parent::div/p/following::a[1]`)
        this.$file=()=>$(`//input[@type="file"]`)
        this.$filename=()=>$(`//p[text()='HomePage.pdf']`)
    }
    
    /**
     * Upload a file 
     */
    async uploadFunction()
    {
        await components.$component().click()
        await this.$learnmore().waitForDisplayed({timeout:8000})
        await this.$learnmore().click()
        const filename='uploads/HomePage.pdf'
        const relativefilepath=await browser.uploadFile(filename)
        await this.$file().setValue(relativefilepath)
    }

   /**
    * Validate the name of the uploaded file to check if the filename matches with the uploaded file
    * @returns boolean value
    */
    async checkFileName()
    {
        let c=await this.$filename().getText()
        if(c==='HomePage.pdf')
        {
            return true
        }
        else
        {
            return false
        }
    }
}
export default new Upload()