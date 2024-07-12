import CommonPage from "./pg_common.js";

class PaymentGateway extends CommonPage {

    constructor()
    {
        super();
        this.$PaymentGateway = () => $(`//h1[@class="text-5xl text-primeColor font-titleFont font-bold"][text()="Payment Gateway"]`);


       
    }

    async validatePaymentHeader()
    {

    }


}

export default new PaymentGateway();