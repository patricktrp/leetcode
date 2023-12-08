import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";
import ImageWrapper from "./ImageWrapper";

const Navbar = styled.nav`
    height: 5vh;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    background-color: #121212;
    color: white;
    min-height: 60px;
`;

const ProblemNavbar = () => {
    const { user } = useAuth0();
    return (
        <Navbar>
            <Link to="/" style={{ color: 'inherit' }}>
                <SiLeetcode size={20} />
            </Link>
            <div style={{ display: "flex" }}>
                <div></div>
                <button style={{ backgroundColor: '#333', padding: '8px 15px', width: '120px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}><b>Submit</b></button>
                {/* <div>timer</div> */}
            </div>
            <ImageWrapper picture={user?.picture} />
        </Navbar>
    )
}

export default ProblemNavbar;