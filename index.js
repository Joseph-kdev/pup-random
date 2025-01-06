const puppeteer = require("puppeteer")
// const cron = require("node-cron")

const postQuote = async() => {
    const browser = await puppeteer.launch({
          args: ['--no-sandbox'],
          executablePath: process.env.PUPPETEER_EXEC_PATH, // set by docker container
          headless: false,
    })
    
    const page = await browser.newPage()
    await page.setDefaultNavigationTimeout(0)
    
    await page.goto("https://twitter-qoutes-bot.onrender.com", {
        waitUntil: "domcontentloaded"
    })
    
    const postButton = await page.$(".button")
    
    await postButton.click()
console.log("Quote posted successfully")
    
    await browser.close()

}

postQuote()

// cron.schedule("*/5 * * * *", async () => {
//     try {
//         postQuote()
//         console.log('Running task at:', new Date().toISOString());
//     } catch (error) {
//         console.error('Task failed:', error);
//     }
// })
