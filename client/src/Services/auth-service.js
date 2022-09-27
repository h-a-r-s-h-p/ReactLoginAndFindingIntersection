import axios from "axios"

const API_URL = "http://localhost:3001/"

class AuthService{
    async login(email, password){
        console.log("Inside login")
        return await axios.post(API_URL + "signin", {
            email,
            password
        })
        .then(response=>{
            console.log("response inside authservice = ", response)
            if(response.data.accessToken){
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data
        })
        .catch(err=>{
            console.log("error while logging in",err)
        })
    }

    logout(){
        localStorage.removeItem("user");
    }

    async register(name, email, password){
        const response = await axios.post(API_URL+"jwtregister",{
            name,
            email,
            password
        })
        const data = response.data
        console.log("inside register axios, response= ", data)
        return data
    }

    getLoggedUser(){
        return JSON.parse(localStorage.getItem("user"))
    }

}

export default new AuthService