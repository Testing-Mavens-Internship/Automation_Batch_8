import CommonPage from "./commonPage.js"

class CartPage extends CommonPage {
    
    constructor()
    {
        super()
        this.$$count=()=> $$('//div[@class="w-1/3 flex items-center font-titleFont font-bold text-lg"]')
        this.$exactPrice=(index)=> $(`(//div[@class="w-1/3 flex items-center font-titleFont font-bold text-lg"])[${index}]`)
        this.$cartHeader=()=> $('//h1[text()="Cart"]')
        this.$total=()=> $('//span[text()="3117.99"]')
        this.$countInc1=()=> $('(//span[text()="+"])[1]')
        this.$countInc2=()=> $('(//span[text()="+"])[2]')
        this.$total1=()=> $('//span[text()="5316.98"]')  //expect
        this.$countDec=()=> $('(//span[text()="-"])[2]')
        this.$total2=()=> $('//span[text()="4116.99"]') //expect
        this.$resetCart=()=> $('//button[text()="Reset cart"]')
        this.$cartLonely=()=> $('//h1[text()="Your Cart feels lonely."]') //expect
        this.$logoutMessage=()=> $('//div[text()="Logout Successful!"]')

    }

    // async countIncrease()
    // {
    //     await this.$countInc1().click()
    //     await this.$countInc2().click()
    //     await this.$total1().waitForDisplayed({timeout:5000})
    // }

    // async countDecrease()
    // {
    //     await this.$countDec().click()
    //     await this.$total2().waitForDisplayed({timeout:5000})
    // }

    async getPrice()
    {
        let priceCount=0
        let limit=await this.$$count().length
        for(let i=1; i<=limit ; i++)
        {
            let price=await this.$exactPrice(i).getText()
            let r = price.replace("$", '')
            let float=parseFloat(r)
            priceCount+=float
        }
        priceCount=priceCount+20
        return priceCount
    }

    async finalTotal()
    {
        let price=await this.$total().getText()
        let r=price.replace("$","")
        let final=parseFloat(r)
        return final;
    }

    async resetCart()
    {
        await this.$resetCart().click()
        await this.$cartLonely().waitForDisplayed({timeout:5000})
    }

    async logoutUser()
    {
        await this.$dropdown().waitForClickable({timeout:5000})
        await this.$dropdown().click()
        await this.$logout().waitForDisplayed({timeout:5000})
        await this.$logout().click()
        await browser.acceptAlert()
    }
}

export default new CartPage()
