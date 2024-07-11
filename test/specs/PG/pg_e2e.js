import land from "../../pageobjects/playGround/landingPG.js"
import home from "../../pageobjects/playGround/homePG.js"
import user from "../../pageobjects/playGround/userloginPG.js"
import dash from "../../pageobjects/playGround/dashboardPG.js"
import prod from "../../pageobjects/playGround/productDisplayPG.js"
import crt from "../../pageobjects/playGround/cartPG.js"
describe("Add to cart then logout in playground",()=>{
    it("Launch url",async()=>{
      await land.loadurl()
      expect(await land.$header().isDisplayed()).toBeTrue(); 
    })
    it("Login using credentials",async()=>{
        await land.login()
        expect(await home.$homeheader().isDisplayed()).toBeTrue();
    })
    it("click on dropdown and click login",async()=>{
        await home.homeclk();
        expect(await user.$userloginheader().isDisplayed()).toBeTrue();
    })
    it("Enter user credentials and click on login",async()=>{
        await user.userlogin();
        expect(await home.$homeheader().isDisplayed()).toBeTrue();
    })
    it("Verify Logout option is present",async()=>{
        await dash.check()
        expect(await dash.$logoutOptn().isDisplayed()).toBeTrue();
    })
    it("Select mobile from category",async()=>{
        await dash.categoryclk();
        expect(await dash.$nxt().isDisplayed()).toBeTrue();

    })
    it("Add to cart",async()=>{
        let count =await prod.addtocart();
        let no=await prod.$cartcount();
        await prod.gotobuynow()
        // expect(no).toBe(count);
        // console.log(await browser.getWindowHandles());
})
    it("Check total amount is correct",async()=>{
        let cost=await crt.calc();
        let sum=await crt.realtotal()
        expect(cost).toBe(sum)
    })
    it("Reset the cart and validate cart is resetted",async()=>{
      await crt.reset();  
      expect(await crt.$resetvalidate().isDisplayed()).toBeTrue();
    })
    it("Logout",async()=>{
        await crt.logouts()
        // expect(await cr.logouts().isDisplayed()).toBeTrue()
    })
})