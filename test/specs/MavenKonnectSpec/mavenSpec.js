import landingPage from "../../pageobjects/MavenKonnect/landingPage.js"
import contactUsPage from "../../pageobjects/MavenKonnect/contactUsPage.js";
import checkout from "../../pageobjects/MavenKonnect/checkout.js";


let fname=["patrick","peter","max"]
    let lname=["alli","parker","furry"]
    let email=["patrickalli1@gmail.com","peterparker2@gmail.com","maxfurry3@gmail.com"]
    let contact=["9638527412","7418529632","8527419632"]
    let message=["Hai","Hello","Hey"]

describe("Validating the MavenKonnect webpage",()=>{
it('Launch the url',async()=>{
    await landingPage.loadUrl();
    await landingPage.$header().isDisplayed();
    expect(await landingPage.$header().isDisplayed())
})


it('click on the contact us button',async()=>{
    for(let i=0;i<3;i++){
        await landingPage.clickOnContactUs();
        const handles=await browser.getWindowHandles();
        await browser.switchToWindow(handles[0]);
        await browser.pause(2000);
    }
})

for(let i=0;i<3;i++){
    it(`entering details on contact page ${i+1}`,async()=>{
    const handles=await browser.getWindowHandles();
    await browser.switchToWindow(handles[i+1]);
     await contactUsPage.Enterdetails1(`${fname[i]} ${lname[i]}`,`${email[i]}`,`${contact[i]}`,`${message[i]}`)
     await expect(browser).toHaveUrl(`https://demotmwebsite.github.io/thankyou.html?fname=${fname[i]}+${lname[i]}`)
     expect(await contactUsPage.$thankuHeader().isDisplayed()).withContext('Expect Thankyou message to be displayed').toBeTrue();

})}

// 
it("Validate the yellow colors of the small circles on the homepage",async()=>{
    await landingPage.clickIndicator();
    expect(await landingPage.$activeIndicator().isDisplayed()).withContext("Active indicator is not displayed").toBeTrue();
  });

it("clicking on the user icon",async()=>{
    const handles=await browser.getWindowHandles();
    await browser.switchToWindow(handles[0])
    await contactUsPage.ClickOnUserIcon();
})


it("Entering details on checkout page",async()=>{
    await checkout.billingAddress();
    await expect(browser).toHaveUrlContaining(`https://demotmwebsite.github.io/thankyou.html?firstname=Clinton+Madhu&email=clinton%40example.com&address=542+W.15th+Street&city=New+York&state=NY&zip=10001&cardname=Clinton&cardnumber=1111-2222-3333-4444&expmonth=September&expyear=2022&cvv=352&sameadr=on`)
})
})





// it('click on the contact us button',async()=>{
//     for(let i=0;i<3;i++){
//         await landingPage.clickOnContactUs();
//         const handles=await browser.getWindowHandles();
//         await browser.switchToWindow(handles[0]);
//         await browser.pause(2000);

//     }
// })


// it('Entering details in contact page 1',async()=>{
//     const handles=await browser.getWindowHandles();
//     await browser.switchToWindow(handles[1]);
//     await contactUsPage.Enterdetails1();
//     await browser.pause(5000);
//     await browser.acceptAlert();
//     await expect(browser).toHaveUrl('https://demotmwebsite.github.io/thankyou.html?fname=qwerty')
// expect (await contactUsPage.$thankuHeader().isDisplayed()).withContext(' expect thankyou header to be displayed').toBeTrue();
// await browser.closeWindow();
// })

// it('Entering details in contact page 2',async()=>{
//     const handles=await browser.getWindowHandles();
//     await browser.switchToWindow(handles[1]);
//     await contactUsPage.Enterdetails2();
//     await browser.pause(5000);
//     await browser.acceptAlert();
//     await expect(browser).toHaveUrl('https://demotmwebsite.github.io/thankyou.html?fname=Patrick')
// expect (await contactUsPage.$thankuHeader().isDisplayed()).withContext(' expect thankyou header to be displayed').toBeTrue();
// await browser.closeWindow();
// })
// it('Entering details in contact page 3',async()=>{
//     const handles=await browser.getWindowHandles();
//     await browser.switchToWindow(handles[1]);
//     await contactUsPage.Enterdetails3();
//     await browser.pause(5000);
//     await browser.acceptAlert();
//     await expect(browser).toHaveUrl('https://demotmwebsite.github.io/thankyou.html?fname=Peter')
// expect (await contactUsPage.$thankuHeader().isDisplayed()).withContext(' expect thankyou header to be displayed').toBeTrue();
// await browser.closeWindow();
// })

// it("switching back to landing page",async()=>{
//     const handles=await browser.getWindowHandles();
//     await browser.switchToWindow(handles[0]);
//     await browser.pause(5000)
//     expect(await contactUsPage.$header().isDisplayed()).withContext('expect maveenkonncet header to be displayed').toBeTrue();
// })


