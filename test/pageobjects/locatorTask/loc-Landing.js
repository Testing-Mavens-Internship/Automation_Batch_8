import commonloc from "./loc-Common.js";
import fs from "fs"
import path from 'path'
import { fileURLToPath } from 'url';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
 
const downloadDir= path.join(__dirname, 'testData')

class landingloc extends commonloc
{
    constructor()
    {
        super()
        this.$ifr=()=>$('//iframe[@id="coming google"]')
        this.$ifrclk=()=>$('//span[@dir="auto"][text()="Yes"]')
        this.$ifrbtn=()=>$('//span[text()="Submit"]')
        this.$ifrvalidate=()=>$('//div[@role="heading" and @aria-level="1"]')
        this.$parentvalidate=()=>$('//h3[text()="Useful Links for learning"]')
        this.$email=()=>$('//input[@title="Email"]')
        this.$pswd=()=>$('//input[@title="Password"]')
        this.$cmpny=()=>$('(//input[@placeholder="Enter your company" ])[1]')
        this.$num=()=>$('(//input[@placeholder="Enter your mobile number" ])[1]')
        this.$crush=()=>$('//input[@title="Enter your first crush name" ]')
        this.$sub=()=>$('//button[@value="Submit"]')
        this.$clickactive=()=>$('//*[local-name()="svg" and @viewBox="0 0 224 24"]')
        this.$fname=()=>$('//input[@placeholder="First Enter name"]')
        this.$secname=()=>$('//input[@placeholder="Enter Last name"]')
        this.$label=()=>$('//label[text()="User Email"]')
        this.$checkout=()=>$('//button[@class="dropbtn"]')
        this.$checkoutoption=()=>$('//a[text()="Join Training"]')
        this.$car=()=>$('//select[@id="cars"]')
        this.$caroptn=()=>$('//select[@id="cars"]/option[@value="saab"]')

        this.$choosefilebtn=()=>$('//input[@id="myFile"]')
        this.$dwnldbtn=()=>$('//a[@style="font-size: 20px; color:blue"]')

    }
    /**
     * To access iframe
     */
    async acessiframe()
    {
       const a=await this.$ifr()
        await a.scrollIntoView()
        await browser.switchToFrame(a)
        await this.$ifrclk().click()
        await this.$ifrbtn().click()

    }
    /**
     * To switch control to parent
     */
    async movetoparent()
    {
        await browser.switchToParentFrame()
    }
    async details()
    {
        let mybutton = await this.$email();
        await browser.execute((element)=>{
            element.removeAttribute('readonly')
    },mybutton)
        await this.$email().setValue("mithun@gmail.com")
        await this.$pswd().setValue("qwerty@1234")
        await this.$cmpny().setValue("Mavens")
        await this.$num().setValue("978589889")
        await this.$crush().setValue("Minnal")
        await this.$sub().click()
    }
    // async nextdetails()
    // {
    //     await this.$clickactive().click()
    //     await this.$fname().setValue("Klmnop")
    //     // let ele=await this.$secname()
    //     // await browser.execute((element)=>{
    //     //     element.removeAttribute('disabled')
    //     // },ele)
    // }
    async usefuldetails()
    {
        let element=await this.$checkout();
        await element.moveTo()
        await this.$checkoutoption().waitForClickable({timeout:5000})
        await this.$checkoutoption().click()
        await browser.switchWindow("https://selectorshub.com/xpath-practice-page/")
        await this.$car().click()
        await this.$caroptn().click()
    }
    async uploads()
    {
        this.$choosefilebtn().scrollIntoView()
        let path="abc.txt"
        let remote=await browser.uploadFile(path)
        await this.$choosefilebtn().setValue(remote)
        await browser.pause("5000")
    }
    async download() {
        const downloadDir = path.join(process.cwd(), 'testData');
        const filename = "demo.pdf";
        const filePath = path.join(downloadDir, filename);
   
        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        });
        await this.$dwnldbtn().click();
        await browser.pause(3000)
    }

}
export default new landingloc()