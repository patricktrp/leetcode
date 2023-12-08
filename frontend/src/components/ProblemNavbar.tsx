import styled from "@emotion/styled";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";


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
    return (
        <Navbar>
            <Link to="/" style={{ color: 'inherit' }}>
                <SiLeetcode size={20} />
            </Link>
            <div style={{ display: "flex" }}>
                <div></div>
                <button>submit</button>
                {/* <div>timer</div> */}
            </div>
            <div>Profile, Settings</div>
        </Navbar>
    )
}

export default ProblemNavbar;