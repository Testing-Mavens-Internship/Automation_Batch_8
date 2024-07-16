import commonauto from "./at-common.js";

class landingauto extends commonauto
{
    constructor()
    {
    super()
    this.$emailinput=()=>$('//input[@id="email"]')
    this.$emailclk=()=>$('//img[@id="enterimg"]')
    }
    async enteremail()
    {
        
        let rnd=Math.floor(Math.random() *100);
        await this.$emailinput().setValue(`abc${rnd}+@gmail.com`);
        // console.log(email);
        await this.$emailclk().click();
    }
}
export default new landingauto()