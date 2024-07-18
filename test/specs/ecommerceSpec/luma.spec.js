import landObj from "../../pageobjects/ecommerceTask/lumaLanding.js"
import prodObj from "../../pageobjects/ecommerceTask/lumaProducts.js"
import lastObj from "../../pageobjects/ecommerceTask/lumaSelectedLasstProduct.js"
import firstObj from "../../pageobjects/ecommerceTask/lumaSelectedFirstProduct.js"
// let headeractual = ["Categories","Deals","New & featured","Pickup & delivery"]
let array1={}
let array2={}
describe("End to end flow of luma site",()=>{
    it("Launch url and validate header",async()=>{
        await landObj.loadurl();
        expect(await landObj.$landingpageheader().isDisplayed()).withContext("Header is not present").toBeTrue();
    })
    it("Select a product type",async()=>{
        await landObj.producttype()
        expect(await prodObj.$productpageheader().isDisplayed()).withContext("Header is not present").toBeTrue();
    })
    it("Select the last item displayed",async()=>{
        await prodObj.selectlastitem()
        expect(await lastObj.$selectedproductname().isDisplayed()).withContext("Header is not displayed").toBeTrue()
    })
    it("Select item and add to cart the validate header",async()=>{
        await lastObj.productspec()
        expect(await lastObj.$sizeforlastitem()).toHaveAttribute('class',expect.stringContaining('selected'));
        expect(await lastObj.$colourforlastitem()).toHaveAttribute('class',expect.stringContaining('selected'));
        expect(await lastObj.$lastitemsuccessmsg().isDisplayed()).withContext("Success message is not displayed").toBeTrue()
    })
    it("Add the product to compare and validate header",async()=>{
        await lastObj.addtocartlastobj()
        expect(await lastObj.$compareheaderforlast().isDisplayed()).withContext("Header not found").toBeTrue()
    })
    it("Check products added to cart is same as displayed beside cart icon",async()=>{
        expect(await lastObj.cartcountvalidate()).withContext("Count is not matching").toBeTrue()
    })
    it("Add another product by selecting the first item",async()=>{
        await landObj.producttype()
        await prodObj.selectfirstitem()
        await browser.pause(3000)
        expect(await lastObj.$selectedproductname().isDisplayed()).toBeTrue()
    })
    
    
})