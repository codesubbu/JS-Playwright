import { Browser, chromium, expect, Page } from "@playwright/test";

(async() =>{
    const mybrowser:Browser = await chromium.launch({headless: false});
        const mypage:Page = await mybrowser.newPage();
        await mypage.goto("https://www.saucedemo.com/");
       await mypage.locator('[id = "user-name"]').fill("standard_user");
       await mypage.locator('[id = "password"]').fill("secret_sauce");
       await mypage.locator('[id = "login-button"]').click();
       //await mypage.screenshot({path:'homepage.png'});
       await expect(mypage).toHaveTitle("Swag Labs");
       await mypage.context().storageState({path: "/auth/storageState.json"});
       await mybrowser.close();
       await console.log("end");
}) ();