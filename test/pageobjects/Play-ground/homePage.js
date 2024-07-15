class HomePage{
    constructor(){
        this.$signInDropDown=()=>$(`//*[local-name()="svg" and @viewBox="0 0 320 512"]`);
        this.$logoutOption=()=>$(`//li[text()="Log Out"]`);
        this.$shopByCategoryLabel=()=>$(`//p[text()="Shop by Category"]`);
        this.$mobiles=()=>$(`//li[text()="Laptops"]`);

    }
    async checkLogoutOption(){
        await this.$signInDropDown().waitForClickable({timeout:5000,timeoutMsg:"Dropdown button is still not clicked"});
        await this.$signInDropDown().click();
    }
    async clickShopByCategory(){
        await this.$shopByCategoryLabel().waitForClickable({timeout:5000,timeoutMsg:"'Shop by category' is still not clicked"});
        await this.$shopByCategoryLabel().click();
    }
    async selectMobile(){
        await this.$mobiles().waitForClickable({timeout:5000,timeoutMsg:"'mobiles' option is still not clicked"});
        await this.$mobiles().click();
    }
}
export default new HomePage()