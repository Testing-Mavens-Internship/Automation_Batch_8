export default class commonPage {
    constructor() {
        
    }

   async loadUrl(){
    //    await browser.url(`https://demo.automationtesting.in/`)
       await browser.url(`https://demo.automationtesting.in/FileDownload.html`)
       browser.maximizeWindow()
   }
}