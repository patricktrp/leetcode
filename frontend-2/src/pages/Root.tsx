import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar"
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import axios from 'axios'

const Root = () => {
    const { getAccessTokenSilently } = useAuth0()

    const [data, setData] = useState<string>("");

    useEffect(() => {
        console.log("MOUNT")
        const fetchData = async () => {
            try {
                const res = await getAccessTokenSilently()
                setData(res);
                axios.interceptors.request.use(function (config) {
                    config.headers.Authorization = res;
                    return config;
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts

        // If you need to clean up any resources when the component unmounts, you can return a cleanup function
        return () => {
            // Cleanup logic here (if needed)
        };
    }, []);
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Root;