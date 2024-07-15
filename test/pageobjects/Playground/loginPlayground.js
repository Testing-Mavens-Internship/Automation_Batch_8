class PlaygroundLogin {
  constructor() {
    this.$email = (email) => $(`//input[@id=${email}]`);
    this.$password = (password) => $(`//input[@id=${password}]`);
    this.$loginButton = () => $(`//button[text()="Login"]`);
  }
  async login(email, password) {
    await this.$email(email).setValue(`${email}`);
    await this.$password(password).setValue(`${password}`);
    await this.$loginButton().click();
  }
}
export default new PlaygroundLogin();
