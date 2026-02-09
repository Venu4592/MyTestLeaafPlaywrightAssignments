import test, { chromium, webkit } from "@playwright/test";
import { waitForDebugger } from "node:inspector";

test("Launch Webkit and Edge Browser",async()=>{
// Launching Edge browser
    const edgeBorwser=await chromium.launch({
        channel:'msedge',
        headless:false
    });
    const edgeContext=await edgeBorwser.newContext();
    const edgePage=await edgeContext.newPage();
//Navigate to the URL
    await edgePage.goto('https://www.redbus.in/')
//Get the values from the browser
    const edgeTitle=await edgePage.title()
    await edgePage.waitForTimeout(2000);
    const edgeUrl=await edgePage.url();
    await edgePage.waitForTimeout(2000);
//Print the Values to the console
    console.log("The title of the page in Edge browser is: ",edgeTitle);
    console.log("The URL of the page in Edge browser is: ",edgeUrl);
console.log("***************************************************************************")
// Launching webkit browser
    const webkitBrowser=await webkit.launch({
        headless:false
    });

    const webkitContext=await webkitBrowser.newContext();
    const webkitPage= await webkitContext.newPage();
    // Navigate to the URL
    await webkitPage.goto('https://www.flipkart.com')
    //Get the values from the browser
    const flpKrtTitle=await webkitPage.title()
    await webkitPage.waitForTimeout(2000)
    const flpKrtURL=await webkitPage.url()
    await webkitPage.waitForTimeout(2000)

    //Print the Values
    console.log("The Title of FlipKart on WebKit is: ",flpKrtTitle)
    console.log("The URL of FlipKart on WebKit is: ",flpKrtURL)



})