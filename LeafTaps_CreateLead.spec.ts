import test from "@playwright/test";

test("Create Lead in Leaftaps",async ({page})=>{
    //Navigate to the URL
    await page.goto("http://leaftaps.com/opentaps/control/main")
    //Enter User Name
    await page.locator('#username').fill("Demosalesmanager")
    //Enter Password
    await page.locator("[name='PASSWORD']").fill("crmsfa")
    //Click on Login button
    await page.locator(".decorativeSubmit").click()
    //Click on CRM/FA Button
    await page.locator("#button").click()
    await page.waitForTimeout(6000)
    // Click on leads
    await page.locator('a',{hasText:'Leads'}).click()
    // Click on creat Lead
    await page.locator('a',{hasText:'Create Lead'}).click()
    //Fill the form
    await page.locator("#createLeadForm_companyName").fill("Abc technologies") //Company Name
    await page.locator("#createLeadForm_firstName").fill("Test")//First Name
    await page.locator("#createLeadForm_lastName").fill("xyz")//lastName
    await page.locator("[name='personalTitle']").fill("Mr")//Salutation
    await page.locator("[name='generalProfTitle']").fill("This is for Testing")//fill the title
    await page.locator("[name='annualRevenue']").fill("124")//Fill the revenue
    await page.locator("[name='departmentName']").fill("Income tax")//Fill department
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("8999999999")//Fill Phone number
    await page.locator("[name='submitButton']").click()//Clcik on Create Lead



})