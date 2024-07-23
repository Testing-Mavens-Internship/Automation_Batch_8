import CommonClass from "./commonFile.js";

class TravelPage extends CommonClass
{
    constructor()
    {
        super();
        this.$acButton=()=>$(`//input[@id="chk_AC"]`)
        this.$safarButton=()=>$(`//input[@id="chk_3"]`)
    }

    async selectAC(){
        await this.$acButton().click()
    }

    async selectSafar(){
        await this.$safarButton().click(
            
        )
    }
}
export default new TravelPage()