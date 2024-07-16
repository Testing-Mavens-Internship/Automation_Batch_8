export default class commonlambda
{
    constructor()
    {
    this.$landwait=()=>$('//button[@class="type-text"]')
    this.$landheader=()=>this.$landheader('//img[@alt="Poco Electro"]');
    }
    async loadurl()
    {
        await browser.maximizeWindow();
        await browser.url("https://ecommerce-playground.lambdatest.io/")
    }
}