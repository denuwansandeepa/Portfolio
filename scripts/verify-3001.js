const puppeteer = require("puppeteer");
const path = require("path");

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

async function verify() {
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  page.on("response", (res) => {
    if (res.status() >= 400) {
      console.log(`[HTTP ${res.status()}] ${res.url()}`);
    }
  });

  const targetUrl = "http://localhost:3001";
  console.log(`Connecting to ${targetUrl}...`);
  await page.goto(targetUrl, { waitUntil: "networkidle2", timeout: 45000 });
  await delay(4000);

  // Scroll smoothly through the page so all IntersectionObservers trigger
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 300) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
  });
  await delay(1500);

  // Check computed background color of body to verify Tailwind CSS loaded
  const bodyBg = await page.evaluate(() => {
    return window.getComputedStyle(document.body).backgroundColor;
  });
  console.log("Computed body background-color:", bodyBg);

  // Check every image on the page
  const imageReport = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll("img"));
    return imgs.map((img) => ({
      alt: img.alt,
      src: img.getAttribute("src"),
      complete: img.complete,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
    }));
  });

  console.table(imageReport);

  // Scroll to Featured Projects Row 1 & 2
  await page.evaluate(() => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "instant" });
    window.scrollBy(0, 180);
  });
  await delay(1200);
  await page.screenshot({ path: path.join(__dirname, "../screenshots/featured-cards-top.png") });

  // Scroll to Featured Projects Row 3 & 4 (Mini Service Request & Dearo Islamic)
  await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll("h3"));
    const target = headings.find((h) => h.textContent.includes("Mini Service Request"));
    if (target) {
      target.scrollIntoView({ behavior: "instant", block: "center" });
    }
  });
  await delay(1200);
  await page.screenshot({ path: path.join(__dirname, "../screenshots/featured-cards-bottom.png") });

  await browser.close();
}

verify().catch((e) => {
  console.error(e);
  process.exit(1);
});
