import { test, expect } from '@playwright/test'
 
test.describe('Functional Testcases', () => {
 
    test('First Test', async ({ page }) => {
        console.log("It is a First Test case!!!")
    })
 
    test('Second Test', async ({ page }) => {
        console.log("It is a Second Test case!!!")
    })
})

//if we anth to skip any test
test.describe.skip('Sanity Testcases', () => {
 
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
 
 
 