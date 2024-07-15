class Contact{
    constructor(){
        this.$contactHeader=()=>$(`//strong[normalize-space()='CONTACT US']`);
        this.$cartIcon=()=>$(`//*[local-name()="svg" and @viewBox="0 0 40 40"]`);
    }
    async cartIconClick(){
        await this.$cartIcon().click();
    }
}
export default new Contact()