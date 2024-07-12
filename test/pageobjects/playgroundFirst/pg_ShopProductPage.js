import CommonPage from "./pg_common.js";

class ShopProduct extends CommonPage {

    constructor()
    {
        super();
        this.$ShopByColor = () => $(`//div[@class="cursor-pointer"]//span[text()="Shop by Color"]`);
        this.$ClickOnBlue = () => $(`//input[@type="checkbox" and @id="Blue"]`);
        this.$AddToCartButtonMainPage = () => $(`//h2[text()="Dell XPS 13"]/ancestor::div[@class="mt-4 flex flex-col justify-between"]/div[@class="mt-4 flex gap-4"]/button[text()="Add to Cart "]`);
        this.$BuyNowIconTagName = () => $(`//p[@class="text-xs font-semibold font-titleFont"][text()="Buy Now"]`);

        
       
    }

    async clickOnShopbyColor()
    {

    }

    async clickOnBlueColor()
    {

    }

    async $AddToCartMainPage()
    {

    }

    // async  BuyNowIcon()
    // {

    // }


}

export default new ShopProduct();
