import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Navbar = styled.nav`
    width: 100%;
    height: 5vh;
    background-color: lightsalmon;
`

const Root = () => {
    return (
        <div>
            <Navbar>

            </Navbar>
            <Outlet />
        </div>
    )
}

export default Root;