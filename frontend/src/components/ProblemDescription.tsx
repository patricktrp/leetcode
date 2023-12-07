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
        background-color: lightgreen;
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
                {problem?.hints.map(hint => <p>{hint}</p>)}
            </ProblemDescriptionContainer>

            {/* <div style={{ height: '50px', width: '100%', backgroundColor: '#ccc', marginBottom: '50px' }}>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h2 style={{ marginRight: '15px' }}>{problem?.problemName}</h2>
                        <div style={{ height: '25px', width: '25px', borderRadius: '8px', backgroundColor: 'lightgreen' }}></div>
                    </div>
                    <p>{problem?.description}</p>
                    <code style={{ display: 'block' }}>{problem?.sampleInput}</code>
                    <code style={{ display: 'block' }}>{problem?.sampleOutput}</code>
                    <h3>Hints:</h3>
                    <div>{problem?.hints.map(hint => <p key={hint}>{hint}</p>)}</div>
                    <code>{problem?.optimalComplexity}</code> */}
        </>
    );
}

export default ProblemDescription;