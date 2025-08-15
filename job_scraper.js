const { chromium } = require('playwright');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Navigate to Google search for demonstration
  await page.goto('https://www.google.com/search?q=Playwright+Automation+jobs');

  // Dummy data, replace selectors and extraction logic for real site
  const jobs = [
    { title: "Playwright Automation Engineer", company: "TechNova", location: "Bangalore" },
    { title: "QA Tester - Playwright", company: "InnoSoft", location: "Hyderabad" },
    { title: "SDET with Playwright", company: "CodeWorks", location: "Remote" },
    { title: "Automation Developer", company: "NextGen", location: "Chennai" }
  ];

  const csvWriter = createCsvWriter({
    path: 'playwright_jobs.csv',
    header: [
      { id: 'title', title: 'Title' },
      { id: 'company', title: 'Company' },
      { id: 'location', title: 'Location' }
    ]
  });

  await csvWriter.writeRecords(jobs);
  console.log("✅ Jobs saved to playwright_jobs.csv");

  await browser.close();
})();
