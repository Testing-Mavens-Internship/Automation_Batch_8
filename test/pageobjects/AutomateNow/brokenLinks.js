import CommonPage from "./commonPage.js";
import axios from "axios";

class BrokenLink extends CommonPage {

    constructor()
    {
        super()
        this.$brokenLinkOption=()=> $('//a[@href="https://practice-automation.com/broken-links/"]')
        this.$brokenLinkHeader=()=> $('//h1[@itemprop="headline"]')
        this.$brokenLink=()=> $('//a[@href="https://practice-automation.com/broken-links/missing-page.html"]')
        this.$oops=()=> $('//h1[@itemprop="headline"]')
    }

    async clickBrokenLinkOption()
    {
        await this.$brokenLinkOption().click()
    }

    async clickBrokenLink()
    {
        await this.$brokenLink().click()
    }

    async validateResponseCode()
    {
        try
        {
            const response = await axios.get('https://practice-automation.com/broken-links/missing-page.html')
            console.log(response)
            return response
        }
        catch(error)
        {
            return error.response
        }
    }
}

export default new BrokenLink()
