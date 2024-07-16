import landobj from "../../pageobjects/lambdaTest/lt-Landing.js"
import regobj from "../../pageobjects/lambdaTest/lt-Register.js"
import editobj from "../../pageobjects/lambdaTest/lt-EditAccount.js"
import homeobj from "../../pageobjects/lambdaTest/lt-Home.js"
import prodobj from "../../pageobjects/lambdaTest/lt-Product.js"
import cartobj from "../../pageobjects/lambdaTest/lt-Cart.js"
import chkoutobj from "../../pageobjects/lambdaTest/lt-Checkout.js"

let sortreturn=true;
let regdetails=
{
    "firstname":"Kiran",
    "lastname":"Joy",
    // "mail":"kiran69@gmail.com",
    "phone":"9207688907",
    "pswd":"abcd@1234",
    "cnfm":"abcd@1234",
    "cmp":"Mavens",
    "addr":"abcdefghijk",
    "cty":"Kochi",
    "pstcd":"687905"

}
let a=Math.floor(Math.random()*100)
let mail=`abc${a}@gmail.com`;
describe("End to end flow of LAMBDATEST_PLAYGROUND",()=>{
    it("Launch URL and Validate landing page",async ()=>{
        await landobj.loadurl();
        expect(await landobj.$landwait().isDisplayed()).toBeTrue();
    })
    it("Navigate to Register Account",async()=>{
        await landobj.register();
        expect(await regobj.$regacntheader().isDisplayed()).toBeTrue();
    })
    it("Enter the details and validate registration is successful", async()=>{
        await regobj.enterdetails(
            regdetails.firstname,
            regdetails.lastname,
            mail,
            regdetails.phone,
            regdetails.pswd,
            regdetails.cnfm
        )
        expect(await regobj.$regval().isDisplayed()).toBeTrue()
    })
    it("Continue to next page",async()=>{
        await editobj.clkcontnu()
        expect(await editobj.$editpageheader().isDisplayed()).toBeTrue()
    })
    it("Edit last name and validate edit is successful",async()=>{
        await editobj.edit();
        expect(await editobj.$editsuccessvalidation().isDisplayed()).toBeTrue()
    })
    it("Navigate to Home Page and Select first item in top trending category",async()=>{
      await homeobj.gotohome();
      expect(await homeobj.$homenavval().isDisplayed()).toBeTrue();
    })
    it("Sort the product by setting minimum and maximum price and validate the result",async()=>{
        await prodobj.sortitem()
        await prodobj.sortvalidate();
        expect(await prodobj.sortvalidate()).toBeTrue()
    })
    it("Clear the price fields and validate price is cleared",async()=>{
        await prodobj.clearprice()
        expect(await prodobj.$clrprice().waitForDisplayed({reverse:true})).toBeTrue()
    })
    it("Sort instock apple products in A-Z manner and validate only apple products are displayed",async()=>{
        await prodobj.sortapple();
        expect(await prodobj.productvalidate()).toBeTrue()
    })
    it("Hover on the first product and validate an action box is diplayed",async()=>{
        await prodobj.firstobj();
        expect(await prodobj.$prodaction().isDisplayed()).toBeTrue()
    })
    it("Click on cart icon and choose medium/large then add the product to cart and validate confirm popup",async()=>{
        await cartobj.carticonclk();
        expect(await cartobj.$cartpopup().waitForDisplayed({reverse:true})).toBeTrue()
    })
    it("Click on cart and validate item is same",async()=>{
        await cartobj.gotocart()
        // expect(await prodobj.vals()).toBeTrue()
    })
    it("Enter checkout details and click on continue",async()=>{
        await chkoutobj.checkoutdetails(
            regdetails.firstname,
            regdetails.lastname,
            mail,
            regdetails.phone,
            regdetails.pswd,
            regdetails.cnfm,
            regdetails.cmp,
            regdetails.addr,
            regdetails.cty,
            regdetails.pstcd
            
        )
        // expect (await chkoutobj.prcvalidate()).toBeTrue()
    })
    it("",async()=>{
        
    })
})