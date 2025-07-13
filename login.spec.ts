import {test, Browser, expect, Page, chromium,firefox,webkit} from '@playwright/test'


test("open site", async() =>{
    // type of mybrowser is Browser (not variable, or string)
    const mybrowser:Browser = await chromium.launch({headless: false});
    const mypage:Page = await mybrowser.newPage();
    await mypage.goto("https://www.saucedemo.com/");
    await mypage.locator('[id = "user-name"]');
    

});

test("Login", async() =>{
    const mybrowser:Browser = await chromium.launch({headless: false});
    const mypage:Page = await mybrowser.newPage();
    await mypage.goto("https://www.saucedemo.com/");
   await mypage.locator('[id = "user-name"]').fill("standard_user");
   await mypage.locator('[id = "password"]').fill("secret_sauce");
   await mypage.locator('[id = "login-button"]').click();
   //await mypage.screenshot({path:'homepage.png'});
   await expect(mypage).toHaveTitle("Swag Labs");
   
})
test("brosertest", async() =>{
   const browser1:Browser = await chromium.launch({headless : false});
   const homepage:Page = await browser1.newPage();
   await homepage.goto("https://youtube.com");
   await homepage.locator('[name = "search_query"]').fill("Mohak mangal");


})
