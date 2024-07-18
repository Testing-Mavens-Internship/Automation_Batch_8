import landingPage from "../pageobjects/luma/landingPage.js"
import hoodiePage from "../pageobjects/luma/hoodiePage.js"
import productpage from "../pageobjects/luma/productpage.js";
import comparePage from "../pageobjects/luma/comparePage.js";

let itemValue=0
let cartCount=0;
let qty=0
let productName=[]
let productSku=[]
let productDescription=[]
let hoodieCount=0


describe('Automate the flow in Luma website',()=>{
    it('Load the page successfully',async()=>{
        await landingPage.loadUrl()
        expect(await landingPage.$header().isDisplayed())
        .withContext('header should be visible')
        .toBeTrue();
    })

    it("Hover on Mens catogory and s and choose hoodies and swetshirt", async () => {
        await landingPage.hoverMenCat();
        expect(await landingPage.$topsCatogory().isDisplayed())
        .withContext('tops catogory should be visible')
        .toBeTrue();
        })

    it("Hover on Top Catagory", async () => { 
        await landingPage.hoverTopCat();
        expect(await landingPage.$hoodieCatogory().isDisplayed())
        .withContext('hoodie catogory should be visible')
        .toBeTrue();
    })
    it("Click on the Hoodie Catagory", async () => {
        await landingPage.clickHoodie();
        expect(await hoodiePage.$hoodieHeader().isDisplayed())
        .withContext('header should be visible')
        .toBeTrue();
    })

    it("Count the number of products", async () => {
        hoodieCount=await hoodiePage.numProducts();
        console.log(hoodieCount)
    })

    it("Select final product to the cart", async () => {
        await hoodiePage.chooseHoodie(hoodieCount);
        expect(await productpage.$header().isDisplayed())
        .withContext('header should be visible')
        .toBeTrue();

    })

    it("Change the size", async () => {
        await productpage.changeSize();
        expect(await productpage.$size()).toHaveAttribute('class',expect.stringContaining('selected'))
    })
   
    it("Change the colour", async () => {
        await productpage.changeColour();
        expect(await productpage.$colour()).toHaveAttribute('class',expect.stringContaining('selected'))
    })

    it("Change the quantity", async () => {
        qty=2
        await productpage.changeQuantity(qty);
    })

    it("store name to a array", async () => {
        productName.push(await productpage.storeName())

    })

    it("store sku to a array", async () => {
        productSku.push(await productpage.storeSku())
    })
    
    it("store description to a array", async () => {
        productDescription.push(await productpage.storedescription())

    })

    it("Add product to cart", async () => {
        await productpage.addToCartSuccess();
        
        expect(await productpage.$addCartNotification().isDisplayed())
        .withContext('notification should be visible')
        .toBeTrue();
    })
    

//     it("Check number of items on cart icon", async () => {
//     itemValue=await productpage.cartNum()
//     expect(itemValue).toEqual(cartCount)

// })

    it("Add product to compare", async () => {
        await productpage.addToCompare();
        expect(await productpage.$comparisonAltert().isDisplayed())
        .withContext('notification should be visible')
        .toBeTrue();
    })
    it("Hover on Mens catogory and s and choose hoodies and swetshirt", async () => {
        await landingPage.hoverMenCat();
        expect(await productpage.$topsCatogory().isDisplayed())
        .withContext('tops catogory should be visible')
        .toBeTrue();
        })

    it("Hover on Top Catagory", async () => { 
        await landingPage.hoverTopCat();
        expect(await productpage.$hoodieCatogory().isDisplayed())
        .withContext('hoodie catogory should be visible')
        .toBeTrue();
    })
    it("Click on the Hoodie Catagory", async () => {
        await landingPage.clickHoodie();
        expect(await hoodiePage.$hoodieHeader().isDisplayed())
        .withContext('header should be visible')
        .toBeTrue();
    })

    it("Select first product to the cart", async () => {
        await hoodiePage.chooseHoodie(1);
        expect(await productpage.$header().isDisplayed())
        .withContext('header should be visible')
        .toBeTrue();
    })

    it("store name to a array", async () => {
        productName.push(await productpage.storeName())
        console.log(productName)

    })

    it("store sku to a array", async () => {
        productSku.push(await productpage.storeSku())
        console.log(productSku)
    })
    
    it("store description to a array", async () => {
        productDescription.push(await productpage.storedescription())
        console.log(productDescription)
    })

    it("Add product to cart", async () => {
        await productpage.addToCartFailed();
        expect(await productpage.$sizeError().isDisplayed())
        .withContext('notification should be visible')
        .toBeTrue();
        expect(await productpage.$colourError().isDisplayed())
        .withContext('notification should be visible')
        .toBeTrue();
    })
    it("Change the size", async () => {
        await productpage.changeSize();
        // expect(await productpage.$size()).toHaveAttribute('class',expect.stringContaining('selected'))
    })
   
    it("Change the colour", async () => {
        await productpage.changeColour();
        // expect(await productpage.$colour()).toHaveAttribute('class',expect.stringContaining('selected'))
    })

    it("Add product to cart", async () => {
        await productpage.addToCartSuccess();
        expect(await productpage.$addCartNotification().isDisplayed())
        .withContext('notification should be visible')
        .toBeTrue();
    })


    it("Add product to compare", async () => {
        await productpage.addToCompare();
        expect(await productpage.$comparisonAltert().isDisplayed())
        .withContext('notification should be visible')
        .toBeTrue();
    })

    it("Click on th compare list", async () => {
        await productpage.clickCompareList()
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
        expect(compareDescription).toContain(productDescription);
    });

    it("Check number of items on cart icon", async () => {
            itemValue=await productpage.cartNum()
            expect(itemValue).toEqual(3)
        
        })
    
})




