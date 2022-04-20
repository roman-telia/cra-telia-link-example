const caps = {
  chrome: {
    browser: "chrome",
    browser_version: "latest",
    os: "osx",
    os_version: "big sur",
    name: "Puppeteer-jest test on Chrome",
    build: "puppeteer-jest-build-2",
    "browserstack.username":
      process.env.BROWSERSTACK_USERNAME || "jonassamulionis_MWP2ok",
    "browserstack.accessKey":
      process.env.BROWSERSTACK_ACCESS_KEY || "uxuXSpVyx2WHQP3Vs6zJ",
  },

  firefox: {
    browser: "firefox",
    browser_version: "latest",
    os: "osx",
    os_version: "big sur",
    name: "Puppeteer-jest test on Firefox",
    build: "puppeteer-jest-build-2",
    "browserstack.username":
      process.env.BROWSERSTACK_USERNAME || "jonassamulionis_MWP2ok",
    "browserstack.accessKey":
      process.env.BROWSERSTACK_ACCESS_KEY || "uxuXSpVyx2WHQP3Vs6zJ",
  },

  edge: {
    browser: "edge",
    browser_version: "latest",
    os: "osx",
    os_version: "big sur",
    name: "Puppeteer-jest test on Edge",
    build: "puppeteer-jest-build-2",
    "browserstack.username":
      process.env.BROWSERSTACK_USERNAME || "jonassamulionis_MWP2ok",
    "browserstack.accessKey":
      process.env.BROWSERSTACK_ACCESS_KEY || "uxuXSpVyx2WHQP3Vs6zJ",
  },
};

module.exports = {
  connect: {
    browserWSEndpoint: `wss://cdp.browserstack.com/puppeteer?caps=${encodeURIComponent(
      JSON.stringify(caps.edge)
    )}`,
  },
  // IMPORTANT: you can't render shadow DOM without this flag
  // getInnerHTML will be undefined without it
  launch: {
    args: [
      "--enable-experimental-web-platform-features",
      "--disable-dev-shm-usage",
    ],
  },
};
