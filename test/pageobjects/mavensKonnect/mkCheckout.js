import mkcommon from "./mkCommon.js";
class mv_CheckoutPage extends mkcommon
{
    constructor()
    {
      super()  
      this.$fullname=()=>$('//input[@id="fname"]')
      this.$email=()=>$('//input[@id="email"]')
      this.$addr=()=>$('//input[@id="adr"]')
      this.$city=()=>$('//input[@id="city"]')
      this.$state=()=>$('//input[@id="state"]')
      this.$zip=()=>$('//input[@id="zip"]')
      this.$nameoncard=()=>$('//input[@id="cname"]')
      this.$creditcardnum=()=>$('//input[@id="ccnum"]')
      this.$expmonth=()=>$('//input[@id="expmonth"]')
      this.$expyear=()=>$('//input[@id="expyear"]')
      this.$cvv=()=>$('//input[@id="cvv"]')
      this.$chkoutbtn=()=>$('//input[@type="submit"]')
    }
    async enterdetails(name,email,addr,cty,stt,zp,noc,cnm,xpm,xpy,cvv)
    {
        await this.$fullname().setValue(name)
        await this.$email().setValue(email)
        await this.$addr().setValue(addr)
        await this.$city().setValue(cty)
        await this.$state().setValue(stt)
        await this.$zip().setValue(zp)
        await this.$nameoncard().setValue(noc)
        await this.$creditcardnum().setValue(cnm)
        await this.$expmonth().setValue(xpm)
        await this.$expyear().setValue(xpy)
        await this.$cvv().setValue(cvv)
        await this.$chkoutbtn().click()
        
    }
}
export default new mv_CheckoutPage()