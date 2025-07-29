import puppeteer from 'puppeteer';
import Enc from './enc.util.js';
import { configDotenv } from 'dotenv';

configDotenv();
const enc = new Enc();

class downloader {
  #privateURI = process.env.PRIVATE_URI;

  async browser() {
    const browser = await puppeteer.launch({ headless: true });
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

  async downloadMp3(url) {
    const { page, browser } = await this.browser();

    await page.locator(this.#inputLocator).fill(url);
    await page.locator(this.#btnLocator).click();

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
};
