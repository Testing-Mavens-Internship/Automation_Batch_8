class Contact{
    constructor(){
        this.$fname=()=>$(`//input[@name="fname"]`);
        this.$email=()=>$(`//input[@type="email"]`);
        this.$phoneNumber=()=>$(`//input[@placeholder="Phone number"]`);
        this.$message=()=>$(`//input[@placeholder="Message"]`);
        this.$sendButton=()=>$(`//button[normalize-space()="SEND"]`)

    }
    async fillContactData(name,email,phoneNumber,message){
        await this.$fname().setValue(name);
        await this.$email().setValue(email);
        await this.$phoneNumber().setValue(phoneNumber);
        await this.$message().setValue(message);
        await this.$sendButton().click();
    }
}
export default new Contact()