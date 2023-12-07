import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const useAccessToken = () => {
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();
    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        const fetchAccessToken = async () => {
            try {
                const token = await getAccessTokenSilently();
                setAccessToken(token);
                console.log("NEW TOKEN")
            } catch (error) {
                console.error('Error fetching access token:', error);
            }
        };

        if (isAuthenticated) {
            fetchAccessToken();
        }
    }, [getAccessTokenSilently, isAuthenticated]);

    return { accessToken };
};

export default useAccessToken;
