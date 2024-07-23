import CommonPage from "./common.js";
class GesturesPage extends CommonPage {
    constructor()
    {
        super();
        this.$boxToDrag =() => $('//div[@id="moveMe"]')
        this.$divToDrag =() => $('//div[@id="div1"]')
        this.$divToDrop =() => $('//div[@id="div2"]') 
        this.$gestureHeading =() => $('//h1[text()="Gestures"]')
       
    }

    /**
     *   Drag and Drop Automate Now logo to a box on the screen
     */
    async dragAndDropAutomateNow()
    {
      const source = await this.$divToDrag();
      const target = await this.$divToDrop();
      await source.dragAndDrop(target);
      await this.$divToDrop().waitForDisplayed({timeout : 5000,timeoutMsg : 'element not visible'});
    
    }
}

export default new GesturesPage();