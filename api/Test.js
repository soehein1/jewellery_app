const userAPI=require("./userAPI");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmEwNDIwZWQ1YzU1ZGYxOTkxMmNiYjAiLCJlbWFpbCI6ImRhbmlhbG1vaGFtbW9kODRAZ21haWwuY29tIiwicm9sZSI6InNob3BrZWVwZXIiLCJzdGF0dXMiOiJwZW5kaW5nIiwiaWF0IjoxNjU1NTM0NjY1LCJleHAiOjE2NTU1NDU0NjV9.uBy8kY7z8XOI9mIhyHeuZExPIC0pciPB-aiO24lQwfo"
const Test =async ()=>{
    try {
       await userAPI.fatchUser(token)
    } catch (error) {
        console.log(error.message)
    }
}
Test()