import http from "./http"

const useJobSumbitter = async (payload) => {

    try {
       
        const res = await http.post("job", payload)
      
        if(res.status == 200) return true
        
    } catch (error) {
        return false
    }
}


export default useJobSumbitter

