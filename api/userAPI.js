import axios from 'axios'

const userAPI={
    fatchUser : async ()=>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmEwNDIwZWQ1YzU1ZGYxOTkxMmNiYjAiLCJlbWFpbCI6ImRhbmlhbG1vaGFtbW9kODRAZ21haWwuY29tIiwicm9sZSI6InNob3BrZWVwZXIiLCJzdGF0dXMiOiJwZW5kaW5nIiwiaWF0IjoxNjU1NTYyNzY2LCJleHAiOjE2NTU1NzM1NjZ9.2rXrMke1tZKWgnhCNlGvHoK-PpICPjfS6LOenpK1GBo"

        try {
            const user = await axios.get('http://localhost:3000/api/user/me',{
            headers:{
                'authorization':'Bearer '+token,
            }
        })
        console.log(user)
        return user
        } catch (error) {
            console.log(error)
        }
    }
}
export default userAPI

