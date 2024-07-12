import basePage from "./commonPage.js";

class cartPage extends basePage {
    constructor() {
        super()
        this.$header=()=>$('//h1[normalize-space()="Cart"]')
        this.$$incrementButton=()=>$$('//span[normalize-space()="+"]')
        this.$resetButton=()=>$('//div//button[normalize-space()="Reset cart"]')
        this.$$quantity=()=>$$('//div[@class="w-1/3 flex items-center gap-6 text-lg"]//p')
        this.$emptyCartHeader=()=>$('//h1[normalize-space()="Your Cart feels lonely."]')
        this.$$countPrice=()=>$$('//div[@class="w-1/3 flex items-center font-titleFont font-bold text-lg"]/p')
        this.$exactPrice=(index)=>$(`(//div[@class="w-1/3 flex items-center font-titleFont font-bold text-lg"]/p)[${index}]`)
        this.$shippingCarge=()=>$('//p[text()="Shipping Charge"]//span[@class="font-semibold tracking-wide font-titleFont"]')
        this.$totalPrice=()=>$('//span[@class="font-bold tracking-wide text-lg font-titleFont"]')
        this.$userIcon=()=>$('//div[@class="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative"]')
        this.$logoutIcon=()=>$('//li[text()="Log Out"]')
    }

    async prizeCheck(){
        let totalPrice=0;
        for(let i=1;i<=await this.$$countPrice().length;i++){
            let price= await this.$exactPrice(i).getText();
            let removeDol=price.replace('$','')
            let int=parseFloat(removeDol)
            totalPrice+=int
        }
        let ship=await this.$shippingCarge().getText();
        let shipDol=ship.replace('$','')
        let shipPrize=parseFloat(shipDol)
        let total=totalPrice+shipPrize;
        console.log(totalPrice,shipPrize,total)

        return total
    }

    async clickIncrement() {
        for (let i = 0; i < 3; i++) {
            await this.$$incrementButton()[i].click()
            await browser.pause(3000)
        }
    }

   
    
    
    async clickReset() {
        await this.$resetButton().click()
    }

    async logout(){
        await this.$dropdownCart().waitForClickable({timeout:5000,timeoutMsg:"dropdown is not still clicked"});
        await this.$dropdownCart().click();
        await this.$logoutOption().waitForDisplayed({timeout:5000,timeoutMsg:"Logout option is still not displayed"});
        await this.$logoutOption().click();
        await browser.acceptAlert();
    }

}

export default new cartPage()