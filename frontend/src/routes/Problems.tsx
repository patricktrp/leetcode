import styled from '@emotion/styled';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { ProblemOverview, getProblems } from '../api/problems';

const ProblemListContainer = styled.div`
    display: flex;
    align-items: center;
    // justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    margin: 0 20px;
`;

const ProblemContainer = styled(Link)`
    background-color: ${props => props.theme.colors.backgroundHighlight};
    color: white;
    text-decoration: none;
    // width: 20%;
    width: 300px;
    height: 55px;
    padding-left: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

const DifficultySquare = styled.div`
    width: 25px;
    height: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-left: 15px;

    &.easy {
        background-color: ${props => props.theme.colors.problemEasy};
        border-right: 8px #20ad2b solid;
    }
    &.medium {
        background-color: ${props => props.theme.colors.problemMedium};
        border-right: 8px #257dbc solid;
    }
    &.hard {
        background-color: ${props => props.theme.colors.problemHard};
        border-right: 8px #c62121 solid;
    }
`

const problemQuery = () => ({
    queryKey: ['problems'],
    queryFn: async () => getProblems()
})

export const loader = (queryClient: QueryClient) => async () => {
    const query = problemQuery();

    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
}

const Problems = () => {
    const { data: problems } = useQuery(problemQuery())
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', color: 'white' }}>

            <ProblemListContainer>
                <h2>Easy</h2>
                {problems.filter((problem: ProblemOverview) => problem.difficulty === "EASY").map((problem: ProblemOverview) =>
                    <ProblemContainer to={problem.problemId} key={problem.problemId}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#34ed43', marginRight: '10px' }}></div>
                            <div>{problem.problemName} </div>
                        </div>
                        <DifficultySquare className={problem.difficulty.toLowerCase()}></DifficultySquare>
                    </ProblemContainer>
                )}
            </ProblemListContainer>
            <ProblemListContainer>
                <h2>Medium</h2>
                {problems.filter((problem: ProblemOverview) => problem.difficulty === "MEDIUM").map((problem: ProblemOverview) =>
                    <ProblemContainer to={problem.problemId} key={problem.problemId}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#34ed43', marginRight: '10px' }}></div>
                            <div>{problem.problemName} </div>
                        </div>
                        <DifficultySquare className={problem.difficulty.toLowerCase()}></DifficultySquare>
                    </ProblemContainer>
                )}
            </ProblemListContainer>
            <ProblemListContainer>
                <h2>Hard</h2>
                {problems.filter((problem: ProblemOverview) => problem.difficulty === "HARD").map((problem: ProblemOverview) =>
                    <ProblemContainer to={problem.problemId} key={problem.problemId}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#34ed43', marginRight: '10px' }}></div>
                            <div>{problem.problemName} </div>
                        </div>
                        <DifficultySquare className={problem.difficulty.toLowerCase()}></DifficultySquare>
                    </ProblemContainer>
                )}
            </ProblemListContainer>
        </div>
    )
}

export default Problems;