import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
import { FaGear, FaList } from "react-icons/fa6";
import { LuBrackets } from "react-icons/lu";
import { Link } from "react-router-dom";
import ImageWrapper from "./ImageWrapper";
import Timer from "./Timer";

const Navbar = styled.nav`
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    background-color: ${(props) => props.theme.colors.background};
    color: white;
    min-height: 60px;
`;

const IconWrapper = styled.div`
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme.colors.primary};
      }
`;

const StyledButton = styled.button`
    background-color: #22c55e;
    width: 120px;
    height: 40px;
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

const CtrlButton = styled.div`

padding: 0 10px;
height: 40px;
background-color: ${(props) => props.theme.colors.backgroundHighlight};
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;
border-radius: 5px;`
    ;

export type ProblemNavbarProps = {
    isAuthenticated: boolean
    login: () => void
}

const ProblemNavbar: React.FC<ProblemNavbarProps> = ({ isAuthenticated, login }) => {
    const { user } = useAuth0();
    return (
        <Navbar>
            <Link to="/problems" style={{ color: 'inherit' }}>
                <IconWrapper>
                    <LuBrackets size={24} />
                </IconWrapper>
            </Link>
            <div style={{ display: "flex", alignItems: 'center' }}>
                <CtrlButton>
                    <FaList size={20} />

                </CtrlButton>
                <StyledButton style={{ margin: '0 15px' }}>Submit</StyledButton>
                <Timer />
            </div>
            {isAuthenticated ?
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconWrapper><FaGear size={20} style={{ marginRight: '15px', cursor: 'pointer' }} /></IconWrapper>
                    <ImageWrapper picture={user?.picture} />
                </div> : <StyledButton onClick={login}>Sign In</StyledButton>
            }
        </Navbar>
    )
}

export default ProblemNavbar;