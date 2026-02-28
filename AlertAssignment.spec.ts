import test from "@playwright/test";
test("Handling the Alerts", async({page})=>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    //Click on Try It
    await page.frameLocator("//iframe[@id='iframeResult']").locator("//button[text()='Try it']").click();
    //click on alert
    await page.waitForTimeout(4000);
    page.on('dialog',alertType=>{
        const message=alertType.message();
        console.log(message)
        const type=alertType.type();
        console.log(type)
        if(type==='prompt'){
            alertType.accept();
        }else if(type==='confirm'){
            if(message==='Press a button!')
            {
                alertType.accept();
            }
        }
    })


})