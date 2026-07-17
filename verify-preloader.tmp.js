const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  const errors = [];
  const failed = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
  page.on("requestfailed", (req) => failed.push(req.url() + " :: " + (req.failure()?.errorText || "")));
  page.on("response", (res) => { if (res.status() >= 400) failed.push(res.status() + " " + res.url()); });

  const t0 = Date.now();
  await page.goto("http://localhost:3000", { waitUntil: "load" });
  console.log("load event at ms:", Date.now() - t0);

  // Poll every 500ms for up to 10s to see when active/sessionFlag/exit actually happen.
  for (let i = 0; i < 20; i++) {
    const s = await page.evaluate(() => ({
      htmlHasClass: document.documentElement.classList.contains("sc-preload"),
      preloaderPresent: !!document.querySelector(".sc-preloader"),
      sessionFlag: sessionStorage.getItem("sc-dived"),
      overflow: getComputedStyle(document.documentElement).overflow,
      readyState: document.readyState,
    }));
    console.log(`t+${(Date.now() - t0)}ms`, JSON.stringify(s));
    if (!s.preloaderPresent) break;
    await page.waitForTimeout(500);
  }

  await page.screenshot({ path: "shot-final.png" });
  console.log("FAILED REQUESTS:", JSON.stringify(failed, null, 2));
  console.log("PAGE ERRORS:", JSON.stringify(errors, null, 2));

  await browser.close();
})();
