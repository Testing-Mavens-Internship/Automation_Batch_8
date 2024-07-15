class CheckOut {

    constructor()
    {
        this.$checkOutHeader=()=> $('//h1[text()="Check Out karo !"]')
        this.$fullName=()=> $('//input[@name="firstname"]')
        this.$email=()=> $('//input[@name="email"]')
        this.$address=()=> $('//input[@name="address"]')
        this.$city=()=> $('//input[@name="city"]')
        this.$state=()=> $('//input[@name="state"]')
        this.$zip=()=> $('//input[@name="zip"]')
        this.$nameOnCard=()=> $('//input[@name="cardname"]')
        this.$creditCardNumber=()=> $('//input[@name="cardnumber"]')
        this.$expMonth=()=> $('//input[@name="expmonth"]')
        this.$expYear=()=> $('//input[@name="expyear"]')
        this.$cvv=()=> $('//input[@name="cvv"]')
        this.$checkoutBtn=()=> $('//input[@value="Continue to checkout"]')
    }

    async enterDetails()
    {
        await this.$fullName().setValue("Athira Soman")
        await this.$email().setValue("athira01081998@gmail.com")
        await this.$address().setValue("542 W. 15th Street")
        await this.$city().setValue("New York")
        await this.$state().setValue("NY")
        await this.$zip().setValue("10001")
        await this.$nameOnCard().setValue("Athira")
        await this.$creditCardNumber().setValue("1111-2222-3333-4444")
        await this.$expMonth().setValue("September")
        await this.$expYear().setValue("2026")
        await this.$cvv().setValue("352")
        await this.$checkoutBtn().click()
    }
}

export default new CheckOut()
