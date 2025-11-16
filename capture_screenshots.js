const puppeteer = require('puppeteer');
const path = require('path');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  // Navigate to localhost
  await page.goto('http://localhost:8000', { waitUntil: 'networkidle0' });

  // Screenshot 1: Hero section (scroll = 0)
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(500);
  await page.screenshot({ path: '/home/safa/Documents/repos/guidedweb/fixed_hero.png' });
  console.log('Screenshot 1 saved: fixed_hero.png (scroll position: 0)');

  // Screenshot 2: Mission section (scroll ~1000px)
  await page.evaluate(() => window.scrollTo(0, 1000));
  await sleep(500);
  await page.screenshot({ path: '/home/safa/Documents/repos/guidedweb/fixed_mission.png' });
  console.log('Screenshot 2 saved: fixed_mission.png (scroll position: 1000px)');

  // Screenshot 3: Services section (scroll ~2000px)
  await page.evaluate(() => window.scrollTo(0, 2000));
  await sleep(500);
  await page.screenshot({ path: '/home/safa/Documents/repos/guidedweb/fixed_services.png' });
  console.log('Screenshot 3 saved: fixed_services.png (scroll position: 2000px)');

  // Screenshot 4: Featured work (scroll ~3000px)
  await page.evaluate(() => window.scrollTo(0, 3000));
  await sleep(500);
  await page.screenshot({ path: '/home/safa/Documents/repos/guidedweb/fixed_work.png' });
  console.log('Screenshot 4 saved: fixed_work.png (scroll position: 3000px)');

  await browser.close();
  console.log('\nAll screenshots captured successfully!');
})();
