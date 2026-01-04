//beforeEach and afterEach for a group
import { test, expect } from '@playwright/test'
test.beforeEach(async() =>{
    console.log("Login into the Application!!!");
})
 
test.afterEach(async () =>{
    console.log("Logout from the Application!!!");
   
})
test.describe('Sanity Testcases', () => {
 
    test('First Test', async ({ page }) => {
        console.log("It is a First Test case!!!")
    })
 
    test('Second Test', async ({ page }) => {
        console.log("It is a Second Test case!!!")
    })
})
 
test.describe('Regression Testcases', () => {
    test('Third Test', async ({ page }) => {
        console.log("It is a Third Test case!!!")
    })
 
    test('Fourth Test', async ({ page }) => {
        console.log("It is a Fourth Test case!!!")
    })
})