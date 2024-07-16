import land from'../../pageobjects/playground1/pg_landing';
import log from './test/pageobjects/login.page';
import home from'../../pageobjects/playground1/pg_homepage';
import product from '../../pageobjects/playground1/pg_productspage';
import cart from'../../pageobjects/playground1/pg_cartPage';
import pay from '../../pageobjects/playground1/pg_paymentPage';


describe('PlayGround login and checkout end to end process.',async()=>{
        it('launch the url',async()=>{
        await land.loadurl();

    })
        it('Click on the user icon present in the navigation bar of the landing page.',async()=>{
        await land.clickUsericon();
    })
        it('Click on the login option present in the user icon.',async()=>{
await land.clickLogin();
    })
         it('Enter the valid credentials in the input field.',async()=>{
        await log.enterCredentials();
    })
         it('Click on the Login button.',async()=>{
        await log.clickLoginButton();
    })
         it('Click on the Shop option present in the navigation bar of the homepage.',async()=>{
        await home.clickOnShop();
    })
         it('Click on the Shop by color option present in the product page.',async()=>{
        await product.selectColor();
    })
         it('Click on the checkbox of the option blue from the dropdown.',async()=>{
            await product.ClickBlue();
     })
        it('Select a product from the filtered list.',async()=>{
            await product.selectProduct();
    })
        it('Click on add to cart option.',async()=>{
            await product.addProduct();
    })
        it ('Click on buy now option.',async()=>{
            await product.buynow();
    })
        it('Click on proceed to checkout.',async()=>{
            await cart.checkout();
    })
        it('Validate payment gateway.',async()=>{
            await pay.validate();
     })
    })


