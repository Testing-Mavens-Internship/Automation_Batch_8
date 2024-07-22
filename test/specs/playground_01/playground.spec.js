import signInPage from "../../pageobjects/playground_01/loginPage.js";
import landPage from "../../pageobjects/playground_01/landingPage.js";
import componentsPage from "../../pageobjects/playground_01/componentsPage.js";
import popUpPage from "../../pageobjects/playground_01/popWindowPage.js";
import sliderPage from "../../pageobjects/playground_01/sliderComponentPage.js";
import loadingAnimation from "../../pageobjects/playground_01/animatedLoaderPage.js";

describe("Testing the components in the Playground web application.",()=>{

        it("Launch the URL in the browser",async()=>{
            await signInPage.launchUrl();
            expect(await landPage.$playgroundLogo().isDisplayed()).withContext("Expected header not displayed").toBeTrue();
        })
        it("Login with valid username and password.",async()=>{
            await signInPage.signIn();
            expect(await landPage.$playgroundHeader().isDisplayed()).withContext("Expected header not displayed").toBeTrue();
        
        })
        it("Click on the components option present in the navigation bar.",async()=>{
            await landPage.clickComponent();
            expect(await componentsPage.$exploreComponentsHeader().isDisplayed()).withContext("Expected header not displayed.").toBeTrue();
        })
        it("click learn more of the pop window component",async()=>{
            await componentsPage.clickPopUpWindow();
            expect(await popUpPage.$openPopUpButton().isDisplayed()).withContext("Button not displayed.");
        
         })
        it("click open popup window",async()=>{
            await popUpPage.clickPopUpButton();
            expect(await popUpPage.$popWindowContent().isDisplayed()).withContext("Content not displayed").toBeTrue();
     
         })
        it("Click the close button on the pop up content.",async()=>{
            await popUpPage.closePopUpWindow();
            expect(await popUpPage.$componentsHeader().isDisplayed()).withContext("Header not displayed.").toBeTrue();
         })
         it("Click learn more option of the 'Table Component'.",async()=>{
            await componentsPage.clickTableContent();
         })
        //  it("Click on the components option present in the navigation bar.",async()=>{
        //      await popUpPage.clickComponent();
        //      expect(await componentsPage.$exploreComponentsHeader().isDisplayed()).withContext("Expected header not displayed.").toBeTrue();
        //  })
        
        // it(`Clicking on the learn more button of the loading animation window. `,async()=>{
        //     await componentsPage.loadingAnimationLearnMore();
        //     await loadingAnimation.$loader().waitForDisplayed({timeout: 5000, reverse:true,timeoutMsg: "page is not loaded."});
        //     expect(await loadingAnimation.$contentLoader()).toBeDisplayed({timeout:5000,timeoutMsg:"Loading animation is not loading."})
        // })
    //     it("Click on the components option present in the navigation bar.",async()=>{
    //         await landPage.clickComponent();
    //         expect(await componentsPage.$exploreComponentsHeader().isDisplayed()).withContext("Expected header not displayed.").toBeTrue();
    //     })

    //     it("Click on the learn more option of the Slider component.",async()=>{
    //         await componentsPage.clickSliderComponent();
    //     })
    //    // it("slide the slider to 100 and validate the value changes.",async()=>{
    //        // await sliderPage.moveSlider()       
    //    // })
     })