import commonlambda from "./lt-Common.js";
class homelambda extends commonlambda
{
    constructor()
    {
        super()
        this.$homepg=()=>$('//span[normalize-space()="Home"]');
        // this.$$trenditems=()=>$$('(//div[@class="figure-caption"])')
        this.$trenditem=(item)=>$(`(//div[@class="figure-caption"])[${item}]`)
        this.$homenavval=()=>$('//h3[@class="module-title h4 m-0"]')
    }
    async gotohome()
    {
        await this.$homepg().click();
        await this.$trenditem(1).waitForClickable({timeout:5000})
        await this.$trenditem(1).click();
    }
}
export default new homelambda()