import pgcommon from "./commonPG.js";
class product extends pgcommon
{
    constructor()
    {
        super()
        this.$prodheader=()=>$('//div[text()="PlayGround"]')
        this.$test=()=>$('//button[contains(text(),"Add to Cart")]')
        this.$clknavigate=(item)=>$(`(//button[contains(text(),"Add to Cart")])[${item}]`)
        this.$clickonbuynow=()=>$('//p[text()="Buy Now"]');
        this.$cartheader=()=>$('//h1[@class="text-5xl text-primeColor font-titleFont font-bold"]')
        this.$cartcount=()=>$('//p[text()="Buy Now"]/following-sibling::p')
    }
    async addtocart()
    {
        let count=0;
        for(let i=1;i<=3;i++)
        {
      await this.$clknavigate(i).waitForClickable({timeout:5000})
      await this.$clknavigate(i).click();
      count++;
    }
    return count;
}
    async gotobuynow()
    {
    await this.$cartcount().waitForDisplayed({timeout:5000})
    await this.$clickonbuynow().click();
    }

}
export default new product();