export default class common
{
   constructor()
   {
    this.$txt=()=>$('//div[text()="PlayGround"]')
   } 
   async loadurls()
   {
   await browser.maximizeWindow();
   await browser.url("https://www.playground.testingmavens.tools")
   }
}