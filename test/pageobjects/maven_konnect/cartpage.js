import Common from "./common.js";

class Cart extends Common
{
    constructor()
    {
        super()
        this.$cartheader=()=>$(`//h1[text()='Check Out karo !']`)
        this.$fname=()=>$(`//input[@name='firstname']`)
        this.$email=()=>$(`//input[@name='email']`)
        this.$address=()=>$(`//input[@name='address']`)
        this.$city=()=>$(`//input[@name='city']`)
        this.$state=()=>$(`//input[@name='state']`)
        this.$zip=()=>$(`//input[@name='zip']`)
        this.$cardname=()=>$(`//input[@name='cardname']`)
        this.$cardnumber=()=>$(`//input[@name='cardnumber']`)
        this.$expmonth=()=>$(`//input[@name='expmonth']`)
        this.$expyear=()=>$(`//input[@name='expyear']`)
        this.$cvv=()=>$(`//input[@name='cvv']`)
        this.$checkoutbtn=()=>$(`//input[@value='Continue to checkout']`)
    }
    async checkoutinfo(fullname,email,address,city,state,zip,cardname,cardnumber,expmonth,expyear,cvv)
    {
        await this.$fname().setValue(fullname)
        await this.$email().setValue(email)
        await this.$address().setValue(address)
        await this.$city().setValue(city)
        await this.$state().setValue(state)
        await this.$zip().setValue(zip)
        await this.$cardname().setValue(cardname)
        await this.$cardnumber().setValue(cardnumber)
        await this.$expmonth().setValue(expmonth)
        await this.$expyear().setValue(expyear)
        await this.$cvv().setValue(cvv)
        await this.$checkoutbtn().click()
    }
}
export default new Cart()