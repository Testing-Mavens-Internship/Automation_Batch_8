import commonlambda from "./lt-Common.js";
class registerlambda extends commonlambda
{
    constructor()
     {
      super()
      this.$regacntheader=()=>$('//h1[normalize-space()="Register Account"]');
      this.$fname=()=>$('//input[@name="firstname"]');
      this.$lname=()=>$('//input[@name="lastname"]');
      this.$mail=()=>$('//input[@name="email"]');
      this.$telph=()=>$('//input[@name="telephone"]');
      this.$pswd=()=>$('//input[@name="password"]');
      this.$cnfpswd=()=>$('//input[@name="confirm"]');
      this.$subscriberadio=()=>$('//label[@for="input-newsletter-no"]');
      this.$chkbox=()=>$('//label[@for="input-agree"]');
      this.$continuebtn=()=>$('//input[@value="Continue"]');
      this.$regval=()=>$('//h1[@class="page-title my-3"]')
      

    }
    async enterdetails(fnm,lnm,eml,ph,pd,cnfpd)
    {
        await this.$fname().setValue(fnm);
        await this.$lname().setValue(lnm);
        await this.$mail().setValue(eml);
        await this.$telph().setValue(ph);
        await this.$pswd().setValue(pd);
        await this.$cnfpswd().setValue(cnfpd);
        await this.$subscriberadio().click();
        await this.$chkbox().click();
        await this.$continuebtn().waitForClickable({timeout:5000});
        await this.$continuebtn().click()
    }
}
export default new registerlambda()