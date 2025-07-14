import {test, Browser, expect, Page, chromium,firefox,webkit, BrowserContext} from '@playwright/test'


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
   //await new Promise (() =>{});
   mybrowser.close();
})
test("brosertest", async() =>{
   const browser1:Browser = await chromium.launch({headless : false, args: ['--start-maximized']});
   const context:BrowserContext = await browser1.newContext({viewport: null, deviceScaleFactor: undefined });
   const homepage:Page = await context.newPage();
   await homepage.goto("https://youtube.com"); 
   await homepage.locator('[name = "search_query"]').fill("Mohak mangal");


})

test("brosercontext", async() =>{
   const browser:Browser = await chromium.launch({headless: false});
   const browsercontext1:BrowserContext = await browser.newContext();
   const page1:Page = await browsercontext1.newPage();

   await page1.goto("https://netflix.com");

})

test("auth_pop", async() =>{
    const browser = await chromium.launch();
    const page = await browser.newPage();

// const authhead = btoa("admin"+":"+"admin");
  //  page.setExtraHTTPHeaders({Authotisation : authhead });

    const res = await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    const tit = await page.title();
    await expect(page).toHaveTitle(tit);
})

//Locators 
