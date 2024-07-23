import commonPage from "./commonPage.js";

class componentPage extends commonPage
{
    constructor()
    {
        super()
        this.$header=()=>(`//h1[text()="Explore Components"]`)
        
    }
}
export default new componentPage()