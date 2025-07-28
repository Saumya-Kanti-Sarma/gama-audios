import puppeteer from 'puppeteer';
import { configDotenv } from 'dotenv';

configDotenv();
class downloader {
  #privateURI = process.env.PRIVATE_URI;

  async browser() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    page.goto(this.#privateURI);
    return { page, browser };
  };
}
export class mp3Downloader extends downloader {
  #inputLocator = process.env.INPUT_LOCATOR;
  #btnLocator = process.env.BUTTON_LOCATOR;
  #verifyingURI = process.env.VERIFYING_URI;
  constructor() {
    super();
  };

  async mp3Download(url) {
    const { page, browser } = await this.browser();
    page.locator(this.#inputLocator).fill(url);
    page.locator(this.#btnLocator).click();
    const allLinks = [];
    page.on("request", (req) => {
      const link = req.url();
      if (link.includes(this.#verifyingURI)) {
        allLinks.push(link);
      };
    })
    await new Promise(res => setTimeout(res, 5000));
    browser.close();
    return allLinks;
  };
}
