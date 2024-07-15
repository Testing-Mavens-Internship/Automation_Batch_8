class CartPage{
    constructor(){
        // this.$quantityIncrement=(index)=>$(`(//span[text()="+"])[${index}]`)
        this.$$TotalPriceCount=()=>$$(`//div[@class="w-1/3 flex items-center font-titleFont font-bold text-lg"]`);
        this.$singleTotalPrice=(index)=>$(`(//div[@class="w-1/3 flex items-center font-titleFont font-bold text-lg"])[${index}]`);
        this.$Total=()=>$(`//span[@class="font-bold tracking-wide text-lg font-titleFont"]`);
        this.$shippingCharge=()=>$(`//p[text()="Shipping Charge"]/child::span[@class="font-semibold tracking-wide font-titleFont"]`);
        this.$resetButton=()=>$(`//button[text()="Reset cart"]`);
        this.$cartEmptyText=()=>$(`//h1[text()="Your Cart feels lonely."]`);
        this.$dropdownCart=()=>$(`//*[local-name()="svg" and @viewBox="0 0 320 512"]`);
        this.$logoutOption=()=>$(`//li[text()="Log Out"]`)
        this.$logoutMessage=()=>$(`//div[text()="Logout Successful!"]`)

    }
    // async incrementQuantity(){
    //     for(let i=1;i<=2;i++){
    //         await this.$quantityIncrement(i).click();
    //         quantity=2;
    //     }
    // }
    async getPriceTotal(){
        let totalPrice=0;
        let countLength=await this.$$TotalPriceCount().length;
        let shippingCharges=await this.$shippingCharge().getText();
        let shipping=parseFloat(shippingCharges.replace("$",""));

        for(let i=1;i<=countLength;i++){
           let pricestring= await this.$singleTotalPrice(i).getText();
           let price=parseFloat(pricestring.replace('$',""));
           totalPrice+=price;
        }
        return totalPrice+shipping
    }

    async getSubTotal(){
        let subtotalText= await this.$Total().getText();
        let subTotal=parseFloat(subtotalText.replace('$',""));
        return subTotal
    }
    async resetCart(){
        await this.$resetButton().click();
    }
    async logout(){
        await this.$dropdownCart().waitForClickable({timeout:5000,timeoutMsg:"dropdown is not still clicked"});
        await this.$dropdownCart().click();
        await this.$logoutOption().waitForDisplayed({timeout:5000,timeoutMsg:"Logout option is still not displayed"});
        await this.$logoutOption().click();
        await browser.acceptAlert();
    }
}
export default new CartPage()