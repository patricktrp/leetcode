import { AppState, RedirectLoginOptions } from '@auth0/auth0-react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { LuBrackets } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import DropDownMenu from './DropdownMenu';
import ImageWrapper from './ImageWrapper';

const LINKS = [
    { name: 'Home', path: '/', authenticated: false },
    { name: 'Problems', path: '/problems', authenticated: false },
    { name: 'Dashboard', path: '/dashboard', authenticated: true },
];

const NavBar = styled.nav`
    height: 6vh;
    background-color: ${(props) => props.theme.colors.background};
    color: white;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`;

const SignInButton = styled.button`
    background-color: ${(props) => props.theme.colors.primary};
    width: 120px;
    color: white;
    padding: 11px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: filter 300ms;

    &:hover {
        filter: brightness(1.1);
    }
`;

const StyledLink = styled(NavLink)`
    color: inherit;
    text-decoration: none;
    margin: 0 10px;
    transition: color 300ms;

    &:hover {
        color: ${(props) => props.theme.colors.primary};
    }

    &.active {
        color: ${(props) => props.theme.colors.primary};
      }
`;

const IconWrapper = styled(NavLink)`
    cursor: pointer;
    transition: color 300ms;
    color: inherit;
    text-decoration: none;

    &:hover {
        color: ${(props) => props.theme.colors.primary};
    }
`;

export type MainNavbarProps = {
    isAuthenticated: boolean,
    picture?: string,
    login: (options?: RedirectLoginOptions<AppState>) => Promise<void>;
}

const MainNavbar: React.FC<MainNavbarProps> = ({ isAuthenticated, picture, login }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <NavBar>
            <IconWrapper to="/"><LuBrackets size={24} /></IconWrapper>
            <div>
                {LINKS.map(link => (!link.authenticated || isAuthenticated) && <StyledLink key={link.path} to={link.path}>{link.name}</StyledLink>)}
            </div>
            {isAuthenticated ? <ImageWrapper onClick={() => setIsMenuOpen(!isMenuOpen)} picture={picture} /> : <SignInButton onClick={() => login()}>Sign In</SignInButton>}
            {isMenuOpen && <DropDownMenu onClose={() => setIsMenuOpen(false)} />}
        </NavBar >
    );
};

export default MainNavbar;
