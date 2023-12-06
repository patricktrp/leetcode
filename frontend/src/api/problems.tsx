import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true
})

export const getProblems = async () => {
    const res = await axiosInstance.get("/problems");
    return res.data;
}

export const getProblemById = async (problemId: string) => {
    const res = await axiosInstance.get("/problems/" + problemId);
    return res.data;
}