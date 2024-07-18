import Common from "./ep_common.js";

class Product extends Common
{
    constructor()
    {
        super()
        this.$header=()=>$(`//h1[text()='Desktops']`)
        this.$minprice=()=>$(`(//div[normalize-space()='Price'])[2]/following::input[@placeholder="Minimum Price"]`)
        this.$maxprice=()=>$(`(//div[normalize-space()='Price'])[2]/following::input[@placeholder="Maximum Price"]`)
        this.$cross1=()=>$(`(//a[@class="mz-filter-reset"]/i[@class="fas fa-times"])[2]`)
        this.$cross2=()=>$(`(//div[@class="mz-filter-group-header " and normalize-space()='Price'])[2]`)
        this.$sortdropdown=()=>$(`//select[@id="input-sort-212403"]`)
        this.$lowtohigh=()=>$(`//select[@id="input-sort-212403"]/option[text()='Price (Low > High)']`)
        this.$$pdtcount=()=>$$(`//div[@data-list="product-layout product-list col-12"]/div/descendant::div/div[@class='caption']/div/span`) //5
        this.$pdt=(index)=>$(`(//div[@data-list="product-layout product-list col-12"]/div/descendant::div/div[@class='caption']/div/span)[${index}]`)
        this.$available=()=>$(`//input[@id='mz-fss-0--1']/following-sibling::label[normalize-space()='In stock']`)
        this.$apple=()=>$(`//img[@alt="Apple"]/..`)
        this.$availablecross=()=>$(`(//div[normalize-space()='Availability'])[2]/a/i`)
        this.$manufacturecross=()=>$(`(//div[normalize-space()='Manufacturer'])[2]/a/i`)
        this.$sortaz=()=>$(`//select[@id="input-sort-212403"]/option[text()='Name (A - Z)']`)
        this.$$new=()=>$$(`//div[@data-list="product-layout product-list col-12"]/div/descendant::div/div[@class='caption']/h4/a`) //15
        this.$newp=(index)=>$(`(//div[@data-list="product-layout product-list col-12"]/div/descendant::div/div[@class='caption']/h4/a)[${index}]`)
        
    }
    async setPrice()
    {
        await this.$minprice().waitForDisplayed({timeout:5000})
        await this.$minprice().setValue("1008")
        await this.$maxprice().waitForDisplayed({timeout:5000})
        await this.$maxprice().setValue("2000")
    }
    async sort()
    {
        await this.$sortdropdown().waitForDisplayed({timeout:5000})
        await this.$sortdropdown().click()
        await this.$lowtohigh().waitForDisplayed({timeout:5000})
        await this.$lowtohigh().click()
    }
    async sortvalidate()
    {
    let arr=[];
    let l=await this.$$pdtcount().length;
    for(let i=1;i<=l;i++)
    {
       let a = await this.$pdt(i).getText();
       let b = a.replace("$","");
       arr.push(b);
    }
    // console.log(arr)
    for(let k=0;k<arr.length-1;k++)
    {
        if(arr[k]>arr[k+1])
        {
            return false
        }
    }
        return true
}
    
    async clearprice()
    {
        await this.$cross1().click()
        await browser.pause(5000)
    }
    async selectAvailability()
    {
        await this.$available().scrollIntoView()
        await this.$available().click()
    }
    async selectApple()
    {
        await this.$apple().scrollIntoView()
        await this.$apple().click()
    }
    async sortAZ()
    {
        await this.$sortdropdown().waitForDisplayed({timeout:5000})
        await this.$sortdropdown().click()
        await this.$sortaz().waitForDisplayed({timeout:5000})
        await this.$sortaz().click()
    }

    async productvalidate()
    {
        let tot=await this.$$new().length;
        let ret=0;
        for(let j=1;j<=tot;j++)
        {
            let txt=await this.$newp(j).getText();
            if(txt.startsWith("Apple")||txt.startsWith("iMac")||txt.startsWith("iPhone"))
            {
                ret=0;
            }
            else
            {
                ret=1;
                return false;
            }
        }
        return true;
    }

}
export default new Product()