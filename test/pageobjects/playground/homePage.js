 class HomePage{
    constructor(){
        this.$shop=()=>$('//a[text()="Shop"]')
       
    }

     async clickShop(){
        await this.$shop().click();

        
    }
   
}
export default new HomePage();

