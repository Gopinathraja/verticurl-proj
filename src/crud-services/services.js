import axios from 'axios'
const url = "https://616523fa09a29d0017c88f7f.mockapi.io/api/v1/jobs";
export const addJobs = async (job) => {
    try {
        const result = await axios.post(url, job);

        return result.updateProductInApi
    } catch (e) {
       return false
    }
};
export const getJobs = async () => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        return data
    } catch (err) {
        return false
    }
};
export const updateJobs = async (data) => {
    const newUrl = `${url}/${data.id}`;
    try {
        await axios.put(newUrl, data);
        return data
    } catch (e) {
        return false
    }
};
export const deleteJobs = async (id)=>{
    const newUrl = `${url}/${id}`;
    try{
        await axios.delete(newUrl);
        return true
    }catch (e) {
        return false
    }
};