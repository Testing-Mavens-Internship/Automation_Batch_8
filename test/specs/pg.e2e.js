import load from "../pageobjects/common.page";
import home from "../pageobjects/playground/homePage";
import land from "../pageobjects/playground/landing.page";
import login from "../pageobjects/playground/loginPage";
import shop from "../pageobjects/playground/ShopPage";
import cart from "../pageobjects/playground/cartpage";
import gate from "../pageobjects/playground/paymentPage";
import pro from "../pageobjects/playground/productPage"

describe('user can successfully navigate to payment gateway page', () =>{
    it('Launching page', async () => {
        await load.loadUrl();
    })
    it('click on user icon', async () => {
        await land.clickUserIcon();
    })
    
    it(' click on login option', async () => {
        await land.clickLogin();
       
    })
    it('should login with valid credentials', async () => {
        await login.validLogin()
    })
    it('click on the shop option', async()=>{
        await home.clickLogin()
    })
    it('click on shop by color', async () => {
        await shop.clickShopbyColor()

    })
    it('select blue color', async () => {
        await shop.clickBlue()
    })
    it('click on a product', async () => {
        await shop.clickProduct()
    })
    it('add the product to cart', async () => {
        await pro.clickAddtoCart()
    })
    it('click on buy now', async () => {
        await pro.clickBuynow()
    })
    it('click on proceed to checkout', async () => {
        await cart.clickProceedtoCheckout()
    })
    it('check payment gateway header is present', async () => {
        await gate.checkHeader()
    })

})
