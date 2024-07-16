import CommonPage from "./mk_commonPage.js";

export class LandingPage extends CommonPage {
  constructor() {
    super();
    this.$mavenKonnectHeader = () => $(`//a[@class="navbar-brand"]`);
    this.$contactUs = () => $(`(//a[@class="btn1"])[1]`);
    this.$userIcon=()=>$(`//i[@class="fa fa-user"]`)
    this.$$threedots=()=>$$(`//li[@data-target="#customCarousel1"]`)
    this.$dot=(index)=>$(`//li[@data-target="#customCarousel1"][${index}]`)
    this.$yellowDot=()=>$(`//li[@class="active"]`)
  }
  async clickContactUs() {
    await this.$contactUs().click();
    await this.$contactUs().waitForClickable({
      timeout: 6000,
      timeoutMsg: "Contact us button not clicked.",
    });
  }
  async clickUserIcon(){
    await this.$userIcon().click()
  }
  async clickDots(){
    let dotcounts=await this.$$threedots().length;
    for(let i=1;i<=dotcounts;i++){
        await this.$dot(i).click()
    }
  }
}
export default new LandingPage();
