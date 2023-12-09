import { useAuth0 } from '@auth0/auth0-react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const HeroSection = styled.section`
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-direction: column;
`;

const TextHighlight = styled.span`
    color: ${props => props.theme.colors.primary};
    transition: filter 300ms;

    &:hover {
        filter: brightness(1.1);
    }
`;

const Headline = styled.h1`
    fontSize: 40;
    margin-bottom: 5px;
`;

const Button = styled.button`
    background-color: ${props => props.theme.colors.primary};
    color: white;
    padding: 16px 32px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: filter 300ms;

    &:hover {
        filter: brightness(1.1);
    }
`;

const Home = () => {
    const navigate = useNavigate();
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return (
        <>
            <HeroSection>
                <Headline style={{ fontSize: 40, marginBottom: '5px' }}>Learn to code, <TextHighlight>level up your skills</TextHighlight>, and <TextHighlight>ace your coding interviews!</TextHighlight></Headline>
                <p style={{ color: '#bbb', fontSize: 18, marginBottom: '30px' }}>
                    Join our community of coders and start improving your algorithmic thinking and problem-solving skills.
                </p>
                <Button onClick={() => isAuthenticated ? navigate("/problems") : loginWithRedirect()}>Get Started</Button>
            </HeroSection>
        </>
    )
}

export default Home;