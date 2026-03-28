import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Capture console messages
  const consoleMessages = [];
  page.on('console', msg => {
    const text = msg.text();
    consoleMessages.push(text);
    console.log('BROWSER CONSOLE:', text);
  });

  // Navigate to the app
  await page.goto('http://localhost:5182');

  // Wait for data to load
  await page.waitForTimeout(5000);

  console.log('\n=== All console messages ===');
  consoleMessages.forEach(msg => console.log(msg));

  // Check the page content
  const categoryButtons = await page.$$eval('button', buttons =>
    buttons.map(b => b.textContent).filter(t => t && t.includes('词根'))
  );
  console.log('\n=== Category buttons ===');
  console.log(categoryButtons);

  // Keep browser open for inspection
  console.log('\nBrowser is open. Press Ctrl+C to close.');
  await page.waitForTimeout(30000);

  await browser.close();
}

main().catch(console.error);
