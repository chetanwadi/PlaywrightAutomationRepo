const{test,expect}=require("@playwright/test")

test.beforeAll(async()=>{
    console.log("Login into the application")
})
test.afterAll(async()=>{
    console.log("Logout from the application")
})
test('First test',async()=>{
    console.log("It is a First test case!!")
})
test('Second test',async()=>{
    console.log("It is a Second test case!!")
})
test('Third test',async()=>{
    console.log("It is a Third test case!!")
})
test('Fouth test',async()=>{
    console.log("It is a Fouth test case!!")
})