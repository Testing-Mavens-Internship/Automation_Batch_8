import MavenCommon from "./common.js";
class CheckOut extends MavenCommon{
    constructor(){
        super()
        this.$header=()=>$(`//span[normalize-space()='MavenKonnect']`)
        this.$name=()=>$(`//input[@id='fname']`)
        this.$email=()=>$(`//input[@id='email']`)
        this.$address=()=>$(`//input[@id='adr']`)
        this.$city=()=>$(`//input[@id='city']`)
        this.$state=()=>$(`//input[@id='state']`)
        this.$zip=()=>$(`//input[@id='zip']`)
        this.$cardname=()=>$(`//input[@id='cname']`)
        this.$cardnumber=()=>$(`//input[@id='ccnum']`)
        this.$expiryMonth=()=>$(`//input[@id='expmonth']`)
        this.$expiryear=()=>$(`//input[@id='expyear']`)
        this.$cvv=()=>$(`//input[@id='cvv']`)
        this.$button=()=>$(`//input[@class='btn']`)

    }
    async billingAddress(){
        await this.$name().setValue("Clinton Madhu")
        await this.$email().setValue("clinton@example.com")
        await this.$address().setValue("542 W.15th Street")
        await this.$city().setValue("New York")
        await this.$state().setValue("NY")
        await this.$zip().setValue("10001")
        await this.$cardname().setValue("Clinton")
        await this.$cardnumber().setValue("1111-2222-3333-4444")
        await this.$expiryMonth().setValue("September")
        await this.$expiryear().setValue("2022")
        await this.$cvv().setValue("352")
        await this.$button().click();
    }
}
export default new CheckOut();