import commonlambda from "./lt-Common.js";
class productlambda extends commonlambda
{
    constructor()
    {
        super()
        this.$ab=()=>$('//h4[@class="title"]')
        this.$min=()=>$('//div[@id="mz-filter-0"]/div/following-sibling::div[@id="mz-filter-content-0"]/div//div[@id="mz-filter-panel-0-0"]//input[@placeholder="Minimum Price"]')
        this.$max=()=>$('//div[@id="mz-filter-0"]/div/following-sibling::div[@id="mz-filter-content-0"]/div//div[@id="mz-filter-panel-0-0"]//input[@placeholder="Maximum Price"]')
        this.$selectbox=()=>$('//select[@id="input-sort-212403"]')
        this.$lowtohigh=()=>$('//select[@id="input-sort-212403"]//option[@value="https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=20&sort=p.price&order=ASC&mz_fp=1008p20000"]')
        this.$atoz=()=>$('//select[@id="input-sort-212403"]/option[normalize-space()="Name (A - Z)"]')
        this.$$pricelst=()=>$$('(//span[@class="price-new"])')
        this.$price=(pr)=>$(`(//span[@class="price-new"])[${pr}]`)
        this.$clrprice=()=>$('//div[@id="mz-filter-content-0"]/div[@class="mz-filter-group price"]//i[@class="fas fa-times"]')
        this.$instock=()=>$('//div[@id="mz-filter-panel-0-5"]//div[@class="custom-control custom-checkbox"]/label[@for="mz-fss-0--1"]')
        this.$apple=()=>$('//label[@for="mz-fm-0-8"]')
        this.$$prodlist=()=>$$('(//a[@class="text-ellipsis-2"])')
        this.$prod=(prod)=>$(`(//a[@class="text-ellipsis-2"])[${prod}]`)
        this.$firstitm=()=>$('//a[@id="mz-product-grid-image-42-212408"]')
        this.$prodaction=()=>$('//div[@class="product-action"]/button[@class="btn btn-cart cart-42"]')
        
    }
    async sortitem()
    {
        await this.$min().setValue(1008)
        await this.$max().setValue(20000)
        await this.$selectbox().click()
        await this.$lowtohigh().waitForDisplayed({timeout:4000})
        await this.$lowtohigh().click()
    }
        async sortvalidate()
        {
        let arr=[];
        let l=await this.$$pricelst().length;
        for(let i=1;i<=l;i++)
        {
           let a = await this.$price(i).getText();
           let b = a.replace("$","");
           arr.push(b);
        }
        console.log(arr)
        for(let k=0;k<arr.length-1;k++)
        {
            if(arr[k]>arr[k+1])
            {
                return false
            }
        }
        return true;
        
         }

    async clearprice()
    {
        await this.$clrprice().waitForClickable({timeout:5000});
        await this.$clrprice().click();
    }
    async sortapple()
    {
        await this.$instock().click();
        await this.$apple().waitForClickable({timeout:4000});
        await this.$apple().click();
        await this.$selectbox().waitForClickable({timeout:3000});
        await this.$selectbox().click();
        await this.$atoz().waitForDisplayed({timeout:7000});
        await this.$atoz().click();
    }
    async productvalidate()
    {
        let tot=await this.$$prodlist().length;
        let ret=0;
        for(let j=1;j<=tot;j++)
        {
            let txt=await this.$prod(j).getText();
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
    async firstobj()
    {
        let itm=await this.$firstitm();
        await itm.moveTo();
    // await browser.pause(5000)
    }
    // async vals()
    // {
    //     let ft=await this.$ab().getText()
    //     let ct=await this.$firstitm().getText()
    //     if(ft===lt)
    //         {
    //             return true;
    //         }    
    //     else{return false}
    
    // }
}
export default new productlambda()