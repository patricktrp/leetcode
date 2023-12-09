import { useAuth0 } from '@auth0/auth0-react';
import { Outlet } from 'react-router-dom';
import MainNavbar from '../components/MainNavbar';

const Root = () => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();

    return (
        <>
            <MainNavbar isAuthenticated={isAuthenticated} login={loginWithRedirect} picture={user?.picture} />
            <Outlet />
        </>
    )
}

export default Root;