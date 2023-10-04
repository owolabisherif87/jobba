import http from "./http"

const useMentorshipSubmitter = async (payload) => {

    try {
       
        const res = await http.post("mentorship", payload)
      
        if(res.status == 200) return res.data
        
    } catch ({response}) {
        return response.data
    }
}

export default useMentorshipSubmitter

