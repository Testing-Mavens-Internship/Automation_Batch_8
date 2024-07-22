import CommonPage from "./commonPage.js";

export class LandingPage extends CommonPage {
    constructor(){
        super();
     this.$$navigationBarIcons=(index)=>$$(`//div[@class="sc-ab4ee1d1-4 idfyjy"][${index}]`)
     this.$navBarIcon=()=>$$(`//div[@class="sc-ab4ee1d1-4 idfyjy"`)

    }
    async validateIcons(){
        let arr=[]
        const icons=await this.$$navigationBarIcons().length();
        for (let i=1; i<=icons;i++);
        let products=await this.$navBarIcon(i).getText();
        arr.push(products);
    }
}
export default new LandingPage();