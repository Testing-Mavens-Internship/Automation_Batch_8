import CommonPage from "./commonPage.js";
export class HomePage extends CommonPage{
    constructor(){
        super();
        
        this.$logOut=()=>$(`//li[text()="Log Out"]`);
        this.$Icon=()=>$(`//*[local-name()="svg" and @viewBox="0 0 320 512"]`);
        this.$shop=()=>$(`//a[text()="Shop"]`);
        this.$wishList=()=>$(`//*[local-name()="svg" and @viewBox="0 0 16 16"]`);
        

    }
    async validate(){
        await this.$Icon().click();
    }

    async clickShopOption(){
        await this.$shop().click();
    }
    
}
export default new HomePage();