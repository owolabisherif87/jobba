import http from "./http";

const getJob = async (payload) => {

    try {
        const job = await http.get(`/job/find/${payload}`)
       
        return job.data
    } catch ({response}) {
        console.error(response);

        return false;
    }
}


export default getJob