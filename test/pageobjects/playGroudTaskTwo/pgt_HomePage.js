import CommonPage from "./pgt_CommonPage.js";

class HomePage extends CommonPage {


    constructor()
    {
        super();
     
        this.$logoutIcon = () => $('//li[text()="Log Out"]');
        this.$userIconHome = () => $("//*[local-name()='svg' and @stroke='currentColor']/*[local-name()='path' and @d='M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z']");
        this.$pgheader = () => $('//div[text()="PlayGround"]');
        this.$shopByCategoryIcon = () => $('//p[@class="text-[14px] font-normal"][text()="Shop by Category"]');
        this.$mobileCategoryIcon = () => $('//li[@class="text-gray-700 px-4 py-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"][text()="Mobiles"]');
        this.$shopIcon = () => $('//a[@class="font-medium text-gray-600 hover:text-gray-900  transition-colors duration-300 border-b-2 border-transparent hover:border-indigo-500 py-2 px-4"][text()="Shop"]');
    }

    async LogOutButtonCheck()
    {
       
        await this.$userIconHome().click();
        
    }

    async clickOnShopByCategory()
    {
        await this.$shopIcon().click();
        await this.$shopByCategoryIcon().click();
        await this.$mobileCategoryIcon().click();
    }


}

export default new HomePage();