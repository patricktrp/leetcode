import { api } from "./axios-config"

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

export type TestResult = {
    passed: boolean,
    rawOutput: string,
    expectedOutput: any,
    actualOutput: any,
    input: any[]
}

export type CodeRunResult = {
    totalTestCases: number,
    passedTestCases: number,
    testResults: TestResult[]
}


export const getProblems = async (): Promise<ProblemOverview[]> => {
    const res = await api.get("/problems")
    return res.data
}

export const getProblemById = async (problemId: string): Promise<Problem> => {
    const res = await api.get(`/problems/${problemId}`)
    return res.data
}

export const runCode = async (problemId: string, code: string, programmingLanguage: string, token: string): Promise<CodeRunResult> => {
    const res = await api.post(`problems/${problemId}/run?programmingLanguage=${programmingLanguage}`, { code }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data
}