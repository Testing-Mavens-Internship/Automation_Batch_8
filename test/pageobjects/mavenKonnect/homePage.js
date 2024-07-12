import Common from "./common.js";
class Homepage extends Common {
  constructor() {
    super();
    this.$usericon = () =>
      $(`//div[@class="user_option-box"]//i[@class="fa fa-user"]`);
    this.$$totalIndicators=()=>$$(`//li[@data-target="#customCarousel1"]`)
        this.$indicators=(index)=>$(`(//li[@data-target="#customCarousel1"])[${index}]`)
        this.$activeIndicator=()=>$(`//li[@data-target="#customCarousel1" and @class="active"]`)

  }
  async clickuserIcon() {
    await this.$usericon().click();
    await this.$usericon().waitForClickable({
      timeout: 5000,
      timeoutMsg: "user icon is not clicked",
    });
  }

  async clickIndicator(){
    let indicatorCount=await this.$$totalIndicators().length;
    for(let i=1;i<=indicatorCount;i++){
        await this.$indicators(i).click();
    }
}
}
export default new Homepage();
