export class PaymentPage extends Page{
    constructor(){
        super();
        this.$header=()=>$(`//div[@class="w-full py-10 xl:py-10 flex flex-col gap-3"]/h1[text()="Payment Gateway"]`)

    }
    async validate(){
        await this.$header().isDisplayed(`${header}`);
    }
}
export default new PaymentPage();