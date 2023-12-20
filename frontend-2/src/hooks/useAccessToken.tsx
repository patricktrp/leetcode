import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const useAccessToken = () => {
    const [accessToken, setAccessToken] = useState<string>()
    const { getAccessTokenSilently } = useAuth0()

    useEffect(() => {
        const fetchAccessToken = async () => {
            try {
                const token = await getAccessTokenSilently();
                setAccessToken(token);
            } catch (error) {
                console.log(error)
            }
        };
        fetchAccessToken()
    }, [getAccessTokenSilently])

    return { accessToken }
}