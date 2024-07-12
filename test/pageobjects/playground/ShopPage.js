 class ShopPage{
    constructor(){
       this.$color=()=>$('//span[text()="Shop by Color"]')
       this.$blue=()=>$('//input[@type="checkbox" and @id="Blue"]')
       this.$pro=()=>$('//img[@class="w-full h-full object-contain"])[2]')
    }

     clickShopbyColor(){
        
    }
    clickBlue(){

    }
    clickProduct(){

    }
    
}
export default new ShopPage();