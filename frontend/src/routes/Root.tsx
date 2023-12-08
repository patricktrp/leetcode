import { useAuth0 } from '@auth0/auth0-react';
import styled from '@emotion/styled';
import { Link, Outlet } from 'react-router-dom';
import ImageWrapper from '../components/ImageWrapper';

const Navbar = styled.nav`
    height: 5vh;
    background-color: pink;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    `

const PhotoWrapper = styled.div`
    width: 3.5vh;
    height: 3.5vh;
    border-radius: 50%; 
    overflow: hidden; 
`

const Root = () => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();

    return (
        <div>
            <Navbar>
                <div>Leetcode</div>
                <Link to="/problems">problems</Link>
                {isAuthenticated ? <ImageWrapper picture={user?.picture} /> : <button onClick={() => loginWithRedirect()}>login</button>}
            </Navbar>
            <Outlet />
        </div>
    )
}

export default Root;