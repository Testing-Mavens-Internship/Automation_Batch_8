import landingPage from "../../pageobjects/luma/landingPage.js";
import productPage from "../../pageobjects/luma/productsPage.js";
import productDetail from "../../pageobjects/luma/productDetailPage.js";

let lastSku=[];
let lastProduct=[];

describe("Comparing and adding products to cart and then checking out.",()=>{
    it("Launch the url of the website.",async()=>{
        await landingPage.loadUrl();
        expect(await landingPage.$websiteLogo().isDisplayed()).withContext("Logo not displayed").toBeTrue();
    })
    it("Hover over the 'Men' icon in the navigation bar.",async()=>{
        await landingPage.hoverMenIcon();
        expect(await landingPage.$topsOption().isDisplayed()).withContext("Option not present").toBeTrue();
    })
    it("Hover over 'Tops' option from the drop down and select 'Jackets'",async()=>{
        await landingPage.selectJackets();
        expect(await productPage.$jacketHeader().isDisplayed()).withContext("Header not displayed").toBeTrue();

    })
    it("Click on the last product from the Product page.",async()=>{
        await productPage.selectLastProduct();
        expect(await productDetail.$inStockHeader().isDisplayed()).withContext("Availability is not displayed.").toBeTrue();
    })
    it("Store the sku value of the product.",async()=>{
        let lastProductSku=await productDetail.storeLastSkuValue();
        lastSku.push(lastProductSku);
        console.log(lastSku);

    })
    it("Store the details of the selected product.",async()=>{
        let lastProductDetail=await this.productDetail.storeLastProductDetails();
        lastProduct.push(lastProductDetail);
        console.log(lastProduct);

    })
    it("Select the size of the product.",async()=>{
        await productDetail.selectSize();
    
    })
    it("select the color of the product.",async()=>{
        await productDetail.selectColor();
    })
    it("Set the quantity of the product.",async()=>{
        await productDetail.selectQuantity();
    })
    it("Add this product to the cart.",async()=>{
        await productDetail.addToCart();
        expect(await productDetail.$addedToCartMsg().isDisplayed()).withContext("Message is not displayed").toBeTrue();
    })
    it("Add this product to the compare option.",async()=>{
        await productDetail.addToCompare();
        expect(await productDetail.$addToCompareMsg().isDisplayed()).withContext("Message is not displayed").toBeTrue();
    
    })
    it("Hover over the 'Men' icon in the navigation bar.",async()=>{
        await landingPage.hoverMenIcon();
        expect(await landingPage.$topsOption().isDisplayed()).withContext("Option not present").toBeTrue();
    })
    it("Hover over 'Tops' option from the drop down and select 'Jackets'",async()=>{
        await landingPage.selectJackets();
        expect(await productPage.$jacketHeader().isDisplayed()).withContext("Header not displayed").toBeTrue();
    })
    it("Click on the first product from the Product page.",async()=>{
        await productPage.selectFirstProduct();
        expect(await productDetail.$inStockHeader().isDisplayed()).withContext("Availability is not displayed.").toBeTrue();
    })
    it("Validate the response when the product is added to cart without selecting the size and color.",async()=>{
        await productDetail.addToCartFirstProduct();
       // expect(await this.$sizeErrorMsg().isDisplayed()).withContext("Error message not displayed.").toBeTrue();
       // expect (await this.$colorErrorMsg().isDisplayed()).withContext("Error message not displayed.").toBeTrue();
    })
    it("select the color and size and add the product to the cart.",async()=>{
        
    })
})