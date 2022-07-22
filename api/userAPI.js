import axios from 'axios'

const UserAPI={
    fatchUserByToken : async ()=>{
        try {
            const user = await axios.get('http://localhost:3000/api/user/me',{
            headers:{
                'authorization':'Bearer '+token,
            }
        })
        return user
        } catch (error) {
            console.log(error)
        }
    }
}
export default UserAPI

