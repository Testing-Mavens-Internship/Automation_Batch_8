import homePage from '../pageobjects/luma/homePage.js';
import productsPage from '../pageobjects/luma/productsPage.js';
import productDetails from '../pageobjects/luma/productDetailsPage.js';
import comparePage from '../pageobjects/luma/comparission.js';

let size="XS";
let color ="Yellow";
let quantity="2";
let index ="1";
let productName=[];
let productSku=[];
let productDescription=[];

describe('end to end flow of Luma', ()=>{
    it('Should load url', async ()=>{
        await homePage.loadUrl();
        expect(await homePage.$lumaLogo().isDisplayed())
            .withContext('Luma page is loaded successfully')
            .toBeTrue();
    })

    it('Should hover on men option', async ()=>{
        await homePage.hoverOverMen();
        expect(await homePage.$clickJacket().isDisplayed())
            .withContext('Jackets option is visible')
            .toBeTrue();
    })

    it('Should click on Jackets option and next page should be loaded', async ()=>{
        await homePage.clickJacket();
        expect(await productsPage.$productHeader().isDisplayed())
            .withContext('Products page is displayed')
            .toBeTrue();
    
    })

    it(`Should click on last product`, async ()=>{
        await productsPage.selectLastProduct();
        expect(await productDetails.$productDetailsHeader().isDisplayed())
            .withContext('Product details page is displayed')
            .toBeTrue();
    })
    it("store name to a array", async () => {
        productName.push(await productDetails.storeName())

    })

    it("store sku to a array", async () => {
        productSku.push(await productDetails.storeSku())
    })
    
    it("store description to a array", async () => {
        productDescription.push(await productDetails.storedescription())

    })

    it('Should select size', async ()=>{
        await productDetails.setSize(size);
        // expect(productDetails.$selectColor().isDisplayed())
        //         .withContext('size is selected')
        //         .toBeTrue();
    })

    it('Should select color', async ()=>{
        await productDetails.setColor(color);
        // expect(productDetails.$setQuantity().isDisplayed())
        //     .withContext('Color is selected')
        //     .toBeTrue();
    })

    it('Should set Quantity', async ()=>{
        await productDetails.setQuantity(quantity);
        // expect(productDetails.$addToCartButton().isDisplayed())
        //     .withContext('Quantity is set')
        //     .toBeTrue();
    })

    it('Should click on Add to Cart', async ()=>{
        await productDetails.clickAddtoCart();
        expect(await productDetails.$addToCartNotification().isDisplayed())
            .withContext('Product is added to cart')
            .toBeTrue();
    })

    it('Should click on Add to Compare', async ()=>{
        await productDetails.clickAddtoCompare();
        expect(await productDetails.$addToCompareNotification().isDisplayed())
            .withContext('Product is added to cart')
            .toBeTrue();
    })

    it('Should hover on men option', async ()=>{
        await productDetails.hoverOverMen();
        expect(await productDetails.$clickJacket().isDisplayed())
            .withContext('Jackets option is visible')
            .toBeTrue();
    })

    it('Should click on Jackets option and next page should be loaded', async ()=>{
        await productDetails.clickJacket();
        expect(await productDetails.$productHeader().isDisplayed())
            .withContext('Products page is displayed')
            .toBeTrue();
    })

    it('Should select first product', async ()=>{
        await productsPage.selectFirstProduct(index);
        expect(await productDetails.$productDetailsHeader().isDisplayed())
            .withContext('Product details page is displayed')
            .toBeTrue();
    })

    it("store name to a array", async () => {
        productName.push(await productDetails.storeName())
        console.log(productName)

    })

    it("store sku to a array", async () => {
        productSku.push(await productDetails.storeSku())
        console.log(productSku)
    })
    
    it("store description to a array", async () => {
        productDescription.push(await productDetails.storedescription())
        console.log(productDescription)
    })

    it('Should click on add to cart', async ()=>{
        await productDetails.clickAddToCartWithoutValues();
        expect(await productDetails.$sizeAlertMessage().isDisplayed())
            .withContext('Alert message for selecting size is displayed')
            .toBeTrue();
        expect(await productDetails.$colorAlertMessage().isDisplayed())
            .withContext('Alert message for selecting color is displayed')
            .toBeTrue();
    })

    it("Change the size", async () => {
        await productDetails.changeSize();
        // expect(await productpage.$size()).toHaveAttribute('class',expect.stringContaining('selected'))
    })
   
    it("Change the colour", async () => {
        await productDetails.changeColour();
        // expect(await productpage.$colour()).toHaveAttribute('class',expect.stringContaining('selected'))
    })

    it("Add product to cart", async () => {
        await productDetails.clickAddtoCart();
        expect(await productDetails.$addToCartNotification().isDisplayed())
        .withContext('notification should be visible')
        .toBeTrue();
    })


    it("Add product to compare", async () => {
        await productDetails.clickAddtoCompare();
        expect(await productDetails.$addToCompareNotification().isDisplayed())
        .withContext('notification should be visible')
        .toBeTrue();
    })

    it("Click on the compare list", async () => {
        await productDetails.clickCompareList()
        expect(await comparePage.$compareHeader().isDisplayed())
        .withContext('notification should be visible')
        .toBeTrue();
    })

    it("Compare name of products", async () => {
        const compareNames = await comparePage.compareNames();
        console.log(compareNames);
        expect(compareNames).toEqual(productName);
    });
    
    it("Compare sku of products", async () => {
        const compareSku = await comparePage.compareSku();
        console.log(compareSku);
        expect(compareSku).toEqual(productSku);
    });

    it("Compare description of products", async () => {
        const compareDescription = await comparePage.compareDescription();
        console.log(compareDescription);
        expect(compareDescription).toEqual(productDescription);
    });

    it("Check number of items on cart icon", async () => {
            let itemValue=await productDetails.cartNum()
            expect(itemValue).toEqual(3)
        
        })
    
})


