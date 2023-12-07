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

export const getDrafts = async (token: string, problemId: string, programmingLanguage: string) => {
    const res = await axiosInstance.get(`/problems/${problemId}/drafts?programmingLanguage=${programmingLanguage}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (res.status === 401) return [];
    return res.data;
}

export const updateDraft = async (token: string, problemId: string, programmingLanguage: string, draftId: number, code: string) => {
    const res = await axiosInstance.put(`/problems/${problemId}/drafts/${draftId}?programmingLanguage=${programmingLanguage}`, { code }, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    return res.data;
}