import styled from "@emotion/styled";
import Collapsible from 'react-collapsible';
import { Problem } from "../api/problems";

const Header = styled.div`
    background-color: ${props => props.theme.colors.backgroundHighlight};
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px;
`

const DifficultySquare = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    margin-left: 15px;

    &.easy {
        background-color: ${props => props.theme.colors.problemEasy};
    }
    &.medium {
        background-color: ${props => props.theme.colors.problemMedium};
    }
    &.hard {
        background-color: ${props => props.theme.colors.problemHard};
    }
`

const HighlightContainer = styled.div`
    padding: 15px;
    background-color: #333;
    border-radius: 5px;
    margin-bottom: 10px;
`

const ProblemDescriptionContainer = styled.div`
    padding: 15px 20px;
    overflow: auto;
    height: 100%;
    box-sizing: border-box;
`;

export type ProblemDescriptionProps = {
    problem: Problem
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem }) => {
    return (
        <>
            <Header>
                <h3>{problem?.problemName}</h3>
                <DifficultySquare className={problem?.difficulty.toLowerCase()}></DifficultySquare>
            </Header>
            <ProblemDescriptionContainer>
                {problem?.description.map(paragraph => <p>{paragraph}</p>)}
                <h3>Sample Input</h3>
                <HighlightContainer>
                    <code>{problem?.sampleInput}</code>
                </HighlightContainer>
                <h3>Sample Output</h3>
                <HighlightContainer>
                    <code>{problem?.sampleOutput}</code>
                </HighlightContainer>
                <h3>Hints</h3>
                {problem?.hints.map((hint, idx) =>
                    <HighlightContainer>
                        <Collapsible transitionTime={200} trigger={<div style={{ width: '100%', height: '100%', cursor: 'pointer' }}>Hint {idx + 1}</div>}>
                            <div style={{ marginTop: '15px' }}>
                                {hint}
                            </div>
                        </Collapsible>
                    </HighlightContainer>
                )}
                <HighlightContainer style={{ marginBottom: '50px' }}>
                    <Collapsible transitionTime={200} trigger={<div style={{ width: '100%', height: '100%', cursor: 'pointer', }}>Optimal Time and Space Complexity</div>}>
                        <div style={{ marginTop: '15px' }}>
                            {problem?.optimalComplexity}
                        </div>
                    </Collapsible>
                </HighlightContainer>
            </ProblemDescriptionContainer>
        </>
    );
}

export default ProblemDescription;