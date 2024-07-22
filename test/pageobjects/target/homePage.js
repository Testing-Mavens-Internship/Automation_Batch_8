import Common from './common.js';

export class Homepage extends Common {
    constructor(){
        super();
            this.$targetLogo=()=>$(`//a[@class="sc-676073c3-0 sc-7d77c0d1-0 fCfUJD cRBlGM"]`);
            this.$navigationIcons=(icon)=>$(`//a[text()="${icon}"]`);
            this.iconsArray =['Categories', 'Deals', 'New & featured','Pickup & delivery'];
            this.$searchBar=()=>$(`//input[@id="search"]`);
            this.$submitButton=()=>$(`//button[@type="submit"]`);

    }

    async clicksearch(){
        await this.$searchBar().click();
        await this.$searchBar().setValue('Shirts');
        
    }

    async clickSubmit(){
        await this.$submitButton().click();
    }
   
}
export default new Homepage();