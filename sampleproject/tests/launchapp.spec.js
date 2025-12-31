const{test,expect}=require('@playwright/test')

test("Launch w3school application", async({page})=> {
await page.goto("https://www.w3schools.com/")
await page.waitForTimeout(4000)

//Capture title
const title=await page.title()
console.log("Title of the web pplication:"+title)

//Capture URL
const url=await page.url()
console.log("URL of the application:"+url)

await expect(page).toHaveTitle("W3Schools Online Web Tutorials")
await expect(page).toHaveURL("https://www.w3schools.com/")

})
