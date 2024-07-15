import accountEdit_lambda from "../../pageobjects/LambdaTest/accountEdit_lambda.js";
import billingpage_lambda from "../../pageobjects/LambdaTest/billingpage_lambda.js";
import cartpage_lambda from "../../pageobjects/LambdaTest/cartpage_lambda.js";
import confirmorderpage_lambda from "../../pageobjects/LambdaTest/confirmorderpage_lambda.js";
import homepage_lambda from "../../pageobjects/LambdaTest/homepage_lambda.js";
import landingpage_lambda from "../../pageobjects/LambdaTest/landingpage_lambda.js"
import productdisplayPage_lambda from "../../pageobjects/LambdaTest/productdisplayPage_lambda.js";
import registerAclambda from "../../pageobjects/LambdaTest/registerAclambda.js";

describe("Verifying the functionality of lambdatest webpage",()=>{
    it("Launch the Url",async()=>{
        await landingpage_lambda.loadUrl();
        await landingpage_lambda.$header().isDisplayed();

    })
    it("Hovering to MyAcccount",async()=>{
        await landingpage_lambda.myAccountIcon()
    })
    it("Clicking on register",async()=>{
        await landingpage_lambda.ClickOnregister()
        await landingpage_lambda.$register().isDisplayed();
    })
    it("Entering details on register page",async()=>{
        const timestamp = new Date().getTime();
        const uniqueEmail = `sidharthmalhotra${timestamp}@gmail.com`;
        await registerAclambda.EnteringDetails(uniqueEmail)
        expect(await registerAclambda.$headercreated().waitForDisplayed()).withContext("expect your account created message is not displayed").toBeTrue();

    })


    it("clicking on continue buutton",async()=>{
        await accountEdit_lambda.ClickingOnContinue();
    })

    it("Clicking on Edit Account",async()=>{
        await accountEdit_lambda.ClickingOnEditAccount();
    })

    it("Editing last name",async()=>{
        await accountEdit_lambda.editingLastName();
        expect(await accountEdit_lambda.$message().isDisplayed()).withContext("Expect your account has be successfully updated message is not displayed").toBeTrue();   
    })

    it("Entering into homepage",async()=>{
        await homepage_lambda.ClickOnHomeLink();
        expect(await homepage_lambda.$header().isDisplayed()).withContext("Expect header is not present").toBeTrue();
    })

    it("Clicking on first product in top trending category",async()=>{
        await homepage_lambda.clickOnFirstProduct(); 
    })

    it("Filtering minimum and maximum priice",async()=>{
        await productdisplayPage_lambda.filteringPrice();
    })
    it("Clicking on sort option",async()=>{
        await productdisplayPage_lambda.SortingPrice();
    })
    it("sorting price low to high",async()=>{
        await productdisplayPage_lambda.selectingPriceLowToHigh();
       
    })

    it("validating the price is displayed as low to high",async()=>{
        const pricelements=await productdisplayPage_lambda.$$price();
        const prices=[];
        for(const pricelement of pricelements){
            const pricetext=await pricelement.getText();
            const price=parseFloat(pricetext.replace($,""));
            prices.push(price);
        }
        let  isSorted=true;
        for(let i=1;i<=prices.length;i++){
            if(prices[i]<prices[i-1]){
                isSorted=false;
                expect(await productdisplayPage_lambda.$selectLowtoHigh().isDisplayed()).withContext("expect price is not displayed as price low to high").toBeTrue();

            }
        }
    })

    it("Clearing values from Filter option",async()=>{
         await productdisplayPage_lambda.clearingFilteredPrice();
         const minPriceAfterClear=await productdisplayPage_lambda.$minimumPrice().getValue();
         const maxPriceAfterClear= await productdisplayPage_lambda.$maximumPrice().getValue();
         if(minPriceAfterClear ==''|| maxPriceAfterClear ==''){
            console.error("failed to clear input fields")
         }else
         {
            console.log("successfully cleared filter option")
         }
         
     })

     it("selecting Instock option from Availability dropdown",async()=>{
                await productdisplayPage_lambda.clickOnInStock()
     })

     it("Selecting apple option from manufacturer dropdown",async()=>{
        await productdisplayPage_lambda.ClickOnapple();
        
     })

     it("sorting name A to Z",async()=>{
        await productdisplayPage_lambda.SortingName();
      
     })

     it("validating the products are listed as name A to Z",async()=>{
        const nameElements=await productdisplayPage_lambda.$$appleProducts();
        const name=[];
        for(const nameElement of nameElements){
            const nameText=await nameElement.getText();
            name.push(nameText);
        }
        let appleproducts=true;
        for(const names of name){
            if( typeof names!=='string'||!names.includes('Apple','iMac','iphone')){
                appleproducts=false;
                break;
            }
            if (appleproducts) {
                console.log('All displayed products are Apple products:');
            } else {
                console.error('Not all displayed products are Apple products:');
            }
        }
     })

     it("Hovering mouse to fisrtproduct and then click on eye button",async()=>{
        await productdisplayPage_lambda.hoveringMouseToFirstProduct();
        expect(await productdisplayPage_lambda.$Validatemenu().isDisplayed())
     })

     it("clicking on size dropdown and then selecting size",async()=>{
        await productdisplayPage_lambda.SelectingSizeOption();
        await browser.pause(5000)
        
     })
     it("Adding product to the cart",async()=>{
        await productdisplayPage_lambda.clickOnAddToCart();
        expect(await productdisplayPage_lambda.$addToCartPopUp().waitForDisplayed()).withContext("expect popup message is not displayed").toBeTrue();
        await browser.pause(10000)
     })

     it("clicking on carticon displayed in header",async()=>{
        await cartpage_lambda.ClickOncartIcon();
        expect(await cartpage_lambda.$Appleproduct().isDisplayed())
     })

     it("Clicking on checkout button",async()=>{
        await cartpage_lambda.ClickOnCheckOut();
        await cartpage_lambda.$billingHeader().waitForDisplayed(({ timeout:5000,timeoutMsg:"header not found" }));
     })

     it("Entering billing details",async()=>{
        await billingpage_lambda.enteringBillingDetails();
        await confirmorderpage_lambda.$confirmHeader().isDisplayed();
     })
     it("Confirm order",async()=>{
        await confirmorderpage_lambda.ConfirmOrder();
        await confirmorderpage_lambda.clickOnContinue();
    })

    it("viewing order history",async()=>{
        await homepage_lambda.clickOnMyOrder()
    })

    it("loggging out form registered accoount",async()=>{
        await homepage_lambda.logOut();
    })


    //  it("validating the product name address and total are same on confiirm order page",async()=>{
    //     const productName=await cartpage_lambda.$Appleproduct().getText();
    //     const productTotal=await cartpage_lambda.$total().getText();

    //     const confirmOrderProductNamme=await billingpage_lambda.$billingProductname().getText()
    //     const confirmOrderTotalPrice=await billingpage_lambda.$billingProductTotal().getText()
    //     expect(confirmOrderProductNamme).toBe(productName);
    //     expect(confirmOrderTotalPrice).toBe(productTotal);
    //  })

   
})