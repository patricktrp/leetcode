import axios from 'axios';
import { String } from 'lodash';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true
});

export type Problem = {
    problemId: string,
    problemName: string,
    difficulty: string,
    description: string[],
    hints: string[],
    sampleInput: string,
    sampleOutput: string,
    optimalComplexity: string,
    placeHolderCode: {
        PYTHON: string,
        JAVASCRIPT: string
    },
    categories: string[]
}

export const getProblems = async () => {
    const res = await axiosInstance.get("/problems");
    return res.data;
}

export const getProblemById = async (problemId: string): Promise<Problem> => {
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

export const runSolution = async (token: string, problemId: string, programmingLanguage: string, code: String): Promise<any> => {
    const res = await axiosInstance.post(`/problems/${problemId}/run?programmingLanguage=${programmingLanguage}`, {
        code
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return res.data;
}