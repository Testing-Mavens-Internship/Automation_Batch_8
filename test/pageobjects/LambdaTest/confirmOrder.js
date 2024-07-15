class ConfirmOrder {

    constructor()
    {
        this.$confirmPageHeader=()=> $('//h1[text()="Confirm Order"]')
        this.$prodName=()=> $('')
        this.$total=()=> $('')
        this.$address=()=> $('')
        this.$confirmBtn=()=> $('//button[text()="Confirm Order "]')
    }

    async prodValidation()
    {
        //validate product name, address & total displayed are same as order/given
    }
}

export default new ConfirmOrder()