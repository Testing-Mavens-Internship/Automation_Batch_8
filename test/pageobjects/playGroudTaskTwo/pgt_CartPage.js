
import CommonPage from "./pgt_CommonPage.js";

class CartPage extends CommonPage {

    constructor() {
        super();
        this.$BuyNowIconText = () => $('//p[@class="text-xs font-semibold font-titleFont"][text()="Buy Now"]');
        this.$resetCart = () => $('//button[@class="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"][text()="Reset cart"]');
        this.$$totalPriceLocatorDynamic=() => $$('//div[@class="w-1/3 flex items-center font-titleFont font-bold text-lg"]');
        this.$totalPriceLocator =(index) => $(`(//div[@class="w-1/3 flex items-center font-titleFont font-bold text-lg"])[${index}]`);
        this.$plusIncrementer =() => $(`(//span[@class="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"])[${index}]`);
        this.$shippingCharge = () =>$('//span[@class="font-semibold tracking-wide font-titleFont"][text()="20"]')
        this.$cartFinalTotal = () =>$('//span[@class="font-bold tracking-wide text-lg font-titleFont"][text()="3117.99"]')
        this.$emptyCartHeader = () =>$('//h1[@class="font-titleFont text-xl font-bold uppercase"][text()="Your Cart feels lonely."]')
        
       
    }

    async ClickToSeeCart() {

        await this.$BuyNowIconText().click();
    

    }

    async clickResetCart() {

        await this.$resetCart().click();
    }

    async clickOnLogout() {

        await this.$userIcon().waitForClickable({timeout:5000})
        await this.$userIcon().click()
        await this.$logoutIcon().waitForDisplayed({timeout:5000})
        await this.$logoutIcon().click();
        await browser.acceptAlert()
       

    }


    async userIconClick()
    {
       
        await this.$userIcon().click();
        
    }

    async totalpriceValidation()
    {

        let priceCount = 0;
        for(let i = 1 ; i<=await this.$$totalPriceLocatorDynamic().length;i++) 
        {
            let text = await this.$totalPriceLocator(i).getText();
            let replacedtext = text.replace("$", "");
            let parsedPrice = parseFloat(replacedtext);

            priceCount += parsedPrice;  
        } 
        priceCount+=20;
        return priceCount; 
    }
    async DisplayedTotal()
    {
        let finaltext=await this.$cartFinalTotal().getText();
        let finalreplacedtext=finaltext.replace("$","")
        let finalPrice=parseFloat(finalreplacedtext); 
        return finalPrice;
    }

   
    


    }

   




    

   
   



export default new CartPage();
