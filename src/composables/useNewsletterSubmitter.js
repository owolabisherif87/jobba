import http from "./http"

const useNewsletterSubmitter = async (payload) => {

    try {
       
        const res = await http.post("newsletter", payload)
      
        if(res.status == 200) return res.data
        
    } catch ({response}) {
        return response.data
    }
}


export default useNewsletterSubmitter

