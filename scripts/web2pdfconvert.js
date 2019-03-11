const puppeteer = require('puppeteer');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const downloadFile = async url => {
  const { stdout, stderr } = await exec(`wget ${url}`);
  console.log('stdout :', stdout);
  console.log('stderr :', stderr);
};

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  try {
    await page.goto('https://www.web2pdfconvert.com/', { waitUntil: 'networkidle0' });
    await page.type('.js-url-input.url-input', 'https://arnabk.github.io/resume/', { delay: 100 });
    await page.click(".js-convert-btn.convert-btn[type=submit]");
    await page.waitForSelector('.js-download-btn.button', { visible: true });
    const url = await page.$eval('.js-download-btn.button', node => node.href);
    downloadFile(url);
  } catch(e) {
    console.error(e);
  } finally {
    browser.close();
  }
})();
