export default class CommonPage{
    constructor(){
 
    }
    /**
     * launch the playground Website
     */
    async loadUrl(){
        await browser.url('https://www.playground.testingmavens.tools/');
        await browser.maximizeWindow();
    }
}








//export default class CommonPage{
//     constructor(){
//       //  this.$components=()=>$('//a[text()="Components"]')
//     }
//      /**
//      * Launching the playground website
//      */
//      async loadUrl(){
//         await browser.maximizeWindow();
//         await browser.url('https://www.playground.testingmavens.tools');
//         //await this.$components().waitForDisplayed({timeout:35000, timeoutMsg: "Header hoodies is not visible"});
//     }
//     /**
//      * Click components from the navigation bar
//      */
//     // async clickComponents(){
//     //     await this.$components().click();
//     // }
// }