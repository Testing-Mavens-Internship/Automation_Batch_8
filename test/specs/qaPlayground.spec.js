import sorting from "../pageobjects/qaPlayground/sortingPeoples.js"
describe('Testing components functionalities in qaPlayground site',()=>{
    it("Launch Url and validate header",async()=>{
        await sorting.loadUrl();
    })
    it(`Sorting the names`,async()=>{
        await sorting.sorting();
        await sorting.$button().click();
        await browser.pause(5000);
    })

})