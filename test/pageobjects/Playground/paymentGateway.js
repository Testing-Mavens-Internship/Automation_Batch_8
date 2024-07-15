class PatementGateway {
  constructor() {
    this.$paymentGateway = () =>
      $(
        `div[@class="w-full py-10 xl:py-10 flex flex-col gap-3"]/h1[text()="Payment Gateway"]`
      );
  }
}
export default new PatementGateway();
