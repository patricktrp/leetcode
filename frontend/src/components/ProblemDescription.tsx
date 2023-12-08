import styled from "@emotion/styled";
import { Problem } from "../api/problems";

const Header = styled.div`
    background-color: #333;
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
        background-color: #22c55e;
    }
    &.medium {
        background-color: yellow;
    }
    &.hard {
        background-color: red;
    }
`

const SampleIoContainer = styled.div`
    padding: 15px;
    background-color: #333;
    border-radius: 5px;
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
                <SampleIoContainer>
                    <code>{problem?.sampleInput}</code>
                </SampleIoContainer>
                <h3>Sample Output</h3>
                <SampleIoContainer>
                    <code>{problem?.sampleOutput}</code>
                </SampleIoContainer>
                <h3>Hints</h3>
                {problem?.hints.map((hint, idx) =>
                    <SampleIoContainer style={{ marginBottom: '10px', cursor: 'pointer' }}>
                        <div>Hint {idx + 1}</div>
                    </SampleIoContainer>
                )}
                <SampleIoContainer style={{ marginBottom: '50px' }}>
                    <div>Optimal Time and Space Complexity</div>
                </SampleIoContainer>
            </ProblemDescriptionContainer>
        </>
    );
}

export default ProblemDescription;