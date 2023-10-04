import http from "./http"

const handleLogIn = async (payload) => {

    try {
       
        const res = await http.post("auth/login", payload)
      
        return res.data
        
    } catch ({response}) {

        return response.data
    }
}


export default handleLogIn