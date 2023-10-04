import http from "./http"

const handleLogout = async (payload) => {

    try {
        
        const token = JSON.parse(localStorage.getItem("token"))

        const res = await http.post("auth/logout", payload, {headers: {"Authorization": `Bearer ${token}`}})
        
        const {status, message} = res.data

        if(status) {
            localStorage.removeItem("token")
        }
        
        return res.data
        
    } catch ({response}) {
        console.log(response)
        return false
    }
}


export default handleLogout