import styled from "@emotion/styled";

const Navbar = styled.nav`
    height: 5vh;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    background-color: #121212;
    color: white;
`;

const ProblemNavbar = () => {
    return (
        <Navbar>
            <div>Leetcode</div>
            <div style={{ display: "flex" }}>
                <div></div>
                <button>submit</button>
                <div>timer</div>
            </div>
            <div>hi</div>
        </Navbar>
    )
}

export default ProblemNavbar;