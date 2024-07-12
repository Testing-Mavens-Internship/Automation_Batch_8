import CommonPage from "./pg_common.js";

class   ProductView extends CommonPage {

    constructor()
    {
        super();
        this.$SingleAddtoCart =() =>$(`//div[@class="flex flex-col gap-6"]//button[text()="Add to Cart"]`);
       
    }

    async addToCartSingleProduct()
    {

    }

    async  BuyNowIcon()
    {

    }


}

export default new ProductView();
