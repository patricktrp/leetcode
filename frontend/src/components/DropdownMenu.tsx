import { useAuth0 } from '@auth0/auth0-react';
import styled from '@emotion/styled';
import { FaArrowRightFromBracket, FaGear } from "react-icons/fa6";


const DropDown = styled.div`
    position: absolute;
    top: max(60px, 6vh);
    right: 15px;
    width: 200px;
    background-color: #333;
    border-radius: 5px;
    z-index: 9999;
`;

const DropDownItem = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px; 
    cursor: pointer;
    height: 50px;

    &:hover {
        background-color: ${(props) => props.theme.colors.backgroundLight};
    }
`;

const IconWrapper = styled.div`
    margin-right: 15px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 9998;
`;

export type DropDownMenuProps = {
    onClose: () => void
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout();
        onClose();
    }

    return (
        <>
            <Backdrop onClick={onClose} />
            <DropDown>
                <DropDownItem onClick={handleLogout}>
                    <IconWrapper>
                        <FaGear />
                    </IconWrapper>
                    <div>Settings</div>
                </DropDownItem>
                <DropDownItem onClick={handleLogout}>
                    <IconWrapper>
                        <FaArrowRightFromBracket />
                    </IconWrapper>
                    <div>Signout</div>
                </DropDownItem>
            </DropDown>
        </>
    )
}

export default DropDownMenu;