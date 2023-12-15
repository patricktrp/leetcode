import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL + "/problems",
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

export type ProblemOverview = {
    problemId: string,
    problemName: string,
    difficulty: string,
    categories: string[]
}

export const getProblems = async (): Promise<ProblemOverview[]> => {
    const res = await axiosInstance.get("")
    return res.data
}

export const getProblemById = async (problemId: string): Promise<Problem> => {
    const res = await axiosInstance.get("/" + problemId)
    return res.data
}