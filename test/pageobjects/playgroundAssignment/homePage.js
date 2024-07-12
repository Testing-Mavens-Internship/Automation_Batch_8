import Common from '../playgroundAssignment/common.js';

export class Home extends Common{
    constructor(){
        super();
           this.$userIcon=()=>$('//*[local-name()="svg"][@viewBox="0 0 320 512"]');
           this.$logoutOption=()=>$('//li[text()="Log Out"]');
           this.$shopByCategory=()=>$('//p[text()="Shop by Category"]');
           this.$selectMobiles=()=>$('//li[text()="Mobiles"]');
    
}
    async clickUserIcon(){
        await this.$userIcon().click();

    }
    async clickShopCategory(){
        await this.$shopByCategory().click();
    }

    async clickMobiles(){
        await this.$selectMobiles().click();
    }
}
export default new Home();