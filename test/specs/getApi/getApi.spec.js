import getAPI from "../../pageobjects/getApi/getApi.js";

let appName = [];
const homePage = "https://qaplayground.dev/";
const notFound = "https://practice-automation.com/broken-links/missing-page.html"

describe("Get API Respose and compare it with names of the web apps", () => {
//   it("load url", async () => {
//     await browser.maximizeWindow();
//     const response = await getAPI.getApiResponse(homePage);
//     console.log(JSON.stringify(response));
//   });

  it("not found", async () => {
    await browser.maximizeWindow();
    const response = await getAPI.getApiResponseNotFound(notFound);
    await expect(response.response.status).toEqual(404);
});
});