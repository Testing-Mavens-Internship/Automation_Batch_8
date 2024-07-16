export default class CommonPage{
    constructor(){
        this.$logolocator=()=>$(`//img[@alt="PRECISIONTECH"]`) ;
    }
    async loadurl(){
        this.$logolocator().waitForDisplayed({timeout:3000})
     await browser.url("https://precisiontech.uk/")   
    }
}