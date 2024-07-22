import axios, { Axios } from "axios";
// import key from key
import { Key } from 'webdriverio'
class Gestureone
{
    constructor()
    {
        this.$pageheader=()=>$('//h1[text()="Gestures"]')
        this.$movingbox=()=>$('//div[@id="moveMeHeader"]')
        this.$image=()=>$('//img[@id="dragMe"]')
        this.$apiurl=()=>$('https://practice-automation.com/broken-links/')
        this.$brokenlink=()=>$('//a[text()="broken link"]')

        this.$monthName=(mon)=>$(`//span[@class="ui-datepicker-month"][normalize-space()="${mon}"]`)
        this.$rightArrow=()=>$('//a[@title="Next"]')
        this.$year=(yr)=>$(`//span[@class="ui-datepicker-year"][normalize-space()="${yr}"]`)
        this.$day=()=>$('//td[@data-handler="selectDay"][normalize-space()="31"]')
        this.$textBox=()=>$('//input[@name="g1065-selectorenteradate"]')
        this.$finalDate=()=>$('//div[@class="field-value"]')
        this.$submitButton=()=>$('(//button[@class="pushbutton-wide"])[1]')

    }

    /**
     * Load url 
     */
    async loadurl()
    {
        await browser.maximizeWindow()
        await browser.url("https://practice-automation.com/gestures/")
    }

    /**
     * Move the box
     */
    async movebox()
    {
        const item=await this.$movingbox()
        const width=261
        await item.dragAndDrop({x: width,y:0})
        await browser.pause(5000)
    }


    /**
     * Move image
     */
    async moveimg()
    {
        const img=await this.$image()
        const width=86
        await img.dragAndDrop({x:width,y:0})
        await browser.pause()
    }

    /**
     * Api status checkickng
     */
    async teststatus()
    {
        await browser.url("https://practice-automation.com/broken-links/missing-page.html")
        // await this.$brokenlink().click()
        try{
        const response=await axios.get("https://practice-automation.com/broken-links/missing-page.html")
        console.log("aaaaaaaa",response)
        return response;
        }
        catch(error)
        {
            return error.response;
        }
    }

    /**
     * Calender
     */
    async calender()
    {
        await browser.url("https://practice-automation.com/calendars/")
        await this.$textBox().click();
        while(!await this.$year("2030").isDisplayed() || !await this.$monthName("December").isDisplayed())
        {
            
            {
            await this.$rightArrow().waitForClickable()
            await this.$rightArrow().click()
            }
        }
            await this.$day().click()
            await this.$submitButton().click()
            await this.$finalDate().waitForDisplayed();  
    }
}
export default new Gestureone() 