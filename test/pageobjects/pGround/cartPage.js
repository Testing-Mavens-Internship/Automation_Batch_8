import basePage from "./commonPage.js";

class cartPage extends basePage {
    constructor() {
        super();
        this.$header = () => $('//h1[normalize-space()="Cart"]');
        this.$$incrementButton = () => $$('//span[normalize-space()="+"]');
        this.$$totalproductsincart = () => $$('//div[@class="flex w-1/3 items-center text-lg font-semibold"]');
        this.$cartproductprice = (index) => $(`(//div[@class="flex w-1/3 items-center text-lg font-semibold"])[${index}]`);
        this.$shippingcharge = () => $(`//p[text()="Shipping Charge"]/child::span`);
        this.$totalpriceincart = () => $(`//span[@class="font-bold tracking-wide text-lg font-titleFont"]`);
        this.$incrementcount = (index)=> $(`(//div[@class="w-1/3 flex items-center gap-6 text-lg"]/p)[${index}]`)
    }

    async clickIncrement() {
        
        // for (let i in this.$$incrementButton()) {
        //     await this.$$incrementButton()[i].click();
            
        // }
        for (let i = 1;i<= this.$$incrementButton().length;i++) {
            await this.$$incrementButton()[i].click();
            
        }
        
    }

    async validatecartTotalprice() {
        let totalprice =0 ;
        const productCount = await this.$$totalproductsincart().length;
        console.log(`Number of products in cart: ${productCount}`);

        for (let i = 1; i <= productCount; i++) {
            let a = await this.$cartproductprice(i).getText();
            let b = parseInt(a.replace("$", ''));
            console.log(`Price of product ${i}: ${b}`);
            totalprice += b;
            console.log(`total after update${totalprice}`);
        }

        let shippricetextextract = await this.$shippingcharge().getText();
        let extractedpriceconvertion = parseInt(shippricetextextract.replace("$", ''));
        console.log(`Shipping charge: ${extractedpriceconvertion}`);
        
        totalprice += extractedpriceconvertion;
        console.log(`Calculated total price: ${totalprice}`);
        
        return totalprice;
    }

    async validatecartTotalpriceafterincrement() {
        let totalprice =0 ;
        const productCount = await this.$$totalproductsincart().length;
        console.log(`Number of products in cart: ${productCount}`);

        for (let i = 1; i <= productCount; i++) {
            let a = await this.$cartproductprice(i).getText();
            let aincrement =  await this.$incrementcount(i).getText();
            let b = parseInt(a.replace("$", ''));
            let bincrement = parseInt(aincrement);
            console.log(`Price of product ${i}: ${b},${bincrement}`);
            totalprice += b*bincrement;
            console.log(`total after update${totalprice}`);
        }

        let shippricetextextract = await this.$shippingcharge().getText();
        let extractedpriceconvertion = parseInt(shippricetextextract.replace("$", ''));
        console.log(`Shipping charge: ${extractedpriceconvertion}`);
        
        totalprice += extractedpriceconvertion;
        console.log(`Calculated total price: ${totalprice}`);
        
        return totalprice;
    }
}

export default new cartPage();



