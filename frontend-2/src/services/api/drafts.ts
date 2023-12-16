import { api } from "./axios-config"

export type Draft = {
    id: string
}

export const getDrafts = async (problemId: string, token: string, programmingLanguage: string): Promise<Draft[]> => {
    const res = await api.get(`/problems/${problemId}/drafts?programmingLanguage=${programmingLanguage}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data
}