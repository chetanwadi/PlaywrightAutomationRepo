const{test,expect}=require("@playwright/test")

test("This is my first test", function disply(){
    console.log("This is my first playwright test case")
})
test("This is my second test", function(){
    console.log("This is my second playwright test case")
})
test("This is my third test", ()=>{
    console.log("This is my third playwright test case")
})
