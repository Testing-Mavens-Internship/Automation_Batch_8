class Contact {
    constructor() {
        this.$contactHeader = () => $('//h2[normalize-space()= "Contact Us"]');
        this.$fullname = () => $('//input[@name="fname"]');
        this.$email = () => $('//input[@type="email"]');
        this.$phoneNumber = () => $('//input[@placeholder="Phone number"]');
        this.$message = () => $('//input[@placeholder="Message"]');
        this.$sendButton = () => $('//button[normalize-space()="SEND"]');

    }
    async fillContactData(name,email,phoneNumber,message){
        await this.$fullname(name).setValue(name);
        await this.$email().setValue(email);
        await this.$phoneNumber().setValue(phoneNumber);
        await this.$message().setValue(message);
        await this.$sendButton().click();
    }
}
export default new Contact()