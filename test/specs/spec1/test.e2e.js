import { expect } from "@wdio/globals";
import LoginPage from "./test/pageobjects/login.page.js";
import SecurePage from "./test/pageobjects/secure.page.js";

describe("My Login application", () => {
  it('checking the presence of "Swag Labs" heading', async () => {
    await LoginPage.launchUrl();
    await LoginPage.$header().waitForDisplayed({timeout:1000,timeoutMsg:"waiting for header to be displayed"})
    expect(await LoginPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBeTrue();

  });
  it("login using valid username and password", async () => {
    await LoginPage.login();
    // await browser.pause(10000);
    expect(await LoginPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBeTrue();
  });
});
