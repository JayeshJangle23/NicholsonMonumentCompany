
// import { chromium, webkit } from "playwright"

// async function testBrowser(browserType, browserName) {
//   let browser;

//   try {
//     console.log(`\n========== ${browserName} TEST ==========\n`);

//     browser = await browserType.launch({
//       headless: true,
//       timeout: 30000,
//     });

//     const context = await browser.newContext({
//       viewport: { width: 1440, height: 900 },
//     });

//     const page = await context.newPage();

//     page.on("console", (message) => {
//       if (message.type() === "error") {
//         console.log(`[${browserName} Console]`, message.text());
//       }
//     });

//     page.on("pageerror", (error) => {
//       console.log(`[${browserName} Runtime]`, error.message);
//     });

//     page.on("requestfailed", (request) => {
//       console.log(
//         `[${browserName} Request Failed]`,
//         request.url(),
//         request.failure()?.errorText
//       );
//     });

//     page.on("crash", () => {
//       console.log(`[${browserName}] Page crashed`);
//     });

//     const response = await page.goto(
//       "https://nicholson-monument-company.vercel.app/",
//       {
//         waitUntil: "domcontentloaded",
//         timeout: 60000,
//       }
//     );

//     console.log(`${browserName} Status:`, response?.status());
//     console.log(`${browserName} Title:`, await page.title());

//     // Wait for the page to render
//     await page.waitForTimeout(5000);

//     await page.screenshot({
//       path: `${browserName}-screenshot.png`,
//       fullPage: true,
//     });

//     console.log(`${browserName} Screenshot saved`);

//   } catch (error) {
//     console.log(`${browserName} Failed:`, error.message);

//   } finally {
//     if (browser) {
//       await browser.close().catch(() => {});
//     }
//   }
// }

// (async () => {
//   await testBrowser(chromium, "Chrome");
//   await testBrowser(webkit, "Safari");
// })();


import { chromium ,webkit, firefox} from "playwright"

// (async () => {
//   const browser = await chromium.launch({
//     headless: false,
//   });

//   console.log("Chrome launched successfully");

//   const page = await browser.newPage();

//   await page.goto("https://example.com");

//   console.log("Page title:", await page.title());

//   await browser.close();
// })();


// const { chromium } = require("playwright");

// (async () => {
//   const browser = await chromium.launch({
//     headless: false,
//   });

//   const page = await browser.newPage();

//   page.on("console", msg => {
//     if (msg.type() === "error") {
//       console.log("Console Error:", msg.text());
//     }
//   });

//   page.on("pageerror", error => {
//     console.log("Runtime Error:", error.message);
//   });

//   page.on("requestfailed", request => {
//     console.log(
//       "Request Failed:",
//       request.url(),
//       request.failure()?.errorText
//     );
//   });

//   try {
//     console.log("Opening website...");

//     const response = await page.goto(
//       "https://nicholson-monument-company.vercel.app/",
//       {
//         waitUntil: "domcontentloaded",
//         timeout: 60000,
//       }
//     );

//     console.log("Status:", response?.status());
//     console.log("Title:", await page.title());
//     console.log("URL:", page.url());

//     await page.waitForTimeout(10000);

//     console.log("Website remained open for 10 seconds.");

//     await page.screenshot({
//       path: "chrome-debug.png",
//       fullPage: true,
//     });

//     // Keep browser open until manually closed
//     await page.pause();

//   } catch (error) {
//     console.log("Navigation Error:", error.message);
//     await page.pause();
//   }
// })();


// const { chromium, webkit, firefox } = require("playwright");

async function testBrowser(browserType, browserName) {
  const browser = await browserType.launch({
    headless: false,
  });

  try {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 },
    });

    page.on("console", msg => {
      if (msg.type() === "error") {
        console.log(`[${browserName}]`, msg.text());
      }
    });

    page.on("pageerror", error => {
      console.log(`[${browserName} Runtime]`, error.message);
    });

    const response = await page.goto(
      "https://nicholson-monument-company.vercel.app/",
      {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      }
    );

    console.log(`${browserName} Status:`, response?.status());
    console.log(`${browserName} Title:`, await page.title());

    await page.waitForTimeout(5000);

    await page.screenshot({
      path: `${browserName}-screenshot.png`,
      fullPage: true,
    });

  } catch (error) {
    console.log(`${browserName} Failed:`, error.message);
  } finally {
    await browser.close();
  }
}

(async () => {
  await testBrowser(chromium, "Chrome");
  await testBrowser(webkit, "Safari");
  await testBrowser(firefox, "Firefox");
})();