const puppeteer = require("puppeteer");

const postQuote = async() => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
        headless: true
    });
    
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    
    try {
        await page.goto("https://twitter-qoutes-bot.onrender.com", {
            waitUntil: "domcontentloaded"
        });
        
        const postButton = await page.$(".button");
        if (!postButton) {
            throw new Error("Post button not found");
        }
        
        await postButton.click();
        console.log("Quote posted successfully");
    } catch (error) {
        console.error("Error:", error);
        throw error;
    } finally {
        await browser.close();
    }
}

postQuote().catch(console.error);
