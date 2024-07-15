class SignInPage {
  constructor() {
    this.$loginAccountHeader = () => $(`//p[text()="Login to your account"]`);
    this.$email = () => $(`//input[@id="email"]`);
    this.$password = () => $(`//input[@id="password"]`);
    this.$loginButton = () => $(`//button[text()="Login"]`);
  }
  async signIn(email,password) {
    await this.$email().setValue(email);
    await this.$password().setValue(password);
    await this.$loginButton().click();
  }
}
export default new SignInPage();
