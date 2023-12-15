import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL + "/users/me",
    withCredentials: true
});

export type UserPreferences = {
    fontSize: string
}

export const getUserPreferences = async (token: string): Promise<UserPreferences> => {
    const res = await axiosInstance.get("/preferences", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data
}

export const updateUserPreferences = async (token: string, updatedPreferences: UserPreferences): Promise<void> => {
    await axiosInstance.put("/preferences", {
        updatedPreferences
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}