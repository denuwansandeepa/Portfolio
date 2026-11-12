const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function runQA() {
  const screenshotsDir = path.join(__dirname, "../screenshots");
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  console.log("Launching headless browser for QA...");
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const page = await browser.newPage();
  const consoleLogs = [];
  const pageErrors = [];

  page.on("console", (msg) => {
    const text = msg.text();
    const type = msg.type();
    consoleLogs.push({ type, text });
    if (type === "error") {
      console.error(`[PAGE CONSOLE ERROR]: ${text}`);
    }
  });

  page.on("pageerror", (err) => {
    pageErrors.push(err.toString());
    console.error(`[PAGE RUNTIME ERROR]: ${err.toString()}`);
  });

  // Desktop Viewport
  await page.setViewport({ width: 1440, height: 900 });

  console.log("Navigating to http://localhost:3000 ...");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 35000 });

  // Wait for preloader to complete and curtain to reveal
  console.log("Waiting for preloader to finish...");
  await delay(3500);

  // 1. Hero
  const heroScreenshot = path.join(screenshotsDir, "01-desktop-hero.png");
  await page.screenshot({ path: heroScreenshot });
  console.log(`Saved: ${heroScreenshot}`);

  // 2. Featured Projects
  console.log("Scrolling to Featured Projects section...");
  await page.evaluate(() => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await delay(1500);

  const projectsScreenshot = path.join(screenshotsDir, "02-desktop-featured-projects.png");
  await page.screenshot({ path: projectsScreenshot });
  console.log(`Saved: ${projectsScreenshot}`);

  // 3. Test Archive Filter Tabs (Click "Mobile")
  console.log("Testing Archive filter tabs (clicking 'Mobile')...");
  const buttons = await page.$$("button");
  for (const btn of buttons) {
    const text = await page.evaluate((el) => el.textContent, btn);
    if (text && text.includes("Mobile")) {
      await btn.click();
      await delay(1000);
      break;
    }
  }

  const archiveFilterScreenshot = path.join(screenshotsDir, "03-desktop-archive-filtered.png");
  await page.screenshot({ path: archiveFilterScreenshot });
  console.log(`Saved: ${archiveFilterScreenshot}`);

  // 4. Click a project card to open case study modal
  console.log("Testing project modal open...");
  const projectCards = await page.$$(".interactive-card");
  if (projectCards.length > 0) {
    await projectCards[0].click();
    await delay(1000);
    const modalScreenshot = path.join(screenshotsDir, "04-project-modal.png");
    await page.screenshot({ path: modalScreenshot });
    console.log(`Saved: ${modalScreenshot}`);

    // Close modal
    const closeBtn = await page.$("button[aria-label='Close modal']");
    if (closeBtn) {
      await closeBtn.click();
    } else {
      await page.keyboard.press("Escape");
    }
    await delay(600);
  }

  // 5. Scroll to GitHub Section
  console.log("Scrolling to GitHub Stats...");
  await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll("h2"));
    const ghHeading = headings.find((h) => h.textContent.includes("Public GitHub"));
    if (ghHeading) ghHeading.scrollIntoView({ behavior: "instant" });
  });
  await delay(1200);
  const githubScreenshot = path.join(screenshotsDir, "05-desktop-github.png");
  await page.screenshot({ path: githubScreenshot });
  console.log(`Saved: ${githubScreenshot}`);

  // 6. Scroll to Experience
  console.log("Scrolling to Experience...");
  await page.evaluate(() => {
    const el = document.getElementById("experience");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await delay(1500);
  const experienceScreenshot = path.join(screenshotsDir, "06-desktop-experience.png");
  await page.screenshot({ path: experienceScreenshot });
  console.log(`Saved: ${experienceScreenshot}`);

  // 7. Scroll to Contact
  console.log("Scrolling to Contact...");
  await page.evaluate(() => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await delay(1500);
  const contactScreenshot = path.join(screenshotsDir, "07-desktop-contact.png");
  await page.screenshot({ path: contactScreenshot });
  console.log(`Saved: ${contactScreenshot}`);

  // 8. Test Mobile Viewport (390x844)
  console.log("Switching to Mobile Viewport (390x844)...");
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.evaluate(() => window.scrollTo(0, 0));
  await delay(1500);

  const mobileHeroScreenshot = path.join(screenshotsDir, "08-mobile-hero.png");
  await page.screenshot({ path: mobileHeroScreenshot });
  console.log(`Saved: ${mobileHeroScreenshot}`);

  await browser.close();

  console.log("\n================ QA RESULTS ================");
  console.log(`Total Console Messages: ${consoleLogs.length}`);
  console.log(`Total Page Errors: ${pageErrors.length}`);
  if (pageErrors.length > 0) {
    console.log("Page Errors:", pageErrors);
  } else {
    console.log("✓ ZERO runtime or page errors detected!");
  }
}

runQA().catch((err) => {
  console.error("QA script failed:", err);
  process.exit(1);
});
