export default class CommonPage{
    constructor() {
        this.$homeHeader=()=>$('//img[@alt="Poco Electro"]');
    }
    /**
     * loading url
     */
    async loadURL(){
        await browser.maximizeWindow();
        await browser.url('https://ecommerce-playground.lambdatest.io/')
    }
    async randomEmail(){
        let a= Math.floor(Math.random()*50);
        return `abc${a}@gmail.com`
    }
}