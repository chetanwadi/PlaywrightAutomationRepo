const{test,expect}=require("@playwright/test")

test("Asseration First",async()=>{
    expect(35).toBe(35)
})
test("Asseration Second",async()=>{
    expect(35.12).toBe(35.12)
})
test("Asseration Third",async()=>{
    expect(200).toBeGreaterThanOrEqual(100)
})
test("Asseration Fourth",async()=>{
    expect("S G Software Testing").toContain("Testing")
})
