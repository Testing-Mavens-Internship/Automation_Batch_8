export default class CommonPage{
    constructor(){
        
    }
   async loadUrl(){
    await browser.maximizeWindow();
    await browser.url("https://demo.automationtesting.in/")
   }
   async loadUrlDownload(){
    await browser.url("https://demo.automationtesting.in/FileDownload.html")
   }
}