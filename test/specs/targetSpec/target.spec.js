import homepage from "../../pageobjects/target/homepage.js";

const arr=['Categories','Deals','New & featured','Pickup & delivery']

describe('Purchasing a product from Target website',()=>{
    it('Launch URL and validate logo',async()=>{
        await homepage.launchURL()
        expect(await homepage.$logo().isDisplayed()).withContext('Logo not displayed').toBeTrue()
    })
    it('Check if the tabs in the homepage like categories, deals etc. are displayed',async()=>{
        for(let head of arr)
        {
            expect(await homepage.$tabs(head).isDisplayed()).withContext('Tabs not displayed').toBeTrue()
        }
    })
    it('Click searchbar and type shirt and validate shirts header',async()=>{

    })
})