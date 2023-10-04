import http from "./http";

const getJobs = async (page = 1, limit = null) => {

    try {
        const jobs = await http.get(`/job?page=${page}`)
    
        return jobs
    } catch ({response}) {
        console.error(response);

        return false;
    }
}


export default getJobs