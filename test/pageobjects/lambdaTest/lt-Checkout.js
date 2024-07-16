import commonlambda from "./lt-Common.js";

class checkoutlambda extends commonlambda
{
    constructor()
    {
        super()
        this.$full=()=>$('//input[@id="input-payment-firstname"]')
        this.$last=()=>$('//input[@id="input-payment-lastname"]')
        this.$em=()=>$('//input[@id="input-payment-email"]')
        this.$telephone=()=>$('//input[@id="input-payment-telephone"]')
        // this.$last=()=>$('//input[@id="input-payment-lastname"]')
        this.$passwd=()=>$('//input[@id="input-payment-password"]')
        this.$confmpasswd=()=>$('//input[@id="input-payment-confirm"]')
        this.$company=()=>$('//input[@id="input-payment-company"]')
        this.$addressdetail=()=>$('//input[@id="input-payment-address-1"]')
        this.$city=()=>$('//input[@id="input-payment-city"]')
        this.$postcode=()=>$('//input[@id="input-payment-postcode"]')
        this.$ctryslct=()=>$('//select[@id="input-payment-country"]')
        this.$ctryopt=()=>$('//select[@id="input-payment-country"]/option[@value="99"]')
        this.$zoneslct=()=>$('//select[@id="input-payment-zone"]')
        this.$zoneopt=()=>$('//select[@id="input-payment-zone"]/option[@value="1490"]')
        this.$totalincart=()=>$(`(//table[@id="checkout-total"]//td[@class="text-right"])[3]`)
        this.$cntbtn=()=>$('//button[@id="button-save"]')
        this.$agreeone=()=>$('//label[@for="input-account-agree"]')
        this.$agreetwo=()=>$('//label[@for="input-agree"]')
        this.$totalactual=()=>$('(//td[@class="text-right"])[16]')
    }
    async checkoutdetails(fname,lname,cpy,addr,cty,pst)
    {
        await this.$full().setValue(fname)
        await this.$last().setValue(lname)
        // await this.$em().setValue(mail)
        // await this.$telephone().setValue(ph)
        // await this.$passwd().setValue(pswd)
        // await this.$confmpasswd().setValue(cfpswd)
        await this.$company().setValue(cpy)
        await this.$addressdetail().setValue(addr)
        await this.$city().setValue(cty)
        await this.$postcode().setValue(pst)
        await this.$ctryslct().click()
        await this.$ctryopt().click()
        await this.$zoneslct().click()
        await this.$zoneopt().click()
        // await this.$agreeone().click()
        await this.$agreetwo().click()
        await this.$cntbtn().waitForClickable({timeout:3000})
        await this.$cntbtn().click();
    }
    async prcvalidate()
    {
        let old=await this.$totalincart().getText()
        let newest=await this.$totalactual().getText()
        let a=old.replace("$","")
        let c=parseFloat(a)
        let b=newest.replace("$","")
        let d=parseFloat(b)
        if(c==d)
        {
            return true
        }
        else{
            return false;
        }
        console.log("Responded as"+ c+"   "+d)
    }
}
export default new checkoutlambda()