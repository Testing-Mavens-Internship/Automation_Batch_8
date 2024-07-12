import CommonPage from "./pg_common.js";

class HomePage extends CommonPage {

    constructor()
    {
        super();
        this.$shopIcon = () => $(`//ul[@class="md:flex items-center gap-4 hidden"]//a[text()="Shop"]`);


       
    }

    async clickOnShopIcon()
    {

    }


}
export default new HomePage();
