import commonlambda from "./lt-Common.js";
class landinglambda extends commonlambda
{
    constructor()
    {
        super()
        this.$myacnthoverltr=()=>$('//i[@class="icon fas fa-user"]/following-sibling::div')
        this.$regstrltr=()=>$('//span[normalize-space()="Register"]')
        
    }
    async register()
    {
        let element=await this.$myacnthoverltr()
        await element.moveTo();
        await this.$regstrltr().waitForClickable({timeout:5000});
        await this.$regstrltr().click();
    }
}
export default new landinglambda();