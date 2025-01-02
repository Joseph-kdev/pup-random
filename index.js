const puppeteer = require("puppeteer")

const postQoute = async() => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    })
    
    const page = await browser.newPage()
    await page.setDefaultNavigationTimeout(0)
    
    await page.goto("https://twitter-qoutes-bot.onrender.com", {
        waitUntil: "domcontentloaded"
    })
    
    const postButton = await page.$(".button")
    
    await postButton.click()
    console.log("Qoute posted successfully")
    
    await browser.close()

}

postQoute()
