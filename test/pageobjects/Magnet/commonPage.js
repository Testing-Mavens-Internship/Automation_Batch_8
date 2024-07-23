export default class commonPage{
    constructor(){
        this.$hoodieHeader=()=>$(`//h1[@id="page-title-heading"]`)
        this.$menCatogory = () => $(`//a[@id="ui-id-5"]`);
        this.$topsCatogory = () => $(`//a[@id="ui-id-17"]`);
        this.$hoodieCatogory = () => $(`//a[@id="ui-id-20"]`);

    }
    loadUrl(){


    }
    async hoverMenCat(){
        let menCat=await this.$menCatogory();
        await menCat.moveTo();

        await this.$topsCatogory().waitForDisplayed({
            timeout: 2000,
            timeoutMsg: "Men Category is not clickable"
        })
    }

    async hoverTopCat(){
        let topCat=await this.$topsCatogory();
        await topCat.moveTo();

        await this.$hoodieCatogory().waitForDisplayed({
            timeout: 2000,
            timeoutMsg: "Tops Category is not clickable"
        })
    }
    
    async clickHoodie(){
        await this.$hoodieCatogory().click();
        await this.$hoodieHeader().waitForDisplayed({
            timeout: 2000,
            timeoutMsg: "Header is not visible"
        })
    }
}

