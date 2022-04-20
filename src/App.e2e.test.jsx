// const {Browser} = require("puppeteer");
const puppeteer = require("puppeteer");

describe("App.js", () => {
  beforeAll(async () => {
    await page.goto("https://determined-edison-30d9f8.netlify.app");
  });

  // afterEach(async () => {
  //   try {
  //     // following line of code is responsible for marking the status of the test on BrowserStack as 'passed'. You can use this code in your after hook after each test
  //     await page.evaluate((_) => {},
  //     `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "passed", reason: "Test assertion passed" } })}`);
  //   } catch {
  //     await page.evaluate((_) => {},
  //     `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "failed", reason: "Test assertion failed" } })}`);
  //   }
  // });

  // This part fails localy works fine on browserstack
  afterAll(async () => {
    await browser.close();
  });

  it("Renders hero-banner", async () => {
    // Wait for telia-hero-banner
    await page.waitForSelector("telia-hero-banner");

    // Get telia-link
    const teliaLink = await page.$("telia-hero-banner telia-link");
    // Get teliaFieldset
    const teliaFieldset = await page.$("telia-fieldset legend");

    // TODO: Simulate focus and click
    await teliaLink.focus();
    await teliaLink.click();

    // Expecting that button is there

    try {
      await expect(teliaLink).toBeTruthy();
      await expect(await teliaFieldset.isIntersectingViewport()).toBeTruthy();
      // following line of code is responsible for marking the status of the test on BrowserStack as 'passed'. You can use this code in your after hook after each test
      await page.evaluate((_) => {},
      `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "passed", reason: "Test assertion passed" } })}`);
    } catch {
      await page.evaluate((_) => {},
      `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "failed", reason: "Test assertion failed" } })}`);
    }
  });

  it("Renders filter options - telia-fieldset, telia-chip-filter ", async () => {
    // Wait for selector telia-chip-filter
    await page.waitForSelector("telia-fieldset telia-chip-filter");

    // Get telia-chip-filter
    const teliaChipFilters = await page.$$("telia-fieldset telia-chip-filter");

    await page.waitForSelector("telia-fieldset telia-button");

    // Get telia-button
    const teliaButton = await page.$("telia-fieldset telia-button");

    await page.waitForSelector("telia-product-card-hardware");

    // Get telia-product-cards before filtering
    const teliaProductCardsBefore = await page.$$(
      "telia-product-card-hardware"
    );

    await teliaChipFilters[1].focus();
    await teliaChipFilters[1].click();
    await teliaButton.click();

    // Get telia-product-cards after filtering
    const teliaProductCardsAfter = await page.$$("telia-product-card-hardware");

    // Expecting filtering to work
    expect(teliaProductCardsAfter.length).toBeLessThan(
      teliaProductCardsBefore.length
    );

    await teliaChipFilters[1].click();
    await teliaButton.click();

    // Get telia-product-cards after reset
    const teliaProductCardsReset = await page.$$("telia-product-card-hardware");

    try {
      await expect(teliaProductCardsReset.length).toBe(10);
      // following line of code is responsible for marking the status of the test on BrowserStack as 'passed'. You can use this code in your after hook after each test
      await page.evaluate((_) => {},
      `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "passed", reason: "Test assertion passed" } })}`);
    } catch {
      await page.evaluate((_) => {},
      `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "failed", reason: "Test assertion failed" } })}`);
    }
  });
});
